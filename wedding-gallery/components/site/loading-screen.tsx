"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "./site-config";

export function LoadingScreen() {
  const [phase, setPhase] = useState<"in" | "out" | "done">("in");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("out"), 1600);
    const t2 = setTimeout(() => setPhase("done"), 2300);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      className="fixed inset-0 z-[300] bg-background flex flex-col items-center justify-center transition-opacity duration-700"
      style={{
        opacity: phase === "out" ? 0 : 1,
        pointerEvents: phase === "out" ? "none" : "auto",
      }}
      aria-hidden={phase === "out"}
    >
      <div className="text-center">
        <div className="font-display text-3xl sm:text-5xl tracking-[0.2em] animate-fade-in">
          {siteConfig.brand.nameEn}
        </div>
        <div
          className="mt-3 text-[10px] tracking-[0.35em] text-muted-foreground uppercase animate-fade-in"
          style={{ animationDelay: "200ms" }}
        >
          {siteConfig.brand.suffix}
        </div>
        <div
          className="mt-8 mx-auto h-px w-0 bg-foreground/60"
          style={{
            animation: "load-line 1.4s ease-out forwards",
          }}
        />
      </div>
      <style>{`
        @keyframes load-line {
          to { width: 120px; }
        }
      `}</style>
    </div>
  );
}
