"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "#weddings", label: "חתונות אמת" },
  { href: "#packages", label: "חבילות" },
  { href: "#availability", label: "זמינות" },
  { href: "#inquiry", label: "פנייה" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled
          ? "backdrop-blur-md bg-bg/85 border-b hairline"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="font-display text-2xl tracking-tight text-fg">
            ענבר
          </span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-fg-subtle font-mono">
            Inbar Estate
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-sm text-fg-muted">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="hover:text-fg transition-colors">
              {n.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#inquiry"
            className="text-sm font-medium px-4 py-2 rounded-sm bg-fg text-bg hover:opacity-90 transition-opacity"
          >
            בדקו זמינות
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
        <div className="md:hidden border-t hairline bg-bg/95 backdrop-blur-md">
          <div className="px-5 py-4 flex flex-col gap-4">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="text-fg-muted hover:text-fg"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#inquiry"
              onClick={() => setOpen(false)}
              className="mt-2 text-center text-sm font-medium px-4 py-2.5 rounded-sm bg-fg text-bg"
            >
              בדקו זמינות
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
