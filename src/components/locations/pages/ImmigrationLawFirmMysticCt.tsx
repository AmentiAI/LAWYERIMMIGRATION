import Link from "next/link";
import { Building2, Check, X, Mail, Phone, MapPin, Clock } from "lucide-react";
import { siteConfig } from "@/lib/constants";
import { LocalFaq } from "../shared";

const comparison = [
  { point: "Who handles your file", boutique: "The attorney, personally", big: "Rotating paralegals and staff" },
  { point: "Reaching your lawyer", boutique: "Direct line to the attorney", big: "Phone trees and ticket queues" },
  { point: "Fee structure", boutique: "Clear, flat, explained up front", big: "Layered and often opaque" },
  { point: "Knowledge of your story", boutique: "One person knows it all", big: "Repeated to each new contact" },
  { point: "Languages", boutique: "English, Spanish, Portuguese", big: "Varies by who answers" },
];

const pillars = [
  {
    title: "Family Immigration",
    items: ["I-130 relative petitions", "Marriage green cards", "K-1 fiancé visas", "Parent & sibling sponsorship"],
  },
  {
    title: "Status & Documents",
    items: ["Adjustment of status (I-485)", "Work permits (I-765)", "Green card renewals (I-90)", "Removal of conditions (I-751)"],
  },
  {
    title: "Citizenship & Business",
    items: ["Naturalization (N-400)", "Civics & interview prep", "LLC and investment matters", "Consular processing"],
  },
];

