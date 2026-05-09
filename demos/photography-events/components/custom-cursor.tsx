"use client";

import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const labelRef = useRef<HTMLDivElement | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    let mouseX = 0, mouseY = 0;
    let dotX = 0, dotY = 0;
    let labelX = 0, labelY = 0;
    let raf: number;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!dotRef.current) return;
      const dot = dotRef.current;
      const label = labelRef.current;

      // detect hoverable contexts
      const link = target.closest("a, button, [role='button'], input, textarea, select");
      const image = target.closest("[data-cursor='image'], img, picture, .photo-card");
      const labelText = target.closest<HTMLElement>("[data-cursor-label]")?.dataset.cursorLabel;

      dot.classList.toggle("is-hover-link", !!link && !image);
      dot.classList.toggle("is-hover-image", !!image);

      if (label) {
        if (labelText) {
          label.textContent = labelText;
          label.classList.add("is-visible");
        } else {
          label.classList.remove("is-visible");
        }
      }
    };

    const tick = () => {
      // ease the dot toward mouse
      dotX += (mouseX - dotX) * 0.18;
      dotY += (mouseY - dotY) * 0.18;
      labelX += (mouseX - labelX) * 0.12;
      labelY += (mouseY - labelY) * 0.12;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${dotX}px, ${dotY}px) translate(-50%, -50%)`;
      }
      if (labelRef.current) {
        labelRef.current.style.transform = `translate(${labelX}px, ${labelY}px) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!mounted) return null;

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden />
      <div ref={labelRef} className="cursor-label" aria-hidden />
    </>
  );
}
