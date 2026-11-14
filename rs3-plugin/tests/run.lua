-- Offline tests for the ZephFlip RS3 plugin.
--
--   lua5.4 rs3-plugin/tests/run.lua
--
-- The real plugin runs inside the RuneScape client, which we can't start here.
-- These tests cover the pure logic directly, then load main.lua against a small
-- fake of the client API (Event, GrandExchange, HTTPRequest, PersistentDB, ui...)
-- to check the whole flow: GE update -> report queued -> POST sent -> retry.

local here = arg[0]:match("^(.*)/[^/]*$") or "."
package.path = here .. "/../ZephFlip/?.lua;" .. package.path

local failures, passed = 0, 0
local function check(cond, name)
    if cond then
        passed = passed + 1
    else
        failures = failures + 1
        print("FAIL: " .. name)
    end
end
local function eq(a, b, name)
    check(a == b, name .. " (got " .. tostring(a) .. ", want " .. tostring(b) .. ")")
end

---------------------------------------------------------------------------
-- json.lua
---------------------------------------------------------------------------
local json = require("json")
eq(json.EncodeObject({ type = "NIB", item = 'Rune "2h"', price = 5.0, quantity = 3 }),
   '{"item":"Rune \\"2h\\"","price":5,"quantity":3,"type":"NIB"}', "encode")
eq(json.ReadString('{"error": "invalid or missing token"}', "error"), "invalid or missing token", "read")
eq(json.ReadString('{"error":"a \\"b\\" \\u2014 c"}', "error"), 'a "b" — c', "read escapes")
eq(json.ReadString('{"ok":true}', "error"), nil, "read missing")
eq(json.ReadString(nil, "error"), nil, "read nil body")

eq(json.ReadNumber('{"volume_24h": 900, "volume": 12, "roi": 4.25}', "volume"), 12, "number not confused with longer key")
eq(json.ReadNumber('{"roi": 4.25}', "roi"), 4.25, "float number")
eq(json.ReadNumber('{"margin": -300}', "margin"), -300, "negative number")
eq(json.ReadNumber('{"margin": null}', "margin"), nil, "null number")
eq(json.ReadBool('{"complete": false}', "complete"), false, "bool false")

---------------------------------------------------------------------------
-- tracker.lua
---------------------------------------------------------------------------
local T = require("tracker")
local function snap(t, price, count, sold, gold, item)
    return T.Snapshot(2, t, item or 1, "Tumeken's light", price, count, sold, gold)
end
local empty = T.Snapshot(nil)

