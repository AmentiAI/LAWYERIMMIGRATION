import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact the Law Offices of Jacquelyn R. Goncalves in Mystic, CT. Call (860) 471-3023 or email jr@jacquelynrgoncalveslaw.com.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
