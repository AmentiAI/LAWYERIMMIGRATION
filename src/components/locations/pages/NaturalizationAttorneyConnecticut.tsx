import Link from "next/link";
import { FileText, Fingerprint, UserCheck, Award, AlertCircle } from "lucide-react";
import { LocalFaq } from "../shared";

const timeline = [
  { icon: FileText, stage: "File Form N-400", detail: "We prepare and submit your Application for Naturalization with complete, accurate answers and supporting records." },
  { icon: Fingerprint, stage: "Biometrics", detail: "USCIS takes your fingerprints and photo, typically a few weeks after filing, for background checks." },
  { icon: UserCheck, stage: "Interview & Tests", detail: "An officer reviews your application and administers the English and civics tests at your local field office." },
  { icon: Award, stage: "Oath Ceremony", detail: "Once approved, you take the Oath of Allegiance and receive your Certificate of Naturalization." },
];

const moralCharacterFactors = [
  "Arrests, charges, and convictions — even if dismissed or expunged",
  "Failure to file or pay taxes",
  "Missed child support or alimony obligations",
  "Providing false information to immigration authorities",
  "Extended absences that break continuous residence",
  "Failure to register for Selective Service when required",
];

export default function NaturalizationAttorneyConnecticut() {
  return (
    <div className="bg-cream-50">
      {/* Hero */}
      <section className="page-header-offset pb-16 sm:pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="inline-flex items-center gap-2 text-olive-700 font-semibold text-sm mb-4">
              <Award className="h-4 w-4" /> Form N-400 &middot; Naturalization
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-olive-950 mb-6 leading-tight">
              Naturalization Attorney in Connecticut
            </h1>
            <p className="text-slate-700 text-lg sm:text-xl leading-relaxed mb-8">
              {"Naturalization is the legal process of becoming a U.S. citizen — and it deserves to be done right. Attorney Goncalves guides Connecticut permanent residents through every stage of the N-400, including the cases that are anything but routine."}
            </p>
            <Link
              href="/consultation"
              className="inline-flex items-center justify-center rounded-sm bg-olive-800 px-8 py-4 text-sm font-semibold text-white hover:bg-olive-900 transition-colors"
            >
              Discuss Your N-400
            </Link>
          </div>
          <div className="bg-olive-950 rounded-3xl p-10 text-white shadow-2xl">
            <p className="font-serif text-5xl font-bold text-gold-400 mb-2">N-400</p>
            <p className="text-xl font-semibold mb-3">Application for Naturalization</p>
            <p className="text-white/70 text-sm leading-relaxed">
              {"The single form that turns a green card holder into a United States citizen. We make sure yours is complete, accurate, and filed at exactly the right time."}
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-olive-950 mb-6">
            More Than Paperwork — A Process That Demands Care
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            {"For many lawful permanent residents, naturalization is smooth and even joyful: file the application, study for the test, attend the interview, and take the oath. But naturalization is also the moment USCIS takes a close, final look at your entire immigration history — and that is where an experienced naturalization attorney earns their value."}
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            {"Issues that seemed minor years ago can surface during the N-400 review: an old arrest, a stretch of time spent abroad, an unfiled tax return, a mistake on a prior application. In some cases, filing too soon can even put your permanent residence at risk. A careful attorney spots these issues before you file, advises you on timing, and helps you present your case in the strongest possible light."}
          </p>
          <p className="text-slate-700 leading-relaxed">
            {"Attorney Goncalves reviews your full record, prepares your application meticulously, and stands with you through the interview — so your path to citizenship is as secure as it is exciting."}
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-olive-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-3xl font-bold mb-12 text-center">The Naturalization Timeline</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {timeline.map((t, i) => (
              <div key={t.stage} className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <t.icon className="h-8 w-8 text-gold-400" />
                  <span className="font-serif text-2xl font-bold text-gold-400">{i + 1}</span>
                </div>
                <h3 className="font-serif text-lg font-bold mb-2">{t.stage}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{t.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Good moral character */}
      <section className="py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <AlertCircle className="h-8 w-8 text-olive-700" />
              <h2 className="font-serif text-3xl font-bold text-olive-950">The Good Moral Character Review</h2>
            </div>
            <p className="text-slate-700 leading-relaxed mb-4">
              {"To naturalize, you must show good moral character during the statutory period — usually the three or five years before filing. USCIS examines a wide range of conduct, and what counts against you is not always obvious."}
            </p>
            <p className="text-slate-700 leading-relaxed">
              {"If any of the issues listed here apply to you, do not file blindly. We assess how they affect your eligibility and develop a strategy — which sometimes means filing now, and sometimes means waiting until the timing is right."}
            </p>
          </div>
          <ul className="space-y-3">
            {moralCharacterFactors.map((f) => (
              <li key={f} className="flex items-start gap-3 bg-white rounded-xl border border-tan-200 p-4 text-sm text-slate-700">
                <span className="text-olive-700 font-bold shrink-0">!</span> {f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <LocalFaq
        heading="Connecticut Naturalization Questions"
        items={[
          {
            q: "How long does naturalization take in Connecticut?",
            a: "From filing the N-400 to the oath ceremony, the process commonly takes several months to about a year, depending on the local field office workload and the complexity of your case. We help you understand the realistic timeline for your situation.",
          },
          {
            q: "What is the difference between citizenship and naturalization?",
            a: "Naturalization is the legal process a foreign-born permanent resident goes through to become a U.S. citizen. Citizenship is the resulting status. In short, naturalization is the path; citizenship is the destination.",
          },
          {
            q: "Should I be worried about an old arrest on my N-400?",
            a: "Not necessarily, but you should never ignore it. Some offenses bar naturalization permanently, others temporarily, and many simply require honest disclosure. A naturalization attorney reviews the records and advises you before you file.",
          },
          {
            q: "Can you help if my English is limited?",
            a: "Yes. We prepare you for the English and civics components, and certain applicants — based on age and years as a permanent resident — may qualify for testing exemptions or accommodations. We will tell you whether any apply to you.",
          },
        ]}
      />

      <section className="py-16 bg-white border-t border-tan-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif text-3xl font-bold text-olive-950 mb-4">
            File Your N-400 With Confidence
          </h2>
          <p className="text-slate-700 mb-8 leading-relaxed">
            {"Whether your case is simple or complicated, a Connecticut naturalization attorney can help you reach the oath ceremony. Let's get started."}
          </p>
          <Link
            href="/consultation"
            className="inline-flex items-center justify-center rounded-sm bg-olive-800 px-8 py-4 text-sm font-semibold text-white hover:bg-olive-900 transition-colors"
          >
            Start Your Naturalization
          </Link>
        </div>
      </section>
    </div>
  );
}
