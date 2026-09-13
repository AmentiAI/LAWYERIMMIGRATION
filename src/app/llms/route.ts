import { LLMS_SECTIONS } from "@/lib/llms";
import { getSiteUrl } from "@/lib/site-url";
import { plainTextResponse } from "@/lib/llms";

export const dynamic = "force-static";

/** Directory listing for /llms — points crawlers at section markdown files. */
export function GET() {
  const base = getSiteUrl();
  const body = `# LLM content directory

> Machine-readable pages for AI systems. Prefer the index at ${base}/llms.txt.

## Files

- [${base}/llms.txt](${base}/llms.txt): Compact site index (llmstxt.org)
- [${base}/llms-full.txt](${base}/llms-full.txt): Full expanded content dump
${LLMS_SECTIONS.map(
  (s) => `- [${base}/llms/${s}.md](${base}/llms/${s}.md): ${s} section`
).join("\n")}
`;

  return plainTextResponse(body);
}
