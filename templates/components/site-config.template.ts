export const site = {
  brand: "ELI ENERGY",
  brandFull: "ELI ENERGY SOLUTIONS",
  ownerName: "אלי דדון",
  tagline: "תכנון וביצוע עבודות חשמל בתעשייה",
  description:
    "ניסיון של 20 שנה בחשמל תעשייתי, פארמה וחדרים נקיים. תכנון, ביצוע ואחזקה בעמידה מלאה בכל התקנים — כולל מתח גבוה ודרישות כיבוי אש.",
  phone: "054-472-8292",
  whatsapp: "972544728292",
  email: "eli.energ@outlook.com",
  area: "תעשייה — כל הארץ",
  yearsExperience: 20,
  jobsCompleted: 250,
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://eli-energy.vercel.app",
} as const;

export const nav = [
  { href: "#services", label: "שירותים" },
  { href: "#about", label: "עלינו" },
  { href: "#testimonials", label: "ביקורות" },
  { href: "#process", label: "תהליך העבודה" },
  { href: "#contact", label: "צור קשר" },
] as const;
