import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { attorneyProfile, CONTENT_LAST_REVIEWED } from "@/lib/constants";
import type { Source } from "@/lib/sources";

const reviewedLabel = new Date(`${CONTENT_LAST_REVIEWED}T12:00:00Z`).toLocaleDateString(
  "en-US",
  { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" }
);

/** Attorney byline, last-reviewed date, and official sources for a legal guide. */
export function ReviewedBy({ sources = [] }: { sources?: Source[] }) {
  return (
    <section className="bg-cream-50 border-t border-tan-200 py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="flex items-start gap-3 text-sm text-slate-700">
          <ShieldCheck className="h-5 w-5 mt-0.5 shrink-0 text-olive-700" />
          <p>
            Reviewed by{" "}
            <Link href="/about" className="font-semibold text-olive-900 underline hover:text-olive-700">
              Attorney {attorneyProfile.name}
            </Link>
            . Last reviewed{" "}
            <time dateTime={CONTENT_LAST_REVIEWED}>{reviewedLabel}</time>. Immigration rules,
            fees, and processing times change often; this page is general information, not
            legal advice for your case.
          </p>
        </div>
        {sources.length > 0 && (
          <div className="mt-6">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
              Official sources
            </h2>
            <ul className="space-y-1.5 text-sm">
              {sources.map((source) => (
                <li key={source.href}>
                  <a
                    href={source.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-olive-800 underline hover:text-olive-600"
                  >
                    {source.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
