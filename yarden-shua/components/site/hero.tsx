"use client";

import { ArrowLeft, Phone, Trophy, Target, MapPin } from "lucide-react";
import { site } from "./site-config";
import { Sparks } from "./sparks";
import { AnimatedCounter } from "./animated-counter";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-pitch pt-28 pb-20 md:pt-36 md:pb-28"
    >
      <div className="absolute inset-0 -z-10 bg-grid opacity-60" />
      <Sparks />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-10 md:grid-cols-[1.2fr,1fr]">
          <div className="animate-appear">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-semibold text-muted-foreground backdrop-blur">
              <span className="grid h-1.5 w-1.5 place-items-center rounded-full bg-[var(--brand-yellow)] animate-glow-pulse" />
              {site.tagline}
            </div>

            <h1 className="mt-5 text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05]">
              {site.brand}
              <span className="block mt-2 text-2xl md:text-3xl font-bold text-muted-foreground">
                <span className="inline-flex items-center gap-2 rounded-full bg-foreground px-3 py-1 text-base font-bold text-background">
                  <span className="text-[var(--brand-yellow)]">#{site.shirtNumber}</span>
                  {site.position}
                </span>
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base md:text-lg leading-relaxed text-muted-foreground">
              {site.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm md:text-base font-semibold text-background transition-transform hover:scale-[1.03] animate-ring-pulse"
              >
                לפנייה לסוכן
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              </a>
              <a
                href={`tel:${site.phone.replace(/[^0-9+]/g, "")}`}
                className="inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-background px-6 py-3 text-sm md:text-base font-semibold text-foreground transition-colors hover:bg-muted"
              >
                <Phone className="h-4 w-4" />
                {site.phone}
              </a>
            </div>

            <dl className="mt-10 grid max-w-lg grid-cols-3 gap-3">
              <Stat icon={Trophy} value={42} label="הופעות עונה" />
              <Stat icon={Target} value={18} label="שערים בעונה" />
              <Stat icon={MapPin} value={site.stats.height} label="גובה (ס״מ)" />
            </dl>
          </div>

          {/* Visual badge */}
          <div className="relative mx-auto w-full max-w-sm md:max-w-md animate-appear-zoom">
            <div className="relative aspect-square rounded-3xl border border-border bg-card p-4 shadow-2xl shadow-black/5">
              <div className="absolute inset-3 rounded-2xl bg-foreground" />
              <div className="absolute inset-3 rounded-2xl bg-grid opacity-25" />
              <div className="relative h-full w-full rounded-2xl flex flex-col items-center justify-center text-background">
                <div className="text-[10rem] md:text-[12rem] font-black leading-none tracking-tighter text-[var(--brand-yellow)]">
                  {site.shirtNumber}
                </div>
                <div className="mt-2 text-lg md:text-xl font-extrabold tracking-widest">
                  {site.position}
                </div>
                <div className="mt-1 text-xs font-mono text-background/60">
                  {site.brandEn}
                </div>
              </div>
              <span className="absolute -top-3 -right-3 inline-flex items-center gap-1 rounded-full bg-[var(--brand-yellow)] px-3 py-1 text-xs font-bold text-foreground shadow-lg">
                <Trophy className="h-3.5 w-3.5" />
                ליגת הבוגרות
              </span>
            </div>
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-[var(--brand-yellow)] opacity-25 blur-3xl animate-glow-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({
  icon: Icon,
  value,
  label,
}: {
  icon: typeof Trophy;
  value: number;
  label: string;
}) {
  return (
    <div className="rounded-xl border border-border bg-background/70 px-3 py-3 backdrop-blur">
      <div className="flex items-center gap-1.5 text-muted-foreground">
        <Icon className="h-3.5 w-3.5" />
        <span className="text-[11px] font-medium">{label}</span>
      </div>
      <div className="mt-1 text-2xl md:text-3xl font-extrabold tracking-tight">
        <AnimatedCounter value={value} />
      </div>
    </div>
  );
}
