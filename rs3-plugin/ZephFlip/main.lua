-- ZephFlip for RuneScape 3
--
-- Watches your own Grand Exchange offers and reports them to your ZephFlip
-- account, so trades show up on the dashboard and in Discord without typing
-- them in by hand:
--   * an offer that buys or sells items is reported as Bought (NIB) / Sold (NIS)
--     for exactly the quantity that filled, at the price it filled at;
--   * (optional) a newly placed offer is reported as a Buy/Sell offer (PB/PS)
--     in the matching slot, so ZephFlip's slot tracker follows it.
-- It also does price checks: type any item into the panel, or just place a GE
-- offer, and it shows ZephFlip's live prices, margin, ROI, ZephScore and volume.
--
-- The plugin only reads your offers. It never places, changes or collects
-- offers, and it never acts in the game for you.
--
-- Files:
--   tracker.lua   decides what changed in a GE slot (pure logic, unit tested)
--   reporter.lua  sends reports to the ZephFlip API with a saved retry queue
--   quotes.lua    price checks against the ZephFlip API
--   panel.lua     the in-game window
--   theme.lua     ZephFlip colours (same as zephflip.com)
--   json.lua      tiny JSON helper (the plugin API has none)

local Tracker = require("tracker")
local Reporter = require("reporter")
local Quotes = require("quotes")
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
local quotes    -- created below

-- Small helpers -------------------------------------------------------------

-- Item names longer than this are cut short in the "Recent reports" list,
-- so each report fits on one line of the panel.
local MAX_ITEM_CHARS = 16

local function shortItemName(name)
    if #name <= MAX_ITEM_CHARS then
        return name
    end
    return name:sub(1, MAX_ITEM_CHARS - 2) .. ".."
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
    if not Plugin.HasPermission(PluginPermissions.httpAccess) then
        -- Without it nothing can reach ZephFlip, so say that first.
        state = "Allow internet access in this plugin's settings."
    elseif settings.token == "" then
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
    -- Short one-line label for the panel, e.g. "Sold 1 Tumeken's light 2.15b"
    -- or "Sell offer s2 1 Tumeken's light 2.1b".
    local verb = ({ NIB = "Bought", NIS = "Sold", PB = "Buy offer", PS = "Sell offer" })[report.type]
    if report.kind == "placed" then
        fields.slot = Tracker.SlotLabel(slot, character.account)
        verb = verb .. " s" .. fields.slot
    end
    local label = verb .. " " .. Quotes.CompactGp(report.quantity) .. " "
        .. shortItemName(report.item) .. " " .. Quotes.CompactGp(report.price)
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

    -- Placing an offer shows that item's price check automatically.
    for _, report in ipairs(reports) do
        if report.kind == "placed" and Plugin.HasPermission(PluginPermissions.httpAccess) then
            quotes:Lookup(report.item)
        end
    end

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
    token = (token or ""):match("^%s*(.-)%s*$")
    if token == "" then
        -- An empty box never wipes a saved token (the box is always emptied
        -- after saving, so pressing Save twice would otherwise log you out).
        refreshStatus(settings.token == "" and "Paste your $link token first."
            or "Paste a new token to replace the saved one.")
        return
    end
    settings.token = token
    PersistentDB:SetString("token", settings.token)
    -- Clear the box so the token isn't left on screen (or in screenshots).
    panel:SetToken(settings.token)
    reporter:TokenChanged()
    refreshStatus("Token saved.")
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

function callbacks.onPriceCheck(itemName)
    if not Plugin.HasPermission(PluginPermissions.httpAccess) then
        panel:SetQuote({ "Price checks need the httpAccess permission." })
        return
    end
    quotes:Lookup(itemName)
end

function callbacks.onRetry()
    reporter:RetryNow()
    refreshStatus("Retrying...")
end

-- Start up ---------------------------------------------------------------------

-- Startup messages go to the developer console (Alt + `), so if the window
-- doesn't appear we can see which step stopped and why.
local VERSION = "0.3.3"
print("ZephFlip " .. VERSION .. ": starting")

local created, panelOrError = pcall(Panel.new, callbacks)
if not created then
    print("ZephFlip: could not create the window: " .. tostring(panelOrError))
    return
end
panel = panelOrError
print("ZephFlip: window created")
panel:SetToken(settings.token)
panel:SetToggles(settings.autoReport, settings.trackOffers)

reporter = Reporter.new(
    Plugin.urls.zephflip,
    function() return settings.token end,
    function(ok, message)
        panel:AddActivity(ok, message)
        refreshStatus()
    end)

quotes = Quotes.new(
    Plugin.urls.zephflip,
    function() return settings.token end,
    function(lines) panel:SetQuote(lines) end)

print("ZephFlip: internet permission (httpAccess) "
    .. (Plugin.HasPermission(PluginPermissions.httpAccess) and "granted" or "NOT granted"))
-- Internet access granted or taken away while running: update the status line.
Event.OptionalPermissionChanged.Subscribe("zephflipPermission", function(event)
    print("ZephFlip: " .. tostring(event.permissionName) .. " is now "
        .. (event.enabled and "granted" or "NOT granted"))
    refreshStatus()
end)

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
print("ZephFlip: ready" .. (character.name and (" - logged in as " .. character.name) or ""))
