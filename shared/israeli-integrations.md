# Israeli Integrations — Payments, Auth, Maps, Compliance

Reference for cross-style integrations relevant to the Israeli market.

## Payment Processors

### Bit (ביט)
- The dominant peer-to-peer Israeli payment app (owned by Bank Hapoalim)
- For donations and ad-hoc collection — must be present on non-profit, course, info-product sites
- Integration: deep-link `bit://...` or QR code with phone number
- Brand color: `#7B5CFF` (Bit purple)

### Cardcom
- Israeli payment gateway, common for SaaS, courses, subscriptions
- Hosted checkout iframe + REST API
- Supports installments (תשלומים), tokenization, recurring (הוראת קבע)
- Docs: developer.cardcom.solutions

### Tranzila
- Common e-commerce gateway, used by Shopify Hebrew stores
- Direct integration via TerminalPage URL with custom params
- Supports invoicing (חשבונית מס) auto-generation

### Meshulam
- Modern Israeli gateway, popular for course creators and info products
- Clean checkout UX
- Supports payment plans, recurring

### Pelecard
- Older but reliable gateway, common in retail
- Supports multi-merchant + offline transactions

### PayBox
- Pelephone's PayPal-equivalent, popular for small business
- Mobile-first

### Apple Pay / Google Pay
- Increasingly common; pair with Cardcom or Tranzila as the underlying gateway

### Shekel-formatting

```ts
const formatILS = (amount: number) =>
  new Intl.NumberFormat('he-IL', {
    style: 'currency',
    currency: 'ILS',
    minimumFractionDigits: 0,
  }).format(amount);
// formatILS(4990) => "₪ 4,990"
```

Important: Israeli convention places ₪ before the number, with a thin space. The whole token stays LTR inside RTL prose.

## Forms / Email

### FormSubmit (formsubmit.co)
- Already used in skill v1 — no signup, free, supports file upload
- Limit: 1000 submissions/month free tier
- Anti-spam: include `_captcha=false` + `_honey` field

### EmailJS
- Alternative for client-side email sending without server
- 200 emails/month free

### Resend
- Premium option for transactional email; more reliable than FormSubmit
- API-driven, requires backend route

## Maps

### Waze
- Israeli default — most users navigate via Waze, NOT Google Maps
- Deep link: `waze://?ll=32.0853,34.7818&navigate=yes`
- Always include Waze button alongside Google Maps embed

### Google Maps
- Use for embed; users can still copy address into Waze

### Mapbox
- For premium maps (real estate, hotel) with custom styling

## Auth

### Google OAuth — Israeli quirks
- Standard flow works, but most Israeli SMBs prefer phone+SMS login

### SMS OTP
- Common for course platforms, SaaS, fintech
- Israeli SMS providers: 019Brand, Onesms, Inforu

## Compliance

### עמותה (NGO)
- `סעיף 46א` — tax-deductible donation badge (must show ע"ר number)
- `אישור ניהול תקין` — proper-management certificate from rasham ha-amutot
- Annual report must be downloadable

### Investment / Insurance
- License number lockup required for יועצי השקעות / סוכני ביטוח
- Disclosure: "אין באמור משום ייעוץ השקעות / ייעוץ פנסיוני"
- Regulator: רשות שוק ההון, ביטוח וחיסכון (insurance/pension); רשות ניירות ערך (securities)

### Health Funds (קופות חולים)
- 4 funds: Clalit (כללית), Maccabi (מכבי), Meuhedet (מאוחדת), Leumit (לאומית)
- Logos appear as a strip on private clinic sites
- "טופס 17" badge if accept HMO referrals

### Kashrut (כשרות)
- Levels: רבנות (basic), מהדרין, בד"ץ (badatz), חב"ד, etc.
- Used on restaurants, hotels, catering, food brands

### Shabbat-friendly
- Hotel: מעלית שבת, mechanical key, Shabbat clock for AC
- Restaurant: closed Shabbat indicator
- Religious women: "נשים בלבד" hours toggle

## Holidays / Calendar

```ts
// Israeli week defaults
const weekStart = 0; // Sunday
const weekend = [5, 6]; // Friday afternoon + Saturday

// Major holidays affecting business hours / pricing
const holidays = [
  'ראש השנה', 'יום כיפור', 'סוכות', 'חנוכה',
  'ט"ו בשבט', 'פורים', 'פסח', 'יום הזיכרון',
  'יום העצמאות', 'ל"ג בעומר', 'שבועות', 'תשעה באב'
];
```

For hotel/event venues: peak rates around Pesach, Rosh Hashana, Sukkot, summer (June-Aug). Tu B'Av is a romantic peak for weddings.

## Phone formats

```ts
// Israeli phone normalization
const normalizePhone = (p: string) => p.replace(/[^\d]/g,'');
// Display: 054-360-0082
// Tel: tel:+972543600082
// WhatsApp: https://wa.me/972543600082
```

## Address format

Hebrew address structure: `street name + number, neighborhood, city, postal code`
Example: `רוטשילד 46, נווה צדק, תל אביב 6810016`

## Local SEO

- JSON-LD `@type: LocalBusiness` with `addressCountry: IL`
- `areaServed` should be Hebrew city names (תל אביב, ירושלים, חיפה, באר שבע)
- Bilingual schema for businesses serving English-speaking expats (olim)
