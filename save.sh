#!/bin/bash
# Simple Git autosave helper for Echo Arcana

msg="$1"
if [ -z "$msg" ]; then
  msg="autosave $(date '+%Y-%m-%d %H:%M:%S')"
fi

echo "💾 Saving with message: '$msg'"
git add -A
git commit -m "$msg" || echo "(no changes to commit)"
git pull --rebase
git push
echo "✅ Done."
