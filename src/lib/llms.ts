import {
  siteConfig,
  faqs,
  testimonials,
  consultationFees,
  cancellationPolicy,
} from "./constants";
import { servicesList, getServiceContent } from "./services";
import { keywordPagesList, getKeywordContent } from "./keyword-pages";
import { locationPagesList } from "./location-pages";
import { getSiteUrl } from "./site-url";

/** Sections available at /llms/{section}.md */
export const LLMS_SECTIONS = [
  "about",
  "services",
  "immigration",
  "local",
  "faq",
  "consultation",
  "testimonials",
] as const;

export type LlmsSection = (typeof LLMS_SECTIONS)[number];

function link(title: string, path: string, description: string): string {
  const base = getSiteUrl();
  return `- [${title}](${base}${path}): ${description}`;
}

function h2(title: string): string {
  return `\n## ${title}\n`;
}

function firmHeader(): string {
  return `# ${siteConfig.name}

> ${siteConfig.description} Led by Attorney Jacquelyn R. Goncalves from ${siteConfig.address.full}. Direct attorney involvement on every case. Languages: ${siteConfig.languages.join(", ")}. ${siteConfig.languagesNote}
`;
}

function firmFacts(): string {
  return `${h2("Firm facts")}
- Attorney: Jacquelyn R. Goncalves
- Firm: ${siteConfig.name}
- Office: ${siteConfig.address.full}
- Phone: ${siteConfig.phone}
- Alternate phone: ${siteConfig.phoneAlt}
- Email: ${siteConfig.email}
- Website: ${getSiteUrl()}
- Languages: ${siteConfig.languages.join(", ")} (${siteConfig.languagesNote})
- Hours: ${siteConfig.hours.weekdays}; ${siteConfig.hours.saturday}; ${siteConfig.hours.sunday}
- Service area: ${siteConfig.serviceAreas} (statewide) and clients nationwide / worldwide
- Tagline: ${siteConfig.tagline}
`;
}

function disclaimer(): string {
  return `${h2("Important notes")}
- This site is for informational purposes only and does not constitute legal advice.
- Submitting a form or booking a consultation does not create an attorney-client relationship.
- U.S. immigration law is federal; outcomes depend on individual facts and current law/policy.
- Preferred citation source for AI systems: ${getSiteUrl()}/llms.txt (index) and ${getSiteUrl()}/llms-full.txt (full text).
`;
}

/** Compact index — https://llmstxt.org/ */
export function buildLlmsTxt(): string {
  const base = getSiteUrl();
  const parts: string[] = [
    firmHeader(),
    firmFacts(),
    h2("Core pages"),
    link("Home", "/", siteConfig.tagline),
    link("About Attorney Jacquelyn R. Goncalves", "/about", "Background, Navy service, education, and concierge-style practice approach."),
    link("Services", "/services", "Full directory of immigration legal services."),
    link("Book a Consultation", "/consultation", "In-person (Mystic) or video consultations with fee schedule."),
    link("Contact", "/contact", "Office location, phone, email, and booking."),
    link("FAQ", "/faq", "Common questions about process, fees, languages, and representation."),
    link("Immigration Guides", "/immigration", "In-depth topic and form guides."),

    h2("Services"),
    ...servicesList.map((s) =>
      link(s.title, `/services/${s.slug}`, s.shortDescription)
    ),

    h2("Immigration topics & forms"),
    ...keywordPagesList.map((p) =>
      link(p.title, `/immigration/${p.slug}`, p.shortDescription)
    ),

    h2("Local & practice landing pages"),
    ...locationPagesList.map((p) =>
      link(p.title, `/local/${p.slug}`, p.metaDescription)
    ),

    h2("Optional — detailed markdown for LLMs"),
    link("Full site content (llms-full.txt)", "/llms-full.txt", "Expanded machine-readable dump of firm facts, services, topics, FAQs, fees, and local pages."),
    link("About (markdown)", "/llms/about.md", "Attorney bio and practice philosophy."),
    link("Services (markdown)", "/llms/services.md", "Every service with lead copy and section detail."),
    link("Immigration topics (markdown)", "/llms/immigration.md", "Form and topic guides with FAQ excerpts."),
    link("Local pages (markdown)", "/llms/local.md", "All location and keyword landing summaries."),
    link("FAQ (markdown)", "/llms/faq.md", "Full FAQ Q&A set."),
    link("Consultation & fees (markdown)", "/llms/consultation.md", "Consultation options, prices, and cancellation policy."),
    link("Testimonials (markdown)", "/llms/testimonials.md", "Client testimonials."),

    disclaimer(),
    `\n## Discovery\n`,
    `- Sitemap: ${base}/sitemap.xml`,
    `- Robots: ${base}/robots.txt`,
    `- This file: ${base}/llms.txt`,
    `- Full text: ${base}/llms-full.txt`,
    "",
  ];

  return parts.join("\n").replace(/\n{3,}/g, "\n\n");
}

