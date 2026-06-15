import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact the Law Office of Jacquelyn R Goncalves LLC in Mystic, Connecticut. Phone, email, office hours, and directions.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
