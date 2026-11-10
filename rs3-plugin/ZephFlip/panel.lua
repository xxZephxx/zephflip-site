-- panel.lua
-- The small in-game ZephFlip window: connection status, settings and a short
-- list of the most recent reports.
--
-- The panel only displays state and forwards button presses to main.lua through
-- the callbacks table; it never talks to the network or the GE itself.

local Panel = {}
Panel.__index = Panel

local WIDTH = 270
local OPEN_HEIGHT = 480
local HEADER_HEIGHT = 30
local ROW = 28            -- height of one row of controls
local PAD = 8
local MAX_ACTIVITY = 5    -- recent report lines kept on screen
local QUOTE_HEIGHT = 112  -- room for the 5 lines of a price check

local FONT = id.Font.MUSEO_SANS_15PT_REGULAR

-- Small helpers so the layout code below reads top to bottom.
local function addText(parent, x, y, w, h, content)
    local text = ui.Text.new(parent)
    text:SetPos(x, y)
    text:SetSize(w, h)
    text.font = FONT
    text.content = content or ""
    text:AlignTo(ui.AlignMode.TOPLEFT)
    return text
end

local function addButton(parent, x, y, w, label, onPress)
    local button = ui.Button.new(parent)
    button.stylesheetID = id.StyleSheet.BUTTON_DEFAULT
    button:SetPos(x, y)
    button:SetSize(w, ROW - 4)
    button.label = label
    button:Subscribe(ui.Hook.ONBUTTONPRESSED, onPress)
    return button
end

local function addInput(parent, x, y, w, placeholder)
    local input = ui.InputField.new(parent)
    input.stylesheetID = id.StyleSheet.INPUT_DEFAULT
    input:SetPos(x, y)
    input:SetSize(w, ROW - 4)
    input.emptyText = placeholder
    return input
end

-- callbacks: onSaveToken(token), onAccountChanged(number),
--            onToggleAuto(), onToggleOffers(), onRetry(), onPriceCheck(itemName)
function Panel.new(callbacks)
    local self = setmetatable({}, Panel)
    self.callbacks = callbacks
    self.activity = {}
    self.collapsed = false

    local gameWindow = ui.Interfaces:GetComponent(id.Component.TOPLEVEL_V2__PLUGIN_BUILD_LAYER_TOP)

    -- Window frame with a "ZephFlip" header, placed near the top-left of the game.
    local box = ui.GroupBox.new(gameWindow)
    box.stylesheetID = id.StyleSheet.DEFAULT
    box:SetHeaderLayout(WIDTH - 50, HEADER_HEIGHT, 0, 0, ui.GroupBoxHeaderAlignMode.LEFT)
    box.headerText.content = "ZephFlip"
    box.headerText.font = FONT
    box:SetSize(WIDTH, OPEN_HEIGHT)
    box:SetPos(10, 0, 0.0, 0.15)
    self.box = box

    -- Collapse/expand button in the header so the panel can stay out of the way.
    self.collapseButton = addButton(box, WIDTH - 44, 2, 36, "-", function() self:ToggleCollapsed() end)

    -- Everything below the header lives in one layer we can hide in one go.
    local body = ui.Layer.new(box)
    body:SetPos(PAD, HEADER_HEIGHT + 4)
    body:SetSize(WIDTH - 2 * PAD, OPEN_HEIGHT - HEADER_HEIGHT - PAD)
    self.body = body
    local innerWidth = WIDTH - 2 * PAD
    local y = 0

    self.statusText = addText(body, 0, y, innerWidth, ROW * 2, "Starting...")
    y = y + ROW * 2

    -- Price check: type an item and press Check (or Enter).
    self.priceInput = addInput(body, 0, y, innerWidth - 64, "Item name, e.g. tume light")
    self.priceInput:Subscribe(ui.Hook.ONCONTENTCHANGED, function(_, reason, newContent)
        if reason == ui.InputFieldActionResult.SUBMIT then
            self.callbacks.onPriceCheck(newContent)
        end
    end)
    addButton(body, innerWidth - 60, y, 60, "Check", function()
        self.callbacks.onPriceCheck(self.priceInput.content)
    end)
    y = y + ROW
    self.quoteText = addText(body, 0, y, innerWidth, QUOTE_HEIGHT,
        "Check any item, or place a GE offer to see its price here.")
    y = y + QUOTE_HEIGHT

    -- $link token: typed or pasted, then saved with the button.
    self.tokenInput = addInput(body, 0, y, innerWidth - 64, "$link token")
    addButton(body, innerWidth - 60, y, 60, "Save", function()
        self.callbacks.onSaveToken(self.tokenInput.content)
    end)
    y = y + ROW

    -- Which of the member's ZephFlip accounts this character is (1, 2, ...).
    addText(body, 0, y + 4, 150, ROW, "ZephFlip account #")
    self.accountInput = addInput(body, innerWidth - 64, y, 64, "1")
    self.accountInput:Setup(ui.TextContentVisibilityMode.VISIBLE, ui.InputFieldFilterMode.NUMERIC, 2)
    self.accountInput:Subscribe(ui.Hook.ONCONTENTCHANGED, function(_, _, newContent)
        local number = tonumber(newContent)
        if number ~= nil and number >= 1 then
            self.callbacks.onAccountChanged(math.floor(number))
        end
    end)
    y = y + ROW

    self.autoButton = addButton(body, 0, y, innerWidth, "", function() self.callbacks.onToggleAuto() end)
    y = y + ROW
    self.offersButton = addButton(body, 0, y, innerWidth, "", function() self.callbacks.onToggleOffers() end)
    y = y + ROW
    self.retryButton = addButton(body, 0, y, innerWidth, "Retry now", function() self.callbacks.onRetry() end)
    y = y + ROW + 4

    addText(body, 0, y, innerWidth, ROW, "Recent reports")
    y = y + ROW - 6
    self.activityText = addText(body, 0, y, innerWidth, OPEN_HEIGHT - y, "Nothing reported yet.")

    return self
end

function Panel:ToggleCollapsed()
    self.collapsed = not self.collapsed
    self.body.hidden = self.collapsed
    self.box:SetSize(WIDTH, self.collapsed and (HEADER_HEIGHT + 6) or OPEN_HEIGHT)
    self.collapseButton.label = self.collapsed and "+" or "-"
end

function Panel:SetStatus(message)
    self.statusText.content = message
end

-- Show a price check result (a list of lines from quotes.lua).
function Panel:SetQuote(lines)
    self.quoteText.content = table.concat(lines, "<br>")
end

function Panel:SetToggles(autoReport, trackOffers)
    self.autoButton.label = "Auto-report trades: " .. (autoReport and "ON" or "OFF")
    self.offersButton.label = "Track new offers in slots: " .. (trackOffers and "ON" or "OFF")
end

function Panel:SetToken(token)
    self.tokenInput.content = token or ""
end

function Panel:SetAccount(number)
    self.accountInput.content = tostring(number)
end

-- Newest line first, capped at MAX_ACTIVITY lines.
function Panel:AddActivity(line)
    table.insert(self.activity, 1, line)
    if #self.activity > MAX_ACTIVITY then
        table.remove(self.activity)
    end
    self.activityText.content = table.concat(self.activity, "<br>")
end

return Panel
