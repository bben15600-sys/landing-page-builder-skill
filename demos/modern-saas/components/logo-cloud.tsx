const LOGOS = [
  "Wix", "Monday", "Fiverr", "AI21", "Lemonade", "Riskified",
  "Walkme", "Snyk", "Coralogix", "Aporia", "Tipalti", "JFrog",
];

export function LogoCloud() {
  const items = [...LOGOS, ...LOGOS];
  return (
    <section className="py-14 sm:py-16 border-y border-border/60 bg-bg/40">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="text-center text-xs uppercase tracking-[0.18em] text-fg-subtle mb-8 font-mono">
          סטארטאפים ישראלים בוחרים ב-Stratos
        </p>
        <div className="relative overflow-hidden marquee-pause-on-hover">
          <div className="absolute inset-y-0 start-0 w-24 bg-gradient-to-l from-transparent to-bg z-10 pointer-events-none" />
          <div className="absolute inset-y-0 end-0 w-24 bg-gradient-to-r from-transparent to-bg z-10 pointer-events-none" />
          <div className="marquee-track flex items-center gap-12 sm:gap-16 w-max">
            {items.map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="text-2xl sm:text-3xl font-semibold tracking-tight text-fg-subtle hover:text-fg transition-colors whitespace-nowrap"
                dir="ltr"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
