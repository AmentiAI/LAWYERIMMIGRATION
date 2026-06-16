import type { ComponentType } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Scale, FileText } from "lucide-react";
import { legalImages, type LegalImageKey } from "@/lib/images";
import { Button } from "@/components/Button";

export interface KeywordLayoutProps {
  eyebrow: string;
  headline: string;
  lead: string;
  sections: { title: string; body: string; items?: string[] }[];
  cta: string;
  imageKey: LegalImageKey;
  keyword: string;
  faq?: { q: string; a: string }[];
  relatedService?: string;
}

function KeywordCTA({
  cta,
  relatedService,
  dark,
}: {
  cta: string;
  relatedService?: string;
  dark?: boolean;
}) {
  return (
    <section
      className={`py-16 ${dark ? "bg-navy-950 border-t border-white/10" : "bg-cream-100 border-t border-cream-200"}`}
    >
      <div className="mx-auto max-w-3xl px-4 text-center">
        <p className={`mb-6 text-sm ${dark ? "text-white/60" : "text-slate-500"}`}>
          Direct representation by Attorney Jacquelyn R. Goncalves
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/consultation" size="lg">
            {cta}
          </Button>
          {relatedService && (
            <Link
              href={`/services/${relatedService}`}
              className={`inline-flex items-center justify-center gap-2 rounded-full border-2 px-6 py-3 text-sm font-semibold transition-colors ${
                dark
                  ? "border-white/30 text-white hover:bg-white/10"
                  : "border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white"
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

export function CertificateHeroLayout(props: KeywordLayoutProps) {
  const img = legalImages[props.imageKey];
  return (
    <div className="bg-cream-50">
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-20 right-10 text-[200px] font-serif text-navy-900/5 leading-none select-none">
          ♥
        </div>
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-3 py-1 bg-rose-100 text-rose-800 text-xs font-bold uppercase tracking-wider rounded-full mb-4">
              {props.eyebrow}
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-navy-900 mb-6">
              {props.headline}
            </h1>
            <p className="text-slate-600 text-lg leading-relaxed">{props.lead}</p>
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl ring-4 ring-gold-400/30">
            <Image src={img.src} alt={img.alt} fill className="object-cover" />
          </div>
        </div>
      </section>
      <SectionsAsQuotes sections={props.sections} />
      <KeywordCTA cta={props.cta} relatedService={props.relatedService} />
    </div>
  );
}

export function CardStackLayout(props: KeywordLayoutProps) {
  return (
    <div className="bg-navy-950 text-white min-h-screen">
      <section className="pt-32 pb-16 px-4 max-w-4xl mx-auto text-center">
        <p className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-4">
          {props.eyebrow}
        </p>
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
          {props.headline}
        </h1>
        <p className="text-white/70 text-lg">{props.lead}</p>
        <div className="flex justify-center gap-3 mt-10">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-24 h-16 rounded-lg bg-gradient-to-br from-teal-600 to-navy-800 border border-white/20 shadow-xl"
              style={{ transform: `rotate(${(i - 1) * 8}deg) translateY(${i * -4}px)` }}
            />
          ))}
        </div>
      </section>
      <section className="max-w-3xl mx-auto px-4 pb-16 space-y-6">
        {props.sections.map((s, i) => (
          <div key={s.title} className="bg-white/5 rounded-xl p-6 border border-white/10">
            <span className="text-gold-400 font-mono text-sm">0{i + 1}</span>
            <h2 className="font-serif text-xl font-bold mt-1 mb-3">{s.title}</h2>
            <p className="text-white/70 text-sm leading-relaxed">{s.body}</p>
            {s.items?.map((item) => (
              <p key={item} className="text-xs text-white/50 mt-2 pl-3 border-l border-teal-600">
                {item}
              </p>
            ))}
          </div>
        ))}
      </section>
      <KeywordCTA cta={props.cta} relatedService={props.relatedService} dark />
    </div>
  );
}

export function VisaJourneyLayout(props: KeywordLayoutProps) {
  const img = legalImages[props.imageKey];
  return (
    <div className="bg-white">
      <section className="pt-32 pb-12">
        <div className="mx-auto max-w-7xl px-4 text-center mb-12">
          <p className="text-teal-600 font-medium mb-2">{props.eyebrow}</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-navy-900 mb-4">
            {props.headline}
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto">{props.lead}</p>
        </div>
        <div className="relative h-48 max-w-4xl mx-auto mb-8">
          <Image src={img.src} alt={img.alt} fill className="object-cover rounded-2xl" />
        </div>
        <p className="text-center font-serif text-2xl font-bold text-olive-900 max-w-4xl mx-auto mb-16">
          90 Days to Marry
        </p>
        <div className="max-w-4xl mx-auto px-4 grid md:grid-cols-3 gap-6 pb-16">
          {props.sections.map((s, i) => (
            <div key={s.title} className="text-center">
              <div className="w-12 h-12 rounded-full bg-navy-900 text-gold-400 flex items-center justify-center mx-auto mb-4 font-bold">
                {i + 1}
              </div>
              <h2 className="font-serif font-bold text-navy-900 mb-2">{s.title}</h2>
              <p className="text-slate-600 text-sm">{s.body}</p>
            </div>
          ))}
        </div>
      </section>
      <KeywordCTA cta={props.cta} relatedService={props.relatedService} />
    </div>
  );
}

export function FormBannerLayout(props: KeywordLayoutProps) {
  return (
    <div className="bg-cream-50">
      <section className="bg-navy-900 pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-4 flex flex-col md:flex-row items-center gap-8">
          <div className="font-mono text-8xl md:text-9xl font-bold text-gold-400/20 leading-none">
            {props.keyword}
          </div>
          <div className="flex-1">
            <p className="text-teal-400 text-sm font-semibold mb-2">{props.eyebrow}</p>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
              {props.headline}
            </h1>
            <p className="text-white/70">{props.lead}</p>
          </div>
        </div>
      </section>
      <section className="py-16 max-w-4xl mx-auto px-4">
        {props.sections.map((s) => (
          <div key={s.title} className="mb-10 flex gap-6">
            <FileText className="h-8 w-8 text-teal-600 shrink-0 mt-1" />
            <div>
              <h2 className="font-serif text-2xl font-bold text-navy-900 mb-2">{s.title}</h2>
              <p className="text-slate-600 leading-relaxed mb-3">{s.body}</p>
              {s.items && (
                <ul className="space-y-1">
                  {s.items.map((item) => (
                    <li key={item} className="text-sm text-slate-700 flex gap-2">
                      <CheckCircle2 className="h-4 w-4 text-teal-600 shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </section>
      <KeywordCTA cta={props.cta} relatedService={props.relatedService} />
    </div>
  );
}

export function OathPrepLayout(props: KeywordLayoutProps) {
  const img = legalImages[props.imageKey];
  return (
    <div className="bg-white">
      <section className="relative pt-32">
        <div className="relative h-64 md:h-80">
          <Image src={img.src} alt={img.alt} fill className="object-cover" />
        </div>
        <div className="bg-tan-50 px-4 py-12">
          <div className="relative mx-auto max-w-4xl text-center">
            <p className="text-olive-600 text-sm font-bold uppercase tracking-widest mb-4">
              {props.eyebrow}
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-olive-900 mb-6">
              {props.headline}
            </h1>
            <p className="text-slate-600 text-lg">{props.lead}</p>
          </div>
        </div>
      </section>
      <section className="py-16 bg-cream-50">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          {props.sections.map((s) => (
            <div key={s.title} className="bg-white p-6 rounded-xl shadow-md">
              <h2 className="font-serif text-lg font-bold text-navy-900 mb-3 border-b border-gold-400 pb-2">
                {s.title}
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </section>
      <KeywordCTA cta={props.cta} relatedService={props.relatedService} />
    </div>
  );
}

export function StatusBridgeLayout(props: KeywordLayoutProps) {
  return (
    <div className="bg-cream-100">
      <section className="pt-32 pb-16 px-4 max-w-5xl mx-auto">
        <p className="text-teal-600 text-sm font-semibold mb-2">{props.eyebrow}</p>
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-navy-900 mb-6">
          {props.headline}
        </h1>
        <p className="text-slate-600 text-lg mb-12">{props.lead}</p>
        <div className="flex items-center justify-between gap-4 mb-16 overflow-x-auto pb-4">
          {["Nonimmigrant", "I-485 Filed", "Biometrics", "Interview", "Green Card"].map(
            (step, i) => (
              <div key={step} className="flex items-center gap-2 shrink-0">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${
                    i === 4 ? "bg-gold-500 text-navy-950" : "bg-navy-900 text-white"
                  }`}
                >
                  {i + 1}
                </div>
                <span className="text-xs font-medium text-slate-600 hidden sm:block">
                  {step}
                </span>
                {i < 4 && <ArrowRight className="h-4 w-4 text-slate-300" />}
              </div>
            )
          )}
        </div>
        {props.sections.map((s) => (
          <div key={s.title} className="bg-white rounded-2xl p-8 mb-6 shadow-sm">
            <h2 className="font-serif text-xl font-bold text-navy-900 mb-3">{s.title}</h2>
            <p className="text-slate-600 leading-relaxed">{s.body}</p>
          </div>
        ))}
      </section>
      <KeywordCTA cta={props.cta} relatedService={props.relatedService} />
    </div>
  );
}

