-- reporter.lua
-- Sends trade reports to the ZephFlip API, one at a time, in order.
--
-- Reports wait in a queue that is saved to PersistentDB, so nothing is lost if
-- the API is briefly down or the game is closed before a report goes out.
-- The queue is only drained from Reporter:Tick (called on every server tick),
-- which keeps all network activity in one predictable place.

local json = require("json")

local Reporter = {}
Reporter.__index = Reporter

local QUEUE_KEY = "reportQueue"
local REPORT_PATH = "/api/report"
local TICKS_PER_SECOND = 1 / 0.6          -- ServerLogic fires every 0.6 s
local FIRST_RETRY_TICKS = math.floor(30 * TICKS_PER_SECOND)
local MAX_RETRY_TICKS = math.floor(300 * TICKS_PER_SECOND)

-- baseUrl:  Plugin.urls entry for the ZephFlip API
-- getToken: function returning the member's $link token (or "")
-- onResult: function(ok : Bool, message : String) called after each report
function Reporter.new(baseUrl, getToken, onResult)
    local self = setmetatable({}, Reporter)
    self.baseUrl = baseUrl
    self.getToken = getToken
    self.onResult = onResult
    self.queue = {}          -- array of { body = <json string>, label = <string> }
    self.inFlight = nil      -- the HTTPRequest currently being sent, if any
    self.tick = 0
    self.retryAtTick = 0
    self.retryDelay = FIRST_RETRY_TICKS
    self.blockedOnToken = false
    self:Load()
    return self
end

-- Queue persistence ---------------------------------------------------------
-- Each queued report is stored as "label<TAB>json" on its own line. JSON from
-- json.lua never contains raw tabs or newlines, so this round-trips safely.

function Reporter:Save()
    local lines = {}
    for _, entry in ipairs(self.queue) do
        table.insert(lines, entry.label .. "\t" .. entry.body)
    end
    PersistentDB:SetString(QUEUE_KEY, table.concat(lines, "\n"))
end

function Reporter:Load()
    local saved = PersistentDB:GetString(QUEUE_KEY)
    if saved == nil or saved == "" then
        return
    end
    for line in saved:gmatch("[^\n]+") do
        local label, body = line:match("^(.-)\t(.*)$")
        if body then
            table.insert(self.queue, { label = label, body = body })
        end
    end
end

-- Public API ----------------------------------------------------------------

-- Add a report. fields is a flat table matching the /api/report body,
-- label is a short human description shown in the panel.
function Reporter:Enqueue(fields, label)
    table.insert(self.queue, { body = json.EncodeObject(fields), label = label })
    self:Save()
end

function Reporter:Pending()
    return #self.queue
end

-- Call when the member saves a new token: retry straight away.
function Reporter:TokenChanged()
    self.blockedOnToken = false
    self:RetryNow()
end

function Reporter:RetryNow()
    self.retryAtTick = 0
    self.retryDelay = FIRST_RETRY_TICKS
end

-- Called on every ServerLogic event. Sends the next report when allowed.
function Reporter:Tick()
    self.tick = self.tick + 1
    if self.inFlight ~= nil or #self.queue == 0 or self.blockedOnToken then
        return
    end
    if self.tick < self.retryAtTick then
        return
    end
    local token = self.getToken()
    if token == nil or token == "" then
        self.blockedOnToken = true
        self.onResult(false, "Paste your $link token to start reporting.")
        return
    end
    self:Send(self.queue[1], token)
end

-- Internals -----------------------------------------------------------------

function Reporter:Send(entry, token)
    local request = HTTPRequest.new(self.baseUrl, REPORT_PATH)
    request:AddHeader("Authorization", "Bearer " .. token)
    request:AddHeader("Content-Type", "application/json")
    self.inFlight = request
    request:Post(entry.body, function(finished)
        self.inFlight = nil
        self:HandleResponse(entry, finished)
    end)
end

-- Decide what to do with the report at the head of the queue.
--   2xx          -> sent; drop it from the queue.
--   401          -> token is wrong; keep it and wait for a new token.
--   other 4xx    -> the API rejected this report (e.g. unknown item); drop it
--                   so one bad report can't block the rest, and say why.
--   5xx / no reply -> keep it and retry later with a growing delay.
function Reporter:HandleResponse(entry, request)
    local code = request.responseCode or 0
    local serverError = json.ReadString(request.data, "error")

    if code >= 200 and code < 300 then
        self:Pop()
        self.retryDelay = FIRST_RETRY_TICKS
        self.onResult(true, entry.label)
    elseif code == 401 then
        self.blockedOnToken = true
        self.onResult(false, "Token rejected. Run $link in Discord and paste the new token.")
    elseif code >= 400 and code < 500 then
        self:Pop()
        self.onResult(false, entry.label .. ": " .. (serverError or ("HTTP " .. code)))
    else
        self.retryAtTick = self.tick + self.retryDelay
        self.retryDelay = math.min(self.retryDelay * 2, MAX_RETRY_TICKS)
        local why = request.timedOut and "timed out"
            or (code > 0 and ("HTTP " .. code))
            or (request.errorInfo ~= nil and request.errorInfo ~= "" and request.errorInfo)
            or "no connection"
        self.onResult(false, "ZephFlip unreachable (" .. why .. "), will retry. "
            .. #self.queue .. " waiting.")
    end
end

function Reporter:Pop()
    table.remove(self.queue, 1)
    self:Save()
end

return Reporter
