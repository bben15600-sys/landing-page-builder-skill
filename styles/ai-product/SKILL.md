---
name: lpb-ai-product
description: "Build Hebrew RTL AI Product / Dev Tool landing pages in the Cursor/Bolt/v0/Lovable/Claude.com style. Stack: Next.js 16 + Tailwind v4 + base-ui. Includes: prompt-input hero, streaming text reveal, model comparison table, code-output split, integration badge grid, gradient mesh, animated conic borders, capability cards. Triggers: 'build a site for my AI product', 'AI startup landing page', 'LLM wrapper site', 'AI agent landing page', 'create site for [AI product / chatbot / GenAI tool]'."
---

# AI Product / Dev Tool — Hebrew RTL

For Israeli AI startups, AI consultants, automation agencies, GenAI training, prompt-engineering services, Hebrew-native chatbots.

> **Full research:** see `../../research/02-ai-product.md`

## When to Use

User is launching an AI product (LLM wrapper, agent, AI workflow tool, GenAI consumer app, prompt engineering service). Wants the look of **Cursor, Bolt, Lovable, Perplexity, v0, Claude.com**.

## Required Information from User

### 1. Product Identity
- Product name (English preferred)
- One-line value prop ("Build apps by chatting with AI")
- Hebrew tagline
- Target user (developers / marketers / founders / etc.)

### 2. Theme Direction
- **A — Cream/Terracotta (Anthropic-style)** — warm, editorial, accessible
- **B — Dark Neon (Bolt/Replit)** — technical, electric violet+cyan
- **C — Mono Light (Cursor/v0)** — pristine white + rainbow gradient

### 3. Hero Pattern
Pick one:
- Literal prompt input ("What will you build today?") with cycling placeholder examples
- Streaming text reveal (token-by-token typewriter answering a sample)
- Side-by-side prompt → output split panes
- Autoplay demo video of agent solving a task

### 4. Sample Prompts (4-8)
Rotating placeholders for prompt-input hero. Hebrew examples: "תכנן דף נחיתה לעורך דין", "כתוב מודעה לקיר ההורות שלי"

### 5. Capabilities Grid (3-6)
For each: title + description + visual sample (code/output snippet, animated icon, mini playground)

### 6. Model Comparison
If multi-tier: model names + price-per-million-tokens + checkmark grid of features

### 7. Use Cases (3-5)
Carousel: Writing / Coding / Research / etc. with example output

### 8. Integrations (10-20 logos)
GitHub, Slack, Stripe, Vercel, Notion, Linear, etc.

### 9. Pricing
Token/credit-based tiers with monthly cap

### 10. Testimonials (named at recognizable companies)

## Visual Identity

### Token Palette (Theme B — Dark Neon)
```css
:root {
  --bg: oklch(0.09 0 0);
  --surface: oklch(0.14 0.01 270);
  --fg: oklch(0.98 0 0);
  --muted-fg: oklch(0.65 0.01 270);
  --primary: oklch(0.72 0.20 285);    /* electric violet */
  --secondary: oklch(0.78 0.18 200);  /* cyan */
  --gradient-ai: conic-gradient(from 180deg, oklch(0.72 0.20 285), oklch(0.78 0.18 200), oklch(0.80 0.18 330), oklch(0.72 0.20 285));
  --cursor-glow: 0 0 24px oklch(0.78 0.18 285 / 0.45);
  --prompt-bg: oklch(0.16 0.01 270);
  --prompt-ring: oklch(0.72 0.20 285 / 0.35);
  --stream-cursor: oklch(0.72 0.20 285);
  --code-bg: oklch(0.12 0.01 260);
  --grain-opacity: 0.04;
}
```

### Typography
- Sans: **Heebo Variable** (Hebrew) + Inter or Geist Sans (Latin)
- Mono: JetBrains Mono / Geist Mono / IBM Plex Mono (code stays LTR)
- Hero h1: clamp 56-96px, tight tracking -0.04em, optional gradient text

## Page Architecture

```
app/page.tsx
├── Header
├── PromptInputHero
│   ├── Headline + subhead
│   ├── Animated prompt input (focus glow, rotating placeholder)
│   └── Sample example chips below ("Try: ...")
├── LogoStrip ("Trusted by teams at...")
├── TryItDemo (interactive playground OR streaming reveal)
├── CapabilitiesGrid (3-6 cards with code/output samples)
├── CodeOutputSplit (prompt left → output right) ×1-2
├── ModelComparisonTable (3-tier with prices)
├── UseCaseCarousel (Writing / Coding / Research)
├── IntegrationBadgeGrid (greyscale → color on hover)
├── MetricsRow (millions of projects, etc.)
├── TestimonialWall
├── PricingTiers (token-based)
├── TrustSafetyBand (SOC2 / SSO / data residency)
├── FinalCTA + waitlist
└── Footer
```

## Distinctive Components

- `PromptInputHero` — focusable input with animated caret, cycling placeholder, gradient ring on focus
- `StreamingTextReveal` — token chunks reveal with blinking cursor
- `ModelComparisonTable` — 3-tier with checkmark/x-mark and price-per-Mtok
- `CodeOutputSplit` — left: prompt card; right: monospace JSON/JSX panel with Shiki
- `IntegrationBadgeGrid` — greyscale logos color on hover
- `WaitlistInput` — email + position counter
- `GradientMeshBackground` — CSS conic-gradient + blur-3xl blobs
- `CapabilityCard` — animated gradient border (mask-composite trick)

## Animation Patterns

- Token-by-token reveal (`@keyframes tokenIn`, 30-60ms stagger)
- Animated conic-gradient borders (rotate 8s linear infinite)
- Cursor sparkle/streak trail
- Scroll-driven prompt → output transition
- Subtle SVG noise grain overlay on dark sections
- Number tickers and logo marquees

## Hebrew RTL Adaptations

- Prompt input uses `dir="auto"` + `unicode-bidi: plaintext`
- Code/JSON output panels forced `dir="ltr"`
- Streaming reveal animates from RIGHT edge in RTL (token order reverses)
- Gradient mesh and decorative elements mirrored via `[dir=rtl]` selectors
- Monospace fallback stack: `'JetBrains Mono', 'Fira Code', 'IBM Plex Mono', ui-monospace`

## Reference Sites

1. **cursor.com** — clean light + spring-animated demo with real syntax highlighting
2. **lovable.dev** — chat-input-as-hero with animated gradient pulse
3. **bolt.new** — bold "What will you build today?" with glow accents
4. **v0.app** — template grid + community proof; Geist typography
5. **claude.com** — warm cream/terracotta proves AI doesn't have to look cold

## Best Fit For (Hebrew/Israeli market)

Israeli AI startups (saturated, fast-growing — Tel Aviv has dozens of LLM-wrapper and agent companies), AI consultants and prompt engineers, automation/RPA agencies (n8n/Make integrators), Hebrew SaaS targeting Israeli market, GenAI training bootcamps, indie devs launching Hebrew-native chatbots, B2B AI tooling for Israeli enterprises (banking, security, legal-tech) where dark-neon variant signals technical credibility.

## Status

🟡 SKILL spec complete. Templates and demo site pending.
