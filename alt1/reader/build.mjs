import * as esbuild from "esbuild";

// `sharp` (+ its native deps) is only used for node-side headless capture; the
// browser reader captures via window.alt1, so stub the whole node-only surface
// that @alt1/base's prebuilt bundle references, so esbuild can bundle for browser.
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

await esbuild.build({
  entryPoints: ["src/reader.js"],
  bundle: true,
  format: "iife",
  target: "es2019",
  outfile: "../lib/reader.js",
  plugins: [stubNodePlugin],
  logLevel: "info",
});
console.log("built ../lib/reader.js");
