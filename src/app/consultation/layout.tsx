import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Book Now",
  description:
    "Request a consultation with Attorney Jacquelyn R. Goncalves for family-based and business immigration legal services. In-person meetings in Mystic, CT; video also available.",
  path: "/consultation",
});

export default function ConsultationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
