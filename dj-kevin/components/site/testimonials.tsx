"use client";

import { Quote, Star } from "lucide-react";
import { cn } from "@/lib/utils";
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
          <p className="text-xs tracking-[0.35em] uppercase text-accent mb-3">
            המלצות
          </p>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl leading-tight">
            מה אומרים <span className="neon-gradient">אחרי הלילה</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {siteConfig.testimonials.map((t, i) => {
            const featured = "featured" in t && t.featured === true;
            return (
              <Reveal key={t.name} delay={i * 100}>
                <figure
                  className={cn(
                    "h-full p-7 sm:p-8 border rounded-2xl transition-colors",
                    featured
                      ? "bg-card border-accent/50 ring-glow"
                      : "bg-card border-border hover:border-border-strong",
                  )}
                >
                  <Quote
                    size={24}
                    className="text-accent mb-5 -scale-x-100 opacity-80"
                  />
                  <blockquote className="text-lg sm:text-xl leading-relaxed text-foreground/95">
                    {t.quote}
                  </blockquote>
                  <div className="mt-6 pt-6 border-t border-border flex items-center justify-between">
                    <figcaption className="text-sm">
                      <div className="font-semibold">{t.name}</div>
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
