-- theme.lua
-- ZephFlip's colours, the same palette as zephflip.com and the Alt1 app,
-- so the in-game panel looks like the rest of ZephFlip.

local Theme = {}

-- Hex colours (RRGGBB), named as on the website.
Theme.hex = {
    ground   = "0d0916", -- window background
    panel    = "160f24", -- header, inputs, secondary buttons
    line     = "2c2340", -- borders
    ink      = "ece7f6", -- main text
    muted    = "a99dc4", -- secondary text
    faint    = "776b93", -- section titles, placeholders
    amethyst = "b491ff", -- accent
    gold     = "e6c583", -- main buttons, grades
    goldInk  = "241a05", -- text on gold buttons
    profit   = "63d79b", -- gains, successful reports
    loss     = "f2726f", -- losses, errors
}

-- A colour as a Vector4 (0..1 per channel) for component colour properties.
function Theme.Colour(name, alpha)
    local hex = Theme.hex[name]
    local r = tonumber(hex:sub(1, 2), 16) / 255
    local g = tonumber(hex:sub(3, 4), 16) / 255
    local b = tonumber(hex:sub(5, 6), 16) / 255
    return Vector4.new(r, g, b, alpha or 1.0)
end

-- Colour part of a text line, using the game's <col=RRGGBB> text tag.
function Theme.Tag(name, text)
    return "<col=" .. Theme.hex[name] .. ">" .. text .. "</col>"
end

return Theme
