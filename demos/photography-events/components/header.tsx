"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Magnetic } from "./magnetic";

const NAV = [
  { href: "#work", label: "עבודות" },
  { href: "#story", label: "סיפור אמיתי" },
  { href: "#deliverables", label: "מה תקבלו" },
  { href: "#about", label: "אני" },
  { href: "#inquiry", label: "פנייה" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-700 ${
        scrolled ? "py-3 bg-bg/85 backdrop-blur-md border-b border-hairline" : "py-6"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-10 flex items-center justify-between">
        <Link href="/" data-cursor-label="גלו" className="flex items-baseline gap-2.5 group">
          <span className="font-display text-3xl tracking-tight text-fg">
            <span className="italic">אגם</span>
          </span>
          <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-fg-subtle">
            Maya Agam · Studio
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1 text-sm">
          {NAV.map((n) => (
            <Magnetic key={n.href} strength={0.2}>
              <a
                href={n.href}
                className="px-4 py-2 text-fg-muted hover:text-fg transition-colors"
              >
                {n.label}
              </a>
            </Magnetic>
          ))}
        </nav>

        <Magnetic strength={0.3}>
          <a
            href="#inquiry"
            data-cursor-label="צרו קשר"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-fg text-bg text-sm font-medium hover:opacity-90 transition-opacity"
          >
            הזמינו אותי לאירוע
            <span aria-hidden>↗</span>
          </a>
        </Magnetic>
      </div>
    </header>
  );
}
