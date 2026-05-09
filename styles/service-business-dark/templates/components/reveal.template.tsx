"use client";

import { cn } from "@/lib/utils";
import { useReveal } from "@/components/site/use-reveal";

type Variant = "up" | "in" | "scale" | "left" | "right";

const variantClass: Record<Variant, { hidden: string; visible: string }> = {
  up: {
    hidden: "opacity-0 translate-y-6",
    visible: "opacity-100 translate-y-0",
  },
  in: {
    hidden: "opacity-0",
    visible: "opacity-100",
  },
  scale: {
    hidden: "opacity-0 scale-[0.96]",
    visible: "opacity-100 scale-100",
  },
  left: {
    hidden: "opacity-0 -translate-x-6",
    visible: "opacity-100 translate-x-0",
  },
  right: {
    hidden: "opacity-0 translate-x-6",
    visible: "opacity-100 translate-x-0",
  },
};

export function Reveal({
  children,
  variant = "up",
  delay = 0,
  duration = 700,
  className,
}: {
  children: React.ReactNode;
  variant?: Variant;
  delay?: number;
  duration?: number;
  className?: string;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const states = variantClass[variant];

  return (
    <div
      ref={ref}
      className={cn(
        "motion-reduce:transition-none motion-reduce:transform-none transition-[opacity,transform] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-[opacity,transform]",
        visible ? states.visible : states.hidden,
        className,
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
