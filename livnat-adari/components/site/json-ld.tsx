import { site } from "@/components/site/site-config";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: `${site.brand} — ${site.ownerName}`,
    description: site.description,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    areaServed: site.area,
    address: {
      "@type": "PostalAddress",
      streetAddress: "נחומובסקי 8ב",
      addressLocality: "חדרה",
      addressCountry: "IL",
    },
    image: `${site.url}/og.png`,
    priceRange: "₪₪",
    sameAs: [site.instagram, site.podcast],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "08:00",
        closes: "20:00",
      },
    ],
    founder: {
      "@type": "Person",
      name: site.ownerName,
      jobTitle: "קוסמטיקאית מוסמכת",
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
