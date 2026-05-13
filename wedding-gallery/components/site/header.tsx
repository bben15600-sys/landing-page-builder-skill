"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "./site-config";

const navItems = [
  { href: "#featured", label: "סיפורים" },
  { href: "#services", label: "שירותים" },
  { href: "#about", label: "על הצלם" },
  { href: "#gallery", label: "גלריה" },
  { href: "#packages", label: "השקעה" },
  { href: "#contact", label: "תיאום" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
          data-cursor="hover"
        >
          <span className="font-display text-lg sm:text-xl tracking-wider transition-colors">
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
              data-cursor="hover"
              className="text-sm text-foreground/80 hover:text-foreground transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 right-0 left-0 h-px bg-foreground scale-x-0 group-hover:scale-x-100 transition-transform origin-right" />
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="md:hidden text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label="פתח תפריט"
          aria-expanded={open}
        >
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
                className="text-base text-foreground/90 hover:text-foreground transition-colors"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
