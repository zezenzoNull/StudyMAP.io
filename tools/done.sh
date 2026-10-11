#!/bin/sh
# Mark topic(s) done in data/manifest.js, then validate. Usage: sh tools/done.sh <id> [<id>...]
cd "$(dirname "$0")/.."
for id in "$@"; do sed -i "/id: \"$id\"/s/status: \"[a-z-]*\"/status: \"done\"/" data/manifest.js; done
node tools/validate.js
