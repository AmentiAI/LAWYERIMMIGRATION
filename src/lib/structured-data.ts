import {
  attorneyProfile,
  CONTENT_LAST_REVIEWED,
  faqs,
  siteConfig,
} from "./constants";
import { getSiteUrl } from "./site-url";

/** (860) 471-3023 → +1-860-471-3023 */
function toE164(phone: string) {
  const digits = phone.replace(/\D/g, "");
  return `+1-${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`;
}

function nonEmpty(values: string[]) {
  return values.filter((value) => value.trim() !== "");
}

const PRACTICE_AREAS = [
  "Family-based immigration",
  "Marriage-based green cards",
  "Adjustment of status",
  "Consular processing",
  "Removal of conditions (Form I-751)",
  "Citizenship and naturalization (Form N-400)",
  "K-1 fiancé(e) visas",
  "Employment authorization (Form I-765)",
  "Green card renewal (Form I-90)",
  "VAWA self-petitions",
  "DACA renewal",
  "E-2 treaty investor visas",
  "B-1/B-2 visitor visas",
];

export function organizationJsonLd() {
  const url = getSiteUrl();
  const firmSameAs = nonEmpty(Object.values(siteConfig.profiles));
  const attorneySameAs = nonEmpty(Object.values(attorneyProfile.profiles));

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LegalService",
        "@id": `${url}/#legalservice`,
        name: siteConfig.name,
        url,
        description: siteConfig.description,
        telephone: toE164(siteConfig.phone),
        email: siteConfig.email,
        image: `${url}/images/immigration-law-office.png`,
        logo: {
          "@type": "ImageObject",
          url: `${url}/images/logo.png`,
          width: 512,
          height: 512,
        },
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
        geo: {
          "@type": "GeoCoordinates",
          latitude: siteConfig.geo.latitude,
          longitude: siteConfig.geo.longitude,
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
        knowsAbout: PRACTICE_AREAS,
        founder: { "@id": `${url}/#attorney` },
        employee: { "@id": `${url}/#attorney` },
        ...(firmSameAs.length > 0 && { sameAs: firmSameAs }),
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
      personJsonLd(url, attorneySameAs),
    ],
  };
}

function personJsonLd(url: string, sameAs: string[]) {
  const schools = attorneyProfile.education.filter((e) => e.school);

  return {
    "@type": "Person",
    "@id": `${url}/#attorney`,
    name: attorneyProfile.name,
    jobTitle: attorneyProfile.jobTitle,
    url: `${url}/about`,
    image: `${url}${attorneyProfile.image}`,
    worksFor: { "@id": `${url}/#legalservice` },
    knowsLanguage: siteConfig.languages,
    knowsAbout: PRACTICE_AREAS,
    hasCredential: attorneyProfile.education.map((e) => ({
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "degree",
      name: e.degree,
    })).concat(
      attorneyProfile.barAdmissions.map((bar) => ({
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "license",
        name: `Admitted to practice law in ${bar.jurisdiction}`,
      }))
    ),
    ...(schools.length > 0 && {
      alumniOf: schools.map((e) => ({
        "@type": "CollegeOrUniversity",
        name: e.school,
      })),
    }),
    ...(attorneyProfile.memberships.length > 0 && {
      memberOf: attorneyProfile.memberships.map((name) => ({
        "@type": "Organization",
        name,
      })),
    }),
    ...(sameAs.length > 0 && { sameAs }),
  };
}

type PageSchemaInput = {
  /** Path beginning with "/" */
  path: string;
  name: string;
  description: string;
  /** Breadcrumb trail after Home */
  breadcrumb: { name: string; path: string }[];
  /** Adds a Service node provided by the firm (service pages). */
  service?: boolean;
  /** Marks the page as an attorney-reviewed legal guide (Article). */
  article?: boolean;
};

/**
 * WebPage + BreadcrumbList (+ Service or Article) graph for an individual page,
 * linked by @id to the site-wide LegalService, WebSite, and Person nodes.
 */
export function pageJsonLd({
  path,
  name,
  description,
  breadcrumb,
  service,
  article,
}: PageSchemaInput) {
  const url = getSiteUrl();
  const pageUrl = `${url}${path}`;
  const crumbs = [{ name: "Home", path: "/" }, ...breadcrumb];

  const graph: Record<string, unknown>[] = [
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name,
      description,
      inLanguage: "en-US",
      isPartOf: { "@id": `${url}/#website` },
      about: { "@id": service ? `${pageUrl}#service` : `${url}/#legalservice` },
      breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
      ...(article && {
        dateModified: CONTENT_LAST_REVIEWED,
        reviewedBy: { "@id": `${url}/#attorney` },
        lastReviewed: CONTENT_LAST_REVIEWED,
      }),
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", "main p"],
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: crumbs.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: item.path === "/" ? url : `${url}${item.path}`,
      })),
    },
  ];

  if (service) {
    graph.push({
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name,
      serviceType: name,
      description,
      url: pageUrl,
      provider: { "@id": `${url}/#legalservice` },
      areaServed: [
        { "@type": "State", name: "Connecticut" },
        { "@type": "Country", name: "United States" },
      ],
    });
  }

  if (article) {
    graph.push({
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      headline: name,
      description,
      url: pageUrl,
      mainEntityOfPage: { "@id": `${pageUrl}#webpage` },
      author: { "@id": `${url}/#attorney` },
      publisher: { "@id": `${url}/#legalservice` },
      dateModified: CONTENT_LAST_REVIEWED,
      inLanguage: "en-US",
    });
  }

  return { "@context": "https://schema.org", "@graph": graph };
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
