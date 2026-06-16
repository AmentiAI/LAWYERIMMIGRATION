import Link from "next/link";
import { Phone, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/Button";
import { siteConfig } from "@/lib/constants";

export function ServiceBanner({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead: string;
}) {
  return (
    <section className="bg-olive-800 page-header-offset pb-8 md:pb-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-olive-200 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-2 sm:mb-3">
          {eyebrow}
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight max-w-4xl mb-4 sm:mb-5 break-words">
          {title}
        </h1>
        <p className="text-white/85 text-lg sm:text-xl md:text-2xl leading-relaxed max-w-3xl">{lead}</p>
      </div>
    </section>
  );
}

export function ServiceIntro({ children }: { children: React.ReactNode }) {
  return (
    <section className="py-12 sm:py-16 bg-white border-b border-tan-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-slate-700 leading-relaxed space-y-4 text-lg sm:text-xl">
        {children}
      </div>
    </section>
  );
}

export function ServiceSection({
  title,
  subtitle,
  children,
  variant = "default",
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  variant?: "default" | "alt" | "banner";
}) {
  const bg =
    variant === "alt"
      ? "bg-tan-100"
      : variant === "banner"
        ? "bg-olive-800 text-white"
        : "bg-tan-50";
  const titleClass =
    variant === "banner" ? "text-white" : "text-olive-900";
  const subClass =
    variant === "banner" ? "text-white/75" : "text-slate-500";

  return (
    <section className={`py-12 sm:py-16 ${bg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`font-serif text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 ${titleClass}`}>
          {title}
        </h2>
        {subtitle && (
          <p className={`mb-8 sm:mb-10 max-w-3xl text-sm sm:text-base ${subClass}`}>{subtitle}</p>
        )}
        {children}
      </div>
    </section>
  );
}

export function ServiceFaq({
  title,
  items,
}: {
  title: string;
  items: { q: string; a: string }[];
}) {
  return (
    <section className="py-12 sm:py-16 bg-white border-t border-tan-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-olive-900 mb-6 sm:mb-8 text-center">
          {title}
        </h2>
        <div className="space-y-3">
          {items.map((item) => (
            <details
              key={item.q}
              className="group bg-tan-50 rounded-xl border border-tan-200 overflow-hidden"
            >
              <summary className="cursor-pointer p-4 sm:p-5 font-semibold text-olive-900 hover:bg-tan-100 list-none flex justify-between items-start sm:items-center gap-3 text-sm sm:text-base">
                <span className="text-left">{item.q}</span>
                <span className="text-olive-600 group-open:rotate-45 transition-transform text-xl shrink-0">
                  +
                </span>
              </summary>
              <p className="px-5 pb-5 text-slate-600 leading-relaxed text-sm">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServiceChecklist({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="bg-white rounded-2xl p-5 sm:p-8 border border-tan-200 shadow-sm">
      <h3 className="font-serif text-lg sm:text-xl font-bold text-olive-900 mb-4 sm:mb-6">{title}</h3>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
            <CheckCircle2 className="h-4 w-4 text-olive-600 shrink-0 mt-0.5" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ServiceFooter({
  heading,
  description,
  buttonLabel,
}: {
  heading: string;
  description: string;
  buttonLabel: string;
}) {
  return (
    <>
      <section className="py-10 sm:py-12 bg-olive-800">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-white mb-3">{heading}</h2>
          <p className="text-white/75 mb-6 text-sm sm:text-base">{description}</p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button
              href="/consultation"
              size="lg"
              className="!bg-white !text-olive-900 hover:!bg-tan-100 w-full sm:w-auto"
            >
              {buttonLabel}
            </Button>
            <a
              href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/40 px-6 sm:px-8 py-3.5 sm:py-4 text-white font-semibold hover:bg-white/10 transition-colors w-full sm:w-auto text-sm sm:text-base break-anywhere"
            >
              <Phone className="h-4 w-4" />
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>
      <section className="py-8 bg-white border-t border-tan-200 text-center">
        <Link
          href="/services"
          className="text-sm font-semibold text-olive-700 hover:text-olive-900"
        >
          ← Back to all services
        </Link>
      </section>
    </>
  );
}