export function SponsorGridLayout(props: KeywordLayoutProps) {
  return (
    <div className="bg-white">
      <section className="pt-32 pb-12 bg-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-teal-200 text-sm font-semibold mb-2">{props.eyebrow}</p>
          <h1 className="font-serif text-4xl font-bold mb-4">{props.headline}</h1>
          <p className="text-white/90">{props.lead}</p>
        </div>
      </section>
      <section className="py-16 max-w-5xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {["Primary Sponsor", "Joint Sponsor", "Household Member", "125% Poverty Guideline"].map(
            (label) => (
              <div
                key={label}
                className="border-2 border-dashed border-cream-200 rounded-xl p-6 text-center"
              >
                <p className="font-semibold text-navy-900">{label}</p>
              </div>
            )
          )}
        </div>
        {props.sections.map((s) => (
          <div key={s.title} className="mb-8">
            <h2 className="font-serif text-2xl font-bold text-navy-900 mb-2">{s.title}</h2>
            <p className="text-slate-600 leading-relaxed">{s.body}</p>
          </div>
        ))}
      </section>
      <KeywordCTA cta={props.cta} relatedService={props.relatedService} />
    </div>
  );
}

export function WorkBadgeLayout(props: KeywordLayoutProps) {
  return (
    <div className="bg-navy-900 min-h-screen text-white">
      <section className="pt-32 pb-16 px-4 max-w-4xl mx-auto">
        <div className="inline-block bg-gold-500 text-navy-950 font-bold px-4 py-2 rounded-lg text-sm mb-6">
          EMPLOYMENT AUTHORIZATION
        </div>
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">{props.headline}</h1>
        <p className="text-white/70 text-lg mb-12">{props.lead}</p>
        <p className="text-teal-400 text-sm mb-8">{props.eyebrow}</p>
        <div className="space-y-4">
          {props.sections.map((s) => (
            <details key={s.title} className="bg-white/5 rounded-xl border border-white/10">
              <summary className="cursor-pointer p-5 font-semibold list-none flex justify-between">
                {s.title}
                <span className="text-gold-400">+</span>
              </summary>
              <div className="px-5 pb-5 text-white/70 text-sm leading-relaxed">
                <p className="mb-3">{s.body}</p>
                {s.items?.map((item) => (
                  <p key={item} className="pl-3 border-l border-teal-600 mb-1">
                    {item}
                  </p>
                ))}
              </div>
            </details>
          ))}
        </div>
      </section>
      <KeywordCTA cta={props.cta} relatedService={props.relatedService} dark />
    </div>
  );
}

