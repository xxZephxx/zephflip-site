# ZephFlip: mod.io submission

Everything to paste into mod.io when submitting the plugin, field by field.
Upload file: `rs3-plugin/dist/ZephFlip-<version>.zip` (built by `package.sh`).

---

## Name

ZephFlip

## Summary (short description)

Automatically logs your Grand Exchange trades to ZephFlip and shows live price checks (margin, ROI, ZephScore) in game.

## Listing image

`media/zephflip-listing-1024x576.png` (16:9, at least 512x288). It shows the
real panel with a real price check from in-game testing.

## Homepage (optional)

https://zephflip.com

## Platforms

Windows, Mac and Linux. Leave "Source" unselected.

## Tags

Required: the **httpAccess** permission tag (Jagex require a tag for every
permission the plugin requests).

Then whichever of these fit: Grand Exchange, Merchanting, Tracking, Utility.

## File upload (step 4)

- File: `ZephFlip-0.3.5.zip`
- Platforms: Windows, Mac, Linux (not Source)
- Version: `0.3.5` (must match plugin.json)
- Changelog: "First release."

---

## Description (paste everything below this line)

### ZephFlip

ZephFlip is a Grand Exchange flipping community. It tracks prices, margins and
your own trades. This plugin connects the game to your ZephFlip account, so you
don't have to type trades in by hand.

**What it does**

- **Logs your trades automatically.** When one of your GE offers buys or sells
  items, the plugin reports it to your ZephFlip account as Bought or Sold. It
  reports exactly the quantity that went through, at the price it went
  through at. Partial fills are logged as they happen.
- **Tracks your GE slots.** When you place a new offer, ZephFlip's slot tracker
  is told which slot it is in. You can turn this off.
- **Price checks.** Type any item into the panel, or just place a GE offer, to
  see:
  - the live buy and sell price
  - the margin after GE tax
  - ROI
  - ZephScore grade
  - hourly and 24-hour volume
  - the recent price move
- **No double-logging.** The first time you use it on a character, offers that
  already exist are only remembered, never reported. If ZephFlip can't be
  reached, reports are saved and sent later.
- **Read-only.** The plugin only reads your own offers. It never places,
  changes or collects offers, and never acts in the game for you.

**How to use it**

1. You need a ZephFlip account. Join the ZephFlip Discord:
   https://discord.gg/UegDeqgw2z
2. In Discord, run `$link`. ZephFlip sends you a private token in a DM.
3. Enable the plugin and allow internet access when asked.
4. Paste the token into the ZephFlip panel's **$link token** box and press
   **Save**.
5. If this character is your second (or third) ZephFlip account, set
   **ZephFlip account #** to 2 (or 3), so its GE slots are tracked separately.

The panel's **Auto-report trades** button pauses reporting. Trades made while
reporting is paused are never sent later. The **-** button collapses the panel
to its title bar.

---

### Email

The contact email address for this plugin is xsnewman89x@gmail.com.

### Feedback and collaboration

Feedback for this plugin should be submitted to the plugin's channel in the
RuneScape Plugin Portal Discord, or in the ZephFlip Discord:
https://discord.gg/UegDeqgw2z. Anyone wishing to collaborate on this plugin
should likewise discuss this in either Discord, or contact the email address
given above.

### EULA

This Plugin uses software licensed by Jagex to the developer under the terms of
the Jagex End User Licence Agreement (EULA) found at
https://legal.jagex.com/docs/terms/eula (and all terms incorporated into it by
reference). The development and any use of the Plugin is at all times subject
to the Jagex EULA.

### Permissions

#### httpAccess

This plugin requests the httpAccess permission for
https://zephflip-production.up.railway.app. This permission is used to send
information about your own Grand Exchange trades (item, buy or sell, price,
quantity and GE slot) to the aforementioned website. There it is used for your
ZephFlip trade log, profit tracking, GE slot tracking and ZephFlip's market
price evidence. It is also used to send the names of items you price-check,
to fetch their live prices.

The plugin does not request chatAccess or trackingAccess.

### Data Protection

This plugin uses the following information:
- your own Grand Exchange offers (item, buy or sell, price, quantity, amount
  filled, gold received)
- your character's display name
- the item names you type into the price check
- your personal ZephFlip access token

This information is transmitted to https://zephflip-production.up.railway.app,
which is hosted in the United States (California). The United States does not
have full or relevant partial UK adequacy status as specified by
http://developer.runescape.com/submission/adequacy.html. However, Jagex and
the Developer have put in place appropriate safeguards to protect your data.
The developer's privacy notice is available at
https://zephflip.com/privacy.

Only trade details, price-check item names and your access token are sent.
Your character's display name is never sent: it is only used on your own
computer, to keep the plugin's settings separate for each character.

This endpoint secures the data by:
- encrypting all traffic with HTTPS
- accepting a request only with your personal access token, which is issued
  privately to you in Discord and can be replaced at any time by running
  `$link` again
- storing data in ZephFlip's database, with routine encrypted backups

The information can be accessed by:
- you, through the ZephFlip Discord bot, the zephflip.com dashboard and the
  ZephFlip Alt1 app
- the ZephFlip operator, to run and support the service

Reported trade prices are also used as market price evidence for ZephFlip
members. Completed flips may be announced in the ZephFlip Discord, the same as
trades reported there. All data rights requests should be submitted to the
email address given above.

Game information is not stored by the plugin between sessions, except the
last-seen state of your own GE slots. That is kept on your computer so trades
are never reported twice. Plugin settings, and reports waiting to be sent, are
stored within the plugin between sessions. The plugin takes no screenshots.

---

## Private details for Jagex (case 3, not public)

Because data goes to the USA, Jagex also need, privately:
- your name
- your country of residence (minimum)
- an email for data-protection questions

These go in the adequacy exception form below, not in the public description.

## After submitting

Because the server is in the United States, which is not on Jagex's
adequacy list, Jagex require their **adequacy exception form** to be completed
after submitting to mod.io. It's linked from
https://developer.runescape.com/rs/submission/adequacy.html, and the
password given on that page is `RS3API`.
