import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import ContactContent from "./ContactContent";

export const metadata: Metadata = pageMetadata({
  title: "Contact Our Mystic, CT Immigration Office",
  description:
    "Contact the Law Office of Jacquelyn R. Goncalves in Mystic, Connecticut. Call, email, or book an in-person or video immigration consultation. Se habla español; fala-se português.",
  path: "/contact",
  keywords: [
    "contact immigration lawyer",
    "Mystic CT immigration office",
    "immigration attorney Connecticut contact",
    "book immigration consultation",
  ],
});

export default function ContactPage() {
  return <ContactContent />;
}
