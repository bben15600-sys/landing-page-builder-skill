"use client";

import {
  Award,
  Building2,
  ClipboardCheck,
  FlaskConical,
  Gauge,
  Sparkles,
  UserCheck,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/site/reveal";
import { SpotlightCard } from "@/components/site/spotlight-card";
import { site } from "@/components/site/site-config";

type Bullet = { icon: LucideIcon; title: string; description: string };

const bullets: Bullet[] = [
  {
    icon: FlaskConical,
    title: "מומחה פארמה וחדרים נקיים",
    description:
      "ידע נרחב בתשתיות חשמל למפעלי פארמה ומתקני חדרים נקיים, עבודה לפי תקנים מחמירים.",
  },
  {
    icon: Award,
    title: "20 שנות ניסיון בתעשייה",
    description:
      "ניסיון מוכח בעולמות החשמל, התפעול והאחזקה במפעלי תעשייה מובילים בארץ.",
  },
  {
    icon: ClipboardCheck,
    title: "עמידה בכל התקנים",
    description:
      "מצוי בכל התקנים המחמירים — כיבוי אש, מתח גבוה, חוק החשמל ודרישות הרשויות.",
  },
  {
    icon: Building2,
    title: "ניהול פרוייקטים מורכבים",
    description:
      "תכנון וביצוע מקצה לקצה — מהאפיון הראשוני ועד המסירה והאישורים.",
  },
  {
    icon: Gauge,
    title: "אחזקה ומינימום השבתה",
    description:
      "תחזוקת קווי ייצור, תשתיות ומכונות — תכנון לוחות זמנים שמכבד את הייצור.",
  },
  {
    icon: UserCheck,
    title: "ליווי מול הרשויות",
    description:
      "הבנה ויכולת עבודה מול חשמל, כיבוי אש ושאר הגופים הרלוונטיים — מתחילת הפרוייקט עד אישור הסיום.",
  },
];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden border-b border-border/60 py-20 md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[260px] w-[80%] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(ellipse_at_center,color-mix(in_oklch,var(--primary)_18%,transparent)_0%,transparent_60%)] blur-2xl"
      />

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 md:px-6 lg:grid-cols-5 lg:gap-16">
        <Reveal variant="right" className="lg:col-span-2">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
            <Sparkles className="size-3.5" />
            {site.ownerName} — מייסד {site.brand}
          </span>
          <h2 className="mt-4 bg-gradient-to-l from-foreground via-foreground to-primary/80 bg-clip-text text-3xl font-bold tracking-tight text-transparent md:text-4xl">
            חשמל תעשייתי ברמה הגבוהה ביותר
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            {site.ownerName}, בעל ניסיון של {site.yearsExperience} שנים בעולמות
            החשמל, התפעול והאחזקה בתעשייה. ידע נרחב בעולמות הפארמה והחדרים
            הנקיים, ניהול פרוייקטים מורכבים ועמידה בכל התקנים המחמירים.
          </p>

          <ul className="mt-8 space-y-3">
            {bullets.map((bullet, i) => (
              <li key={bullet.title}>
                <Reveal variant="up" delay={i * 60}>
                  <div className="group/bullet flex items-start gap-4 rounded-lg border border-border/40 bg-card/30 p-4 transition-all duration-300 hover:border-primary/40 hover:bg-card/60 hover:shadow-lg hover:shadow-primary/5">
                    <span className="mt-1 inline-flex size-10 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-gradient-to-br from-primary/20 to-primary/10 text-primary transition-all duration-300 group-hover/bullet:border-primary/40 group-hover/bullet:from-primary/30 group-hover/bullet:to-primary/20 group-hover/bullet:shadow-md group-hover/bullet:shadow-primary/20">
                      <bullet.icon className="size-5" />
                    </span>
                    <div className="flex-1">
                      <p className="font-semibold leading-tight">{bullet.title}</p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {bullet.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal variant="left" delay={120} className="relative lg:col-span-3">
          <SpotlightCard className="h-full">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 via-accent/40 to-background p-6">
              <div
                aria-hidden
                className="absolute inset-0 bg-grid opacity-50 rounded-2xl"
              />
              <div
                aria-hidden
                className="absolute left-1/2 top-1/2 size-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,color-mix(in_oklch,var(--brand-yellow)_30%,transparent)_0%,transparent_70%)] blur-2xl"
              />
              <div className="relative flex h-full flex-col items-center justify-between gap-6 py-4">
                <picture className="block">
                  <img
                    src="/brand/logo-circle.png"
                    alt={`לוגו ${site.brandFull}`}
                    width={624}
                    height={624}
                    className="mx-auto size-56 md:size-64 drop-shadow-2xl"
                    loading="lazy"
                  />
                </picture>
                <div className="text-center">
                  <p className="text-xl font-bold tracking-tight md:text-2xl">
                    {site.brand}
                    <span className="ms-2 text-sm font-extrabold tracking-[0.25em] text-accent-foreground/70">
                      SOLUTIONS
                    </span>
                  </p>
                  <p className="mt-2 max-w-xs text-sm text-muted-foreground">
                    {site.ownerName} · חשמל תעשייתי, פארמה וחדרים נקיים.
                  </p>
                </div>

                <div className="w-full grid grid-cols-3 gap-3">
                  <Pill value={`+${site.yearsExperience}`} label="שנות ניסיון" />
                  <Pill
                    value={`+${site.jobsCompleted.toLocaleString("he-IL")}`}
                    label="פרוייקטים"
                  />
                  <Pill value="100%" label="עמידה בתקנים" />
                </div>
              </div>
            </div>
          </SpotlightCard>
        </Reveal>
      </div>
    </section>
  );
}

function Pill({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 rounded-xl border border-primary/20 bg-gradient-to-br from-primary/10 to-primary/5 px-3 py-3 text-center backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:from-primary/20 hover:to-primary/10">
      <span className="bg-gradient-to-l from-primary to-primary/70 bg-clip-text text-lg font-extrabold text-transparent">
        {value}
      </span>
      <span className="text-xs font-medium text-muted-foreground">{label}</span>
    </div>
  );
}
