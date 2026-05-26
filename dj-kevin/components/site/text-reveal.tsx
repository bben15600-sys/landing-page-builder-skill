"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type Props = {
  text: string;
  as?: React.ElementType;
  className?: string;
  delay?: number;
  staggerMs?: number;
};

export function TextReveal({
  text,
  as: Tag = "span",
  className,
  delay = 0,
  staggerMs = 60,
}: Props) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const words = text.split(" ");

  return (
    <Tag ref={ref} className={cn("inline-block leading-[1.05]", className)}>
      {words.map((word, i) => (
        <span key={i} className="word-reveal-mask">
          <span
            style={{
              animationDelay: visible ? `${delay + i * staggerMs}ms` : "9999s",
              opacity: visible ? undefined : 0,
            }}
          >
            {word}
            {i < words.length - 1 && " "}
          </span>
        </span>
      ))}
    </Tag>
  );
}
