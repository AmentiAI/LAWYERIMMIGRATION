import type { MetadataRoute } from "next";
import { keywordPagesList } from "@/lib/keyword-pages";
import { servicesList } from "@/lib/services";
import { getSiteUrl } from "@/lib/site-url";

const STATIC_ROUTES: {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/about", changeFrequency: "monthly", priority: 0.9 },
  { path: "/services", changeFrequency: "weekly", priority: 0.9 },
  { path: "/consultation", changeFrequency: "weekly", priority: 0.95 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.85 },
  { path: "/faq", changeFrequency: "monthly", priority: 0.8 },
  { path: "/immigration", changeFrequency: "weekly", priority: 0.75 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const lastModified = new Date();

  const staticEntries = STATIC_ROUTES.map(({ path, changeFrequency, priority }) => ({
    url: path === "/" ? siteUrl : `${siteUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));

  const serviceEntries = servicesList.map((service) => ({
    url: `${siteUrl}/services/${service.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const topicEntries = keywordPagesList.map((page) => ({
    url: `${siteUrl}/immigration/${page.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticEntries, ...serviceEntries, ...topicEntries];
}
