-- panel.lua
-- The small in-game ZephFlip window: connection status, price checks,
-- settings and a short list of the most recent reports.
--
-- It is drawn in ZephFlip's own colours (see theme.lua) rather than the
-- game's default window style, so it matches zephflip.com and the Alt1 app:
-- plain coloured rectangles for the window, header, inputs and buttons, with
-- the stock button/input components on top (their own sprites made invisible)
-- so clicking and typing still work normally.
--
-- The panel only displays state and forwards button presses to main.lua through
-- the callbacks table; it never talks to the network or the GE itself.

local Theme = require("theme")

local Panel = {}
Panel.__index = Panel

local WIDTH = 270
local HEADER_HEIGHT = 30
local ROW = 28            -- height of one row of controls
local TITLE = 20          -- height of a section title
local PAD = 8
local MAX_ACTIVITY = 5    -- recent report lines kept on screen
local MAX_LINE_CHARS = 34 -- longer report lines are cut so each stays on one line
local QUOTE_HEIGHT = 124  -- room for the 6 lines of a price check
local OPEN_HEIGHT = 542

local FONT = id.Font.MUSEO_SANS_15PT_REGULAR

-- Drawing helpers -------------------------------------------------------------

-- A filled rectangle, optionally with a 1px border in another colour.
local function addBox(parent, x, y, w, h, fillName, borderName)
    local fill = ui.Rectangle.new(parent)
    fill:SetPos(x, y)
    fill:SetSize(w, h)
    fill.colour = Theme.Colour(fillName)
    fill.fill = true
    local border
    if borderName then
        border = ui.Rectangle.new(parent)
        border:SetPos(x, y)
        border:SetSize(w, h)
        border.colour = Theme.Colour(borderName)
        border.fill = false
    end
    return fill, border
end

local function addText(parent, x, y, w, h, content, colourName)
    local text = ui.Text.new(parent)
    text:SetPos(x, y)
    text:SetSize(w, h)
    text.font = FONT
    text.content = content or ""
    text.colour = Theme.Colour(colourName or "ink")
    text:AlignTo(ui.AlignMode.TOPLEFT)
    return text
end

-- Small uppercase heading, like the section titles on the website.
local function addTitle(parent, y, w, label)
    return addText(parent, 0, y, w, TITLE, label:upper(), "faint")
end

-- style "primary" = gold button (Check, Save); "ghost" = dark outlined button.
local function addButton(parent, x, y, w, label, style, onPress)
    local h = ROW - 4
    if style == "primary" then
        addBox(parent, x, y, w, h, "gold")
    else
        addBox(parent, x, y, w, h, "panel", "line")
    end
    local button = ui.Button.new(parent)
    button.stylesheetID = id.StyleSheet.BUTTON_DEFAULT
    button:SetPos(x, y)
    button:SetSize(w, h)
    button.sprite.alpha = 0 -- hide the game's button art; our box shows instead
    button.text.colour = Theme.Colour(style == "primary" and "goldInk" or "ink")
    button.label = label
    button:Subscribe(ui.Hook.ONBUTTONPRESSED, onPress)
    return button
end

local function addInput(parent, x, y, w, placeholder)
    local h = ROW - 4
    addBox(parent, x, y, w, h, "panel", "line")
    local input = ui.InputField.new(parent)
    input.stylesheetID = id.StyleSheet.INPUT_DEFAULT
    input:SetPos(x, y)
    input:SetSize(w, h)
    input.containerSprite.alpha = 0 -- hide the game's input art
    input.text.colour = Theme.Colour("ink")
    input.emptyText = placeholder
    input.emptyTextColour = Theme.Colour("faint")
    input.caretColour = Theme.Colour("amethyst")
    return input
end

-- Window ----------------------------------------------------------------------

