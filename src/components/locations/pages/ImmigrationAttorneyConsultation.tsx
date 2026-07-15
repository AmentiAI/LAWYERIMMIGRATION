import Link from "next/link";
import { Video, MapPin, ListChecks, Phone } from "lucide-react";
import { siteConfig, consultationFees } from "@/lib/constants";

const happens = [
  { n: "1", t: "You share your story", d: "We start with where you are — your status, your goals, and what brought you here." },
  { n: "2", t: "We review your options", d: "The attorney walks through the realistic paths, the forms involved, and the likely timeline." },
  { n: "3", t: "You get a clear plan", d: "You leave knowing the recommended next step, what it costs, and how long it should take." },
];

const prepare = [
  "Any letters or receipts you have received from USCIS",
  "Passports, visas, and current immigration documents",
  "Dates that matter — entries, filings, marriages",
  "The questions weighing on you most",
];

export default function ImmigrationAttorneyConsultation() {
  return (
    <div className="bg-white">
      <section className="page-header-offset pb-16 sm:pb-20 bg-olive-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-olive-700 font-semibold text-sm mb-4 uppercase tracking-wide">
            Immigration Attorney Consultation
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-olive-950 mb-6 leading-tight">
            What to Expect From Your Consultation
          </h1>
          <p className="text-slate-700 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto">
            {"A consultation is where uncertainty turns into a plan. Meet directly with Attorney Goncalves — in person in Mystic or by secure video — and get real answers about your immigration case."}
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-olive-950 mb-10 text-center">
            Two Ways to Consult
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {consultationFees.map((fee) => (
              <div key={fee.title} className="rounded-2xl border-2 border-olive-200 p-7 hover:border-olive-500 transition-colors">
                <div className="flex items-baseline justify-between gap-3 mb-1">
                  <h3 className="font-serif text-xl font-bold text-olive-950">{fee.title}</h3>
                  <span className="font-serif text-2xl font-bold text-gold-600">{fee.price}</span>
                </div>
                <p className="text-xs uppercase tracking-wide text-olive-600 mb-3">
                  {fee.duration} · in person or video
                </p>
                <p className="text-slate-700 text-sm leading-relaxed">{fee.description}</p>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-6 mt-8 text-sm text-slate-600">
            <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-olive-700" /> In person, Mystic CT</span>
            <span className="inline-flex items-center gap-2"><Video className="h-4 w-4 text-olive-700" /> Secure video, anywhere</span>
          </div>
        </div>
      </section>

      <section className="py-16 bg-olive-950 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-3xl font-bold mb-12 text-center">
            What Happens During Your Consultation
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {happens.map((h) => (
              <div key={h.n} className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold-500 text-olive-950 font-bold text-lg">
                  {h.n}
                </div>
                <h3 className="font-semibold text-lg mb-2">{h.t}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{h.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-6">
            <ListChecks className="h-8 w-8 text-olive-700" />
            <h2 className="font-serif text-3xl font-bold text-olive-950">How to Prepare</h2>
          </div>
          <ul className="grid sm:grid-cols-2 gap-3">
            {prepare.map((p) => (
              <li key={p} className="rounded-xl bg-cream-50 border border-tan-200 p-4 text-slate-800 text-sm">
                {p}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 text-center bg-cream-50 border-t border-tan-200">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-3xl font-bold text-olive-950 mb-6">
            Ready to Book Your Consultation?
          </h2>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/consultation" className="inline-flex items-center justify-center rounded-sm bg-olive-800 px-8 py-4 text-sm font-semibold text-white hover:bg-olive-900 transition-colors">
              Choose a Time
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
