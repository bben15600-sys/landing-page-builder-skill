"use client";

import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "./site-config";
import { Reveal } from "./reveal";

export function Packages() {
  return (
    <section
      id="packages"
      className="relative scroll-mt-24 py-24 sm:py-32 border-t border-border"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="text-center mb-14">
          <p className="text-xs tracking-[0.35em] uppercase text-accent mb-4">
            השקעה
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-tight">
            <span className="italic-display">החבילות</span> שלי
          </h2>
          <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
            המחירים הם נקודת התחלה. כל הצעה מותאמת לאופי האירוע ולמה שחשוב לכם.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-5 sm:gap-6">
          {siteConfig.packages.map((pkg, idx) => (
            <Reveal key={pkg.name} delay={idx * 80} className="h-full">
              <div
                className={cn(
                  "h-full rounded-2xl border p-7 sm:p-8 flex flex-col transition-colors",
                  "featured" in pkg && pkg.featured
                    ? "border-accent bg-card shadow-[0_0_50px_-15px_var(--accent-glow)]"
                    : "border-border bg-card/50 hover:border-border-strong",
                )}
              >
                {"featured" in pkg && pkg.featured && (
                  <div className="self-start text-[10px] tracking-[0.25em] uppercase text-accent border border-accent/40 rounded-full px-3 py-1 mb-4">
                    המומלץ
                  </div>
                )}
                <div className="font-display text-2xl">{pkg.name}</div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {pkg.hours}
                </div>
                <div
                  className={cn(
                    "mt-5 font-display text-4xl",
                    "featured" in pkg && pkg.featured && "gold-text",
                  )}
                >
                  {pkg.price}
                </div>

                <ul className="mt-7 space-y-3 flex-1">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm">
                      <Check
                        size={16}
                        className="shrink-0 mt-0.5 text-accent"
                      />
                      <span className="text-foreground/85">{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={cn(
                    "mt-8 inline-flex h-11 items-center justify-center rounded-full px-6 text-sm font-medium transition-colors",
                    "featured" in pkg && pkg.featured
                      ? "bg-accent text-accent-foreground hover:bg-accent-strong"
                      : "border border-border-strong text-foreground hover:border-accent hover:text-accent",
                  )}
                >
                  בקשת הצעה
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
