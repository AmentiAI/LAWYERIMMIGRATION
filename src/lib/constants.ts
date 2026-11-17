export const siteConfig = {
  name: "Law Office of Jacquelyn R. Goncalves",
  shortName: "Law Office of Jacquelyn R. Goncalves",
  tagline:
    "Guiding Families Through the Immigration Process With Personal Care and Attention",
  subtagline:
    "Direct attorney support from start to finish for family-based immigration matters.",
  description:
    "Immigration lawyer serving Connecticut and clients worldwide. Family-based immigration, green cards, business and investment matters, and consultations in Mystic, CT.",
  url: "https://www.jacqlaw.com",
  phone: "(860) 471-3023",
  phoneAlt: "(860) 471-3032",
  email: "jr@jacquelynrgoncalveslaw.com",
  address: {
    street: "12 Roosevelt Ave, Ste 9B",
    city: "Mystic",
    state: "CT",
    zip: "06355",
    full: "12 Roosevelt Ave, Ste 9B, Mystic, CT 06355",
  },
  hours: {
    weekdays: "Monday – Friday: 9:00 AM – 6:00 PM",
    saturday: "Saturday: 9:00 AM – 2:00 PM",
    sunday: "Sunday: Closed",
  },
  serviceAreas: "Connecticut",
  languages: ["English", "Spanish", "Portuguese"],
  languagesNote: "Other languages available upon request.",
  /** Office coordinates (12 Roosevelt Ave, Mystic) for LocalBusiness schema. */
  geo: { latitude: 41.3509, longitude: -71.9619 },
  /**
   * Official third-party profiles, emitted as schema.org `sameAs` so AI
   * systems can tie listings to this firm. Add each URL once the profile is
   * claimed and shows immigration as the practice area; empty entries are
   * skipped.
   */
  profiles: {
    googleBusinessProfile: "",
    linkedinCompany: "",
    facebook: "",
    justia: "",
    avvo: "",
  },
};

/**
 * Attorney credentials shown on /about and in Person schema. Only filled-in
 * fields are rendered — leave a field empty rather than guessing.
 */
export const attorneyProfile = {
  name: "Jacquelyn R. Goncalves",
  jobTitle: "Immigration Attorney",
  image: "/images/attorney-goncalves.png",
  militaryService: "U.S. Navy veteran — six years of service",
  education: [
    { degree: "Juris Doctor (J.D.)", school: "" },
    { degree: "Master of Business Administration (MBA)", school: "" },
    { degree: "Bachelor's degree in English", school: "" },
  ],
  /** e.g. { jurisdiction: "Connecticut", year: "2015" } */
  barAdmissions: [] as { jurisdiction: string; year?: string }[],
  /** e.g. "American Immigration Lawyers Association (AILA)" */
  memberships: [] as string[],
  profiles: {
    linkedin: "",
    avvo: "",
    stateBarLookup: "",
  },
};

/**
 * Date the attorney last reviewed the legal content on /services and
 * /immigration pages. Update whenever pages are re-checked against current
 * USCIS rules; shown on-page and emitted as `dateModified`.
 */
export const CONTENT_LAST_REVIEWED = "2026-10-02";

/**
 * LawPay hosted payment pages.
 *
 * `operatingUrl` is the firm's general LawPay payment page (deposits to the
 * OPERATING account). On that page the payer confirms the amount themselves.
 *
 * To lock in fixed amounts per consultation length, create separate fixed-amount
 * payment links in the LawPay dashboard and paste them into `payLinks` below,
 * keyed by session length in minutes. Until a link is filled in, the button
 * falls back to `operatingUrl` and still works.
 */
export const lawpay = {
  operatingUrl:
    "https://secure.lawpay.com/pages/lawofficejacquelynrgoncalves/operating",
  payLinks: {
    "30": "", // $99 — General Overview Snapshot (30 min). Paste LawPay link here.
    "60": "", // $350 — Start Working on Your Case (1 hour). Paste LawPay link here.
  } as Record<string, string>,
};

/** Best LawPay link for a session length, falling back to the general page. */
export function getLawPayLink(durationMinutes: string | number): string {
  return lawpay.payLinks[String(durationMinutes)]?.trim() || lawpay.operatingUrl;
}

export const consultationFees = [
  {
    title: "General Overview Snapshot",
    minutes: 30,
    duration: "30 min",
    price: "$99",
    description:
      "A focused consultation — in person or by video — to review your situation and outline your options.",
  },
  {
    title: "Start Working on Your Case",
    minutes: 60,
    duration: "1 hour",
    price: "$350",
    description:
      "An in-depth consultation to begin case planning — in person or by video. Credited towards attorney fees if you retain our office.",
    credited: true,
  },
];

