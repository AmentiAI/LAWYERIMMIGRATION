import Link from "next/link";
import { CalendarClock, SearchX, RefreshCw, UserPen, Phone } from "lucide-react";
import { siteConfig } from "@/lib/constants";
import { LocalFaq } from "../shared";

const whenToFile = [
  { icon: CalendarClock, title: "Card expiring soon", body: "A 10-year green card should be renewed in the six months before it expires to avoid gaps in proof of status." },
  { icon: SearchX, title: "Lost or stolen card", body: "If your card was lost, stolen, or destroyed, Form I-90 replaces it so you always have valid evidence of residence." },
  { icon: UserPen, title: "Name or data change", body: "Legal name changes or errors on the card are corrected through a replacement application." },
  { icon: RefreshCw, title: "Old-version card", body: "Cards issued without an expiration date or in older formats should be replaced with a current version." },
];

const steps = [
  "Confirm you are filing I-90 (renewal) and not I-751 (removing conditions on a 2-year card).",
  "Gather your current card, identity documents, and any name-change records.",
  "Prepare and submit Form I-90 with the correct fee and evidence.",
  "Attend a biometrics appointment, then receive your new card by mail.",
];

export default function GreenCardRenewalLawyer() {
  return (
    <div className="bg-white">
      <section className="page-header-offset pb-16 sm:pb-20 bg-olive-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-olive-700 font-semibold text-sm mb-4 uppercase tracking-wide">
            Form I-90 · Green Card Renewal
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-olive-950 mb-6 leading-tight">
            Green Card Renewal, Done Right the First Time
          </h1>
          <p className="text-slate-700 text-lg sm:text-xl leading-relaxed max-w-3xl">
            {"An expiring green card does not put your residency at risk — but a mishandled renewal can put your proof of it on hold. Attorney Goncalves keeps your Form I-90 clean, correct, and on time."}
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-olive-950 mb-12 text-center">
            When to File for a Renewal or Replacement
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {whenToFile.map((w) => (
              <div key={w.title} className="flex gap-4 rounded-2xl border border-tan-200 p-6">
                <w.icon className="h-8 w-8 text-olive-700 shrink-0" />
                <div>
                  <h3 className="font-serif text-lg font-bold text-olive-950 mb-1">{w.title}</h3>
                  <p className="text-slate-700 text-sm leading-relaxed">{w.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-olive-950 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-3xl font-bold mb-4">Renewal vs. Replacement — Don't Mix Them Up</h2>
          <p className="text-white/80 leading-relaxed mb-4">
            {"Form I-90 renews a standard 10-year green card or replaces a lost, damaged, or outdated one. It is not the same as Form I-751, which removes the conditions on a 2-year marriage-based card."}
          </p>
          <p className="text-white/80 leading-relaxed">
            {"Filing the wrong form wastes fees and months. Part of our job is making sure you are on the right track before anything is submitted."}
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-3xl font-bold text-olive-950 mb-8">The Renewal Process, Step by Step</h2>
          <ol className="space-y-4">
            {steps.map((s, i) => (
              <li key={s} className="flex gap-4 items-start">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-olive-100 text-olive-800 font-bold text-sm">
                  {i + 1}
                </span>
                <span className="text-slate-800 pt-1">{s}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <LocalFaq
        heading="Green Card Renewal Questions"
        items={[
          {
            q: "Does my status end when my green card expires?",
            a: "No. Permanent residence does not expire — only the card does. But you need a valid card to prove your status for work and travel, so timely renewal matters.",
          },
          {
            q: "How early can I renew my green card?",
            a: "You can generally file Form I-90 within the six months before your card expires. If it has already expired, you should file as soon as possible.",
          },
          {
            q: "Do I need a lawyer for a green card renewal?",
            a: "Many renewals are straightforward, but an attorney makes sure you file the correct form, avoid errors that trigger delays, and handle complications like a name change or a prior card issue.",
          },
        ]}
      />

      <section className="py-16 text-center bg-cream-50 border-t border-tan-200">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-3xl font-bold text-olive-950 mb-6">
            Renew Your Green Card With Confidence
          </h2>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/consultation" className="inline-flex items-center justify-center rounded-sm bg-olive-800 px-8 py-4 text-sm font-semibold text-white hover:bg-olive-900 transition-colors">
              Book a Consultation
            </Link>
            <a href={`tel:${siteConfig.phone.replace(/\D/g, "")}`} className="inline-flex items-center justify-center gap-2 rounded-sm border-2 border-olive-800 px-8 py-4 text-sm font-semibold text-olive-800 hover:bg-olive-800 hover:text-white transition-colors">
              <Phone className="h-4 w-4" /> {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
