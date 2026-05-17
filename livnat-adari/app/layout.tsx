import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import { JsonLd } from "@/components/site/json-ld";
import { site } from "@/components/site/site-config";
import "./globals.css";

const heebo = Heebo({
  variable: "--font-sans",
  subsets: ["hebrew", "latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.ownerName} — ${site.tagline}`,
    template: `%s | ${site.brand}`,
  },
  description: site.description,
  keywords: [
    "קוסמטיקאית",
    "טיפולי פנים",
    "טיפול בעור",
    "טיפול אקנה",
    "טיפול בצלקות",
    "אנטי אייג'ינג",
    "פיגמנטציה",
    "ליבנת אדרי",
    "קוסמטיקה חדרה",
    site.area,
    site.brand,
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "he_IL",
    url: site.url,
    siteName: site.brand,
    title: `${site.ownerName} — ${site.tagline}`,
    description: site.description,
    images: [
      {
        url: "/og.png?v=1",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: `${site.brand} — ${site.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.ownerName} — ${site.tagline}`,
    description: site.description,
    images: ["/og.png?v=1"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={`${heebo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
        <JsonLd />
      </body>
    </html>
  );
}