export const cancellationPolicy = {
  reschedule:
    "We will kindly reschedule you if necessary once.",
  rules: [
    "No show (30 min) — forfeiture of fee.",
    "No show (1 hr) → reschedule once → refund.",
  ],
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
  { href: "/consultation", label: "Book Now" },
];

export const testimonials = [
  {
    quote:
      "My experience with Jacquelyn during my naturalization process last year was incredibly smooth and efficient. From the moment she submitted my application, everything progressed rapidly — I had my interview scheduled just two months later, and the entire process took only three months to complete. I was amazed by the speed! Jacquelyn also ensured I had all the necessary resources to prepare for and pass the test. I'm really thankful for her support!",
    author: "CL",
    location: "Miami, FL",
  },
  {
    quote:
      "I had an amazing experience with Jacquelyn. From the beginning, the whole process was fast and incredibly smooth. She is professional, organized, and always available to answer my questions and guide me through every step. What could have been a stressful process felt easy because of her knowledge, attention to detail, and dedication. Everything was handled efficiently, and I always felt confident that my case was in good hands. I highly recommend her to anyone looking for an attorney who is trustworthy, responsive, and genuinely cares about their clients.",
    author: "AS",
    location: "Stuart, FL",
  },
];

export const faqs = [
  {
    question: "What immigration services do you offer?",
    answer:
      "We provide family-based immigration services for individuals and families navigating the U.S. immigration process — including green cards, marriage-based petitions, fiancé visas, adjustment of status, citizenship and naturalization, and other family immigration matters. We also handle consular processing for relatives abroad, work permit and green card renewals, DACA renewals, VAWA self-petitions, B-1/B-2 visitor visa renewals, and E-2 treaty investor visas for business owners. Every case is handled with personal attention and direct attorney involvement from start to finish.",
  },
  {
    question: "How do I start the immigration process?",
    answer:
      "The first step is scheduling a consultation to discuss your situation and immigration goals. Consultations are held in person at our Mystic office; video meetings are also available. During the consultation, Attorney Jacquelyn Goncalves will review your case, explain the process, answer your questions, and outline the next steps. Every immigration case is different, so getting personalized guidance early is important.",
  },
  {
    question: "Can you help with family-based immigration petitions?",
    answer:
      "Yes. Family-based immigration is one of our primary practice areas. We assist clients with petitions for spouses, children, parents, fiancés, and other qualifying family members. Our goal is to guide families through the immigration process as smoothly and clearly as possible.",
  },
  {
    question: "Do I need an attorney for my immigration case?",
    answer:
      "While you are not legally required to hire an attorney, immigration law can be complicated and mistakes can lead to delays, denials, or additional stress. Working with an immigration attorney can help ensure your paperwork is completed correctly and that you understand your options throughout the process.",
  },
  {
    question: "How much does an immigration consultation cost?",
    answer:
      "General Overview Snapshot — 30 min consultation: $99. Start Working on Your Case — 1 hour consultation: $350 (credited towards attorney fees if you retain our office). Consultations are in person at our Mystic office; video meetings are also available. During your consultation, you will receive personalized legal guidance, answers to your questions, and a better understanding of your available options and next steps.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "We will kindly reschedule you if necessary once. No show (30 min) — forfeiture of fee. No show (1 hr) → reschedule once → refund.",
  },
  {
    question: "What documents do I need for my immigration case?",
    answer:
      "The documents needed will depend on your specific immigration matter. Common documents may include passports, birth certificates, marriage certificates, immigration records, financial documents, and identification. During your consultation, we will explain exactly what documents are needed for your case.",
  },
  {
    question: "How long does the immigration process take?",
    answer:
      "It depends on the case type. Typical ranges we see: work permit (I-765) renewals 3–7 months; naturalization (N-400) 6–12 months from filing to oath; marriage-based green cards filed inside the U.S. 10–14 months; fiancé (K-1) petitions 8–14 months at USCIS before the consular stage; green card renewals (I-90) 8–14 months; and removal of conditions (I-751) 18–36 months. Consular cases add 8–18 months after the I-130 is approved. USCIS publishes current times by form and office at uscis.gov/processing-times, and we check your specific office at the start of every case.",
  },
  {
    question: "What languages do you speak?",
    answer:
      "We assist clients in English, Spanish, and Portuguese. Other languages are available upon request.",
  },
  {
    question: "Do you assist clients outside Connecticut?",
    answer:
      "Yes. We assist clients worldwide. U.S. immigration law is federal, so we represent clients across the United States and abroad for consular processing and other immigration matters.",
  },
  {
    question: "Will I work directly with the attorney?",
    answer:
      "Yes. Attorney Jacquelyn Goncalves personally handles every case and works directly with clients throughout the immigration process. Clients are never passed between multiple attorneys or staff members, allowing for consistent communication, personalized attention, and trusted guidance every step of the way.",
  },
];
