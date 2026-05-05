"use client";

import { useRef } from "react";
import { cn } from "@/lib/utils";

export function Magnetic({
  children,
  className,
  strength = 0.25,
}: {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) * strength;
    const dy = (e.clientY - cy) * strength;
    el.style.transform = `translate(${dx}px, ${dy}px)`;
  }

  function reset() {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate(0, 0)";
  }

  return (
    <div
      onMouseMove={onMove}
      onMouseLeave={reset}
      className={cn("inline-block", className)}
    >
      <div
        ref={ref}
        className="transition-transform duration-200 ease-out will-change-transform"
      >
        {children}
      </div>
    </div>
  );
}
