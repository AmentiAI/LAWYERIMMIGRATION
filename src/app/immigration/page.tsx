import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/FadeIn";
import { CTASection } from "@/components/CTASection";
import { keywordPagesList } from "@/lib/keyword-pages";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Immigration Topics",
  description:
    "Immigration law guides — marriage petitions, I-130, I-485, N-400, fiancé visas, green cards, naturalization, and family petitions. Connecticut immigration attorney.",
  path: "/immigration",
});

export default function ImmigrationIndexPage() {
  const forms = keywordPagesList.filter((p) =>
    ["i-130", "n-400", "i-485", "i-864", "i-765", "i-90"].includes(p.slug)
  );
  const family = keywordPagesList.filter((p) =>
    [
      "marriage-petitions",
      "petition-for-spouse",
      "petition-for-children",
      "petition-for-parents",
      "petition-for-sibling",
      "fiance-visa",
      "green-card-petitions",
    ].includes(p.slug)
  );
  const special = keywordPagesList.filter(
    (p) => !forms.includes(p) && !family.includes(p)
  );

  return (
    <>
      <PageHero
        title="Immigration Law Topics & Forms"
        subtitle="In-depth guides on the immigration forms, petitions, and processes Attorney Goncalves handles for clients in Connecticut."
        breadcrumb={[{ label: "Immigration Topics" }]}
      />

      <section className="section-padding bg-cream-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
          <TopicGroup title="Family Petitions" pages={family} />
          <TopicGroup title="Immigration Forms" pages={forms} />
          <TopicGroup title="Specialized Cases" pages={special} />
        </div>
      </section>

      <CTASection />
    </>
  );
}

function TopicGroup({
  title,
  pages,
}: {
  title: string;
  pages: typeof keywordPagesList;
}) {
  return (
    <div>
      <FadeIn>
        <h2 className="font-serif text-2xl font-bold text-navy-900 mb-6">
          {title}
        </h2>
      </FadeIn>
      <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {pages.map((page) => (
          <StaggerItem key={page.slug}>
            <Link
              href={`/immigration/${page.slug}`}
              className="group block bg-white rounded-xl p-6 border border-cream-200 hover:border-teal-500/40 hover:shadow-lg transition-all"
            >
              <p className="text-xs font-semibold text-teal-600 uppercase tracking-wider mb-2">
                {page.keyword}
              </p>
              <h3 className="font-serif text-lg font-semibold text-navy-900 mb-2 group-hover:text-teal-700 transition-colors">
                {page.title}
              </h3>
              <p className="text-slate-600 text-sm line-clamp-2 mb-3">
                {page.shortDescription}
              </p>
              <span className="text-sm font-semibold text-teal-600 inline-flex items-center gap-1">
                Read guide <ArrowRight className="h-3 w-3" />
              </span>
            </Link>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  );
}
