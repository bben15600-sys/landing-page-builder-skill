"use client";

import { cn } from "@/lib/utils";
import { useReveal } from "./use-reveal";

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: React.ElementType;
}) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <Tag
      ref={ref}
      className={cn("reveal-on-scroll", className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