-- callbacks: onSaveToken(token), onAccountChanged(number),
--            onToggleAuto(), onToggleOffers(), onRetry(), onPriceCheck(itemName)
function Panel.new(callbacks)
    local self = setmetatable({}, Panel)
    self.callbacks = callbacks
    self.activity = {}
    self.collapsed = false

    local gameWindow = ui.Interfaces:GetComponent(id.Component.TOPLEVEL_V2__PLUGIN_BUILD_LAYER_TOP)
    print("ZephFlip: plugin UI layer " .. (gameWindow and "found" or "NOT found"))

    -- The whole window, placed near the top-left of the game.
    local root = ui.Layer.new(gameWindow)
    root:SetSize(WIDTH, OPEN_HEIGHT)
    root:SetPos(10, 0, 0.0, 0.15)
    self.root = root

    -- Background + border, and the header bar with the "ZephFlip" title.
    self.background, self.border = addBox(root, 0, 0, WIDTH, OPEN_HEIGHT, "ground", "line")
    addBox(root, 0, 0, WIDTH, HEADER_HEIGHT, "panel", "line")
    addText(root, PAD, 6, 160, HEADER_HEIGHT - 6,
        "Zeph" .. Theme.Tag("amethyst", "Flip"), "ink")

    -- Collapse/expand button in the header so the panel can stay out of the way.
    self.collapseButton = addButton(root, WIDTH - 40, 3, 32, "-", "ghost",
        function() self:ToggleCollapsed() end)

    -- Everything below the header lives in one layer we can hide in one go.
    local body = ui.Layer.new(root)
    body:SetPos(PAD, HEADER_HEIGHT + 6)
    body:SetSize(WIDTH - 2 * PAD, OPEN_HEIGHT - HEADER_HEIGHT - PAD)
    self.body = body
    local innerWidth = WIDTH - 2 * PAD
    local y = 0

    self.statusText = addText(body, 0, y, innerWidth, 44, "Starting...", "muted")
    y = y + 44

    -- Price check: type an item and press Check (or Enter).
    addTitle(body, y, innerWidth, "Price check")
    y = y + TITLE
    self.priceInput = addInput(body, 0, y, innerWidth - 64, "Item name, e.g. tume light")
    self.priceInput:Subscribe(ui.Hook.ONCONTENTCHANGED, function(_, reason, newContent)
        if reason == ui.InputFieldActionResult.SUBMIT then
            self.callbacks.onPriceCheck(newContent)
        end
    end)
    addButton(body, innerWidth - 60, y, 60, "Check", "primary", function()
        self.callbacks.onPriceCheck(self.priceInput.content)
    end)
    y = y + ROW
    self.quoteText = addText(body, 0, y, innerWidth, QUOTE_HEIGHT,
        "Check any item, or place a GE offer to see its price here.", "muted")
    y = y + QUOTE_HEIGHT

    -- Settings.
    addTitle(body, y, innerWidth, "Settings")
    y = y + TITLE
    -- $link token: typed or pasted, then saved with the button.
    self.tokenInput = addInput(body, 0, y, innerWidth - 64, "$link token")
    addButton(body, innerWidth - 60, y, 60, "Save", "primary", function()
        self.callbacks.onSaveToken(self.tokenInput.content)
    end)
    y = y + ROW

    -- Which of the member's ZephFlip accounts this character is (1, 2, ...).
    addText(body, 0, y + 4, 150, ROW, "ZephFlip account #", "muted")
    self.accountInput = addInput(body, innerWidth - 64, y, 64, "1")
    self.accountInput:Setup(ui.TextContentVisibilityMode.VISIBLE, ui.InputFieldFilterMode.NUMERIC, 2)
    self.accountInput:Subscribe(ui.Hook.ONCONTENTCHANGED, function(_, _, newContent)
        local number = tonumber(newContent)
        if number ~= nil and number >= 1 then
            self.callbacks.onAccountChanged(math.floor(number))
        end
    end)
    y = y + ROW

    self.autoButton = addButton(body, 0, y, innerWidth, "", "ghost",
        function() self.callbacks.onToggleAuto() end)
    y = y + ROW
    self.offersButton = addButton(body, 0, y, innerWidth, "", "ghost",
        function() self.callbacks.onToggleOffers() end)
    y = y + ROW
    self.retryButton = addButton(body, 0, y, innerWidth, "Retry now", "ghost",
        function() self.callbacks.onRetry() end)
    y = y + ROW + 4

    addTitle(body, y, innerWidth, "Recent reports")
    y = y + TITLE
    self.activityText = addText(body, 0, y, innerWidth, OPEN_HEIGHT - y,
        "Nothing reported yet.", "ink")

    return self
end

function Panel:ToggleCollapsed()
    self.collapsed = not self.collapsed
    self.body.hidden = self.collapsed
    local height = self.collapsed and HEADER_HEIGHT or OPEN_HEIGHT
    self.root:SetSize(WIDTH, height)
    self.background:SetSize(WIDTH, height)
    self.border:SetSize(WIDTH, height)
    self.collapseButton.label = self.collapsed and "+" or "-"
end

function Panel:SetStatus(message)
    self.statusText.content = message
end

-- Show a price check result (a list of lines from quotes.lua).
function Panel:SetQuote(lines)
    self.quoteText.content = table.concat(lines, "<br>")
end

local function onOff(enabled)
    return enabled and Theme.Tag("profit", "ON") or Theme.Tag("loss", "OFF")
end

function Panel:SetToggles(autoReport, trackOffers)
    self.autoButton.label = "Auto-report trades: " .. onOff(autoReport)
    self.offersButton.label = "Track new offers in slots: " .. onOff(trackOffers)
end

-- The token itself is never shown: once one is saved the box is emptied and
-- its placeholder says so. (A masked input can't be used: the API hides a
-- masked field's contents from the plugin too.)
function Panel:SetToken(token)
    self.tokenInput.content = ""
    local hasToken = token ~= nil and token ~= ""
    self.tokenInput.emptyText = hasToken and "Token saved (hidden)" or "$link token"
end

function Panel:SetAccount(number)
    self.accountInput.content = tostring(number)
end

-- Add a line to "Recent reports": newest first, at most MAX_ACTIVITY lines,
-- each cut to fit one row. ok = true marks it green, false marks it red.
function Panel:AddActivity(ok, message)
    if #message > MAX_LINE_CHARS then
        message = message:sub(1, MAX_LINE_CHARS - 2) .. ".."
    end
    local mark = ok and Theme.Tag("profit", "OK") or Theme.Tag("loss", "!!")
    table.insert(self.activity, 1, mark .. " " .. message)
    if #self.activity > MAX_ACTIVITY then
        table.remove(self.activity)
    end
    self.activityText.content = table.concat(self.activity, "<br>")
end

return Panel
