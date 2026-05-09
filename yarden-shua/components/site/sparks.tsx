"use client";

import { useMemo } from "react";

type SparkSpec = {
  left: string;
  top: string;
  size: number;
  duration: string;
  delay: string;
  tx: string;
  ty: string;
};

function buildSparks(): SparkSpec[] {
  // Deterministic seeded values to avoid SSR mismatch.
  const base = [
    { l: 8,  t: 78, s: 6,  d: 7.2, dl: 0.0, tx:  60, ty: -160 },
    { l: 22, t: 92, s: 5,  d: 6.4, dl: 1.4, tx: -40, ty: -180 },
    { l: 36, t: 70, s: 7,  d: 8.0, dl: 0.7, tx:  30, ty: -200 },
    { l: 48, t: 88, s: 4,  d: 6.0, dl: 2.1, tx: -55, ty: -150 },
    { l: 60, t: 74, s: 6,  d: 7.6, dl: 1.0, tx:  20, ty: -190 },
    { l: 72, t: 90, s: 5,  d: 6.8, dl: 2.6, tx: -30, ty: -170 },
    { l: 84, t: 76, s: 7,  d: 8.4, dl: 0.4, tx:  45, ty: -210 },
    { l: 92, t: 84, s: 4,  d: 6.2, dl: 1.8, tx: -25, ty: -160 },
  ];
  return base.map((b) => ({
    left: `${b.l}%`,
    top: `${b.t}%`,
    size: b.s,
    duration: `${b.d}s`,
    delay: `${b.dl}s`,
    tx: `${b.tx}px`,
    ty: `${b.ty}px`,
  }));
}

export function Sparks() {
  const sparks = useMemo(() => buildSparks(), []);
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {sparks.map((s, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-[var(--brand-yellow)] animate-spark"
          style={{
            left: s.left,
            top: s.top,
            width: s.size,
            height: s.size,
            ["--spark-dur" as string]: s.duration,
            ["--spark-delay" as string]: s.delay,
            ["--spark-tx" as string]: s.tx,
            ["--spark-ty" as string]: s.ty,
            boxShadow:
              "0 0 12px color-mix(in oklch, var(--brand-yellow) 70%, transparent)",
          }}
        />
      ))}
    </div>
  );
}
