"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "#features", label: "תכולה" },
  { href: "#code", label: "API" },
  { href: "#pricing", label: "תמחור" },
  { href: "#testimonials", label: "לקוחות" },
  { href: "#changelog", label: "מה חדש" },
];

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
        "sticky top-0 z-50 transition-all",
        scrolled
          ? "backdrop-blur-xl bg-bg/70 border-b border-border"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold tracking-tight text-fg"
        >
          <span className="grid place-items-center size-7 rounded-lg bg-gradient-to-br from-accent to-accent-2 text-white shadow-glow">
            <Sparkles className="size-4" strokeWidth={2.5} />
          </span>
          <span className="text-[15px]">Stratos</span>
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-sm text-fg-muted">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-fg transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#login"
            className="text-sm text-fg-muted hover:text-fg transition-colors"
          >
            כניסה
          </a>
          <a
            href="#start"
            className="inline-flex items-center gap-1.5 text-sm font-medium px-3.5 py-1.5 rounded-md bg-fg text-bg hover:opacity-90 transition-opacity"
          >
            התחל בחינם
          </a>
        </div>

        <button
          aria-label="פתח תפריט"
          className="md:hidden p-2 -me-2 text-fg"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-bg/95 backdrop-blur-xl">
          <div className="px-5 py-4 flex flex-col gap-4">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-fg-muted hover:text-fg"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#start"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-1.5 text-sm font-medium px-3.5 py-2 rounded-md bg-fg text-bg"
            >
              התחל בחינם
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
