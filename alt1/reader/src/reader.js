import * as a1lib from "@alt1/base";
import * as OCR from "@alt1/ocr";
import aa12 from "@alt1/ocr/fonts/aa_12px_mono.fontmeta.json";
import aa10 from "@alt1/ocr/fonts/aa_10px_mono.fontmeta.json";

const FONTS = { aa12, aa10 };
const COLORS = {
  white: [[255, 255, 255]],
  gold: [[255, 203, 5], [255, 152, 31], [203, 151, 64], [220, 180, 90], [254, 207, 105]],
};

function capture() {
  const ref = a1lib.captureHoldFullRs();
  return ref ? ref.toData() : null;
}

// Sweep the screen with each font x colour set and collect the distinct lines
// OCR reads, so we can find the item name in the output and lock in the combo.
function scan() {
  const data = capture();
  if (!data) return { error: "capture failed (is RuneScape focused?)" };
  const reads = [];
  const step = Math.max(12, Math.floor(data.height / 40));
  for (const [fontName, font] of Object.entries(FONTS)) {
    for (const [colorName, cols] of Object.entries(COLORS)) {
      const seen = new Set();
      for (let y = 0; y < data.height - 4; y += step) {
        try {
          const line = OCR.findReadLine(data, font, cols, 0, y, data.width, step + font.height);
          const text = line && line.text ? line.text.trim() : "";
          if (text.length >= 3 && !seen.has(text)) {
            seen.add(text);
            reads.push({ font: fontName, color: colorName, y, text });
          }
        } catch (e) { /* keep scanning */ }
      }
    }
  }
  return { width: data.width, height: data.height, reads: reads.slice(0, 60) };
}

window.ZephReader = { version: "0.1", scan, capture };
