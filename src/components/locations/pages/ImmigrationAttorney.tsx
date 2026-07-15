import Link from "next/link";
import { Scale, FileCheck2, MessagesSquare, ShieldCheck, Phone } from "lucide-react";
import { siteConfig } from "@/lib/constants";
import { LocalFaq } from "../shared";

const role = [
  {
    icon: Scale,
    title: "Reads the law so you don't have to",
    body: "Immigration rules change constantly and small details decide big outcomes. An attorney translates the statute, the forms, and the fine print into a clear plan for your specific situation.",
  },
  {
    icon: FileCheck2,
    title: "Prepares filings that hold up",
    body: "A single inconsistency can trigger a Request for Evidence or a denial. We assemble every petition so it reaches USCIS complete, accurate, and backed by the right documentation.",
  },
  {
    icon: MessagesSquare,
    title: "Speaks for you to the government",
    body: "From interview preparation to responding to notices, you have a licensed advocate communicating with USCIS on your behalf — not a form-filling service.",
  },
  {
    icon: ShieldCheck,
    title: "Protects you from costly mistakes",
    body: "The wrong move — filing in the wrong category, missing a deadline, traveling at the wrong time — can set a case back years. An attorney sees the traps before you hit them.",
  },
];

const signs = [
  "You have any criminal history, prior denials, or past immigration violations",
  "USCIS sent you a Request for Evidence, a notice, or an interview",
  "Your case involves deadlines, priority dates, or aging-out children",
  "You are unsure which form or category actually fits your situation",
  "You simply want it done right the first time, with someone accountable",
];

export default function ImmigrationAttorney() {
  return (
    <div className="bg-white">
      <section className="page-header-offset pb-16 sm:pb-20 bg-olive-950 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-gold-400 font-semibold text-sm mb-4 uppercase tracking-wide">
            Immigration Attorney
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            An Immigration Attorney Who Answers to You
          </h1>
          <p className="text-white/80 text-lg sm:text-xl leading-relaxed max-w-3xl">
            {"When your future in the United States is on the line, you deserve more than a website that fills in forms. Attorney Jacquelyn R. Goncalves takes on your case personally — planning it, preparing it, and standing behind it from the first consultation to approval."}
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-olive-950 mb-12 text-center">
            What an Immigration Attorney Actually Does
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {role.map((r) => (
              <div key={r.title} className="flex gap-4 rounded-2xl bg-cream-50 border border-tan-200 p-6">
                <r.icon className="h-8 w-8 text-olive-700 shrink-0" />
                <div>
                  <h3 className="font-serif text-xl font-bold text-olive-950 mb-2">{r.title}</h3>
                  <p className="text-slate-700 leading-relaxed text-sm sm:text-base">{r.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-olive-50 border-y border-olive-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-3xl font-bold text-olive-950 mb-8">
            When Should You Hire an Immigration Attorney?
          </h2>
          <ul className="space-y-3">
            {signs.map((s) => (
              <li key={s} className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-olive-700 shrink-0" />
                <span className="text-slate-800">{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <LocalFaq
        heading="Questions About Working With an Immigration Attorney"
        items={[
          {
            q: "Do I really need an attorney, or can I file myself?",
            a: "Simple cases can sometimes be filed alone, but immigration decisions are hard to undo. An attorney is most valuable when there is any complexity, history, or deadline involved — and gives you certainty even on straightforward cases.",
          },
          {
            q: "Will I actually work with the attorney, or with staff?",
            a: "You work directly with Attorney Goncalves. She handles the strategy, the paperwork review, and your questions personally rather than passing your file down a chain.",
          },
          {
            q: "What does an immigration attorney cost?",
            a: "Fees depend on the case. Every engagement starts with a paid consultation where your situation and a clear fee estimate are explained up front — no surprises.",
          },
          {
            q: "Can you help if I am not in Connecticut?",
            a: "Yes. Immigration law is federal, so the office represents clients across the United States through secure video consultations, with in-person meetings available at the Mystic office.",
          },
        ]}
      />

      <section className="py-16 bg-olive-950 text-white text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-3xl font-bold mb-4">Talk to a Real Attorney</h2>
          <p className="text-white/75 mb-8">
            {"Bring your questions. Leave with a plan and someone accountable for your case."}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/consultation" className="inline-flex items-center justify-center rounded-sm bg-gold-500 px-8 py-4 text-sm font-semibold text-olive-950 hover:bg-gold-400 transition-colors">
              Schedule a Consultation
            </Link>
            <a href={`tel:${siteConfig.phone.replace(/\D/g, "")}`} className="inline-flex items-center justify-center gap-2 rounded-sm border-2 border-white/40 px-8 py-4 text-sm font-semibold text-white hover:bg-white/10 transition-colors">
              <Phone className="h-4 w-4" /> {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
