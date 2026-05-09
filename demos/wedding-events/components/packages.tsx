import { Reveal } from "./reveal";
import { Check } from "lucide-react";

const PACKAGES = [
  {
    name: "אינטימי",
    tagline: "עד 80 אורחים",
    price: "₪38,000",
    features: [
      "החצר הקטנה לטקס",
      "ארוחה כשרה רבנות (קייטרינג שותף)",
      "ספלי שמפניה לקבלת פנים",
      "נגן רקע + DJ ל-3 שעות",
      "אחראי על-המקום עד 23:00",
    ],
  },
  {
    name: "קלאסי",
    tagline: "100-180 אורחים",
    price: "₪68,000",
    featured: true,
    features: [
      "החצר הראשית + גן הוורדים",
      "ארוחה כשרה למהדרין (קייטרינג בלעדי)",
      "חופה מעוצבת בפרחי אורנמנטליים",
      "DJ או הרכב חי לכל הערב",
      "צילום סטילס 8 שעות",
      "צוות מארחים מלא + מנהל אירוע",
      "סגירת המקום עד 02:00",
    ],
  },
  {
    name: "יוקרה",
    tagline: "200+ אורחים",
    price: "מותאם אישית",
    features: [
      "כל החבילה הקלאסית, ועוד",
      "זיקוקים פנימיים ועיצוב תאורה",
      "מקהלת קבלת פנים + הרכב כלי-מיתר",
      "מצלמת אווירון + סטילס + וידאו",
      "ויינים ושמפניות מעולים",
      "Wedding Planner צמוד 6 חודשים מראש",
      "אופציה להזמנת הצימרים בעיט'",
    ],
  },
];

export function Packages() {
  return (
    <section id="packages" className="py-24 sm:py-32 bg-surface-2/40">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="text-center mb-14">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-fg-subtle mb-5">
            חבילות
          </p>
          <h2 className="font-display text-4xl sm:text-6xl text-fg leading-tight">
            שלוש דרכים
            <br />
            <span className="italic-display text-accent">לחגוג.</span>
          </h2>
          <p className="mt-5 text-fg-muted max-w-md mx-auto">
            כל חבילה כוללת מע״מ. אפשרות תשלום ב-3, 6 או 12 תשלומים.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-3 gap-4">
          {PACKAGES.map((p, i) => (
            <Reveal key={p.name} delay={i * 100}>
              <div
                className={`h-full rounded-sm p-8 flex flex-col bg-surface border transition-colors ${
                  p.featured
                    ? "border-accent shadow-[0_2px_24px_-4px_oklch(0.78_0.12_85_/_0.3)]"
                    : "hairline hover:border-border-strong"
                }`}
              >
                {p.featured && (
                  <span className="self-start mb-4 inline-block font-mono text-[10px] uppercase tracking-[0.25em] text-accent border border-accent rounded-full px-2.5 py-0.5">
                    הכי פופולרי
                  </span>
                )}
                <h3 className="font-display text-3xl text-fg">{p.name}</h3>
                <p className="text-sm text-fg-muted mt-1">{p.tagline}</p>

                <div className="mt-6 mb-7">
                  <span
                    className="font-display text-4xl text-fg"
                    dir={p.price.startsWith("₪") ? "ltr" : "rtl"}
                  >
                    {p.price}
                  </span>
                  {p.price.startsWith("₪") && (
                    <span className="text-fg-muted text-sm ms-2">החל מ־</span>
                  )}
                </div>

                <a
                  href="#inquiry"
                  className={`block text-center text-sm py-2.5 rounded-sm mb-7 font-medium transition-opacity ${
                    p.featured ? "bg-fg text-bg" : "bg-surface-2 text-fg border hairline"
                  }`}
                >
                  בקשו פגישת היכרות
                </a>

                <ul className="space-y-3 text-sm">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-fg-muted">
                      <Check className="size-4 mt-0.5 text-accent shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
