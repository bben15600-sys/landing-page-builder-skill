#!/bin/bash
# Bootstrap a new landing page project from the landing-page-builder skill.
#
# Usage:
#   ./bootstrap.sh <project-name>
#
# After running, you'll have a Next.js 16 project with all dependencies
# and the template files copied in. Then customize site-config.ts and run dev.

set -euo pipefail

NAME="${1:?Usage: $0 <project-name>}"
SKILL_DIR="${SKILL_DIR:-$HOME/.claude/skills/landing-page-builder}"

if [ -d "$NAME" ]; then
  echo "ERROR: directory $NAME already exists"
  exit 1
fi

if [ ! -d "$SKILL_DIR/templates" ]; then
  echo "ERROR: skill not found at $SKILL_DIR"
  exit 1
fi

echo "==> Creating Next.js 16 project: $NAME"
npx --yes create-next-app@latest "$NAME" \
  --typescript \
  --tailwind \
  --app \
  --no-src-dir \
  --turbopack \
  --import-alias "@/*" \
  --use-npm

cd "$NAME"

echo "==> Installing additional deps"
npm install \
  lucide-react \
  @base-ui-components/react \
  clsx \
  tailwind-merge \
  class-variance-authority

echo "==> Initializing shadcn"
npx --yes shadcn@canary init -d

echo "==> Adding shadcn components"
npx --yes shadcn@canary add button input textarea sheet badge

echo "==> Copying template files"
T="$SKILL_DIR/templates"

# components/site/
mkdir -p components/site
for f in "$T"/components/*.template.{tsx,ts}; do
  base="$(basename "$f" | sed 's/\.template//')"
  cp "$f" "components/site/$base"
done

# app/
for f in "$T"/app/*.template.{tsx,css,ts}; do
  base="$(basename "$f" | sed 's/\.template//')"
  if [ "$base" = "share-page.tsx" ]; then
    mkdir -p app/share
    cp "$f" "app/share/page.tsx"
  else
    cp "$f" "app/$base"
  fi
done

# .github/workflows
mkdir -p .github/workflows
cp "$T/.github/workflows/deploy.template.yml" .github/workflows/deploy.yml

# CLAUDE.md
[ -f "$T/CLAUDE.template.md" ] && cp "$T/CLAUDE.template.md" CLAUDE.md

# brand directory placeholder
mkdir -p public/brand
echo "Place logo files here: logo.png, logo-mark.png, logo-circle.png" > public/brand/README.txt

# scripts dir for OG generation
mkdir -p scripts/og
cp "$SKILL_DIR/scripts/generate-og.py" scripts/og/
cp "$SKILL_DIR/scripts/process-logo.py" scripts/og/

echo ""
echo "==> Project bootstrapped at $(pwd)"
echo ""
echo "NEXT STEPS:"
echo "  1. cd $NAME"
echo "  2. Edit components/site/site-config.ts (brand, contact, copy)"
echo "  3. Edit components/site/services.tsx, about.tsx, testimonials.tsx (content)"
echo "  4. Edit app/globals.css (color theme — light/dark)"
echo "  5. Add logo: python3 scripts/og/process-logo.py /path/to/logo.png ./public/brand/"
echo "  6. Generate OG: python3 scripts/og/generate-og.py --brand 'X' --output public/og.png ..."
echo "  7. npm run dev"
echo ""
echo "DEPLOYMENT:"
echo "  1. git init && git add -A && git commit -m 'initial'"
echo "  2. Create GitHub repo and push"
echo "  3. Add to Vercel: vercel --token <TOKEN>"
echo "  4. Add VERCEL_TOKEN, VERCEL_ORG_ID, VERCEL_PROJECT_ID as GitHub secrets"
echo "  5. Push triggers auto-deploy"
