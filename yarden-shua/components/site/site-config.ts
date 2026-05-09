export const site = {
  brand: "ירדן שועה",
  brandEn: "YARDEN SHUA",
  tagline: "שחקן כדורגל מקצועי — ליגת הבוגרות",
  position: "חלוץ",
  shirtNumber: 9,
  description:
    "שחקן כדורגל מקצועי בליגת הבוגרות. משלב מהירות, חוש שער ומשמעת אימונים. מחפש אתגרים חדשים בארץ ובחו\"ל ופתוח להצעות מקצועיות מקבוצות וסוכנים.",
  phone: "050-000-0000",
  whatsapp: "972500000000",
  email: "yarden.shua.football@gmail.com",
  area: "ישראל — פתוח להצעות בארץ ובחו\"ל",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://yarden-shua.vercel.app",
  social: {
    instagram: "https://instagram.com/",
    transfermarkt: "https://www.transfermarkt.com/",
  },
  stats: {
    age: 22,
    height: 182,
    weight: 76,
    foot: "ימין",
  },
} as const;

export const nav = [
  { href: "#about", label: "אודות" },
  { href: "#stats", label: "סטטיסטיקות" },
  { href: "#achievements", label: "הישגים" },
  { href: "#career", label: "נתיב קריירה" },
  { href: "#gallery", label: "גלריה" },
  { href: "#contact", label: "צור קשר" },
] as const;
