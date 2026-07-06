import Link from "next/link";
import { Scale, Globe2, Clock3, ShieldCheck, Quote } from "lucide-react";
import { LocalFaq } from "../shared";

const stats = [
  { figure: "1", label: "Attorney on every case — start to finish" },
  { figure: "3", label: "Languages: English, Spanish, Portuguese" },
  { figure: "$99", label: "Initial overview consultation" },
  { figure: "Mystic", label: "CT — your hometown immigration office" },
];

const practiceAreas = [
  {
    name: "Family-Based Petitions",
    detail: "Sponsoring a spouse, child, parent, or sibling for a green card through Form I-130 and the steps that follow.",
  },
  {
    name: "Marriage & Fiancé Cases",
    detail: "Marriage-based green cards and K-1 fiancé visas, including the relationship evidence USCIS expects to see.",
  },
  {
    name: "Adjustment of Status",
    detail: "Applying for permanent residence from inside the United States with Form I-485 and concurrent filings.",
  },
  {
    name: "Citizenship & Naturalization",
    detail: "Guiding lawful permanent residents through the N-400 application, interview, and oath of allegiance.",
  },
  {
    name: "Work & Travel Documents",
    detail: "Employment authorization (I-765), advance parole, and green card renewals and replacements.",
  },
  {
    name: "Business & Investment",
    detail: "LLC formation support, consular processing, and immigration matters tied to entrepreneurship.",
  },
];

export default function ImmigrationAttorneyMysticCt() {
  return (
    <div className="bg-white">
      {/* Centered hero */}
      <section className="page-header-offset pb-16 sm:pb-20 bg-gradient-to-b from-olive-50 to-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="uppercase tracking-[0.2em] text-olive-700 text-xs font-semibold mb-5">
            Mystic, Connecticut
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-olive-950 mb-6 leading-tight">
            A Dedicated Immigration Attorney in Mystic, CT
          </h1>
          <p className="text-slate-700 text-lg sm:text-xl leading-relaxed mb-8">
            {"Attorney Jacquelyn R. Goncalves represents immigrants and their families across southeastern Connecticut with the patience, precision, and personal attention that high-stakes immigration cases demand."}
          </p>
          <Link
            href="/consultation"
            className="inline-flex items-center justify-center rounded-sm bg-olive-800 px-8 py-4 text-sm font-semibold text-white hover:bg-olive-900 transition-colors"
          >
            Meet With Attorney Goncalves
          </Link>
        </div>
      </section>

      {/* Stats band */}
      <section className="bg-olive-950 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-serif text-3xl sm:text-4xl font-bold text-gold-400 mb-2">{s.figure}</p>
              <p className="text-white/70 text-sm leading-snug">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Approach */}
      <section className="py-16 sm:py-20 bg-cream-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-olive-950 mb-6">
              An Attorney Who Treats Your Case Like It Matters
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              {"Too many immigrants describe the same frustrating experience: a law firm where they never speak to the actual attorney, where their file sits in a queue, and where simple questions go unanswered for weeks. That is not how we practice in Mystic."}
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              {"When you choose this office, Attorney Goncalves is the person who reviews your eligibility, prepares your paperwork, signs your filings, and prepares you for your interview. You are never handed off to a stranger. That continuity matters because immigration decisions hinge on details — a date, a document, a single checkbox — and the person who knows your story is the person best equipped to protect it."}
            </p>
            <p className="text-slate-700 leading-relaxed">
              {"We also believe clarity is part of good representation. You will leave every conversation understanding where your case stands, what comes next, and what it will cost. No jargon, no surprises."}
            </p>
          </div>
          <div className="space-y-5">
            {[
              { icon: Scale, t: "Honest case assessments", d: "We tell you what is realistic, not what you want to hear." },
              { icon: Globe2, t: "Multilingual representation", d: "Counsel in English, Spanish, and Portuguese." },
              { icon: Clock3, t: "Responsive communication", d: "Updates at every notice, RFE, and interview." },
              { icon: ShieldCheck, t: "Careful, compliant filings", d: "Thorough preparation that withstands USCIS scrutiny." },
            ].map((item) => (
              <div key={item.t} className="flex gap-4 bg-white rounded-xl border border-tan-200 p-5">
                <item.icon className="h-7 w-7 text-olive-700 shrink-0" />
                <div>
                  <h3 className="font-semibold text-olive-950">{item.t}</h3>
                  <p className="text-slate-600 text-sm">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practice areas */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-olive-950 mb-3 text-center">
            Immigration Matters We Handle From Mystic
          </h2>
          <p className="text-slate-700 text-center max-w-2xl mx-auto mb-12 leading-relaxed">
            {"Whether you are reuniting with a loved one, securing the right to work, or finally becoming a citizen, here is how we can help."}
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {practiceAreas.map((p) => (
              <div key={p.name} className="rounded-2xl border-l-4 border-olive-600 bg-cream-50 p-6">
                <h3 className="font-serif text-lg font-bold text-olive-950 mb-2">{p.name}</h3>
                <p className="text-slate-700 text-sm leading-relaxed">{p.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-olive-800 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <Quote className="h-10 w-10 text-gold-400 mx-auto mb-6" />
          <p className="font-serif text-xl sm:text-2xl leading-relaxed mb-6">
            {"From the moment she submitted my application, everything progressed rapidly — I had my interview scheduled just two months later, and the entire process took only three months to complete."}
          </p>
          <p className="text-gold-400 font-semibold">A satisfied naturalization client</p>
        </div>
      </section>

      <LocalFaq
        heading="What Mystic Clients Ask Before Hiring an Attorney"
        items={[
          {
            q: "Will I actually work with the attorney, or with assistants?",
            a: "You work directly with Attorney Goncalves. She personally handles every case from the first consultation through the final decision, so you always speak with the person who knows your file.",
          },
          {
            q: "What languages does the attorney speak?",
            a: "Cases are handled in English, Spanish, and Portuguese. Other languages can be arranged on request, which is especially helpful for southeastern Connecticut's diverse immigrant communities.",
          },
          {
            q: "How quickly can I get an appointment in Mystic?",
            a: "Consultations can usually be scheduled within a few business days, in person at the Mystic office or by secure video. Urgent matters are prioritized.",
          },
          {
            q: "Do you take cases outside of Connecticut?",
            a: "Yes. Because immigration law is federal, the attorney represents clients across the United States and abroad, while remaining based in Mystic for local, in-person service.",
          },
        ]}
      />

      <section className="py-16 bg-cream-50 border-t border-tan-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif text-3xl font-bold text-olive-950 mb-4">
            Ready to Speak With a Mystic Immigration Attorney?
          </h2>
          <p className="text-slate-700 mb-8 leading-relaxed">
            {"Bring your questions. Leave with a plan. Schedule a consultation with Attorney Goncalves today."}
          </p>
          <Link
            href="/consultation"
            className="inline-flex items-center justify-center rounded-sm bg-olive-800 px-8 py-4 text-sm font-semibold text-white hover:bg-olive-900 transition-colors"
          >
            Request a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