-- First sighting: remember, never report.
eq(#T.Diff(nil, snap(T.BUY, 100, 10, 4, 0)), 0, "first sighting reports nothing")
-- Empty -> new buy offer: placed.
local r = T.Diff(empty, snap(T.BUY, 100, 10, 0, 0))
eq(#r, 1, "placed count"); eq(r[1].type, "PB", "placed type"); eq(r[1].quantity, 10, "placed qty")
-- Partial fill of a known offer, with change refunded (bought at 95).
r = T.Diff(snap(T.BUY, 100, 10, 0, 0), snap(T.BUY, 100, 10, 4, 20))
eq(#r, 1, "fill count"); eq(r[1].type, "NIB", "fill type"); eq(r[1].quantity, 4, "fill qty")
eq(r[1].price, 95, "fill price uses refunded change")
-- Next fill: only the new 6 units.
r = T.Diff(snap(T.BUY, 100, 10, 4, 20), snap(T.BUY, 100, 10, 10, 20))
eq(r[1].quantity, 6, "second fill qty"); eq(r[1].price, 100, "no extra change -> offer price")
-- Sell filled above ask.
r = T.Diff(snap(T.SELL, 100, 2, 0, 0), snap(T.SELL, 100, 2, 2, 210))
eq(r[1].type, "NIS", "sell type"); eq(r[1].price, 105, "sell price from proceeds")
-- Gold collected (dropped) at the same time as a fill -> offer price.
r = T.Diff(snap(T.SELL, 100, 4, 2, 210), snap(T.SELL, 100, 4, 3, 0))
eq(r[1].price, 100, "collected gold falls back to offer price")
-- Nonsense gold never produces a price on the wrong side of the limit.
eq(T.FillPrice(T.SELL, 100, 1, 0, 50), 100, "sell below ask rejected")
eq(T.FillPrice(T.BUY, 100, 1, 0, 500), 100, "buy refund larger than price rejected")
-- Offer placed and instantly filled between two updates.
r = T.Diff(empty, snap(T.SELL, 100, 5, 5, 500))
eq(#r, 2, "instant fill: placed + filled"); eq(r[2].quantity, 5, "instant fill qty")
-- Collected (slot emptied): nothing to report.
eq(#T.Diff(snap(T.SELL, 100, 5, 5, 500), empty), 0, "collect reports nothing")
-- No change: nothing.
eq(#T.Diff(snap(T.BUY, 100, 10, 4, 0), snap(T.BUY, 100, 10, 4, 0)), 0, "no change")
eq(T.SlotLabel(3, 1), "3", "slot label acc 1"); eq(T.SlotLabel(3, 2), "2.3", "slot label acc 2 is account first")

---------------------------------------------------------------------------
-- main.lua against a fake client
---------------------------------------------------------------------------
local db = {}
PersistentDB = {}
for _, suffix in ipairs({ "", "Bool", "Int", "String", "StructuredData" }) do
    PersistentDB["Get" .. suffix] = function(_, k) return db[k] end
    PersistentDB["Set" .. suffix] = function(_, k, v) db[k] = v; return true end
end

local subscribers = {}
Event = setmetatable({}, { __index = function(t, name)
    local e = { Subscribe = function(_, fn) subscribers[name] = fn end }
    rawset(t, name, e); return e
end })
local function fire(name, payload) subscribers[name](payload) end

GameState = { GAME = 30, LOGINSCREEN = 10, LOBBY = 20 }
GrandExchangeOfferStage = { EMPTY = 0, ADDED = 2 }
local offers = {}
GrandExchange = { MaxOffers = function() return 8 end, GetOffer = function(s) return offers[s] end }
local loggedIn = true
Player = {
    IsAvailable = function() return loggedIn end,
    GetEntity = function() return { displayName = "Zeph" } end,
}
local hasHttp = true
PluginPermissions = { httpAccess = "httpAccess" }
Plugin = { urls = { zephflip = "https://api.test" }, HasPermission = function() return hasHttp end }

local sent = {}         -- every POST the plugin made
local gets = {}         -- every GET the plugin made
local getResponse = { code = 200, data = '{"item":"Tumeken\'s light","complete":true,"instant_buy":2100000000,"instant_sell":2050000000,"margin":8000000,"roi":0.39,"zephscore":81,"grade":"A","volume":3,"volume_24h":40,"movement_pct":-1.2}' }
local nextResponse = { code = 200, data = '{"ok":true}' }
HTTPRequest = { new = function(base, path)
    local req = { headers = {} }
    function req:AddHeader(k, v) self.headers[k] = v end
    function req:Get(cb)
        table.insert(gets, { url = base .. path, headers = self.headers })
        self.responseCode = getResponse.code
        self.data = getResponse.data
        cb(self)
    end
    function req:Post(body, cb)
        table.insert(sent, { url = base .. path, body = body, headers = self.headers })
        self.responseCode = nextResponse.code
        self.data = nextResponse.data or ""
        self.timedOut = nextResponse.timedOut
        cb(self)
    end
    return req
end }

-- Minimal UI fake: every component accepts any property and method call.
local function component()
    return setmetatable({ headerText = {}, sprite = {}, text = {}, containerSprite = {} },
        { __index = function() return function() end end })
end
local componentType = { new = component }
Vector4 = { new = function(r, g, b, a) return { r, g, b, a } end }
ui = {
    Interfaces = { GetComponent = component },
    GroupBox = componentType, Layer = componentType, Rectangle = componentType, Text = componentType,
    Button = componentType, InputField = componentType,
    AlignMode = {}, Hook = {}, GroupBoxHeaderAlignMode = {},
    TextContentVisibilityMode = {}, InputFieldFilterMode = {}, InputFieldActionResult = {},
}
id = { Font = {}, StyleSheet = {}, Component = {} }

local function offer(t, price, count, sold, gold)
    return { stage = 2, type = t, item = { id = 42, name = "Tumeken's light" },
             price = price, itemCount = count, soldCount = sold, goldFromSale = gold }
end
local function ticks(n) for _ = 1, n do fire("ServerLogic") end end

-- Existing offer before the plugin was ever installed: must not be reported.
offers[1] = offer(0, 2000000000, 1, 1, 0)
db.token = "tok123"
dofile(here .. "/../ZephFlip/main.lua")
ticks(3)
eq(#sent, 0, "pre-existing offers are not reported on first run")
check(db["slots:Zeph"] ~= nil and db["slots:Zeph"].s1 ~= nil, "slots saved per character")

-- Place a sell offer in slot 2, then it fills.
offers[2] = offer(1, 2100000000, 1, 0, 0)
fire("GrandExchangeOfferUpdated", { slot = 2, listing = offers[2] })
ticks(1)
eq(#sent, 1, "placed offer sent")
eq(sent[1].url, "https://api.test/api/report", "report url")
eq(sent[1].headers.Authorization, "Bearer tok123", "auth header")
check(sent[1].body:find('"type":"PS"') and sent[1].body:find('"slot":2[,}]') and sent[1].body:find('"account":1[,}]'),
    "PS sends account and slot as numbers: " .. sent[1].body)

eq(#gets, 1, "placing an offer runs a price check")
eq(gets[1].url, "https://api.test/api/quote?item=Tumeken%27s%20light", "quote url is encoded")
eq(gets[1].headers.Authorization, "Bearer tok123", "quote auth header")

offers[2] = offer(1, 2100000000, 1, 1, 2150000000)
fire("GrandExchangeOfferUpdated", { slot = 2, listing = offers[2] })
ticks(1)
eq(#sent, 2, "fill sent")
check(sent[2].body:find('"type":"NIS"') and sent[2].body:find('"price":2150000000'), "NIS at fill price: " .. sent[2].body)

-- Server down: report stays queued (and saved), retried later.
nextResponse = { code = 503, data = "" }
offers[3] = offer(0, 5000, 100, 0, 0)
fire("GrandExchangeOfferUpdated", { slot = 3, listing = offers[3] })
ticks(1)
eq(#sent, 3, "attempted while down")
check(db.reportQueue ~= nil and db.reportQueue:find("PB"), "queue persisted while down")
ticks(10)
eq(#sent, 3, "waits before retrying")
nextResponse = { code = 200, data = '{"ok":true}' }
ticks(60)
eq(#sent, 4, "retried after delay")
eq(db.reportQueue, "", "queue emptied after success")

-- A rejected report (unknown item) is dropped so it can't block the queue.
nextResponse = { code = 404, data = '{"error":"no item called that"}' }
offers[4] = offer(0, 10, 1, 0, 0)
fire("GrandExchangeOfferUpdated", { slot = 4, listing = offers[4] })
ticks(1)
eq(db.reportQueue, "", "4xx report dropped")

-- Bad token: hold the queue until a new token is saved.
nextResponse = { code = 401, data = '{"error":"invalid or missing token"}' }
offers[5] = offer(0, 10, 1, 0, 0)
fire("GrandExchangeOfferUpdated", { slot = 5, listing = offers[5] })
ticks(1)
local before = #sent
ticks(200)
eq(#sent, before, "no retries with a rejected token")

-- Paused (auto-report saved as OFF, fresh session): a new offer is remembered
-- but not queued. The queue still holds only the report held back by the 401.
nextResponse = { code = 200, data = '{"ok":true}' }
db.autoReport = false
dofile(here .. "/../ZephFlip/main.lua")
offers[6] = offer(0, 10, 1, 0, 0)
fire("GrandExchangeOfferUpdated", { slot = 6, listing = offers[6] })
local queuedLines = 0
for _ in (db.reportQueue or ""):gmatch("[^\n]+") do queuedLines = queuedLines + 1 end
eq(queuedLines, 1, "paused: nothing new queued")
check(db["slots:Zeph"].s6 ~= nil, "paused: slot still remembered")

---------------------------------------------------------------------------
-- quotes.lua formatting
---------------------------------------------------------------------------
local Quotes = require("quotes")
local lines = Quotes.Format(getResponse.data, "tume")
eq(lines[1], "<col=ece7f6>Tumeken's light</col>  <col=e6c583>[A 81/100]</col>", "quote title")
eq(lines[2], "Buy  2.05b", "quote buy")
eq(lines[3], "Sell 2.1b", "quote sell")
eq(lines[4], "Net margin <col=63d79b>8m</col>", "quote margin green")
eq(lines[5], "ROI <col=63d79b>0.39%</col>   Move <col=f2726f>-1.2%</col>", "quote roi + move")
eq(lines[6], "Vol 3/hr   40/24h", "quote volume")
eq(#lines, 6, "quote fits in 6 lines")
-- Real, non-round prices (from the first in-game test) stay exact.
lines = Quotes.Format('{"item":"Tumeken\'s Light","complete":true,"instant_buy":2775341380,"instant_sell":2737162892,"margin":-17328339,"roi":-0.63,"zephscore":28,"grade":"D","volume":1,"volume_24h":25,"movement_pct":0.0}', "tume")
eq(lines[2], "Buy  2,737,162,892", "real buy price exact")
eq(lines[4], "Net margin <col=f2726f>-17,328,339</col>", "negative margin red")
lines = Quotes.Format('{"item":"Rare thing","complete":false}', "rare")
eq(lines[2], "No complete live price right now.", "incomplete quote")
eq(Quotes.FormatGp(-1234567), "-1,234,567", "negative gp")
eq(Quotes.FormatGp(999), "999", "small gp")
eq(Quotes.CompactGp(2150000000), "2.15b", "compact b")
eq(Quotes.CompactGp(9412), "9.412k", "compact k exact")
eq(Quotes.CompactGp(192555555), "192,555,555", "compact falls back when it would round")
eq(Quotes.CompactGp(250), "250", "compact small")
eq(Quotes.CompactGp(2000000), "2m", "compact whole")
eq(Quotes.CompactGp(-300000), "-300k", "compact negative")

-- Errors and the "one at a time, newest wins" queue.
local shown
local q = Quotes.new("https://api.test", function() return "tok" end, function(l) shown = l end)
getResponse = { code = 404, data = '{"error":"No item matches \'zzz\'"}' }
q:Lookup("zzz")
eq(shown[1], "No item matches 'zzz'", "quote 404 shows server error")
q = Quotes.new("https://api.test", function() return "" end, function(l) shown = l end)
q:Lookup("abc")
eq(shown[1], "Paste your $link token to check prices.", "quote without token")

print(string.format("%d passed, %d failed", passed, failures))
os.exit(failures == 0 and 0 or 1)
