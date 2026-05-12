export type Photo = {
  id: string;
  src: string;
  width: number;
  height: number;
  album: string;
  faces?: string[];
  tags?: string[];
  caption?: string;
};

export type Album = {
  id: string;
  name: string;
  cover: string;
  count: number;
  description?: string;
};

export type Face = {
  id: string;
  avatar: string;
  name?: string;
  photoCount: number;
};

const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const siteConfig = {
  event: {
    title: "אדוה & תומר",
    date: "26.02.2025",
    dateHebrew: "כ״ח שבט תשפ״ה",
    location: "אחוזת הסבא, שורש",
    heroImage: u("photo-1519741497674-611481863552", 2400),
    heroImageMobile: u("photo-1519741497674-611481863552", 1200),
    totalPhotos: 1547,
  },
  couple: {
    bride: "אדוה",
    groom: "תומר",
    storyShort:
      "ערב אחד של אור, צבע ונשמה — תיעוד שלם של היום שהפך לזיכרון.",
  },
  photographer: {
    name: "רון קובי",
    nameEn: "RON KOBI",
    handle: "@ronkobi.photo",
    avatar: u("photo-1507003211169-0a1dd7228f2d", 400),
    bio: "צלם חתונות ואירועים, מאמין בסיפור שמאחורי כל מבט.",
    phone: "054-000-0000",
    whatsapp: "972540000000",
    email: "info@example.com",
    instagram: "https://instagram.com/ronkobi.photo",
  },
  brand: {
    nameEn: "RON KOBI",
    nameHe: "רון קובי",
    suffix: "WEDDING STORIES",
  },
  locker: {
    enabled: true,
    code: "0226",
    hint: "תאריך החתונה (DDMM)",
  },
  albums: [
    {
      id: "preparations",
      name: "הכנות",
      cover: u("photo-1583939003579-730e3918a45a"),
      count: 184,
      description: "רגעי השקט לפני",
    },
    {
      id: "ketuba",
      name: "כתובה וחופה",
      cover: u("photo-1519741497674-611481863552"),
      count: 312,
      description: "הטקס המרגש",
    },
    {
      id: "ceremony",
      name: "הכלה והחתן",
      cover: u("photo-1606800052052-a08af7148866"),
      count: 268,
      description: "פורטרטים של הזוג",
    },
    {
      id: "family",
      name: "משפחה",
      cover: u("photo-1511285560929-80b456fea0bc"),
      count: 197,
      description: "הקרובים אלינו",
    },
    {
      id: "party",
      name: "מסיבה",
      cover: u("photo-1464366400600-7168b8af9bc3"),
      count: 451,
      description: "הריקודים, החיוכים, האנרגיה",
    },
    {
      id: "details",
      name: "פרטים קטנים",
      cover: u("photo-1465495976277-4387d4b0b4c6"),
      count: 135,
      description: "הפרחים, השמלה, הטבעות",
    },
  ] satisfies Album[],
  faces: [
    {
      id: "f1",
      avatar: u("photo-1494790108377-be9c29b29330", 200),
      name: "הכלה",
      photoCount: 412,
    },
    {
      id: "f2",
      avatar: u("photo-1500648767791-00dcc994a43e", 200),
      name: "החתן",
      photoCount: 387,
    },
    {
      id: "f3",
      avatar: u("photo-1438761681033-6461ffad8d80", 200),
      photoCount: 92,
    },
    {
      id: "f4",
      avatar: u("photo-1502685104226-ee32379fefbe", 200),
      photoCount: 78,
    },
    {
      id: "f5",
      avatar: u("photo-1544005313-94ddf0286df2", 200),
      photoCount: 64,
    },
    {
      id: "f6",
      avatar: u("photo-1539571696357-5a69c17a67c6", 200),
      photoCount: 51,
    },
    {
      id: "f7",
      avatar: u("photo-1531123897727-8f129e1688ce", 200),
      photoCount: 47,
    },
    {
      id: "f8",
      avatar: u("photo-1487412720507-e7ab37603c6f", 200),
      photoCount: 38,
    },
  ] satisfies Face[],
  suggestedTags: [
    "נשיקה",
    "ריקוד",
    "סבתא",
    "טבעות",
    "צחוק",
    "חופה",
    "פרחים",
    "שמלה",
  ],
  testimonials: [
    {
      quote:
        "רון הוא יותר מצלם — הוא נשמה שמתעדת נשמה. כל פריים מספר סיפור.",
      name: "מיכל ויונתן",
      role: "חתונה · יוני 2024",
    },
    {
      quote:
        "התמונות חיממו לנו את הלב גם חודשים אחרי. אסתטיקה, רגישות, רגע.",
      name: "נועה ועידן",
      role: "חתונה · ספטמבר 2024",
    },
    {
      quote: "הוא בא בלי להפריע, יוצא עם אלף סיפורים. ממליצים בלי שום היסוס.",
      name: "תמר ואסף",
      role: "חתונה · אפריל 2024",
    },
  ],
  chat: {
    enabled: true,
    placeholder: "יש שאלה? כתבו לי",
  },
} as const;