export function RenewalCycleLayout(props: KeywordLayoutProps) {
  return (
    <div className="bg-cream-50">
      <section className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-teal-600 font-semibold text-sm mb-2">{props.eyebrow}</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-navy-900 mb-6">
            {props.headline}
          </h1>
          <p className="text-slate-600 text-lg">{props.lead}</p>
        </div>
        <div className="flex justify-center mt-12">
          <div className="relative w-48 h-48">
            <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
              <circle cx="50" cy="50" r="45" fill="none" stroke="#ebe3d6" strokeWidth="8" />
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="#0d7377"
                strokeWidth="8"
                strokeDasharray="283"
                strokeDashoffset="70"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center flex-col">
              <span className="text-3xl font-bold text-navy-900">10</span>
              <span className="text-xs text-slate-500">Year Cycle</span>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-3xl mx-auto px-4 pb-16 space-y-6">
        {props.sections.map((s) => (
          <div key={s.title} className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="font-serif text-xl font-bold text-navy-900 mb-2">{s.title}</h2>
            <p className="text-slate-600 text-sm leading-relaxed">{s.body}</p>
          </div>
        ))}
      </section>
      <KeywordCTA cta={props.cta} relatedService={props.relatedService} />
    </div>
  );
}

export function CriminalReviewLayout(props: KeywordLayoutProps) {
  const img = legalImages[props.imageKey];
  return (
    <div className="bg-navy-950 text-white">
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 opacity-10">
          <Image src={img.src} alt="" fill className="object-cover" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-6">
            <Scale className="h-8 w-8 text-gold-400" />
            <span className="text-gold-400 text-sm font-semibold uppercase">
              {props.eyebrow}
            </span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">{props.headline}</h1>
          <p className="text-white/70 text-lg leading-relaxed">{props.lead}</p>
        </div>
      </section>
      <section className="max-w-4xl mx-auto px-4 pb-16">
        {props.sections.map((s, i) => (
          <div
            key={s.title}
            className={`mb-6 p-6 rounded-xl border ${
              i === 0
                ? "bg-red-950/30 border-red-500/30"
                : "bg-white/5 border-white/10"
            }`}
          >
            <h2 className="font-serif text-xl font-bold text-gold-400 mb-3">{s.title}</h2>
            <p className="text-white/70 leading-relaxed mb-3">{s.body}</p>
            {s.items?.map((item) => (
              <p key={item} className="text-sm text-white/50 py-1">
                ⚠ {item}
              </p>
            ))}
          </div>
        ))}
      </section>
      <KeywordCTA cta={props.cta} relatedService={props.relatedService} dark />
    </div>
  );
}

