-- quotes.lua
-- Price checks: asks the ZephFlip API for an item's live prices, margin, ROI,
-- ZephScore and volume, and turns the answer into a few lines for the panel.
--
-- Uses the same /api/quote endpoint as the ZephFlip Alt1 app. Only one lookup
-- runs at a time; if another is asked for meanwhile, the newest one runs next
-- (older pending requests are simply replaced).

local json = require("json")

local Quotes = {}
Quotes.__index = Quotes

-- 1234567 -> "1,234,567" (exact, never rounded)
local function formatGp(amount)
    if amount == nil then
        return "-"
    end
    local negative = amount < 0
    local digits = tostring(math.floor(math.abs(amount)))
    local withCommas = digits:reverse():gsub("(%d%d%d)", "%1,"):reverse():gsub("^,", "")
    return (negative and "-" or "") .. withCommas
end
Quotes.FormatGp = formatGp

-- Make an item name safe to put in a URL query ("Tumeken's light" -> "Tumeken%27s%20light").
local function urlEncode(text)
    return (text:gsub("[^%w%-%._~]", function(c)
        return string.format("%%%02X", c:byte())
    end))
end
Quotes.UrlEncode = urlEncode

-- Turn a /api/quote response body into display lines.
function Quotes.Format(body, askedFor)
    local name = json.ReadString(body, "item") or askedFor
    if json.ReadBool(body, "complete") == false then
        return { name, "No complete live price right now." }
    end

    local lines = {}
    local score = json.ReadNumber(body, "zephscore")
    local grade = json.ReadString(body, "grade")
    if score ~= nil and grade ~= nil then
        table.insert(lines, name .. "  [" .. grade .. " " .. formatGp(score) .. "/100]")
    else
        table.insert(lines, name)
    end

    -- Flip direction: buy at the instant-sell price, sell at the instant-buy price.
    table.insert(lines, "Buy " .. formatGp(json.ReadNumber(body, "instant_sell"))
        .. "  >  Sell " .. formatGp(json.ReadNumber(body, "instant_buy")))

    local margin = json.ReadNumber(body, "margin")
    local roi = json.ReadNumber(body, "roi")
    table.insert(lines, "Margin after tax " .. formatGp(margin)
        .. (roi and ("  ROI " .. roi .. "%") or ""))

    local hourly = json.ReadNumber(body, "volume")
    local daily = json.ReadNumber(body, "volume_24h")
    if hourly or daily then
        table.insert(lines, "Volume " .. formatGp(hourly) .. "/hr  " .. formatGp(daily) .. "/24h")
    end

    local move = json.ReadNumber(body, "movement_pct")
    if move ~= nil then
        table.insert(lines, "Recent move " .. (move > 0 and "+" or "") .. move .. "%")
    end
    return lines
end

-- onResult(lines : [String]) is called with the formatted answer or an error line.
function Quotes.new(baseUrl, getToken, onResult)
    local self = setmetatable({}, Quotes)
    self.baseUrl = baseUrl
    self.getToken = getToken
    self.onResult = onResult
    self.inFlight = false
    self.pendingName = nil
    return self
end

function Quotes:Lookup(itemName)
    itemName = (itemName or ""):match("^%s*(.-)%s*$")
    if itemName == "" then
        return
    end
    if self.inFlight then
        self.pendingName = itemName
        return
    end
    local token = self.getToken()
    if token == nil or token == "" then
        self.onResult({ "Paste your $link token to check prices." })
        return
    end

    self.inFlight = true
    self.onResult({ "Checking " .. itemName .. "..." })
    local request = HTTPRequest.new(self.baseUrl, "/api/quote?item=" .. urlEncode(itemName))
    request:AddHeader("Authorization", "Bearer " .. token)
    request:Get(function(finished)
        self.inFlight = false
        self:HandleResponse(itemName, finished)
        -- Run the newest lookup that was asked for while this one was busy.
        local nextName = self.pendingName
        self.pendingName = nil
        if nextName ~= nil then
            self:Lookup(nextName)
        end
    end)
end

function Quotes:HandleResponse(itemName, request)
    local code = request.responseCode or 0
    if code >= 200 and code < 300 then
        self.onResult(Quotes.Format(request.data, itemName))
    elseif code == 401 then
        self.onResult({ "Token rejected. Run $link in Discord and paste the new token." })
    elseif code >= 400 and code < 500 then
        self.onResult({ json.ReadString(request.data, "error") or ("No price for " .. itemName) })
    else
        self.onResult({ "ZephFlip unreachable, try again in a moment." })
    end
end

return Quotes
