"use client";

import { useEffect, useRef, useState } from "react";

export function AnimatedCounter({
  to,
  from = 0,
  duration = 1400,
  format = (n: number) => n.toLocaleString("he-IL"),
  suffix,
  prefix,
  className,
}: {
  to: number;
  from?: number;
  duration?: number;
  format?: (n: number) => string;
  suffix?: string;
  prefix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [n, setN] = useState(from);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      setN(to);
      return;
    }
    const obs = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (!e.isIntersecting || started.current) continue;
        started.current = true;
        const t0 = performance.now();
        const tick = (t: number) => {
          const p = Math.min(1, (t - t0) / duration);
          const eased = 1 - Math.pow(1 - p, 3);
          setN(Math.round(from + (to - from) * eased));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        obs.disconnect();
      }
    }, { threshold: 0.4 });
    obs.observe(node);
    return () => obs.disconnect();
  }, [to, from, duration]);

  return (
    <span ref={ref} className={className} dir="ltr">
      {prefix}
      {format(n)}
      {suffix}
    </span>
  );
}
