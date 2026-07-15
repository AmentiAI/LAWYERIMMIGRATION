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
  {
    slug: "immigration-attorney",
    title: "Immigration Attorney",
    keyword: "immigration attorney",
    secondaryKeywords: [
      "experienced immigration attorney",
      "immigration attorney Connecticut",
      "hire an immigration attorney",
    ],
    metaTitle: "Immigration Attorney | Law Office of Jacquelyn R. Goncalves",
    metaDescription:
      "Work directly with an experienced immigration attorney on family petitions, green cards, and citizenship. Personal attention on every case — English, Spanish, and Portuguese.",
  },
  {
    slug: "immigration-law",
    title: "Immigration Law",
    keyword: "immigration law",
    secondaryKeywords: [
      "law immigration",
      "immigration law explained",
      "U.S. immigration law",
    ],
    metaTitle: "Immigration Law, Explained Simply | Jacquelyn R. Goncalves",
    metaDescription:
      "A plain-language guide to U.S. immigration law — family petitions, green cards, work authorization, and citizenship — from a Connecticut immigration attorney.",
  },
  {
    slug: "us-immigration",
    title: "US Immigration",
    keyword: "US immigration",
    secondaryKeywords: [
      "United States immigration",
      "US immigration process",
      "immigrate to the United States",
    ],
    metaTitle: "Understanding the U.S. Immigration System | Jacquelyn R. Goncalves",
    metaDescription:
      "How the U.S. immigration system actually works: the agencies, the pathways to a green card, realistic timelines, and where an attorney makes the difference.",
  },
  {
    slug: "immigration-services",
    title: "Immigration Services",
    keyword: "immigration services",
    secondaryKeywords: [
      "immigration help",
      "immigration case services",
      "family immigration services",
    ],
    metaTitle: "Immigration Services for Families & Individuals | Jacquelyn R. Goncalves",
    metaDescription:
      "Full-service immigration help — petitions, green cards, fiancé visas, work permits, and naturalization — handled personally by attorney Jacquelyn R. Goncalves.",
  },
  {
    slug: "immigration-legal-services",
    title: "Immigration Legal Services",
    keyword: "immigration legal services",
    secondaryKeywords: [
      "immigration legal help",
      "legal immigration assistance",
      "immigration attorney services",
    ],
    metaTitle: "Immigration Legal Services in Connecticut | Jacquelyn R. Goncalves",
    metaDescription:
      "Trusted immigration legal services in Connecticut. Attorney-led preparation of USCIS petitions and applications, done right the first time. Se habla español.",
  },
  {
    slug: "immigration-office",
    title: "Immigration Office",
    keyword: "immigration office",
    secondaryKeywords: [
      "local immigration office",
      "immigration office near me",
      "immigration help office",
    ],
    metaTitle: "Looking for an Immigration Office? Start Here | Jacquelyn R. Goncalves",
    metaDescription:
      "Searching for an immigration office? Our Mystic, CT law office guides you through USCIS filings — and explains the difference between a government field office and a law office.",
  },
  {
    slug: "immigration-law-office",
    title: "Immigration Law Office",
    keyword: "immigration law office",
    secondaryKeywords: [
      "immigration law practice",
      "immigration attorney office",
      "law office immigration",
    ],
    metaTitle: "A Dedicated Immigration Law Office | Jacquelyn R. Goncalves",
    metaDescription:
      "A focused immigration law office in Mystic, CT. One attorney, direct access, and careful case work for families navigating the U.S. immigration process.",
  },
  {
    slug: "immigration-law-firm",
    title: "Immigration Law Firm",
    keyword: "immigration law firm",
    secondaryKeywords: [
      "boutique immigration firm",
      "small immigration law firm",
      "family immigration law firm",
    ],
    metaTitle: "A Boutique Immigration Law Firm | Jacquelyn R. Goncalves",
    metaDescription:
      "A boutique immigration law firm where your case never gets lost in the shuffle. See how personal attorney attention beats the big-firm assembly line.",
  },
  {
    slug: "immigration-attorney-consultation",
    title: "Immigration Attorney Consultation",
    keyword: "immigration attorney consultation",
    secondaryKeywords: [
      "immigration consultation",
      "immigration lawyer consultation",
      "book immigration consultation",
    ],
    metaTitle: "Immigration Attorney Consultation — What to Expect | Jacquelyn R. Goncalves",
    metaDescription:
      "Book an immigration attorney consultation in person or by video. Learn what happens, how to prepare, and the two consultation options ($99 and $350).",
  },
  {
    slug: "immigration-attorney-bridgeport-connecticut",
    title: "Immigration Attorney Bridgeport CT",
    keyword: "immigration attorney Bridgeport Connecticut",
    secondaryKeywords: [
      "Bridgeport immigration lawyer",
      "immigration attorney Fairfield County",
      "Bridgeport CT immigration help",
    ],
    metaTitle: "Immigration Attorney Serving Bridgeport, Connecticut | Jacquelyn R. Goncalves",
    metaDescription:
      "Immigration attorney serving Bridgeport and Fairfield County, Connecticut. Family petitions, green cards, and citizenship by secure video or at our Connecticut office.",
  },
  {
    slug: "immigration-lawyer-hartford-ct",
    title: "Immigration Lawyer Hartford CT",
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
  {
    slug: "green-card-renewal-lawyer",
    title: "Green Card Renewal Lawyer",
    keyword: "green card renewal lawyer",
    secondaryKeywords: [
      "green card renewal attorney",
      "I-90 renewal lawyer",
      "renew permanent resident card",
    ],
    metaTitle: "Green Card Renewal Lawyer (Form I-90) | Jacquelyn R. Goncalves",
    metaDescription:
      "Renew or replace your green card without the stress. Attorney help filing Form I-90 correctly — expiring cards, lost cards, and name changes. Call (860) 471-3023.",
  },
];

export function getLocationBySlug(slug: string) {
  return locationPagesList.find((p) => p.slug === slug);
}
