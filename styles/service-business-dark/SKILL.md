---
name: landing-page-builder
description: "Build Hebrew RTL premium landing pages for local/service businesses (electricians, plumbers, contractors, garages, beauty, B2B services). Stack: Next.js 16 App Router + Tailwind v4 + shadcn/ui (base-ui). Includes: Hero with animated sparks/glow, CertificationsStrip, Services Bento grid, About with logo, Testimonials with featured card, Process timeline, Contact form with image upload + message templates + FormSubmit email integration, dynamic OG image (static PNG via Python/PIL), GitHub Actions auto-deploy to Vercel, custom brand colors via CSS variables, Heebo Hebrew font, scroll-triggered reveals, WhatsApp floating button, mobile CTA bar. Triggers: \"build me a landing page\", \"create site for [business]\", \"replicate ELI ENERGY template\", \"new electrician/plumber/contractor site\"."
---

# Landing Page Builder — Premium Hebrew RTL Service Business Sites

This skill captures the complete architecture of the **ELI ENERGY SOLUTIONS** site (the canonical reference build) and lets you generate identical-quality landing pages for any local/service business.

## When to Use

Invoke this skill when the user wants to:

- Build a landing page for a service business (electrician, plumber, contractor, garage, cleaning service, B2B service, healthcare clinic, beauty/spa, etc.)
- Replicate the ELI ENERGY template for a new client
- "Make me a site for X business"
- Onboard a new business onto the same template architecture

## Tech Stack (Required)

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router, no `src/` dir) |
| Styling | Tailwind v4 + shadcn/ui (base-ui, NOT Radix) |
| Font | Heebo (Google Fonts, Hebrew + Latin) |
| Color space | oklch() with CSS custom properties |
| Forms email | FormSubmit (formsubmit.co — no signup) |
| OG image | Static PNG generated via Python + PIL + Heebo TTF |
| Deployment | Vercel via GitHub Actions |
| Direction | RTL (`<html lang="he" dir="rtl">`) |

**Forbidden**:
- Radix UI (use base-ui instead)
- framer-motion (use CSS animations + IntersectionObserver hook)
- `<Button asChild>` (use `<Button render={<a href=... />}>`)
- Hebrew text in OG images via Satori (broken RTL — must use Python PIL with Heebo font)

## Required Information from User

Before building, collect:

### 1. Business Identity (required)
- **Brand name** (English preferred — e.g. "ELI ENERGY")
- **Brand suffix** (e.g. "SOLUTIONS")
- **Owner name** (Hebrew — e.g. "אלי דדון")
- **Tagline** (1 sentence, Hebrew — what they do)
- **Description** (2-3 sentences, Hebrew — value prop + credentials)

### 2. Brand Colors (pick navy/yellow OR collect)
- **Primary** (background or accent — oklch lightness/chroma/hue)
- **Secondary/Accent**
- Theme: **light** (default white bg) OR **dark** (navy bg with bright accents — like ELI ENERGY)

### 3. Contact (required for production)
- **Phone** (Israel format: `054-XXX-XXXX`)
- **WhatsApp** (full intl format: `9725XXXXXXXX`)
- **Email** (real, will be FormSubmit endpoint)
- **Service area** (cities or "כל הארץ")

### 4. Services (6 cards, exactly)
For each:
- Title (3-4 words Hebrew)
- Description (1-2 sentences Hebrew)
- Lucide icon name (see references/icons.md)
- Size: `sm` (2 cols) / `md` (3 cols) / `lg` (4 cols × 2 rows = featured)
- One service should be `accent: true` for the "התמחות בלעדית" featured card

### 5. About Bullets (6 trust signals)
For each: title + description + Lucide icon. Examples:
- Years experience
- Certifications
- Specialty (clean rooms / pharma / etc.)
- Compliance (standards)
- Insurance
- Personal service

### 6. Numbers
- `yearsExperience` (integer)
- `jobsCompleted` (integer)
- Optional: third stat label (e.g. "100% עמידה בתקנים", "24/7", "5 שנות אחריות")

### 7. Testimonials (3 minimum, pick 1 as featured)
- quote (real or placeholder until real reviews collected)
- name (initials OK: "יעל כ.")
- area / company
- service tag

### 8. Logo (required)
- Original PNG (recommended) — upload to Imgur, share URL
- Or describe + I'll build SVG version

### 9. Message Templates (6-8 for Contact form)
For service business:
- "תקלה דחופה"
- "הצעת מחיר"
- "בדיקה שנתית"
- "פרוייקט חדש"
- "אחזקה שוטפת"
- "ייעוץ"
- "אחר — חופשי"

Each with body template (Hebrew) with blanks for user to fill.

## Complete File Architecture

See `references/architecture.md` for full directory tree and what each file contains.

