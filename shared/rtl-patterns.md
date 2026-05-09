# RTL Patterns — Hebrew right-to-left implementation

All 21 styles use these foundations.

## 1. Set direction on html

```tsx
<html lang="he" dir="rtl">
```

This tells the browser to flip the document's primary axis. Most CSS using logical properties (margin-inline-start, padding-inline-end, etc.) will adapt automatically.

## 2. Use logical CSS properties — not left/right

| Avoid | Prefer |
|---|---|
| `margin-left` | `margin-inline-start` |
| `margin-right` | `margin-inline-end` |
| `padding-left` | `padding-inline-start` |
| `text-align: left` | `text-align: start` |
| `border-left` | `border-inline-start` |
| `left: 0` | `inset-inline-start: 0` |
| `right: 0` | `inset-inline-end: 0` |

In Tailwind v4: use `ms-*` (margin-start), `me-*` (margin-end), `ps-*`, `pe-*`, `start-*`, `end-*`.

## 3. Bidi isolation for mixed text

Hebrew with embedded English/numbers/code reads correctly only with proper bidi isolation:

```tsx
{/* Hebrew sentence with English token */}
<p>אני משתמש ב־<bdi>React 18</bdi> לבניית הממשק.</p>

{/* Currency + number that should stay LTR inside Hebrew */}
<span>המחיר: <span dir="ltr">₪ 4,990</span></span>

{/* Code block inside RTL paragraph */}
<p>הרץ את הפקודה:</p>
<pre dir="ltr"><code>npm install</code></pre>
```

`<bdi>` (Bidi Isolation) is the safest wrapper for unknown-direction inline content.

## 4. Arrow icons need to flip

```tsx
{/* Arrow that points to "next" */}
<ArrowRight className="rtl:scale-x-[-1]" />
```

Or use logical names — but if you import a "right" arrow icon, flip it for RTL with a CSS transform.

## 5. Numbers and units — keep LTR

```tsx
<div className="flex gap-2">
  <span>גודל:</span>
  <span dir="ltr">128GB</span>
</div>
```

Israeli convention: ₪ before number ("₪ 4,990") in display, but the whole token stays LTR.

## 6. Marquees and carousels

Marquee animates `translateX(-100%)` by default — that's RTL-natural for Hebrew (text scrolls right-to-left visually). For LTR-feeling marquees in RTL pages, set `animation-direction: reverse`.

For carousels: Israeli users expect `Next` to advance to the LEFT. Flip arrow keys + chevron icons accordingly.

## 7. Forms

- Labels: `text-align: start` (right in RTL)
- Email + URL fields: `dir="ltr"` (the field content is LTR even though the label is RTL)
- Phone: `dir="ltr"` for the number itself, with the `+972` prefix LTR
- Date: localize via `Intl.DateTimeFormat('he-IL')`, week starts Sunday

## 8. Hebrew calendar week

```ts
const weekdays = ['ראשון','שני','שלישי','רביעי','חמישי','שישי','שבת'];
// Sunday-first; weekend is Friday afternoon + all Saturday
```

## 9. Common Tailwind patterns

```tsx
{/* Flip horizontal flex order in RTL */}
<div className="flex flex-row-reverse rtl:flex-row gap-4">

{/* Different padding per direction */}
<div className="ps-6 pe-3"> {/* padding-inline-start: 1.5rem; padding-inline-end: 0.75rem */}

{/* RTL-aware grid auto-flow */}
<div className="grid grid-cols-3 gap-4">
{/* Grid cells fill in RTL order automatically — usually right-to-left top-to-bottom */}
```

## 10. Test checklist

- [ ] All hero CTAs reachable from right side first (RTL primary action position)
- [ ] All margins/paddings use logical properties
- [ ] Numbers, currency, code, English brand names wrapped in `<bdi>` or `dir="ltr"` spans
- [ ] Arrow icons flip
- [ ] Carousel `Next` navigates leftward
- [ ] Form inputs that take English content (email/URL) have `dir="ltr"`
- [ ] Date pickers default to Sunday-first
- [ ] Marquee direction matches reading direction
- [ ] Image-text 50/50 blocks reverse (image-side mirrored)
