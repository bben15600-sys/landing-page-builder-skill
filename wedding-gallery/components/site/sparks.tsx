"use client";

import { useMemo } from "react";

type Spark = {
  top: string;
  left: string;
  size: number;
  delay: string;
  duration: string;
};

export function Sparks({ count = 12 }: { count?: number }) {
  const sparks = useMemo<Spark[]>(() => {
    const seedRand = (n: number) => {
      const x = Math.sin(n * 9999) * 10000;
      return x - Math.floor(x);
    };
    return Array.from({ length: count }, (_, i) => ({
      top: `${seedRand(i + 1) * 95}%`,
      left: `${seedRand(i + count + 1) * 95}%`,
      size: 3 + Math.floor(seedRand(i + 2 * count) * 6),
      delay: `${seedRand(i + 3 * count) * 5}s`,
      duration: `${5 + seedRand(i + 4 * count) * 5}s`,
    }));
  }, [count]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {sparks.map((s, i) => (
        <span
          key={i}
          className="spark"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            animationDelay: s.delay,
            animationDuration: s.duration,
          }}
        />
      ))}
    </div>
  );
}
