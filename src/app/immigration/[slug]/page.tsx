import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { keywordPagesList, getKeywordBySlug } from "@/lib/keyword-pages";
import { topicPageRegistry } from "@/components/keywords/registry";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return keywordPagesList.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getKeywordBySlug(slug);
  if (!page) return {};
  return {
    title: page.title,
    description: page.metaDescription,
    keywords: [page.keyword, page.title, "immigration attorney", "Mystic CT"],
  };
}

export default async function KeywordPage({ params }: Props) {
  const { slug } = await params;
  const page = getKeywordBySlug(slug);
  const TopicPage = topicPageRegistry[slug];

  if (!page || !TopicPage) notFound();

  return <TopicPage />;
}
