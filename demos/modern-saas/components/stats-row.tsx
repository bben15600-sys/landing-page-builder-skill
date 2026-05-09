"use client";

import { AnimatedCounter } from "./animated-counter";
import { Reveal } from "./reveal";

const STATS = [
  { value: 99.99, suffix: "%", label: "Uptime SLA", format: (n: number) => n.toFixed(2) },
  { value: 4_280_000, label: "שיחות מטופלות", format: (n: number) => n.toLocaleString("he-IL") },
  { value: 42, suffix: "ms", label: "תגובה ממוצעת", format: (n: number) => n.toString() },
  { value: 135, suffix: "+", label: "סטארטאפים", format: (n: number) => n.toString() },
];

export function StatsRow() {
  return (
    <section className="py-16 sm:py-20 border-y border-border/60 bg-bg/40">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl sm:text-5xl font-semibold tracking-tight text-fg tabular-nums">
                <AnimatedCounter to={s.value} suffix={s.suffix} format={s.format} />
              </div>
              <div className="mt-2 text-xs sm:text-sm text-fg-muted">{s.label}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
