import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Now",
  description:
    "Request a consultation with Attorney Jacquelyn R. Goncalves for family-based immigration legal services in Connecticut.",
};

export default function ConsultationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
