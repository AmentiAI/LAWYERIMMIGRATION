import { buildLlmsFullTxt, plainTextResponse } from "@/lib/llms";

export const dynamic = "force-static";

export function GET() {
  return plainTextResponse(buildLlmsFullTxt());
}
