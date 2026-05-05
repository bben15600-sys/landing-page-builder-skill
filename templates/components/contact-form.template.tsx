"use client";

import { useRef, useState } from "react";
import { ImagePlus, Loader2, MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { site } from "@/components/site/site-config";

function Field({
  label,
  htmlFor,
  hint,
  error,
  children,
  className = "",
}: {
  label: string;
  htmlFor: string;
  hint?: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`space-y-1.5 ${className}`}>
      <label
        htmlFor={htmlFor}
        className="block text-sm font-medium text-foreground"
      >
        {label}
      </label>
      {children}
      {error ? (
        <p className="text-xs text-destructive">{error}</p>
      ) : hint ? (
        <p className="text-xs text-muted-foreground">{hint}</p>
      ) : null}
    </div>
  );
}

const PHONE_RE = /^[0-9+()\-\s]{7,}$/;
const MAX_IMAGE_BYTES = 8 * 1024 * 1024;

type TemplateKey =
  | "free"
  | "annual_inspection"
  | "panel_replacement"
  | "fault"
  | "project_quote"
  | "clean_room"
  | "maintenance";

const templates: { key: TemplateKey; label: string; body: string }[] = [
  { key: "free", label: "כתיבה חופשית", body: "" },
  {
    key: "annual_inspection",
    label: "בדיקה שנתית / אישור כיבוי אש",
    body:
      "שלום אלי,\nאני מעוניין/ת בבדיקה שנתית ואישור כיבוי אש.\nסוג המתקן: \nכתובת: \nתאריך נדרש: \nתודה.",
  },
  {
    key: "panel_replacement",
    label: "החלפת לוח חשמל / שדרוג תשתית",
    body:
      "שלום אלי,\nאנחנו צריכים החלפת לוח חשמל / שדרוג תשתית.\nסוג המבנה: \nגודל לוח קיים: \nלוחות זמנים אפשריים: \nתודה.",
  },
  {
    key: "fault",
    label: "תקלה / קצר במפעל",
    body:
      "שלום אלי,\nיש לנו תקלה דחופה.\nתיאור התקלה: \nכתובת: \nרמת דחיפות: \nתודה — נא לחזור בהקדם.",
  },
  {
    key: "project_quote",
    label: "פרוייקט חדש / הצעת מחיר",
    body:
      "שלום אלי,\nמתעניינים בפרוייקט חשמל חדש.\nתיאור קצר: \nהיקף משוער: \nלוח זמנים: \nתודה.",
  },
  {
    key: "clean_room",
    label: "חדר נקי / פארמה — ייעוץ או ביצוע",
    body:
      "שלום אלי,\nמעוניינים לדבר על חדר נקי / מתקן פארמה.\nסטטוס: תכנון / ביצוע / אחזקה\nדרגת ניקיון נדרשת: \nתודה.",
  },
  {
    key: "maintenance",
    label: "אחזקת קווי ייצור",
    body:
      "שלום אלי,\nאנחנו מחפשים שירותי אחזקה לקווי ייצור.\nסוג הקו: \nתדירות נדרשת: \nכתובת: \nתודה.",
  },
];

