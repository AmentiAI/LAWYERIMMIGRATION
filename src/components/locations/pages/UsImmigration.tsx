import Link from "next/link";
import { Building2, Landmark, Plane, Gavel, ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/constants";
import { LocalFaq } from "../shared";

const agencies = [
  {
    icon: Building2,
    name: "USCIS",
    text: "U.S. Citizenship and Immigration Services reviews and approves most petitions and applications — green cards, work permits, and naturalization.",
  },
  {
    icon: Landmark,
    name: "National Visa Center",
    text: "The NVC handles immigrant visa cases between petition approval and a consular interview for applicants living abroad.",
  },
  {
    icon: Plane,
    name: "CBP & Consulates",
    text: "The State Department and Customs and Border Protection issue visas abroad and control admission at ports of entry.",
  },
  {
    icon: Gavel,
    name: "Immigration Court",
    text: "Part of the Justice Department, the courts (EOIR) decide removal cases and certain applications for relief.",
  },
];

const pathways = [
  "Through a family member who is a U.S. citizen or permanent resident",
  "Through marriage to a U.S. citizen or resident, or a K-1 fiancé visa",
  "Through humanitarian protections such as VAWA",
  "Through investment or a treaty-based business visa",
  "Through the naturalization process, once eligible as a permanent resident",
];

export default function UsImmigration() {
  return (
    <div className="bg-white">
      <section className="page-header-offset pb-16 sm:pb-20 bg-olive-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-olive-700 font-semibold text-sm mb-4 uppercase tracking-wide">
            The U.S. Immigration System
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-olive-950 mb-6 leading-tight">
            Navigating U.S. Immigration Without Getting Lost
          </h1>
          <p className="text-slate-700 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto">
            {"The United States immigration system is a patchwork of agencies, forms, and waiting periods. Understanding who does what — and where the delays come from — is the first step toward a smoother case."}
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-olive-950 mb-4 text-center">
            The Agencies You Will Encounter
          </h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
            {"Most people are surprised to learn that several different agencies touch a single immigration case."}
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {agencies.map((a) => (
              <div key={a.name} className="flex gap-4 rounded-2xl bg-cream-50 border border-tan-200 p-6">
                <a.icon className="h-8 w-8 text-olive-700 shrink-0" />
                <div>
                  <h3 className="font-serif text-xl font-bold text-olive-950 mb-1">{a.name}</h3>
                  <p className="text-slate-700 text-sm leading-relaxed">{a.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream-50 border-y border-tan-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-3xl font-bold text-olive-950 mb-8">
            Common Pathways to Lawful Status
          </h2>
          <ul className="space-y-3">
            {pathways.map((p) => (
              <li key={p} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-tan-200">
                <ArrowRight className="h-5 w-5 text-olive-700 shrink-0 mt-0.5" />
                <span className="text-slate-800">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-3xl font-bold text-olive-950 mb-6">
            Why Timelines Test Everyone&apos;s Patience
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            {"Immigration cases move at the pace of federal processing and visa availability, not personal urgency. Depending on the category and the applicant's country, waits can range from several months to several years."}
          </p>
          <p className="text-slate-700 leading-relaxed">
            {"What you can control is accuracy. A complete, correctly categorized filing avoids the Requests for Evidence and rejections that add months to an already long journey — which is exactly where careful legal preparation pays off."}
          </p>
        </div>
      </section>

      <LocalFaq
        heading="U.S. Immigration — Frequently Asked"
        items={[
          {
            q: "What is the difference between a visa and a green card?",
            a: "A visa is permission to seek entry to the U.S. for a purpose, while a green card grants lawful permanent residence. Many people move from a temporary status to a green card over time.",
          },
          {
            q: "How long does U.S. immigration take?",
            a: "It depends entirely on the category and the applicant's country of birth. Immediate relatives of U.S. citizens are often fastest; preference categories can involve multi-year waits for a visa to become available.",
          },
          {
            q: "Can I speed up my case?",
            a: "You usually cannot skip the line, but you can avoid self-inflicted delays. Filing in the correct category with complete evidence prevents the errors that cause the longest setbacks.",
          },
        ]}
      />

      <section className="py-16 bg-olive-950 text-white text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-3xl font-bold mb-4">Find Your Path Forward</h2>
          <p className="text-white/75 mb-8">
            {"A consultation turns the maze into a clear, step-by-step plan for your situation."}
          </p>
          <Link href="/consultation" className="inline-flex items-center justify-center rounded-sm bg-gold-500 px-8 py-4 text-sm font-semibold text-olive-950 hover:bg-gold-400 transition-colors">
            Book a Consultation
          </Link>
          <p className="text-white/60 text-sm mt-4">{siteConfig.phone}</p>
        </div>
      </section>
    </div>
  );
}