export function WaiverPathLayout(props: KeywordLayoutProps) {
  return (
    <div className="bg-white">
      <section className="pt-32 pb-12 border-b-4 border-gold-400">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-slate-500 text-sm font-medium mb-2">{props.eyebrow}</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-navy-900 mb-6">
            {props.headline}
          </h1>
          <p className="text-slate-600 text-lg">{props.lead}</p>
        </div>
      </section>
      <section className="py-16 max-w-4xl mx-auto px-4">
        <div className="grid gap-0 border border-cream-200 rounded-2xl overflow-hidden">
          {props.sections.map((s, i) => (
            <div
              key={s.title}
              className={`p-8 ${i % 2 === 0 ? "bg-cream-50" : "bg-white"}`}
            >
              <h2 className="font-serif text-xl font-bold text-navy-900 mb-3">{s.title}</h2>
              <p className="text-slate-600 leading-relaxed">{s.body}</p>
              {s.items && (
                <ul className="mt-4 space-y-2">
                  {s.items.map((item) => (
                    <li key={item} className="text-sm text-slate-700">
                      → {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>
      <KeywordCTA cta={props.cta} relatedService={props.relatedService} />
    </div>
  );
}

export function SpouseReunionLayout(props: KeywordLayoutProps) {
  const img = legalImages[props.imageKey];
  return (
    <div className="bg-cream-50">
      <section className="pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <p className="text-teal-600 font-semibold text-sm mb-2">{props.eyebrow}</p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-navy-900 mb-6">
              {props.headline}
            </h1>
            <p className="text-slate-600 text-lg leading-relaxed">{props.lead}</p>
          </div>
          <div className="lg:col-span-2 relative aspect-square rounded-full overflow-hidden ring-8 ring-teal-600/20">
            <Image src={img.src} alt={img.alt} fill className="object-cover" />
          </div>
        </div>
      </section>
      <SectionsAsQuotes sections={props.sections} />
      <KeywordCTA cta={props.cta} relatedService={props.relatedService} />
    </div>
  );
}

export function ChildrenPriorityLayout(props: KeywordLayoutProps) {
  return (
    <div className="bg-white">
      <section className="pt-32 pb-16 bg-gradient-to-b from-teal-50 to-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-teal-600 font-semibold text-sm mb-2">{props.eyebrow}</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-navy-900 mb-6">
            {props.headline}
          </h1>
          <p className="text-slate-600 text-lg">{props.lead}</p>
        </div>
      </section>
      <section className="py-12 max-w-5xl mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {["Under 21", "Adult Unmarried", "Married", "CSPA Protected"].map((cat) => (
            <div
              key={cat}
              className="bg-navy-900 text-white rounded-xl p-4 text-center text-sm font-semibold"
            >
              {cat}
            </div>
          ))}
        </div>
        {props.sections.map((s) => (
          <div key={s.title} className="mb-8 border-l-4 border-gold-400 pl-6">
            <h2 className="font-serif text-2xl font-bold text-navy-900 mb-2">{s.title}</h2>
            <p className="text-slate-600 leading-relaxed mb-3">{s.body}</p>
            {s.items?.map((item) => (
              <p key={item} className="text-sm text-slate-500">
                • {item}
              </p>
            ))}
          </div>
        ))}
      </section>
      <KeywordCTA cta={props.cta} relatedService={props.relatedService} />
    </div>
  );
}

export function ParentLineageLayout(props: KeywordLayoutProps) {
  return (
    <div className="bg-cream-100">
      <section className="pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-4">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="w-16 h-16 rounded-full bg-gold-500 flex items-center justify-center text-navy-950 font-bold text-xl mb-4">
              You
            </div>
            <div className="w-0.5 h-8 bg-navy-900" />
            <div className="flex gap-16">
              <div className="text-center">
                <div className="w-14 h-14 rounded-full bg-navy-900 text-white flex items-center justify-center text-sm mb-2 mx-auto">
                  Mom
                </div>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 rounded-full bg-navy-900 text-white flex items-center justify-center text-sm mb-2 mx-auto">
                  Dad
                </div>
              </div>
            </div>
          </div>
          <p className="text-teal-600 font-semibold text-sm text-center mb-2">
            {props.eyebrow}
          </p>
          <h1 className="font-serif text-4xl font-bold text-navy-900 text-center mb-6">
            {props.headline}
          </h1>
          <p className="text-slate-600 text-center text-lg">{props.lead}</p>
        </div>
      </section>
      <section className="max-w-3xl mx-auto px-4 pb-16 space-y-6">
        {props.sections.map((s) => (
          <div key={s.title} className="bg-white rounded-2xl p-8 shadow-md">
            <h2 className="font-serif text-xl font-bold text-navy-900 mb-3">{s.title}</h2>
            <p className="text-slate-600 leading-relaxed">{s.body}</p>
          </div>
        ))}
      </section>
      <KeywordCTA cta={props.cta} relatedService={props.relatedService} />
    </div>
  );
}

export function SiblingTimelineLayout(props: KeywordLayoutProps) {
  const img = legalImages[props.imageKey];
  return (
    <div className="bg-navy-900 text-white">
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-20">
          <Image src={img.src} alt="" fill className="object-cover" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4">
          <span className="inline-block px-3 py-1 bg-gold-500 text-navy-950 text-xs font-bold rounded mb-4">
            F4 PREFERENCE · LONG WAIT
          </span>
          <p className="text-teal-400 text-sm font-semibold mb-2">{props.eyebrow}</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">{props.headline}</h1>
          <p className="text-white/70 text-lg">{props.lead}</p>
        </div>
      </section>
      <section className="py-16 max-w-4xl mx-auto px-4">
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-1 bg-gold-400/30" />
          {props.sections.map((s, i) => (
            <div key={s.title} className="relative pl-12 pb-10">
              <div className="absolute left-2 w-5 h-5 rounded-full bg-gold-400 border-4 border-navy-900" />
              <span className="text-xs text-gold-400 font-mono">YEAR {i + 1}+</span>
              <h2 className="font-serif text-xl font-bold mt-1 mb-2">{s.title}</h2>
              <p className="text-white/60 text-sm leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </section>
      <KeywordCTA cta={props.cta} relatedService={props.relatedService} dark />
    </div>
  );
}

function SectionsAsQuotes({
  sections,
}: {
  sections: { title: string; body: string; items?: string[] }[];
}) {
  return (
    <section className="py-16 max-w-4xl mx-auto px-4 space-y-8">
      {sections.map((s) => (
        <blockquote
          key={s.title}
          className="border-l-4 border-teal-600 pl-6 py-2"
        >
          <h2 className="font-serif text-xl font-bold text-navy-900 mb-2">{s.title}</h2>
          <p className="text-slate-600 leading-relaxed italic">{s.body}</p>
          {s.items && (
            <ul className="mt-4 space-y-1 not-italic">
              {s.items.map((item) => (
                <li key={item} className="text-sm text-slate-700">
                  — {item}
                </li>
              ))}
            </ul>
          )}
        </blockquote>
      ))}
    </section>
  );
}

export function renderKeywordLayout(
  layout: string,
  props: KeywordLayoutProps
) {
  const map: Record<string, ComponentType<KeywordLayoutProps>> = {
    "certificate-hero": CertificateHeroLayout,
    "card-stack": CardStackLayout,
    "visa-journey": VisaJourneyLayout,
    "form-banner": FormBannerLayout,
    "oath-prep": OathPrepLayout,
    "status-bridge": StatusBridgeLayout,
    "sponsor-grid": SponsorGridLayout,
    "work-badge": WorkBadgeLayout,
    "renewal-cycle": RenewalCycleLayout,
    "criminal-review": CriminalReviewLayout,
    "waiver-path": WaiverPathLayout,
    "spouse-reunion": SpouseReunionLayout,
    "children-priority": ChildrenPriorityLayout,
    "parent-lineage": ParentLineageLayout,
    "sibling-timeline": SiblingTimelineLayout,
  };
  const Component = map[layout] || FormBannerLayout;
  return <Component {...props} />;
}
