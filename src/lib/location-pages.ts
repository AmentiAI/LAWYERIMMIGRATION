/**
 * Location pages for the Mystic office, statewide Connecticut service, the
 * Hartford area (served by video), and the two most-requested Connecticut
 * practice areas. Each slug maps to a bespoke page component in
 * src/components/locations/pages, rendered by /local/[slug]. Keep each page
 * distinct in purpose — retired keyword variants 301-redirect in
 * next.config.ts.
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
    title: "Mystic, CT Office",
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
    slug: "immigration-lawyer-connecticut",
    title: "Serving All of Connecticut",
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
    slug: "green-card-lawyer-connecticut",
    title: "Green Cards in Connecticut",
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
    title: "Citizenship in Connecticut",
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
    slug: "immigration-lawyer-hartford-ct",
    title: "Hartford Area (Video Consultations)",
    keyword: "immigration lawyer Hartford CT",
    secondaryKeywords: [
      "Hartford immigration attorney",
      "immigration lawyer Hartford County",
      "Hartford CT immigration help",
    ],
    metaTitle: "Immigration Lawyer for Hartford, Connecticut | Jacquelyn R. Goncalves",
    metaDescription:
      "Immigration lawyer serving Hartford, CT and central Connecticut. Direct-attorney help with green cards, petitions, and naturalization — by video or in person.",
  },
];

export function getLocationBySlug(slug: string) {
  return locationPagesList.find((p) => p.slug === slug);
}
