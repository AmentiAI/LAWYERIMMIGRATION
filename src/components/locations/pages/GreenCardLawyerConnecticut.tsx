import Link from "next/link";
import { IdCard, Heart, Users2, Baby, ArrowLeftRight, ClipboardCheck } from "lucide-react";
import { LocalFaq } from "../shared";

const categories = [
  {
    icon: Heart,
    title: "Marriage Green Cards",
    body: "For spouses of U.S. citizens and permanent residents. We assemble the relationship evidence USCIS looks for and manage the interview.",
  },
  {
    icon: Users2,
    title: "Family Sponsorship",
    body: "Parents, children, and siblings sponsored through an approved I-130 petition, whether they are in the U.S. or abroad.",
  },
  {
    icon: Baby,
    title: "Children & Dependents",
    body: "Green cards for minor and adult children, with attention to the Child Status Protection Act and aging-out concerns.",
  },
  {
    icon: ArrowLeftRight,
    title: "Adjustment of Status",
    body: "For those already in the U.S. who qualify to become permanent residents without leaving the country.",
  },
];

const docs = [
  "Birth and marriage certificates",
  "Passports and prior visas",
  "Proof of lawful entry (I-94)",
  "Financial sponsorship documents (I-864)",
  "Medical examination (I-693)",
  "Evidence of a bona fide relationship",
];

