# Style: Editorial / Magazine / Publication

References: The New Yorker, The Atlantic, Substack, Pitchfork, Highsnobiety, NYT.

A reading-first aesthetic where typography IS the design. Long-form authority, byline credibility, and content hierarchy take precedence over decorative elements.

## Visual Identity

Three palette directions, each tuned for sustained reading:

**Newspaper Cream (Atlantic / NYT Magazine):**
- `--paper-cream: oklch(0.97 0.012 85)` background
- `--ink-black: oklch(0.18 0 0)` body text
- `--rule-line: oklch(0.78 0.008 85)` dividers
- `--accent-red: oklch(0.52 0.21 25)` masthead/section labels

**Luxury Magazine (New Yorker / Highsnobiety):**
- `--bone: oklch(0.96 0.006 75)`
- `--noir: oklch(0.14 0.005 270)`
- `--gold-leaf: oklch(0.74 0.13 78)` accents
- `--mute-taupe: oklch(0.62 0.02 60)` meta

**Digital Pub (Substack / Medium):**
- `--paper: oklch(1 0 0)`
- `--text-primary: oklch(0.21 0.01 250)`
- `--rule: oklch(0.91 0.005 250)`
- `--brand-orange: oklch(0.66 0.18 45)` (Substack-style)

**Typography (the design itself):**
- Display serif hero: GT Super, Tiempos Headline, Recoleta, or **Frank Ruhl Libre** (Hebrew)
- Body serif: Tiempos Text, Source Serif, Charter, or **David Libre** (Hebrew, 18-19px, line-height 1.7)
- Sans meta/UI: Söhne, Inter, Geist, or **Heebo** / **Assistant** (Hebrew)
- Strict baseline grid; pairings like GT Super + Inter or Tiempos + Söhne

## Hero Patterns
- **Featured story takeover**: massive headline (60-96px), standfirst, byline, full-bleed lede image
- **Magazine cover**: huge type-only takeover with issue number/date
- **Category-driven grid**: 3-column above-the-fold with one dominant story
- **Persistent subscribe CTA** in masthead

## Section Inventory
Featured leading story, latest articles grid with category chips, most-read/staff-picks rail, contributor profiles, topic index, newsletter signup (primary revenue), paywall block, podcast/video embeds, search overlay, archive by date.

## Distinctive Components Needed
- `ArticleHero` — kicker + headline + dek + byline + hero image + read-time
- `ArticleCard` — image + category + headline + dek + byline + date
- `ArticleGrid` — 1/2/3-column with category filter chips
- `AuthorBioCard` — circular headshot + bio + recent 3 articles
- `PullQuoteBlock` — oversized serif quote with rule above/below
- `ChapterDivider` — Roman numeral or section break
- `TableOfContentsSticky` — left/right rail, scroll-spy
- `NewsletterSignupInline` — mid-article email capture
- `PaywallGate` — fade-out + "Subscribe to read"
- `RelatedArticlesRail` — horizontal scroll
- `ProgressBar` — top-of-page reading indicator
- `StoryScrollytelling` — pinned image + scrolling text
- `IssueNumber` / `Masthead` — date/edition meta
- `Kicker` / `CategoryLabel` — uppercase sans-serif tag

## Animation Patterns
Reading-optimized restraint: smooth scroll, image fade-in on enter, hover underlines on links (text-underline-offset animated), sticky TOC scroll-spy, progress bar, gentle parallax on hero only. No bounce/elastic effects.

## Hebrew RTL Adaptations
- Hebrew news typography: **Frank Ruhl Libre** (display headlines — the "national font"), **David Libre** (long-form body), **Heebo** / **Assistant** / **Rubik** (UI/meta)
- Right-anchored masthead, column dividers flowing RTL
- Newspaper cues: vertical rule columns, Hebrew date alongside Gregorian
- Bilingual article toggle (Hebrew default, English link)
- Israeli holidays in archive (Pesach, Yom Kippur, Sukkot)
- Numbers and English brand names in LTR isolates within Hebrew text
- Pull quotes flipped with quote mark on right side
- Justify body text with Hebrew-aware hyphenation off

## Top 5 Reference Sites
1. **The New Yorker** — luxury serif identity, illustration-led
2. **The Atlantic** — Tiempos/Söhne pairing, cream + red accent
3. **Substack** — writer-first newsletter publication template
4. **Pitchfork** — review scores, bold display type
5. **Highsnobiety** — modern magazine with cover-style heroes

## Recommended Tokens
```
--paper-cream, --ink-black, --rule-line
--serif-display, --serif-body, --sans-meta
--byline-meta, --kicker-uppercase
--column-divider, --pullquote-rule
--reading-measure (65ch), --baseline (1.7)
--paywall-fade, --progress-bar
```

## Best Fit For (Hebrew/Israeli market)
- Israeli magazines (Haaretz Magazine, Calcalist long-form, Globes weekend)
- Niche Hebrew blogs: food (אוכל), tech, parenting (הורות), business
- Substack-style independent Hebrew writers and journalists
- Religious publications (Torah commentary, Jewish thought)
- Alumni magazines for Israeli universities (Technion, Hebrew U, Tel Aviv U)
- Media kits / press pages for Israeli media brands
- Think tank and policy publications (INSS-style)
- Literary journals and poetry publications
- Cultural institution magazines (museums, theaters)
