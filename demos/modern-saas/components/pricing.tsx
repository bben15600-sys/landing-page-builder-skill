import { Check, Sparkles } from "lucide-react";
import { Reveal } from "./reveal";
import { cn } from "@/lib/utils";

type Plan = {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  featured?: boolean;
};

const PLANS: Plan[] = [
  {
    name: "Hobby",
    price: "חינם",
    description: "לפרויקטים אישיים ולפרסום ראשון.",
    features: [
      "1,000 הרצות לחודש",
      "סוכן יחיד",
      "אינטגרציה עם Bit",
      "Discord support",
    ],
    cta: "התחל עכשיו",
  },
  {
    name: "Pro",
    price: "₪249",
    description: "לסטארטאפים ולעסקים שצומחים.",
    features: [
      "100,000 הרצות לחודש",
      "סוכנים בלתי מוגבלים",
      "כל האינטגרציות (Bit, Cardcom, Tranzila)",
      "WhatsApp Business API",
      "Audit logs",
      "Email support תוך 4 שעות",
    ],
    cta: "נסו 14 יום בחינם",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "צור קשר",
    description: "ל-Banks, Insurance ועסקים מבוקרים.",
    features: [
      "ללא הגבלת הרצות",
      "SOC 2 + ISO 27001",
      "SSO + SAML",
      "Dedicated infrastructure",
      "SLA 99.99% עם פיצוי",
      "Customer Success ייעודי",
    ],
    cta: "דברו עם המכירות",
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent mb-4">
            תמחור
          </p>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-fg">
            תמחור פשוט. ללא הפתעות.
          </h2>
          <p className="mt-4 text-fg-muted">
            כל החבילות כוללות מע״מ. תשלום ב-Bit, כרטיס אשראי או הוראת קבע.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-3 gap-4">
          {PLANS.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 80}>
              <PlanCard plan={plan} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function PlanCard({ plan }: { plan: Plan }) {
  return (
    <div className={cn("h-full rounded-2xl p-px", plan.featured ? "glow-border" : "")}>
      <div
        className={cn(
          "h-full rounded-2xl p-7 flex flex-col",
          plan.featured
            ? "bg-surface"
            : "bg-surface border border-border"
        )}
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-fg">{plan.name}</h3>
          {plan.featured && (
            <span className="inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-wider text-accent bg-accent-soft px-2 py-0.5 rounded-full">
              <Sparkles className="size-3" />
              POPULAR
            </span>
          )}
        </div>
        <div className="flex items-baseline gap-1.5 mb-2">
          <span className="text-4xl font-semibold text-fg tabular-nums" dir="ltr">
            {plan.price}
          </span>
          {plan.price.startsWith("₪") && (
            <span className="text-fg-muted text-sm">/ חודש</span>
          )}
        </div>
        <p className="text-sm text-fg-muted mb-6">{plan.description}</p>

        <a
          href="#start"
          className={cn(
            "block text-center text-sm font-medium py-2.5 rounded-md mb-7 transition-opacity",
            plan.featured
              ? "bg-fg text-bg hover:opacity-90"
              : "bg-surface-2 text-fg border border-border hover:border-border-strong"
          )}
        >
          {plan.cta}
        </a>

        <ul className="space-y-3 text-sm">
          {plan.features.map((f) => (
            <li key={f} className="flex items-start gap-2.5 text-fg-muted">
              <Check className="size-4 mt-0.5 text-accent shrink-0" />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
