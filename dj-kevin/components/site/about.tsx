"use client";

import {
  CalendarCheck,
  Disc3,
  Headphones,
  Speaker,
  type LucideIcon,
} from "lucide-react";
import { siteConfig } from "./site-config";
import { Reveal } from "./reveal";
import { Equalizer } from "./equalizer";

const ICONS: Record<string, LucideIcon> = {
  Disc3,
  Headphones,
  Speaker,
  CalendarCheck,
};

export function About() {
  return (
    <section
      id="about"
      className="relative scroll-mt-24 py-24 sm:py-32 border-t border-border overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <Reveal>
          <p className="text-xs tracking-[0.35em] uppercase text-accent mb-4">
            על קווין
          </p>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl leading-tight">
            לא רק <span className="neon-gradient">מנגן</span>
            <br />
            בונה <span className="neon-gradient">לילה</span>
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            עשור על הדקים, מאות אירועים, ואלפי שעות מול קהל. קווין מתמחה ב-Open
            Format — היכולת לחבר בין מזרחי, פופ, היפ-הופ והאוס בלי לאבד את הרחבה
            לרגע. כל אירוע מתוכנן מראש לפרטי פרטים, אבל קורה בזמן אמת לפי האנרגיה
            של הקהל.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 gap-5">
            {siteConfig.aboutBullets.map((b) => {
              const Icon = ICONS[b.icon] ?? Disc3;
              return (
                <div key={b.title} className="flex gap-4">
                  <div className="shrink-0 h-11 w-11 rounded-xl bg-accent-soft text-accent flex items-center justify-center">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base">{b.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                      {b.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative rounded-3xl border border-border bg-card overflow-hidden p-8 sm:p-10 ring-glow">
            <div className="absolute inset-0 bg-grid bg-grid-fade opacity-30" />
            <div
              className="absolute -top-16 -right-16 h-56 w-56 rounded-full blur-[90px] pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(193,59,255,0.4), transparent 70%)",
              }}
            />
            <div className="relative flex flex-col items-center text-center">
              <Disc3
                size={92}
                strokeWidth={1}
                className="text-accent animate-spin-disc"
              />
              <div className="mt-6 font-display font-black text-4xl neon-gradient">
                {siteConfig.brand.nameEn}
              </div>
              <div className="text-[11px] tracking-[0.35em] uppercase text-muted-foreground mt-1">
                {siteConfig.brand.suffix}
              </div>
              <div className="h-20 w-full mt-8">
                <Equalizer bars={28} />
              </div>
              <div className="mt-8 grid grid-cols-3 gap-4 w-full">
                <MiniStat value="500+" label="אירועים" />
                <MiniStat value="10" label="שנים" />
                <MiniStat value="5★" label="דירוג" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function MiniStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl border border-border bg-background/50 py-3">
      <div className="font-display font-bold text-xl text-accent">{value}</div>
      <div className="text-[11px] text-muted-foreground mt-0.5">{label}</div>
    </div>
  );
}