export function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState<TemplateKey>("free");
  const [message, setMessage] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState<"whatsapp" | "email" | null>(null);
  const [errors, setErrors] = useState<{
    name?: string;
    phone?: string;
    message?: string;
    image?: string;
  }>({});
  const fileInputRef = useRef<HTMLInputElement>(null);

  function applyTemplate(key: TemplateKey) {
    setTopic(key);
    const t = templates.find((x) => x.key === key);
    if (t && t.body) setMessage(t.body);
    if (key === "free" && message.length === 0) setMessage("");
  }

  function onImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      setErrors((p) => ({ ...p, image: "ניתן להעלות רק קובץ תמונה" }));
      return;
    }
    if (file.size > MAX_IMAGE_BYTES) {
      setErrors((p) => ({ ...p, image: "גודל מקסימלי: 8MB" }));
      return;
    }
    setErrors((p) => ({ ...p, image: undefined }));
    setImage(file);
    const reader = new FileReader();
    reader.onload = () => setImagePreview(reader.result as string);
    reader.readAsDataURL(file);
  }

  function clearImage() {
    setImage(null);
    setImagePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  function validate() {
    const next: typeof errors = {};
    if (name.trim().length < 2) next.name = "נא להזין שם מלא";
    if (!PHONE_RE.test(phone.trim())) next.phone = "מספר טלפון לא תקין";
    if (message.trim().length < 5) next.message = "נא לפרט יותר על הפנייה";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function buildText() {
    const topicLabel = templates.find((t) => t.key === topic)?.label ?? "";
    return [
      `שלום ${site.brand}, פנייה חדשה מהאתר:`,
      `שם: ${name}`,
      `טלפון: ${phone}`,
      email.trim() ? `אימייל: ${email}` : "",
      topic !== "free" ? `נושא: ${topicLabel}` : "",
      "",
      "פרטי הפנייה:",
      message,
    ]
      .filter(Boolean)
      .join("\n");
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!validate()) return;

    if (image) {
      setSubmitting(true);
      try {
        const fd = new FormData();
        fd.append("name", name);
        fd.append("phone", phone);
        if (email) fd.append("email", email);
        const topicLabel = templates.find((t) => t.key === topic)?.label ?? "";
        if (topicLabel) fd.append("topic", topicLabel);
        fd.append("message", message);
        fd.append("attachment", image);
        fd.append("_subject", `פנייה חדשה מהאתר${topicLabel ? ` — ${topicLabel}` : ""}`);
        fd.append("_template", "table");
        fd.append("_captcha", "false");

        const res = await fetch(
          "https://formsubmit.co/ajax/eli.energ@outlook.com",
          { method: "POST", body: fd },
        );
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        setDone("email");
      } catch (err) {
        const text = encodeURIComponent(buildText());
        window.open(`https://wa.me/${site.whatsapp}?text=${text}`, "_blank", "noopener,noreferrer");
      } finally {
        setSubmitting(false);
      }
      return;
    }

    const text = encodeURIComponent(buildText());
    window.open(
      `https://wa.me/${site.whatsapp}?text=${text}`,
      "_blank",
      "noopener,noreferrer",
    );
    setDone("whatsapp");
  }

  if (done === "email") {
    return (
      <div className="rounded-2xl border border-primary/30 bg-primary/10 p-6 text-center">
        <p className="text-base font-semibold">הפנייה נשלחה בהצלחה ✓</p>
        <p className="mt-2 text-sm text-muted-foreground">
          קיבלנו את הפרטים והתמונה. אלי יחזור אליכם בהקדם.
        </p>
        <button
          type="button"
          onClick={() => {
            setDone(null);
            setName("");
            setPhone("");
            setEmail("");
            setMessage("");
            setTopic("free");
            clearImage();
          }}
          className="mt-4 text-xs font-medium text-primary underline-offset-4 hover:underline"
        >
          לשליחת פנייה נוספת
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 gap-4 sm:grid-cols-2"
    >
      <Field label="שם מלא" htmlFor="name" error={errors.name}>
        <Input
          id="name"
          name="name"
          placeholder="ישראל ישראלי"
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="h-11"
        />
      </Field>
      <Field label="טלפון" htmlFor="phone" error={errors.phone}>
        <Input
          id="phone"
          name="phone"
          type="tel"
          placeholder="050-0000000"
          inputMode="tel"
          autoComplete="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          className="h-11"
        />
      </Field>
      <Field
        label="אימייל (לא חובה)"
        htmlFor="email"
        className="sm:col-span-2"
      >
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="name@example.com"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-11"
        />
      </Field>

      <Field label="נושא הפנייה" htmlFor="topic" className="sm:col-span-2">
        <select
          id="topic"
          name="topic"
          value={topic}
          onChange={(e) => applyTemplate(e.target.value as TemplateKey)}
          className="h-11 w-full rounded-lg border border-input bg-transparent px-3 text-base outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 md:text-sm"
        >
          {templates.map((t) => (
            <option key={t.key} value={t.key}>
              {t.label}
            </option>
          ))}
        </select>
      </Field>

      <Field
        label="פרטי הפנייה"
        htmlFor="message"
        hint={
          image
            ? "תישלח באימייל יחד עם התמונה ישירות לאלי"
            : "תישלח בוואטסאפ — תוכלו לערוך לפני שליחה"
        }
        error={errors.message}
        className="sm:col-span-2"
      >
        <Textarea
          id="message"
          name="message"
          placeholder="תארו בקצרה את העבודה / התקלה"
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </Field>

      <Field
        label="צירוף תמונה (לא חובה)"
        htmlFor="image"
        hint="מומלץ לצרף תמונה של התקלה / הלוח / האזור — עד 8MB"
        error={errors.image}
        className="sm:col-span-2"
      >
        {imagePreview ? (
          <div className="relative overflow-hidden rounded-lg border border-border">
            <img
              src={imagePreview}
              alt="תצוגה מקדימה"
              className="max-h-64 w-full object-contain"
            />
            <button
              type="button"
              onClick={clearImage}
              aria-label="הסרת תמונה"
              className="absolute top-2 left-2 inline-flex size-8 items-center justify-center rounded-full bg-background/90 text-foreground shadow-md transition-colors hover:bg-destructive hover:text-destructive-foreground"
            >
              <X className="size-4" />
            </button>
          </div>
        ) : (
          <label
            htmlFor="image"
            className="flex h-24 cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-border bg-card/30 px-4 text-sm text-muted-foreground transition-colors hover:border-primary/50 hover:bg-card/50 hover:text-foreground"
          >
            <ImagePlus className="size-5" />
            <span>לחצו או גררו לכאן תמונה</span>
          </label>
        )}
        <input
          ref={fileInputRef}
          id="image"
          name="image"
          type="file"
          accept="image/*"
          onChange={onImageChange}
          className="sr-only"
        />
      </Field>

      <div className="sm:col-span-2">
        <Button
          type="submit"
          disabled={submitting}
          className="h-12 w-full gap-2 rounded-xl text-base"
        >
          {submitting ? (
            <>
              <Loader2 className="animate-spin" /> שולח...
            </>
          ) : image ? (
            <>שליחה באימייל עם התמונה</>
          ) : (
            <>
              <MessageCircle /> שליחה בוואטסאפ
            </>
          )}
        </Button>
        <p className="mt-2 text-center text-xs text-muted-foreground">
          {image
            ? "התמונה תישלח באימייל לאלי יחד עם הפרטים"
            : "ללא תמונה — נפתחת שיחת WhatsApp עם הפרטים מוכנים לשליחה"}
        </p>
      </div>
    </form>
  );
}
