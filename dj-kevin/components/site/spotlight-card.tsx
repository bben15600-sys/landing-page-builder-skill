"use client";

import { useRef, useState, type MouseEvent } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
  glowSize?: number;
  as?: React.ElementType;
};

export function SpotlightCard({
  children,
  className,
  glowSize = 360,
  as: Tag = "div",
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <Tag
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => setPos(null)}
      className={cn(
        "relative overflow-hidden bg-card border border-border rounded-2xl transition-colors duration-300",
        "hover:border-accent/40",
        className,
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: pos ? 1 : 0,
          background: pos
            ? `radial-gradient(${glowSize}px circle at ${pos.x}px ${pos.y}px, var(--accent-soft), transparent 60%)`
            : undefined,
        }}
      />
      <div className="relative">{children}</div>
    </Tag>
  );
}
