"use client";

import {
  Award,
  BookOpen,
  Flower2,
  Heart,
  ShieldCheck,
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
    icon: Award,
    title: "22 שנות ניסיון מקצועי",
    description:
      "מעל לשני עשורים בעולם הקוסמטיקה והעור — אבחון, טיפול, ליווי וצמיחה לצד מאות לקוחות.",
  },
  {
    icon: Heart,
    title: "גישת עור ונפש",
    description:
      "טיפול אמיתי מתחיל בהקשבה. אני רואה את העור כשיקוף של משהו רחב יותר — תקופות חיים, שינויים, רגשות.",
  },
  {
    icon: Flower2,
    title: "התמחות בעור מורכב",
    description:
      "אקנה, צלקות, פיגמנטציה ועור רגיש — מתוך ניסיון אישי וידע מעמיק שצברתי לאורך השנים.",
  },
  {
    icon: ShieldCheck,
    title: "חומרים פעילים ובטוחים",
    description:
      "עבודה רק עם פורמולות מקצועיות מובילות, טכנולוגיות מתקדמות והתאמה מדויקת לסוג העור.",
  },
  {
    icon: BookOpen,
    title: "למידה והתעדכנות מתמדת",
    description:
      "המקצוע מתחדש כל הזמן — וגם אחרי 22 שנים, אני ממשיכה ללמוד בעולמות העור, התודעה והנפש.",
  },
  {
    icon: UserCheck,
    title: "ליווי אישי ומכבד",
    description:
      "כל לקוחה מקבלת מרחב משלה — בקליניקה, בפרוטוקול הטיפולי ובמעקב לאורך זמן.",
  },
];

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-b border-border/60 py-20 md:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[260px] w-[80%] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(ellipse_at_center,color-mix(in_oklch,var(--primary)_18%,transparent)_0%,transparent_60%)] blur-2xl"
      />

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-12 px-4 md:px-6 lg:grid-cols-5 lg:gap-16">
        <Reveal variant="right" className="lg:col-span-2">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
            <Sparkles className="size-3.5" />
            נעים להכיר — {site.ownerName}
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            סיפור שמתחיל בעור<br />וממשיך הרבה מעבר
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground md:text-lg">
            החיבור שלי לעולם הקוסמטיקה התחיל מסיפור אישי. בגיל צעיר התמודדתי עם
            אקנה, ולאחר מכן גם עם צלקות עור משמעותיות. אני מכירה מקרוב את
            התחושות שעור יכול לעורר — חוסר ביטחון, תסכול, והרצון להרגיש טוב
            יותר מול המראה.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground md:text-lg">
            דווקא מהמקום הזה נולדה התשוקה להבין לעומק את העור — לא רק איך לשפר
            אותו מבחוץ, אלא איך באמת לעזור לאנשים להרגיש טוב יותר בתוך עצמם.
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
                      <p className="font-semibold leading-tight">
                        {bullet.title}
                      </p>
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

        <Reveal variant="left" delay={120} className="relative lg:col-span-3 lg:sticky lg:top-24">
          <SpotlightCard className="h-full">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/15 via-accent/20 to-background p-6">
              <div
                aria-hidden
                className="absolute inset-0 bg-grid opacity-40 rounded-2xl"
              />
              <div
                aria-hidden
                className="absolute left-1/2 top-1/2 size-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,color-mix(in_oklch,var(--primary)_30%,transparent)_0%,transparent_70%)] blur-2xl"
              />
              <div className="relative flex h-full flex-col items-center justify-between gap-6 py-4">
                <picture className="block">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/brand/logo-circle.png"
                    alt={`לוגו ${site.brand}`}
                    width={624}
                    height={624}
                    className="mx-auto size-64 md:size-72 drop-shadow-2xl"
                    loading="lazy"
                  />
                </picture>
                <div className="text-center">
                  <p className="text-xl font-bold tracking-tight md:text-2xl">
                    {site.ownerName}
                  </p>
                  <p className="mt-1 text-sm tracking-[0.18em] text-primary/80">
                    {site.brandSuffix}
                  </p>
                  <p className="mt-3 max-w-xs text-sm text-muted-foreground">
                    קליניקה פרטית · {site.address}
                  </p>
                </div>

                <div className="w-full grid grid-cols-3 gap-3">
                  <Pill value={`+${site.yearsExperience}`} label="שנות ניסיון" />
                  <Pill
                    value={`+${site.jobsCompleted.toLocaleString("he-IL")}`}
                    label="לקוחות מרוצות"
                  />
                  <Pill value="100%" label="התאמה אישית" />
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
      <span className="text-lg font-extrabold text-primary">{value}</span>
      <span className="text-xs font-medium text-muted-foreground">{label}</span>
    </div>
  );
}
