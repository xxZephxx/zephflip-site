-- ZephFlip for RuneScape 3
--
-- Watches your own Grand Exchange offers and reports them to your ZephFlip
-- account, so trades show up on the dashboard and in Discord without typing
-- them in by hand:
--   * an offer that buys or sells items is reported as Bought (NIB) / Sold (NIS)
--     for exactly the quantity that filled, at the price it filled at;
--   * (optional) a newly placed offer is reported as a Buy/Sell offer (PB/PS)
--     in the matching slot, so ZephFlip's slot tracker follows it.
--
-- The plugin only reads your offers. It never places, changes or collects
-- offers, and it never acts in the game for you.
--
-- Files:
--   tracker.lua   decides what changed in a GE slot (pure logic, unit tested)
--   reporter.lua  sends reports to the ZephFlip API with a saved retry queue
--   panel.lua     the in-game window
--   json.lua      tiny JSON helper (the plugin API has none)

local Tracker = require("tracker")
local Reporter = require("reporter")
local Panel = require("panel")

-- Saved settings ---------------------------------------------------------------
-- Settings are shared by every character on this computer, except the
-- account number and the last-seen GE slots, which are saved per character.

local settings = {
    token = PersistentDB:GetString("token") or "",
    autoReport = PersistentDB:GetBool("autoReport"),
    trackOffers = PersistentDB:GetBool("trackOffers"),
}
if settings.autoReport == nil then settings.autoReport = true end
if settings.trackOffers == nil then settings.trackOffers = true end

-- Per-character state, filled in by activateCharacter().
local character = {
    name = nil,        -- display name of the logged-in character
    account = 1,       -- which ZephFlip account this character is (slot "3.2")
    slots = {},        -- last snapshot per slot, keyed "s1".."s8"
}

local panel     -- created below
local reporter  -- created below

-- Small helpers -------------------------------------------------------------

-- 1234567 -> "1,234,567"
local function formatGp(amount)
    local digits = tostring(math.floor(amount))
    local withCommas = digits:reverse():gsub("(%d%d%d)", "%1,"):reverse()
    return (withCommas:gsub("^,", ""))
end

local function slotsKey(name) return "slots:" .. name end
local function accountKey(name) return "account:" .. name end

local function saveSlots()
    if character.name then
        PersistentDB:SetStructuredData(slotsKey(character.name), character.slots)
    end
end

local function refreshStatus(message)
    if message then
        panel:SetStatus(message)
        return
    end
    local who = character.name or "not logged in"
    local state
    if settings.token == "" then
        state = "Paste your $link token below."
    elseif not settings.autoReport then
        state = "Paused - trades are not reported."
    else
        state = "Watching your GE offers."
    end
    local waiting = reporter:Pending()
    if waiting > 0 then
        state = state .. " " .. waiting .. " waiting to send."
    end
    panel:SetStatus(who .. " (account " .. character.account .. ")<br>" .. state)
end

-- Reading the Grand Exchange ---------------------------------------------------

-- Copy the fields we need out of a GrandExchangeOffer into a plain table.
local function snapshotOf(offer)
    if offer == nil or offer.stage == GrandExchangeOfferStage.EMPTY then
        return Tracker.Snapshot(nil)
    end
    local item = offer.item
    return Tracker.Snapshot(
        offer.stage, offer.type,
        item and item.id, item and item.name,
        offer.price, offer.itemCount, offer.soldCount, offer.goldFromSale)
end

-- Turn one tracker report into an /api/report request.
local function queueReport(report, slot)
    if report.kind == "placed" and not settings.trackOffers then
        return
    end
    local fields = {
        type = report.type,
        item = report.item,
        price = report.price,
        quantity = report.quantity,
    }
    local verb = ({ NIB = "Bought", NIS = "Sold", PB = "Buy offer", PS = "Sell offer" })[report.type]
    local label = verb .. " " .. formatGp(report.quantity) .. "x " .. report.item
        .. " @ " .. formatGp(report.price)
    if report.kind == "placed" then
        fields.slot = Tracker.SlotLabel(slot, character.account)
        label = label .. " (slot " .. fields.slot .. ")"
    end
    reporter:Enqueue(fields, label)