export default function ImmigrationLawFirmMysticCt() {
  return (
    <div className="bg-cream-50">
      {/* Hero */}
      <section className="page-header-offset pb-16 sm:pb-20 bg-olive-950 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <Building2 className="h-12 w-12 text-gold-400 mx-auto mb-6" />
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            A Boutique Immigration Law Firm in Mystic, CT
          </h1>
          <p className="text-white/80 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto mb-8">
            {"The Law Office of Jacquelyn R. Goncalves is built on a simple idea: immigration is too personal to be processed by an assembly line. We are a small, focused firm where your case gets the attention of a real attorney."}
          </p>
          <Link
            href="/consultation"
            className="inline-flex items-center justify-center rounded-sm bg-gold-500 px-8 py-4 text-sm font-semibold text-olive-950 hover:bg-gold-400 transition-colors"
          >
            Visit Our Mystic Office
          </Link>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-olive-950 mb-6">
            Small Firm, Serious Results
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            {"There is a reason families across New London County choose a boutique firm over a large, high-volume immigration mill. At a small practice, the attorney who meets you is the attorney who knows your case inside and out. Nothing slips through the cracks because there are no cracks — just one experienced lawyer accountable for every detail of your file."}
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            {"Our Mystic firm concentrates on family-based immigration because focus produces quality. Rather than dabbling in dozens of unrelated areas of law, we devote our practice to helping people reunite with loved ones, build a stable life in the United States, and ultimately become citizens. That concentration means we know the forms, the evidence standards, and the local USCIS and consular realities that shape your timeline."}
          </p>
          <p className="text-slate-700 leading-relaxed">
            {"And because we are local, you are not a case number in a distant office. You are a neighbor we will see again — at the grocery store, at a school event, around town. We take that responsibility seriously, and it shows in how we treat every client."}
          </p>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-16 bg-white border-y border-tan-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-3xl font-bold text-olive-950 mb-10 text-center">
            Boutique Firm vs. High-Volume Immigration Mill
          </h2>
          <div className="overflow-hidden rounded-2xl border border-tan-200">
            <div className="grid grid-cols-3 bg-olive-900 text-white text-sm font-semibold">
              <div className="p-4">What matters</div>
              <div className="p-4 bg-olive-800 text-center">Our Mystic firm</div>
              <div className="p-4 text-center text-white/70">Large mill</div>
            </div>
            {comparison.map((row, i) => (
              <div
                key={row.point}
                className={`grid grid-cols-3 text-sm ${i % 2 === 0 ? "bg-cream-50" : "bg-white"}`}
              >
                <div className="p-4 font-medium text-olive-950">{row.point}</div>
                <div className="p-4 text-center text-slate-700 flex items-center justify-center gap-2">
                  <Check className="h-4 w-4 text-olive-700 shrink-0" /> {row.boutique}
                </div>
                <div className="p-4 text-center text-slate-500 flex items-center justify-center gap-2">
                  <X className="h-4 w-4 text-red-400 shrink-0" /> {row.big}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service pillars */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-olive-950 mb-12 text-center">
            What Our Firm Covers
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map((p) => (
              <div key={p.title} className="bg-white rounded-2xl border border-tan-200 p-7">
                <h3 className="font-serif text-xl font-bold text-olive-950 mb-5">{p.title}</h3>
                <ul className="space-y-3">
                  {p.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                      <Check className="h-4 w-4 text-olive-700 mt-0.5 shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact card */}
      <section className="py-16 bg-olive-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-3xl font-bold mb-8 text-center">Find the Firm in Mystic</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="space-y-4">
              <p className="flex items-start gap-3 text-white/80 text-sm">
                <MapPin className="h-5 w-5 text-gold-400 shrink-0" /> {siteConfig.address.full}
              </p>
              <a href={`tel:${siteConfig.phone.replace(/\D/g, "")}`} className="flex items-center gap-3 text-white/80 text-sm hover:text-gold-400">
                <Phone className="h-5 w-5 text-gold-400 shrink-0" /> {siteConfig.phone}
              </a>
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 text-white/80 text-sm hover:text-gold-400 break-all">
                <Mail className="h-5 w-5 text-gold-400 shrink-0" /> {siteConfig.email}
              </a>
            </div>
            <div className="space-y-2 text-white/80 text-sm">
              <p className="flex items-center gap-3"><Clock className="h-5 w-5 text-gold-400 shrink-0" /> {siteConfig.hours.weekdays}</p>
              <p className="pl-8">{siteConfig.hours.saturday}</p>
              <p className="pl-8">{siteConfig.hours.sunday}</p>
            </div>
          </div>
        </div>
      </section>

      <LocalFaq
        heading="About Our Mystic Immigration Firm"
        items={[
          {
            q: "Is a boutique immigration firm right for my case?",
            a: "For most family-based immigration matters, a focused boutique firm offers a major advantage: direct, consistent attention from the attorney. If your case calls for specialized litigation outside our focus, we will tell you honestly and help point you in the right direction.",
          },
          {
            q: "Where is the firm located?",
            a: `Our office is at ${siteConfig.address.full}, in the heart of Mystic, with convenient access for clients throughout New London County and the Connecticut shoreline.`,
          },
          {
            q: "Does a small firm have the experience to handle my immigration case?",
            a: "Yes. The firm concentrates specifically on family-based immigration, citizenship, and related matters. That focused experience often produces better, more careful work than a generalist office juggling many unrelated practice areas.",
          },
          {
            q: "Can the firm help clients who do not live in Mystic?",
            a: "Absolutely. We serve clients statewide and nationwide through in-person meetings and secure video consultations, while keeping the personal, local feel of a hometown firm.",
          },
        ]}
      />

      <section className="py-16 bg-tan-100 border-t border-tan-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif text-3xl font-bold text-olive-950 mb-4">
            Put a Focused Firm in Your Corner
          </h2>
          <p className="text-slate-700 mb-8 leading-relaxed">
            {"Experience the difference of a firm where the attorney knows your name and your story. Schedule a consultation at our Mystic office."}
          </p>
          <Link
            href="/consultation"
            className="inline-flex items-center justify-center rounded-sm bg-olive-800 px-8 py-4 text-sm font-semibold text-white hover:bg-olive-900 transition-colors"
          >
            Schedule With Our Firm
          </Link>
        </div>
      </section>
    </div>
  );
}
