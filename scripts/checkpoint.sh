#!/usr/bin/env bash
set -euo pipefail
msg="${1:-checkpoint}"
stamp="ckpt-$(date -u +%Y%m%d-%H%M%S)"
git add -A
git commit -m "CHECKPOINT: ${msg}" || echo "Nothing to commit; tagging anyway"
git tag -a "${stamp}" -m "${msg}" || true
echo "Created checkpoint: ${stamp}"
git tag --list "ckpt-*" --sort=-creatordate | head -n 10
