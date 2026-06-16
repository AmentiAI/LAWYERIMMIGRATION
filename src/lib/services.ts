import type { LegalImageKey } from "./images";

export type ServiceLayout =
  | "split-panel"
  | "timeline"
  | "pipeline"
  | "countdown"
  | "milestones"
  | "dual-path"
  | "comparison"
  | "status-tracker"
  | "confidential"
  | "renewal-strip"
  | "investment-grid"
  | "travel-cards";

export interface ServiceItem {
  slug: string;
  title: string;
  shortDescription: string;
  icon: string;
  layout: ServiceLayout;
  imageKey: LegalImageKey;
  metaDescription: string;
}

export const servicesList: ServiceItem[] = [
  {
    slug: "family-based-petitions",
    title: "Family Based Petitions",
    shortDescription:
      "I-130 petitions to reunite spouses, children, parents, and siblings with their U.S. citizen or permanent resident relatives.",
    icon: "Users",
    layout: "split-panel",
    imageKey: "courtroom",
    metaDescription:
      "Family-based immigration petitions (I-130) in Rhode Island and Connecticut. Attorney Goncalves handles spouse, parent, and child petitions with direct attorney involvement.",
  },
  {
    slug: "adjustment-of-status",
    title: "Adjustment of Status",
    shortDescription:
      "Apply for your green card from within the United States through the I-485 process.",
    icon: "FileCheck",
    layout: "timeline",
    imageKey: "lawBooks",
    metaDescription:
      "Adjustment of status (I-485) attorney in Mystic, CT. Navigate green card applications while remaining in the United States.",
  },
  {
    slug: "consular-processing",
    title: "Consular Processing",
    shortDescription:
      "Immigrant visa processing through U.S. embassies and consulates abroad.",
    icon: "Globe",
    layout: "pipeline",
    imageKey: "capitol",
    metaDescription:
      "Consular processing immigration attorney serving RI and CT. Embassy interview preparation and NVC document management.",
  },
  {
    slug: "removal-of-conditions",
    title: "Removal of Conditions",
    shortDescription:
      "Convert your two-year conditional green card to permanent residence with Form I-751.",
    icon: "Shield",
    layout: "countdown",
    imageKey: "ladyJustice",
    metaDescription:
      "I-751 removal of conditions attorney. Joint petitions and waiver applications for marriage-based conditional green cards.",
  },
  {
    slug: "citizenship-naturalization",
    title: "Citizenship and Naturalization",
    shortDescription:
      "N-400 naturalization applications, civics test preparation, and citizenship interview guidance.",
    icon: "Flag",
    layout: "milestones",
    imageKey: "naturalization",
    metaDescription:
      "Citizenship and naturalization lawyer in Connecticut. N-400 applications with interview and civics test preparation.",
  },
  {
    slug: "fiance-petitions",
    title: "Fiancé Petitions",
    shortDescription:
      "K-1 fiancé(e) visa petitions to bring your partner to the United States for marriage.",
    icon: "Heart",
    layout: "dual-path",
    imageKey: "courtroom",
    metaDescription:
      "K-1 fiancé visa attorney. I-129F petitions and adjustment of status after marriage in RI and CT.",
  },
  {
    slug: "work-permit-renewal",
    title: "Work Permit Renewal and Replacement",
    shortDescription:
      "I-765 employment authorization document renewals, replacements, and corrections.",
    icon: "Briefcase",
    layout: "comparison",
    imageKey: "lawBooks",
    metaDescription:
      "EAD work permit renewal and replacement attorney. Form I-765 filing assistance in Mystic, Connecticut.",
  },
  {
    slug: "green-card-renewal",
    title: "Green Card Renewal and Replacement",
    shortDescription:
      "I-90 applications to renew or replace your permanent resident card.",
    icon: "CreditCard",
    layout: "status-tracker",
    imageKey: "immigrationAct",
    metaDescription:
      "Green card renewal (I-90) and replacement attorney. Expired, lost, or damaged permanent resident card assistance.",
  },
  {
    slug: "vawa",
    title: "VAWA",
    shortDescription:
      "Violence Against Women Act self-petitions for abuse survivors seeking immigration relief.",
    icon: "Lock",
    layout: "confidential",
    imageKey: "ladyJustice",
    metaDescription:
      "VAWA self-petition immigration attorney. Confidential legal representation for abuse survivors in RI and CT.",
  },
  {
    slug: "daca-renewal",
    title: "DACA Renewal",
    shortDescription:
      "Deferred Action for Childhood Arrivals renewal applications and work authorization extensions.",
    icon: "RefreshCw",
    layout: "renewal-strip",
    imageKey: "capitol",
    metaDescription:
      "DACA renewal attorney in Connecticut. Form I-821D and I-765 renewal filing with direct attorney guidance.",
  },
  {
    slug: "e2-investment-visa",
    title: "E-2 Investment Visa",
    shortDescription:
      "Treaty investor visas for nationals of treaty countries investing in U.S. businesses.",
    icon: "TrendingUp",
    layout: "investment-grid",
    imageKey: "supremeCourt",
    metaDescription:
      "E-2 treaty investor visa attorney. Business investment immigration for entrepreneurs in Rhode Island and Connecticut.",
  },
  {
    slug: "b1-b2-renewal",
    title: "B-1/B-2 Renewal",
    shortDescription:
      "Visitor visa renewals for business and tourism travel to the United States.",
    icon: "Plane",
    layout: "travel-cards",
    imageKey: "capitol",
    metaDescription:
      "B-1/B-2 visitor visa renewal assistance. Business and tourist visa application guidance from Mystic, CT.",
  },
];

