import { Reveal } from "./reveal";

const WORKS = [
  { id: "01", category: "חתונה", date: "אוקטובר 2025", couple: "ש & נ", venue: "אחוזת ענבר", photo: "photo-golden", aspect: "aspect-[4/5]" },
  { id: "02", category: "בת מצווה", date: "ספטמבר 2025", couple: "נועה ב.", venue: "תיאטרון יפו", photo: "photo-rose", aspect: "aspect-[3/4]" },
  { id: "03", category: "ברית", date: "אוגוסט 2025", couple: "משפחת לוי", venue: "כפר ברוך", photo: "photo-ivory", aspect: "aspect-[4/5]" },
  { id: "04", category: "חתונה", date: "יולי 2025", couple: "מ & י", venue: "Carmel Forest", photo: "photo-blue", aspect: "aspect-[3/4]" },
  { id: "05", category: "בר מצווה", date: "יוני 2025", couple: "אדם ש.", venue: "מצדה", photo: "photo-honey", aspect: "aspect-[4/5]" },
  { id: "06", category: "חתונה", date: "מאי 2025", couple: "ר & ת", venue: "החצר הסגולה", photo: "photo-sage", aspect: "aspect-[3/4]" },
];

export function WorkGrid() {
  return (
    <section id="work" className="py-24 sm:py-40">
      <div className="mx-auto max-w-7xl px-5 sm:px-10">
        <Reveal className="mb-14 sm:mb-20 flex items-end justify-between gap-8 flex-wrap">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-fg-subtle mb-5">
              עבודות נבחרות · 2025
            </p>
            <h2 className="font-display text-5xl sm:text-7xl md:text-8xl leading-[0.95] tracking-tight">
              <span>סיפורים שצילמתי </span>
              <span className="italic-display">השנה.</span>
            </h2>
          </div>
          <a
            href="#archive"
            data-cursor-label="לארכיון"
            className="group inline-flex items-center gap-3 text-sm uppercase tracking-widest border-b border-fg/30 hover:border-fg pb-1"
          >
            <span>כל הארכיון 2014—2025</span>
            <span className="transition-transform group-hover:translate-x-[-4px]">←</span>
          </a>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {WORKS.map((w, i) => (
            <Reveal key={w.id} delay={i * 80}>
              <article
                className={`group relative ${w.aspect} overflow-hidden`}
                data-cursor="image"
                data-cursor-label="צפו"
              >
                <div className={`absolute inset-0 ${w.photo} hover-distort`} />

                {/* Top meta */}
                <div className="absolute top-4 inset-x-4 flex items-center justify-between text-bg z-10">
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] opacity-0 group-hover:opacity-90 transition-opacity duration-500">
                    {w.id} / {String(WORKS.length).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] opacity-0 group-hover:opacity-90 transition-opacity duration-500 delay-75">
                    {w.date}
                  </span>
                </div>

                {/* Bottom meta */}
                <div className="absolute bottom-0 inset-x-0 p-5 sm:p-7 text-bg z-10">
                  <div
                    className="transition-all duration-500 transform translate-y-2 group-hover:translate-y-0"
                  >
                    <p className="font-mono text-[10px] uppercase tracking-[0.25em] opacity-0 group-hover:opacity-90 transition-opacity duration-500 mb-2">
                      {w.category} · {w.venue}
                    </p>
                    <h3 className="font-display text-3xl sm:text-4xl italic">
                      {w.couple}
                    </h3>
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-noir/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
