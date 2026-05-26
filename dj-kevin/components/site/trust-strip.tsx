"use client";

import { Disc3, Clock, Star, MapPin } from "lucide-react";
import { siteConfig } from "./site-config";
import { AnimatedCounter } from "./animated-counter";
import { Reveal } from "./reveal";

export function TrustStrip() {
  return (
    <section
      id="trust"
      className="relative border-y border-border bg-card/30 scroll-mt-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-12 sm:py-16">
        <Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12">
            <Stat
              icon={<Disc3 size={22} />}
              value={siteConfig.stats.events}
              suffix="+"
              label="אירועים"
            />
            <Stat
              icon={<Clock size={22} />}
              value={siteConfig.stats.yearsExperience}
              suffix=" שנים"
              label="על הדקים"
            />
            <Stat
              icon={<Star size={22} />}
              value={siteConfig.stats.rating}
              suffix="★"
              label="דירוג ממוצע"
            />
            <StaticStat
              icon={<MapPin size={22} />}
              label="פריסה"
              value={siteConfig.stats.coverage}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Stat({
  icon,
  value,
  suffix,
  label,
}: {
  icon: React.ReactNode;
  value: number;
  suffix?: string;
  label: string;
}) {
  return (
    <div className="flex flex-col items-center text-center gap-2">
      <div className="text-accent">{icon}</div>
      <div className="font-display font-extrabold text-4xl sm:text-5xl text-accent tabular-nums leading-none">
        <AnimatedCounter value={value} suffix={suffix} format={false} />
      </div>
      <div className="text-xs sm:text-sm text-muted-foreground tracking-wider">
        {label}
      </div>
    </div>
  );
}

function StaticStat({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="flex flex-col items-center text-center gap-2">
      <div className="text-accent">{icon}</div>
      <div className="font-display font-extrabold text-2xl sm:text-3xl text-accent leading-tight">
        {value}
      </div>
      <div className="text-xs sm:text-sm text-muted-foreground tracking-wider">
        {label}
      </div>
    </div>
  );
}
