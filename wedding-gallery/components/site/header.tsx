"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "./site-config";

const navItems = [
  { hash: "featured", label: "סיפורים" },
  { hash: "services", label: "שירותים" },
  { hash: "about", label: "על הצלם" },
  { hash: "gallery", label: "גלריה" },
  { hash: "packages", label: "השקעה" },
  { hash: "contact", label: "תיאום" },
];

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const linkFor = (hash: string) => (isHome ? `#${hash}` : `/#${hash}`);
  const homeHref = isHome ? "#top" : "/";

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
        scrolled || !isHome
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 flex items-center justify-between h-16 sm:h-18">
        <a
          href={homeHref}
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
              key={item.hash}
              href={linkFor(item.hash)}
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
                key={item.hash}
                href={linkFor(item.hash)}
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
