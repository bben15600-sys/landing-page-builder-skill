import { Reveal } from "./reveal";

const QUOTES = [
  {
    quote:
      "החלפנו 3 צ׳אטבוטים שהיו לנו בעבר ב-Stratos יחיד. זמן הפיתוח ירד מ-3 חודשים ל-3 ימים.",
    author: "דניאל כהן",
    role: "VP Engineering",
    company: "Wix Studio",
  },
  {
    quote:
      "האינטגרציה עם Bit ו-Tranzila עבדה מהיום הראשון. אף ספק אחר לא נתן לנו את זה.",
    author: "נועה בן דוד",
    role: "CTO",
    company: "Pelephone Pay",
  },
  {
    quote:
      "ה-SDK הכי קריא שעבדתי איתו. הצוות התחיל לדחוף סוכנים ל-prod אחרי הדגמה של 30 דקות.",
    author: "אורן לוי",
    role: "Head of AI",
    company: "Riskified",
  },
  {
    quote:
      "המודל בעברית מנצח את GPT-4 בכל בדיקה שעשינו על שפה משפטית. פשוט עבד.",
    author: "מיכל גרינברג",
    role: "Product Lead",
    company: "Lawhive",
  },
  {
    quote:
      "Customer Success עונים בעברית, ב-WhatsApp, בתוך שעה. כשעבדנו עם OpenAI Enterprise חיכינו 3 ימים.",
    author: "רן אברהם",
    role: "Founder",
    company: "Tipalti Israel",
  },
  {
    quote:
      "התחלנו ב-Hobby tier, היום אנחנו על Enterprise. המעבר היה חלק. שום downtime, שום הגירה.",
    author: "יעל רוזן",
    role: "Engineering Manager",
    company: "Coralogix",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-28 border-t border-border/60">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent mb-4">
            לקוחות
          </p>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-fg">
            צוותי הנדסה ישראלים.
            <br />
            <span className="text-gradient-accent">אומרים את זה הכי טוב.</span>
          </h2>
        </Reveal>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
          {QUOTES.map((q, i) => (
            <Reveal key={q.author} delay={i * 50} className="break-inside-avoid mb-4">
              <figure className="rounded-2xl bg-surface border border-border p-6 hover:border-border-strong transition-colors">
                <blockquote className="text-fg leading-relaxed text-[15px]">
                  „{q.quote}"
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <div className="size-9 rounded-full bg-gradient-to-br from-accent to-accent-2 grid place-items-center text-white font-semibold text-sm">
                    {q.author[0]}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-fg">{q.author}</div>
                    <div className="text-xs text-fg-muted">
                      {q.role} · <span dir="ltr">{q.company}</span>
                    </div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
