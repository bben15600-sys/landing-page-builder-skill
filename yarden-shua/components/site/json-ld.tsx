import { site } from "./site-config";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.brand,
    alternateName: site.brandEn,
    jobTitle: `${site.position} (כדורגל)`,
    description: site.description,
    url: site.url,
    email: site.email,
    telephone: site.phone,
    address: { "@type": "PostalAddress", addressCountry: "IL" },
    sameAs: [site.social.instagram, site.social.transfermarkt].filter(Boolean),
    knowsAbout: ["Football", "Striker", "Israeli Premier League"],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
