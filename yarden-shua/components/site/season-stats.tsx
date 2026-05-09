import { Trophy, Goal, Activity, Award, Medal, Flag } from "lucide-react";
import { Reveal } from "./reveal";
import { AnimatedCounter } from "./animated-counter";

const big = [
  { icon: Goal,     label: "שערים בעונה",       value: 18 },
  { icon: Trophy,   label: "הופעות בליגה",       value: 42 },
  { icon: Activity, label: "בישולים",            value: 9  },
  { icon: Medal,    label: "Player of the Match", value: 6  },
];

const career = [
  { icon: Award, label: "סה״כ שערים בקריירה", value: 73 },
  { icon: Flag,  label: "הופעות בנבחרות גיל", value: 21 },
];

export function SeasonStats() {
  return (
    <section
      id="stats"
      className="relative py-20 md:py-28"
      style={{
        background:
          "linear-gradient(180deg, var(--background), color-mix(in oklch, var(--brand-yellow) 9%, var(--background)))",
      }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="flex flex-col items-start gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold text-muted-foreground">
              סטטיסטיקות
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
              העונה במספרים
            </h2>
            <p className="max-w-2xl text-muted-foreground">
              עדכון אחרון: עונת 2025/26. מקורות: דוחות הליגה הרשמיים ופרופיל המועדון.
              למספרים מעודכנים בזמן אמת — צרו קשר.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-4">
          {big.map((s, i) => (
            <Reveal key={s.label} delay={i * 90}>
              <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 h-full">
                <span className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[var(--brand-yellow)] opacity-30 blur-2xl" />
                <s.icon className="h-5 w-5 text-foreground/60" />
                <div className="mt-3 text-5xl font-black tracking-tighter">
                  <AnimatedCounter value={s.value} />
                </div>
                <div className="mt-1 text-sm font-medium text-muted-foreground">
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {career.map((s, i) => (
            <Reveal key={s.label} delay={i * 90}>
              <div className="flex items-center gap-5 rounded-2xl border border-border bg-foreground p-6 text-background">
                <span className="grid h-14 w-14 place-items-center rounded-xl bg-[var(--brand-yellow)] text-foreground">
                  <s.icon className="h-6 w-6" />
                </span>
                <div>
                  <div className="text-4xl font-black tracking-tight">
                    <AnimatedCounter value={s.value} />
                  </div>
                  <div className="text-sm text-background/70">{s.label}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
