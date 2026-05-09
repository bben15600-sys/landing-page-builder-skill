"use client";

import { useState } from "react";
import { Reveal } from "./reveal";
import { Heart, Send } from "lucide-react";

const VIBES = ["כפרי-רומנטי", "אלגנטי", "מינימליסטי", "בוהמייני", "אורבני"];
const BUDGETS = ["50-100K", "100-150K", "150-250K", "250K+"];

export function InquiryForm() {
  const [vibe, setVibe] = useState("");
  const [budget, setBudget] = useState("");

  return (
    <section id="inquiry" className="py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-5 sm:px-8">
        <Reveal className="text-center mb-12">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-fg-subtle mb-5">
            פנייה
          </p>
          <h2 className="font-display text-4xl sm:text-6xl text-fg leading-tight">
            בואו נכיר.
            <br />
            <span className="italic-display text-accent">בלי התחייבות.</span>
          </h2>
          <p className="mt-5 text-fg-muted italic-display text-lg">
            נחזור אליכם בתוך 24 שעות עם הצעה ראשונית.
          </p>
        </Reveal>

        <Reveal delay={150}>
          <form className="space-y-5 bg-surface rounded-sm border hairline p-6 sm:p-10">
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="שם הכלה">
                <input
                  type="text"
                  placeholder="שם פרטי"
                  className="w-full bg-bg border hairline rounded-sm px-3 py-2.5 text-fg focus:border-accent outline-none transition-colors"
                />
              </Field>
              <Field label="שם החתן">
                <input
                  type="text"
                  placeholder="שם פרטי"
                  className="w-full bg-bg border hairline rounded-sm px-3 py-2.5 text-fg focus:border-accent outline-none transition-colors"
                />
              </Field>
            </div>

            <Field label="טלפון">
              <input
                type="tel"
                placeholder="054-000-0000"
                dir="ltr"
                className="w-full bg-bg border hairline rounded-sm px-3 py-2.5 text-fg focus:border-accent outline-none transition-colors"
              />
            </Field>

            <Field label="אימייל">
              <input
                type="email"
                placeholder="you@example.com"
                dir="ltr"
                className="w-full bg-bg border hairline rounded-sm px-3 py-2.5 text-fg focus:border-accent outline-none transition-colors"
              />
            </Field>

            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="תאריך משוער">
                <input
                  type="text"
                  placeholder="חודש/עונה"
                  className="w-full bg-bg border hairline rounded-sm px-3 py-2.5 text-fg focus:border-accent outline-none transition-colors"
                />
              </Field>
              <Field label="מספר אורחים">
                <input
                  type="number"
                  placeholder="120"
                  className="w-full bg-bg border hairline rounded-sm px-3 py-2.5 text-fg focus:border-accent outline-none transition-colors"
                />
              </Field>
            </div>

            <Field label="הסגנון שלכם">
              <div className="flex flex-wrap gap-2">
                {VIBES.map((v) => (
                  <button
                    key={v}
                    type="button"
                    onClick={() => setVibe(v)}
                    className={`px-3 py-1.5 text-sm rounded-full border transition-colors ${
                      vibe === v
                        ? "bg-fg text-bg border-fg"
                        : "bg-bg text-fg-muted hairline hover:border-fg-muted"
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </Field>

            <Field label="טווח תקציב (₪)">
              <div className="flex flex-wrap gap-2">
                {BUDGETS.map((b) => (
                  <button
                    key={b}
                    type="button"
                    onClick={() => setBudget(b)}
                    className={`px-3 py-1.5 text-sm rounded-full border transition-colors ${
                      budget === b
                        ? "bg-fg text-bg border-fg"
                        : "bg-bg text-fg-muted hairline hover:border-fg-muted"
                    }`}
                    dir="ltr"
                  >
                    {b}
                  </button>
                ))}
              </div>
            </Field>

            <Field label="ספרו לנו על החתונה שלכם">
              <textarea
                rows={4}
                placeholder="הקווים הכלליים — חופה אחר הצהריים? מוזיקה חיה? ארוחה ארוכה? כל פרט עוזר."
                className="w-full bg-bg border hairline rounded-sm px-3 py-2.5 text-fg focus:border-accent outline-none transition-colors resize-none"
              />
            </Field>

            <button
              type="button"
              className="w-full inline-flex items-center justify-center gap-2 mt-2 px-6 py-3 rounded-sm bg-fg text-bg text-sm font-medium hover:opacity-90 transition-opacity"
            >
              <Heart className="size-4" />
              שלחו פנייה
              <Send className="size-3.5" />
            </button>

            <p className="text-center text-xs text-fg-subtle italic-display pt-2">
              נקבל את הפנייה ונחזור בתוך 24 שעות עם הצעה. ללא התחייבות.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-wider font-mono text-fg-subtle mb-2 block">
        {label}
      </span>
      {children}
    </label>
  );
}
