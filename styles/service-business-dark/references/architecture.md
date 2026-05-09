# Project Architecture

## Directory Tree

```
project-root/
├── app/
│   ├── layout.tsx              ← RTL <html>, Heebo font, full Metadata, JsonLd injection
│   ├── page.tsx                ← Renders all sections in order
│   ├── share/page.tsx          ← Re-exports Home — fresh URL for WhatsApp cache busting
│   ├── not-found.tsx           ← Branded 404 with logo + CTAs
│   ├── icon.tsx                ← 32×32 PNG via ImageResponse (favicon)
│   ├── apple-icon.tsx          ← 180×180 PNG via ImageResponse
│   ├── globals.css             ← Theme tokens (oklch), keyframes, .bg-grid utility
│   ├── robots.ts               ← Static robots.txt generator
│   └── sitemap.ts              ← Static sitemap.xml generator
├── components/
│   ├── site/                   ← Page-level components (this project)
│   │   ├── site-config.ts      ← Single source of truth: brand, contact, copy, nav
│   │   ├── header.tsx          ← Sticky header, scroll-aware shadow, Sheet for mobile
│   │   ├── footer.tsx          ← 3-col grid: brand+desc / nav / contacts
│   │   ├── hero.tsx            ← Section: badge + h1 + tagline + p + CTAs + stats
│   │   ├── certifications-strip.tsx  ← Compact 4-badge trust strip below Hero
│   │   ├── services.tsx        ← Bento 8-col grid, varied sizes, 1 featured (accent)
│   │   ├── about.tsx           ← 2-col: bullets list + branded image card
│   │   ├── testimonials.tsx    ← 3 cards, middle one featured (raised + accent)
│   │   ├── process.tsx         ← 4-step horizontal timeline (lg) / stacked (mobile)
│   │   ├── contact.tsx         ← 4 contact cards + form in spotlight card
│   │   ├── contact-form.tsx    ← Templates select + image upload + FormSubmit/WhatsApp logic
│   │   ├── mobile-cta-bar.tsx  ← Fixed bottom bar (md:hidden), call + WhatsApp
│   │   ├── whatsapp-float.tsx  ← Floating green button (md+ only) after scroll
│   │   ├── brand-mark.tsx      ← Round logo badge using /brand/logo-circle.png
│   │   ├── logo.tsx            ← LogoMark + LogoWordmark SVG (fallback if no PNG)
│   │   ├── spotlight-card.tsx  ← Mouse-tracking radial glow + gradient border
│   │   ├── magnetic.tsx        ← Vanilla cursor-attraction wrapper (no framer)
│   │   ├── animated-counter.tsx ← IntersectionObserver-based count-up
│   │   ├── reveal.tsx          ← Scroll-triggered fade-in wrapper (variants: up/in/scale/left/right)
│   │   ├── use-reveal.ts       ← IntersectionObserver custom hook
│   │   ├── sparks.tsx          ← 8 floating yellow particles in Hero bg
│   │   └── json-ld.tsx         ← Schema.org Electrician/LocalBusiness data
│   └── ui/                     ← shadcn/ui primitives (auto-generated via shadcn cli)
│       ├── button.tsx          ← base-ui Button with cva variants (use `render` prop, NOT asChild)
│       ├── input.tsx
│       ├── textarea.tsx
│       ├── sheet.tsx           ← Mobile menu container
│       └── badge.tsx
├── lib/
│   └── utils.ts                ← cn() helper (clsx + tailwind-merge)
├── public/
│   ├── brand/
│   │   ├── logo.png            ← Original (any aspect ratio)
│   │   ├── logo-mark.png       ← Square crop centered on the logo
│   │   └── logo-circle.png     ← Square with circular alpha mask
│   └── og.png                  ← Static 1200×630 OG image (generated via PIL)
├── .github/
│   └── workflows/
│       └── deploy.yml          ← Vercel CI/CD (preview on PR, prod on main)
├── CLAUDE.md                   ← Project rules: RTL, base-ui, Heebo, Hebrew copy
├── package.json
├── next.config.ts
├── tailwind.config.ts          ← (Optional — Tailwind v4 uses @theme inline in globals.css)
├── tsconfig.json
└── components.json             ← shadcn config
```

## Section Render Order in `app/page.tsx`

```tsx
<SiteHeader />
<main className="flex-1 pb-16 md:pb-0">
  <Hero />                  // ← Above the fold
  <CertificationsStrip />   // ← Trust signals (4 badges)
  <Services />              // ← Bento grid (6 services)
  <About />                 // ← Owner story + bullets + logo
  <Testimonials />          // ← 3 reviews (1 featured)
  <Process />               // ← How it works (4 steps)
  <Contact />               // ← 4 contact cards + form
</main>
<SiteFooter />
<MobileCtaBar />           // ← Fixed bottom on mobile
<WhatsAppFloat />          // ← Floating green on desktop
```

## Component Dependency Graph

```
Reveal ─┐
        ├─→ Hero, Services, About, Testimonials, Process, Contact
useReveal hook ─┘

SpotlightCard ─→ Services cards, About card, Testimonials, Process, Contact items
Magnetic ─→ Hero primary CTA only
AnimatedCounter ─→ Hero stats
Sparks ─→ Hero only
BrandMark ─→ Header, Footer, NotFound
LogoMark/LogoWordmark ─→ BrandMark fallback
```

## Critical Files to Customize per Project

For each new business, change ONLY:

| File | What changes |
|---|---|
| `components/site/site-config.ts` | All text — brand, owner, phone, email, area, years, jobs |
| `components/site/services.tsx` | The 6 service cards' content (icons, titles, descriptions) |
| `components/site/about.tsx` | The 6 bullets + heading + paragraph |
| `components/site/testimonials.tsx` | The 3 testimonial objects |
| `components/site/contact-form.tsx` | The 7 message templates |
| `app/globals.css` | Color scheme (light/dark) + brand color values |
| `public/brand/*.png` | Logo files |
| `public/og.png` | Generated OG image (regen via Python script) |
| `.github/workflows/deploy.yml` | Repo-specific (no template changes needed) |
| `CLAUDE.md` | Project name + business context |

Everything else in `components/site/` is **structural** and stays as-is across all projects.

## Build Verification

After all changes:
```bash
npm run build
```

Should output:
```
✓ Compiled successfully in ~10s
✓ Generating static pages (8/8)
Route (app)
┌ ○ /
├ ○ /_not-found
├ ○ /apple-icon
├ ○ /icon
├ ○ /robots.txt
├ ○ /share
└ ○ /sitemap.xml
○  (Static)  prerendered as static content
```
