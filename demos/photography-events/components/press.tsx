const PRESS = [
  "Vogue Israel", "Calcalist Style", "Time Out TLV", "ELLE", "Globes Women",
  "Glamour", "Mako Living", "At Magazine", "Style Me Pretty",
];

export function Press() {
  const items = [...PRESS, ...PRESS];
  return (
    <section className="py-16 sm:py-20 border-y border-hairline overflow-hidden">
      <div className="mb-7 text-center">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-fg-subtle">
          פורסם ב־
        </p>
      </div>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 w-32 bg-gradient-to-l from-transparent to-bg z-10 pointer-events-none" />
        <div className="absolute inset-y-0 end-0 w-32 bg-gradient-to-r from-transparent to-bg z-10 pointer-events-none" />
        <div className="marquee flex items-center gap-12 sm:gap-16 w-max">
          {items.map((p, i) => (
            <span
              key={`${p}-${i}`}
              className="font-display text-2xl sm:text-3xl italic text-fg-subtle hover:text-fg transition-colors whitespace-nowrap"
              dir="ltr"
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
