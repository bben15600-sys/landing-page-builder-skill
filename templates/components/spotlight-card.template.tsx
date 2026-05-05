"use client";

import { useRef } from "react";
import { cn } from "@/lib/utils";

export function SpotlightCard({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className={cn(
        "group/spotlight relative overflow-hidden rounded-2xl border border-border/60 bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10",
        // gradient border layer (visible on hover)
        "before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100 before:[background:radial-gradient(420px_circle_at_var(--mx,50%)_var(--my,50%),color-mix(in_oklch,var(--primary)_22%,transparent),transparent_70%)]",
        // top sheen
        "after:pointer-events-none after:absolute after:inset-x-0 after:top-0 after:h-px after:bg-gradient-to-l after:from-transparent after:via-primary/40 after:to-transparent after:opacity-0 after:transition-opacity after:duration-300 hover:after:opacity-100",
        className,
      )}
    >
      <div className="relative z-10">{children}</div>
    </div>
  );
}
