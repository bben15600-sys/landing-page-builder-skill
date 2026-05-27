import { ArrowDown, Disc3, Headphones } from "lucide-react";
import { siteConfig } from "./site-config";
import { Equalizer } from "./equalizer";

const SPARKS = Array.from({ length: 10 }).map((_, i) => ({
  left: `${(i * 97) % 100}%`,
  top: `${20 + ((i * 53) % 60)}%`,
  dur: `${5 + ((i * 31) % 5)}s`,
  delay: `${((i * 41) % 30) / 10}s`,
  tx: `${((i % 2 === 0 ? 1 : -1) * (20 + (i * 13) % 40))}px`,
}));

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] w-full overflow-hidden bg-background flex flex-col"
    >
      {/* layered neon background */}
      <div className="absolute inset-0 bg-grid bg-grid-fade opacity-50" />
      <div
        className="absolute -top-1/4 right-1/2 translate-x-1/2 h-[80vh] w-[80vh] rounded-full blur-[120px] animate-glow-pulse pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255,90,31,0.42), rgba(255,61,61,0.18) 45%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 h-[40vh] w-[40vh] rounded-full blur-[120px] opacity-60 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(41,197,255,0.35), transparent 70%)",
        }}
      />

      {/* floating sparks */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {SPARKS.map((s, i) => (
          <span
            key={i}
            className="animate-spark absolute h-1.5 w-1.5 rounded-full bg-accent-2"
            style={{
              left: s.left,
              top: s.top,
              ["--spark-dur" as string]: s.dur,
              ["--spark-delay" as string]: s.delay,
              ["--spark-tx" as string]: s.tx,
              boxShadow: "0 0 12px var(--accent-2)",
            }}
          />
        ))}
      </div>

      {/* spinning disc accent */}
      <Disc3
        size={220}
        strokeWidth={0.6}
        className="absolute top-24 left-4 sm:left-12 text-accent/25 animate-spin-disc pointer-events-none hidden sm:block"
      />

      {/* top meta row */}
      <div className="relative z-10 mx-auto max-w-7xl w-full px-5 sm:px-12 pt-24 sm:pt-28 flex items-center justify-between">
        <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent-soft px-3 py-1.5 text-[11px] tracking-[0.2em] text-accent">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 animate-pulse-ring" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          זמין לתאריכים {new Date().getFullYear() + 1}
        </span>
        <span className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground hidden sm:block">
          Open Format · {siteConfig.area}
        </span>
      </div>

      {/* center stage */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-5 sm:px-12 mx-auto max-w-7xl w-full">
        <p className="text-[11px] sm:text-xs tracking-[0.5em] text-accent mb-5 animate-fade-in">
          ─── {siteConfig.tagline}
        </p>

        <h1
          className="font-display font-black leading-[0.9] animate-fade-in-up"
          dir="ltr"
        >
          <span className="block text-6xl sm:text-8xl md:text-[8.5rem] lg:text-[10rem] neon-gradient neon-glow tracking-tight">
            DJ KEVIN
          </span>
          <span
            className="block text-5xl sm:text-7xl md:text-[6.5rem] lg:text-[7.5rem] font-extrabold tracking-[0.06em] mt-1"
            style={{
              color: "var(--accent-2)",
              textShadow: "0 0 22px rgba(41,197,255,0.5)",
            }}
          >
            OFORIA
          </span>
        </h1>

        <p
          className="mt-7 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed animate-fade-in-up"
          style={{ animationDelay: "200ms" }}
        >
          {siteConfig.description}
        </p>

        <div
          className="mt-9 flex flex-wrap items-center gap-4 animate-fade-in-up"
          style={{ animationDelay: "400ms" }}
        >
          <a
            href="#contact"
            className="inline-flex h-12 items-center gap-2 rounded-full bg-accent px-7 text-sm font-semibold text-accent-foreground hover:bg-accent-strong transition-colors ring-glow"
          >
            לתפוס תאריך
            <span>←</span>
          </a>
          <a
            href="#mixes"
            className="inline-flex h-12 items-center gap-2 rounded-full border border-border-strong px-7 text-sm font-medium text-foreground hover:border-accent hover:text-accent transition-colors"
          >
            <Headphones size={18} />
            להאזין לסטים
          </a>
        </div>
      </div>

      {/* equalizer floor */}
      <div className="relative z-10 h-24 sm:h-32 w-full px-2 pb-8 opacity-80">
        <Equalizer bars={64} />
      </div>

      <a
        href="#trust"
        aria-label="גלילה למטה"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
      >
        <ArrowDown size={18} className="animate-bounce-slow" />
      </a>
    </section>
  );
}
