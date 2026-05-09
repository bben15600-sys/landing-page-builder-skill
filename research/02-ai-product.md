# Style: AI Product / Dev Tool

References: Cursor, Bolt.new, Lovable, Perplexity, Replit, v0, Claude.com.

## Visual Identity
Two dominant directions:
- **Ultra-clean light** (Lovable, v0, Claude.com, Cursor home): off-white/cream, generous whitespace, single vibrant gradient blob behind hero, dark near-black text. Anthropic uses warm cream `oklch(0.97 0.02 70)` with terracotta `oklch(0.70 0.14 45)`.
- **Dark technical** (Bolt, Replit, Perplexity, Cursor product pages): near-black `oklch(0.09 0 0)` canvases, electric accent gradients, subtle grain.

Almost universal: a "tech-bro gradient" — purple → blue → teal — used as hero glow, button fill, or animated mesh.

**3 oklch palettes:**
1. **Cream/Terracotta (Anthropic-style):** bg `oklch(0.97 0.02 70)`, ink `oklch(0.18 0.01 60)`, accent `oklch(0.70 0.14 45)`, gradient `oklch(0.78 0.16 50) → oklch(0.65 0.18 25)`.
2. **Dark Neon (Bolt/Replit):** bg `oklch(0.09 0 0)`, surface `oklch(0.14 0.01 270)`, text `oklch(0.98 0 0)`, primary `oklch(0.72 0.20 285)` (electric violet), secondary `oklch(0.78 0.18 200)` (cyan).
3. **Mono Light (Cursor/v0):** bg `oklch(1 0 0)`, ink `oklch(0.15 0 0)`, gradient mesh `oklch(0.85 0.15 320) → oklch(0.85 0.15 220)`.

**Typography:** Inter (default), Geist Sans + Geist Mono (Vercel/v0), JetBrains Mono / IBM Plex Mono for code. Custom display: Söhne or Tiempos for Anthropic warmth. Tight tracking on giant display (-0.04em), variable-weight kinetic type.

## Hero Patterns Specific to AI
- **Literal prompt input hero** ("What will you build today?" — Bolt; "What do you want to create?" — v0; chat box — Lovable) where the page itself looks like the product.
- **Streaming text reveal**: token-by-token typewriter answering a sample question.
- **Side-by-side prompt → output** split panes (Cursor, v0).
- **Autoplay video/canvas demo** of agent solving a task in seconds.
- **Animated gradient mesh** behind centered headline + CTA.

## Section Inventory
1. Prompt-input hero with rotating placeholder examples
2. Logo strip ("Trusted by teams at…")
3. "Try it" interactive demo / live playground
4. Capabilities grid (3–6 cards with code/output samples)
5. Model comparison table (Opus/Sonnet/Haiku-style tiers)
6. Use-case carousel (Writing / Coding / Research)
7. Integration badge grid (GitHub, Slack, Stripe, Vercel)
8. Numbers/metrics row ("millions of projects")
9. Testimonials from named execs at recognizable companies
10. Pricing with token/credit-based tiers
11. Trust + safety / SOC2 / SSO band
12. Final CTA + waitlist or "Start free"

## Distinctive Components Needed
- `PromptInputHero` (focusable input, animated caret, cycling placeholder, gradient ring on focus)
- `StreamingTextReveal` (token chunks, blinking cursor, optional `.streaming::after` block caret)
- `ModelComparisonTable` (3-tier with checkmark/x-mark and price-per-Mtok)
- `CodeOutputSplit` (left: prompt card; right: monospace JSON/JSX panel with syntax highlighting)
- `IntegrationBadgeGrid` (greyscale logos that color on hover)
- `WaitlistInput` (email + position counter)
- `GradientMeshBackground` (CSS conic-gradient + blur-3xl blobs)
- `CapabilityCard` with animated gradient border (`mask-composite` trick)

## Animation Patterns
- Token-by-token reveal (`@keyframes tokenIn` with 30–60ms stagger)
- Animated conic-gradient borders on cards (rotate 8s linear infinite)
- Cursor sparkle/streak trail following pointer
- Scroll-driven prompt → output transition (Framer Motion `useScroll`)
- Subtle noise/grain overlay (SVG turbulence) on dark sections
- Number tickers and logo marquees

## Hebrew RTL Adaptations
- Prompt input uses `dir="auto"` + `unicode-bidi: plaintext` so Hebrew flows RTL while embedded code/URLs stay LTR.
- Code/JSON output panels forced `dir="ltr"` regardless of page direction.
- Streaming reveal animates from right edge in RTL — token order reverses.
- Gradient mesh and decorative elements mirrored via `[dir=rtl]` selectors; logos and integration badges are direction-neutral.
- Monospace fallback stack: `'JetBrains Mono', 'Fira Code', 'IBM Plex Mono', ui-monospace`.

## Top 5 Reference Sites
1. **cursor.com** — clean light hero + spring-animated product demo with real syntax-highlighted code.
2. **lovable.dev** — chat-input-as-hero pattern with animated gradient pulse.
3. **bolt.new** — bold "What will you build today?" prompt hero with glow accents.
4. **v0.app** — template grid + community proof; Geist typography.
5. **claude.com** — warm cream/terracotta palette proves AI doesn't have to look cold; clickable example prompts.

## Recommended Tokens
```
--gradient-ai: conic-gradient(from 180deg, oklch(0.72 0.20 285), oklch(0.78 0.18 200), oklch(0.80 0.18 330), oklch(0.72 0.20 285));
--cursor-glow: 0 0 24px oklch(0.78 0.18 285 / 0.45);
--prompt-bg: oklch(0.99 0.005 270);
--prompt-bg-dark: oklch(0.16 0.01 270);
--prompt-ring: oklch(0.72 0.20 285 / 0.35);
--stream-cursor: oklch(0.72 0.20 285);
--code-bg: oklch(0.12 0.01 260);
--mesh-blob-1: oklch(0.85 0.15 320);
--mesh-blob-2: oklch(0.85 0.15 220);
--grain-opacity: 0.04;
```

## Best Fit For (Hebrew/Israeli market)
Israeli AI startups (Tel Aviv has dozens), AI consultants and prompt engineers, automation/RPA agencies (n8n/Make integrators), Hebrew SaaS, GenAI training bootcamps, indie devs launching Hebrew-native chatbots, B2B AI tooling for Israeli enterprises (banking, security, legal-tech) where dark-neon variant signals technical credibility.

## Sources
- cursor.com, bolt.new, lovable.dev, v0.app, claude.com, replit.com
- shadcn.io/theme/claude (oklch tokens)
- branding5.com Claude design guide
