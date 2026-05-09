"use client";

import { useState } from "react";
import { Reveal } from "./reveal";
import { Check, Shield } from "lucide-react";

export function PricingReveal() {
  const [plan, setPlan] = useState<"single" | "split">("split");

  return (
    <section id="enroll" className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <Reveal className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-conversion mb-3 font-bold">
            השקעה
          </p>
          <h2 className="big-num text-3xl sm:text-5xl text-fg">
            ההחלטה שעולה <span className="strike">₪9,997</span>
            <br />
            <span className="text-conversion">היום בלבד: ₪2,997</span>
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="rounded-2xl border-2 border-conversion bg-bg-2 overflow-hidden shadow-[0_0_60px_-15px_oklch(0.88_0.20_95_/_0.5)]">
            {/* Plan toggle */}
            <div className="flex border-b border-border">
              {[
                { id: "single" as const, label: "תשלום יחיד", price: "₪2,997", save: "חיסכון ₪600" },
                { id: "split" as const, label: "12 תשלומים", price: "₪299×12", save: "0% ריבית" },
              ].map((p) => (
                <button
                  key={p.id}
                  onClick={() => setPlan(p.id)}
                  className={`flex-1 px-5 py-4 text-center transition-colors ${
                    plan === p.id ? "bg-conversion text-bg-2" : "bg-bg text-fg-muted hover:text-fg"
                  }`}
                >
                  <div className="font-bold text-sm">{p.label}</div>
                  <div className="text-xs mt-0.5 opacity-80">{p.save}</div>
                </button>
              ))}
            </div>

            <div className="p-7 sm:p-10">
              <div className="text-center mb-7">
                <div className="text-xs text-fg-subtle uppercase tracking-wider mb-2 font-mono">
                  {plan === "single" ? "תשלום אחד" : "12 תשלומים שווים"}
                </div>
                <div className="big-num text-6xl sm:text-7xl text-conversion" dir="ltr">
                  {plan === "single" ? "₪2,997" : "₪299"}
                </div>
                {plan === "split" && (
                  <div className="text-fg-muted text-sm mt-1">לחודש · ללא ריבית · ללא הצמדה</div>
                )}
                <div className="text-xs text-fg-subtle mt-2">כולל מע״מ · חשבונית מס מלאה</div>
              </div>

              <ul className="space-y-3 text-fg mb-8">
                {[
                  "כל 6 המודולים (29 שעות וידאו)",
                  "פגישת 1:1 שבועית עם אדם",
                  "כל 4 הבונוסים (שווי ₪8,380)",
                  "גישה לקהילה לכל החיים",
                  "תבניות + סקריפטים + SOPs",
                  "אחריות מלאה ל-30 יום",
                ].map((f) => (
                  <li key={f} className="flex items-center gap-2.5">
                    <Check className="size-5 text-conversion shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#checkout"
                className="block w-full text-center px-6 py-4 rounded-md bg-conversion text-bg-2 font-black text-base sm:text-lg hover:opacity-90 transition-opacity urgent-pulse mb-3"
              >
                הירשמו עכשיו · {plan === "single" ? "₪2,997" : "₪299/חודש"}
              </a>

              <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-fg-subtle">
                <span>תשלום בטוח דרך</span>
                <strong className="text-fg-muted">Cardcom</strong>
                <span>·</span>
                <strong className="text-fg-muted">Bit</strong>
                <span>·</span>
                <strong className="text-fg-muted">Apple Pay</strong>
                <span>·</span>
                <strong className="text-fg-muted">PayBox</strong>
              </div>
            </div>

            {/* Guarantee */}
            <div className="border-t border-border bg-bg p-6 flex items-center gap-5">
              <div className="size-14 rounded-full bg-conversion/15 grid place-items-center text-conversion shrink-0">
                <Shield className="size-6" />
              </div>
              <div>
                <div className="font-bold text-fg mb-0.5">
                  אחריות 30 יום, ללא שאלות
                </div>
                <div className="text-sm text-fg-muted leading-relaxed">
                  לא מרגישים שזה בשבילכם? תוך 30 יום מההרשמה,
                  אנחנו מחזירים את כל הכסף. ללא שאלות.
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
