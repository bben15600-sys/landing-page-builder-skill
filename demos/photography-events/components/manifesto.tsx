import { KineticText } from "./kinetic-text";
import { Reveal } from "./reveal";

export function Manifesto() {
  return (
    <section id="about" className="py-32 sm:py-48 relative overflow-hidden">
      <div className="mx-auto max-w-5xl px-5 sm:px-10">
        <Reveal>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-fg-subtle mb-12 sm:mb-20">
            אני · מאיה אגם · נולדה 1989
          </p>

          <div className="font-display text-3xl sm:text-5xl md:text-6xl leading-[1.15] tracking-tight">
            <p className="mb-10">
              <KineticText>
                אני לא מאמינה בתמונות מתוזמרות. אני מאמינה בלהיות במקום הנכון, ברגע
              </KineticText>
              {" "}
              <span className="italic-display">
                <KineticText delay={100}>שאי אפשר להזמין מראש.</KineticText>
              </span>
            </p>

            <p className="mb-10">
              <KineticText delay={300}>
                התחלתי ב-2014 כצלמת חתונות בגליל. היום אני מצלמת
              </KineticText>{" "}
              <span className="italic-display">
                <KineticText delay={400}>120 אירועים בשנה</KineticText>
              </span>
              ,{" "}
              <KineticText delay={500}>
                ברוב המקומות בארץ — מהגולן עד אילת.
              </KineticText>
            </p>

            <p>
              <KineticText delay={700}>
                לא משנה מה הסגנון שלכם —
              </KineticText>
              {" "}
              <span className="italic-display">
                <KineticText delay={800}>שקט או רועש, בוטיק או 400 איש</KineticText>
              </span>
              {" "}—{" "}
              <KineticText delay={900}>
                המטרה היא תמיד אותה: שתסתכלו על התמונות בעוד עשרים שנה ותרגישו את הרגע, לא רק תראו אותו.
              </KineticText>
            </p>
          </div>

          <div className="mt-16 sm:mt-24 grid grid-cols-3 gap-6 max-w-2xl">
            <Stat n="11" label="שנים בעסק" />
            <Stat n="847" label="אירועים מתועדים" />
            <Stat n="100%" label="מסירה בזמן" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div className="border-t border-fg/20 pt-5">
      <div className="font-display text-4xl sm:text-5xl tabular-nums" dir="ltr">
        {n}
      </div>
      <div className="text-xs font-mono uppercase tracking-wider text-fg-subtle mt-1">
        {label}
      </div>
    </div>
  );
}
