import { Reveal } from "./reveal";
import {
  Layers, Zap, Shield, Workflow, Globe, MessageSquare,
} from "lucide-react";

const TILES = [
  {
    title: "סוכנים מולטי-שלביים",
    body: "תכננו פעולות מורכבות עם memory ארוך-טווח, שימוש בכלים ובדיקות מקבילות.",
    icon: Workflow,
    span: "md:col-span-2 md:row-span-2",
    visual: "graph",
  },
  {
    title: "תמיכה מלאה בעברית",
    body: "Tokenization מותאמת, Bidi-aware streaming, יצירה מובנית של תאריכים ומטבע.",
    icon: Globe,
    span: "md:col-span-2",
    visual: "stream",
  },
  {
    title: "פריסה בלחיצה",
    body: "Edge runtime ב-7 אזורים גלובליים. < 50ms p95.",
    icon: Zap,
    span: "md:col-span-2",
    visual: "ping",
  },
  {
    title: "אבטחה ארגונית",
    body: "SOC 2, ISO 27001, SSO, audit logs.",
    icon: Shield,
    span: "md:col-span-2",
    visual: "lock",
  },
  {
    title: "תזמורת כלים",
    body: "חברו את Stratos ל-API פנימיים, Bit, Cardcom, Tranzila.",
    icon: Layers,
    span: "md:col-span-2",
    visual: "grid",
  },
  {
    title: "WhatsApp + SMS native",
    body: "פתחו ערוצי שיחה ישירות ב-WhatsApp Business API ו-Twilio Israel.",
    icon: MessageSquare,
    span: "md:col-span-2",
    visual: "chat",
  },
];

export function Bento() {
  return (
    <section id="features" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent mb-4">
            תכולה
          </p>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-fg">
            כל מה שצריך כדי לשלוח סוכן
            <br />
            <span className="text-gradient-accent">לפרודקשן ביום אחד.</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-6 md:auto-rows-[200px] gap-3">
          {TILES.map((t, i) => (
            <Reveal key={t.title} delay={i * 60} className={t.span}>
              <BentoTile {...t} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function BentoTile({
  title,
  body,
  icon: Icon,
  visual,
}: {
  title: string;
  body: string;
  icon: typeof Layers;
  visual: string;
}) {
  return (
    <div className="group relative h-full rounded-2xl bg-surface border border-border overflow-hidden hover:border-border-strong transition-colors shadow-card">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-accent/5 via-transparent to-accent-2/5" />
      <div className="relative h-full p-5 sm:p-6 flex flex-col justify-between">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="inline-flex items-center justify-center size-9 rounded-lg bg-bg border border-border mb-4">
              <Icon className="size-4 text-accent" />
            </div>
            <h3 className="text-lg font-semibold text-fg leading-snug">
              {title}
            </h3>
            <p className="mt-2 text-sm text-fg-muted leading-relaxed max-w-xs">
              {body}
            </p>
          </div>
          {visual === "graph" && <GraphVisual />}
        </div>
        {visual === "stream" && <StreamVisual />}
        {visual === "ping" && <PingVisual />}
        {visual === "grid" && <GridVisual />}
      </div>
    </div>
  );
}

function GraphVisual() {
  return (
    <svg viewBox="0 0 120 80" className="w-24 h-16 text-accent/40 shrink-0">
      <path d="M10 60 L40 40 L70 50 L100 20" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="10" cy="60" r="3" fill="currentColor" />
      <circle cx="40" cy="40" r="3" fill="currentColor" />
      <circle cx="70" cy="50" r="3" fill="currentColor" />
      <circle cx="100" cy="20" r="3" fill="oklch(0.78 0.18 295)" />
    </svg>
  );
}
function StreamVisual() {
  return (
    <div className="mt-4 font-mono text-xs text-fg-subtle border border-border rounded-md bg-bg p-3 leading-relaxed" dir="ltr">
      <span className="text-accent-2">{"→"}</span> שלום, אני{" "}
      <span className="text-accent">{"|"}</span>
    </div>
  );
}
function PingVisual() {
  return (
    <div className="mt-4 grid grid-cols-7 gap-1.5">
      {Array.from({ length: 7 }).map((_, i) => (
        <div
          key={i}
          className="h-8 rounded-sm bg-accent/20"
          style={{
            opacity: 0.3 + (i / 14),
            animation: `pulse 1.4s ease-in-out ${i * 0.1}s infinite`,
          }}
        />
      ))}
      <style>{`@keyframes pulse { 50% { opacity: 1; } }`}</style>
    </div>
  );
}
function GridVisual() {
  return (
    <div className="mt-4 grid grid-cols-4 gap-1.5">
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="aspect-square rounded-md bg-bg border border-border grid place-items-center text-[9px] font-mono text-fg-subtle"
          dir="ltr"
        >
          {["Bit", "CC", "Trz", "Slk", "GH", "JIRA", "WA", "SMS"][i]}
        </div>
      ))}
    </div>
  );
}
