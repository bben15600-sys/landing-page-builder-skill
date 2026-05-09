# Hebrew Fonts — Stack per Style Mood

All 21 styles work in Hebrew RTL. Pick a Hebrew font per mood, paired with a Latin font for English UI/code/numerals.

## By Mood

### Modern / Tech / Clean
- **Heebo** (Google) — Inter equivalent; pairs with Inter / Geist
- **Rubik** (Google) — friendly geometric; pairs with Inter
- **Assistant** (Google) — humanist sans; pairs with Söhne / Inter
- **Ploni** (Israeli foundry) — friendly modern; one of the best paid options

### Editorial / Magazine / Luxury
- **Frank Ruhl Libre** (Google) — Israel's "national" serif; pairs with GT Sectra / Tiempos
- **David Libre** (Google) — long-form body serif; pairs with Source Serif
- **Noto Serif Hebrew** (Google) — universal serif; pairs with Noto Serif

### Display / Brutalist / Statement
- **Karantina** (free, 3 weights) — brutal display; pairs with Times / Helvetica Bold
- **Suez One** (Google) — calligraphic-modern serif
- **Bigshot One** (Google) — chunky display
- **Gveret-Levin** — typewriter feel
- **Miriam Libre Bold** — chunky body
- **Adi** — poster moments

### Traditional / Religious
- **Frank Ruhl Libre** — appropriate for religious publications
- **Narkis** (paid) — newspaper standard, used by Haaretz
- **David** (system) — classic Hebrew serif

### Fitness / Energy / Bold
- **Heebo Black 900** — pairs with Druk / Anton
- **Rubik Black** — punchy condensed-style
- **Ploni Black**

## How to Load

In Next.js layout (Google Fonts):

```ts
import { Heebo, Frank_Ruhl_Libre } from "next/font/google";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  weight: ["300","400","500","600","700","800","900"],
  variable: "--font-heebo",
  display: "swap",
});

const frankRuhl = Frank_Ruhl_Libre({
  subsets: ["hebrew", "latin"],
  weight: ["300","400","500","700","900"],
  variable: "--font-frank-ruhl",
  display: "swap",
});
```

Apply on `<html>`:
```tsx
<html lang="he" dir="rtl" className={`${heebo.variable} ${frankRuhl.variable}`}>
```

## Pairing Reference

| Style | Hebrew display | Hebrew body | Latin display | Latin body | Mono |
|---|---|---|---|---|---|
| Modern SaaS | Heebo | Heebo | Geist | Inter | Geist Mono |
| AI / Dev Tool | Heebo | Heebo | Geist | Inter | JetBrains Mono |
| DTC E-commerce | Frank Ruhl Libre | Heebo | GT Sectra | Söhne | — |
| Restaurant | Frank Ruhl Libre | Heebo | Cormorant | Inter | — |
| Real Estate | Frank Ruhl Libre | Heebo | GT Super Display | Inter Tight | — |
| Medical | Heebo | Assistant | Inter | Sora | — |
| Law Firm | Frank Ruhl Libre | David Libre | GT Sectra | Söhne | — |
| Creative Agency | Heebo Variable / Karantina | Heebo | PP Editorial | GT Walsheim | — |
| Photography | Frank Ruhl Libre | Heebo | GT Sectra | Söhne | — |
| Wedding | Frank Ruhl Libre | Heebo | Cormorant | Söhne | — |
| Hotel | Frank Ruhl Libre | Heebo | Canela | Inter Tight | — |
| Fitness (Energy) | Heebo Black | Heebo | Druk Wide | Inter | — |
| Fitness (Wellness) | Frank Ruhl Libre | Heebo | Tiempos | Söhne | — |
| Beauty | Frank Ruhl Libre | Heebo | Tiempos Headline | Söhne | — |
| Tech Hardware | Heebo | Heebo | SF Pro Display | Inter | — |
| Course / Coaching | Heebo Black | Assistant | Playfair / Inter Black | Inter | — |
| Non-profit | Frank Ruhl Libre | Assistant | Source Serif | Inter | — |
| Editorial | Frank Ruhl Libre | David Libre | GT Super | Söhne | — |
| Bento Product | Heebo | Heebo | Geist | Inter | Geist Mono |
| Brutalist | Karantina / Suez One | Miriam Libre | Times / Helvetica Bold | system-ui | Courier |
| WebGL Award | Heebo Variable | Heebo | Monument Grotesk | Söhne | JetBrains Mono |
| Fintech | Heebo | Heebo / Assistant | GT America | Inter | GT America Mono |
