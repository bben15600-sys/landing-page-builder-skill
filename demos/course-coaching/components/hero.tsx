import { Reveal } from "./reveal";
import { Play } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-12 sm:pt-16 pb-16 overflow-hidden">
      <div className="mx-auto max-w-5xl px-5 sm:px-8 text-center">
        <Reveal>
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-7 rounded-full bg-bg-2 border border-conversion/40">
            <span className="size-2 rounded-full bg-conversion animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-wider text-conversion">
              קבוצה חדשה · מאי 2026
            </span>
          </div>

          <h1 className="big-num text-5xl sm:text-7xl md:text-8xl text-fg max-w-4xl mx-auto">
            מ-0 ל-<span className="text-conversion">100K</span> ש״ח בחודש
            <br />
            <span className="highlight-marker">תוך 90 יום בדיוק.</span>
          </h1>

          <p className="mt-7 text-lg sm:text-xl text-fg-muted leading-relaxed max-w-2xl mx-auto">
            השיטה שעזרה ל־<strong className="text-fg">2,847</strong> יזמים
            ישראלים לבנות עסק שעושה כסף גם כשהם בחו״ל.
            <br />
            ללא חברה גדולה, ללא חוב, ללא מזל.
          </p>

          <a
            href="#enroll"
            className="inline-block mt-10 px-8 sm:px-10 py-4 sm:py-5 rounded-md bg-conversion text-bg-2 text-base sm:text-lg font-black hover:opacity-90 transition-opacity urgent-pulse"
          >
            הצטרפו לתוכנית · ₪2,997 ←
          </a>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm text-fg-muted">
            <span className="flex items-center gap-1.5">
              <span className="text-conversion">★★★★★</span>
              4.9/5 ב-478 ביקורות
            </span>
            <span>•</span>
            <span>אחריות מלאה ל-30 יום</span>
            <span>•</span>
            <span>תשלומים בלי ריבית</span>
          </div>
        </Reveal>

        {/* VSL */}
        <Reveal delay={150} className="mt-16">
          <div className="relative max-w-3xl mx-auto rounded-lg overflow-hidden border-2 border-conversion shadow-[0_0_60px_-10px_oklch(0.88_0.20_95_/_0.5)]">
            <div
              className="aspect-video relative cursor-pointer group"
              style={{
                background: `
                  radial-gradient(ellipse at 30% 40%, oklch(0.32 0.05 280), transparent 60%),
                  radial-gradient(ellipse at 70% 60%, oklch(0.42 0.08 25 / 0.4), transparent 50%),
                  oklch(0.18 0 0)
                `,
              }}
            >
              {/* Instructor silhouette placeholder */}
              <div className="absolute inset-x-0 bottom-0 top-1/4 bg-gradient-to-t from-bg-2 to-transparent" />

              {/* Play button */}
              <div className="absolute inset-0 grid place-items-center">
                <div className="relative">
                  <div className="absolute inset-0 size-20 rounded-full bg-conversion blur-xl opacity-60" />
                  <div className="relative size-20 rounded-full bg-conversion grid place-items-center group-hover:scale-110 transition-transform">
                    <Play className="size-8 text-bg-2 fill-bg-2 ms-1" />
                  </div>
                </div>
              </div>

              <div className="absolute top-4 start-4 text-xs font-mono text-fg-muted">
                ▸ 3 דקות · צפו לפני שאתם מחליטים
              </div>

              <div className="absolute bottom-4 inset-x-4 flex items-center justify-between text-fg">
                <span className="font-bold text-lg">שיטת ה-90 יום</span>
                <span className="text-xs text-fg-muted">© Adam Levi</span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Press */}
        <Reveal delay={300} className="mt-12">
          <p className="text-xs uppercase tracking-[0.2em] text-fg-subtle mb-5">
            הופיע ב־
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-fg-muted">
            {["Calcalist", "Globes", "Ynet", "TheMarker", "Forbes IL", "Geektime"].map((p) => (
              <span key={p} className="text-base sm:text-lg font-bold opacity-50 hover:opacity-100 transition-opacity" dir="ltr">
                {p}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
