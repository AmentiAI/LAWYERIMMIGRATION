import {
  buildLlmsSection,
  isLlmsSection,
  LLMS_SECTIONS,
  plainTextResponse,
} from "@/lib/llms";

export const dynamic = "force-static";

type Props = {
  params: Promise<{ section: string }>;
};

export function generateStaticParams() {
  return LLMS_SECTIONS.map((section) => ({ section: `${section}.md` }));
}

export async function GET(_request: Request, { params }: Props) {
  const { section: sectionParam } = await params;
  const slug = sectionParam.replace(/\.md$/i, "");

  if (!isLlmsSection(slug)) {
    return new Response("Not found", { status: 404 });
  }

  return plainTextResponse(buildLlmsSection(slug));
}
