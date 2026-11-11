-- json.lua
-- The plugin API has no JSON library, and the ZephFlip API speaks JSON.
-- We only ever send flat objects ({"type":"NIB","item":"...","price":1}) and
-- only ever need one or two string fields back, so this stays deliberately small.

local json = {}

local escapes = {
    ['"'] = '\\"', ["\\"] = "\\\\", ["\b"] = "\\b", ["\f"] = "\\f",
    ["\n"] = "\\n", ["\r"] = "\\r", ["\t"] = "\\t",
}

local function encodeString(s)
    s = s:gsub('[%c"\\]', function(c)
        return escapes[c] or string.format("\\u%04x", c:byte())
    end)
    return '"' .. s .. '"'
end

local function encodeValue(v)
    local t = type(v)
    if t == "string" then
        return encodeString(v)
    elseif t == "number" then
        -- Prices and quantities are whole gp; never send "5.0".
        local asInt = math.tointeger(v) or math.tointeger(math.floor(v))
        return tostring(asInt or v)
    elseif t == "boolean" then
        return tostring(v)
    end
    return "null"
end

-- Encode a flat table of string keys to a JSON object.
-- Keys are sorted so the output is stable (handy for logs and tests).
function json.EncodeObject(tbl)
    local keys = {}
    for k in pairs(tbl) do
        table.insert(keys, k)
    end
    table.sort(keys)
    local parts = {}
    for _, k in ipairs(keys) do
        table.insert(parts, encodeString(k) .. ":" .. encodeValue(tbl[k]))
    end
    return "{" .. table.concat(parts, ",") .. "}"
end

-- Read one top-level string field (e.g. "error") out of a JSON response.
-- Returns nil when the field is missing or isn't a string.
function json.ReadString(body, field)
    if type(body) ~= "string" then
        return nil
    end
    local _, valueStart = body:find('"' .. field .. '"%s*:%s*"')
    if valueStart == nil then
        return nil
    end
    -- Walk the string, honouring backslash escapes, until the closing quote.
    local out, i = {}, valueStart + 1
    while i <= #body do
        local c = body:sub(i, i)
        if c == '"' then
            return table.concat(out)
        elseif c == "\\" then
            local nextChar = body:sub(i + 1, i + 1)
            local hex = body:match("^u(%x%x%x%x)", i + 1)
            if hex then
                -- The server escapes non-ASCII text such as "—" as —.
                local code = tonumber(hex, 16)
                local isSurrogate = code >= 0xD800 and code <= 0xDFFF
                table.insert(out, isSurrogate and "?" or utf8.char(code))
                i = i + 6
            else
                table.insert(out, (nextChar == "n" or nextChar == "t") and " " or nextChar)
                i = i + 2
            end
        else
            table.insert(out, c)
            i = i + 1
        end
    end
    return nil -- unterminated string
end

-- Read one number field (e.g. "margin") out of a JSON response.
-- Returns nil when the field is missing or null.
--
-- Like ReadString, this matches the first field with that name, so it is only
-- used for names that appear once in a response (the quote fields below are
-- all top-level and unique; nested lists there only use "price" and "at").
function json.ReadNumber(body, field)
    if type(body) ~= "string" then
        return nil
    end
    local raw = body:match('"' .. field .. '"%s*:%s*(-?[%d%.eE+-]+)')
    return raw and tonumber(raw)
end

-- Read one true/false field. Returns nil when missing.
function json.ReadBool(body, field)
    if type(body) ~= "string" then
        return nil
    end
    local raw = body:match('"' .. field .. '"%s*:%s*(%a+)')
    if raw == "true" then return true end
    if raw == "false" then return false end
    return nil
end

return json
