import { siteMeta } from "@/data/site";
import { absoluteUrl } from "@/lib/site-url";

/** NGO + WebSite structured data (single root object — not an array — for parser compatibility). */
export function JsonLd() {
  const root = absoluteUrl("/");
  const orgId = `${root}#organization`;
  const websiteId = `${root}#website`;

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "NGO",
        "@id": orgId,
        name: siteMeta.org,
        alternateName: siteMeta.title,
        description: siteMeta.description,
        url: root,
        founder: { "@type": "Person", name: siteMeta.founder },
        areaServed: { "@type": "AdministrativeArea", name: "Delhi, India" },
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        name: siteMeta.title,
        description: siteMeta.description,
        url: root,
        inLanguage: "en-IN",
        publisher: { "@id": orgId },
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
