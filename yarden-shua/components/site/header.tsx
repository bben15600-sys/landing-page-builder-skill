"use client";

import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { nav, site } from "./site-config";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/60 bg-background/85 backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-3">
          <span
            className="grid h-9 w-9 place-items-center rounded-full bg-foreground text-background font-bold text-sm tracking-tight"
            style={{
              background: "linear-gradient(135deg, var(--brand-black), oklch(0.30 0 0))",
            }}
          >
            <span className="text-[var(--brand-yellow)]">{site.shirtNumber}</span>
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-base font-extrabold tracking-tight">{site.brand}</span>
            <span className="text-[11px] font-medium text-muted-foreground -mt-0.5">
              {site.position} · #{site.shirtNumber}
            </span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-muted-foreground">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={`tel:${site.phone.replace(/[^0-9+]/g, "")}`}
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-semibold text-background transition-transform hover:scale-[1.03]"
        >
          <Phone className="h-4 w-4" />
          {site.phone}
        </a>

        <button
          aria-label="פתח תפריט"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="md:hidden grid h-10 w-10 place-items-center rounded-full border border-border bg-background"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur">
          <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-base font-medium hover:bg-muted"
              >
                {item.label}
              </a>
            ))}
            <a
              href={`tel:${site.phone.replace(/[^0-9+]/g, "")}`}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-4 py-3 text-sm font-semibold text-background"
            >
              <Phone className="h-4 w-4" />
              {site.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
