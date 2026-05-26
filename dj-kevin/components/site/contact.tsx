"use client";

import { useState, type FormEvent } from "react";
import { Check, Loader2, Mail, MapPin, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "./site-config";
import { Reveal } from "./reveal";
import { InstagramIcon, SoundCloudIcon, WhatsAppIcon } from "./brand-icons";

const TEMPLATES = [
  {
    id: "wedding",
    label: "חתונה",
    body: "היי קווין! מתחתנים בתאריך __ באולם __ (בערך __ אורחים). נשמח לדבר על די.ג'יי והפקה.",
  },
  {
    id: "corporate",
    label: "אירוע חברה",
    body: "היי, אנחנו מארגנים אירוע חברה ב-__ ל-__ אנשים. מחפשים די.ג'יי + הגברה.",
  },
  {
    id: "bar-mitzvah",
    label: "בר/בת מצווה",
    body: "היי, חוגגים בר/בת מצווה בתאריך __. נשמח להצעה הכוללת תאורה ואטרקציות.",
  },
  {
    id: "private",
    label: "מסיבה פרטית",
    body: "מתכננים מסיבה פרטית ב-__. נשמח לפרטים על די.ג'יי לערב.",
  },
  {
    id: "other",
    label: "אחר",
    body: "",
  },
];

export function Contact() {
  const [template, setTemplate] = useState(TEMPLATES[0].id);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    message: TEMPLATES[0].body,
  });
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">(
    "idle",
  );

  const setMessageFor = (id: string) => {
    setTemplate(id);
    const t = TEMPLATES.find((x) => x.id === id);
    if (t) setForm((f) => ({ ...f, message: t.body }));
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const data = new FormData();
      data.append("שם", form.name);
      data.append("טלפון", form.phone);
      data.append("תאריך האירוע", form.date);
      data.append("הודעה", form.message);
      data.append("_subject", `פנייה חדשה מהאתר — ${form.name}`);
      data.append("_template", "table");
      data.append("_captcha", "false");
      const res = await fetch(
        `https://formsubmit.co/ajax/${siteConfig.email}`,
        { method: "POST", body: data, headers: { Accept: "application/json" } },
      );
      if (!res.ok) throw new Error("send failed");
      setStatus("ok");
      setForm({ name: "", phone: "", date: "", message: "" });
    } catch {
      setStatus("error");
      const text = encodeURIComponent(
        `שלום קווין,\n${form.message}\n\nשם: ${form.name}\nטלפון: ${form.phone}\nתאריך: ${form.date}`,
      );
      window.open(
        `https://wa.me/${siteConfig.whatsapp}?text=${text}`,
        "_blank",
        "noopener",
      );
    }
  };

  return (
    <section
      id="contact"
      className="relative scroll-mt-24 py-24 sm:py-32 border-t border-border overflow-hidden"
    >
      <div
        className="absolute -bottom-1/4 left-1/2 -translate-x-1/2 h-[60vh] w-[60vh] rounded-full blur-[140px] opacity-40 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(193,59,255,0.35), transparent 70%)",
        }}
      />
      <div className="mx-auto max-w-7xl px-5 sm:px-8 relative">
        <Reveal className="text-center mb-14">
          <p className="text-xs tracking-[0.35em] uppercase text-accent mb-4">
            בואו נדבר
          </p>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl leading-tight">
            תפסו <span className="neon-gradient">תאריך</span>
          </h2>
          <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
            משאירים פרטים — חוזרים אליכם תוך 24 שעות עם זמינות והצעת מחיר מותאמת.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-5 gap-6">
          <Reveal className="lg:col-span-2 space-y-3">
            <ContactCard
              icon={<Phone size={18} />}
              title="טלפון"
              value={siteConfig.phone}
              href={`tel:${siteConfig.phone.replace(/-/g, "")}`}
            />
            <ContactCard
              icon={<WhatsAppIcon className="h-[18px] w-[18px]" />}
              title="וואטסאפ"
              value="לחיצה לפתיחה"
              href={`https://wa.me/${siteConfig.whatsapp}`}
              external
            />
            <ContactCard
              icon={<Mail size={18} />}
              title="אימייל"
              value={siteConfig.email}
              href={`mailto:${siteConfig.email}`}
            />
            <ContactCard
              icon={<InstagramIcon className="h-[18px] w-[18px]" />}
              title="אינסטגרם"
              value="@djkevin"
              href={siteConfig.instagram}
              external
            />
            <ContactCard
              icon={<SoundCloudIcon className="h-[18px] w-[18px]" />}
              title="SoundCloud"
              value="הסטים המלאים"
              href={siteConfig.soundcloud}
              external
            />
            <ContactCard
              icon={<MapPin size={18} />}
              title="פריסה"
              value={siteConfig.area}
            />
          </Reveal>

          <Reveal delay={120} className="lg:col-span-3">
            <form
              onSubmit={onSubmit}
              className="rounded-2xl bg-card border border-border p-6 sm:p-8 space-y-5"
            >
              <div className="flex flex-wrap gap-2">
                {TEMPLATES.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setMessageFor(t.id)}
                    className={cn(
                      "px-3 py-1.5 rounded-full text-xs border transition-colors",
                      template === t.id
                        ? "bg-accent text-accent-foreground border-accent"
                        : "border-border text-muted-foreground hover:border-accent hover:text-accent",
                    )}
                  >
                    {t.label}
                  </button>
                ))}
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <Field
                  label="שם מלא"
                  value={form.name}
                  onChange={(v) => setForm((f) => ({ ...f, name: v }))}
                  required
                />
                <Field
                  label="טלפון"
                  value={form.phone}
                  onChange={(v) => setForm((f) => ({ ...f, phone: v }))}
                  type="tel"
                  required
                />
              </div>
              <Field
                label="תאריך האירוע (משוער)"
                value={form.date}
                onChange={(v) => setForm((f) => ({ ...f, date: v }))}
              />
              <div>
                <label className="block text-sm text-muted-foreground mb-2">
                  פרטי האירוע
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, message: e.target.value }))
                  }
                  rows={5}
                  required
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:border-accent transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full sm:w-auto inline-flex h-12 items-center justify-center gap-2 rounded-full bg-accent px-8 text-sm font-semibold text-accent-foreground hover:bg-accent-strong transition-colors disabled:opacity-60 ring-glow"
              >
                {status === "loading" ? (
                  <Loader2 size={16} className="animate-spin" />
                ) : status === "ok" ? (
                  <>
                    <Check size={16} />
                    נשלח! נחזור אליכם
                  </>
                ) : (
                  "שלחו פנייה"
                )}
              </button>

              {status === "error" && (
                <p className="text-xs text-muted-foreground">
                  השליחה נכשלה — הפנינו אתכם לוואטסאפ.
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
  value,
  onChange,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm text-muted-foreground mb-2">
        {label}
        {required && <span className="text-accent"> *</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:border-accent transition-colors"
      />
    </div>
  );
}

function ContactCard({
  icon,
  title,
  value,
  href,
  external,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  href?: string;
  external?: boolean;
}) {
  const inner = (
    <div className="flex items-center gap-4 p-4 rounded-2xl bg-card border border-border hover:border-accent/50 transition-colors">
      <div className="h-10 w-10 rounded-xl bg-accent-soft text-accent flex items-center justify-center">
        {icon}
      </div>
      <div className="min-w-0">
        <div className="text-xs text-muted-foreground">{title}</div>
        <div className="text-sm font-medium truncate">{value}</div>
      </div>
    </div>
  );
  if (!href) return inner;
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      {inner}
    </a>
  );
}
