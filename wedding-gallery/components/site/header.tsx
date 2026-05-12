"use client";

import { useEffect, useState } from "react";
import { Heart, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "./site-config";
import { useFavorites } from "./favorites-store";

const navItems = [
  { href: "#services", label: "שירותים" },
  { href: "#gallery", label: "גלריה" },
  { href: "#about", label: "על הצלם" },
  { href: "#packages", label: "השקעה" },
  { href: "#testimonials", label: "המלצות" },
  { href: "#contact", label: "תיאום" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { size } = useFavorites();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-40 transition-all duration-500",
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 flex items-center justify-between h-16 sm:h-18">
        <a
          href="#top"
          className="flex flex-col leading-none group"
          aria-label="ראשי"
        >
          <span className="font-display text-lg sm:text-xl tracking-wider group-hover:text-accent transition-colors">
            {siteConfig.brand.nameEn}
          </span>
          <span className="text-[10px] tracking-[0.35em] text-muted-foreground uppercase mt-0.5">
            {siteConfig.brand.suffix}
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-foreground/80 hover:text-foreground transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 right-0 left-0 h-px bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-right" />
            </a>
          ))}
          <a
            href="#favorites"
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-border hover:border-border-strong transition-colors text-sm"
          >
            <Heart size={14} className={cn(size > 0 && "fill-accent text-accent")} />
            <span>התמונות שלי</span>
            {size > 0 && (
              <span className="bg-accent text-background text-[10px] font-semibold rounded-full min-w-[18px] h-[18px] inline-flex items-center justify-center px-1">
                {size}
              </span>
            )}
          </a>
        </nav>

        <button
          type="button"
          className="md:hidden flex items-center gap-2 text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label="פתח תפריט"
          aria-expanded={open}
        >
          {size > 0 && (
            <span className="flex items-center gap-1 text-xs">
              <Heart size={14} className="fill-accent text-accent" />
              {size}
            </span>
          )}
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border animate-fade-in">
          <nav className="px-5 py-6 flex flex-col gap-5">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-base text-foreground/90 hover:text-accent transition-colors"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#favorites"
              className="text-base text-foreground/90 hover:text-accent transition-colors flex items-center gap-2"
              onClick={() => setOpen(false)}
            >
              <Heart
                size={16}
                className={cn(size > 0 && "fill-accent text-accent")}
              />
              התמונות שלי {size > 0 ? `(${size})` : ""}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
