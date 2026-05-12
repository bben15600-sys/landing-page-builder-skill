"use client";

import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const [enabled, setEnabled] = useState(false);
  const [variant, setVariant] = useState<"default" | "hover" | "view">(
    "default",
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    const isFine =
      window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!isFine) return;
    setEnabled(true);
    document.body.classList.add("custom-cursor");
    return () => document.body.classList.remove("custom-cursor");
  }, []);

  useEffect(() => {
    if (!enabled) return;
    let rafId = 0;
    let dotX = 0;
    let dotY = 0;
    let ringX = 0;
    let ringY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      dotX = e.clientX;
      dotY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dotX - 3}px, ${dotY - 3}px, 0)`;
      }
    };

    const tick = () => {
      ringX += (targetX - ringX) * 0.18;
      ringY += (targetY - ringY) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX - 16}px, ${ringY - 16}px, 0)`;
      }
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    const enterHover = (e: Event) => {
      const t = e.target as HTMLElement;
      if (t.closest("[data-cursor='view']")) setVariant("view");
      else if (
        t.closest(
          "a, button, [role='button'], input, textarea, [data-cursor='hover']",
        )
      )
        setVariant("hover");
    };
    const leaveHover = () => setVariant("default");

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", enterHover);
    document.addEventListener("mouseout", leaveHover);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", enterHover);
      document.removeEventListener("mouseout", leaveHover);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden
        className="fixed top-0 left-0 z-[200] h-1.5 w-1.5 rounded-full bg-white pointer-events-none mix-blend-difference"
      />
      <div
        ref={ringRef}
        aria-hidden
        className="fixed top-0 left-0 z-[200] pointer-events-none mix-blend-difference transition-[width,height,opacity,border-width] duration-300 ease-out"
        style={{
          width: variant === "view" ? 80 : variant === "hover" ? 56 : 32,
          height: variant === "view" ? 80 : variant === "hover" ? 56 : 32,
          marginTop: variant === "view" ? -24 : variant === "hover" ? -12 : 0,
          marginLeft: variant === "view" ? -24 : variant === "hover" ? -12 : 0,
          border: "1px solid white",
          borderRadius: "9999px",
        }}
      >
        {variant === "view" && (
          <span className="absolute inset-0 flex items-center justify-center text-[10px] tracking-widest text-white">
            VIEW
          </span>
        )}
      </div>
    </>
  );
}
