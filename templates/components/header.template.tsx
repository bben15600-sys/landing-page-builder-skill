"use client";

import { useEffect, useState } from "react";
import { Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { BrandMark } from "@/components/site/brand-mark";
import { site, nav } from "@/components/site/site-config";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-border/60 bg-background/85 shadow-sm shadow-primary/5 backdrop-blur"
          : "border-b border-transparent bg-background/50 backdrop-blur"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 md:px-6">
        <a href="#top" className="flex items-center gap-2.5">
          <BrandMark />
          <span className="flex flex-col leading-none">
            <span className="text-base font-bold tracking-tight md:text-lg">
              {site.brand}
            </span>
            <span className="text-[10px] font-bold tracking-[0.25em] text-accent-foreground/70 md:text-[11px]">
              SOLUTIONS
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 text-sm font-medium text-muted-foreground md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-1 py-0.5 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            render={<a href={`tel:${site.phone}`} />}
            className="h-10 gap-2 rounded-full px-4"
          >
            <Phone />
            <span className="hidden sm:inline">{site.phone}</span>
            <span className="sm:hidden">התקשרו</span>
          </Button>

          <Sheet>
            <SheetTrigger
              render={
                <Button
                  variant="outline"
                  size="icon"
                  className="h-10 w-10 rounded-full md:hidden"
                  aria-label="פתיחת תפריט"
                />
              }
            >
              <Menu />
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetHeader className="border-b">
                <SheetTitle className="flex items-center gap-2.5">
                  <BrandMark />
                  <span className="font-bold tracking-tight">{site.brand}</span>
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-3 pb-6">
                {nav.map((item) => (
                  <SheetClose
                    key={item.href}
                    render={
                      <a
                        href={item.href}
                        className="rounded-lg px-3 py-3 text-base font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-foreground"
                      />
                    }
                  >
                    {item.label}
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
