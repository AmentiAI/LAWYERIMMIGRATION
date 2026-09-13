import { getSiteUrl } from "@/lib/site-url";

export const dynamic = "force-static";

const AI_BOTS = [
  "GPTBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Anthropic-AI",
  "Google-Extended",
  "PerplexityBot",
  "Applebot-Extended",
  "Bytespider",
  "CCBot",
  "meta-externalagent",
];

export function GET() {
  const siteUrl = getSiteUrl();

  const aiBlocks = AI_BOTS.map(
    (bot) =>
      `User-agent: ${bot}\nAllow: /\nAllow: /llms.txt\nAllow: /llms-full.txt\nAllow: /llms/\nDisallow: /admin/\nDisallow: /api/`
  ).join("\n\n");

  const body = `# ${siteUrl}
# LLM / AI discovery — https://llmstxt.org/
# Index:     ${siteUrl}/llms.txt
# Full text: ${siteUrl}/llms-full.txt
# Sections:  ${siteUrl}/llms/about.md , services.md , immigration.md , local.md , faq.md , consultation.md , testimonials.md

User-agent: *
Allow: /
Allow: /llms.txt
Allow: /llms-full.txt
Allow: /llms/
Disallow: /admin/
Disallow: /api/

${aiBlocks}

Sitemap: ${siteUrl}/sitemap.xml
Host: ${siteUrl}
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
