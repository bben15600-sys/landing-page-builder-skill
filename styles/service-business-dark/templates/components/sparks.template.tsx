type Spark = {
  left: string;
  top: string;
  size: number;
  delay: number;
  duration: number;
  tx: number;
  ty: number;
};

const sparks: Spark[] = [
  { left: "12%", top: "80%", size: 3, delay: 0, duration: 11, tx: 22, ty: -180 },
  { left: "26%", top: "68%", size: 2, delay: 2.4, duration: 12, tx: -18, ty: -160 },
  { left: "38%", top: "88%", size: 3, delay: 5.1, duration: 10.5, tx: 14, ty: -200 },
  { left: "52%", top: "60%", size: 2, delay: 1.2, duration: 11.8, tx: -22, ty: -150 },
  { left: "64%", top: "84%", size: 3, delay: 3.8, duration: 11.2, tx: 18, ty: -210 },
  { left: "78%", top: "70%", size: 2, delay: 6.5, duration: 12.4, tx: -16, ty: -175 },
  { left: "88%", top: "86%", size: 3, delay: 0.8, duration: 11.5, tx: 12, ty: -195 },
  { left: "20%", top: "55%", size: 2, delay: 4.6, duration: 12.8, tx: 8, ty: -155 },
];

export function Sparks() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {sparks.map((s, i) => (
        <span
          key={i}
          className="animate-spark absolute rounded-full"
          style={{
            left: s.left,
            top: s.top,
            width: `${s.size}px`,
            height: `${s.size}px`,
            background: "var(--brand-yellow)",
            boxShadow: `0 0 ${s.size * 3}px ${s.size}px color-mix(in oklch, var(--brand-yellow) 75%, transparent)`,
            ["--spark-delay" as string]: `${s.delay}s`,
            ["--spark-dur" as string]: `${s.duration}s`,
            ["--spark-tx" as string]: `${s.tx}px`,
            ["--spark-ty" as string]: `${s.ty}px`,
          }}
        />
      ))}
    </div>
  );
}
