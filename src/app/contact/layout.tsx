import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description:
    "Contact the Law Offices of Jacquelyn R. Goncalves in Mystic, CT. Call (860) 471-3023 or email jr@jacquelynrgoncalveslaw.com.",
  path: "/contact",
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
