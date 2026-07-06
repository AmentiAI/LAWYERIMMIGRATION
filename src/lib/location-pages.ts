/**
 * Local SEO landing pages targeting location- and practice-specific search
 * queries (e.g. "Immigration Lawyer Mystic CT"). Each slug maps to a fully
 * bespoke page component in src/components/locations/pages and is rendered by
 * the /local/[slug] dynamic route. Links live in the footer.
 */

export interface LocationPage {
  /** URL segment under /local */
  slug: string;
  /** Footer link label + internal reference */
  title: string;
  /** Primary target keyword for this page */
  keyword: string;
  /** Secondary keyword variations woven into copy and metadata */
  secondaryKeywords: string[];
  /** <title> tag */
  metaTitle: string;
  /** <meta name="description"> */
  metaDescription: string;
}

export const locationPagesList: LocationPage[] = [
  {
    slug: "immigration-lawyer-mystic-ct",
    title: "Immigration Lawyer Mystic CT",
    keyword: "immigration lawyer Mystic CT",
    secondaryKeywords: [
      "Mystic immigration lawyer",
      "immigration help Mystic Connecticut",
      "family immigration lawyer Mystic",
    ],
    metaTitle: "Immigration Lawyer in Mystic, CT | Law Office of Jacquelyn R. Goncalves",
    metaDescription:
      "Local immigration lawyer in Mystic, CT helping families with green cards, fiancé visas, and citizenship. Direct attorney service from a Roosevelt Avenue office. Call (860) 471-3023.",
  },
  {
    slug: "immigration-attorney-mystic-ct",
    title: "Immigration Attorney Mystic CT",
    keyword: "immigration attorney Mystic CT",
    secondaryKeywords: [
      "Mystic immigration attorney",
      "best immigration attorney Mystic",
      "Spanish speaking immigration attorney Mystic",
    ],
    metaTitle: "Immigration Attorney in Mystic, CT | Jacquelyn R. Goncalves",
    metaDescription:
      "Experienced immigration attorney in Mystic, CT. Attorney Jacquelyn R. Goncalves personally guides every family petition, adjustment, and naturalization case. Bilingual service.",
  },
  {
    slug: "immigration-law-firm-mystic-ct",
    title: "Immigration Law Firm Mystic CT",
    keyword: "immigration law firm Mystic CT",
    secondaryKeywords: [
      "Mystic immigration law firm",
      "immigration office Mystic Connecticut",
      "boutique immigration firm Mystic",
    ],
    metaTitle: "Immigration Law Firm in Mystic, CT | Law Office of Jacquelyn R. Goncalves",
    metaDescription:
      "A boutique immigration law firm in Mystic, CT focused on family-based immigration. One attorney, one point of contact, start to finish. Serving New London County and beyond.",
  },
  {
    slug: "immigration-lawyer-connecticut",
    title: "Immigration Lawyer Connecticut",
    keyword: "immigration lawyer Connecticut",
    secondaryKeywords: [
      "Connecticut immigration lawyer",
      "CT immigration lawyer",
      "immigration lawyer in Connecticut",
    ],
    metaTitle: "Immigration Lawyer in Connecticut | Jacquelyn R. Goncalves",
    metaDescription:
      "Connecticut immigration lawyer serving clients statewide and nationwide. Family petitions, green cards, work permits, and citizenship handled directly by the attorney.",
  },
  {
    slug: "immigration-attorney-connecticut",
    title: "Immigration Attorney Connecticut",
    keyword: "immigration attorney Connecticut",
    secondaryKeywords: [
      "Connecticut immigration attorney",
      "CT immigration attorney",
      "experienced immigration attorney Connecticut",
    ],
    metaTitle: "Immigration Attorney in Connecticut | Law Office of Jacquelyn R. Goncalves",
    metaDescription:
      "Connecticut immigration attorney for families, couples, and individuals. Personalized representation in English, Spanish, and Portuguese. Free no-obligation case review.",
  },
  {
    slug: "immigration-lawyer-near-me",
    title: "Immigration Lawyer Near Me",
    keyword: "immigration lawyer near me",
    secondaryKeywords: [
      "immigration attorney near me",
      "local immigration lawyer",
      "immigration lawyer close to me",
    ],
    metaTitle: "Immigration Lawyer Near Me | Mystic, Connecticut",
    metaDescription:
      "Searching for an immigration lawyer near you? The Law Office of Jacquelyn R. Goncalves offers local in-person and remote video consultations across Connecticut and the U.S.",
  },
  {
    slug: "green-card-lawyer-connecticut",
    title: "Green Card Lawyer Connecticut",
    keyword: "green card lawyer Connecticut",
    secondaryKeywords: [
      "Connecticut green card attorney",
      "permanent residence lawyer Connecticut",
      "adjustment of status lawyer CT",
    ],
    metaTitle: "Green Card Lawyer in Connecticut | Jacquelyn R. Goncalves",
    metaDescription:
      "Connecticut green card lawyer for marriage, family, and adjustment of status cases. Get your permanent residence application filed right the first time. Call (860) 471-3023.",
  },
  {
    slug: "citizenship-lawyer-connecticut",
    title: "Citizenship Lawyer Connecticut",
    keyword: "citizenship lawyer Connecticut",
    secondaryKeywords: [
      "Connecticut citizenship attorney",
      "US citizenship lawyer CT",
      "citizenship application lawyer Connecticut",
    ],
    metaTitle: "Citizenship Lawyer in Connecticut | Law Office of Jacquelyn R. Goncalves",
    metaDescription:
      "Connecticut citizenship lawyer guiding lawful permanent residents through the N-400 naturalization process — eligibility, interview prep, and the civics test. Become a U.S. citizen.",
  },
  {
    slug: "naturalization-attorney-connecticut",
    title: "Naturalization Attorney Connecticut",
    keyword: "naturalization attorney Connecticut",
    secondaryKeywords: [
      "Connecticut naturalization lawyer",
      "N-400 attorney Connecticut",
      "naturalization help CT",
    ],
    metaTitle: "Naturalization Attorney in Connecticut | Jacquelyn R. Goncalves",
    metaDescription:
      "Connecticut naturalization attorney handling N-400 applications, complex good-moral-character cases, and oath ceremonies. Personal attention from filing to citizenship.",
  },
  {
    slug: "deportation-defense-lawyer-connecticut",
    title: "Deportation Defense Lawyer Connecticut",
    keyword: "deportation defense lawyer Connecticut",
    secondaryKeywords: [
      "Connecticut removal defense attorney",
      "immigration court lawyer CT",
      "deportation defense attorney Connecticut",
    ],
    metaTitle: "Deportation Defense Lawyer in Connecticut | Law Office of Jacquelyn R. Goncalves",
    metaDescription:
      "Connecticut deportation and removal defense lawyer. Compassionate, urgent help with NTAs, immigration court hearings, bond, and relief from removal. Act quickly — call today.",
  },
];

export function getLocationBySlug(slug: string) {
  return locationPagesList.find((p) => p.slug === slug);
}
