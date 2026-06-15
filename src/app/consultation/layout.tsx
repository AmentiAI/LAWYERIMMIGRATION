import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Schedule a Consultation",
  description:
    "Request a consultation with Attorney Jacquelyn R Goncalves for expert immigration legal advice in Mystic, Connecticut.",
};

export default function ConsultationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
