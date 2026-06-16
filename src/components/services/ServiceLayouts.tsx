import type { ComponentType } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { legalImages, type LegalImageKey } from "@/lib/images";
import { Button } from "@/components/Button";

interface ServiceLayoutProps {
  eyebrow: string;
  headline: string;
  lead: string;
  sections: { title: string; body: string; items?: string[] }[];
  cta: string;
  imageKey: LegalImageKey;
}

export function SplitPanelLayout({
  eyebrow,
  headline,
  lead,
  sections,
  cta,
  imageKey,
}: ServiceLayoutProps) {
  const img = legalImages[imageKey];
  return (
    <div className="bg-cream-50">
      <section className="bg-navy-950 pt-32 pb-0">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <div className="pb-16">
              <p className="text-gold-400 text-sm font-semibold tracking-widest uppercase mb-4">
                {eyebrow}
              </p>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                {headline}
              </h1>
              <p className="text-white/70 text-lg leading-relaxed">{lead}</p>
            </div>
            <div className="relative h-72 lg:h-96 rounded-t-2xl overflow-hidden">
              <Image src={img.src} alt={img.alt} fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-8">
          {sections.map((section, i) => (
            <div
              key={section.title}
              className="bg-white rounded-2xl p-8 shadow-lg shadow-navy-950/5 border-t-4 border-teal-600"
              style={{ marginTop: i === 1 ? "2rem" : 0 }}
            >
              <h2 className="font-serif text-xl font-bold text-navy-900 mb-4">
                {section.title}
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                {section.body}
              </p>
              {section.items && (
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-slate-700"
                    >
                      <CheckCircle2 className="h-4 w-4 text-teal-600 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      <ServiceCTA cta={cta} />
    </div>
  );
}

export function TimelineLayout({
  eyebrow,
  headline,
  lead,
  sections,
  cta,
  imageKey,
}: ServiceLayoutProps) {
  const img = legalImages[imageKey];
  return (
    <div className="bg-white">
      <section className="relative pt-32 pb-20 bg-tan-50 overflow-hidden">
        <div className="absolute inset-0">
          <Image src={img.src} alt="" fill className="object-cover opacity-30" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-olive-100 text-olive-700 text-sm font-medium mb-6">
            {eyebrow}
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-olive-900 mb-6">
            {headline}
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed">{lead}</p>
        </div>
      </section>

      <section className="py-20 max-w-3xl mx-auto px-4 sm:px-6">
        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-teal-200" />
          {sections.map((section, i) => (
            <div key={section.title} className="relative pl-16 pb-12 last:pb-0">
              <div className="absolute left-3.5 w-5 h-5 rounded-full bg-teal-600 border-4 border-white shadow" />
              <div className="bg-cream-50 rounded-xl p-6">
                <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">
                  Phase {i + 1}
                </span>
                <h2 className="font-serif text-2xl font-bold text-navy-900 mt-1 mb-3">
                  {section.title}
                </h2>
                <p className="text-slate-600 leading-relaxed mb-3">
                  {section.body}
                </p>
                {section.items && (
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {section.items.map((item) => (
                      <li key={item} className="text-sm text-slate-700 flex gap-2">
                        <span className="text-gold-500">▸</span> {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
      <ServiceCTA cta={cta} />
    </div>
  );
}

export function PipelineLayout({
  eyebrow,
  headline,
  lead,
  sections,
  cta,
}: ServiceLayoutProps) {
  return (
    <div className="bg-cream-50">
      <section className="pt-32 pb-16 border-b border-cream-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-teal-600 font-semibold text-sm mb-3">{eyebrow}</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-navy-900 max-w-3xl mb-6">
            {headline}
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl leading-relaxed">{lead}</p>
        </div>
      </section>

      <section className="py-16 overflow-x-auto">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex gap-4 min-w-max lg:min-w-0 lg:grid lg:grid-cols-3">
            {sections.map((section, i) => (
              <div key={section.title} className="relative flex-1 min-w-[280px]">
                {i < sections.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-2 w-4 h-0.5 bg-gold-400 z-10" />
                )}
                <div className="bg-white rounded-2xl p-6 h-full border border-cream-200">
                  <div className="w-10 h-10 rounded-full bg-navy-900 text-gold-400 flex items-center justify-center font-bold mb-4">
                    {i + 1}
                  </div>
                  <h2 className="font-serif text-lg font-bold text-navy-900 mb-3">
                    {section.title}
                  </h2>
                  <p className="text-slate-600 text-sm leading-relaxed mb-3">
                    {section.body}
                  </p>
                  {section.items?.map((item) => (
                    <p key={item} className="text-xs text-slate-500 border-l-2 border-teal-500 pl-3 mb-2">
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ServiceCTA cta={cta} />
    </div>
  );
}

export function CountdownLayout({
  eyebrow,
  headline,
  lead,
  sections,
  cta,
  imageKey,
}: ServiceLayoutProps) {
  const img = legalImages[imageKey];
  return (
    <div className="bg-navy-950 text-white">
      <section className="pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gold-400 text-sm font-semibold uppercase tracking-wider mb-4">
              {eyebrow}
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              {headline}
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">{lead}</p>
            <div className="mt-10 flex gap-6">
              {["90", "60", "30"].map((days, i) => (
                <div key={days} className="text-center">
                  <div className="w-16 h-16 rounded-full border-2 border-gold-400 flex items-center justify-center font-serif text-xl font-bold text-gold-400">
                    {days}
                  </div>
                  <p className="text-xs text-white/50 mt-2">
                    {["Days before expiry", "Gather evidence", "File I-751"][i]}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-square rounded-2xl overflow-hidden">
            <Image src={img.src} alt={img.alt} fill className="object-cover opacity-80" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-navy-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
          {sections.map((section) => (
            <div
              key={section.title}
              className="grid md:grid-cols-2 gap-8 items-start border-b border-white/10 pb-8 last:border-0"
            >
              <h2 className="font-serif text-2xl font-bold text-gold-400">
                {section.title}
              </h2>
              <div>
                <p className="text-white/70 leading-relaxed mb-4">{section.body}</p>
                {section.items && (
                  <div className="flex flex-wrap gap-2">
                    {section.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 rounded-full bg-white/10 text-sm text-white/80"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
      <ServiceCTA cta={cta} dark />
    </div>
  );
}

export function MilestonesLayout({
  eyebrow,
  headline,
  lead,
  sections,
  cta,
  imageKey,
}: ServiceLayoutProps) {
  const img = legalImages[imageKey];
  return (
    <div className="bg-white">
      <section className="relative pt-32">
        <div className="relative h-64 md:h-96">
          <Image src={img.src} alt={img.alt} fill className="object-cover" />
        </div>
        <div className="bg-tan-50 px-4 py-12">
          <div className="relative mx-auto max-w-4xl text-center">
            <p className="text-olive-600 text-sm font-semibold uppercase tracking-widest mb-4">
              {eyebrow}
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-olive-900 mb-6">
              {headline}
            </h1>
            <p className="text-slate-600 text-lg">{lead}</p>
          </div>
        </div>
      </section>

      <section className="py-20 -mt-12 relative z-10">
        <div className="mx-auto max-w-5xl px-4 grid md:grid-cols-3 gap-6">
          {sections.map((section, i) => (
            <div
              key={section.title}
              className="bg-cream-50 rounded-2xl p-8 shadow-xl"
            >
              <div className="text-5xl font-serif font-bold text-teal-600/20 mb-2">
                0{i + 1}
              </div>
              <h2 className="font-serif text-xl font-bold text-navy-900 mb-3">
                {section.title}
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                {section.body}
              </p>
              {section.items?.map((item) => (
                <p key={item} className="text-xs text-slate-500 py-1 border-t border-cream-200">
                  ✓ {item}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>
      <ServiceCTA cta={cta} />
    </div>
  );
}

export function DualPathLayout({
  eyebrow,
  headline,
  lead,
  sections,
  cta,
}: ServiceLayoutProps) {
  return (
    <div className="bg-cream-100">
      <section className="pt-32 pb-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-teal-600 font-medium mb-3">{eyebrow}</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-navy-900 mb-6">
            {headline}
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">{lead}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {sections.map((section, i) => (
              <div
                key={section.title}
                className={`rounded-3xl p-10 ${
                  i === 0
                    ? "bg-navy-900 text-white"
                    : "bg-white border-2 border-navy-900"
                }`}
              >
                <span
                  className={`text-xs font-bold uppercase tracking-widest ${
                    i === 0 ? "text-gold-400" : "text-teal-600"
                  }`}
                >
                  {i === 0 ? "Stage One — United States" : "Stage Two — Abroad"}
                </span>
                <h2
                  className={`font-serif text-2xl font-bold mt-3 mb-4 ${
                    i === 0 ? "text-white" : "text-navy-900"
                  }`}
                >
                  {section.title}
                </h2>
                <p
                  className={`leading-relaxed mb-4 ${
                    i === 0 ? "text-white/70" : "text-slate-600"
                  }`}
                >
                  {section.body}
                </p>
                {section.items && (
                  <ul className="space-y-2">
                    {section.items.map((item) => (
                      <li
                        key={item}
                        className={`text-sm flex gap-2 ${
                          i === 0 ? "text-white/80" : "text-slate-700"
                        }`}
                      >
                        <ArrowRight className="h-4 w-4 shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
          {sections[2] && (
            <div className="mt-8 bg-gold-500 rounded-2xl p-8 text-center">
              <h2 className="font-serif text-2xl font-bold text-navy-950 mb-2">
                {sections[2].title}
              </h2>
              <p className="text-navy-900/80">{sections[2].body}</p>
            </div>
          )}
        </div>
      </section>
      <ServiceCTA cta={cta} />
    </div>
  );
}

export function ComparisonLayout({
  eyebrow,
  headline,
  lead,
  sections,
  cta,
}: ServiceLayoutProps) {
  return (
    <div className="bg-white">
      <section className="pt-32 pb-12 bg-navy-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-teal-400 text-sm font-semibold mb-3">{eyebrow}</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            {headline}
          </h1>
          <p className="text-white/60 max-w-2xl">{lead}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4 grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-2xl border border-cream-200">
          {sections.slice(0, 2).map((section, i) => (
            <div
              key={section.title}
              className={`p-10 ${i === 0 ? "bg-teal-600 text-white" : "bg-cream-50"}`}
            >
              <h2
                className={`font-serif text-2xl font-bold mb-4 ${
                  i === 0 ? "text-white" : "text-navy-900"
                }`}
              >
                {section.title}
              </h2>
              <p
                className={`leading-relaxed mb-6 ${
                  i === 0 ? "text-white/80" : "text-slate-600"
                }`}
              >
                {section.body}
              </p>
              {section.items?.map((item) => (
                <div
                  key={item}
                  className={`py-2 border-t text-sm ${
                    i === 0
                      ? "border-white/20 text-white/90"
                      : "border-cream-200 text-slate-700"
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>
          ))}
        </div>
        {sections[2] && (
          <div className="max-w-5xl mx-auto mt-8 p-8 bg-navy-900 rounded-2xl text-white">
            <h2 className="font-serif text-xl font-bold text-gold-400 mb-2">
              {sections[2].title}
            </h2>
            <p className="text-white/70">{sections[2].body}</p>
          </div>
        )}
      </section>
      <ServiceCTA cta={cta} />
    </div>
  );
}

export function StatusTrackerLayout({
  eyebrow,
  headline,
  lead,
  sections,
  cta,
}: ServiceLayoutProps) {
  const statuses = ["Valid", "Expiring Soon", "Expired", "Lost/Stolen"];
  return (
    <div className="bg-cream-50">
      <section className="pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-6">
            {statuses.map((s) => (
              <span
                key={s}
                className="px-3 py-1 rounded-full bg-white border border-cream-200 text-xs font-medium text-slate-600"
              >
                {s}
              </span>
            ))}
          </div>
          <p className="text-teal-600 font-semibold text-sm mb-2">{eyebrow}</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-navy-900 mb-6">
            {headline}
          </h1>
          <p className="text-slate-600 text-lg max-w-3xl">{lead}</p>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {sections.map((section, i) => (
            <div
              key={section.title}
              className="flex gap-6 mb-6 items-stretch"
            >
              <div className="w-1 bg-gradient-to-b from-teal-600 to-gold-400 rounded-full shrink-0" />
              <div className="flex-1 bg-white rounded-xl p-8 shadow-sm">
                <span className="text-xs text-slate-400 font-mono">
                  I-90 · Section {i + 1}
                </span>
                <h2 className="font-serif text-2xl font-bold text-navy-900 mt-1 mb-3">
                  {section.title}
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  {section.body}
                </p>
                {section.items && (
                  <div className="grid sm:grid-cols-2 gap-2">
                    {section.items.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 text-sm text-slate-700 bg-cream-50 rounded-lg px-3 py-2"
                      >
                        <CheckCircle2 className="h-4 w-4 text-teal-600" />
                        {item}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
      <ServiceCTA cta={cta} />
    </div>
  );
}

export function ConfidentialLayout({
  eyebrow,
  headline,
  lead,
  sections,
  cta,
}: ServiceLayoutProps) {
  return (
    <div className="bg-navy-950 min-h-screen">
      <section className="pt-32 pb-20 relative">
        <div className="relative mx-auto max-w-3xl px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-olive-100 border border-olive-200 text-olive-700 text-sm mb-8">
            🔒 Confidential Legal Representation
          </div>
          <p className="text-olive-600 text-sm font-semibold uppercase tracking-wider mb-4">
            {eyebrow}
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-olive-900 mb-6">
            {headline}
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed">{lead}</p>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-4xl px-4 space-y-6">
          {sections.map((section) => (
            <details
              key={section.title}
              className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
            >
              <summary className="cursor-pointer p-6 font-serif text-xl font-semibold text-white hover:bg-white/5 transition-colors list-none flex justify-between items-center">
                {section.title}
                <span className="text-gold-400 group-open:rotate-45 transition-transform text-2xl">
                  +
                </span>
              </summary>
              <div className="px-6 pb-6 text-white/70 leading-relaxed">
                <p className="mb-4">{section.body}</p>
                {section.items && (
                  <ul className="space-y-2">
                    {section.items.map((item) => (
                      <li key={item} className="text-sm text-white/60 pl-4 border-l border-teal-600">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </details>
          ))}
        </div>
      </section>
      <ServiceCTA cta={cta} dark />
    </div>
  );
}

export function RenewalStripLayout({
  eyebrow,
  headline,
  lead,
  sections,
  cta,
}: ServiceLayoutProps) {
  return (
    <div className="bg-white">
      <section className="pt-32 pb-0">
        <div className="bg-teal-600 py-3 overflow-hidden">
          <div className="flex animate-[shimmer_20s_linear_infinite] whitespace-nowrap text-white/90 text-sm font-medium">
            {Array(6)
              .fill("DACA Renewal · I-821D · I-765 · File 120–150 Days Before Expiration · ")
              .map((t, i) => (
                <span key={i} className="mx-8">
                  {t}
                </span>
              ))}
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <p className="text-teal-600 font-bold text-sm uppercase tracking-widest mb-3">
            {eyebrow}
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-navy-900 mb-6">
            {headline}
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl">{lead}</p>
        </div>
      </section>

      <section className="py-12 bg-cream-50">
        <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-3 gap-6">
          {sections.map((section, i) => (
            <div
              key={section.title}
              className="relative bg-white rounded-xl p-6 border-l-4"
              style={{
                borderLeftColor: ["#0d7377", "#c9a227", "#0f1f3d"][i],
              }}
            >
              <h2 className="font-serif text-lg font-bold text-navy-900 mb-3">
                {section.title}
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-3">
                {section.body}
              </p>
              {section.items?.map((item) => (
                <p key={item} className="text-xs text-slate-500 mb-1">
                  • {item}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>
      <ServiceCTA cta={cta} />
    </div>
  );
}

export function InvestmentGridLayout({
  eyebrow,
  headline,
  lead,
  sections,
  cta,
  imageKey,
}: ServiceLayoutProps) {
  const img = legalImages[imageKey];
  return (
    <div className="bg-navy-900">
      <section className="pt-32 pb-20 grid lg:grid-cols-2">
        <div className="px-8 lg:px-16 flex flex-col justify-center">
          <p className="text-gold-400 text-sm font-semibold mb-3">{eyebrow}</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
            {headline}
          </h1>
          <p className="text-white/70 text-lg leading-relaxed">{lead}</p>
        </div>
        <div className="relative min-h-[300px] lg:min-h-full">
          <Image src={img.src} alt={img.alt} fill className="object-cover" />
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-4">
          {sections.flatMap((s) => s.items || []).map((item) => (
            <div
              key={item}
              className="bg-white/5 border border-white/10 rounded-xl p-5 text-white/80 text-sm hover:bg-white/10 transition-colors"
            >
              <span className="text-gold-400 mr-2">◆</span>
              {item}
            </div>
          ))}
        </div>
        {sections.map((section) => (
          <div key={section.title} className="mt-12 border-t border-white/10 pt-8">
            <h2 className="font-serif text-2xl font-bold text-white mb-3">
              {section.title}
            </h2>
            <p className="text-white/60 leading-relaxed">{section.body}</p>
          </div>
        ))}
      </section>
      <ServiceCTA cta={cta} dark />
    </div>
  );
}

export function TravelCardsLayout({
  eyebrow,
  headline,
  lead,
  sections,
  cta,
  imageKey,
}: ServiceLayoutProps) {
  const img = legalImages[imageKey];
  return (
    <div className="bg-cream-50">
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block">
          <Image src={img.src} alt={img.alt} fill className="object-cover opacity-30" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-teal-600 font-semibold mb-3">{eyebrow}</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-navy-900 max-w-xl mb-6">
            {headline}
          </h1>
          <p className="text-slate-600 max-w-lg text-lg">{lead}</p>
        </div>
      </section>

      <section className="pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {sections.map((section, i) => (
            <div
              key={section.title}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div
                className="h-2"
                style={{
                  background: ["#0d7377", "#c9a227", "#0f1f3d"][i],
                }}
              />
              <div className="p-8">
                <span className="text-3xl mb-4 block">
                  {["💼", "✈️", "🔄"][i]}
                </span>
                <h2 className="font-serif text-xl font-bold text-navy-900 mb-3">
                  {section.title}
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {section.body}
                </p>
                {section.items?.map((item) => (
                  <p key={item} className="text-xs text-slate-500 border-t border-cream-100 py-2">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <ServiceCTA cta={cta} />
    </div>
  );
}

function ServiceCTA({ cta, dark }: { cta: string; dark?: boolean }) {
  return (
    <section
      className={`py-16 ${dark ? "bg-navy-950 border-t border-white/10" : "bg-white border-t border-cream-200"}`}
    >
      <div className="mx-auto max-w-3xl px-4 text-center">
        <p
          className={`mb-6 ${dark ? "text-white/70" : "text-slate-600"}`}
        >
          Work directly with Attorney Goncalves on your case.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/consultation" size="lg">
            {cta}
          </Button>
          <Link
            href="/services"
            className={`inline-flex items-center justify-center gap-2 text-sm font-semibold ${
              dark ? "text-gold-400 hover:text-gold-300" : "text-teal-600 hover:text-teal-500"
            }`}
          >
            View All Services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function renderServiceLayout(
  layout: string,
  props: ServiceLayoutProps
) {
  const map: Record<string, ComponentType<ServiceLayoutProps>> = {
    "split-panel": SplitPanelLayout,
    timeline: TimelineLayout,
    pipeline: PipelineLayout,
    countdown: CountdownLayout,
    milestones: MilestonesLayout,
    "dual-path": DualPathLayout,
    comparison: ComparisonLayout,
    "status-tracker": StatusTrackerLayout,
    confidential: ConfidentialLayout,
    "renewal-strip": RenewalStripLayout,
    "investment-grid": InvestmentGridLayout,
    "travel-cards": TravelCardsLayout,
  };
  const Component = map[layout] || SplitPanelLayout;
  return <Component {...props} />;
}
