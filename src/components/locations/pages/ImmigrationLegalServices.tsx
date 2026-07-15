import Link from "next/link";
import { ClipboardCheck, ShieldAlert, Languages, Phone } from "lucide-react";
import { siteConfig } from "@/lib/constants";
import { LocalFaq } from "../shared";

const included = [
  "A full review of your immigration history and eligibility",
  "Selecting the correct form, category, and filing strategy",
  "Preparing and assembling every petition and supporting document",
  "Drafting cover letters and legal arguments where they help",
  "Responding to Requests for Evidence and USCIS notices",
  "Preparing you for interviews and representing you throughout",
];

export default function ImmigrationLegalServices() {
  return (
    <div className="bg-white">
      <section className="page-header-offset pb-16 sm:pb-20 bg-cream-50 border-b border-tan-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-olive-700 font-semibold text-sm mb-4 uppercase tracking-wide">
            Immigration Legal Services
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-olive-950 mb-6 leading-tight">
            Immigration Legal Services You Can Rely On
          </h1>
          <p className="text-slate-700 text-lg sm:text-xl leading-relaxed max-w-3xl">
            {"Legal services mean more than filling in a form. They mean a licensed attorney standing between you and the mistakes that cost families years — with your case handled carefully from the first document to the final decision."}
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-olive-950 mb-10 text-center">
            What Our Legal Services Include
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {included.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border border-tan-200 p-5">
                <ClipboardCheck className="h-6 w-6 text-olive-700 shrink-0" />
                <span className="text-slate-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-olive-950 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-start gap-4 mb-6">
            <ShieldAlert className="h-10 w-10 text-gold-400 shrink-0" />
            <h2 className="font-serif text-3xl font-bold">
              Why a Licensed Attorney Matters
            </h2>
          </div>
          <p className="text-white/80 leading-relaxed mb-4">
            {"Immigration is one of the few areas where unlicensed “notarios” and document services prey on hopeful families. In the U.S., a notary is not a lawyer, and bad advice can lead to denials, fraud findings, or even removal."}
          </p>
          <p className="text-white/80 leading-relaxed">
            {"When you work with this office, you get an attorney who is accountable to you and to the bar — not a form shop. That accountability is the whole point of hiring legal representation."}
          </p>
          <div className="mt-8 inline-flex items-center gap-3 rounded-full bg-white/10 px-5 py-3">
            <Languages className="h-5 w-5 text-gold-400" />
            <span className="text-sm text-white/85">Service in English, Spanish, and Portuguese</span>
          </div>
        </div>
      </section>

      <LocalFaq
        heading="About Our Immigration Legal Services"
        items={[
          {
            q: "Is a notario or document preparer the same as a lawyer?",
            a: "No. In the United States a notary public cannot give legal advice or represent you before USCIS. Only a licensed attorney can advise you on strategy and speak for you on the record.",
          },
          {
            q: "Do you handle the whole case or just the paperwork?",
            a: "The whole case. From choosing the right filing to preparing you for the interview and answering USCIS, you have one attorney responsible throughout.",
          },
          {
            q: "What languages do you serve clients in?",
            a: "Consultations and case work are available in English, Spanish, and Portuguese, with other languages available on request so nothing is lost in translation.",
          },
        ]}
      />

      <section className="py-16 text-center bg-cream-50 border-t border-tan-200">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-3xl font-bold text-olive-950 mb-4">
            Get Legal Help You Can Trust
          </h2>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
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