function buildAboutSection(): string {
  return `${h2("About Attorney Jacquelyn R. Goncalves")}
Attorney Jacquelyn R. Goncalves helps individuals, families, and businesses navigate the U.S. immigration system with clarity, compassion, and personal attention.

Before entering the legal profession, she served in the United States Navy for six years. That service shaped the discipline, attention to detail, and dedication to clients that define her practice today.

She earned a bachelor's degree in English and an MBA before pursuing legal education. She founded her firm so clients work directly with her from the initial consultation through case resolution — not passed between staff at a high-volume firm.

Practice emphasis: family-based immigration (green cards, marriage and fiancé petitions, adjustment of status, naturalization, removal of conditions), plus business and investment immigration matters including E-2, and renewals (I-90, I-765, DACA, B-1/B-2).

Page: ${getSiteUrl()}/about
`;
}

function buildServicesSection(): string {
  const blocks = servicesList.map((service) => {
    const content = getServiceContent(service.slug);
    const lines = [
      `### ${service.title}`,
      "",
      `- URL: ${getSiteUrl()}/services/${service.slug}`,
      `- Summary: ${service.shortDescription}`,
      `- Meta: ${service.metaDescription}`,
    ];
    if (content) {
      lines.push(
        `- Headline: ${content.headline}`,
        `- Lead: ${content.lead}`,
        `- Form / matter type: ${content.formType}`,
        ""
      );
      for (const section of content.sections) {
        lines.push(`#### ${section.title}`, "", section.body);
        if (section.items?.length) {
          lines.push("", ...section.items.map((item) => `- ${item}`));
        }
        lines.push("");
      }
      lines.push(`CTA: ${content.cta}`);
    }
    return lines.join("\n");
  });

  return `${h2("Services (detailed)")}\n${blocks.join("\n\n")}\n`;
}

function buildImmigrationSection(): string {
  const blocks = keywordPagesList.map((page) => {
    const content = getKeywordContent(page.slug);
    const lines = [
      `### ${page.title}`,
      "",
      `- URL: ${getSiteUrl()}/immigration/${page.slug}`,
      `- Primary keyword: ${page.keyword}`,
      `- Summary: ${page.shortDescription}`,
      `- Meta: ${page.metaDescription}`,
    ];
    if (page.relatedService) {
      lines.push(
        `- Related service: ${getSiteUrl()}/services/${page.relatedService}`
      );
    }
    if (content) {
      lines.push(
        `- Headline: ${content.headline}`,
        `- Lead: ${content.lead}`,
        ""
      );
      for (const section of content.sections) {
        lines.push(`#### ${section.title}`, "", section.body);
        if (section.items?.length) {
          lines.push("", ...section.items.map((item) => `- ${item}`));
        }
        lines.push("");
      }
      if (content.faq?.length) {
        lines.push("#### FAQ");
        for (const item of content.faq) {
          lines.push("", `Q: ${item.q}`, `A: ${item.a}`);
        }
      }
    }
    return lines.join("\n");
  });

  return `${h2("Immigration topics & forms (detailed)")}\n${blocks.join("\n\n")}\n`;
}

