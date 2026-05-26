import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/components/site/site-config";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  display: "swap",
  variable: "--font-heebo",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.brand.nameEn} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.brand.nameEn}`,
  },
  description: siteConfig.description,
  keywords: [
    "די.ג'יי לחתונה",
    "DJ לחתונות",
    "תקליטן לאירועים",
    "די.ג'יי לאירועים",
    "תקליטן חתונה",
    "DJ Kevin",
    "הגברה ותאורה",
    siteConfig.area,
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "he_IL",
    url: siteConfig.url,
    siteName: siteConfig.brand.nameEn,
    title: `${siteConfig.brand.nameEn} — ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.brand.nameEn} — ${siteConfig.tagline}`,
    description: siteConfig.description,
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
      </body>
    </html>
  );
}
