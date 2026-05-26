"use client";

import { useState } from "react";
import { Pause, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "./site-config";
import { Reveal } from "./reveal";
import { Equalizer } from "./equalizer";
import { SoundCloudIcon } from "./brand-icons";

export function MixPlayer() {
  const mixes = siteConfig.mixes;
  const [activeId, setActiveId] = useState<string>(mixes[0].id);
  const [playing, setPlaying] = useState(false);

  const active = mixes.find((m) => m.id === activeId) ?? mixes[0];

  const select = (id: string) => {
    if (id === activeId) {
      setPlaying((p) => !p);
    } else {
      setActiveId(id);
      setPlaying(true);
    }
  };

  return (
    <section
      id="mixes"
      className="relative scroll-mt-24 py-24 sm:py-32 border-t border-border overflow-hidden"
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[60vh] w-[60vh] rounded-full blur-[140px] opacity-40 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255,59,212,0.3), transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-6xl px-5 sm:px-8 relative">
        <Reveal className="text-center mb-14">
          <p className="text-xs tracking-[0.35em] uppercase text-accent mb-4">
            תקשיבו
          </p>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl leading-tight">
            הסטים <span className="neon-gradient">האחרונים</span>
          </h2>
          <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
            טעימה מהאנרגיה. בחרו סט והאזינו — ככה נשמעת רחבה מלאה.
          </p>
        </Reveal>

        <Reveal>
          {/* featured player */}
          <div className="rounded-3xl border border-border bg-card overflow-hidden ring-glow">
            {active.soundcloudUrl ? (
              <iframe
                title={active.title}
                width="100%"
                height="166"
                allow="autoplay"
                className="block"
                src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(
                  active.soundcloudUrl,
                )}&color=%23c13bff&auto_play=false&hide_related=true&show_comments=false&show_user=true`}
              />
            ) : (
              <div className="flex items-center gap-5 p-6 sm:p-8">
                <button
                  type="button"
                  onClick={() => setPlaying((p) => !p)}
                  aria-label={playing ? "השהה" : "נגן"}
                  className="shrink-0 h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-accent text-accent-foreground flex items-center justify-center hover:bg-accent-strong transition-colors ring-glow"
                >
                  {playing ? (
                    <Pause size={28} className="fill-current" />
                  ) : (
                    <Play size={28} className="fill-current ms-1" />
                  )}
                </button>
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-display font-bold text-xl sm:text-2xl truncate">
                      {active.title}
                    </h3>
                    <span className="text-sm text-muted-foreground tabular-nums shrink-0">
                      {active.duration}
                    </span>
                  </div>
                  <p className="text-sm text-accent mt-1">{active.genre}</p>
                  <div className="h-10 sm:h-12 mt-3">
                    <Equalizer bars={40} paused={!playing} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </Reveal>

        {/* track list */}
        <div className="mt-6 space-y-2">
          {mixes.map((mix, i) => {
            const isActive = mix.id === activeId;
            const isPlaying = isActive && playing;
            return (
              <Reveal key={mix.id} delay={i * 60}>
                <button
                  type="button"
                  onClick={() => select(mix.id)}
                  className={cn(
                    "w-full text-right flex items-center gap-4 rounded-xl border px-4 py-3 sm:px-5 sm:py-4 transition-colors",
                    isActive
                      ? "border-accent/50 bg-accent-soft"
                      : "border-border bg-card/40 hover:border-border-strong",
                  )}
                >
                  <span
                    className={cn(
                      "shrink-0 h-10 w-10 rounded-full flex items-center justify-center transition-colors",
                      isActive
                        ? "bg-accent text-accent-foreground"
                        : "bg-background text-accent border border-border",
                    )}
                  >
                    {isPlaying ? (
                      <Pause size={16} className="fill-current" />
                    ) : (
                      <Play size={16} className="fill-current ms-0.5" />
                    )}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-semibold truncate">
                      {mix.title}
                    </span>
                    <span className="block text-xs text-muted-foreground truncate">
                      {mix.genre}
                    </span>
                  </span>
                  {isPlaying ? (
                    <span className="h-6 w-16 sm:w-24 hidden sm:block">
                      <Equalizer bars={14} />
                    </span>
                  ) : null}
                  <span className="text-sm text-muted-foreground tabular-nums shrink-0">
                    {mix.duration}
                  </span>
                </button>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-10 text-center">
          <a
            href={siteConfig.soundcloud}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border-strong px-6 py-3 text-sm font-medium hover:border-accent hover:text-accent transition-colors"
          >
            <SoundCloudIcon className="h-5 w-5" />
            לכל הסטים ב-SoundCloud
          </a>
        </Reveal>
      </div>
    </section>
  );
}
