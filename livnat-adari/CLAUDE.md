# LIVNAT — ליבנת אדרי — Skin & Soul

Hebrew RTL landing page for a beauty clinic in Hadera. Stack: Next.js 16
(App Router) + Tailwind v4 + base-ui. Heebo font.
Brand palette: warm cream + bronze gold + soft blue (oklch).

## Project structure
- app/ — App Router pages
- components/site/ — page sections (hero, certifications-strip, services,
  about, testimonials, process, podcast, contact, footer)
- components/site/site-config.ts — single source of truth for business info
- components/ui/ — base-ui primitives (button, input, textarea, sheet, badge)
- public/brand/ — logo files (PNG + SVG source)

## Conventions
- All copy in Hebrew RTL
- Use `<Button render={<a href=... />}>` pattern (base-ui, no `asChild`)
- Brand colors: see app/globals.css `--brand-*` tokens
- Reveal wrapper for scroll-triggered fade-ins (no framer-motion)
- IntersectionObserver for AnimatedCounter (no scroll listeners)

## Workflow
- `npm run dev` — local dev (http://localhost:3000)
- `npm run build` — production build (must pass before push)

## What still needs to be added
- Real testimonials (replace placeholders in components/site/testimonials.tsx)
- Portrait photo of Livnat (add to public/brand/livnat-portrait.jpg, embed in about.tsx)
- Photos of the clinic (add to public/clinic/, embed in about.tsx)
- Static OG image (1200x630) → public/og.png

## Source / template
Generated from the landing-page-builder skill at
`landing-page-builder-skill/templates/`.
