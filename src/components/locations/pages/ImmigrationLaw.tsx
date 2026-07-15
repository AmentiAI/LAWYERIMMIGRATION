import Link from "next/link";
import { Users, HeartHandshake, Briefcase, Flag, Gavel } from "lucide-react";
import { siteConfig } from "@/lib/constants";

const areas = [
  {
    icon: Users,
    name: "Family-Based Immigration",
    text: "The most common path to a green card. U.S. citizens and permanent residents petition for spouses, children, parents, and siblings.",
  },
  {
    icon: HeartHandshake,
    name: "Humanitarian Relief",
    text: "Protections for people who have suffered abuse or hardship, including VAWA self-petitions and related forms of relief.",
  },
  {
    icon: Briefcase,
    name: "Business & Investment",
    text: "Pathways tied to entrepreneurship and investment, such as the E-2 treaty investor visa for nationals of qualifying countries.",
  },
  {
    icon: Flag,
    name: "Citizenship & Naturalization",
    text: "Becoming a U.S. citizen through the N-400 process — eligibility, the civics test, the interview, and the oath.",
  },
  {
    icon: Gavel,
    name: "Removal Defense",
    text: "Defending against deportation in immigration court, including bond, relief applications, and responses to a Notice to Appear.",
  },
];

const steps = [
  { n: "01", t: "Petition", d: "A qualifying relative or the applicant files the petition that establishes eligibility (for example, Form I-130)." },
  { n: "02", t: "Wait for a visa", d: "Depending on the category, there may be an immediate opening or a wait for a priority date to become current." },
  { n: "03", t: "Apply for status", d: "The applicant adjusts status in the U.S. (Form I-485) or processes through a consulate abroad." },
  { n: "04", t: "Interview & decision", d: "Most cases include an interview. When approved, the applicant receives their green card or benefit." },
];

const glossary = [
  ["USCIS", "U.S. Citizenship and Immigration Services — the agency that decides most petitions and applications."],
  ["Priority date", "Your place in line for a visa, set by the day your petition was filed."],
  ["Adjustment of status", "Applying for a green card from inside the United States without leaving."],
  ["RFE", "A Request for Evidence — USCIS asking for more documentation before deciding."],
];

export default function ImmigrationLaw() {
  return (
    <div className="bg-white">
      <section className="page-header-offset pb-16 sm:pb-20 bg-cream-50 border-b border-tan-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-olive-950 mb-6 leading-tight">
            Immigration Law, Explained in Plain Language
          </h1>
          <p className="text-slate-700 text-lg sm:text-xl leading-relaxed max-w-3xl">
            {"Immigration law is one of the most complex areas of U.S. law — but you should not need a law degree to understand your own case. Here is a clear map of how it works, and where an attorney fits in."}
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-olive-950 mb-12 text-center">
            The Main Areas of Immigration Law
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {areas.map((a) => (
              <div key={a.name} className="rounded-2xl border border-tan-200 p-6 hover:border-olive-400 transition-colors">
                <a.icon className="h-9 w-9 text-olive-700 mb-4" />
                <h3 className="font-serif text-lg font-bold text-olive-950 mb-2">{a.name}</h3>
                <p className="text-slate-700 text-sm leading-relaxed">{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-olive-950 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-3xl font-bold mb-12 text-center">
            How a Case Moves Through the System
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s) => (
              <div key={s.n}>
                <p className="font-serif text-4xl font-bold text-gold-400 mb-3">{s.n}</p>
                <h3 className="font-semibold text-lg mb-2">{s.t}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-3xl font-bold text-olive-950 mb-8">
            A Quick Immigration Glossary
          </h2>
          <dl className="divide-y divide-tan-200 border-y border-tan-200">
            {glossary.map(([term, def]) => (
              <div key={term} className="py-4 sm:grid sm:grid-cols-3 sm:gap-4">
                <dt className="font-semibold text-olive-900">{term}</dt>
                <dd className="text-slate-700 text-sm sm:col-span-2 mt-1 sm:mt-0">{def}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-10 text-center">
            <Link href="/consultation" className="inline-flex items-center justify-center rounded-sm bg-olive-800 px-8 py-4 text-sm font-semibold text-white hover:bg-olive-900 transition-colors">
              Ask About Your Case
            </Link>
            <p className="text-slate-500 text-sm mt-3">Or call {siteConfig.phone}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
