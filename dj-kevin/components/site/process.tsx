"use client";

import {
  Disc3,
  ListMusic,
  MessageCircle,
  Speaker,
  type LucideIcon,
} from "lucide-react";
import { siteConfig } from "./site-config";
import { Reveal } from "./reveal";

const ICONS: Record<string, LucideIcon> = {
  MessageCircle,
  ListMusic,
  Speaker,
  Disc3,
};

export function Process() {
  return (
    <section
      id="process"
      className="relative scroll-mt-24 py-24 sm:py-32 border-t border-border"
    >
      <div className="absolute inset-0 bg-grid bg-grid-fade opacity-20 pointer-events-none" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8 relative">
        <Reveal className="text-center mb-14 sm:mb-20">
          <p className="text-xs tracking-[0.35em] uppercase text-accent mb-4">
            איך זה עובד
          </p>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl leading-tight">
            מהשיחה ועד <span className="neon-gradient">הרחבה</span>
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {siteConfig.process.map((step, i) => {
            const Icon = ICONS[step.icon] ?? Disc3;
            return (
              <Reveal key={step.step} delay={i * 80}>
                <div className="relative h-full rounded-2xl border border-border bg-card/50 p-7 hover:border-accent/40 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="h-12 w-12 rounded-xl bg-accent-soft text-accent flex items-center justify-center">
                      <Icon size={22} />
                    </div>
                    <span className="font-display font-black text-5xl text-accent/15 leading-none">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display font-bold text-xl">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
