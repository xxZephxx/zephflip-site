-- quotes.lua
-- Price checks: asks the ZephFlip API for an item's live prices, margin, ROI,
-- ZephScore and volume, and turns the answer into a few lines for the panel.
--
-- Uses the same /api/quote endpoint as the ZephFlip Alt1 app. Only one lookup
-- runs at a time; if another is asked for meanwhile, the newest one runs next
-- (older pending requests are simply replaced).

local json = require("json")
local Theme = require("theme")

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

-- Short form for the "Recent reports" list, still exact: 2150000000 -> "2.15b",
-- 9412 -> "9.412k". If the short form would have to round, the full number
-- with commas is used instead (192555555 -> "192,555,555").
function Quotes.CompactGp(amount)
    if amount < 0 then
        return "-" .. Quotes.CompactGp(-amount)
    end
    local units = { { 1e12, "t" }, { 1e9, "b" }, { 1e6, "m" }, { 1e3, "k" } }
    for _, unit in ipairs(units) do
        local size, suffix = unit[1], unit[2]
        if amount >= size then
            if amount % (size / 1000) ~= 0 then
                return formatGp(amount)
            end
            local short = string.format("%.3f", amount / size):gsub("%.?0+$", "")
            return short .. suffix
        end
    end
    return formatGp(amount)
end

-- Make an item name safe to put in a URL query ("Tumeken's light" -> "Tumeken%27s%20light").
local function urlEncode(text)
    return (text:gsub("[^%w%-%._~]", function(c)
        return string.format("%%%02X", c:byte())
    end))
end
Quotes.UrlEncode = urlEncode

-- Colour a gp/percent value green when positive and red when negative.
local function gainLoss(value, text)
    if value == nil or value == 0 then
        return text
    end
    return Theme.Tag(value > 0 and "profit" or "loss", text)
end

-- Turn a /api/quote response body into display lines (with colour tags:
-- item name in white, grade in gold, margin/ROI/move in green or red).
-- At most 6 short lines, so the result fits the panel without wrapping.
function Quotes.Format(body, askedFor)
    local name = Theme.Tag("ink", json.ReadString(body, "item") or askedFor)
    if json.ReadBool(body, "complete") == false then
        return { name, "No complete live price right now." }
    end

    local lines = {}
    local score = json.ReadNumber(body, "zephscore")
    local grade = json.ReadString(body, "grade")
    if score ~= nil and grade ~= nil then
        table.insert(lines, name .. "  " .. Theme.Tag("gold", "[" .. grade .. " " .. formatGp(score) .. "/100]"))
    else
        table.insert(lines, name)
    end

    -- One value per line: real prices are rarely round, so they often show as
    -- full numbers (2,737,162,892) and two on one line would wrap.
    -- Flip direction: buy at the instant-sell price, sell at the instant-buy price.
    local buyAt = json.ReadNumber(body, "instant_sell")
    local sellAt = json.ReadNumber(body, "instant_buy")
    table.insert(lines, "Buy  " .. (buyAt and Quotes.CompactGp(buyAt) or "-"))
    table.insert(lines, "Sell " .. (sellAt and Quotes.CompactGp(sellAt) or "-"))

    local margin = json.ReadNumber(body, "margin")
    table.insert(lines, "Net margin " .. gainLoss(margin, margin and Quotes.CompactGp(margin) or "-"))

    -- ROI and recent move share a line; both are short percentages.
    local roi = json.ReadNumber(body, "roi")
    local move = json.ReadNumber(body, "movement_pct")
    local percents = {}
    if roi ~= nil then
        table.insert(percents, "ROI " .. gainLoss(roi, roi .. "%"))
    end
    if move ~= nil then
        table.insert(percents, "Move " .. gainLoss(move, (move > 0 and "+" or "") .. move .. "%"))
    end
    if #percents > 0 then
        table.insert(lines, table.concat(percents, "   "))
    end

    local hourly = json.ReadNumber(body, "volume")
    local daily = json.ReadNumber(body, "volume_24h")
    if hourly or daily then
        table.insert(lines, "Vol " .. formatGp(hourly) .. "/hr   " .. formatGp(daily) .. "/24h")
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