end

-- Compare a slot with what we saw last time and report anything new.
local function handleSlot(slot, offer)
    if character.name == nil then
        return -- not in game yet; activateCharacter() will rescan every slot
    end
    local key = "s" .. slot
    local current = snapshotOf(offer)
    local reports = Tracker.Diff(character.slots[key], current)
    character.slots[key] = current
    saveSlots()

    -- While paused we still remember the slot, so switching back on doesn't
    -- file everything that happened during the pause.
    if settings.autoReport and settings.token ~= "" then
        for _, report in ipairs(reports) do
            queueReport(report, slot)
        end
    end
    refreshStatus()
end

-- Look at every slot, e.g. right after logging in.
local function scanAllSlots()
    for slot = 1, GrandExchange.MaxOffers() do
        handleSlot(slot, GrandExchange.GetOffer(slot))
    end
end

-- Load the saved state for whoever is logged in, then catch up on the GE.
local function activateCharacter()
    if not Player.IsAvailable() then
        return
    end
    local entity = Player.GetEntity()
    local name = entity and entity.displayName
    if name == nil or name == "" or name == character.name then
        return
    end
    character.name = name
    character.account = PersistentDB:GetInt(accountKey(name)) or 1
    -- Missing for a character's first run: every slot is then just remembered,
    -- and only later changes are reported (no double-filing old trades).
    character.slots = PersistentDB:GetStructuredData(slotsKey(name)) or {}
    panel:SetAccount(character.account)
    scanAllSlots()
    refreshStatus()
end

-- Panel actions --------------------------------------------------------------

local callbacks = {}

function callbacks.onSaveToken(token)
    settings.token = (token or ""):match("^%s*(.-)%s*$")
    PersistentDB:SetString("token", settings.token)
    reporter:TokenChanged()
    refreshStatus(settings.token == "" and "Token cleared." or "Token saved.")
end

function callbacks.onAccountChanged(number)
    character.account = number
    if character.name then
        PersistentDB:SetInt(accountKey(character.name), number)
    end
    refreshStatus()
end

function callbacks.onToggleAuto()
    settings.autoReport = not settings.autoReport
    PersistentDB:SetBool("autoReport", settings.autoReport)
    panel:SetToggles(settings.autoReport, settings.trackOffers)
    refreshStatus()
end

function callbacks.onToggleOffers()
    settings.trackOffers = not settings.trackOffers
    PersistentDB:SetBool("trackOffers", settings.trackOffers)
    panel:SetToggles(settings.autoReport, settings.trackOffers)
end

function callbacks.onRetry()
    reporter:RetryNow()
    refreshStatus("Retrying...")
end

-- Start up ---------------------------------------------------------------------

panel = Panel.new(callbacks)
panel:SetToken(settings.token)
panel:SetToggles(settings.autoReport, settings.trackOffers)

reporter = Reporter.new(
    Plugin.urls.zephflip,
    function() return settings.token end,
    function(ok, message)
        panel:AddActivity((ok and "OK  " or "!!  ") .. message)
        refreshStatus()
    end)

if not Plugin.HasPermission(PluginPermissions.httpAccess) then
    refreshStatus("ZephFlip needs the httpAccess permission to send your trades. "
        .. "Allow it in the plugin settings.")
end

-- A GE slot changed (placed, partly filled, finished, collected or aborted).
Event.GrandExchangeOfferUpdated.Subscribe("zephflipOffer", function(event)
    activateCharacter()
    handleSlot(event.slot, event.listing)
end)

-- Logged in, or switched character: load that character's state.
Event.GameStateChanged.Subscribe("zephflipLogin", function(event)
    if event.newState == GameState.GAME then
        activateCharacter()
    elseif event.newState == GameState.LOGINSCREEN or event.newState == GameState.LOBBY then
        character.name = nil
        refreshStatus()
    end
end)

-- Every server tick: send the next queued report if one is due.
Event.ServerLogic.Subscribe("zephflipSend", function()
    if Plugin.HasPermission(PluginPermissions.httpAccess) then
        reporter:Tick()
    end
end)

-- The plugin may be switched on while already in game.
activateCharacter()
refreshStatus()
