import { site } from "@/components/site/site-config";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Electrician",
    name: site.brand,
    description: site.description,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    areaServed: site.area,
    address: { "@type": "PostalAddress", addressCountry: "IL" },
    image: `${site.url}/opengraph-image`,
    priceRange: "₪₪",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
