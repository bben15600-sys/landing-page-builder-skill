"use client";

import { useState } from "react";
import { Reveal } from "./reveal";
import { Magnetic } from "./magnetic";

const EVENTS = ["חתונה", "ברית", "בר/בת מצווה", "אירוסין/חינה", "אחר"];
const PACKAGES = ["צילום בלבד", "צילום + מגנטים", "החבילה המלאה (צילום + מגנטים + אלבום + סרטון)"];

export function InquiryForm() {
  const [event, setEvent] = useState("");
  const [pkg, setPkg] = useState("");

  return (
    <section id="inquiry" className="py-24 sm:py-40 bg-bg">
      <div className="mx-auto max-w-3xl px-5 sm:px-10">
        <Reveal className="mb-16 text-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-fg-subtle mb-5">
            פנייה
          </p>
          <h2 className="font-display text-5xl sm:text-7xl md:text-8xl leading-[0.95] tracking-tight">
            <span>בואו </span>
            <span className="italic-display">נדבר.</span>
          </h2>
          <p className="mt-6 italic-display text-xl text-fg-muted max-w-md mx-auto">
            מענה תוך 24 שעות. הצעת מחיר ראשונית תוך 48 שעות. ללא התחייבות.
          </p>
        </Reveal>

        <Reveal delay={150}>
          <form className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <Field label="שם מלא">
                <input className="form-input" placeholder="שם פרטי + משפחה" />
              </Field>
              <Field label="טלפון">
                <input dir="ltr" className="form-input" placeholder="054-000-0000" />
              </Field>
            </div>

            <Field label="אימייל">
              <input dir="ltr" type="email" className="form-input" placeholder="you@example.com" />
            </Field>

            <Field label="סוג האירוע">
              <div className="flex flex-wrap gap-2">
                {EVENTS.map((e) => (
                  <Chip key={e} active={event === e} onClick={() => setEvent(e)}>
                    {e}
                  </Chip>
                ))}
              </div>
            </Field>

            <div className="grid sm:grid-cols-2 gap-6">
              <Field label="תאריך משוער">
                <input className="form-input" placeholder="חודש / עונה" />
              </Field>
              <Field label="מספר אורחים">
                <input type="number" className="form-input" placeholder="120" />
              </Field>
            </div>

            <Field label="מיקום האירוע">
              <input className="form-input" placeholder="עיר / אזור / שם המקום" />
            </Field>

            <Field label="חבילה מועדפת">
              <div className="flex flex-col gap-2">
                {PACKAGES.map((p) => (
                  <Chip key={p} active={pkg === p} onClick={() => setPkg(p)} block>
                    {p}
                  </Chip>
                ))}
              </div>
            </Field>

            <Field label="ספרו לי עליכם">
              <textarea
                rows={4}
                className="form-input resize-none"
                placeholder="הסיפור שלכם בקצרה. סגנון מועדף. כל פרט עוזר."
              />
            </Field>

            <div className="pt-4">
              <Magnetic strength={0.25}>
                <button
                  type="button"
                  data-cursor-label="שלחו"
                  className="w-full bg-fg text-bg py-4 rounded-full font-medium tracking-wide hover:opacity-90 transition-opacity"
                >
                  שלחו פנייה
                </button>
              </Magnetic>
              <p className="text-center text-xs text-fg-subtle mt-3 italic-display">
                או בוואטסאפ —{" "}
                <a href="#" dir="ltr" className="border-b border-fg/30 hover:border-fg">
                  +972 54 360 0082
                </a>
              </p>
            </div>
          </form>
        </Reveal>
      </div>

      <style>{`
        .form-input {
          width: 100%;
          background: transparent;
          border: none;
          border-bottom: 1px solid var(--color-hairline);
          padding: 0.75rem 0;
          color: var(--color-fg);
          outline: none;
          transition: border-color 300ms ease;
          font-family: var(--font-display);
          font-size: 1.125rem;
        }
        .form-input:focus { border-bottom-color: var(--color-fg); }
        .form-input::placeholder { color: var(--color-fg-subtle); font-style: italic; }
      `}</style>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-[10px] uppercase tracking-[0.25em] font-mono text-fg-subtle mb-3">
        {label}
      </span>
      {children}
    </label>
  );
}

function Chip({
  children,
  active,
  onClick,
  block,
}: {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
  block?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${block ? "block w-full text-start" : "inline-block"} px-4 py-2 rounded-full border text-sm transition-colors ${
        active ? "bg-fg text-bg border-fg" : "bg-transparent text-fg-muted border-hairline hover:border-fg-muted hover:text-fg"
      }`}
    >
      {children}
    </button>
  );
}
