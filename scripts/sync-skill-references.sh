#!/bin/bash
# sync-skill-references.sh
#
# 从本地 KPC 源码（或 GitHub）生成 Cursor Skill 的 references/ 目录，
# 包含组件 API 文档和框架/事件参考文档。
# 发版时运行，保持 Skill 文档与组件库源码同步。
#
# 用法:
#   从本地源码生成（推荐，发版时使用）:
#     ./scripts/sync-skill-references.sh --local .
#
#   从 GitHub 拉取指定版本:
#     ./scripts/sync-skill-references.sh 3.7.0 ksc-fe/kpc
#
#   自定义 GitHub Enterprise 域名:
#     GITHUB_HOST=github.mycompany.com ./scripts/sync-skill-references.sh 3.7.0 org/repo

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
SKILL_DIR="$PROJECT_ROOT/.cursor/skills/kingdesign-guide"
REF_DIR="$SKILL_DIR/references"
GITHUB_HOST="${GITHUB_HOST:-raw.githubusercontent.com}"

COMPONENTS=(
  affix anchor badge breadcrumb button card carousel cascader
  checkbox collapse code colorpicker config copy datepicker descriptions
  dialog diagram divider drawer dropdown editable ellipsis form grid icon
  input layout menu message notification pagination popover progress
  radio rate scrollSelect select skeleton slider spin spinner split
  steps switch table tabs tag timeline timepicker tip tooltip tour
  transfer tree treeSelect upload virtualList
  bubble bubbleList fileCard sender think xmarkdown media
)

GUIDES_FILES=(
  event.md
  react.md
  vue.md
  vue-legacy.md
)

strip_frontmatter() {
  awk '
    BEGIN { fm=0 }
    /^---$/ { fm++; next }
    fm >= 2 { print }
  '
}

