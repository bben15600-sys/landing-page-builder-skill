# Recommended Lucide Icons by Industry

All icons must be `lucide-react` imports. The template uses these heavily.

## Universal (used in template structure)
- `Phone` — call CTAs
- `MessageCircle` — WhatsApp
- `Mail` — email
- `MapPin` — location
- `ShieldCheck` — trust badge
- `Sparkles` — about section badge
- `Star` — testimonials rating
- `Quote` — testimonials decorative
- `ArrowLeft` — RTL "next" arrow (left in RTL = forward)
- `Menu` — mobile menu trigger
- `X` — close buttons
- `Loader2` — loading spinner
- `ImagePlus` — file upload prompt

## Industrial Electrician (ELI ENERGY canonical)
- `FlaskConical` — pharma / clean rooms (FEATURED)
- `Layers` — projects / infrastructure layers
- `Wrench` — repairs, maintenance
- `ClipboardCheck` — inspections, certifications
- `Cog` — production line maintenance
- `Gauge` — industrial buildings, monitoring
- `Building2` — office buildings, facilities
- `Award` — credentials
- `BadgeCheck` — certifications
- `Zap` — generic electrical (use sparingly)

## Residential Electrician
- `ShieldAlert` — emergency 24/7 (FEATURED)
- `Zap` — installations
- `Wrench` — repairs
- `Cpu` — smart home
- `Lightbulb` — lighting design
- `Home` — renovations

## Plumber
- `Droplet` — main service
- `ShowerHead` — bathroom
- `Wrench` — repairs (FEATURED)
- `Flame` — water heater
- `AlertTriangle` — emergency
- `Pipette` — drain unclogging

## Contractor / Renovation
- `Hammer` — construction (FEATURED)
- `HardHat` — safety, contractor
- `Building2` — full builds
- `Ruler` — planning, design
- `Truck` — material handling
- `Paintbrush` — finishing

## HVAC
- `Wind` — ventilation
- `Snowflake` — AC
- `Flame` — heating
- `Thermometer` — climate control (FEATURED)
- `Gauge` — efficiency
- `Settings` — maintenance

## Healthcare / Clinic
- `Stethoscope` — primary care
- `Heart` — cardiology
- `Activity` — diagnostics
- `Pill` — pharmacy
- `Syringe` — vaccinations
- `UserPlus` — new patients (FEATURED)
- `Clock` — same-day appointments

## Beauty / Spa
- `Sparkles` — premium service (FEATURED)
- `Heart` — care
- `Flower2` — natural treatments
- `Wand2` — magic touch
- `Smile` — results
- `Leaf` — organic
- `Scissors` — hair

## Legal
- `Scale` — legal services (FEATURED)
- `Gavel` — litigation
- `BookOpen` — law expertise
- `FileText` — contracts
- `Shield` — protection
- `Users` — family law
- `Briefcase` — corporate

## Real Estate
- `Home` — residential (FEATURED)
- `Building2` — commercial
- `Key` — sales
- `MapPin` — location
- `TrendingUp` — investment
- `Calculator` — valuation

## Automotive
- `Car` — service
- `Wrench` — repairs (FEATURED)
- `Cog` — engineering
- `Battery` — electrical
- `Gauge` — diagnostics
- `Truck` — heavy duty

## Cleaning Services
- `SprayCan` — deep cleaning (FEATURED)
- `Sparkles` — shine
- `Brush` — daily
- `Recycle` — eco-friendly
- `Sofa` — upholstery
- `Building2` — commercial

## Food / Restaurant (less common — usually photo-based)
- `Utensils` — dining
- `ChefHat` — chef
- `Pizza` / `Cake` / `Coffee` — specific items
- `Truck` — delivery

## How to Pick the Featured Icon

The featured (accent) service should:
1. Be the **highest-margin** or most **specialized** offering
2. Have a unique, memorable icon (avoid generic `Zap` / `Wrench`)
3. Pair with a specific badge text like "התמחות בלעדית", "פתרון פרימיום", "מומלץ"

## Icon Size Conventions

In the template:
- Hero badge: `size-3.5` (14px)
- Service card icon chip (in a 12×12 box): `size-5` or `size-6`
- About bullet icon (in a 10×10 box): `size-5`
- Stats decorative: `size-3.5` to `size-4`
- Header brand mark: `size-6`
- Feature card icons (large): `size-6`

## Importing

Always specific imports, never default:
```tsx
import { FlaskConical, Layers, Wrench, type LucideIcon } from "lucide-react";
```

Use `LucideIcon` type for accepting icons as props:
```tsx
type Service = {
  icon: LucideIcon;
  title: string;
  // ...
};
```