export default function GreenCardLawyerConnecticut() {
  return (
    <div className="bg-cream-50">
      {/* Hero */}
      <section className="page-header-offset pb-16 sm:pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="inline-flex items-center gap-2 text-olive-700 font-semibold text-sm mb-4">
              <IdCard className="h-4 w-4" /> Permanent Residence in Connecticut
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-olive-950 mb-6 leading-tight">
              Green Card Lawyer in Connecticut
            </h1>
            <p className="text-slate-700 text-lg sm:text-xl leading-relaxed mb-8">
              {"A green card is more than a card — it is the right to live and work permanently in the United States. As a Connecticut green card lawyer, Attorney Goncalves helps families secure lawful permanent residence the right way, the first time."}
            </p>
            <Link
              href="/consultation"
              className="inline-flex items-center justify-center rounded-sm bg-olive-800 px-8 py-4 text-sm font-semibold text-white hover:bg-olive-900 transition-colors"
            >
              Start Your Green Card
            </Link>
          </div>
          <div className="bg-gradient-to-br from-olive-800 to-olive-950 rounded-3xl p-10 text-white shadow-2xl">
            <IdCard className="h-12 w-12 text-gold-400 mb-6" />
            <p className="font-serif text-2xl font-bold mb-3">Your path to permanent residence</p>
            <p className="text-white/70 text-sm leading-relaxed">
              {"From the initial petition to the green card in your hand, we manage each filing, deadline, and interview so nothing falls through the cracks."}
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-olive-950 mb-6">
            Guiding Connecticut Families to Permanent Residence
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            {"The green card process can feel like a maze of forms, fees, and waiting. There are petitions to file, financial requirements to meet, medical exams to complete, and interviews to pass — and a single error along the way can reset months of progress. A Connecticut green card lawyer brings order to that chaos."}
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            {"Most green cards our office handles are family-based, meaning a U.S. citizen or lawful permanent resident sponsors a relative. Depending on whether your relative is already in the United States or living abroad, the path runs through either adjustment of status with USCIS or consular processing through a U.S. embassy. We determine which route fits your situation and build your case accordingly."}
          </p>
          <p className="text-slate-700 leading-relaxed">
            {"Throughout it all, you work directly with Attorney Goncalves. She prepares your petition, reviews every supporting document, and prepares you for what to expect at your interview — so you can approach this life-changing process with confidence rather than anxiety."}
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-olive-50 border-y border-olive-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-3xl font-bold text-olive-950 mb-12 text-center">
            Green Card Pathways We Handle
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {categories.map((c) => (
              <div key={c.title} className="flex gap-5 bg-white rounded-2xl border border-tan-200 p-7">
                <c.icon className="h-10 w-10 text-olive-700 shrink-0" />
                <div>
                  <h3 className="font-serif text-xl font-bold text-olive-950 mb-2">{c.title}</h3>
                  <p className="text-slate-700 text-sm leading-relaxed">{c.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two routes */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-3xl font-bold text-olive-950 mb-10 text-center">
            Two Roads to a Green Card
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-3xl bg-olive-950 text-white p-8">
              <h3 className="font-serif text-2xl font-bold text-gold-400 mb-4">Adjustment of Status</h3>
              <p className="text-white/75 text-sm leading-relaxed mb-4">
                {"For eligible applicants already inside the United States. You file Form I-485 and may be able to work and travel while your case is pending. The process ends with an interview at a local USCIS field office."}
              </p>
              <p className="text-white/60 text-sm">Best for relatives who entered lawfully and are present in the U.S.</p>
            </div>
            <div className="rounded-3xl bg-white border-2 border-olive-200 p-8">
              <h3 className="font-serif text-2xl font-bold text-olive-800 mb-4">Consular Processing</h3>
              <p className="text-slate-700 text-sm leading-relaxed mb-4">
                {"For relatives living abroad. After the petition is approved, the case moves to the National Visa Center and then to a U.S. embassy or consulate, where your relative attends an immigrant visa interview."}
              </p>
              <p className="text-slate-500 text-sm">Best for family members who are outside the United States.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Documents */}
      <section className="py-16 bg-olive-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-8 justify-center">
            <ClipboardCheck className="h-8 w-8 text-gold-400" />
            <h2 className="font-serif text-3xl font-bold">Documents a Green Card Case Often Needs</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {docs.map((d) => (
              <div key={d} className="flex items-center gap-3 bg-white/5 rounded-lg px-4 py-3 border border-white/10 text-sm text-white/80">
                <span className="text-gold-400 font-bold">✓</span> {d}
              </div>
            ))}
          </div>
          <p className="text-white/50 text-xs text-center mt-6">
            {"Every case is different — we tell you exactly which documents yours requires."}
          </p>
        </div>
      </section>

      <LocalFaq
        heading="Connecticut Green Card Questions"
        items={[
          {
            q: "How long does it take to get a green card in Connecticut?",
            a: "Timelines depend on the category and the relationship. Marriage-based adjustment cases for spouses of U.S. citizens often take roughly 10–14 months, while family-preference and consular cases can take longer due to visa availability. We give you a realistic timeline for your specific case.",
          },
          {
            q: "Can I work while my green card application is pending?",
            a: "Often, yes. Adjustment of status applicants can usually apply for an employment authorization document (work permit) and advance parole travel document while the green card application is being processed.",
          },
          {
            q: "What is the difference between adjustment of status and consular processing?",
            a: "Adjustment of status is for qualifying applicants already in the United States and is handled by USCIS. Consular processing is for relatives abroad and concludes with an interview at a U.S. embassy or consulate. We help you determine which applies to you.",
          },
          {
            q: "Do I need a lawyer to apply for a green card?",
            a: "It is not legally required, but green card applications are complex and mistakes can cause long delays or denials. A Connecticut green card lawyer helps ensure your petition is accurate, complete, and supported by the right evidence.",
          },
        ]}
      />

      <section className="py-16 bg-cream-50 border-t border-tan-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif text-3xl font-bold text-olive-950 mb-4">
            Make the United States Your Permanent Home
          </h2>
          <p className="text-slate-700 mb-8 leading-relaxed">
            {"Your green card journey starts with a single conversation. Let a Connecticut green card lawyer guide the way."}
          </p>
          <Link
            href="/consultation"
            className="inline-flex items-center justify-center rounded-sm bg-olive-800 px-8 py-4 text-sm font-semibold text-white hover:bg-olive-900 transition-colors"
          >
            Begin Your Green Card Case
          </Link>
        </div>
      </section>
    </div>
  );
}
