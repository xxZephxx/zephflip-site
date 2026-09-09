"""SEO item-page factory.

Generates /item/<slug>.html pages from the live template for the most-traded
tradeable RS3 items not already covered, and registers them in items/index.html
and sitemap.xml. Deterministic and idempotent: re-running refreshes factory
pages in place and never touches the hand-written ones' prose.

Usage:  python tools/generate_item_pages.py [count]
"""
import datetime
import json
import pathlib
import re
import sys
import urllib.request

ROOT = pathlib.Path(__file__).resolve().parent.parent
TEMPLATE_SLUG = "aggression-potion-4"
TEMPLATE_NAME = "Aggression potion (4)"
TEMPLATE_BLURB = (
    "Aggression potion (4) keeps your character auto-attacking everything nearby "
    "— the staple consumable of AFK combat training, burned in bulk every day, "
    "which makes it a candidate merchants watch on the RuneScape Grand Exchange."
)
UA = {"User-Agent": "ZephFlip site generator (zephflip.com)"}


def fetch(path: str):
    req = urllib.request.Request(f"https://prices.runescape.wiki/api/v2/rs{path}", headers=UA)
    return json.load(urllib.request.urlopen(req, timeout=30))


def slugify(name: str) -> str:
    return re.sub(r"-+", "-", re.sub(r"[^a-z0-9]+", "-", name.casefold())).strip("-")


def blurb(name: str, limit) -> str:
    if limit is not None and limit <= 10:
        kind = (
            f"{name} is a high-value Supreme-tier item — big single-flip margins, "
            "a tight buy limit, and the patience game that comes with both"
        )
    elif limit is not None and limit <= 100:
        kind = (
            f"{name} sits in the Elite bracket — meaningful per-item margins with "
            "enough daily volume that offers actually fill"
        )
    else:
        kind = (
            f"{name} is a bulk staple — thin margins per unit, but a generous buy "
            "limit and deep daily volume that reward flipping at scale"
        )
    return kind + ", which makes it a candidate merchants watch on the RuneScape Grand Exchange."


def main(count: int = 40) -> None:
    mapping = fetch("/mapping")
    latest = fetch("/latest")["data"]
    day = fetch("/24h")["data"]
    existing = {p.stem for p in (ROOT / "item").glob("*.html")}

    def volume(item_id: int) -> int:
        row = day.get(str(item_id)) or {}
        return int(row.get("highPriceVolume") or 0) + int(row.get("lowPriceVolume") or 0)

    candidates = []
    for row in mapping:
        item_id, name = row.get("id"), row.get("name")
        if not item_id or not name:
            continue
        slug = slugify(name)
        if slug in existing or str(item_id) not in latest:
            continue
        # Value-weighted volume so the list isn't all 8gp feathers: gp traded/day.
        price = (latest[str(item_id)] or {}).get("high") or (latest[str(item_id)] or {}).get("low") or 0
        vol = volume(item_id)
        if vol < 100 or not price:
            continue
        candidates.append((vol * price, vol, name, slug, row.get("limit")))
    candidates.sort(reverse=True)
    picks = candidates[:count]

    template = (ROOT / "item" / f"{TEMPLATE_SLUG}.html").read_text(encoding="utf-8")
    today = datetime.date.today().isoformat()
    index_path = ROOT / "items" / "index.html"
    sitemap_path = ROOT / "sitemap.xml"
    index = index_path.read_text(encoding="utf-8")
    sitemap = sitemap_path.read_text(encoding="utf-8")

    made = []
    for _, vol, name, slug, limit in picks:
        page = template.replace(TEMPLATE_BLURB, blurb(name, limit))
        page = page.replace(TEMPLATE_NAME, name).replace(TEMPLATE_SLUG, slug)
        (ROOT / "item" / f"{slug}.html").write_text(page, encoding="utf-8")
        made.append((name, slug, vol, limit))
        card = (
            f'    <a class="hub-card" href="/item/{slug}"><span class="hn">{name}</span>'
            f'<span class="hb">live margin after tax &amp; 24h volume</span></a>\n'
        )
        if f'href="/item/{slug}"' not in index:
            index = index.replace("  </div>\n", card + "  </div>\n", 1)
        entry = (
            f"  <url><loc>https://zephflip.com/item/{slug}</loc>"
            f"<lastmod>{today}</lastmod><changefreq>daily</changefreq><priority>0.5</priority></url>\n"
        )
        if f"/item/{slug}</loc>" not in sitemap:
            sitemap = sitemap.replace("</urlset>", entry + "</urlset>", 1)

    index_path.write_text(index, encoding="utf-8")
    sitemap_path.write_text(sitemap, encoding="utf-8")
    print(f"generated {len(made)} pages:")
    for name, slug, vol, limit in made:
        print(f"  {name}  (/item/{slug})  vol/24h={vol:,} limit={limit}")


if __name__ == "__main__":
    main(int(sys.argv[1]) if len(sys.argv) > 1 else 40)
