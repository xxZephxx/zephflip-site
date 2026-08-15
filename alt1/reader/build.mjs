import { readFileSync } from "node:fs";
import { createRequire } from "node:module";

import * as esbuild from "esbuild";
import { PNG } from "pngjs";

const require = createRequire(import.meta.url);
const OCR = require("@alt1/ocr");

// esbuild plugin: turn an @alt1/ocr `.fontmeta.json` import into a ready
// FontDefinition by decoding its sibling `.data.png` glyph atlas and running the
// same generatefont() the webpack loader uses.
// `sharp` (+ its native deps) is only used for node-side headless capture; the
// browser reader captures via window.alt1, so stub it to an empty module.
const stubNodePlugin = {
  name: "stub-node-only",
  setup(build) {
    const nodeOnly = /^(node:|sharp($|\/)|detect-libc($|\/)|(fs|path|os|util|events|stream|child_process|crypto|http|https|url|zlib|net|tls|assert|buffer|process|worker_threads|module|tty|constants)$)/;
    build.onResolve({ filter: nodeOnly }, () => ({ path: "stub", namespace: "stub" }));
    build.onLoad({ filter: /.*/, namespace: "stub" }, () => ({
      contents: "module.exports = {};",
      loader: "js",
    }));
  },
};

const fontPlugin = {
  name: "alt1-font",
  setup(build) {
    build.onLoad({ filter: /\.fontmeta\.json$/ }, (args) => {
      const meta = JSON.parse(readFileSync(args.path, "utf8"));
      if (meta.unblendmode !== "raw") {
        throw new Error(`unblendmode ${meta.unblendmode} not handled yet (${args.path})`);
      }
      const png = PNG.sync.read(readFileSync(args.path.replace(/\.fontmeta\.json$/, ".data.png")));
      const atlas = {
        data: new Uint8ClampedArray(png.data),
        width: png.width,
        height: png.height,
      };
      const font = OCR.generatefont(
        atlas, meta.chars, meta.seconds, {},
        meta.basey, meta.spacewidth, meta.treshold, meta.shadow,
      );
      return { contents: "export default " + JSON.stringify(font), loader: "js" };
    });
  },
};

await esbuild.build({
  entryPoints: ["src/reader.js"],
  bundle: true,
  format: "iife",
  target: "es2019",
  outfile: "../lib/reader.js",
  plugins: [stubNodePlugin, fontPlugin],
  logLevel: "info",
});
console.log("built ../lib/reader.js");
