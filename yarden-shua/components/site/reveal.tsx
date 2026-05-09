"use client";

import { createElement } from "react";
import { cn } from "@/lib/utils";
import { useReveal } from "./use-reveal";

type Tag = "div" | "section" | "article" | "li" | "header" | "footer";

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: Tag;
};

export function Reveal({ children, className, delay = 0, as = "div" }: Props) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return createElement(
    as,
    {
      ref,
      className: cn(
        "transition-all duration-700 ease-out will-change-[transform,opacity]",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
        className,
      ),
      style: { transitionDelay: `${delay}ms` },
    },
    children,
  );
}
