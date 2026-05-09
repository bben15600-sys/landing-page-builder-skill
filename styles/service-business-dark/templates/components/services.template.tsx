import {
  ClipboardCheck,
  Cog,
  FlaskConical,
  Gauge,
  Layers,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/site/reveal";
import { SpotlightCard } from "@/components/site/spotlight-card";

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  size: "sm" | "md" | "lg";
  accent?: boolean;
};

const services: Service[] = [
  {
    icon: FlaskConical,
    title: "פארמה וחדרים נקיים",
    description:
      "תשתיות חשמל ואחזקה למפעלי פארמה ומתקני חדרים נקיים — עבודה לפי תקנים מחמירים, ידע נרחב מול כל הרשויות.",
    size: "lg",
    accent: true,
  },
  {
    icon: Layers,
    title: "תכנון וביצוע פרוייקטים",
    description:
      "החלפת לוחות, שיפור תשתיות קיימות וביצוע פרוייקטי חשמל מורכבים מקצה לקצה.",
    size: "md",
  },
  {
    icon: Wrench,
    title: "תיקון קצרים והחלפת לוחות",
    description:
      "אבחון מהיר, החלפת לוחות חשמל ובדיקות מקיפות של ממסרי פחת והארקה.",
    size: "sm",
  },
  {
    icon: ClipboardCheck,
    title: "בדיקות שנתיות וכיבוי אש",
    description:
      "אישורים בהתאם לדרישות כיבוי אש, כולל מתח גבוה — עמידה מלאה בכל התקנים.",
    size: "sm",
  },
  {
    icon: Cog,
    title: "אחזקת קווי ייצור",
    description:
      "שירותי אחזקה ושיפור לקווי ייצור קיימים — מינימום השבתה, מקסימום זמינות.",
    size: "md",
  },
  {
    icon: Gauge,
    title: "תעשייה ובנייני משרדים",
    description:
      "שירותי חשמל ואחזקה כוללים למפעלי תעשייה, בנייני משרדים ומתקנים תפעוליים.",
    size: "md",
  },
];

const sizeClass: Record<Service["size"], string> = {
  sm: "lg:col-span-2",
  md: "lg:col-span-3",
  lg: "lg:col-span-4 lg:row-span-1",
};

export function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden border-b border-border/60 py-20 md:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[260px] w-[80%] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(ellipse_at_center,color-mix(in_oklch,var(--primary)_18%,transparent)_0%,transparent_60%)] blur-2xl"
      />

      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <Reveal variant="up" className="mx-auto max-w-2xl text-center">
          <h2 className="bg-gradient-to-l from-foreground via-foreground to-primary/80 bg-clip-text text-3xl font-bold tracking-tight text-transparent md:text-4xl">
            השירותים שלנו
          </h2>
          <p className="mt-3 text-muted-foreground md:text-lg">
            פתרונות חשמל מקצה לקצה — לבית, לעסק ולפרויקטים גדולים.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-8 lg:gap-5 lg:auto-rows-[12rem]">
          {services.map((service, idx) => (
            <Reveal
              key={service.title}
              variant="up"
              delay={idx * 70}
              className={`${sizeClass[service.size]} ${service.accent ? "lg:row-span-2" : ""}`}
            >
            <SpotlightCard
              className="h-full"
            >
              <div
                className={`flex h-full flex-col gap-3 p-6 ${
                  service.accent
                    ? "bg-gradient-to-br from-primary/10 via-primary/5 to-transparent"
                    : ""
                }`}
              >
                <span
                  className={`inline-flex size-12 items-center justify-center rounded-xl border transition-all duration-300 ${
                    service.accent
                      ? "border-primary/30 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-lg shadow-primary/30"
                      : "border-primary/15 bg-gradient-to-br from-primary/15 to-primary/5 text-primary shadow-inner shadow-primary/10 group-hover/spotlight:border-primary/40 group-hover/spotlight:from-primary group-hover/spotlight:to-primary group-hover/spotlight:text-primary-foreground group-hover/spotlight:shadow-md group-hover/spotlight:shadow-primary/30"
                  }`}
                >
                  <service.icon className="size-5" />
                </span>

                <h3
                  className={`font-semibold tracking-tight ${
                    service.accent ? "text-xl md:text-2xl" : "text-lg"
                  }`}
                >
                  {service.title}
                </h3>
                <p
                  className={`leading-relaxed text-muted-foreground ${
                    service.accent ? "md:text-base" : "text-sm"
                  }`}
                >
                  {service.description}
                </p>

                {service.accent ? (
                  <div className="mt-auto pt-2">
                    <span className="animate-ring-pulse inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
                      <span className="size-1.5 animate-pulse rounded-full bg-primary" />
                      התמחות בלעדית
                    </span>
                  </div>
                ) : null}
              </div>
            </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
