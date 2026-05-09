"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import { site } from "./site-config";
import { Reveal } from "./reveal";

const presets = [
  { label: "פנייה מקבוצה", body:
    "שלום ירדן,\nאני _____ מקבוצת _____.\nנשמח לבחון אופציה לחתימה — נא חזור אליי בנוחיות." },
  { label: "פנייה מסוכן", body:
    "שלום ירדן,\nאני _____, סוכן רשום ב-FIFA.\nאשמח לתאם שיחה ולברר זמינות לעונה הקרובה." },
  { label: "פנייה ממאמן/סקאוט", body:
    "שלום ירדן,\nאני _____, מאמן/סקאוט.\nרציתי להיפגש לצפייה באימון/משחק. נא תאריכים אפשריים." },
  { label: "פנייה תקשורתית / ראיון", body:
    "שלום ירדן,\nאני _____, מ-_____.\nנשמח לתאם ראיון בנושא _____. נא חזור אליי." },
  { label: "אחר — חופשי", body: "" },
];

export function Contact() {
  const [preset, setPreset] = useState<number>(0);
  const [name, setName] = useState("");
  const [from, setFrom] = useState("");
  const [phone, setPhone] = useState("");
  const [body, setBody] = useState(presets[0].body);
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "err">("idle");

  const onPreset = (i: number) => {
    setPreset(i);
    setBody(presets[i].body);
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const fd = new FormData();
      fd.append("name", name);
      fd.append("from", from);
      fd.append("phone", phone);
      fd.append("message", body);
      fd.append("_subject", `פנייה חדשה לירדן שועה — ${presets[preset].label}`);
      fd.append("_template", "table");
      fd.append("_captcha", "false");
      const res = await fetch(`https://formsubmit.co/ajax/${site.email}`, {
        method: "POST",
        body: fd,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error("formsubmit failed");
      setStatus("ok");
    } catch {
      // Fallback — open WhatsApp with the same body
      const wa = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
        `שם: ${name}\nשולח/ת: ${from}\nטלפון: ${phone}\n\n${body}`,
      )}`;
      window.open(wa, "_blank");
      setStatus("err");
    }
  };

  const cards = [
    {
      icon: Phone,
      label: "טלפון ישיר",
      value: site.phone,
      href: `tel:${site.phone.replace(/[^0-9+]/g, "")}`,
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "כתבו לי מייד",
      href: `https://wa.me/${site.whatsapp}`,
    },
    {
      icon: Mail,
      label: "אימייל",
      value: site.email,
      href: `mailto:${site.email}`,
    },
    {
      icon: MapPin,
      label: "אזור פעילות",
      value: site.area,
      href: undefined,
    },
  ];

  return (
    <section id="contact" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="flex flex-col items-start gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold text-muted-foreground">
              צור קשר
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
              לקבוצות, סוכנים, סקאוטים ותקשורת
            </h2>
            <p className="max-w-2xl text-muted-foreground">
              כל פנייה מקצועית מקבלת מענה תוך 24 שעות. בחרו תבנית בפנים, מלאו פרטים,
              ושלחו — או כתבו ב-WhatsApp.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-[1fr,1.2fr]">
          {/* Contact cards */}
          <ul className="grid gap-3">
            {cards.map((c, i) => (
              <Reveal as="li" key={c.label} delay={i * 80}>
                {c.href ? (
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener"
                    className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-4 transition-all hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-foreground text-[var(--brand-yellow)]">
                      <c.icon className="h-5 w-5" />
                    </span>
                    <div className="leading-tight">
                      <div className="text-xs font-semibold text-muted-foreground">{c.label}</div>
                      <div className="mt-0.5 text-base font-bold">{c.value}</div>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-foreground text-[var(--brand-yellow)]">
                      <c.icon className="h-5 w-5" />
                    </span>
                    <div className="leading-tight">
                      <div className="text-xs font-semibold text-muted-foreground">{c.label}</div>
                      <div className="mt-0.5 text-base font-bold">{c.value}</div>
                    </div>
                  </div>
                )}
              </Reveal>
            ))}
          </ul>

          {/* Form */}
          <Reveal>
            <form
              onSubmit={submit}
              className="rounded-3xl border border-border bg-card p-5 md:p-7 shadow-xl shadow-black/5"
            >
              <div className="flex flex-wrap gap-2">
                {presets.map((p, i) => (
                  <button
                    type="button"
                    key={p.label}
                    onClick={() => onPreset(i)}
                    className={
                      "rounded-full px-3 py-1.5 text-xs font-semibold transition-all border " +
                      (i === preset
                        ? "bg-foreground text-background border-foreground"
                        : "bg-background text-foreground border-border hover:bg-muted")
                    }
                  >
                    {p.label}
                  </button>
                ))}
              </div>

              <div className="mt-5 grid gap-3 md:grid-cols-2">
                <Field label="שם מלא">
                  <input
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[var(--brand-yellow)]"
                    placeholder="ישראל ישראלי"
                  />
                </Field>
                <Field label="מקבוצה / סוכנות / גוף">
                  <input
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}
                    className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[var(--brand-yellow)]"
                    placeholder="הקבוצה / הסוכנות"
                  />
                </Field>
                <Field label="טלפון">
                  <input
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    inputMode="tel"
                    className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[var(--brand-yellow)]"
                    placeholder="050-000-0000"
                  />
                </Field>
              </div>

              <Field label="הודעה" className="mt-3">
                <textarea
                  required
                  rows={6}
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  className="w-full resize-y rounded-lg border border-border bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[var(--brand-yellow)]"
                />
              </Field>

              <div className="mt-5 flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-3">
                <p className="text-xs text-muted-foreground">
                  נשלח ישירות לתיבת ה-WhatsApp / האימייל של ירדן.
                </p>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-bold text-background transition-transform hover:scale-[1.02] disabled:opacity-60"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" /> שולח…
                    </>
                  ) : status === "ok" ? (
                    <>
                      <CheckCircle2 className="h-4 w-4 text-[var(--brand-yellow)]" /> נשלח!
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" /> שלח פנייה
                    </>
                  )}
                </button>
              </div>

              {status === "err" && (
                <p className="mt-3 text-xs text-muted-foreground">
                  לא הצלחנו לשלוח באימייל — פתחנו WhatsApp במקום.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  children,
  className,
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={"block " + (className ?? "")}>
      <span className="mb-1.5 block text-xs font-semibold text-muted-foreground">
        {label}
      </span>
      {children}
    </label>
  );
}

