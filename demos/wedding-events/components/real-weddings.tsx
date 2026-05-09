"use client";

import { Reveal } from "./reveal";
import { useState } from "react";

const WEDDINGS = [
  { couple: "ש & נ", season: "אביב 2025", style: "כפרי-רומנטי", guests: 140, hue: "rose" },
  { couple: "ר & ע", season: "סתיו 2024", style: "אלגנטי", guests: 220, hue: "sage" },
  { couple: "מ & י", season: "קיץ 2025", style: "מינימליסטי", guests: 95, hue: "blush" },
  { couple: "ת & ד", season: "חורף 2024", style: "כפרי", guests: 180, hue: "gold" },
  { couple: "א & ל", season: "אביב 2024", style: "בוהמייני", guests: 110, hue: "rose" },
  { couple: "ג & ש", season: "סתיו 2025", style: "אלגנטי", guests: 200, hue: "sage" },
];

const FILTERS = ["הכל", "אביב", "קיץ", "סתיו", "חורף"];

const HUE_STYLES = {
  rose: "from-rose/60 via-rose/40 to-rose/20",
  sage: "from-accent-2/40 via-accent-2/30 to-accent/30",
  blush: "from-blush/50 via-blush/30 to-accent/30",
  gold: "from-accent/40 via-accent/30 to-rose/20",
} as const;

export function RealWeddings() {
  const [filter, setFilter] = useState("הכל");

  return (
    <section id="weddings" className="py-24 sm:py-32 watercolor-wash">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="text-center mb-12">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-fg-subtle mb-5">
            הסיפורים שלנו
          </p>
          <h2 className="font-display text-4xl sm:text-6xl text-fg leading-tight">
            חתונות אמת
            <br />
            <span className="italic-display text-accent">באחוזה.</span>
          </h2>
        </Reveal>

        <Reveal delay={120} className="flex justify-center gap-1.5 mb-10 flex-wrap">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-1.5 text-sm rounded-full border transition-colors ${
                filter === f
                  ? "bg-fg text-bg border-fg"
                  : "bg-transparent text-fg-muted border-border hover:border-fg-muted hover:text-fg"
              }`}
            >
              {f}
            </button>
          ))}
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {WEDDINGS.filter(
            (w) => filter === "הכל" || w.season.includes(filter)
          ).map((w, i) => (
            <Reveal key={`${w.couple}-${w.season}`} delay={i * 80}>
              <article className="group relative aspect-[4/5] overflow-hidden rounded-sm cursor-pointer">
                <div
                  className={`absolute inset-0 bg-gradient-to-b ${HUE_STYLES[w.hue as keyof typeof HUE_STYLES]} transition-transform duration-700 group-hover:scale-105`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-fg/60 via-fg/20 to-transparent" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-bg">
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] mb-2 opacity-80">
                    {w.season} · {w.guests} אורחים
                  </p>
                  <h3 className="font-display italic text-3xl mb-1">
                    {w.couple}
                  </h3>
                  <p className="text-xs opacity-90">{w.style}</p>
                  <span className="mt-3 text-[11px] underline underline-offset-4 self-start opacity-0 group-hover:opacity-100 transition-opacity">
                    קראו את הסיפור ←
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
