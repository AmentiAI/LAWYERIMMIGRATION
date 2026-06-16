import type { LegalImageKey } from "./images";

export type KeywordLayout =
  | "certificate-hero"
  | "card-stack"
  | "visa-journey"
  | "form-banner"
  | "oath-prep"
  | "status-bridge"
  | "sponsor-grid"
  | "work-badge"
  | "renewal-cycle"
  | "criminal-review"
  | "waiver-path"
  | "spouse-reunion"
  | "children-priority"
  | "parent-lineage"
  | "sibling-timeline";

export interface KeywordPage {
  slug: string;
  title: string;
  keyword: string;
  shortDescription: string;
  layout: KeywordLayout;
  imageKey: LegalImageKey;
  metaDescription: string;
  relatedService?: string;
}

export const keywordPagesList: KeywordPage[] = [
  {
    slug: "marriage-petitions",
    title: "Marriage Petitions",
    keyword: "marriage petitions",
    shortDescription:
      "Lawful permanent residence through marriage — I-130 petitions, adjustment of status, and consular processing for spouses.",
    layout: "certificate-hero",
    imageKey: "courtroom",
    metaDescription:
      "Marriage petition immigration attorney in Rhode Island and Connecticut. Spousal green cards, I-130 filings, and marriage-based immigration.",
    relatedService: "family-based-petitions",
  },
  {
    slug: "green-card-petitions",
    title: "Green Card Petitions",
    keyword: "green card petitions",
    shortDescription:
      "Family-based and employment-based pathways to U.S. permanent residence — from petition filing through card issuance.",
    layout: "card-stack",
    imageKey: "immigrationAct",
    metaDescription:
      "Green card petition lawyer serving Mystic, CT, Rhode Island, and Connecticut. Family and adjustment pathways to permanent residence.",
    relatedService: "family-based-petitions",
  },
  {
    slug: "fiance-visa",
    title: "Fiancé Visa",
    keyword: "fiancé visa",
    shortDescription:
      "K-1 fiancé(e) visas for U.S. citizens engaged to foreign nationals — I-129F petition through consular interview.",
    layout: "visa-journey",
    imageKey: "capitol",
    metaDescription:
      "K-1 fiancé visa attorney. I-129F petitions, consular processing, and post-marriage green card adjustment in RI and CT.",
    relatedService: "fiance-petitions",
  },
  {
    slug: "i-130",
    title: "Form I-130",
    keyword: "I-130",
    shortDescription:
      "Petition for Alien Relative — the foundational family immigration form filed by U.S. citizens and permanent residents.",
    layout: "form-banner",
    imageKey: "lawBooks",
    metaDescription:
      "I-130 petition attorney. Family-based immigrant petitions for spouses, children, parents, and siblings.",
    relatedService: "family-based-petitions",
  },
  {
    slug: "n-400",
    title: "Form N-400",
    keyword: "N-400",
    shortDescription:
      "Application for Naturalization — the form permanent residents file to become U.S. citizens.",
    layout: "oath-prep",
    imageKey: "naturalization",
    metaDescription:
      "N-400 naturalization attorney in Connecticut. Citizenship applications with interview and civics test preparation.",
    relatedService: "citizenship-naturalization",
  },
  {
    slug: "i-485",
    title: "Form I-485",
    keyword: "I-485",
    shortDescription:
      "Application to Register Permanent Residence or Adjust Status — apply for your green card from inside the United States.",
    layout: "status-bridge",
    imageKey: "courtroom",
    metaDescription:
      "I-485 adjustment of status lawyer. Green card applications filed within the United States with direct attorney guidance.",
    relatedService: "adjustment-of-status",
  },
  {
    slug: "i-864",
    title: "Form I-864",
    keyword: "I-864",
    shortDescription:
      "Affidavit of Support — the financial sponsorship form required for most family-based immigration cases.",
    layout: "sponsor-grid",
    imageKey: "lawBooks",
    metaDescription:
      "I-864 affidavit of support attorney. Income requirements, joint sponsors, and financial documentation for immigration cases.",
    relatedService: "family-based-petitions",
  },
  {
    slug: "i-765",
    title: "Form I-765",
    keyword: "I-765",
    shortDescription:
      "Application for Employment Authorization — obtain or renew your legal right to work in the United States.",
    layout: "work-badge",
    imageKey: "capitol",
    metaDescription:
      "I-765 work permit attorney. EAD applications, renewals, and replacements in Rhode Island and Connecticut.",
    relatedService: "work-permit-renewal",
  },
  {
    slug: "i-90",
    title: "Form I-90",
    keyword: "I-90",
    shortDescription:
      "Application to Replace Permanent Resident Card — renew or replace your green card before or after expiration.",
    layout: "renewal-cycle",
    imageKey: "immigrationAct",
    metaDescription:
      "I-90 green card renewal attorney. Replace lost, stolen, expired, or damaged permanent resident cards.",
    relatedService: "green-card-renewal",
  },
  {
    slug: "naturalization-criminal-history",
    title: "Naturalization and Citizenship with Criminal History",
    keyword: "naturalization criminal history",
    shortDescription:
      "N-400 naturalization when you have arrests, convictions, or criminal records — eligibility analysis and waiver strategy.",
    layout: "criminal-review",
    imageKey: "ladyJustice",
    metaDescription:
      "Naturalization attorney for applicants with criminal history. Good moral character analysis and N-400 strategy in RI and CT.",
    relatedService: "citizenship-naturalization",
  },
  {
    slug: "removal-of-conditions-divorce",
    title: "Removal of Conditions After Divorce and Separation",
    keyword: "removal of conditions divorce",
    shortDescription:
      "I-751 waiver filings when your marriage ended before conditions were removed — divorce, separation, and abuse waivers.",
    layout: "waiver-path",
    imageKey: "courtroom",
    metaDescription:
      "I-751 waiver attorney after divorce or separation. Remove conditions on residence without joint filing.",
    relatedService: "removal-of-conditions",
  },
  {
    slug: "petition-for-spouse",
    title: "Petition for Spouse",
    keyword: "petition for spouse",
    shortDescription:
      "I-130 spousal petitions for U.S. citizens and permanent residents — immediate relative and preference category cases.",
    layout: "spouse-reunion",
    imageKey: "naturalization",
    metaDescription:
      "Spousal immigration petition attorney. I-130 for husbands and wives of U.S. citizens and green card holders.",
    relatedService: "family-based-petitions",
  },
  {
    slug: "petition-for-children",
    title: "Petition for Children",
    keyword: "petition for kids",
    shortDescription:
      "I-130 petitions for sons and daughters — unmarried children under 21, unmarried adult children, and married children.",
    layout: "children-priority",
    imageKey: "capitol",
    metaDescription:
      "Child immigration petition lawyer. I-130 for minor and adult children of U.S. citizens and permanent residents.",
    relatedService: "family-based-petitions",
  },
  {
    slug: "petition-for-parents",
    title: "Petition for Parents",
    keyword: "petition for parents",
    shortDescription:
      "Immediate relative I-130 petitions for mothers and fathers of U.S. citizens age 21 and older.",
    layout: "parent-lineage",
    imageKey: "lawBooks",
    metaDescription:
      "Parent immigration petition attorney. I-130 for mothers and fathers of U.S. citizens — no visa backlog for immediate relatives.",
    relatedService: "family-based-petitions",
  },
  {
    slug: "petition-for-sibling",
    title: "Petition for Brother or Sister",
    keyword: "petition for brother sister",
    shortDescription:
      "F4 family preference I-130 petitions for siblings of U.S. citizens — understanding wait times and priority dates.",
    layout: "sibling-timeline",
    imageKey: "supremeCourt",
    metaDescription:
      "Sibling immigration petition attorney. I-130 for brothers and sisters of U.S. citizens in the F4 preference category.",
    relatedService: "family-based-petitions",
  },
];

