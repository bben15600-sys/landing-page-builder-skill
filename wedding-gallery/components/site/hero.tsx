"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { siteConfig } from "./site-config";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={siteConfig.event.heroImage}
          alt={`${siteConfig.couple.bride} ו${siteConfig.couple.groom}`}
          fill
          priority
          sizes="100vw"
          className="object-cover animate-fade-in-slow"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/45 to-black/80" />
        <div className="absolute inset-0 bg-grain opacity-50" />
      </div>

      <div className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center px-6 text-center text-white">
        <div className="animate-fade-in-up" style={{ animationDelay: "200ms" }}>
          <p className="text-xs tracking-[0.4em] text-white/70 mb-6 uppercase">
            {siteConfig.event.date}
          </p>
        </div>

        <div
          className="relative animate-fade-in-up"
          style={{ animationDelay: "400ms" }}
        >
          <div className="border border-white/30 px-10 py-10 sm:px-16 sm:py-12 md:px-24 md:py-16 max-w-[min(90vw,640px)]">
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight">
              {siteConfig.couple.bride}
              <span className="italic-display mx-3 text-white/80 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                &amp;
              </span>
              {siteConfig.couple.groom}
            </h1>
            <div className="mt-6 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-white/40" />
              <span className="text-sm tracking-[0.3em] text-white/70 uppercase">
                A Wedding Story
              </span>
              <span className="h-px w-10 bg-white/40" />
            </div>
          </div>
        </div>

        <p
          className="italic-display mt-10 text-base sm:text-lg text-white/85 animate-fade-in-up"
          style={{ animationDelay: "700ms" }}
        >
          צילום ·{" "}
          <span className="font-medium tracking-wide">
            {siteConfig.photographer.name}
          </span>
        </p>

        <p
          className="mt-3 max-w-md text-sm text-white/60 animate-fade-in-up"
          style={{ animationDelay: "850ms" }}
        >
          {siteConfig.couple.storyShort}
        </p>

        <a
          href="#search"
          aria-label="גלילה למטה"
          className="absolute bottom-10 flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors animate-fade-in"
          style={{ animationDelay: "1100ms" }}
        >
          <span className="text-[10px] tracking-[0.3em] uppercase">
            גלילה
          </span>
          <ChevronDown size={22} className="animate-bounce-slow" />
        </a>
      </div>
    </section>
  );
}
