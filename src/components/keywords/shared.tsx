import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/Button";

interface TopicFooterProps {
  cta: string;
  relatedService?: string;
  variant?: "light" | "dark" | "gold";
}

export function TopicFooter({
  cta,
  relatedService,
  variant = "light",
}: TopicFooterProps) {
  const bg =
    variant === "dark"
      ? "bg-olive-800 border-olive-700"
      : variant === "gold"
        ? "bg-olive-100 border-olive-200"
        : "bg-tan-100 border-tan-200";
  const text =
    variant === "gold" ? "text-olive-900" : variant === "dark" ? "text-white/80" : "text-slate-600";

  return (
    <section className={`py-12 sm:py-16 md:py-20 border-t ${bg}`}>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
        <p className={`mb-6 sm:mb-8 text-sm ${text}`}>
          Attorney Jacquelyn R. Goncalves personally handles every case — Connecticut and nationwide.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <Button href="/consultation" size="lg" variant={variant === "gold" ? "secondary" : "primary"} className="w-full sm:w-auto">
            {cta}
          </Button>
          {relatedService && (
            <Link
              href={`/services/${relatedService}`}
              className={`inline-flex items-center justify-center gap-2 rounded-sm border-2 px-6 sm:px-8 py-3.5 sm:py-4 text-sm font-semibold transition-colors w-full sm:w-auto ${
                variant === "dark"
                  ? "border-white/30 text-white hover:bg-white/10"
                  : "border-olive-800 text-olive-800 hover:bg-olive-800 hover:text-white"
              }`}
            >
              Related Service <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

export function FaqBlock({
  items,
  title = "Common Questions",
}: {
  items: { q: string; a: string }[];
  title?: string;
}) {
  return (
    <section className="py-12 sm:py-16">
      <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-black mb-6 sm:mb-8 text-center px-4">
        {title}
      </h2>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-3">
        {items.map((item) => (
          <details
            key={item.q}
            className="group bg-white rounded-xl border border-tan-200 overflow-hidden"
          >
            <summary className="cursor-pointer p-4 sm:p-5 font-semibold text-black hover:bg-tan-50 list-none flex justify-between items-start sm:items-center gap-3 text-sm sm:text-base">
              <span className="text-left">{item.q}</span>
              <span className="text-olive-700 group-open:rotate-45 transition-transform text-xl ml-4">
                +
              </span>
            </summary>
            <div className="px-5 pb-5 text-slate-800 leading-relaxed text-sm">
              {item.a}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}

export function DocChecklist({
  title,
  items,
  columns = 2,
}: {
  title: string;
  items: string[];
  columns?: 1 | 2;
}) {
  return (
    <div className="bg-white rounded-2xl p-5 sm:p-8 border border-tan-200">
      <h3 className="font-serif text-lg sm:text-xl font-bold text-black mb-4 sm:mb-6">{title}</h3>
      <ul
        className={`grid gap-3 ${columns === 2 ? "sm:grid-cols-2" : ""}`}
      >
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-slate-800">
            <span className="text-olive-700 font-bold shrink-0">✓</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
