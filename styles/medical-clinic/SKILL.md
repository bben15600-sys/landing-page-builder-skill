---
name: lpb-medical-clinic
description: "Build Hebrew RTL Medical / Dental / Aesthetic Clinic landing pages in the Maven/Kindbody/Forward/Ro style. Stack: Next.js 16 + Tailwind v4 + base-ui. Includes: BookingCalendar with live availability, BeforeAfterSlider with consent disclaimer, DoctorBioCard with credentials, TreatmentDetailCard, TrustBadgeRow, Israeli health-fund logos, Form 17 indicator. Triggers: 'create medical clinic site', 'dental practice website', 'aesthetic clinic landing page', 'create site for [רופא / מרפאה / קליניקה / רופא שיניים]'."
---

# Medical / Dental / Aesthetic Clinic — Hebrew RTL

For Israeli private clinics: dental, dermatology, aesthetic medicine, plastic surgery, fertility/IVF, ophthalmology, physiotherapy, alternative medicine, mental health.

> **Full research:** see `../../research/06-medical-clinic.md`

## When to Use

User runs a private medical/wellness practice and wants the calm, trustworthy, anti-clinical feel of **Maven Clinic, Kindbody, Parsley Health, Ro, Hims/Hers**. NOT harsh "hospital blue".

## Required Information from User

### 1. Practice Identity
- Clinic name (Hebrew + English)
- Specialty / specialties
- Tagline (1 sentence)
- Story / philosophy

### 2. Theme Direction
- **A — Calm Sage Clinical** (general medicine / family / pediatric)
- **B — Editorial Aesthetic** (plastic surgery / dermatology / luxe dental — blush rose + cream)
- **C — Modern Telehealth/Fertility** (Maven/Kindbody — botanical green + honey)

### 3. Doctor / Team Bios (1-10)
For each: portrait + name + title (e.g., ד"ר, MD/DDS) + specialties + bar/board admissions + languages spoken + 100-200 word bio

### 4. Treatments / Procedures (10-30)
For each: Hebrew name + description (50-100 words) + duration + price range or "by quote" + recovery time + before/after if applicable

### 5. Before/After Gallery (10-30 image pairs)
With consent disclaimer, anonymized when needed

### 6. Testimonials (10-20)
Anonymized initials + age + city + treatment + 2-3 sentences

### 7. HMO / Insurance
Which Israeli health funds accepted: כללית / מכבי / מאוחדת / לאומית
Form 17 (טופס 17) acceptance? Private payment plans?

### 8. Booking Integration
- Direct calendar (we'll build), OR
- External (Calendly / Setmore / Israeli equivalent like Yael Center)

### 9. Location
Address + parking + accessibility + public transit + Waze button

### 10. Press / Credentials
Board certifications, professional memberships, university affiliations

## Visual Identity

### Token Palette (Theme A — Calm Sage Clinical)
```css
:root {
  --clinic-cream: oklch(0.98 0.005 110);   /* warm ivory */
  --clinic-calm: oklch(0.55 0.06 165);     /* sage primary */
  --clinic-camel: oklch(0.72 0.04 80);     /* warm neutral */
  --text: oklch(0.25 0.01 240);            /* charcoal */
  --trust-blue: oklch(0.50 0.08 230);
  --consent-warning: oklch(0.65 0.12 60);
  --booking-cta: oklch(0.50 0.10 155);
  --gallery-overlay: oklch(0.20 0.01 30 / 0.4);
  --photo-radius: 16px;
}
```

### Typography
- Hebrew: **Heebo** + **Assistant** (humanist sans, calm)
- Latin: Inter / Söhne / Sora
- Optional editorial serif for clinic name: Frank Ruhl Libre (Hebrew) / Tiempos (Latin)
- Generous line-height (1.6+), large body 18-20px

## Page Architecture

```
app/page.tsx
├── Header (with sticky Book CTA)
├── Hero (calm doctor portrait OR outcome photo)
├── ServicesGrid (treatment categories with icons)
├── DoctorTeamGrid (bio cards)
├── BeforeAfterGallery (consent-gated)
├── BookingCalendar (live availability)
├── TestimonialsBlock (anonymized)
├── HMOLogoStrip (Clalit/Maccabi/Meuhedet/Leumit)
├── ProcessTimeline (patient journey: initial call → consult → treatment → followup)
├── FAQAccordion (insurance, parking, expectations)
├── Location (map + Waze + accessibility notes)
└── Footer (with regulatory disclosure if applicable)
```

## Distinctive Components

- `BookingCalendar` (from shared/) — live availability, Sun-first week
- `BeforeAfterSlider` (from shared/) — drag handle, consent disclaimer
- `DoctorBioCard` — photo + credentials + specialties + book CTA
- `TreatmentDetailCard` — description + duration + price range + recovery
- `TrustBadgeRow` — board certifications, accreditations
- `HMOLogoStrip` — 4 Israeli health fund logos
- `Form17Badge` — for clinics that accept HMO referral
- `ConsentDisclaimerBlock` — privacy notice for galleries/testimonials
- `ServiceCategoryGrid` — icon + title + brief
- `ProcessTimeline` — patient journey
- `LocationMapCard` — with parking/accessibility/Waze

## Animation Patterns

Soft fades, gentle reveal on scroll (300-500ms ease-out). NO aggressive motion — medical = trust + calm. Before/after slider drag (cursor-controlled, smooth). Subtle parallax on hero portrait. Sticky booking CTA bar on mobile.

## Hebrew RTL Adaptations

- Israeli health funds logos: Clalit (כללית), Maccabi (מכבי), Meuhedet (מאוחדת), Leumit (לאומית)
- Hebrew testimonials with anonymized initials ("ר.כ., 34, תל אביב")
- Halachic considerations: Shabbat hours, separate male/female practitioner filter for חרדי/דתי patients
- HMO referral flow: "טופס 17" (Form 17) acceptance badge
- RTL before/after slider direction reversal (drag handle starts right)
- Mirror booking calendar week direction; Hebrew weekday labels (ראשון-שישי)
- Reservist/MDA discount badges where relevant

## Reference Sites

1. **mavenclinic.com** — fertility/family, true green + diverse warm portraits
2. **kindbody.com** — fertility, gold accents, anti-clinical positioning
3. **parsleyhealth.com** — functional medicine, atmospheric macro imagery
4. **ro.co** — telehealth, card-based med grids with safety disclaimers
5. **Hims/Hers** — DTC aesthetic, blush palette

## Best Fit For (Hebrew/Israeli market)

Israeli private clinics: dental (מרפאת שיניים), dermatology (רופא עור), aesthetic medicine (רפואה אסתטית), plastic surgery (כירורגיה פלסטית), fertility/IVF (הפריה חוץ גופית), ophthalmology (רופא עיניים), physiotherapy (פיזיותרפיה), alternative medicine (רפואה משלימה), mental health clinics (קליניקה לבריאות הנפש), veterinary specialty clinics, pediatric private practices, audiology, podiatry.

## Status

🟡 SKILL spec complete. Templates and demo site pending.
