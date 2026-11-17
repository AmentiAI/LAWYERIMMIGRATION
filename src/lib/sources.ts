/**
 * Official primary sources cited at the foot of each service and topic page.
 * Keep to government sites (USCIS, State Department, Federal Register, eCFR).
 */

export type Source = { label: string; href: string };

const S = {
  i130: { label: "USCIS — Form I-130, Petition for Alien Relative", href: "https://www.uscis.gov/i-130" },
  i485: { label: "USCIS — Form I-485, Application to Adjust Status", href: "https://www.uscis.gov/i-485" },
  i864: { label: "USCIS — Form I-864, Affidavit of Support", href: "https://www.uscis.gov/i-864" },
  i751: { label: "USCIS — Form I-751, Petition to Remove Conditions", href: "https://www.uscis.gov/i-751" },
  n400: { label: "USCIS — Form N-400, Application for Naturalization", href: "https://www.uscis.gov/n-400" },
  civics: {
    label: "USCIS — Study for the Naturalization Test",
    href: "https://www.uscis.gov/citizenship/find-study-materials-and-resources/study-for-the-test",
  },
  civics2025: {
    label: "Federal Register — Implementation of the 2025 Naturalization Civics Test",
    href: "https://www.federalregister.gov/documents/2025/09/18/2025-18050/notice-of-implementation-of-2025-naturalization-civics-test",
  },
  policyManualCriminal: {
    label: "USCIS Policy Manual — Volume 12, Part F (Good Moral Character)",
    href: "https://www.uscis.gov/policy-manual/volume-12-part-f",
  },
  i129f: { label: "USCIS — Form I-129F, Petition for Alien Fiancé(e)", href: "https://www.uscis.gov/i-129f" },
  i131: {
    label: "USCIS — Form I-131, Application for Travel Documents",
    href: "https://www.uscis.gov/i-131",
  },
  travelDocuments: {
    label: "USCIS — Travel Documents",
    href: "https://www.uscis.gov/green-card/green-card-processes-and-procedures/travel-documents",
  },
  rfe: {
    label: "USCIS Policy Manual — Requests for Evidence and Notices of Intent to Deny",
    href: "https://www.uscis.gov/policy-manual/volume-1-part-e-chapter-6",
  },
  spouseVisa: {
    label: "U.S. Department of State — Immigrant Visa for a Spouse or Fiancé(e) of a U.S. Citizen",
    href: "https://travel.state.gov/content/travel/en/us-visas/immigrate/family-immigration/immigrant-visa-for-a-spouse-or-fiance-of-a-us-citizen.html",
  },
  i765: { label: "USCIS — Form I-765, Application for Employment Authorization", href: "https://www.uscis.gov/i-765" },
  eadRule: {
    label: "USCIS — Interim Final Rule Ending Automatic Extension of Certain EADs",
    href: "https://www.uscis.gov/i-9-central/form-i-9-related-news/interim-final-rule-published-to-end-the-practice-of-automatically-extending-certain-employment",
  },
  i90: { label: "USCIS — Form I-90, Application to Replace Permanent Resident Card", href: "https://www.uscis.gov/i-90" },
  i90Extension: {
    label: "USCIS — Green Card Validity Extended to 36 Months for I-90 Filers",
    href: "https://www.uscis.gov/newsroom/alerts/uscis-extends-green-card-validity-extension-to-36-months-for-green-card-renewals",
  },
  i360: { label: "USCIS — Form I-360 (VAWA Self-Petition)", href: "https://www.uscis.gov/i-360" },
  vawa: {
    label: "USCIS — Abused Spouses, Children and Parents (VAWA)",
    href: "https://www.uscis.gov/humanitarian/abused-spouses-children-and-parents",
  },
  daca: { label: "USCIS — Deferred Action for Childhood Arrivals", href: "https://www.uscis.gov/DACA" },
  i821d: { label: "USCIS — Form I-821D, DACA Request", href: "https://www.uscis.gov/i-821d" },
  family: { label: "USCIS — Family of U.S. Citizens and Permanent Residents", href: "https://www.uscis.gov/family" },
  visaBulletin: {
    label: "U.S. Department of State — Visa Bulletin",
    href: "https://travel.state.gov/content/travel/en/legal/visa-law0/visa-bulletin.html",
  },
  immigrantVisaProcess: {
    label: "U.S. Department of State — The Immigrant Visa Process (NVC)",
    href: "https://travel.state.gov/content/travel/en/us-visas/immigrate/the-immigrant-visa-process.html",
  },
  visitor: {
    label: "U.S. Department of State — Visitor Visa (B-1/B-2)",
    href: "https://travel.state.gov/content/travel/en/us-visas/tourism-visit/visitor.html",
  },
  treatyCountries: {
    label: "U.S. Department of State — Treaty Countries (E-1/E-2)",
    href: "https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/fees/treaty.html",
  },
  processingTimes: { label: "USCIS — Check Case Processing Times", href: "https://egov.uscis.gov/processing-times/" },
  fees: { label: "USCIS — Fee Schedule (Form G-1055)", href: "https://www.uscis.gov/g-1055" },
  cfr8: { label: "eCFR — Title 8, Aliens and Nationality", href: "https://www.ecfr.gov/current/title-8" },
} satisfies Record<string, Source>;

