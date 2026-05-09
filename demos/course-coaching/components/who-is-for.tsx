import { Reveal } from "./reveal";
import { Check, X } from "lucide-react";

const FOR = [
  "יש לך עסק ראשוני שמכניס פחות מ-30K ל-3 חודשים",
  "אתה כבר עובד 10+ שעות ביום ולא רואה תוצאות פרופורציונליות",
  "אתה יודע שיש שוק, אבל לא יודע איך לסגור עסקאות יותר גדולות",
  "אתה מוכן להשקיע 90 יום במאמץ עקבי",
  "אתה רוצה מנטור שעבר את הדרך ולא קואצ׳ צעיר",
];

const NOT = [
  "אתה מחפש להתעשר מהר בלי עבודה",
  "אתה לא רוצה להוציא כסף על שיווק",
  "אתה מאמין שמסע יזמי הוא ״לבד מול השטח״",
  "אתה לא מוכן ליישם משימות שבועיות",
  "אתה כבר מרוויח מעל ₪500K בחודש",
];

export function WhoIsFor() {
  return (
    <section className="py-20 sm:py-28 bg-bg-2">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-conversion mb-3 font-bold">
            לפני שתמשיך
          </p>
          <h2 className="big-num text-3xl sm:text-5xl text-fg">
            התוכנית הזו <span className="text-conversion">לא</span> בשבילך
            <br />
            אם אתה לא...
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-5">
          <Reveal delay={100}>
            <div className="rounded-lg bg-bg border border-success/30 p-7">
              <h3 className="font-bold text-success mb-5 flex items-center gap-2">
                <Check className="size-5" />
                התוכנית בשבילך אם...
              </h3>
              <ul className="space-y-4">
                {FOR.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-fg leading-relaxed">
                    <Check className="size-5 mt-0.5 text-success shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="rounded-lg bg-bg border border-alarm/30 p-7">
              <h3 className="font-bold text-alarm mb-5 flex items-center gap-2">
                <X className="size-5" />
                התוכנית לא בשבילך אם...
              </h3>
              <ul className="space-y-4">
                {NOT.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-fg-muted leading-relaxed">
                    <X className="size-5 mt-0.5 text-alarm shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
