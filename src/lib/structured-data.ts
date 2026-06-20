import { faqs, siteConfig } from "./constants";
import { getSiteUrl } from "./site-url";

export function organizationJsonLd() {
  const url = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LegalService",
        "@id": `${url}/#legalservice`,
        name: siteConfig.name,
        url,
        description: siteConfig.description,
        telephone: siteConfig.phone,
        email: siteConfig.email,
        image: `${url}/images/immigration-law-office.png`,
        priceRange: "$$",
        areaServed: [
          {
            "@type": "State",
            name: "Connecticut",
          },
          {
            "@type": "Country",
            name: "United States",
          },
        ],
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.address.street,
          addressLocality: siteConfig.address.city,
          addressRegion: siteConfig.address.state,
          postalCode: siteConfig.address.zip,
          addressCountry: "US",
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
            ],
            opens: "09:00",
            closes: "18:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Saturday",
            opens: "09:00",
            closes: "14:00",
          },
        ],
        knowsLanguage: siteConfig.languages,
      },
      {
        "@type": "WebSite",
        "@id": `${url}/#website`,
        url,
        name: siteConfig.name,
        description: siteConfig.description,
        publisher: {
          "@id": `${url}/#legalservice`,
        },
        inLanguage: "en-US",
      },
      {
        "@type": "Attorney",
        "@id": `${url}/#attorney`,
        name: "Jacquelyn R. Goncalves",
        worksFor: {
          "@id": `${url}/#legalservice`,
        },
        url: `${url}/about`,
      },
    ],
  };
}

export function faqPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbJsonLd(
  items: { name: string; path: string }[]
) {
  const url = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${url}${item.path.startsWith("/") ? item.path : `/${item.path}`}`,
    })),
  };
}
