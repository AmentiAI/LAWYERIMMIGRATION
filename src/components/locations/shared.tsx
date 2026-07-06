/**
 * Shared utilities for the local SEO landing pages. The visual body of every
 * page is bespoke; this only provides the FAQ accordion, which also emits
 * FAQPage structured data so each question is eligible for rich results.
 */

export interface FaqItem {
  q: string;
  a: string;
}

export function LocalFaq({
  heading,
  items,
  accent = "text-olive-700",
}: {
  heading: string;
  items: FaqItem[];
  accent?: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <section className="py-14 sm:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-olive-950 mb-8 text-center">
          {heading}
        </h2>
        <div className="space-y-3">
          {items.map((item) => (
            <details
              key={item.q}
              className="group bg-white rounded-xl border border-tan-200 overflow-hidden"
            >
              <summary className="cursor-pointer p-4 sm:p-5 font-semibold text-olive-950 hover:bg-tan-50 list-none flex justify-between items-start gap-3 text-sm sm:text-base">
                <span className="text-left">{item.q}</span>
                <span className={`${accent} group-open:rotate-45 transition-transform text-xl ml-4 shrink-0`}>
                  +
                </span>
              </summary>
              <div className="px-4 sm:px-5 pb-5 text-slate-700 leading-relaxed text-sm sm:text-base">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
