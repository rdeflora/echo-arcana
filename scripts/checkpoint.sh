#!/usr/bin/env bash
set -euo pipefail
msg="${1:-checkpoint}"
ts=$(date +"%Y-%m-%d_%H-%M-%S")
git add -A
git commit -m "✅ ${msg} @ ${ts}" || true
git tag -f "cp-${ts}"
echo "Created tag cp-${ts}"
