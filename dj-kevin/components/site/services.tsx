"use client";

import {
  Building2,
  Heart,
  Music,
  PartyPopper,
  Speaker,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "./site-config";
import { Reveal } from "./reveal";
import { SpotlightCard } from "./spotlight-card";

const ICONS: Record<string, LucideIcon> = {
  Heart,
  Building2,
  PartyPopper,
  Sparkles,
  Music,
  Speaker,
};

const SIZE_CLASSES: Record<string, string> = {
  sm: "md:col-span-2",
  md: "md:col-span-3",
  lg: "md:col-span-4 md:row-span-2",
};

export function Services() {
  return (
    <section
      id="services"
      className="relative scroll-mt-24 py-24 sm:py-32 border-t border-border"
    >
      <div className="absolute inset-0 bg-grid bg-grid-fade opacity-20 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 relative">
        <Reveal className="text-center mb-14 sm:mb-20">
          <p className="text-xs tracking-[0.35em] uppercase text-accent mb-4">
            מה שאני מביא
          </p>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl leading-tight">
            סטים לכל <span className="neon-gradient">אירוע</span>
          </h2>
          <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
            מהחתונה הגדולה ועד מסיבת בית אינטימית — בוחרים את הפורמט שמתאים לכם.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-8 gap-4 sm:gap-6 auto-rows-[minmax(180px,auto)]">
          {siteConfig.services.map((service, idx) => {
            const Icon = ICONS[service.icon] ?? Music;
            const isAccent = "accent" in service && service.accent === true;
            const label = "label" in service ? service.label : undefined;
            return (
              <Reveal
                key={service.id}
                delay={idx * 60}
                className={cn(SIZE_CLASSES[service.size] ?? "md:col-span-2")}
              >
                <SpotlightCard
                  className={cn(
                    "h-full p-6 sm:p-8 flex flex-col justify-between",
                    isAccent && "border-accent/50 bg-card ring-glow",
                  )}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={cn(
                          "h-12 w-12 rounded-xl flex items-center justify-center",
                          isAccent
                            ? "bg-accent text-accent-foreground"
                            : "bg-accent-soft text-accent",
                        )}
                      >
                        <Icon size={22} />
                      </div>
                      {label && (
                        <span className="text-[10px] tracking-[0.2em] uppercase text-accent border border-accent/40 rounded-full px-2 py-1">
                          {label}
                        </span>
                      )}
                    </div>
                    <h3
                      className={cn(
                        "font-display font-bold text-2xl sm:text-3xl leading-tight",
                        isAccent && "text-accent",
                      )}
                    >
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <a
                    href="#contact"
                    className="mt-6 inline-flex items-center gap-2 text-sm text-foreground/80 hover:text-accent transition-colors group"
                  >
                    תיאום
                    <span className="transition-transform group-hover:-translate-x-1">
                      ←
                    </span>
                  </a>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
