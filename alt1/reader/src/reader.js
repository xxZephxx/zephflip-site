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

// Candidate RS3 text colours (findReadLine takes them all at once). Includes
// bright (default dark theme), dim gold/amber + dark text (wood/tan GE theme).
const COLORS = [
  [255, 255, 255], [235, 235, 235], [210, 210, 210],
  [255, 255, 0], [255, 203, 0], [255, 152, 31],
  [203, 151, 64], [174, 137, 83], [186, 146, 130], [220, 190, 120],
  [0, 255, 255], [0, 255, 0], [255, 0, 0], [153, 255, 153],
  [0, 0, 0], [35, 30, 25], [70, 55, 35], [95, 70, 45],
];

function capture() {
  const ref = a1lib.captureHoldFullRs();
  return ref ? ref.toData() : null;
}

// Read the text line under the mouse cursor with every bundled font. findReadLine
// needs a SMALL box around a point *inside* the text (a full-screen box fails its
// x+w+font.width<=width bound); the user hovers the item name and it expands the
// glyph it finds there into the whole line.
function scan() {
  const data = capture();
  if (!data) return { error: "capture failed (is RuneScape the active window?)" };
  let m;
  try {
    m = a1lib.getMousePosition();
  } catch (e) {
    return { error: "mouse permission needed — remove & re-add the ZephFlip app in Alt1, then allow the 'gamestate' permission." };
  }
  if (!m) return { error: "no mouse position — hover over the item name in-game, then read." };
  const reads = [];
  for (const [fontName, font] of Object.entries(FONTS)) {
    // Generous box around the cursor (tolerates aim + any capture/mouse offset).
    let bx = m.x - 90, by = m.y - 16, w = 180, h = 32;
    if (bx < 0) bx = 0;
    if (by < font.basey) by = font.basey;
    if (bx + w + font.width > data.width) w = data.width - bx - font.width - 1;
    if (by + h - font.basey + font.height > data.height) h = data.height - by + font.basey - font.height - 1;
    if (w < font.width || h < 2) continue;
    try {
      const line = OCR.findReadLine(data, font, COLORS, bx, by, w, h);
      const text = line && line.text ? String(line.text).trim() : "";
      if (text) reads.push({ font: fontName, text });
    } catch (e) { /* try next font */ }
  }
  const out = { mouse: { x: m.x, y: m.y }, width: data.width, height: data.height, reads };
  // Always include a zoomed snapshot around the cursor + on-screen colours so we
  // can see the real text (size/colour/position) when OCR reads nothing useful.
  try { out.snapshot = cropDataUrl(data, m); } catch (e) { /* no snapshot */ }
  out.colors = sampleColors(data);
  return out;
}

// Crop a region around the cursor, scale it up (nearest-neighbour) and draw a
// magenta crosshair at the exact cursor pixel, returned as a PNG data URL.
function cropDataUrl(data, m) {
  const cw = 340, ch = 72, scale = 4;
  let sx = Math.max(0, m.x - Math.floor(cw / 2));
  let sy = Math.max(0, m.y - Math.floor(ch / 2));
  if (sx + cw > data.width) sx = data.width - cw;
  if (sy + ch > data.height) sy = data.height - ch;
  const crop = new ImageData(cw, ch);
  for (let yy = 0; yy < ch; yy++) {
    for (let xx = 0; xx < cw; xx++) {
      const si = ((sy + yy) * data.width + (sx + xx)) * 4;
      const di = (yy * cw + xx) * 4;
      crop.data[di] = data.data[si];
      crop.data[di + 1] = data.data[si + 1];
      crop.data[di + 2] = data.data[si + 2];
      crop.data[di + 3] = 255;
    }
  }
  const small = document.createElement("canvas");
  small.width = cw; small.height = ch;
  small.getContext("2d").putImageData(crop, 0, 0);
  const out = document.createElement("canvas");
  out.width = cw * scale; out.height = ch * scale;
  const ctx = out.getContext("2d");
  ctx.imageSmoothingEnabled = false;
  ctx.drawImage(small, 0, 0, out.width, out.height);
  const mx = (m.x - sx) * scale, my = (m.y - sy) * scale;
  ctx.strokeStyle = "#ff23e5"; ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(mx - 10, my); ctx.lineTo(mx + 10, my);
  ctx.moveTo(mx, my - 10); ctx.lineTo(mx, my + 10);
  ctx.stroke();
  return out.toDataURL("image/png");
}

// Diagnostic: does crisp text exist at all? Count near-white / near-black pixels
// (where text usually lives) and list the top colour bins at each extreme. A tiny
// near-white/near-black count means the client is likely scaled/blurred (bitmap
// fonts won't match); a healthy count means it's just a colour/region problem.
function sampleColors(data) {
  const d = data.data;
  const bright = new Map(), dark = new Map();
  let nearWhite = 0, nearBlack = 0, total = 0;
  const bin = (map, r, g, b) => {
    const key = (r >> 5) + "," + (g >> 5) + "," + (b >> 5);
    const e = map.get(key) || { r: 0, g: 0, b: 0, n: 0 };
    e.r += r; e.g += g; e.b += b; e.n++; map.set(key, e);
  };
  for (let i = 0; i < d.length; i += 16) { // every 4th pixel
    const r = d[i], g = d[i + 1], b = d[i + 2];
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    total++;
    if (min > 200) { nearWhite++; bin(bright, r, g, b); }       // crisp light text
    else if (max < 60) { nearBlack++; bin(dark, r, g, b); }     // crisp dark text
    else if (max > 205) bin(bright, r, g, b);                    // bright coloured text
  }
  const top = (map) => [...map.values()].sort((a, b) => b.n - a.n).slice(0, 8)
    .map((e) => `${Math.round(e.r / e.n)},${Math.round(e.g / e.n)},${Math.round(e.b / e.n)} ×${e.n}`);
  return {
    stats: `sampled ${total} · near-white ${nearWhite} · near-black ${nearBlack}`,
    bright: top(bright),
    dark: top(dark),
  };
}

window.ZephReader = { version: "0.6", scan, capture, sampleColors };
