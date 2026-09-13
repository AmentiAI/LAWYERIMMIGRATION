import { buildLlmsTxt, plainTextResponse } from "@/lib/llms";

export const dynamic = "force-static";

export function GET() {
  return plainTextResponse(buildLlmsTxt());
}
