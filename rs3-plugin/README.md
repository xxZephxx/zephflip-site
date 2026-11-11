# ZephFlip RS3 plugin

A RuneScape 3 plugin written in Lua for Jagex's official plugin system
(docs: https://developer.runescape.com/rs/). It watches your own Grand Exchange
offers and reports them to your ZephFlip account automatically. They go through
the same `/api/report` endpoint the Alt1 app and dashboard use.

| GE event                                 | Reported as                           |
|------------------------------------------|---------------------------------------|
| Offer buys N items                       | **Bought** (NIB) × N at the fill price |
| Offer sells N items                      | **Sold** (NIS) × N at the fill price   |
| New offer placed (if "Track new offers" is on) | **Buy/Sell offer** (PB/PS) in that slot |

* Partial fills are reported as they happen, each for only the new quantity.
* The fill price comes from the gold the GE hands back: sale proceeds for
  sells, refunded change for buys. When that can't be read safely (for example
  you collected the gold in the same update), the offer price is used instead.
* On a character's first run, existing offers are only *remembered*, never
  reported, so trades you already reported by hand aren't filed twice.
* If ZephFlip is unreachable, reports wait in a saved queue and retry. The
  delay starts at 30 s and backs off up to 5 min.
* The plugin is read-only: it never places, edits or collects offers.

### Price checks

Type an item into the panel's price box and press **Check** (or Enter). When
you place a GE offer, that item is checked automatically. The panel shows
the same item intelligence as the Alt1 app, via `/api/quote`:

```
Tumeken's Light  [D 28/100]          <- ZephScore grade
Buy  2,737,162,892
Sell 2,775,341,380
Net margin -17,328,339               <- after tax; green up, red down
ROI -0.63%   Move 0.0%
Vol 1/hr   25/24h
```

Short names work the same way they do in Discord (e.g. `tume light`).
Prices are shown in short form only when that is still exact (2.05b, 9.412k);
otherwise the full number is shown. One value per line, so even full
billion-gp numbers fit without wrapping. Margin, ROI and move are green when
up and red when down.

### Look

The window uses ZephFlip's own colours (the zephflip.com / Alt1 palette:
dark purple background, gold buttons, amethyst accent) instead of the game's
default window style. Each line in "Recent reports" is cut to fit one row.

## Files

```
ZephFlip/            <- the plugin folder (this is what gets zipped)
  plugin.json        manifest: httpAccess + the ZephFlip API base URL
  main.lua           wiring: events, settings, per-character state
  tracker.lua        "what changed in this GE slot?" (pure logic)
  reporter.lua       HTTP queue with retry, saved in PersistentDB
  quotes.lua         price checks (/api/quote) and their formatting
  panel.lua          the in-game window
  theme.lua          ZephFlip colours (same palette as zephflip.com)
  json.lua           tiny JSON helper (the API has no JSON library)
tests/run.lua        offline tests against a fake client
package.sh           builds dist/ZephFlip-<version>.zip for mod.io
```

## Testing in game (needs a PC with RuneScape)

1. Join the plugin beta world (see the "Accessing the API" tutorial in the docs).
   In the lobby, click **Import save**.
2. Copy the `ZephFlip/` folder into `dev_plugins/` in the beta client folder:
   * Windows: `C:\ProgramData\Jagex\RuneScape-BETA\dev_plugins\ZephFlip`
   * Mac: `~/Jagex/RuneScape-BETA/dev_plugins/ZephFlip`
3. In game, press **Alt + `** to open the console, then run `prf`, `plist`
   and `pon ZephFlip`. Use `prl ZephFlip` to reload after editing.
   Grant internet access (needed for price checks and reports) with
   `ppe ZephFlip httpAccess`, then **reload with `prl ZephFlip`**. The
   permission only takes effect after a reload. The console line should then
   read `internet permission (httpAccess) granted`.
4. In the ZephFlip panel, paste your token from `$link` in Discord and press
   **Save**. Set **ZephFlip account #** to 2 on your second character, so
   slots go in as `3.2`.

**The beta world has no Grand Exchange.** In the beta you can check that the
panel loads, the token saves and the API is reachable. Real automatic reporting
can only be confirmed on live worlds, which needs the plugin approved first.
For a first live test, turn **Auto-report** off. Then place a small offer, turn
it back on, and compare the panel's "Recent reports" with the dashboard.

Things to confirm on first contact with the real client. The docs leave these
open and the code handles both ways, but they are worth checking:
* Does `goldFromSale` reset to 0 when you collect? (If so, the fill price
  falls back to the offer price, as designed.)
* Does `GrandExchangeOfferUpdated` fire for every slot at login? (Either way
  works: the plugin also scans all slots when you enter the game.)

## Running the tests

```
lua5.4 rs3-plugin/tests/run.lua
```

## Submitting to mod.io

1. Set `contactEmailAddress` in `ZephFlip/plugin.json`. Jagex recommend an
   address different from your mod.io login.
2. `rs3-plugin/package.sh` builds `rs3-plugin/dist/ZephFlip-<version>.zip`.
3. Upload it at https://mod.io/g/runescape following the docs'
   "Submission process" page, and select Windows, Mac and Linux.

The mod.io description must include the Email, Feedback, EULA, Permissions
and Data Protection sections (see the docs' "Example description"). A
starting point for the two plugin-specific ones:

> **httpAccess.** This plugin requests the httpAccess permission for
> https://zephflip-production.up.railway.app. It sends your own Grand
> Exchange trades (item, buy/sell, price, quantity, GE slot) to your ZephFlip
> account, where they are used for your flip ledger, profit tracking and
> ZephFlip's market price evidence. It also sends the names of items you
> price-check to fetch their live prices.
>
> **Data protection.** Uses your own Grand Exchange offers and your
> character's display name. The display name is only used to save settings
> per character on your computer and is never sent. Trade data is sent to
> the address above, authenticated with your personal `$link` token.

Before you submit, check which Data Protection case applies. That depends on
the country the ZephFlip API is hosted in (see the docs' "Adequacy" page).
Also link the privacy policy at https://zephflip.com/privacy.
