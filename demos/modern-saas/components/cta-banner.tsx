import { ArrowLeft, Sparkles } from "lucide-react";
import { Reveal } from "./reveal";

export function CtaBanner() {
  return (
    <section id="start" className="py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-surface p-10 sm:p-14 text-center grain">
            <div
              aria-hidden
              className="absolute inset-0 opacity-80"
              style={{
                background:
                  "radial-gradient(60% 80% at 50% 0%, oklch(0.72 0.18 295 / 0.35), transparent 70%), radial-gradient(40% 50% at 80% 100%, oklch(0.78 0.16 220 / 0.25), transparent 70%)",
              }}
            />
            <div className="relative">
              <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-fg leading-tight max-w-2xl mx-auto">
                הסוכן שלכם.
                <br />
                <span className="text-gradient-accent">בייצור היום.</span>
              </h2>
              <p className="mt-5 text-fg-muted max-w-md mx-auto">
                התחלו בחינם, ללא כרטיס אשראי. פרסו לפרודקשן בלחיצה.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="#signup"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-fg text-bg font-medium text-sm hover:opacity-90 shadow-glow"
                >
                  <Sparkles className="size-4" />
                  התחל בחינם
                </a>
                <a
                  href="#sales"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-surface-2 border border-border text-fg hover:border-border-strong text-sm font-medium"
                >
                  דברו עם מכירות
                  <ArrowLeft className="size-4" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
