"use client";

import { useEffect, useRef, useState } from "react";

export function useReveal<T extends HTMLElement = HTMLDivElement>(opts?: {
  rootMargin?: string;
  threshold?: number;
  once?: boolean;
}) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(
    () => typeof IntersectionObserver === "undefined",
  );
  const once = opts?.once ?? true;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setVisible(true);
            if (once) io.unobserve(e.target);
          } else if (!once) {
            setVisible(false);
          }
        }
      },
      {
        rootMargin: opts?.rootMargin ?? "0px 0px -10% 0px",
        threshold: opts?.threshold ?? 0.15,
      },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [once, opts?.rootMargin, opts?.threshold]);

  return { ref, visible } as const;
}