append_icon_supplement() {
  local ICON_TS="$1"
  local ICON_FILE="$REF_DIR/icon.md"

  [ ! -f "$ICON_FILE" ] && return
  [ ! -f "$ICON_TS" ] && return

  local ICON_NAMES
  ICON_NAMES=$(node -e "
    const fs = require('fs');
    const content = fs.readFileSync(process.argv[1], 'utf8');
    const names = [];
    const re = /-icon-([a-zA-Z0-9-]+):before/g;
    let m;
    while ((m = re.exec(content)) !== null) {
      names.push(m[1]);
    }
    console.log(names.join(', '));
  " "$ICON_TS" 2>/dev/null) || return

  [ -z "$ICON_NAMES" ] && return

  cat >> "$ICON_FILE" << 'ICON_USAGE'

# 用法

Icon 通过 **class 名**指定具体图标，格式为 `k-icon-{名称}`。

Vue: `<Icon class="k-icon-search" size="large" />`

React: `<Icon className="k-icon-search" size="large" />`

# 可用图标

以下是所有内置图标名（使用时加 `k-icon-` 前缀）：

ICON_USAGE

  echo "$ICON_NAMES" >> "$ICON_FILE"

  local LINES
  LINES=$(wc -l < "$ICON_FILE" | tr -d ' ')
  echo "  + icon supplement appended (${LINES} lines total)"
}

usage() {
  echo "Usage:"
  echo "  $0 <version> [repo]        Fetch from GitHub (default repo: ksc-fe/kpc)"
  echo "  $0 --local [kpc-root-dir]  Generate from local KPC source (default: project root)"
  echo ""
  echo "Examples:"
  echo "  $0 --local"
  echo "  $0 --local ."
  echo "  $0 3.7.0"
  echo "  $0 3.7.0 ksc-fe/kpc"
  exit 1
}

clean_ref_dir() {
  mkdir -p "$REF_DIR"
  rm -f "$REF_DIR"/*.md
}

generate_from_local() {
  local KPC_ROOT="$1"

  if [ ! -d "$KPC_ROOT/components" ]; then
    echo "Error: $KPC_ROOT/components not found"
    exit 1
  fi

  if [ ! -d "$KPC_ROOT/docs" ]; then
    echo "Error: $KPC_ROOT/docs not found"
    exit 1
  fi

  clean_ref_dir
  local SUCCESS=0 FAIL=0

  echo "Generating references from local source: $KPC_ROOT"
  echo "Output: $REF_DIR/"
  echo ""

  echo "--- Component API ---"
  for comp in "${COMPONENTS[@]}"; do
    local SRC="$KPC_ROOT/components/$comp/index.md"
    if [ ! -f "$SRC" ]; then
      echo "  ✗ $comp (index.md not found)"
      FAIL=$((FAIL + 1))
      continue
    fi

    strip_frontmatter < "$SRC" > "$REF_DIR/$comp.md"
    local LINES
    LINES=$(wc -l < "$REF_DIR/$comp.md" | tr -d ' ')
    echo "  ✓ $comp (${LINES} lines)"
    SUCCESS=$((SUCCESS + 1))
  done

  echo ""
  echo "--- Guides ---"
  local f
  for f in "${GUIDES_FILES[@]}"; do
    local SRC="$KPC_ROOT/docs/$f"
    if [ ! -f "$SRC" ]; then
      echo "  ✗ $f (not found)"
      FAIL=$((FAIL + 1))
      continue
    fi
    cp "$SRC" "$REF_DIR/$f"
    echo "  ✓ $f"
    SUCCESS=$((SUCCESS + 1))
  done

  echo ""
  echo "Done: $SUCCESS success, $FAIL failed"

  local ICON_TS="$KPC_ROOT/styles/fonts/iconfont.ts"
  if [ -f "$ICON_TS" ]; then
    append_icon_supplement "$ICON_TS"
  else
    echo "  ⚠ icon supplement skipped (iconfont.ts not found)"
  fi
}

generate_from_github() {
  local VERSION="$1"
  local REPO="${2:-ksc-fe/kpc}"
  local TAG="v$VERSION"
  local BASE_URL="https://$GITHUB_HOST/$REPO/$TAG"

  clean_ref_dir
  local SUCCESS=0 FAIL=0

  echo "Fetching KPC $TAG from $REPO ..."
  echo "Output: $REF_DIR/"
  echo ""

  echo "--- Component API ---"
  for comp in "${COMPONENTS[@]}"; do
    local URL="$BASE_URL/components/$comp/index.md"
    local CONTENT

    if CONTENT=$(curl -sf "$URL"); then
      echo "$CONTENT" | strip_frontmatter > "$REF_DIR/$comp.md"
      local LINES
      LINES=$(wc -l < "$REF_DIR/$comp.md" | tr -d ' ')
      echo "  ✓ $comp (${LINES} lines)"
      SUCCESS=$((SUCCESS + 1))
    else
      echo "  ✗ $comp (fetch failed: $URL)"
      FAIL=$((FAIL + 1))
    fi
  done

  echo ""
  echo "--- Guides ---"
  local f
  for f in "${GUIDES_FILES[@]}"; do
    local URL="$BASE_URL/docs/$f"
    if curl -sf "$URL" -o "$REF_DIR/$f"; then
      echo "  ✓ $f"
      SUCCESS=$((SUCCESS + 1))
    else
      echo "  ✗ $f (fetch failed: $URL)"
      FAIL=$((FAIL + 1))
    fi
  done

  echo ""
  echo "Done: $SUCCESS success, $FAIL failed"

  local ICON_TS_URL="$BASE_URL/styles/fonts/iconfont.ts"
  local ICON_TS_TMP
  ICON_TS_TMP=$(mktemp)
  if curl -sf "$ICON_TS_URL" -o "$ICON_TS_TMP"; then
    append_icon_supplement "$ICON_TS_TMP"
    rm -f "$ICON_TS_TMP"
  else
    rm -f "$ICON_TS_TMP"
    echo "  ⚠ icon supplement skipped (iconfont.ts fetch failed)"
  fi
}

# --- Main ---

if [ $# -lt 1 ]; then
  usage
fi

if [ "$1" = "--local" ]; then
  KPC_ROOT="${2:-$PROJECT_ROOT}"
  generate_from_local "$KPC_ROOT"
elif [ "$1" = "-h" ] || [ "$1" = "--help" ]; then
  usage
else
  generate_from_github "$1" "${2:-ksc-fe/kpc}"
fi
