import {
  ClipboardList,
  Heart,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { Reveal } from "@/components/site/reveal";
import { SpotlightCard } from "@/components/site/spotlight-card";

const steps = [
  {
    icon: MessageCircle,
    title: "פנייה ראשונית",
    description:
      "מתקשרות, שולחות הודעה או ממלאות טופס — ואני חוזרת אליך תוך 24 שעות.",
  },
  {
    icon: ClipboardList,
    title: "שיחת היכרות ואבחון",
    description:
      "מבינות יחד מה את צריכה, מה הייתה הדרך עד כאן, ומה הפרוטוקול שמתאים לך.",
  },
  {
    icon: Sparkles,
    title: "טיפול מותאם אישית",
    description:
      "פרוטוקול מדויק שמשלב טכנולוגיה, חומרים פעילים, מגע מקצועי וחיבור.",
  },
  {
    icon: Heart,
    title: "מעקב וליווי לאורך זמן",
    description:
      "אני כאן גם אחרי — לחיזוק התוצאה, להתאמות בדרך ולקשר ארוך טווח.",
  },
];

export function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden border-b border-border/60 py-20 md:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[260px] w-[80%] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(ellipse_at_center,color-mix(in_oklch,var(--primary)_18%,transparent)_0%,transparent_60%)] blur-2xl"
      />

      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <Reveal variant="up" className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            איך עובד התהליך
          </h2>
          <p className="mt-3 text-muted-foreground md:text-lg">
            תהליך פשוט, אישי ומכבד — מהפנייה הראשונה ועד הקשר ארוך הטווח.
          </p>
        </Reveal>

        <div className="relative mt-16 hidden lg:block">
          <div
            aria-hidden
            className="absolute inset-x-12 top-5 h-1 bg-gradient-to-l from-transparent via-primary/50 to-transparent"
          />
          <div className="grid grid-cols-4 gap-8">
            {steps.map((_, i) => (
              <div
                key={i}
                className="flex justify-center"
                style={{ pointerEvents: "none" }}
              >
                <span className="relative flex size-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/80 text-sm font-bold text-primary-foreground ring-4 ring-background shadow-lg shadow-primary/30">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            ))}
          </div>
        </div>

        <ol className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mt-6 lg:grid-cols-4 lg:gap-8">
          {steps.map((step, index) => (
            <li key={step.title}>
              <Reveal variant="up" delay={index * 100} className="h-full">
                <SpotlightCard className="h-full">
                  <div className="flex h-full flex-col gap-4 p-6">
                    <div className="flex items-start justify-between gap-3">
                      <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-gradient-to-br from-primary/15 to-primary/5 text-primary shadow-inner shadow-primary/10 transition-all duration-300 group-hover/spotlight:border-primary/40 group-hover/spotlight:from-primary/25 group-hover/spotlight:to-primary/10">
                        <step.icon className="size-6" />
                      </span>
                      <span className="text-right font-mono text-4xl font-bold text-primary/20 lg:hidden">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold tracking-tight">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </SpotlightCard>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
