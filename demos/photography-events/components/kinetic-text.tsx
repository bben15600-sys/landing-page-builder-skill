"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export function KineticText({
  children,
  className,
  delay = 0,
}: {
  children: string;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      el.querySelectorAll(".kinetic-word").forEach((w) => w.classList.add("is-visible"));
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          const words = el.querySelectorAll<HTMLElement>(".kinetic-word");
          words.forEach((w, i) => {
            setTimeout(() => w.classList.add("is-visible"), delay + i * 70);
          });
          obs.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  const words = children.split(/(\s+)/);

  return (
    <span ref={ref} className={cn("inline-block", className)}>
      {words.map((w, i) =>
        /^\s+$/.test(w) ? (
          <span key={i}>{w}</span>
        ) : (
          <span key={i} className="kinetic-word">
            {w}
          </span>
        )
      )}
    </span>
  );
}
