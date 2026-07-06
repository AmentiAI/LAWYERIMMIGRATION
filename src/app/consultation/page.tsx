import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import ConsultationContent from "./ConsultationContent";

export const metadata: Metadata = pageMetadata({
  title: "Book an Immigration Consultation in Mystic, CT",
  description:
    "Schedule an in-person or video consultation with immigration attorney Jacquelyn R. Goncalves. Review your case, understand your options, and leave with a clear action plan.",
  path: "/consultation",
  keywords: [
    "book immigration consultation",
    "immigration lawyer consultation Mystic CT",
    "immigration attorney appointment Connecticut",
    "video immigration consultation",
  ],
});

export default function ConsultationPage() {
  return <ConsultationContent />;
}
