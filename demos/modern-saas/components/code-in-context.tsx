import { Reveal } from "./reveal";
import { Copy, Sparkles } from "lucide-react";

const CODE = `import { Stratos } from "@stratos/sdk";

const agent = await Stratos.create({
  model: "stratos-il-pro",
  language: "he",
  tools: [
    { type: "bit_payment", merchant: "shop_42" },
    { type: "tranzila_invoice" },
    { type: "whatsapp", phone: "+972..." },
  ],
});

const reply = await agent.run({
  user: "תזכיר לי את ההזמנה שלי משלשום",
});

console.log(reply.text);
// → "מצאתי את הזמנה #82471, סך 247.50 ₪..."`;

export function CodeInContext() {
  return (
    <section id="code" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent mb-4">
              SDK
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-fg leading-tight">
              <span className="text-gradient-accent">5 שורות קוד.</span>
              <br />
              סוכן בייצור.
            </h2>
            <p className="mt-5 text-fg-muted leading-relaxed">
              ה-SDK של Stratos מותקן ב-TypeScript, Python ו-Go.
              שילוב טבעי עם Vercel, Railway ו-Cloudflare Workers.
              דוגמאות לאתחול, streaming, RAG ו-tool use זמינות בתיעוד.
            </p>
            <div className="mt-7 flex items-center gap-3">
              <a
                href="#docs"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-fg text-bg text-sm font-medium hover:opacity-90"
              >
                <Sparkles className="size-4" />
                ראו דוגמאות
              </a>
              <a
                href="#github"
                className="text-sm text-fg-muted hover:text-fg"
                dir="ltr"
              >
                github.com/stratos-il/sdk
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-accent/15 to-accent-2/10 blur-3xl rounded-3xl" />
            <div className="relative rounded-xl border border-border bg-surface overflow-hidden shadow-card">
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-border bg-surface-2/40">
                <div className="flex items-center gap-1.5">
                  <span className="size-2.5 rounded-full bg-fg-subtle/30" />
                  <span className="size-2.5 rounded-full bg-fg-subtle/30" />
                  <span className="size-2.5 rounded-full bg-fg-subtle/30" />
                  <span className="ms-3 font-mono text-[11px] text-fg-subtle" dir="ltr">
                    agent.ts
                  </span>
                </div>
                <button className="text-fg-subtle hover:text-fg" aria-label="העתק">
                  <Copy className="size-4" />
                </button>
              </div>
              <pre dir="ltr" className="p-5 text-[13px] leading-relaxed font-mono text-fg-muted overflow-x-auto">
                <code>{highlight(CODE)}</code>
              </pre>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// Tiny syntax-color helper (no Shiki to keep deps small)
function highlight(code: string): React.ReactNode {
  const lines = code.split("\n");
  return lines.map((line, i) => (
    <span key={i} className="block">
      {colorize(line)}
    </span>
  ));
}

function colorize(line: string): React.ReactNode {
  const KW = /\b(import|from|const|await|new|console|log|true|false|null)\b/g;
  const STR = /("[^"]*"|'[^']*')/g;
  const COMMENT = /(\/\/.*$)/g;
  const NUM = /\b(\d+\.?\d*)\b/g;

  let parts: { text: string; cls?: string }[] = [{ text: line }];
  parts = split(parts, COMMENT, "text-fg-subtle italic");
  parts = split(parts, STR, "text-success");
  parts = split(parts, KW, "text-accent");
  parts = split(parts, NUM, "text-warning");
  return parts.map((p, idx) =>
    p.cls ? <span key={idx} className={p.cls}>{p.text}</span> : <span key={idx}>{p.text}</span>
  );
}

function split(
  parts: { text: string; cls?: string }[],
  regex: RegExp,
  cls: string
): { text: string; cls?: string }[] {
  const out: { text: string; cls?: string }[] = [];
  for (const p of parts) {
    if (p.cls) {
      out.push(p);
      continue;
    }
    let last = 0;
    const re = new RegExp(regex.source, regex.flags);
    let m: RegExpExecArray | null;
    while ((m = re.exec(p.text))) {
      if (m.index > last) out.push({ text: p.text.slice(last, m.index) });
      out.push({ text: m[0], cls });
      last = m.index + m[0].length;
    }
    if (last < p.text.length) out.push({ text: p.text.slice(last) });
  }
  return out;
}