export function getServiceBySlug(slug: string) {
  return servicesList.find((s) => s.slug === slug);
}

export function getServiceContent(slug: string) {
  const content: Record<
    string,
    {
      eyebrow: string;
      headline: string;
      lead: string;
      sections: {
        title: string;
        body: string;
        items?: string[];
      }[];
      cta: string;
      formType: string;
    }
  > = {
    "family-based-petitions": {
      eyebrow: "I-130 Family Petitions",
      headline: "Reuniting Families Through U.S. Immigration Law",
      lead: "A family-based petition is often the first step toward bringing your loved ones to the United States. Attorney Goncalves personally prepares and files your I-130 petition, ensuring every relationship is properly documented and every eligibility requirement is met.",
      sections: [
        {
          title: "Who Can File a Family Petition?",
          body: "U.S. citizens may petition for spouses, children, parents, and siblings. Lawful permanent residents may petition for spouses and unmarried children. Each category has different priority dates and processing timelines.",
          items: [
            "Immediate relative petitions (spouse, parent, unmarried child under 21)",
            "Family preference categories (F1–F4)",
            "Derivative beneficiaries included on principal petitions",
            "Follow-to-join benefits for qualifying family members",
          ],
        },
        {
          title: "Documentation We Prepare",
          body: "Incomplete or inconsistent evidence is one of the most common causes of delays. We review your entire family history and compile a thorough petition package.",
          items: [
            "Birth certificates and marriage records",
            "Proof of citizenship or permanent residence",
            "Relationship evidence for spousal petitions",
            "Affidavits and supporting declarations",
          ],
        },
        {
          title: "After the Petition Is Approved",
          body: "Once USCIS approves your I-130, your relative may pursue adjustment of status in the U.S. or consular processing abroad. We guide your family through whichever path applies to your situation.",
        },
      ],
      cta: "Discuss Your Family Petition",
      formType: "family",
    },
    "adjustment-of-status": {
      eyebrow: "Form I-485",
      headline: "Obtain Your Green Card Without Leaving the Country",
      lead: "Adjustment of status allows eligible applicants already in the United States to become lawful permanent residents. This process involves multiple forms, a medical examination, and often a USCIS interview — each step managed directly by Attorney Goncalves.",
      sections: [
        {
          title: "Eligibility Requirements",
          body: "Not everyone qualifies to adjust status in the U.S. We evaluate your immigration history, manner of entry, and current status before recommending this path.",
          items: [
            "Approved immigrant petition or immediate relative status",
            "Lawful admission or parole into the United States",
            "Visa immediately available for your category",
            "Admissibility under INA §212",
          ],
        },
        {
          title: "Forms Filed Together",
          body: "Many adjustment cases involve concurrent filing of multiple applications. We coordinate every form to avoid conflicts or processing delays.",
          items: [
            "I-485 Application to Register Permanent Residence",
            "I-765 Application for Employment Authorization",
            "I-131 Application for Travel Document (Advance Parole)",
            "I-864 Affidavit of Support",
          ],
        },
        {
          title: "The USCIS Interview",
          body: "Most adjustment applicants attend an in-person interview. We prepare you thoroughly — reviewing your application, practicing likely questions, and addressing any issues in your immigration history before you walk in.",
        },
      ],
      cta: "Evaluate Your Adjustment Case",
      formType: "adjustment",
    },
    "consular-processing": {
      eyebrow: "Embassy & Consulate Processing",
      headline: "Navigating the Path from Approval to Immigrant Visa",
      lead: "When your relative is outside the United States, consular processing through a U.S. embassy or consulate is typically required. We manage National Visa Center correspondence, document submissions, and interview preparation for every stage abroad.",
      sections: [
        {
          title: "National Visa Center Stage",
          body: "After USCIS approves the immigrant petition, the case transfers to the NVC. We ensure all civil documents, financial forms, and visa application fees are submitted correctly.",
          items: [
            "DS-260 immigrant visa application",
            "Civil document collection and translation",
            "I-864 Affidavit of Support preparation",
            "NVC documentarily qualified status",
          ],
        },
        {
          title: "Embassy Interview Preparation",
          body: "The consular interview is the final hurdle before visa issuance. We conduct a detailed review of your case file and prepare you for the questions consular officers typically ask.",
          items: [
            "Medical examination scheduling guidance",
            "Police certificate requirements by country",
            "Interview question preparation",
            "Post-interview visa pickup and travel planning",
          ],
        },
        {
          title: "Entry to the United States",
          body: "Upon visa approval, your relative receives an immigrant visa packet for presentation at the U.S. port of entry. We explain what to expect at customs and how to receive your green card after arrival.",
        },
      ],
      cta: "Start Consular Processing",
      formType: "consular",
    },
    "removal-of-conditions": {
      eyebrow: "Form I-751",
      headline: "Securing Your Permanent Green Card After Marriage",
      lead: "If you received a two-year conditional green card through marriage, you must file to remove conditions before it expires. Missing this deadline can result in loss of permanent resident status. We file your I-751 on time with strong evidence of your bona fide marriage.",
      sections: [
        {
          title: "The 90-Day Filing Window",
          body: "USCIS requires that I-751 be filed within the 90-day period before your conditional card expires. We track your expiration date and begin gathering evidence well in advance.",
          items: [
            "Joint filing with your U.S. citizen or LPR spouse",
            "Waiver filing based on divorce, abuse, or extreme hardship",
            "Evidence of ongoing marital relationship",
            "Late filing explanations when circumstances require",
          ],
        },
        {
          title: "Evidence of Bona Fide Marriage",
          body: "USCIS scrutinizes conditional residence cases closely. We help you compile a comprehensive evidence package demonstrating your marriage is genuine.",
          items: [
            "Joint financial accounts and tax returns",
            "Shared lease or mortgage documents",
            "Birth certificates of children together",
            "Photos, correspondence, and affidavits from family and friends",
          ],
        },
        {
          title: "If You Receive an Interview Notice",
          body: "Some I-751 cases are approved without interview; others require an in-person appearance. We prepare you for either outcome and represent your interests throughout.",
        },
      ],
      cta: "File Your I-751",
      formType: "conditional",
    },
    "citizenship-naturalization": {
      eyebrow: "Form N-400",
      headline: "Your Path to U.S. Citizenship Starts Here",
      lead: "Becoming a U.S. citizen is one of the most meaningful steps in the immigration journey. Attorney Goncalves has guided clients through naturalization efficiently — from N-400 filing through oath ceremony.",
      sections: [
        {
          title: "Naturalization Eligibility",
          body: "Most applicants must be permanent residents for at least five years, or three years if married to a U.S. citizen. We verify your eligibility and identify any issues before filing.",
          items: [
            "Continuous residence and physical presence requirements",
            "Good moral character evaluation",
            "English language and civics test requirements",
            "Exceptions for qualifying military service members",
          ],
        },
        {
          title: "Application & Interview",
          body: "The N-400 application is detailed and permanent — errors can cause delays or denials. We prepare a complete, accurate application and coach you for your citizenship interview.",
          items: [
            "Complete N-400 preparation and filing",
            "Biometrics appointment guidance",
            "Civics and English test study resources",
            "Mock interview preparation sessions",
          ],
        },
        {
          title: "After Approval",
          body: "Once approved, you will attend an oath ceremony where you take the Oath of Allegiance and officially become a U.S. citizen. We celebrate this milestone with every client who reaches it.",
        },
      ],
      cta: "Begin Your Naturalization",
      formType: "citizenship",
    },
    "fiance-petitions": {
      eyebrow: "K-1 Fiancé(e) Visa",
      headline: "Bringing Your Fiancé to America to Build Your Future Together",
      lead: "The K-1 visa allows a U.S. citizen's foreign fiancé to enter the United States for marriage within 90 days. This two-stage process — petition and visa — requires precise timing and thorough documentation. We manage both stages for you.",
      sections: [
        {
          title: "I-129F Petition Requirements",
          body: "Before your fiancé can apply for a visa, USCIS must approve your I-129F petition. We document your relationship and meeting history to satisfy the bona fide relationship standard.",
          items: [
            "Proof you met in person within two years of filing",
            "Evidence of intent to marry within 90 days of entry",
            "Both parties must be legally free to marry",
            "Petitioner must be a U.S. citizen (not LPR)",
          ],
        },
        {
          title: "Consular Visa Processing",
          body: "After petition approval, your fiancé applies for the K-1 visa at a U.S. embassy or consulate. We prepare the visa application and coach your fiancé for the consular interview.",
          items: [
            "DS-160 nonimmigrant visa application",
            "Medical examination and police clearances",
            "Financial support documentation (I-134)",
            "Consular interview preparation",
          ],
        },
        {
          title: "Marriage and Green Card",
          body: "After entering the U.S. and marrying within 90 days, your spouse files for adjustment of status to become a permanent resident. We handle this final step seamlessly.",
        },
      ],
      cta: "Start Your K-1 Petition",
      formType: "fiance",
    },
    "work-permit-renewal": {
      eyebrow: "Form I-765",
      headline: "Keep Your Authorization to Work in the United States",
      lead: "An Employment Authorization Document (EAD) allows you to work legally while your immigration case is pending or based on your current status. When your card expires, is lost, or contains errors, timely renewal or replacement is critical to maintaining employment.",
      sections: [
        {
          title: "Renewal Applications",
          body: "We file your I-765 renewal before your current EAD expires. USCIS recommends filing up to 180 days before expiration. Automatic extension rules may apply depending on your category.",
          items: [
            "Pending adjustment of status EAD renewals",
            "Asylum applicant work authorization",
            "DACA-related employment authorization",
            "TPS and other category-specific renewals",
          ],
        },
        {
          title: "Replacement Applications",
          body: "If your EAD was lost, stolen, destroyed, or contains incorrect information, a replacement application is required. We determine the correct filing category and gather supporting evidence.",
          items: [
            "Lost or stolen card replacement",
            "Name or biographic data corrections",
            "Card never received from USCIS",
            "Damaged card replacement",
          ],
        },
        {
          title: "Avoiding Employment Gaps",
          body: "A lapse in work authorization can jeopardize your job. We track processing times for your category and advise on automatic extension eligibility to protect your employment.",
        },
      ],
      cta: "Renew or Replace Your EAD",
      formType: "work-permit",
    },
    "green-card-renewal": {
      eyebrow: "Form I-90",
      headline: "Maintain Your Status as a Lawful Permanent Resident",
      lead: "Permanent resident cards expire every ten years and must be renewed. If your card is lost, stolen, damaged, or contains errors, replacement is required. We file your I-90 application and track USCIS processing so you always have valid proof of status.",
      sections: [
        {
          title: "When to Renew",
          body: "USCIS recommends filing Form I-90 six months before your green card expires. An expired card does not mean you lose permanent residence, but it can create problems with employment, travel, and government benefits.",
          items: [
            "Card expiring within six months",
            "Name change since card was issued",
            "Card contains incorrect biographic information",
            "Previous card was mutilated or partially destroyed",
          ],
        },
        {
          title: "When to Replace",
          body: "Replacement applications are required when your card is lost, stolen, or never received. We file promptly and help you obtain temporary evidence of status if needed.",
          items: [
            "Lost or stolen green card",
            "Card never arrived after approval",
            "Incorrect data on issued card",
            "Card damaged beyond use",
          ],
        },
        {
          title: "Biometrics and Processing",
          body: "Most I-90 applicants attend a biometrics appointment. We prepare you for this step and monitor your case through approval and card delivery.",
        },
      ],
      cta: "Renew or Replace Your Green Card",
      formType: "green-card",
    },
    vawa: {
      eyebrow: "Violence Against Women Act",
      headline: "Immigration Relief for Survivors of Abuse",
      lead: "VAWA allows certain abuse survivors to self-petition for immigration benefits without relying on their abuser. This confidential process protects your safety while pursuing lawful status independently. Attorney Goncalves provides compassionate, discreet representation throughout.",
      sections: [
        {
          title: "Who Qualifies for VAWA",
          body: "VAWA self-petitions are available to spouses, children, and parents who have been abused by a U.S. citizen or lawful permanent resident family member.",
          items: [
            "Abused spouses of U.S. citizens or LPRs",
            "Abused children (under 21, or up to 25 if abuse caused delay)",
            "Abused parents of U.S. citizen sons or daughters",
            "Good faith marriage to the abuser (for spousal petitions)",
          ],
        },
        {
          title: "Evidence of Abuse",
          body: "VAWA cases require demonstrating the qualifying relationship and the abuse. We help you gather evidence sensitively, understanding that documentation may come from many sources.",
          items: [
            "Police reports and court records",
            "Medical records and photographs",
            "Affidavits from witnesses",
            "Counseling or shelter records",
          ],
        },
        {
          title: "Confidentiality Protections",
          body: "USCIS cannot contact your abuser about your VAWA petition. We handle your case with strict confidentiality and explain every safeguard available under the law.",
        },
      ],
      cta: "Confidential VAWA Consultation",
      formType: "vawa",
    },
    "daca-renewal": {
      eyebrow: "Deferred Action for Childhood Arrivals",
      headline: "Protecting Your DACA Status and Work Authorization",
      lead: "DACA provides temporary protection from deportation and eligibility for work authorization for qualifying individuals brought to the U.S. as children. Renewing on time is essential — we track your expiration date and file your renewal application with enough lead time for USCIS processing.",
      sections: [
        {
          title: "Renewal Eligibility",
          body: "To renew DACA, you must continue to meet the original eligibility criteria and not have departed the U.S. without advance parole since your last approval.",
          items: [
            "Continuous residence since last DACA approval",
            "No felony, significant misdemeanor, or three+ misdemeanors",
            "No departure from the U.S. without advance parole",
            "At least 15 years old at time of initial request",
          ],
        },
        {
          title: "Forms We File",
          body: "DACA renewal involves two forms filed together. We ensure both are complete and consistent.",
          items: [
            "I-821D Consideration of Deferred Action",
            "I-765 Application for Employment Authorization",
            "Updated biographic information and evidence",
            "Filing fee or fee exemption documentation",
          ],
        },
        {
          title: "Timing Your Renewal",
          body: "USCIS recommends filing 120 to 150 days before your current DACA expiration. Filing too early or too late can create gaps in protection. We calendar your deadline and file at the optimal time.",
        },
      ],
      cta: "Renew Your DACA Status",
      formType: "daca",
    },
    "e2-investment-visa": {
      eyebrow: "Treaty Investor Visa",
      headline: "Invest in America. Build Your Business. Live Your Dream.",
      lead: "The E-2 treaty investor visa allows nationals of treaty countries to enter the U.S. to develop and direct a business in which they have invested a substantial amount of capital. We advise entrepreneurs and investors on eligibility, business structure, and visa application strategy.",
      sections: [
        {
          title: "E-2 Eligibility Criteria",
          body: "E-2 visas are available only to nationals of countries that maintain a treaty of commerce and navigation with the United States. Both the investment and the business must meet specific requirements.",
          items: [
            "National of a treaty country",
            "Substantial investment at risk in a real operating enterprise",
            "Investment must not be marginal (must generate more than minimal living)",
            "Applicant must develop and direct the enterprise",
          ],
        },
        {
          title: "Business Planning",
          body: "A strong E-2 application requires a detailed business plan demonstrating how your investment will create jobs and generate profit. We review your business concept and investment structure.",
          items: [
            "Five-year business plan preparation guidance",
            "Investment source documentation",
            "Entity formation and ownership structure",
            "Job creation projections",
          ],
        },
        {
          title: "Visa Application & Renewal",
          body: "E-2 visas are typically issued for up to five years and can be renewed indefinitely as long as the business remains operational and the investment is maintained.",
        },
      ],
      cta: "Explore E-2 Options",
      formType: "e2",
    },
    "b1-b2-renewal": {
      eyebrow: "Visitor Visas",
      headline: "Return to the United States for Business or Pleasure",
      lead: "B-1 business visitor and B-2 tourist visas allow temporary travel to the United States. Whether you need to renew an expired visa or apply for a new one, we guide you through the DS-160 application and consular interview process.",
      sections: [
        {
          title: "B-1 Business Visitor",
          body: "The B-1 visa permits temporary travel for business activities such as meetings, conferences, and contract negotiations — but not employment in the United States.",
          items: [
            "Business meetings and consultations",
            "Conference and convention attendance",
            "Estate or contract negotiations",
            "Short-term training (unpaid)",
          ],
        },
        {
          title: "B-2 Tourist Visitor",
          body: "The B-2 visa covers tourism, visiting family, medical treatment, and participation in social events. Many applicants receive a combined B-1/B-2 visa.",
          items: [
            "Tourism and vacation travel",
            "Visiting family and friends",
            "Medical treatment in the U.S.",
            "Participation in social or service activities",
          ],
        },
        {
          title: "Renewal Strategy",
          body: "Visa renewal often qualifies for interview waiver programs depending on your country and visa history. We determine whether you can renew by mail or must attend an in-person consular interview.",
        },
      ],
      cta: "Discuss Your Visitor Visa",
      formType: "b1b2",
    },
  };

  return content[slug];
}
