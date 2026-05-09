# Style: Modern SaaS / Tech Product

References: Linear, Vercel, Stripe, Notion, Anthropic, Resend, Framer.

## Visual Identity

**Color palettes (oklch):**

*Palette A — Linear/Vercel "Deep Space"* (dark default):
- `--bg: oklch(0.13 0.01 270)` near-black with cool blue tilt
- `--surface: oklch(0.18 0.012 270)` elevated card
- `--border: oklch(0.27 0.01 270)` subtle divider
- `--fg: oklch(0.96 0.005 270)` off-white
- `--muted-fg: oklch(0.65 0.01 270)`
- `--accent: oklch(0.72 0.18 295)` indigo/violet (Linear's signature)
- gradient: `oklch(0.65 0.22 305)` → `oklch(0.7 0.2 220)`

*Palette B — Stripe/Notion "Clean Light"*:
- `--bg: oklch(1 0 0)` pure white
- `--surface: oklch(0.985 0.003 250)`
- `--fg: oklch(0.15 0.01 260)` near-black
- `--accent: oklch(0.55 0.22 265)` Stripe blurple
- Hero gradient mesh: blurple → teal → coral cycling

*Palette C — Anthropic/Resend "Editorial Warm"*:
- `--bg: oklch(0.97 0.015 75)` cream
- `--fg: oklch(0.22 0.03 35)` warm charcoal
- `--accent: oklch(0.68 0.16 35)` coral/terracotta

**Typography:**
- Sans: Geist Sans, Inter, or Söhne — variable 400/500/600/700
- Mono: Geist Mono, JetBrains Mono, IBM Plex Mono (code, eyebrows, KBD chips)
- Hero h1: 56-88px, weight 500-600, tracking -0.03em, soft text-gradient
- Body: 16-18px, line-height 1.5-1.65
- Eyebrow: 12-13px uppercase mono in accent

**Spatial system:**
- Max content 1200-1280px, prose 640-720px
- Section padding 96-160px vertical
- 8pt grid; cards radius 12-16px (Linear 12, Vercel 8)

## Hero Patterns
Eyebrow chip ("what's new" pill linking to changelog) → 1-2 line declarative h1 → sub-headline (~22ch × 2 lines) → dual CTA (filled primary + ghost secondary with arrow) → product visual (real UI screenshot, dashboard mockup, animated bento). Common devices: animated gradient mesh, fine grain overlay, floating glow blobs, code block with copy button beside the screenshot, animated globe/network nodes (Vercel), terminal install command.

## Section Inventory
1. Logo cloud (animated marquee, grayscale with hover-color)
2. Bento feature grid (mixed sizes, real UI screenshots inside)
3. Code-in-context (split: code left, rendered output right)
4. Stats row (99.999% / $1.9T / 135+ countries)
5. Comparison table (us vs them, checkmarks)
6. Pricing tiers (3 cards, middle highlighted with gradient border)
7. Testimonial wall / quote with avatar (masonry)
8. Changelog / "What's new" feed
9. CTA banner with gradient mesh
10. Footer mega-grid with status indicator (green dot + "All systems operational")

## Distinctive Components Needed
- `CodeBlock` with syntax highlighting (Shiki), copy button, language tabs
- `TerminalDemo` animated typing of `npm i ...`
- `LogoCloud` infinite marquee, pause-on-hover, RTL-reversible
- `GradientMesh` SVG/canvas blurred radial gradients
- `GrainOverlay` SVG noise filter
- `KbdChip` for keyboard shortcuts (`⌘K`)
- `ChangelogItem` with date, version pill, diff
- `BentoCard` (sizes: 1x1, 2x1, 2x2)
- `StatusPill` (green dot + label)
- `ComparisonTable` with check/x glyphs
- `FeaturePill` mono-eyebrow chip
- `GlowBorder` card with conic-gradient animated border
- `PricingCard` with gradient highlight ring
- `DashboardMockup` framed product screenshot with shadow + bezel

## Animation / Interaction Patterns
- Magnetic CTA buttons (cursor pull)
- Conic-gradient borders rotating slowly on featured cards
- Scroll-triggered code reveals (lines fade in sequentially)
- Cursor-following spotlight on dark hero
- Subtle parallax on hero bento (mouse-tilt 5-8deg max)
- Marquee logo cloud, infinite, pause on hover
- Number count-up on stats when in view
- Theme toggle with view-transition API
- Tab-switcher for code language with smooth height transition

## Hebrew RTL Adaptations
- Font stack: Heebo or Rubik for Hebrew body/headlines + Geist Mono for code/eyebrows
- Code blocks remain `dir="ltr"` inside RTL layout
- Logo cloud marquee reverses direction in RTL (or stays neutral if symmetric)
- Bento card screenshots stay LTR (product UIs are LTR)
- Arrow icons in CTAs flip (use logical `start/end`)
- KBD chips stay LTR (`⌘K` not RTL)
- Numerals: Latin digits in stats; Hebrew fine for body counts

## Top 4 Reference Sites
1. **linear.app** — Dark indigo, bento grid of real product UIs, magnetic CTAs — gold standard for dev-tool feel
2. **vercel.com** — Geist font + animated globe + terminal install + light/dark toggle, near-perfect Core Web Vitals
3. **stripe.com** — Iconic gradient mesh hero, side-by-side code+visual pairs
4. **resend.com** — Dark monospace-forward, code+email-preview pairing, minimalist developer-first

## Recommended Tokens
```
--grain-url, --gradient-mesh-from/-via/-to,
--code-bg, --code-fg, --code-border,
--code-keyword, --code-string, --code-comment, --code-number, --code-fn,
--kbd-bg, --kbd-border, --kbd-shadow,
--glow-primary, --glow-secondary,
--marquee-duration, --marquee-gap,
--bento-radius, --bento-gap,
--status-online, --status-degraded, --status-down,
--shadow-card-sm, --shadow-card-lg,
--font-sans (Heebo/Inter), --font-mono (Geist Mono/JetBrains)
```

## Best Fit For (Hebrew Israeli market)
- Israeli B2B SaaS (Monday-style, but newer entrants)
- Dev tools / API companies (Aporia, Granulate-alikes, Coralogix, Lightrun)
- Cybersecurity vendors (Wiz, Snyk, Cycode adjacent)
- Fintech APIs (Tipalti-style)
- AI startups (AI21, D-ID category)
- Cloud infra / observability tools
- Hebrew indie hackers shipping global products needing a bilingual marketing site
- Y Combinator-style early-stage Israeli startups for "Silicon Valley credibility" feel

## Sources
- linear.app, vercel.com, stripe.com, anthropic.com, framer.com
- framiq.app/blog/best-saas-landing-pages-2026
- saasframe.io/blog/10-saas-landing-page-trends-for-2026-with-real-examples
