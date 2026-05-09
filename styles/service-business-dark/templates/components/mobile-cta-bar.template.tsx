"use client";

import { useEffect, useState } from "react";
import { MessageCircle, Phone } from "lucide-react";
import { site } from "@/components/site/site-config";

export function MobileCtaBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > window.innerHeight * 0.6);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-border/60 bg-background/95 backdrop-blur transition-transform duration-300 md:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0)" }}
    >
      <div className="grid grid-cols-2 gap-2 p-2">
        <a
          href={`tel:${site.phone}`}
          className="flex h-12 items-center justify-center gap-2 rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/25 transition-shadow active:translate-y-px"
        >
          <Phone className="size-5" />
          <span className="font-semibold">התקשרו</span>
        </a>
        <a
          href={`https://wa.me/${site.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 items-center justify-center gap-2 rounded-xl border border-border bg-background text-foreground shadow-sm transition-colors hover:bg-accent active:translate-y-px"
        >
          <MessageCircle className="size-5" />
          <span className="font-semibold">וואטסאפ</span>
        </a>
      </div>
    </div>
  );
}
