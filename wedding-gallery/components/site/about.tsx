"use client";

import Image from "next/image";
import {
  Award,
  Camera,
  Clock,
  Heart,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { siteConfig } from "./site-config";
import { Reveal } from "./reveal";
import { SpotlightCard } from "./spotlight-card";

const ICONS: Record<string, LucideIcon> = {
  Award,
  Camera,
  Sparkles,
  ShieldCheck,
  Heart,
  Clock,
};

export function About() {
  return (
    <section
      id="about"
      className="relative scroll-mt-24 py-24 sm:py-32 border-t border-border overflow-hidden"
    >
      <div
        className="glow-orb"
        style={{
          top: "10%",
          left: "-15%",
          width: 420,
          height: 420,
          opacity: 0.5,
        }}
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <Reveal className="lg:col-span-5">
            <div className="sticky top-28 space-y-8">
              <div>
                <p className="text-xs tracking-[0.35em] uppercase text-accent mb-4">
                  על הצלם
                </p>
                <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-tight">
                  <span className="italic-display">מאחורי</span>
                  <br />
                  המצלמה
                </h2>
              </div>

              <div className="flex items-center gap-5 p-4 rounded-2xl border border-border bg-card/50">
                <div className="relative h-20 w-20 shrink-0 rounded-full overflow-hidden ring-2 ring-accent/40">
                  <Image
                    src={siteConfig.photographer.avatar}
                    alt={siteConfig.photographer.name}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>
                <div>
                  <div className="font-display text-xl">
                    {siteConfig.photographer.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {siteConfig.photographer.handle}
                  </div>
                </div>
              </div>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                {siteConfig.photographer.bio} עשר שנים של תיעוד אירועים בכל
                הארץ, מאות זוגות, אלפי רגעים שלא חוזרים. הסגנון שלי הוא
                עיתונאי-קולנועי: בלי להפריע, בלי לביים — להיות שם כשזה קורה.
              </p>

              <a
                href="#contact"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-accent px-7 text-sm font-medium text-accent-foreground hover:bg-accent-strong transition-colors"
              >
                בואו נדבר על הצילום שלכם
              </a>
            </div>
          </Reveal>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4 sm:gap-5">
            {siteConfig.aboutBullets.map((bullet, idx) => {
              const Icon = ICONS[bullet.icon] ?? Award;
              return (
                <Reveal key={bullet.title} delay={idx * 70}>
                  <SpotlightCard className="h-full p-6">
                    <div className="h-11 w-11 rounded-xl bg-accent-soft text-accent flex items-center justify-center mb-4">
                      <Icon size={20} />
                    </div>
                    <h3 className="font-display text-xl leading-snug">
                      {bullet.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {bullet.description}
                    </p>
                  </SpotlightCard>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
