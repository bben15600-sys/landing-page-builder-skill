"use client";

import { useState } from "react";
import { Reveal } from "./reveal";
import { Heart } from "lucide-react";

const CURRENT = new Date();
const MONTHS = ["ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"];
const WEEKDAYS = ["א'", "ב'", "ג'", "ד'", "ה'", "ו'", "ש'"];

// Simulated availability for next 6 months
const AVAILABILITY: Record<string, "available" | "booked" | "hold"> = {
  "5-15": "booked", "5-22": "available", "5-29": "available",
  "6-5": "booked", "6-12": "hold", "6-19": "available", "6-26": "available",
  "7-3": "booked", "7-10": "hold", "7-17": "available", "7-24": "available", "7-31": "available",
  "8-7": "available", "8-14": "available", "8-21": "booked", "8-28": "available",
  "9-4": "available", "9-11": "available", "9-18": "available", "9-25": "hold",
  "10-2": "available", "10-9": "booked", "10-16": "available", "10-23": "available", "10-30": "available",
};

export function DateAvailability() {
  const [monthOffset, setMonthOffset] = useState(0);
  const targetDate = new Date(CURRENT.getFullYear(), CURRENT.getMonth() + monthOffset, 1);
  const monthNum = targetDate.getMonth() + 1;
  const yearNum = targetDate.getFullYear();
  const firstDay = new Date(yearNum, monthNum - 1, 1).getDay();
  const daysInMonth = new Date(yearNum, monthNum, 0).getDate();
  const cells: (number | null)[] = Array(firstDay).fill(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  return (
    <section id="availability" className="py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <Reveal className="text-center mb-12">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-fg-subtle mb-5">
            זמינות
          </p>
          <h2 className="font-display text-4xl sm:text-6xl text-fg leading-tight">
            התאריך שלכם.
            <br />
            <span className="italic-display text-accent">פנוי?</span>
          </h2>
        </Reveal>

        <Reveal delay={150} className="bg-surface rounded-sm border hairline p-6 sm:p-10">
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={() => setMonthOffset(monthOffset - 1)}
              disabled={monthOffset === 0}
              className="text-fg-muted hover:text-fg disabled:opacity-30 transition-colors"
            >
              ← קודם
            </button>
            <h3 className="font-display text-2xl text-fg">
              {MONTHS[monthNum - 1]} {yearNum}
            </h3>
            <button
              onClick={() => setMonthOffset(monthOffset + 1)}
              className="text-fg-muted hover:text-fg transition-colors"
            >
              הבא →
            </button>
          </div>

          <div className="grid grid-cols-7 gap-1.5 mb-3">
            {WEEKDAYS.map((w) => (
              <div key={w} className="text-center text-xs font-mono text-fg-subtle uppercase">
                {w}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1.5">
            {cells.map((d, i) => {
              if (!d) return <div key={i} />;
              const status = AVAILABILITY[`${monthNum}-${d}`];
              return (
                <div
                  key={i}
                  className={`aspect-square rounded-sm border text-center text-sm flex items-center justify-center transition-colors ${
                    status === "available"
                      ? "border-accent-2/50 bg-accent-2/10 text-fg hover:bg-accent-2/30 cursor-pointer"
                      : status === "booked"
                      ? "border-border bg-surface-2 text-fg-subtle line-through opacity-60"
                      : status === "hold"
                      ? "border-accent/40 bg-accent/10 text-fg-muted"
                      : "border-transparent text-fg-subtle/50"
                  }`}
                >
                  {d}
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-fg-muted">
            <span className="flex items-center gap-2">
              <span className="size-3 rounded-sm bg-accent-2/30 border border-accent-2/50" />
              פנוי
            </span>
            <span className="flex items-center gap-2">
              <span className="size-3 rounded-sm bg-accent/20 border border-accent/40" />
              שמור (ב-7 ימים)
            </span>
            <span className="flex items-center gap-2">
              <span className="size-3 rounded-sm bg-surface-2 border border-border" />
              תפוס
            </span>
          </div>
        </Reveal>

        <Reveal delay={300} className="mt-12 text-center">
          <p className="text-fg-muted italic-display text-lg mb-4">
            לא מצאתם תאריך? <Heart className="inline size-4 -translate-y-0.5 text-accent" /> בואו נדבר.
          </p>
          <a
            href="#inquiry"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-sm bg-fg text-bg text-sm font-medium hover:opacity-90"
          >
            פתחו טופס פנייה
          </a>
        </Reveal>
      </div>
    </section>
  );
}
