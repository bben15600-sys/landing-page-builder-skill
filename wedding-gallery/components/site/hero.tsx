"use client";

import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { siteConfig } from "./site-config";
import { TextReveal } from "./text-reveal";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-background">
      <div className="absolute inset-0">
        <Image
          src={siteConfig.event.heroImage}
          alt={`${siteConfig.couple.bride} ו${siteConfig.couple.groom}`}
          fill
          priority
          sizes="100vw"
          className="object-cover grayscale animate-fade-in-slow opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/95" />
        <div className="absolute inset-0 bg-gradient-to-l from-black/55 via-transparent to-black/30" />
      </div>

      <span
        aria-hidden
        className="absolute font-display italic-display text-[40vw] sm:text-[28vw] md:text-[22vw] leading-none text-white/[0.04] select-none pointer-events-none"
        style={{ bottom: "-6vw", left: "-3vw" }}
      >
        01
      </span>

      <div
        className="absolute top-20 sm:top-24 right-5 sm:right-12 text-white animate-fade-in"
        style={{ animationDelay: "300ms" }}
      >
        <p className="text-[10px] tracking-[0.4em] uppercase text-white/70">
          {siteConfig.event.date}
        </p>
      </div>

      <div
        className="absolute top-20 sm:top-24 left-5 sm:left-12 text-white animate-fade-in"
        style={{ animationDelay: "300ms" }}
      >
        <p className="text-[10px] tracking-[0.4em] uppercase text-white/70 text-left">
          Volume 01 · {new Date().getFullYear()}
        </p>
      </div>

      <div className="relative z-10 flex min-h-[100svh] flex-col justify-center px-5 sm:px-12 md:px-20">
        <div className="max-w-4xl">
          <p
            className="text-[11px] tracking-[0.5em] text-white/80 mb-6 sm:mb-8 animate-fade-in"
            style={{ animationDelay: "500ms" }}
          >
            ─── סיפור של חתונה
          </p>

          <h1 className="font-display text-white" dir="rtl">
            <TextReveal
              text={siteConfig.couple.bride}
              className="block text-7xl sm:text-8xl md:text-[10rem] lg:text-[12rem] tracking-tight"
              delay={400}
            />
            <span
              className="block italic-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl mr-8 sm:mr-16 md:mr-32 text-white/80 -mt-2 sm:-mt-4"
              aria-hidden
            >
              <TextReveal text="&" delay={900} staggerMs={0} />
            </span>
            <TextReveal
              text={siteConfig.couple.groom}
              className="block text-7xl sm:text-8xl md:text-[10rem] lg:text-[12rem] tracking-tight mr-12 sm:mr-24 md:mr-48 -mt-2 sm:-mt-4"
              delay={1100}
            />
          </h1>

          <div
            className="mt-8 sm:mt-12 max-w-md animate-fade-in-up"
            style={{ animationDelay: "1800ms" }}
          >
            <p className="text-base sm:text-lg text-white/80 italic-display leading-relaxed">
              {siteConfig.couple.storyShort}
            </p>
            <p className="mt-4 text-xs tracking-[0.3em] text-white/60">
              צילום ·{" "}
              <span className="text-white">{siteConfig.photographer.name}</span>
              <span className="text-white/40 mx-2">·</span>
              <span className="text-white/60">{siteConfig.photographer.nameEn}</span>
            </p>
          </div>

          <div
            className="mt-10 sm:mt-14 flex flex-wrap items-center gap-x-8 gap-y-4 animate-fade-in-up"
            style={{ animationDelay: "2100ms" }}
          >
            <a
              href="#gallery"
              data-cursor="hover"
              className="group inline-flex items-center gap-3 text-sm tracking-[0.2em] text-white border-b border-white pb-1 hover:gap-5 transition-all"
            >
              לגלריה
              <span className="text-base">←</span>
            </a>
            <a
              href="#contact"
              data-cursor="hover"
              className="group inline-flex items-center gap-3 text-sm tracking-[0.2em] text-white/70 hover:text-white border-b border-transparent hover:border-white pb-1 transition-all"
            >
              לתיאום צילום
              <span className="text-base">←</span>
            </a>
          </div>
        </div>

        <a
          href="#trust"
          aria-label="גלילה למטה"
          className="absolute bottom-8 sm:bottom-12 left-5 sm:left-12 flex flex-col items-center gap-3 text-white/70 hover:text-white transition-colors animate-fade-in"
          style={{ animationDelay: "2400ms" }}
        >
          <ArrowDown size={18} className="animate-bounce-slow" />
          <span className="text-[10px] tracking-[0.3em] uppercase [writing-mode:vertical-rl]">
            Scroll
          </span>
        </a>
      </div>
    </section>
  );
}
