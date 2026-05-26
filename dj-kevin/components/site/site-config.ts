const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const siteConfig = {
  brand: {
    nameEn: "DJ KEVIN",
    nameHe: "די.ג'יי קווין",
    suffix: "WEDDINGS & EVENTS",
  },
  ownerName: "קווין",
  tagline: "די.ג'יי לחתונות ואירועים",
  description:
    "די.ג'יי קווין — מוזיקה, אנרגיה והפקה לחתונות ואירועים גדולים. קריאת קהל מדויקת, מעברים חלקים בין סגנונות, ומערכת הגברה ותאורה שמרימה כל רחבה. אצלי הרחבה לא מתרוקנת.",
  // ⚠️ פרטי קשר זמניים — להחליף בפרטים האמיתיים של קווין לפני העלייה לאוויר.
  phone: "050-000-0000",
  whatsapp: "972500000000",
  email: "booking@djkevin.co.il",
  instagram: "https://instagram.com/djkevin",
  soundcloud: "https://soundcloud.com/djkevin",
  area: "כל הארץ",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://dj-kevin.vercel.app",

  stats: {
    events: 500,
    yearsExperience: 10,
    hoursOnDecks: 4000,
    rating: 5,
    coverage: "כל הארץ",
  },

  trustBadges: [
    { icon: "Disc3", label: "Open Format — כל הסגנונות" },
    { icon: "Speaker", label: "הגברה ותאורה מקצועית" },
    { icon: "CalendarCheck", label: "תיאום מלא עד הרגע האחרון" },
    { icon: "MapPin", label: "כל הארץ" },
  ],

  // נגן הסטים — מילוי soundcloudUrl יציג נגן מוטמע אמיתי במקום ה-CTA.
  mixes: [
    {
      id: "wedding-peak",
      title: "Wedding Peak Hour",
      genre: "Mainstream · Dance · ישראלי",
      duration: "62:00",
      soundcloudUrl: "",
    },
    {
      id: "open-format",
      title: "Open Format Set",
      genre: "Hip-Hop · House · Pop",
      duration: "48:00",
      soundcloudUrl: "",
    },
    {
      id: "afterparty",
      title: "Afterparty / Tech House",
      genre: "House · Tech House",
      duration: "55:00",
      soundcloudUrl: "",
    },
    {
      id: "chill-lounge",
      title: "Reception & Lounge",
      genre: "Lounge · Deep · Acoustic",
      duration: "40:00",
      soundcloudUrl: "",
    },
  ],

  marquee: [
    "DJ KEVIN",
    "OPEN FORMAT",
    "חתונות · אירועים",
    "PEAK HOUR ENERGY",
    "רחבה מלאה",
    "BOOK YOUR DATE",
  ],

  services: [
    {
      id: "weddings",
      title: "חתונות",
      description:
        "מקבלת הפנים ועד הסט האחרון של הלילה. קריאת קהל מדויקת, מעברים חלקים, ורחבה שלא מתרוקנת. ליווי מוזיקלי מלא לכל רגע מהיום.",
      icon: "Heart",
      size: "lg",
      accent: true,
      label: "התמחות",
    },
    {
      id: "corporate",
      title: "אירועי חברה",
      description:
        "ערבי גאלה, השקות ומסיבות סוף שנה. סאונד נקי ואווירה שמתאימה למותג שלכם.",
      icon: "Building2",
      size: "md",
    },
    {
      id: "bar-mitzvah",
      title: "בר / בת מצווה",
      description:
        "אנרגיה צעירה, פלייליסט מדויק לגיל, ואטרקציות רחבה שמרימות את כל האולם.",
      icon: "PartyPopper",
      size: "md",
      label: "להיט",
    },
    {
      id: "private",
      title: "מסיבות פרטיות",
      description: "ימי הולדת, מסיבות גן, אירוסין ואירועי בית.",
      icon: "Sparkles",
      size: "sm",
    },
    {
      id: "lounge",
      title: "ערבי לאונג'",
      description: "סטים רגועים לקבלות פנים, קוקטיילים וערבי גיבוש.",
      icon: "Music",
      size: "sm",
    },
    {
      id: "production",
      title: "הגברה · תאורה · אפקטים",
      description:
        "מערכת סאונד מקצועית, תאורת רחבה, עשן כבד וזיקוקים קרים — הפקה מלאה לכל גודל אירוע.",
      icon: "Speaker",
      size: "md",
      label: "הפקה מלאה",
    },
  ],

  aboutBullets: [
    {
      icon: "Disc3",
      title: "Open Format אמיתי",
      description:
        "ישראלי, מזרחי, פופ, היפ-הופ, האוס ושנות ה-90 — בלי לעצור את הרחבה אף פעם.",
    },
    {
      icon: "Headphones",
      title: "קריאת קהל",
      description:
        "מרגיש את הרחבה בזמן אמת ויודע בדיוק מתי להעלות הילוך ומתי להוריד.",
    },
    {
      icon: "Speaker",
      title: "ציוד מקצועי",
      description:
        "Pioneer CDJ + מיקסר DJM, מערכת הגברה מדורגת לפי גודל האירוע, גיבוי מלא לכל ציוד.",
    },
    {
      icon: "CalendarCheck",
      title: "תיאום מלא",
      description:
        "בונים יחד פלייליסט, מתאמים עם המגיש/ה ועם הצוות, ומגיעים מוכנים לכל תרחיש.",
    },
  ],

  process: [
    {
      step: "01",
      title: "שיחת היכרות",
      description:
        "מבינים את הסגנון שלכם, סוג האירוע והאנרגיה שאתם מחפשים. בודקים זמינות לתאריך.",
      icon: "MessageCircle",
    },
    {
      step: "02",
      title: "בונים פלייליסט",
      description:
        "רשימת חובה, רשימת לא-לנגן, ושירי רגע מיוחדים. הכל מסודר מראש.",
      icon: "ListMusic",
    },
    {
      step: "03",
      title: "תיאום טכני",
      description:
        "סיור באולם, בדיקת חשמל ומיקום, תיאום עם צוות ההפקה והגברה לפי הצורך.",
      icon: "Speaker",
    },
    {
      step: "04",
      title: "הלילה הגדול",
      description:
        "מגיע מוקדם, מקים, ודואג שהרחבה מלאה מהשנייה הראשונה ועד האחרונה.",
      icon: "Disc3",
    },
  ],

  packages: [
    {
      name: "Essential",
      hours: "עד 4 שעות",
      price: "מ-2,500 ₪",
      includes: [
        "די.ג'יי לכל האירוע",
        "מערכת הגברה לעד 120 איש",
        "תאורת רחבה בסיסית",
        "בניית פלייליסט מראש",
      ],
    },
    {
      name: "Premium",
      hours: "עד 6 שעות",
      price: "מ-4,500 ₪",
      featured: true,
      includes: [
        "די.ג'יי + מיקרופון אלחוטי למגיש/ה",
        "הגברה מדורגת לעד 300 איש",
        "תאורת רחבה מלאה + מובינגים",
        "מכונת עשן + אפקטים",
        "תיאום טכני וסיור באולם",
      ],
    },
    {
      name: "VIP Production",
      hours: "ערב מלא",
      price: "לפי הצעה",
      includes: [
        "הפקת סאונד ותאורה מלאה",
        "זיקוקים קרים על הרחבה",
        "סקסופון / נגן חי (תוספת)",
        "טכנאי הגברה צמוד",
        "תיאום מלא מול כל הספקים",
      ],
    },
  ],

  testimonials: [
    {
      quote:
        "הרחבה לא התרוקנה לרגע. קווין קרא את הקהל בול וכל המעברים היו חלקים. אנשים עוד מדברים על המסיבה.",
      name: "רותם ועומר",
      role: "חתונה · אולמי גן הדקל",
      featured: true,
    },
    {
      quote:
        "הגיע מוקדם, היה סופר מקצועי בתיאום, והסאונד היה נקי ומדויק. בדיוק האנרגיה שרצינו לאירוע החברה.",
      name: "ענת ל.",
      role: "מנהלת אירועים · חברת הייטק",
    },
    {
      quote:
        "מהקבלת פנים הרגועה ועד הפיצוץ בלילה — הכל זרם מושלם. ממליצים בעיניים עצומות.",
      name: "משפחת כהן",
      role: "בר מצווה · היכל התרבות",
    },
  ],

  gallery: [
    { id: "g1", src: u("photo-1464366400600-7168b8af9bc3"), tall: true, label: "Peak Hour" },
    { id: "g2", src: u("photo-1511795409834-ef04bbd61622"), label: "רחבה מלאה" },
    { id: "g3", src: u("photo-1519671482749-fd09be7ccebf"), label: "אורות" },
    { id: "g4", src: u("photo-1525772764200-be829a350797"), tall: true, label: "החופה" },
    { id: "g5", src: u("photo-1469371670807-013ccf25f16a"), label: "Open Air" },
    { id: "g6", src: u("photo-1545071677-d39a98da6c0e"), label: "Booth" },
    { id: "g7", src: u("photo-1606216794074-735e91aa2c92"), tall: true, label: "Afterparty" },
    { id: "g8", src: u("photo-1511285560929-80b456fea0bc"), label: "חגיגה" },
  ],

  nav: [
    { href: "#services", label: "שירותים" },
    { href: "#mixes", label: "סטים" },
    { href: "#about", label: "על קווין" },
    { href: "#gallery", label: "גלריה" },
    { href: "#packages", label: "חבילות" },
    { href: "#contact", label: "תיאום תאריך" },
  ],
} as const;
