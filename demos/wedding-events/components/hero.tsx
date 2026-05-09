import { Reveal } from "./reveal";
import { ArrowLeft } from "lucide-react";

export function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[640px] overflow-hidden">
      <div className="absolute inset-0 ken-burns">
        <div
          className="w-full h-full"
          style={{
            background: `
              radial-gradient(ellipse at 30% 40%, oklch(0.85 0.04 60 / 0.7), transparent 50%),
              radial-gradient(ellipse at 70% 60%, oklch(0.78 0.06 20 / 0.5), transparent 60%),
              radial-gradient(ellipse at 50% 100%, oklch(0.72 0.06 130 / 0.4), transparent 50%),
              linear-gradient(180deg, oklch(0.92 0.03 35) 0%, oklch(0.78 0.05 30) 50%, oklch(0.62 0.06 25) 100%)
            `,
          }}
        />
      </div>
      <div className="absolute inset-0 hero-overlay" />

      <svg
        aria-hidden
        viewBox="0 0 200 200"
        className="absolute top-24 sm:top-32 start-1/2 -translate-x-1/2 size-32 text-accent/70 z-10"
      >
        <path
          className="draw-stroke"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          d="M100 30 Q 80 60 100 100 Q 120 60 100 30 M 100 100 Q 70 110 60 140 M 100 100 Q 130 110 140 140 M 100 100 L 100 170"
        />
        <circle cx="100" cy="30" r="2.5" fill="currentColor" />
        <circle cx="60" cy="140" r="2" fill="currentColor" />
        <circle cx="140" cy="140" r="2" fill="currentColor" />
      </svg>

      <div className="relative h-full flex items-center">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 text-center">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-fg-muted mb-7">
              אחוזת ענבר · יער הכרמל
            </p>
            <h1 className="font-display text-5xl sm:text-7xl md:text-8xl text-fg leading-[0.95] tracking-tight">
              חתונות בוטיק
              <br />
              <span className="italic-display text-accent">בלב הטבע.</span>
            </h1>
            <p className="mt-8 max-w-lg mx-auto text-lg italic-display text-fg-muted leading-relaxed">
              חצר פרטית עם נוף לים, גן ותיק וסיפור שעובר מדור לדור.
              עד 200 אורחים. כשר למהדרין.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="#inquiry"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-sm bg-fg text-bg text-sm font-medium tracking-wide hover:opacity-90 transition-opacity"
              >
                בדקו זמינות לתאריך שלכם
                <ArrowLeft className="size-4" />
              </a>
              <a
                href="#weddings"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm text-fg hover:text-accent transition-colors border-b border-fg hover:border-accent"
              >
                ראו חתונות אמת
              </a>
            </div>
          </Reveal>

          <Reveal delay={400} className="mt-20">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-bg/40 backdrop-blur border hairline text-xs text-fg-muted">
              <span className="size-1.5 rounded-full bg-accent-2 animate-pulse" />
              <span>נותרו 4 תאריכים בקיץ 2026</span>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="absolute bottom-8 inset-x-0 flex justify-center">
        <div className="font-mono text-[10px] uppercase tracking-widest text-fg-muted animate-bounce">
          גללו ↓
        </div>
      </div>
    </section>
  );
}
