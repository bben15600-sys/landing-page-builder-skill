---
name: lpb-editorial
description: "Build Hebrew RTL Editorial / Magazine / Publication / Long-form Blog sites in the Atlantic/NYT/Substack/New Yorker style. Stack: Next.js 16 + Tailwind v4 + base-ui. Includes: ArticleHero, ArticleCard, ArticleGrid with category filter, AuthorBioCard, PullQuoteBlock, ChapterDivider, TableOfContentsSticky, NewsletterSignupInline, PaywallGate, ProgressBar, StoryScrollytelling. Triggers: 'create magazine website', 'editorial blog', 'publication site', 'create site for [מגזין / כתב עת / בלוג]', 'Substack-style site'."
---

# Editorial / Magazine / Publication — Hebrew RTL

For Israeli magazines (Haaretz Magazine, Calcalist long-form, Globes weekend), niche Hebrew blogs (food, tech, parenting, business), Substack-style independent writers, religious publications, alumni magazines, think tanks, literary journals.

> **Full research:** see `../../research/17-editorial.md`

## When to Use

User runs a publication where TYPOGRAPHY IS THE DESIGN. Long-form authority, byline credibility, content hierarchy. References: **The New Yorker, The Atlantic, Substack, Pitchfork, Highsnobiety, NYT**.

## Required Information from User

### 1. Publication Identity
- Title (Hebrew + English)
- Tagline / mission
- Cadence (daily / weekly / monthly)
- Editor-in-chief

### 2. Theme Direction
- **A — Newspaper Cream** (Atlantic / NYT Magazine — cream + black + red accent)
- **B — Luxury Magazine** (New Yorker — bone + noir + gold-leaf accent)
- **C — Digital Pub** (Substack / Medium — white + black + brand orange)

### 3. Categories (5-15)
e.g., אוכל, תרבות, פוליטיקה, היי-טק, הורות, פיננסים

### 4. Featured Story
Hero article with hero image + headline + standfirst + byline

### 5. Latest Articles (12-50)
For each: image + category + headline + dek + byline + date + reading time

### 6. Authors / Contributors (5-50)
Headshot + bio (100 words) + recent articles + social links

### 7. Subscription Model
- Free (newsletter signup primary)
- Paywall (Substack-style)
- Hybrid (some free, premium paywalled)

### 8. Newsletter Provider
Substack / Buttondown / Mailchimp / etc.

### 9. Search
Full-text or tag-based

## Visual Identity

### Token Palette (Theme A — Newspaper Cream)
```css
:root {
  --paper-cream: oklch(0.97 0.012 85);
  --ink-black: oklch(0.18 0 0);
  --rule-line: oklch(0.78 0.008 85);
  --accent-red: oklch(0.52 0.21 25);
  --byline-meta: oklch(0.55 0.01 80);
  --kicker-uppercase: oklch(0.52 0.21 25);
  --column-divider: oklch(0.85 0.005 80);
  --pullquote-rule: oklch(0.18 0 0);
  --reading-measure: 65ch;
  --baseline: 1.7;
  --paywall-fade: linear-gradient(to bottom, transparent, oklch(0.97 0.012 85) 80%);
  --progress-bar: oklch(0.52 0.21 25);
}
```

### Typography
- Hebrew display: **Frank Ruhl Libre** (the "national" serif)
- Hebrew body: **David Libre** (long-form, 18-19px, line-height 1.7)
- Hebrew UI/meta: **Heebo** / Assistant / Rubik
- Latin display: GT Super / Tiempos Headline / Recoleta
- Latin body: Tiempos Text / Source Serif / Charter
- Latin meta: Söhne / Inter / Geist
- Strict baseline grid

## Page Architecture

```
app/page.tsx (homepage)
├── Masthead (title + issue/date + persistent subscribe CTA)
├── Header (categories nav)
├── FeaturedStory (massive headline + standfirst + byline + lede image)
├── ArticleGrid (latest, 1/2/3 column with category filter)
├── MostReadStaffPicks (rail)
├── TopicIndex
├── NewsletterSignupBlock
├── ArchiveLink
└── Footer

app/articles/[slug]/page.tsx
├── ArticleHero (kicker + headline + dek + byline + hero image)
├── ProgressBar (top)
├── TableOfContentsSticky (long articles)
├── ArticleBody (single column 65ch with embedded pull-quotes, images, chapter dividers)
├── NewsletterSignupInline (mid-article)
├── AuthorBioCard
├── RelatedArticlesRail
└── (PaywallGate fades content if premium)

app/authors/[slug]/page.tsx
├── AuthorHeroBio
├── ArticlesByAuthor
└── SocialLinks

app/categories/[slug]/page.tsx
├── CategoryHero
└── ArticleGridFiltered
```

## Distinctive Components

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

- Hebrew news typography: **Frank Ruhl Libre** (display headlines), **David Libre** (long-form body), **Heebo** / Assistant / Rubik (UI/meta)
- Right-anchored masthead, column dividers flowing RTL
- Newspaper cues: vertical rule columns, Hebrew date alongside Gregorian
- Bilingual article toggle (Hebrew default, English link)
- Israeli holidays in archive (Pesach, Yom Kippur, Sukkot)
- Numbers and English brand names in LTR isolates within Hebrew text
- Pull quotes flipped with quote mark on right side
- Justify body text with Hebrew-aware hyphenation off

## Reference Sites

1. **The New Yorker** — luxury serif identity, illustration-led
2. **The Atlantic** — Tiempos/Söhne pairing, cream + red accent
3. **Substack** — writer-first newsletter publication template
4. **Pitchfork** — review scores, bold display type
5. **Highsnobiety** — modern magazine with cover-style heroes

## Best Fit For (Hebrew/Israeli market)

Israeli magazines (Haaretz Magazine, Calcalist long-form, Globes weekend), niche Hebrew blogs: food (אוכל), tech, parenting (הורות), business; Substack-style independent Hebrew writers and journalists, religious publications (Torah commentary, Jewish thought), alumni magazines for Israeli universities (Technion, Hebrew U, Tel Aviv U), media kits / press pages, think tank and policy publications (INSS-style), literary journals and poetry publications, cultural institution magazines (museums, theaters).

## Status

🟡 SKILL spec complete. Templates and demo site pending.
