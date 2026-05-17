export const site = {
  brand: "LIVNAT",
  brandFull: "LIVNAT — Skin & Soul",
  brandSuffix: "Skin & Soul",
  ownerName: "ליבנת אדרי",
  tagline: "בואי לחוות את השינוי בעורך",
  description:
    "22 שנות ניסיון בקוסמטיקה ועור — גישה שמחברת בין מקצוענות מדויקת לבין הקשבה עמוקה. אבחון, טיפול ופרוטוקול אישי לכל לקוחה, בקליניקה פרטית בחדרה.",
  phone: "050-566-7441",
  whatsapp: "972505667441",
  email: "livante71@gmail.com",
  area: "חדרה והסביבה",
  address: "נחומובסקי 8ב, חדרה",
  city: "חדרה",
  hoursLabel: "ראשון–חמישי 8:00–20:00",
  yearsExperience: 22,
  jobsCompleted: 1000,
  instagram: "https://www.instagram.com/edrilivnat_cosmetics",
  podcast:
    "https://open.spotify.com/show/4RyyKUFXbxnNNpQVFkcwVk?si=8HmN0S6RQF-Q-g3wJctHTw",
  podcastName: "כוח הבריאה",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://livnat-adari.vercel.app",
} as const;

export const nav = [
  { href: "#services", label: "טיפולים" },
  { href: "#about", label: "עליי" },
  { href: "#testimonials", label: "המלצות" },
  { href: "#process", label: "תהליך הטיפול" },
  { href: "#contact", label: "צרי קשר" },
] as const;
