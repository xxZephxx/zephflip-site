#!/usr/bin/env bash
# Build the zip for mod.io: main.lua and plugin.json at the top level of the zip,
# runtime files only (no tests, README or git files, per Jagex's submission rules).
set -euo pipefail
cd "$(dirname "$0")/ZephFlip"
if grep -q REPLACE_WITH_CONTACT_EMAIL plugin.json; then
  echo "Set contactEmailAddress in ZephFlip/plugin.json before packaging." >&2
  exit 1
fi
version=$(python3 -c 'import json;print(json.load(open("plugin.json"))["version"])')
out="../dist/ZephFlip-$version.zip"
mkdir -p ../dist
rm -f "$out"
zip -q "$out" plugin.json main.lua tracker.lua reporter.lua quotes.lua panel.lua json.lua
echo "Built rs3-plugin/dist/ZephFlip-$version.zip"
