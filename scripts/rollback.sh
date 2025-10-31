#!/usr/bin/env bash
set -euo pipefail
tag="${1:-}"
if [ -z "$tag" ]; then
  echo "Usage: $0 ckpt-YYYYMMDD-HHMMSS"; exit 1
fi
echo "Rolling back to $tag ..."
# create a safety branch before reset
git branch "safety-$(date -u +%Y%m%d-%H%M%S)" || true
# hard reset current branch to the checkpoint
git reset --hard "$tag"
echo "Rolled back to $tag. Rebuild and restart service next."