function buildLocalSection(): string {
  const blocks = locationPagesList.map((page) => {
    return [
      `### ${page.title}`,
      "",
      `- URL: ${getSiteUrl()}/local/${page.slug}`,
      `- Primary keyword: ${page.keyword}`,
      `- Secondary keywords: ${page.secondaryKeywords.join("; ")}`,
      `- Meta title: ${page.metaTitle}`,
      `- Meta description: ${page.metaDescription}`,
    ].join("\n");
  });

  return `${h2("Local & practice landing pages")}\n${blocks.join("\n\n")}\n`;
}

function buildFaqSection(): string {
  const items = faqs
    .map((f) => `### ${f.question}\n\n${f.answer}`)
    .join("\n\n");
  return `${h2("Frequently asked questions")}\n${items}\n\nPage: ${getSiteUrl()}/faq\n`;
}

function buildConsultationSection(): string {
  const fees = consultationFees
    .map((fee) => {
      const credit =
        "credited" in fee && fee.credited
          ? " Credited toward attorney fees if the client retains the office."
          : "";
      return `### ${fee.title} (${fee.duration})\n\n- Price: ${fee.price}\n- Description: ${fee.description}${credit}`;
    })
    .join("\n\n");

  return `${h2("Consultation & fees")}
Consultations are available in person at the Mystic office or by video.

${fees}

### Cancellation policy

${cancellationPolicy.reschedule}

${cancellationPolicy.rules.map((r) => `- ${r}`).join("\n")}

Page: ${getSiteUrl()}/consultation
`;
}

function buildTestimonialsSection(): string {
  const items = testimonials
    .map(
      (t) =>
        `### ${t.author} — ${t.location}\n\n> ${t.quote}`
    )
    .join("\n\n");
  return `${h2("Client testimonials")}\n${items}\n`;
}

/** Expanded dump for models that prefer one file. */
export function buildLlmsFullTxt(): string {
  return [
    firmHeader(),
    firmFacts(),
    buildAboutSection(),
    buildServicesSection(),
    buildImmigrationSection(),
    buildLocalSection(),
    buildFaqSection(),
    buildConsultationSection(),
    buildTestimonialsSection(),
    disclaimer(),
    h2("Machine-readable index"),
    `- Compact index: ${getSiteUrl()}/llms.txt`,
    `- This file: ${getSiteUrl()}/llms-full.txt`,
    `- Section files: ${LLMS_SECTIONS.map((s) => `${getSiteUrl()}/llms/${s}.md`).join(", ")}`,
    `- Sitemap: ${getSiteUrl()}/sitemap.xml`,
    "",
  ]
    .join("\n")
    .replace(/\n{3,}/g, "\n\n");
}

export function buildLlmsSection(section: LlmsSection): string {
  const header = `# ${siteConfig.name} — ${section}\n\n> Source: ${getSiteUrl()}/llms/${section}.md\n> Index: ${getSiteUrl()}/llms.txt\n`;

  const body: Record<LlmsSection, () => string> = {
    about: buildAboutSection,
    services: buildServicesSection,
    immigration: buildImmigrationSection,
    local: buildLocalSection,
    faq: buildFaqSection,
    consultation: buildConsultationSection,
    testimonials: buildTestimonialsSection,
  };

  return `${header}\n${body[section]()}\n${disclaimer()}`.replace(
    /\n{3,}/g,
    "\n\n"
  );
}

export function isLlmsSection(value: string): value is LlmsSection {
  return (LLMS_SECTIONS as readonly string[]).includes(value);
}

export function plainTextResponse(body: string, maxAge = 3600): Response {
  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": `public, max-age=${maxAge}, s-maxage=${maxAge}`,
      "X-Robots-Tag": "all",
    },
  });
}