export const serviceSources: Record<string, Source[]> = {
  "family-based-petitions": [S.i130, S.family, S.visaBulletin, S.fees],
  "adjustment-of-status": [S.i485, S.i864, S.processingTimes, S.fees],
  "consular-processing": [S.immigrantVisaProcess, S.i130, S.visaBulletin],
  "removal-of-conditions": [S.i751, S.processingTimes, S.fees],
  "citizenship-naturalization": [S.n400, S.civics, S.civics2025, S.fees],
  "fiance-petitions": [S.i129f, S.processingTimes, S.fees],
  "work-permit-renewal": [S.i765, S.eadRule, S.processingTimes],
  "green-card-renewal": [S.i90, S.i90Extension, S.fees],
  vawa: [S.i360, S.vawa, S.cfr8],
  "daca-renewal": [S.daca, S.i821d, S.i765],
  "e2-investment-visa": [S.treatyCountries, S.cfr8],
  "b1-b2-renewal": [S.visitor],
};

export const topicSources: Record<string, Source[]> = {
  "marriage-petitions": [S.i130, S.i485, S.i864, S.i751],
  "green-card-petitions": [S.i130, S.i485, S.visaBulletin, S.family],
  "fiance-visa": [S.i129f, S.i485, S.processingTimes],
  "i-130": [S.i130, S.visaBulletin, S.fees],
  "n-400": [S.n400, S.civics, S.civics2025, S.processingTimes],
  "i-485": [S.i485, S.i864, S.processingTimes, S.fees],
  "i-864": [S.i864, S.cfr8],
  "i-765": [S.i765, S.eadRule, S.processingTimes],
  "i-90": [S.i90, S.i90Extension, S.processingTimes],
  "naturalization-criminal-history": [S.n400, S.policyManualCriminal],
  "removal-of-conditions-divorce": [S.i751, S.processingTimes],
  "petition-for-spouse": [S.i130, S.i485, S.i864],
  "petition-for-children": [S.i130, S.visaBulletin, S.family],
  "petition-for-parents": [S.i130, S.i864, S.family],
  "petition-for-sibling": [S.i130, S.visaBulletin],
  "cr-1-ir-1-visa": [S.spouseVisa, S.i130, S.immigrantVisaProcess, S.i864],
  "advance-parole": [S.i131, S.travelDocuments, S.i485],
  "uscis-request-for-evidence": [S.rfe, S.processingTimes],
  "conditional-green-card": [S.i751, S.i130, S.fees],
  "citizenship-interview": [S.n400, S.civics, S.civics2025],
};
