import { ArrowLeft, Sparkles } from "lucide-react";
import { Reveal } from "./reveal";

export function Hero() {
  return (
    <section className="relative overflow-hidden grain">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 pt-16 sm:pt-24 pb-20 sm:pb-28">
        <Reveal className="flex flex-col items-center text-center">
          <a
            href="#changelog"
            className="group inline-flex items-center gap-2 px-3 py-1 mb-7 rounded-full bg-surface border border-border text-xs text-fg-muted hover:text-fg hover:border-border-strong transition-colors"
          >
            <span className="inline-block size-1.5 rounded-full bg-accent" />
            <span className="font-medium">חדש</span>
            <span className="font-mono text-fg-subtle">v3.2</span>
            <span className="text-fg-muted">— Streaming agents בעברית</span>
            <ArrowLeft className="size-3 group-hover:-translate-x-0.5 transition-transform" />
          </a>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight leading-[1.05] max-w-3xl">
            <span className="text-fg">בנו AI agents</span>
            <br />
            <span className="text-gradient-accent">אוטונומיים בעברית</span>
          </h1>

          <p className="mt-6 max-w-xl text-base sm:text-lg text-fg-muted leading-relaxed">
            פלטפורמה לבניית סוכני AI שמדברים, חושבים ופועלים בעברית.
            אינטגרציה עם Bit, Cardcom, Tranzila והמערכות הישראליות שאתם כבר
            עובדים איתן.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row items-center gap-3">
            <a
              href="#start"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-fg text-bg font-medium text-sm hover:opacity-90 transition-opacity shadow-glow"
            >
              <Sparkles className="size-4" />
              התחל בחינם
            </a>
            <a
              href="#docs"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-surface border border-border text-fg hover:border-border-strong text-sm font-medium transition-colors"
            >
              קרא את התיעוד
              <ArrowLeft className="size-4" />
            </a>
          </div>

          <div className="mt-6 flex items-center gap-1.5 text-xs text-fg-subtle">
            <span>חינם עד 1,000 הרצות.</span>
            <span>לא נדרש כרטיס אשראי.</span>
            <span className="hidden sm:inline">לחיצה על</span>
            <kbd className="hidden sm:inline-block">⌘</kbd>
            <kbd className="hidden sm:inline-block">K</kbd>
            <span className="hidden sm:inline">לחיפוש מהיר.</span>
          </div>
        </Reveal>

        {/* Dashboard mockup preview */}
        <Reveal delay={150} className="mt-16 sm:mt-20">
          <div className="relative mx-auto max-w-5xl">
            <div className="absolute inset-x-10 top-10 h-40 bg-gradient-to-r from-accent/30 to-accent-2/30 blur-3xl rounded-full" />
            <div className="relative rounded-2xl border border-border bg-surface p-2 shadow-card">
              <div className="rounded-xl bg-gradient-to-b from-surface-2 to-bg p-6 sm:p-8 border border-border/60">
                <div className="flex items-center gap-1.5 mb-5">
                  <span className="size-2.5 rounded-full bg-fg-subtle/40" />
                  <span className="size-2.5 rounded-full bg-fg-subtle/40" />
                  <span className="size-2.5 rounded-full bg-fg-subtle/40" />
                  <span className="ms-3 font-mono text-[11px] text-fg-subtle" dir="ltr">
                    stratos.ai/dashboard
                  </span>
                </div>
                <div className="grid sm:grid-cols-3 gap-3">
                  {[
                    { label: "סוכנים פעילים", value: "12", trend: "+3" },
                    { label: "שיחות היום", value: "2,847", trend: "+18%" },
                    { label: "זמן תגובה ממוצע", value: "0.42s", trend: "↓ 12%" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-lg bg-surface border border-border p-3.5"
                    >
                      <div className="text-[11px] text-fg-subtle uppercase tracking-wider font-mono">
                        {stat.label}
                      </div>
                      <div className="mt-2 flex items-baseline gap-2">
                        <span className="text-2xl font-semibold text-fg" dir="ltr">
                          {stat.value}
                        </span>
                        <span className="text-xs text-success" dir="ltr">
                          {stat.trend}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-3 rounded-lg bg-surface border border-border p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-sm text-fg font-medium">סוכן: שירות לקוחות</div>
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono text-success">
                      <span className="size-1.5 rounded-full bg-success animate-pulse" />
                      ONLINE
                    </span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="rounded-lg bg-bg border border-border px-3 py-2 text-fg-muted">
                      איך אני מבטל הזמנה שביצעתי בטעות?
                    </div>
                    <div className="rounded-lg bg-accent-soft border border-accent/30 px-3 py-2 text-fg">
                      בוודאי. מצאתי את ההזמנה <span className="font-mono text-xs text-accent" dir="ltr">#82471</span> מאתמול. אני מבטל ומחזיר את התשלום ל-Bit. תרצה SMS אישור?
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
