import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/Button";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Page Not Found",
    description:
      "The page you requested could not be found. Return to the Law Office of Jacquelyn R. Goncalves immigration law website.",
    path: "/404",
  }),
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <section className="section-padding bg-tan-50 min-h-[60vh] flex items-center">
      <div className="mx-auto max-w-xl px-4 sm:px-6 text-center">
        <p className="law-eyebrow mb-3">404</p>
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-olive-900 mb-4">
          Page Not Found
        </h1>
        <p className="text-slate-600 leading-relaxed mb-8">
          The page you are looking for may have moved or no longer exists.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button href="/" variant="primary">
            Back to Home
          </Button>
          <Button href="/contact" variant="secondary">
            Contact Us
          </Button>
        </div>
        <p className="mt-8 text-sm text-slate-500">
          Looking for immigration help?{" "}
          <Link href="/services" className="text-olive-700 font-medium hover:underline">
            View our services
          </Link>{" "}
          or{" "}
          <Link href="/consultation" className="text-olive-700 font-medium hover:underline">
            book a consultation
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
