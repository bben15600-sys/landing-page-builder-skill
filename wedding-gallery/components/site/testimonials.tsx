"use client";

import { Quote, Star } from "lucide-react";
import { siteConfig } from "./site-config";
import { Reveal } from "./reveal";

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative scroll-mt-24 py-24 sm:py-32 border-t border-border"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="text-center mb-14">
          <p className="text-xs tracking-[0.35em] uppercase text-muted-foreground mb-3">
            המלצות
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-tight">
            <span className="italic-display">מה</span> אומרים
            <br />
            <span className="text-muted-foreground italic-display">
              הזוגות שלנו
            </span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {siteConfig.testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <figure className="h-full p-7 sm:p-8 bg-card border border-border rounded-sm hover:border-border-strong transition-colors">
                <Quote
                  size={22}
                  className="text-accent mb-5 -scale-x-100 opacity-70"
                />
                <blockquote className="font-display italic text-lg sm:text-xl leading-relaxed text-foreground/95">
                  {t.quote}
                </blockquote>
                <div className="mt-6 pt-6 border-t border-border flex items-center justify-between">
                  <figcaption className="text-sm">
                    <div className="font-medium">{t.name}</div>
                    <div className="text-muted-foreground text-xs mt-0.5">
                      {t.role}
                    </div>
                  </figcaption>
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star
                        key={j}
                        size={12}
                        className="fill-accent text-accent"
                      />
                    ))}
                  </div>
                </div>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
