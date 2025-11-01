#!/usr/bin/env bash
set -euo pipefail
tag="${1:-}"
if [ -z "$tag" ]; then
  echo "Usage: scripts/restore.sh cp-YYYY-MM-DD_HH-MM-SS"
  echo "Available tags:"; git tag -l "cp-*"; exit 1
fi
git reset --hard "$tag"
echo "Restored to $tag"