const albumIds = siteConfig.albums.map((a) => a.id);
type AlbumId = (typeof albumIds)[number];
const FACE_IDS = siteConfig.faces.map((f) => f.id);

const PHOTO_IDS = [
  "photo-1519741497674-611481863552",
  "photo-1606800052052-a08af7148866",
  "photo-1465495976277-4387d4b0b4c6",
  "photo-1464366400600-7168b8af9bc3",
  "photo-1511285560929-80b456fea0bc",
  "photo-1583939003579-730e3918a45a",
  "photo-1469371670807-013ccf25f16a",
  "photo-1525772764200-be829a350797",
  "photo-1519225421980-715cb0215aed",
  "photo-1525183480183-833ae5d4d99c",
  "photo-1511795409834-ef04bbd61622",
  "photo-1583939411023-14783179e581",
  "photo-1535378620166-273708d44e4c",
  "photo-1519671482749-fd09be7ccebf",
  "photo-1438659510239-7eb88e423d6f",
  "photo-1545071677-d39a98da6c0e",
  "photo-1591604466107-ec97de577aff",
  "photo-1465495976277-4387d4b0b4c6",
  "photo-1606216794074-735e91aa2c92",
  "photo-1532453288672-3a27e9be9efd",
  "photo-1517722014278-c256a91a6fba",
  "photo-1519225421980-715cb0215aed",
  "photo-1494774157365-9e04c6720e47",
  "photo-1511285560929-80b456fea0bc",
  "photo-1583939003579-730e3918a45a",
  "photo-1519741497674-611481863552",
  "photo-1606800052052-a08af7148866",
  "photo-1464366400600-7168b8af9bc3",
  "photo-1525772764200-be829a350797",
  "photo-1469371670807-013ccf25f16a",
];

function pseudoRandom(seed: number) {
  let x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

export function buildPhotos(): Photo[] {
  const photos: Photo[] = [];
  let i = 0;
  for (const album of siteConfig.albums) {
    const perAlbum = Math.min(8, album.count);
    for (let j = 0; j < perAlbum; j++) {
      const id = PHOTO_IDS[(i + j * 3) % PHOTO_IDS.length];
      const r = pseudoRandom(i + 1);
      const isPortrait = r > 0.55;
      const faces: string[] = [];
      const faceCount = Math.floor(pseudoRandom(i + 11) * 3);
      for (let k = 0; k < faceCount; k++) {
        faces.push(FACE_IDS[Math.floor(pseudoRandom(i + k + 21) * FACE_IDS.length)]);
      }
      photos.push({
        id: `${album.id}-${j}`,
        src: u(id, 1600),
        width: isPortrait ? 800 : 1200,
        height: isPortrait ? 1200 : 800,
        album: album.id,
        faces,
      });
      i++;
    }
  }
  return photos;
}

export const allPhotos = buildPhotos();

export type AlbumIdType = AlbumId;