```
project-root/
├── app/
│   ├── layout.tsx           # RTL html, Heebo font, metadata + OG
│   ├── page.tsx             # Section composition
│   ├── share/page.tsx       # Cache-buster URL for WhatsApp shares
│   ├── not-found.tsx        # Branded 404 page
│   ├── icon.tsx             # 32x32 favicon (ImageResponse)
│   ├── apple-icon.tsx       # 180x180 apple icon
│   ├── globals.css          # Theme tokens + custom keyframes + bg-grid
│   ├── robots.ts            # SEO
│   └── sitemap.ts           # SEO
├── components/
│   ├── site/
│   │   ├── site-config.ts   # Single source of truth: brand, contact, copy
│   │   ├── header.tsx       # Scroll-aware, Sheet for mobile menu
│   │   ├── footer.tsx       # 3-col with brand + nav + contacts
│   │   ├── hero.tsx         # Badge + h1 + CTAs + Stats + Sparks
│   │   ├── certifications-strip.tsx  # 4 trust badges below Hero
│   │   ├── services.tsx     # Bento grid (8-col, varied sizes, 1 featured)
│   │   ├── about.tsx        # Bullets list + logo card
│   │   ├── testimonials.tsx # 3 cards, middle featured
│   │   ├── process.tsx      # 4-step timeline
│   │   ├── contact.tsx      # 4 contact cards + form
│   │   ├── contact-form.tsx # 7 templates + image upload + FormSubmit
│   │   ├── mobile-cta-bar.tsx # Fixed bottom bar (mobile only)
│   │   ├── whatsapp-float.tsx # Floating green button (desktop)
│   │   ├── brand-mark.tsx   # Logo badge (uses /brand/logo-circle.png)
│   │   ├── logo.tsx         # SVG logo + wordmark fallback
│   │   ├── spotlight-card.tsx # Mouse-tracking radial glow card
│   │   ├── magnetic.tsx     # Cursor attraction wrapper
│   │   ├── animated-counter.tsx # IntersectionObserver count-up
│   │   ├── reveal.tsx       # Scroll-triggered fade-in wrapper
│   │   ├── use-reveal.ts    # IntersectionObserver hook
│   │   ├── sparks.tsx       # 8 floating yellow particles
│   │   └── json-ld.tsx      # Schema.org Electrician / LocalBusiness
│   └── ui/                  # shadcn primitives (Button, Input, Sheet, etc.)
├── public/
│   ├── brand/
│   │   ├── logo.png         # Original (any size)
│   │   ├── logo-mark.png    # Square crop (for icons)
│   │   └── logo-circle.png  # Circular alpha (for badges)
│   └── og.png               # Static OG image (1200x630)
├── .github/workflows/
│   └── deploy.yml           # Vercel auto-deploy
├── CLAUDE.md                # Project instructions
└── package.json             # Next.js 16 deps
```

## Workflow

### Step 1: Gather Information
Ask the user for everything in "Required Information from User" above. If logo not provided, offer to recreate as SVG or use placeholder.

### Step 2: Bootstrap Next.js Project
```bash
npx create-next-app@latest <project-name> --typescript --tailwind --app --no-src-dir --turbopack --import-alias "@/*"
cd <project-name>
npm install lucide-react @base-ui-components/react clsx tailwind-merge class-variance-authority pillow
```

Add shadcn:
```bash
npx shadcn@canary init -d
npx shadcn@canary add button input textarea sheet badge
```

### Step 3: Setup CLAUDE.md
Copy from `templates/CLAUDE.md.template` — sets project conventions.

### Step 4: Layout + Globals
- Replace `app/layout.tsx` with template (sets RTL, Heebo, metadata, JsonLd)
- Replace `app/globals.css` with template (theme tokens, keyframes, bg-grid)
- Pick light or dark theme (see `references/colors-and-tokens.md`)

### Step 5: Site Config
Create `components/site/site-config.ts` from `templates/components/site-config.template.ts` — fill in brand/contact data.

### Step 6: Build Components Top-Down
Order matters (dependencies):
1. `lib/utils.ts` (cn helper)
2. `components/site/use-reveal.ts`
3. `components/site/reveal.tsx`
4. `components/site/spotlight-card.tsx`
5. `components/site/magnetic.tsx`
6. `components/site/animated-counter.tsx`
7. `components/site/sparks.tsx`
8. `components/site/logo.tsx` + `brand-mark.tsx`
9. `components/site/header.tsx` + `footer.tsx`
10. Sections: Hero, CertificationsStrip, Services, About, Testimonials, Process, Contact
11. `components/site/contact-form.tsx` (longest)
12. `components/site/whatsapp-float.tsx` + `mobile-cta-bar.tsx`
13. `components/site/json-ld.tsx`

All templates in `templates/components/`.

### Step 7: Logo Processing
If user provided a wide PNG (like the ELI ENERGY one with circle plate):
```bash
python3 ~/.claude/skills/landing-page-builder/scripts/process-logo.py <input.png> <output-dir>
```
Generates: `logo.png`, `logo-mark.png` (square), `logo-circle.png` (circular alpha).

### Step 8: Generate Static OG Image
Run `scripts/generate-og.py` with project parameters. Outputs `public/og.png`.