export function getKeywordBySlug(slug: string) {
  return keywordPagesList.find((p) => p.slug === slug);
}

export interface KeywordContent {
  eyebrow: string;
  headline: string;
  lead: string;
  sections: { title: string; body: string; items?: string[] }[];
  cta: string;
  faq?: { q: string; a: string }[];
}

export function getKeywordContent(slug: string): KeywordContent | undefined {
  const content: Record<string, KeywordContent> = {
    "marriage-petitions": {
      eyebrow: "Marriage-Based Immigration",
      headline: "Build Your Life Together in the United States",
      lead: "A marriage petition is the legal foundation for bringing your spouse to America or adjusting their status to permanent resident. Attorney Goncalves handles every form, every document, and every interview — so you can focus on your marriage.",
      sections: [
        {
          title: "Who Can File a Marriage Petition?",
          body: "U.S. citizens may petition for spouses as immediate relatives with no annual visa cap. Permanent residents may also petition for spouses, though visa availability depends on the F2A preference category.",
          items: [
            "Valid marriage recognized under U.S. law",
            "Petitioner must be U.S. citizen or LPR",
            "Both parties must be legally free to marry",
            "Bona fide marriage — not entered solely for immigration benefits",
          ],
        },
        {
          title: "Inside vs. Outside the United States",
          body: "If your spouse is already in the U.S., adjustment of status (I-485) may be available. If abroad, consular processing through a U.S. embassy is typically required after I-130 approval.",
        },
        {
          title: "Proving Your Marriage Is Real",
          body: "USCIS scrutinizes marriage cases. We compile joint financial records, lease agreements, photos, affidavits, and other evidence demonstrating your relationship is genuine.",
        },
      ],
      cta: "Discuss Your Marriage Case",
      faq: [
        {
          q: "How long does a marriage green card take?",
          a: "Immediate relative cases for U.S. citizen spouses often take 10–14 months for adjustment of status. Consular processing timelines vary by embassy.",
        },
      ],
    },
    "green-card-petitions": {
      eyebrow: "Permanent Residence",
      headline: "Every Path to a U.S. Green Card, Explained and Managed",
      lead: "Whether your green card comes through family, employment, investment, or special programs, the petition stage determines your eligibility and priority. We identify the right category and manage the entire process.",
      sections: [
        {
          title: "Family-Based Green Cards",
          body: "The most common pathway. A U.S. citizen or permanent resident files an I-130 petition, and the beneficiary either adjusts status or processes through a consulate.",
          items: [
            "Immediate relatives: spouses, parents, unmarried children under 21",
            "Family preference: adult children, siblings, LPR spouses",
            "Derivative beneficiaries on principal petitions",
          ],
        },
        {
          title: "Adjustment vs. Consular Processing",
          body: "Eligible applicants in the U.S. file I-485 to adjust without leaving. Those abroad complete immigrant visa processing at a U.S. consulate after petition approval.",
        },
        {
          title: "Maintaining Permanent Residence",
          body: "Once you have your green card, renewal (I-90), removal of conditions (I-751), and eventual naturalization (N-400) are the next milestones we help you navigate.",
        },
      ],
      cta: "Find Your Green Card Path",
    },
    "fiance-visa": {
      eyebrow: "K-1 Nonimmigrant Visa",
      headline: "Bring Your Fiancé to America to Marry Within 90 Days",
      lead: "The K-1 visa is exclusively for U.S. citizens whose foreign fiancé will enter the U.S., marry within 90 days, and then apply for a green card. This multi-step process requires precise timing and thorough documentation.",
      sections: [
        {
          title: "I-129F Petition Requirements",
          body: "Only U.S. citizens — not permanent residents — may file for a K-1 visa. You must have met your fiancé in person within the two years before filing, with limited exceptions.",
          items: [
            "Both parties legally free to marry",
            "Intent to marry within 90 days of U.S. entry",
            "Fiancé must meet admissibility requirements",
            "Petitioner must meet income requirements (I-134)",
          ],
        },
        {
          title: "Consular Interview Abroad",
          body: "After USCIS approves the I-129F, your fiancé applies for the K-1 visa at a U.S. embassy. We prepare the DS-160, medical exam, and police certificates.",
        },
        {
          title: "After Marriage: Green Card",
          body: "Once married, your spouse files Form I-485 to adjust to permanent resident status. We handle this final step to complete your immigration journey together.",
        },
      ],
      cta: "Start Your K-1 Petition",
    },
    "i-130": {
      eyebrow: "Petition for Alien Relative",
      headline: "Form I-130: The Starting Point for Family Immigration",
      lead: "Form I-130 establishes the qualifying family relationship between a U.S. citizen or permanent resident petitioner and their foreign national relative. Without an approved I-130, no family-based green card can proceed.",
      sections: [
        {
          title: "What I-130 Establishes",
          body: "The I-130 proves you have a qualifying family relationship. It does not by itself grant immigration status — it creates the foundation for a visa petition that may lead to a green card.",
          items: [
            "Spouse, parent, child, or sibling relationships",
            "Priority date established upon USCIS receipt",
            "Immediate relatives vs. preference categories",
          ],
        },
        {
          title: "Filing and Processing",
          body: "We prepare your I-130 with all supporting evidence, track USCIS processing, and respond to any Requests for Evidence (RFE) promptly.",
        },
        {
          title: "After I-130 Approval",
          body: "Depending on your relative's location and category, the next step is either I-485 adjustment of status or National Visa Center processing for consular immigrant visas.",
        },
      ],
      cta: "File Your I-130",
    },
    "n-400": {
      eyebrow: "Application for Naturalization",
      headline: "Form N-400: Your Application to Become a U.S. Citizen",
      lead: "Permanent residents who meet residency, physical presence, and good moral character requirements may file Form N-400 to naturalize. Attorney Goncalves has helped clients complete this process in as little as three months from filing to oath ceremony.",
      sections: [
        {
          title: "N-400 Eligibility Basics",
          body: "Most applicants need five years as a permanent resident (three if married to a U.S. citizen), continuous residence, physical presence in the U.S., and good moral character.",
          items: [
            "Age 18 or older at time of filing",
            "Ability to read, write, and speak basic English",
            "Knowledge of U.S. history and government (civics test)",
            "Willingness to take the Oath of Allegiance",
          ],
        },
        {
          title: "The N-400 Application",
          body: "The application is extensive — covering travel history, employment, residences, and criminal history. Errors or omissions cause delays. We prepare a complete, accurate N-400.",
        },
        {
          title: "Citizenship Interview & Test",
          body: "USCIS schedules a biometrics appointment and citizenship interview. We provide study materials and conduct mock interviews so you arrive confident and prepared.",
        },
      ],
      cta: "Begin Your N-400",
    },
    "i-485": {
      eyebrow: "Adjustment of Status",
      headline: "Form I-485: Apply for Your Green Card From Within the U.S.",
      lead: "Form I-485 allows eligible individuals already in the United States to become lawful permanent residents without returning to their home country for visa processing. This is one of the most complex immigration filings — we manage every component.",
      sections: [
        {
          title: "I-485 Eligibility",
          body: "You must have an approved immigrant petition (or qualify as an immediate relative), a visa must be immediately available, and you must be admissible to the United States.",
          items: [
            "Approved I-130 or qualifying basis",
            "Lawful entry or parole into the U.S.",
            "No bars to adjustment under INA §245(c)",
            "Medical examination (I-693)",
          ],
        },
        {
          title: "Concurrent Filing",
          body: "Immediate relatives of U.S. citizens often file I-485 concurrently with I-130, I-765 (work permit), and I-131 (travel document) — allowing work and travel authorization while the case is pending.",
        },
        {
          title: "The I-485 Interview",
          body: "USCIS conducts an in-person interview for most I-485 applicants. We review your entire file, prepare you for questions, and attend to issues before they become problems.",
        },
      ],
      cta: "Evaluate I-485 Eligibility",
    },
    "i-864": {
      eyebrow: "Affidavit of Support",
      headline: "Form I-864: Proving Financial Ability to Sponsor Your Relative",
      lead: "Most family-based immigrants require a financial sponsor who demonstrates income at or above 125% of the Federal Poverty Guidelines. Form I-864 is a legally enforceable contract — we ensure it is completed correctly.",
      sections: [
        {
          title: "Who Must File I-864?",
          body: "The petitioner who filed the I-130 is typically the primary sponsor. If income is insufficient, a joint sponsor or household member may also file an I-864.",
          items: [
            "Primary sponsor: the I-130 petitioner",
            "Joint sponsor: separate household, meets income alone",
            "Household member: combines income with sponsor",
          ],
        },
        {
          title: "Income Requirements",
          body: "Sponsors must demonstrate income at 125% of poverty guidelines for their household size (including the immigrant). Assets may supplement income in some cases.",
        },
        {
          title: "Legal Obligations of Sponsors",
          body: "The I-864 creates a binding obligation to support the immigrant until they become a citizen, work 40 qualifying quarters, or permanently leave the U.S. We explain these obligations before you sign.",
        },
      ],
      cta: "Review Your I-864",
    },
    "i-765": {
      eyebrow: "Employment Authorization",
      headline: "Form I-765: Your Legal Right to Work in America",
      lead: "An Employment Authorization Document (EAD) proves to employers that you may work legally in the United States. Whether you are applying for the first time, renewing, or replacing a lost card, we file your I-765 correctly and on time.",
      sections: [
        {
          title: "Who Needs Form I-765?",
          body: "Many nonimmigrant statuses do not include work authorization. I-765 is filed by adjustment applicants, asylum seekers, DACA recipients, and others seeking employment authorization.",
          items: [
            "Pending I-485 adjustment applicants (Category C09)",
            "DACA recipients (Category C33)",
            "Asylum applicants after 150-day waiting period",
            "Spouses of certain visa holders (Category A18, etc.)",
          ],
        },
        {
          title: "Renewal Timing",
          body: "File your renewal 180 days before expiration when possible. Automatic extension rules may apply depending on your category — we advise on your specific situation.",
        },
        {
          title: "Replacement Applications",
          body: "Lost, stolen, or never-received EAD cards require a replacement I-765. We file promptly to minimize employment disruption.",
        },
      ],
      cta: "File Your I-765",
    },
    "i-90": {
      eyebrow: "Green Card Renewal",
      headline: "Form I-90: Renew or Replace Your Permanent Resident Card",
      lead: "Lawful permanent residents must carry valid proof of status. Form I-90 is used to renew an expiring green card or replace one that is lost, stolen, damaged, or contains errors.",
      sections: [
        {
          title: "When to File I-90 for Renewal",
          body: "USCIS recommends filing six months before your card expires. An expired card does not terminate your permanent residence, but creates practical problems with employment, travel, and benefits.",
        },
        {
          title: "When to File I-90 for Replacement",
          body: "Lost or stolen cards should be replaced immediately. We can help you obtain temporary evidence of status while your replacement is processed.",
          items: [
            "Card lost or stolen",
            "Card never received from USCIS",
            "Incorrect name or biographic data",
            "Card mutilated or unreadable",
          ],
        },
        {
          title: "Biometrics and Processing",
          body: "Most I-90 applicants attend a biometrics appointment. Processing typically takes 8–12 months. We monitor your case and address any USCIS requests.",
        },
      ],
      cta: "Renew or Replace Your Card",
    },
    "naturalization-criminal-history": {
      eyebrow: "Complex Naturalization Cases",
      headline: "Citizenship Is Possible — Even With a Criminal Record",
      lead: "A criminal history does not automatically bar naturalization, but it requires careful analysis. Certain convictions permanently bar citizenship; others create temporary bars or require disclosure and explanation. We evaluate your record before you file.",
      sections: [
        {
          title: "Good Moral Character Analysis",
          body: "USCIS evaluates good moral character for the statutory period (typically five years, or three if married to a U.S. citizen). Arrests, charges, and convictions — even if dismissed — must be disclosed.",
          items: [
            "Aggravated felonies — permanent bar to naturalization",
            "Crimes involving moral turpitude (CIMT)",
            "Controlled substance offenses",
            "Multiple convictions and jail sentences",
          ],
        },
        {
          title: "Disclosure Strategy",
          body: "Failure to disclose criminal history on the N-400 is itself grounds for denial and can create fraud issues. We obtain certified court records and develop an honest, strategic disclosure approach.",
        },
        {
          title: "When to Wait Before Filing",
          body: "Sometimes the best strategy is to wait until a statutory period passes or until a conviction is expunged. We advise on timing so you file when your chances of approval are strongest.",
        },
      ],
      cta: "Confidential Case Review",
    },
    "removal-of-conditions-divorce": {
      eyebrow: "I-751 Waiver After Divorce",
      headline: "Remove Conditions on Your Green Card After Marriage Ends",
      lead: "If your two-year conditional green card was based on marriage and the marriage ended before you filed I-751, you cannot file jointly with your spouse. A waiver application is required — and we have the experience to guide you through it.",
      sections: [
        {
          title: "I-751 Waiver Grounds",
          body: "USCIS allows waiver of the joint filing requirement when the marriage was entered in good faith but ended in divorce or annulment, or when the applicant or child was subjected to battery or extreme cruelty.",
          items: [
            "Divorce or annulment waiver (good faith marriage)",
            "Battery or extreme cruelty waiver",
            "Extreme hardship waiver if deported",
          ],
        },
        {
          title: "Evidence After Separation",
          body: "You must prove the marriage was genuine even though it ended. We gather the same bona fide marriage evidence used in the original petition, plus the divorce decree.",
        },
        {
          title: "Filing Before or After Divorce",
          body: "You may file I-751 with a waiver before the divorce is final if you have filed for divorce. Timing matters — we ensure your filing meets USCIS requirements.",
        },
      ],
      cta: "Discuss Your I-751 Waiver",
    },
    "petition-for-spouse": {
      eyebrow: "Spousal I-130 Petition",
      headline: "Reunite With Your Husband or Wife in the United States",
      lead: "Spousal petitions are among the most common immigration cases — and among the most scrutinized. Whether you are a U.S. citizen or permanent resident, we build a strong I-130 petition with thorough relationship evidence.",
      sections: [
        {
          title: "U.S. Citizen Spouse — Immediate Relative",
          body: "No visa backlog applies. Your spouse may adjust status in the U.S. or process through a consulate, with visas immediately available upon I-130 approval.",
        },
        {
          title: "Permanent Resident Spouse — F2A Category",
          body: "LPR spouses fall in the F2A preference category. Visa availability depends on the Visa Bulletin priority dates. We track dates and plan your filing strategy accordingly.",
        },
        {
          title: "Conditional Residence for New Marriages",
          body: "If you have been married less than two years when your spouse receives their green card, they receive conditional residence and must file I-751 within 90 days before the card expires.",
        },
      ],
      cta: "Petition for Your Spouse",
    },
    "petition-for-children": {
      eyebrow: "Child I-130 Petitions",
      headline: "Bring Your Children to the United States",
      lead: "U.S. citizens and permanent residents may petition for their children, but the category and wait time depend on the child's age, marital status, and the petitioner's immigration status.",
      sections: [
        {
          title: "Child Categories",
          body: "USCIS defines 'child' specifically for immigration purposes. Stepchildren and adopted children may qualify under certain conditions.",
          items: [
            "Unmarried children under 21 of U.S. citizens — immediate relative",
            "Unmarried adult children of U.S. citizens — F1 category",
            "Married children of U.S. citizens — F3 category",
            "Unmarried children of LPRs — F2A (under 21) or F2B (21+)",
          ],
        },
        {
          title: "Aging Out Protection",
          body: "The Child Status Protection Act (CSPA) may protect children who turn 21 while a petition is pending. We calculate CSPA age and advise on protection eligibility.",
        },
        {
          title: "Derivative Children",
          body: "Children may also immigrate as derivatives on a parent's petition in some cases. We determine the most advantageous filing strategy for your family.",
        },
      ],
      cta: "Petition for Your Children",
    },
    "petition-for-parents": {
      eyebrow: "Parent I-130 Petition",
      headline: "Bring Your Mother or Father to America",
      lead: "U.S. citizens age 21 and older may petition for their parents as immediate relatives — the fastest family immigration category with no visa backlog and no annual cap.",
      sections: [
        {
          title: "Immediate Relative — No Wait",
          body: "Parent petitions by U.S. citizens are immediate relative cases. Visas are always available, making this one of the quickest paths to a green card.",
          items: [
            "Petitioner must be U.S. citizen age 21+",
            "Biological, adoptive, and step-parents may qualify",
            "Step-parent relationship requires marriage before child turned 18",
          ],
        },
        {
          title: "Adjustment vs. Consular",
          body: "Parents in the U.S. may adjust status if they entered lawfully. Parents abroad process through consular immigrant visa processing after I-130 approval.",
        },
        {
          title: "Affidavit of Support",
          body: "You must demonstrate financial ability to support your parent through Form I-864. We prepare the affidavit and advise on income requirements.",
        },
      ],
      cta: "Petition for Your Parents",
    },
    "petition-for-sibling": {
      eyebrow: "Sibling I-130 Petition — F4 Category",
      headline: "Petition for Your Brother or Sister — Understanding the Wait",
      lead: "U.S. citizens may petition for siblings in the F4 family preference category. This category has the longest wait times — often 15+ years depending on country of birth. We file your petition and help you understand the timeline.",
      sections: [
        {
          title: "F4 Preference Category",
          body: "Sibling petitions are subject to annual visa caps and per-country limits. Your priority date — the date USCIS receives your I-130 — determines your place in line.",
          items: [
            "Only U.S. citizens (not LPRs) may petition for siblings",
            "Priority date established on I-130 filing date",
            "Visa Bulletin published monthly by Department of State",
            "Wait times vary significantly by country of birth",
          ],
        },
        {
          title: "Why File Now?",
          body: "Even with long waits, filing early secures your priority date. Your sibling's place in line cannot be improved by waiting — only by filing.",
        },
        {
          title: "Derivative Family Members",
          body: "Your sibling's spouse and unmarried children under 21 may immigrate as derivatives on the F4 petition. We include all qualifying family members on the petition.",
        },
      ],
      cta: "File a Sibling Petition",
    },
  };

  return content[slug];
}
