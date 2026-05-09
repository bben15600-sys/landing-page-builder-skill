import { KineticText } from "./kinetic-text";

export function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[700px] overflow-hidden">
      {/* Atmospheric photo bg */}
      <div className="absolute inset-0 photo-golden ken-burns" data-cursor="image" />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, transparent 30%, oklch(0.10 0 0 / 0.5) 100%)",
        }}
      />

      {/* Top text */}
      <div className="absolute top-28 sm:top-32 inset-x-0 z-10">
        <div className="mx-auto max-w-7xl px-5 sm:px-10 flex justify-between items-baseline">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-bg/70">
            Tel Aviv · Est. 2014
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-bg/70">
            01 / 06
          </span>
        </div>
      </div>

      {/* Hero name overlay */}
      <div className="relative z-10 h-full flex items-end pb-16 sm:pb-24">
        <div className="mx-auto max-w-7xl w-full px-5 sm:px-10">
          <h1 className="font-display text-bg leading-[0.85] tracking-tight" style={{ fontWeight: 300 }}>
            <span className="block text-7xl sm:text-9xl md:text-[12rem]">
              <KineticText>מאיה</KineticText>
            </span>
            <span className="block text-7xl sm:text-9xl md:text-[12rem] italic-display -mt-3 sm:-mt-6">
              <KineticText delay={150}>אגם.</KineticText>
            </span>
          </h1>

          <div className="mt-8 sm:mt-10 max-w-md">
            <p className="font-display italic text-xl sm:text-2xl text-bg/90 leading-relaxed">
              <KineticText delay={400}>
                צילום אירועים שלא עובר. חתונות, ברית, בר ובת מצווה — מתל אביב לכל הארץ.
              </KineticText>
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4 sm:gap-6 text-bg">
            <a
              href="#work"
              data-cursor-label="לעבודות"
              className="group inline-flex items-baseline gap-3 text-sm tracking-widest uppercase border-b border-bg/40 hover:border-bg pb-1 transition-colors"
            >
              <span>ראו עבודות אחרונות</span>
              <span className="transition-transform group-hover:translate-x-[-4px]">←</span>
            </a>
            <span className="text-bg/30">·</span>
            <a
              href="#inquiry"
              data-cursor-label="צרו קשר"
              className="group inline-flex items-baseline gap-3 text-sm tracking-widest uppercase border-b border-bg/40 hover:border-bg pb-1 transition-colors"
            >
              <span>הזמינו לאירוע</span>
              <span className="transition-transform group-hover:translate-x-[-4px]">←</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 inset-x-0 flex justify-center">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-bg/60 animate-pulse">
          גללו
        </span>
      </div>
    </section>
  );
}
