export const siteConfig = {
  name: "Law Office of Jacquelyn R Goncalves LLC",
  shortName: "Goncalves Immigration Law",
  tagline: "Compassionate Immigration Advocacy in Mystic, Connecticut",
  description:
    "Expert immigration legal services in Mystic, CT. Family-based petitions, green cards, citizenship, asylum, and deportation defense. Schedule your consultation today.",
  url: "https://goncalvesimmigration.com",
  phone: "(860) 555-0142",
  email: "info@goncalvesimmigration.com",
  address: {
    street: "15 Water Street, Suite 200",
    city: "Mystic",
    state: "CT",
    zip: "06355",
    full: "15 Water Street, Suite 200, Mystic, CT 06355",
  },
  hours: {
    weekdays: "Monday – Friday: 9:00 AM – 5:00 PM",
    saturday: "Saturday: By Appointment",
    sunday: "Sunday: Closed",
  },
  social: {
    linkedin: "https://linkedin.com",
    facebook: "https://facebook.com",
  },
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/attorney", label: "Attorney" },
  { href: "/practice-areas", label: "Practice Areas" },
  { href: "/consultation", label: "Consultation" },
  { href: "/contact", label: "Contact" },
];

export const practiceAreas = [
  {
    id: "family-immigration",
    title: "Family-Based Immigration",
    shortDescription:
      "Reuniting families through petitions for spouses, children, parents, and siblings.",
    description:
      "We guide families through the complex process of bringing loved ones to the United States. From fiancé visas to adjustment of status, we handle every step with care and precision.",
    icon: "Heart",
    services: [
      "Marriage-based green cards (I-130/I-485)",
      "Fiancé visas (K-1)",
      "Parent and sibling petitions",
      "Conditional residence removal (I-751)",
      "Waivers of inadmissibility",
    ],
  },
  {
    id: "employment",
    title: "Employment Immigration",
    shortDescription:
      "Work visas and employment-based green cards for professionals and businesses.",
    description:
      "Whether you are an employer seeking talent or a professional pursuing opportunities in the U.S., we navigate H-1B, L-1, O-1, and PERM labor certification processes.",
    icon: "Briefcase",
    services: [
      "H-1B specialty occupation visas",
      "L-1 intracompany transfers",
      "O-1 extraordinary ability visas",
      "PERM labor certification",
      "EB-1, EB-2, and EB-3 green cards",
    ],
  },
  {
    id: "citizenship",
    title: "Citizenship & Naturalization",
    shortDescription:
      "Helping permanent residents achieve the dream of U.S. citizenship.",
    description:
      "We prepare you thoroughly for naturalization, addressing eligibility requirements, English and civics testing, and any complications in your immigration history.",
    icon: "Flag",
    services: [
      "N-400 naturalization applications",
      "Citizenship through parents",
      "Certificate of citizenship (N-600)",
      "Interview preparation",
      "Denial appeals and motions",
    ],
  },
  {
    id: "asylum",
    title: "Asylum & Humanitarian Relief",
    shortDescription:
      "Protection for those fleeing persecution and seeking safety in America.",
    description:
      "We represent individuals seeking asylum, withholding of removal, and protection under the Convention Against Torture, as well as VAWA, U visas, and T visas for victims of crime and trafficking.",
    icon: "Shield",
    services: [
      "Affirmative and defensive asylum",
      "Withholding of removal",
      "VAWA self-petitions",
      "U visas for crime victims",
      "T visas for trafficking survivors",
    ],
  },
  {
    id: "deportation",
    title: "Deportation Defense",
    shortDescription:
      "Aggressive representation before immigration courts and ICE.",
    description:
      "When your future is at stake, you need a skilled advocate. We defend against removal proceedings, pursue cancellation of removal, and seek prosecutorial discretion.",
    icon: "Scale",
    services: [
      "Removal defense in immigration court",
      "Cancellation of removal",
      "Bond hearings",
      "Appeals to the BIA and federal courts",
      "Prosecutorial discretion requests",
    ],
  },
  {
    id: "adjustment",
    title: "Adjustment of Status & Consular Processing",
    shortDescription:
      "Navigating the path from visa to permanent residence.",
    description:
      "We manage both adjustment of status applications within the U.S. and consular processing abroad, ensuring every form and document meets USCIS and Department of State requirements.",
    icon: "FileCheck",
    services: [
      "I-485 adjustment of status",
      "Consular immigrant visa processing",
      "Advance parole travel documents",
      "Employment authorization (EAD)",
      "Medical exam coordination",
    ],
  },
];

export const testimonials = [
  {
    quote:
      "Attorney Goncalves guided our family through a complex green card process with patience and expertise. We are forever grateful.",
    author: "Maria S.",
    location: "New London, CT",
  },
  {
    quote:
      "Professional, knowledgeable, and truly caring. She explained every step in terms we could understand and fought for our case.",
    author: "Ahmed K.",
    location: "Groton, CT",
  },
  {
    quote:
      "After years of uncertainty, we finally have our citizenship thanks to Jacquelyn. I recommend her without hesitation.",
    author: "Elena R.",
    location: "Mystic, CT",
  },
];

export const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "500+", label: "Cases Handled" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "2", label: "Languages Spoken" },
];

export const faqs = [
  {
    question: "How much does an immigration consultation cost?",
    answer:
      "We offer an initial consultation to evaluate your case and discuss options. Consultation fees vary based on case complexity. Contact our office for current rates and to schedule your appointment.",
  },
  {
    question: "How long does the immigration process take?",
    answer:
      "Processing times vary significantly depending on the type of application, your country of origin, and current USCIS backlogs. During your consultation, we provide realistic timelines based on your specific situation.",
  },
  {
    question: "Do you handle cases outside of Connecticut?",
    answer:
      "Yes. U.S. immigration law is federal, so we represent clients nationwide. While our office is in Mystic, we work with clients across Connecticut, New England, and throughout the United States.",
  },
  {
    question: "What should I bring to my first consultation?",
    answer:
      "Bring any immigration documents you have — passports, visas, prior applications, court notices, and correspondence from USCIS or ICE. Even if you're unsure what's relevant, we'll review everything together.",
  },
];
