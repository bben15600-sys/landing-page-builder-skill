"use client";

import {
  Calendar,
  Camera,
  Coffee,
  Send,
  type LucideIcon,
} from "lucide-react";
import { siteConfig } from "./site-config";
import { Reveal } from "./reveal";

const ICONS: Record<string, LucideIcon> = {
  Coffee,
  Calendar,
  Camera,
  Send,
};

export function Process() {
  return (
    <section
      id="process"
      className="relative scroll-mt-24 py-24 sm:py-32 border-t border-border"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="text-center mb-16">
          <p className="text-xs tracking-[0.35em] uppercase text-accent mb-4">
            תהליך העבודה
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-tight">
            <span className="italic-display">מהפגישה</span> ועד הגלריה
          </h2>
        </Reveal>

        <div className="relative">
          <div className="absolute inset-y-0 right-[15px] sm:right-1/2 sm:translate-x-1/2 w-px bg-gradient-to-b from-transparent via-border to-transparent hidden sm:block" />

          <div className="grid sm:grid-cols-2 gap-8 sm:gap-x-16 sm:gap-y-14">
            {siteConfig.process.map((step, idx) => {
              const Icon = ICONS[step.icon] ?? Camera;
              const align = idx % 2 === 0 ? "sm:justify-self-end sm:text-left" : "sm:justify-self-start sm:text-right";
              return (
                <Reveal key={step.step} delay={idx * 100} className={align}>
                  <div className="flex sm:flex-col gap-5 sm:gap-4 max-w-md">
                    <div className="shrink-0 relative">
                      <div className="h-14 w-14 rounded-2xl bg-card border border-border-strong flex items-center justify-center text-accent">
                        <Icon size={22} />
                      </div>
                      <div className="absolute -top-2 -right-2 h-7 w-7 rounded-full bg-accent text-accent-foreground text-xs font-semibold flex items-center justify-center">
                        {step.step}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-display text-2xl leading-tight">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
