import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { ContactForm } from "@/components/site/contact-form";
import { Reveal } from "@/components/site/reveal";
import { SpotlightCard } from "@/components/site/spotlight-card";
import { site } from "@/components/site/site-config";

type Item = {
  icon: typeof Phone;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
};

const items: Item[] = [
  {
    icon: Phone,
    label: "טלפון",
    value: site.phone,
    href: `tel:${site.phone}`,
  },
  {
    icon: MessageCircle,
    label: "וואטסאפ",
    value: "שליחת הודעה ישירה",
    href: `https://wa.me/${site.whatsapp}`,
    external: true,
  },
  {
    icon: Mail,
    label: "אימייל",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    icon: MapPin,
    label: "כתובת הקליניקה",
    value: site.address,
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address)}`,
    external: true,
  },
  {
    icon: Clock,
    label: "שעות פתיחה",
    value: site.hoursLabel,
  },
];

function ContactItem({ item, index }: { item: Item; index: number }) {
  const inner = (
    <div className="flex items-center gap-4 p-5">
      <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-gradient-to-br from-primary/15 to-primary/5 text-primary shadow-inner shadow-primary/10 transition-all duration-300 group-hover/spotlight:border-primary/40 group-hover/spotlight:from-primary/25 group-hover/spotlight:to-primary/10 group-hover/spotlight:shadow-md group-hover/spotlight:shadow-primary/20">
        <item.icon className="size-5" />
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-xs font-medium text-muted-foreground">
          {item.label}
        </p>
        <p className="truncate font-semibold leading-tight mt-1">
          {item.value}
        </p>
      </div>
    </div>
  );

  if (item.href) {
    return (
      <a
        href={item.href}
        target={item.external ? "_blank" : undefined}
        rel={item.external ? "noopener noreferrer" : undefined}
        className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-2xl"
        style={{ animationDelay: `${index * 60}ms` }}
      >
        <SpotlightCard>{inner}</SpotlightCard>
      </a>
    );
  }

  return (
    <div style={{ animationDelay: `${index * 60}ms` }}>
      <SpotlightCard>{inner}</SpotlightCard>
    </div>
  );
}

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-b border-border/60 py-20 md:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[260px] w-[80%] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(ellipse_at_center,color-mix(in_oklch,var(--primary)_18%,transparent)_0%,transparent_60%)] blur-2xl"
      />

      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <Reveal variant="up" className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            בואי נדבר
          </h2>
          <p className="mt-3 text-muted-foreground md:text-lg">
            דברי איתי עכשיו — אני חוזרת אליך בהקדם האפשרי.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-5 lg:gap-10">
          <ul className="space-y-3 lg:col-span-2">
            {items.map((item, index) => (
              <li key={item.label}>
                <Reveal variant="right" delay={index * 80}>
                  <ContactItem item={item} index={index} />
                </Reveal>
              </li>
            ))}
          </ul>

          <Reveal variant="left" delay={120} className="lg:col-span-3">
            <SpotlightCard>
              <div className="flex h-full flex-col gap-6 p-6 sm:p-8">
                <div>
                  <h3 className="text-xl font-semibold tracking-tight">
                    שלחי פנייה
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    מלאי פרטים ואחזור אלייך תוך זמן קצר.
                  </p>
                </div>
                <ContactForm />
              </div>
            </SpotlightCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
