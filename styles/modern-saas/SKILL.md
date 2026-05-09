---
name: lpb-modern-saas
description: "Build Hebrew RTL Modern SaaS / Tech Product landing pages in the Linear/Vercel/Stripe/Anthropic style. Stack: Next.js 16 + Tailwind v4 + base-ui. Includes: bento feature grid, code-in-context blocks, gradient mesh hero, animated logo cloud marquee, code blocks with Shiki syntax highlighting, magnetic CTAs, KBD chips, status pill, pricing tiers with gradient borders. Triggers: 'build a SaaS landing page', 'create marketing site for [SaaS / dev tool / API / B2B]', 'Linear-style site', 'Vercel-style site', 'create site for our startup'."
---

# Modern SaaS / Tech Product — Hebrew RTL

For Israeli B2B SaaS, dev tools, cybersecurity, AI infra, fintech APIs, observability — anyone who wants the "Silicon Valley credibility" feel.

> **Full research:** see `../../research/01-modern-saas.md`

## When to Use

User wants a landing page that feels like **Linear, Vercel, Stripe, Notion, Anthropic, Resend, Framer**. Hallmarks: dark or warm cream backgrounds, real product screenshots in bento, animated gradient mesh, code blocks, logo clouds, magnetic interactions.

## Required Information from User

### 1. Product Identity
- Product name (English preferred)
- One-line value prop ("The platform for the modern web")
- 2-3 sentence description
- Target persona (engineers / PM / CTO / marketers / etc.)

### 2. Theme Direction
Pick one of three:
- **A — Linear/Vercel "Deep Space"** (dark + indigo accent)
- **B — Stripe/Notion "Clean Light"** (white + blurple)
- **C — Anthropic/Resend "Editorial Warm"** (cream + coral)

### 3. Hero Visual
- Real product screenshot, OR
- Dashboard mockup (we'll generate frame), OR
- Animated gradient mesh + headline only

### 4. Bento Features (4-8 tiles)
For each tile: title (3-5 words), 1-line description, visual type (screenshot / icon-illustration / animated counter / chart / video loop)

### 5. Code-in-Context Blocks (1-3)
For each: language, snippet (~10 lines), what the rendered output should show

### 6. Logo Cloud (10-30 customer logos)
PNG/SVG of customer companies (Israeli + international)

### 7. Stats Row (3-5 metrics)
e.g., "99.999% uptime", "₪1.9T processed", "135+ countries"

### 8. Pricing Tiers (2-3 plans)
Plan name + monthly price + features list + CTA. Note "kept it on annual?"

### 9. Testimonials (3-6)
Quote + name + title + company + avatar

### 10. Changelog Entries (last 5-8)
Date + version + 1-2 line summary

## Visual Identity

### Token Palette (Theme A — Deep Space)
```css
:root {
  --bg: oklch(0.13 0.01 270);
  --surface: oklch(0.18 0.012 270);
  --border: oklch(0.27 0.01 270);
  --fg: oklch(0.96 0.005 270);
  --muted-fg: oklch(0.65 0.01 270);
  --accent: oklch(0.72 0.18 295);
  --gradient-from: oklch(0.65 0.22 305);
  --gradient-to: oklch(0.7 0.2 220);
  --code-bg: oklch(0.10 0.01 270);
  --grain-opacity: 0.04;
  --bento-radius: 12px;
  --kbd-bg: oklch(0.22 0.01 270);
}
```

### Typography
- Sans: **Heebo Variable** (Hebrew) + **Geist Sans** / Inter (Latin)
- Mono: **Geist Mono** / JetBrains Mono (code blocks always LTR)
- Hero h1: 56-88px, weight 500-600, tracking -0.03em, soft text-gradient
- Eyebrow: 12-13px uppercase mono in accent color

## Page Architecture

```
app/page.tsx
├── Header (sticky, scroll-aware, glass blur)
├── Hero
│   ├── Eyebrow chip ("What's new in v3 →")
│   ├── h1 (with gradient text)
│   ├── Sub-headline
│   ├── Dual CTA (filled primary + ghost secondary)
│   └── Product visual (screenshot or animated bento preview)
├── LogoCloud (animated marquee, grayscale, hover-color)
├── BentoFeatureGrid (4-8 tiles, mixed sizes)
├── CodeInContext (split: code left, rendered output right) ×1-3
├── StatsRow (3-5 numerics with count-up)
├── ComparisonTable (us vs them)
├── PricingTiers (3 cards with gradient highlight on middle)
├── TestimonialWall (masonry)
├── Changelog (recent updates feed)
├── CTABanner (gradient mesh + email field)
└── Footer (mega-grid + status pill "All systems operational")
```

## Distinctive Components

- `CodeBlock` — Shiki syntax highlighting, copy button, language tabs (always `dir="ltr"`)
- `TerminalDemo` — animated typing of `npm i ...`
- `LogoCloud` — infinite marquee, pause-on-hover, RTL-reversible
- `GradientMesh` — SVG/canvas blurred radial gradients in hero
- `GrainOverlay` — SVG noise filter for textured surfaces
- `KbdChip` — keyboard shortcut chip (`⌘K`), stays LTR
- `ChangelogItem` — date + version pill + 1-line summary
- `BentoCard` — sizes 1×1, 2×1, 2×2 with optional autoplay video
- `StatusPill` — green dot + "All systems operational"
- `ComparisonTable` — check/x glyphs, sticky first column
- `GlowBorder` — card with conic-gradient animated border (mask-composite trick)
- `PricingCard` — gradient highlight ring on featured tier
- `DashboardMockup` — framed product screenshot with shadow + bezel

## Animation Patterns

- Magnetic CTA buttons (cursor-attraction, 0.35 strength)
- Conic-gradient borders rotating slowly on featured cards (8s)
- Scroll-triggered code reveals (lines fade in sequentially, 30-60ms stagger)
- Cursor-following spotlight on dark hero
- Subtle parallax on hero bento (mouse-tilt 5-8deg max)
- Number count-up on stats when in view
- Theme toggle with view-transition API

## Hebrew RTL Adaptations

- `<html lang="he" dir="rtl">`
- Code blocks always `dir="ltr"` (don't auto-flip; product UIs are LTR)
- Logo cloud marquee reverses in RTL (or stays neutral if symmetric)
- Bento screenshots stay LTR
- Arrow icons in CTAs flip via `rtl:scale-x-[-1]`
- KBD chips stay LTR (`⌘K` always)
- Numerals: Latin digits in stats; ₪ before number

## Reference Sites

1. **linear.app** — gold-standard bento, magnetic CTAs, dev-tool feel
2. **vercel.com** — Geist + globe + terminal + light/dark toggle
3. **stripe.com** — gradient mesh hero, code+visual pairs
4. **resend.com** — dark monospace-forward, code+email-preview
5. **anthropic.com** — warm editorial variant

## Best Fit For (Hebrew/Israeli market)

Israeli B2B SaaS (Monday-style new entrants), dev tools / API companies (Aporia, Coralogix, Lightrun), cybersecurity vendors (Wiz, Snyk, Cycode adjacent), fintech APIs (Tipalti-style), AI startups (AI21, D-ID category), cloud infra / observability tools, Hebrew indie hackers shipping global products.

## Status

🟡 SKILL spec complete. Templates and demo site pending.