### Step 9: Setup Deployment
1. Push to GitHub
2. Add `.github/workflows/deploy.yml`
3. User adds 3 secrets to GitHub repo:
   - `VERCEL_TOKEN`
   - `VERCEL_ORG_ID`
   - `VERCEL_PROJECT_ID`
4. First push triggers deploy

### Step 10: Final Polish
- Run `npm run build` — must pass with zero errors
- Verify production deploy at the new domain
- Check OG image preview via Facebook Debugger
- Submit sitemap to Google Search Console

## Key Implementation Notes

### RTL Considerations
- `<html dir="rtl">` in layout
- All margins/paddings should use logical properties when possible: `me-` / `ms-` (margin-end/start)
- Lucide icons: arrows often need `transform scale-x-[-1]` to flip for RTL
- Text alignment: `text-right` is default in RTL context
- Floating elements: `bottom-X left-X` becomes physically right in RTL — use deliberately

### OG Image Generation
**DO NOT** use `app/opengraph-image.tsx` with Satori for Hebrew — Satori has known RTL bugs. Instead:
1. Generate static PNG via Python PIL with Heebo font
2. Save to `public/og.png`
3. Reference in `app/layout.tsx` metadata.openGraph.images
4. Add cache-buster version: `/og.png?v=N`

See `templates/scripts/generate-og.py`.

### FormSubmit Integration
- POST to `https://formsubmit.co/ajax/<email>`
- First submission triggers email verification (one-time setup)
- Supports file uploads via `FormData`
- Pass `_subject`, `_template=table`, `_captcha=false`
- Fallback: if email fails, fall back to WhatsApp deeplink

### Color Theme: Dark with Accent
For ELI ENERGY style (navy bg + yellow accent):
```css
--background: oklch(0.18 0.05 260);     /* navy dark */
--foreground: oklch(0.985 0 0);          /* white */
--card: oklch(0.23 0.05 260);            /* slightly lighter navy */
--primary: oklch(0.82 0.16 86);          /* golden yellow */
--primary-foreground: oklch(0.18 0.05 260);
--accent: oklch(0.82 0.16 86);
--brand-navy: oklch(0.18 0.05 260);
--brand-yellow: oklch(0.82 0.16 86);
```

### Color Theme: Light Trust (default for most B2C)
```css
--background: oklch(1 0 0);
--foreground: oklch(0.145 0 0);
--primary: oklch(0.55 0.22 255);  /* electric blue */
--accent: oklch(0.94 0.04 255);
```

See `references/colors-and-tokens.md` for full palettes per industry.

### Hebrew Text Pitfalls
- **bg-clip-text + text-transparent + nested components** — gradient won't apply through wrappers like `<AnimatedCounter />`. Use solid `text-primary` instead.
- **Numbers with toLocaleString("he-IL")** — works for he-IL formatting (commas in Hebrew).
- **Mixed Hebrew + English** — wrap each in span with `dir` attribute if order matters.

### Performance
- Use `loading="lazy"` on images below the fold
- `<Reveal>` wrapper uses IntersectionObserver — no scroll listeners
- All animations use `transform` / `opacity` only (GPU-accelerated)
- Sparks: keep at 8 max (more = distracting per UX rules)

## References

| File | Purpose |
|---|---|
| `references/architecture.md` | Full file tree + what each file does |
| `references/components.md` | Detailed component specs with key code |
| `references/colors-and-tokens.md` | Color palettes by industry + theme tokens |
| `references/customization.md` | How to adapt template for new business |
| `references/deployment.md` | GitHub Actions + Vercel setup |
| `references/icons.md` | Recommended Lucide icons by service type |
| `references/troubleshooting.md` | Common issues and fixes |

## Templates

| File | Purpose |
|---|---|
| `templates/CLAUDE.md.template` | Project rules |
| `templates/app/layout.template.tsx` | Root layout |
| `templates/app/globals.template.css` | Theme + animations |
| `templates/app/page.template.tsx` | Section composition |
| `templates/components/site-config.template.ts` | Brand data |
| `templates/components/hero.template.tsx` | Hero section |
| `templates/components/services.template.tsx` | Bento grid |
| `templates/components/about.template.tsx` | About + bullets |
| `templates/components/testimonials.template.tsx` | 3-card testimonials |
| `templates/components/process.template.tsx` | 4-step timeline |
| `templates/components/contact-form.template.tsx` | Form with templates + upload |
| `templates/components/spotlight-card.template.tsx` | Glow card |
| `templates/components/sparks.template.tsx` | Particles |
| `templates/components/reveal.template.tsx` | Scroll reveal |
| `templates/scripts/generate-og.py` | Static OG generator |
| `templates/scripts/process-logo.py` | Logo cropping |
| `templates/.github/workflows/deploy.yml` | Vercel CI/CD |

## Output Format

When user says "build me a site for <X>", produce:

1. **Discovery report** — confirm understanding, ask for missing info
2. **Project bootstrap commands** — exact bash to run
3. **File-by-file generation** — replace placeholders in templates with user data
4. **Deployment instructions** — GitHub + Vercel setup steps
5. **Verification checklist** — pre-launch QA

Never skip Step 1 (discovery) — bad data in = bad site out.
