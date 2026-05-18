"use client";

import { useState, type FormEvent } from "react";
import { Check, Loader2, Mail, MapPin, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "./site-config";
import { Reveal } from "./reveal";
import { InstagramIcon, WhatsAppIcon } from "./brand-icons";

const TEMPLATES = [
  {
    id: "wedding",
    label: "חתונה",
    body: "היי שי! מתחתנים בתאריך __ באולם __. נשמח לדבר על אפשרויות צילום.",
  },
  {
    id: "bar-mitzvah",
    label: "בר/בת מצווה",
    body: "היי, אנחנו חוגגים בר/בת מצווה ב-__. נשמח להצעת מחיר.",
  },
  {
    id: "event",
    label: "אירוע פרטי",
    body: "אנחנו עורכים אירוע פרטי ב-__ ומחפשים צלם ל-__ שעות.",
  },
  {
    id: "studio",
    label: "צילום סטודיו",
    body: "מעוניינים בצילום סטודיו עבור __. אשמח לפרטים ולתיאום.",
  },
  {
    id: "magnets",
    label: "מגנטים",
    body: "מתעניינים בתוספת מגנטים בזמן אמת לאירוע ב-__.",
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
    email: "",
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
      data.append("name", form.name);
      data.append("phone", form.phone);
      data.append("email", form.email);
      data.append("message", form.message);
      data.append("_subject", `פנייה חדשה מהאתר — ${form.name}`);
      data.append("_template", "table");
      data.append("_captcha", "false");
      const res = await fetch(
        `https://formsubmit.co/ajax/${siteConfig.photographer.email}`,
        { method: "POST", body: data, headers: { Accept: "application/json" } },
      );
      if (!res.ok) throw new Error("send failed");
      setStatus("ok");
      setForm({ name: "", phone: "", email: "", message: "" });
    } catch {
      setStatus("error");
      const text = encodeURIComponent(
        `שלום ${siteConfig.photographer.name},\n${form.message}\n\nשם: ${form.name}\nטלפון: ${form.phone}`,
      );
      window.open(
        `https://wa.me/${siteConfig.photographer.whatsapp}?text=${text}`,
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
      <div className="mx-auto max-w-7xl px-5 sm:px-8 relative">
        <Reveal className="text-center mb-14">
          <p className="text-xs tracking-[0.35em] uppercase text-accent mb-4">
            בואו נדבר
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-tight">
            <span className="italic-display">תיאום</span> פגישה
          </h2>
          <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
            ממלאים פרטים — חוזרים אליכם תוך 24 שעות עם הצעת מחיר מותאמת.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-5 gap-6">
          <Reveal className="lg:col-span-2 space-y-3">
            <ContactCard
              icon={<Phone size={18} />}
              title="טלפון"
              value={siteConfig.photographer.phone}
              href={`tel:${siteConfig.photographer.phone.replace(/-/g, "")}`}
            />
            <ContactCard
              icon={<WhatsAppIcon className="h-[18px] w-[18px]" />}
              title="וואטסאפ"
              value="לחיצה לפתיחה"
              href={`https://wa.me/${siteConfig.photographer.whatsapp}`}
              external
            />
            <ContactCard
              icon={<Mail size={18} />}
              title="אימייל"
              value={siteConfig.photographer.email}
              href={`mailto:${siteConfig.photographer.email}`}
            />
            <ContactCard
              icon={<InstagramIcon className="h-[18px] w-[18px]" />}
              title="אינסטגרם"
              value={siteConfig.photographer.handle}
              href={siteConfig.photographer.instagram}
              external
            />
            <ContactCard
              icon={<MapPin size={18} />}
              title="פריסה"
              value={siteConfig.stats.coverage}
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
                label="אימייל"
                value={form.email}
                onChange={(v) => setForm((f) => ({ ...f, email: v }))}
                type="email"
              />
              <div>
                <label className="block text-sm text-muted-foreground mb-2">
                  הודעה
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
                className="w-full sm:w-auto inline-flex h-12 items-center justify-center gap-2 rounded-full bg-accent px-8 text-sm font-medium text-accent-foreground hover:bg-accent-strong transition-colors disabled:opacity-60 shadow-[0_0_30px_-10px_var(--accent-glow)]"
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
                  השליחה נכשלה — הופנינו אתכם לוואטסאפ.
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
    <div className="flex items-center gap-4 p-4 rounded-2xl bg-card border border-border hover:border-accent/50 transition-colors group">
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
