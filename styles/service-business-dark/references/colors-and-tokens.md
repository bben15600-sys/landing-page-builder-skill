# Color Themes & Tokens

The template supports light or dark mode via CSS custom properties in `app/globals.css`.

## Reference Themes

### 1. Industrial / Trust Authority (DARK — ELI ENERGY canonical)

Best for: industrial services, premium B2B, security companies, premium home services

```css
:root {
  --background: oklch(0.18 0.05 260);     /* deep navy */
  --foreground: oklch(0.985 0 0);          /* white */
  --card: oklch(0.23 0.05 260);            /* lifted navy */
  --card-foreground: oklch(0.985 0 0);
  --popover: oklch(0.23 0.05 260);
  --popover-foreground: oklch(0.985 0 0);
  --primary: oklch(0.82 0.16 86);          /* golden yellow */
  --primary-foreground: oklch(0.18 0.05 260);
  --secondary: oklch(0.28 0.05 260);
  --secondary-foreground: oklch(0.985 0 0);
  --muted: oklch(0.27 0.04 260);
  --muted-foreground: oklch(0.78 0.02 260);
  --accent: oklch(0.82 0.16 86);
  --accent-foreground: oklch(0.18 0.05 260);
  --destructive: oklch(0.65 0.22 27);
  --border: oklch(0.32 0.04 260);
  --input: oklch(0.30 0.04 260);
  --ring: oklch(0.82 0.16 86);
  --brand-navy: oklch(0.18 0.05 260);
  --brand-yellow: oklch(0.82 0.16 86);
}
```

### 2. Electric Blue Modern (LIGHT)

Best for: residential electrician, smart home, modern services

```css
:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.145 0 0);
  --primary: oklch(0.55 0.22 255);         /* electric blue */
  --primary-foreground: oklch(0.99 0 0);
  --secondary: oklch(0.97 0 0);
  --muted: oklch(0.97 0 0);
  --muted-foreground: oklch(0.556 0 0);
  --accent: oklch(0.94 0.04 255);
  --accent-foreground: oklch(0.35 0.18 255);
  --border: oklch(0.922 0 0);
  --ring: oklch(0.55 0.22 255);
}
```

### 3. Healthcare / Medical (LIGHT)

Best for: clinics, doctors, dentists, medical services

```css
:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --primary: oklch(0.55 0.13 195);         /* medical teal */
  --primary-foreground: oklch(0.99 0 0);
  --accent: oklch(0.93 0.05 195);
  --accent-foreground: oklch(0.30 0.13 195);
  --ring: oklch(0.55 0.13 195);
}
```

### 4. Plumbing / Trades (LIGHT)

```css
:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --primary: oklch(0.50 0.18 240);         /* deep water blue */
  --primary-foreground: oklch(0.99 0 0);
  --accent: oklch(0.92 0.04 240);
}
```

### 5. Legal / Professional (LIGHT)

```css
:root {
  --background: oklch(0.98 0 0);
  --foreground: oklch(0.15 0.01 270);
  --primary: oklch(0.30 0.08 270);         /* deep purple-blue */
  --primary-foreground: oklch(0.99 0 0);
  --accent: oklch(0.85 0.10 60);           /* warm gold */
}
```

### 6. Beauty / Spa (LIGHT)

```css
:root {
  --background: oklch(0.99 0.005 30);       /* warm white */
  --foreground: oklch(0.20 0.04 30);
  --primary: oklch(0.65 0.15 15);          /* dusty rose */
  --primary-foreground: oklch(0.99 0 0);
  --accent: oklch(0.92 0.06 60);           /* soft peach */
}
```

### 7. Tech / SaaS (DARK)

```css
:root {
  --background: oklch(0.10 0.02 270);
  --foreground: oklch(0.97 0 0);
  --primary: oklch(0.65 0.25 290);         /* purple */
  --primary-foreground: oklch(0.99 0 0);
  --accent: oklch(0.55 0.30 320);          /* magenta */
}
```

## Decision Matrix

| Industry | Theme | Primary Hue (degrees) | Vibe |
|---|---|---|---|
| Industrial B2B | Dark | 86 (yellow) on 260 (navy) | Authority, trust, premium |
| Residential electrician | Light | 255 (blue) | Energetic, modern |
| Healthcare | Light | 195 (teal) | Clean, trustworthy, calm |
| Plumber | Light | 240 (water blue) | Reliable, established |
| Legal/Finance | Light | 270 (deep purple) | Authoritative, conservative |
| Beauty/Spa | Light | 15 (rose) | Warm, inviting, soft |
| Tech/SaaS | Dark | 290 (purple) | Modern, innovative |
| Restaurant/Food | Light | 25 (warm orange) | Appetizing, welcoming |
| Real estate | Light | 145 (deep green) | Stable, growth |

## How to Pick a Custom Hue

oklch hue values (degrees):
```
0    — red
30   — orange
60   — yellow-orange
86   — yellow (ELI ENERGY accent)
120  — green
145  — emerald green
180  — cyan
195  — teal
220  — sky blue
240  — water blue
255  — electric blue
260  — navy (ELI ENERGY background)
280  — indigo
290  — purple
320  — magenta
350  — pink-red
```

## Brand-Specific Tokens

In addition to standard shadcn tokens, the template uses 2 extra brand tokens:

```css
--brand-navy: oklch(...);    /* Used in Sparks, OG image, BrandMark */
--brand-yellow: oklch(...);  /* Used in Sparks color, accent highlights */
```

These should match your brand's actual logo colors EXACTLY (not the generic primary/accent).

## Animation Keyframes (do not change)

The template uses these custom keyframes (defined in globals.css):

```css
@keyframes appear { ... }              /* Hero entrance fades */
@keyframes appear-zoom { ... }          /* Stats card zoom-in */
@keyframes glow-pulse { ... }           /* Hero radial halo */
@keyframes spark-float { ... }          /* Sparks particles */
@keyframes shimmer-line { ... }         /* Stats card sheen */
@keyframes ring-pulse { ... }           /* "Live" badge pulse */
```

Animation utility classes:
- `.animate-appear`, `.animate-appear-zoom`
- `.animate-glow-pulse`
- `.animate-spark` (uses `--spark-dur`, `--spark-delay`, `--spark-tx`, `--spark-ty` CSS vars)
- `.animate-shimmer`
- `.animate-ring-pulse`

## Grid Background Utility

The `.bg-grid` class creates a subtle dotted grid for hero/about sections:

```css
.bg-grid {
  background-image:
    linear-gradient(to left, color-mix(in oklch, var(--foreground) 8%, transparent) 1px, transparent 1px),
    linear-gradient(to bottom, color-mix(in oklch, var(--foreground) 8%, transparent) 1px, transparent 1px);
  background-size: 56px 56px;
  mask-image: radial-gradient(ellipse 70% 60% at 50% 0%, black 35%, transparent 80%);
}
```

Adjust the `8%` opacity for visibility:
- Light theme: 6% (subtle)
- Dark theme: 8% (more visible against dark bg)
