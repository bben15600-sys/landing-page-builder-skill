# {BRAND_NAME} — Landing Page

Hebrew RTL landing page for {BUSINESS_TYPE} business. Stack: Next.js 16
(App Router) + Tailwind v4 + shadcn/ui (RTL). Heebo font.
Brand palette: {DESCRIBE_COLORS} (oklch).

## Project structure
- app/ — App Router pages
- components/site/ — page sections (hero, certifications-strip, services, about, testimonials, process, contact, footer)
- components/site/site-config.ts — single source of truth for business info
- components/ui/ — shadcn primitives
- public/brand/ — logo files
- public/og.png — static OG image (1200x630)
- scripts/og/ — Python scripts to regenerate OG and process logos

## Conventions
- All copy in Hebrew RTL
- Use `<Button render={<a href=... />}>` pattern (base-ui, no `asChild`)
- Brand colors: see app/globals.css `--brand-*` tokens
- Static OG image (NOT dynamic Satori — it has Hebrew RTL bugs)
- Reveal wrapper for scroll-triggered fade-ins (don't use framer-motion)
- IntersectionObserver for AnimatedCounter (no scroll listeners)

## Workflow
- `npm run dev` — local dev (http://localhost:3000)
- `npm run build` — production build (must pass before push)
- `git push` — auto-deploys via GitHub Actions to Vercel
- After OG copy changes: `python3 scripts/og/generate-og.py ...` then bump `?v=N` in app/layout.tsx

## Deployment
- Production: https://{PROJECT}.vercel.app
- Branch deploys: preview URLs auto-generated and posted as commit comments
- GitHub Secrets required: VERCEL_TOKEN, VERCEL_ORG_ID, VERCEL_PROJECT_ID
