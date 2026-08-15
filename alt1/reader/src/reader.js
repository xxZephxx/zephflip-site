import * as a1lib from "@alt1/base";
import * as OCR from "@alt1/ocr";
// Prebuilt, correctly-generated font definitions (cover raw / removebg / blackbg
// modes) — no runtime font generation needed.
import aa12 from "@alt1/ocr/dist/fonts/aa_12px_mono.js";
import aa10 from "@alt1/ocr/dist/fonts/aa_10px_mono.js";
import aa8 from "@alt1/ocr/dist/fonts/aa_8px_mono.js";
import aa8new from "@alt1/ocr/dist/fonts/aa_8px_new.js";
import chat13 from "@alt1/ocr/dist/fonts/chat_13px.js";
import chat11 from "@alt1/ocr/dist/fonts/chat_11px.js";
import chat10 from "@alt1/ocr/dist/fonts/chat_10px.js";

const FONTS = { aa12, aa10, aa8, aa8new, chat13, chat11, chat10 };

// Common RS3 interface text colours (findReadLine takes them all at once).
const COLORS = [
  [255, 255, 255], [230, 230, 230], [200, 200, 200],
  [255, 255, 0], [255, 203, 0], [255, 152, 31], [203, 151, 64], [255, 180, 80],
  [0, 255, 255], [0, 255, 0], [255, 0, 0], [153, 255, 153],
];

function capture() {
  const ref = a1lib.captureHoldFullRs();
  return ref ? ref.toData() : null;
}

// Sweep the screen with every bundled font (trying all colours per read) and
// collect the distinct lines OCR reads, so we can spot the item name and lock in
// the font + colour + region.
function scan() {
  const data = capture();
  if (!data) return { error: "capture failed (is RuneScape focused?)" };
  const reads = [];
  const step = Math.max(10, Math.floor(data.height / 60));
  for (const [fontName, font] of Object.entries(FONTS)) {
    const seen = new Set();
    for (let y = 0; y < data.height - 2; y += step) {
      try {
        const line = OCR.findReadLine(data, font, COLORS, 0, y, data.width, step + (font.height || 14));
        const text = line && line.text ? line.text.trim() : "";
        if (text.length >= 3 && !seen.has(text)) {
          seen.add(text);
          reads.push({ font: fontName, y, text });
        }
      } catch (e) { /* keep scanning */ }
    }
  }
  const out = { width: data.width, height: data.height, reads: reads.slice(0, 80) };
  // If nothing matched, the colours I'm guessing are probably wrong — report the
  // brightest colours actually on screen so we can pick the real text colour.
  if (!reads.length) out.colors = sampleColors(data);
  return out;
}

// Bucket the brightest, most-saturated pixels (likely text) into coarse colour
// bins and return the most common ones as "r,g,b ×count".
function sampleColors(data) {
  const bins = new Map();
  const d = data.data;
  for (let i = 0; i < d.length; i += 16) { // sample every 4th pixel
    const r = d[i], g = d[i + 1], b = d[i + 2];
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    if (max < 140) continue;            // skip dark background
    if (max - min < 25 && max < 200) continue; // skip muddy greys
    const key = (r >> 5) + "," + (g >> 5) + "," + (b >> 5);
    const e = bins.get(key) || { r: 0, g: 0, b: 0, n: 0 };
    e.r += r; e.g += g; e.b += b; e.n++;
    bins.set(key, e);
  }
  return [...bins.values()]
    .sort((a, b) => b.n - a.n).slice(0, 12)
    .map((e) => `${Math.round(e.r / e.n)},${Math.round(e.g / e.n)},${Math.round(e.b / e.n)} ×${e.n}`);
}

window.ZephReader = { version: "0.2", scan, capture, sampleColors };
