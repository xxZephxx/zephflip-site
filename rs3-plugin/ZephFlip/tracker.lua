-- tracker.lua
-- Turns Grand Exchange offer updates into trade reports.
--
-- This file is pure Lua with no game API calls, so it can be unit tested
-- outside the client. main.lua converts each GrandExchangeOffer into a plain
-- "snapshot" table and asks Tracker.Diff what changed since the last snapshot
-- of that slot.
--
-- Snapshot fields (all plain numbers/strings so they can be saved to PersistentDB):
--   empty    true when the slot holds no offer
--   type     0 = buy, 1 = sell (GrandExchangeOfferType)
--   stage    GrandExchangeOfferStage value
--   itemId   item config id
--   itemName item display name
--   price    offer price per item
--   count    total items in the offer
--   sold     items bought/sold so far
--   gold     goldFromSale as reported by the client

local Tracker = {}

Tracker.BUY = 0
Tracker.SELL = 1
Tracker.STAGE_EMPTY = 0

-- Build a snapshot from the raw fields of a GrandExchangeOffer.
-- main.lua reads the userdata and passes plain values in, which keeps this
-- function testable.
function Tracker.Snapshot(stage, offerType, itemId, itemName, price, count, sold, gold)
    if stage == nil or stage == Tracker.STAGE_EMPTY or itemId == nil or itemId < 0 then
        return { empty = true }
    end
    return {
        empty = false,
        type = offerType,
        stage = stage,
        itemId = itemId,
        itemName = itemName or "",
        price = price or 0,
        count = count or 0,
        sold = sold or 0,
        gold = gold or 0,
    }
end

-- Two snapshots describe the same offer when item, side, price and size match.
-- Anything else means the slot was cleared and a new offer was placed.
local function sameOffer(a, b)
    return a ~= nil and b ~= nil
        and not a.empty and not b.empty
        and a.itemId == b.itemId
        and a.type == b.type
        and a.price == b.price
        and a.count == b.count
end

-- Work out the real price per item for a fill.
--
-- The offer price is a limit: buys can fill cheaper and sells can fill dearer.
-- The difference shows up in goldFromSale (sale proceeds for a sell, refunded
-- change for a buy). If the gold change is usable and lands on the right side
-- of the limit we use it; otherwise we fall back to the offer price, which is
-- always a valid (if slightly conservative) price.
function Tracker.FillPrice(offerType, offerPrice, quantity, goldBefore, goldAfter)
    local goldDelta = (goldAfter or 0) - (goldBefore or 0)
    if quantity <= 0 or goldDelta <= 0 then
        return offerPrice
    end
    if offerType == Tracker.SELL then
        local unit = goldDelta // quantity
        if unit >= offerPrice then
            return unit
        end
    else
        local unit = offerPrice - goldDelta // quantity
        if unit > 0 and unit <= offerPrice then
            return unit
        end
    end
    return offerPrice
end

-- Compare the previous and current snapshot of one slot.
--
-- prev is nil when this slot has never been seen before (first run for this
-- character). In that case we only remember the slot and report nothing, so
-- trades made before the plugin was installed are never filed twice.
--
-- Returns a list of reports. Each report is a table:
--   { kind = "placed", type = "PB"|"PS", item, price, quantity }
--   { kind = "filled", type = "NIB"|"NIS", item, price, quantity }
function Tracker.Diff(prev, cur)
    local reports = {}
    if prev == nil or cur.empty then
        return reports
    end

    local baselineSold, baselineGold = 0, 0
    if sameOffer(prev, cur) then
        baselineSold, baselineGold = prev.sold, prev.gold
    else
        -- A new offer appeared in this slot since we last looked.
        table.insert(reports, {
            kind = "placed",
            type = (cur.type == Tracker.SELL) and "PS" or "PB",
            item = cur.itemName,
            price = cur.price,
            quantity = cur.count,
        })
    end

    local filled = cur.sold - baselineSold
    if filled > 0 then
        table.insert(reports, {
            kind = "filled",
            type = (cur.type == Tracker.SELL) and "NIS" or "NIB",
            item = cur.itemName,
            price = Tracker.FillPrice(cur.type, cur.price, filled, baselineGold, cur.gold),
            quantity = filled,
        })
    end
    return reports
end

-- The slot label ZephFlip shows members, account first: "3" on the first
-- account, "2.3" for slot 3 on the second. Display only: reports send the
-- account and slot as separate numbers (see main.lua).
function Tracker.SlotLabel(slot, accountNumber)
    if accountNumber == nil or accountNumber <= 1 then
        return tostring(slot)
    end
    return tostring(accountNumber) .. "." .. tostring(slot)
end

return Tracker
