import {
  Award,
  BadgeCheck,
  ShieldCheck,
  Wrench,
  type LucideIcon,
} from "lucide-react";

type Cert = { icon: LucideIcon; title: string; subtitle: string };

const certs: Cert[] = [
  {
    icon: BadgeCheck,
    title: "חשמלאי מוסמך",
    subtitle: "רישיון משרד התשתיות",
  },
  {
    icon: ShieldCheck,
    title: "מבוטח",
    subtitle: "ביטוח אחריות צד ג׳",
  },
  {
    icon: Award,
    title: "אחריות מלאה",
    subtitle: "על כל עבודה ושירות",
  },
  {
    icon: Wrench,
    title: "תקן ישראלי",
    subtitle: "עבודה לפי חוק החשמל",
  },
];

export function CertificationsStrip() {
  return (
    <section
      aria-label="הסמכות ואמינות"
      className="relative overflow-hidden border-b border-border/60 bg-gradient-to-b from-card/40 via-background to-card/30 py-10 md:py-12"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-l from-transparent via-primary/40 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -bottom-px h-px bg-gradient-to-l from-transparent via-primary/30 to-transparent"
      />

      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <ul className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
          {certs.map((cert, i) => (
            <li
              key={cert.title}
              style={{ animationDelay: `${i * 70}ms` }}
              className="group/cert relative flex items-center gap-3 overflow-hidden rounded-xl border border-border/50 bg-background/70 p-3.5 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-background/90 hover:shadow-lg hover:shadow-primary/15"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute inset-x-3 top-0 h-px bg-gradient-to-l from-transparent via-primary/30 to-transparent opacity-0 transition-opacity duration-500 group-hover/cert:opacity-100"
              />
              <span className="relative inline-flex size-11 shrink-0 items-center justify-center rounded-xl border border-primary/25 bg-gradient-to-br from-primary/20 to-primary/5 text-primary shadow-inner shadow-primary/10 transition-all duration-300 group-hover/cert:scale-105 group-hover/cert:border-primary/50 group-hover/cert:from-primary/30 group-hover/cert:to-primary/10 group-hover/cert:shadow-md group-hover/cert:shadow-primary/25">
                <cert.icon className="size-5 transition-transform duration-500 group-hover/cert:rotate-[8deg]" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold leading-tight">
                  {cert.title}
                </p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {cert.subtitle}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
