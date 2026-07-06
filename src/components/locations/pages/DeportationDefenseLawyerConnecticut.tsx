import Link from "next/link";
import { ShieldAlert, Phone, Gavel, FileWarning, LifeBuoy, Clock } from "lucide-react";
import { siteConfig } from "@/lib/constants";
import { LocalFaq } from "../shared";

const ifDetained = [
  "Stay calm and do not sign anything you do not understand.",
  "You have the right to remain silent and the right to speak with a lawyer.",
  "Do not discuss your immigration history or country of origin with officers.",
  "Memorize or keep a trusted contact's phone number with you.",
  "Contact an immigration attorney as soon as possible.",
];

const reliefOptions = [
  { title: "Cancellation of Removal", body: "For certain long-term residents and permanent residents who meet strict continuous-presence and hardship requirements." },
  { title: "Asylum & Protection", body: "Protection for those who fear persecution or torture if returned to their home country." },
  { title: "Adjustment of Status", body: "A path to a green card during proceedings for those with a qualifying family or other basis." },
  { title: "Waivers of Inadmissibility", body: "Forgiveness of certain grounds that would otherwise block relief, where eligibility exists." },
  { title: "Bond Hearings", body: "Requesting release from detention so you can fight your case from outside, with your family." },
  { title: "Voluntary Departure", body: "When leaving on your own terms preserves future options better than a removal order would." },
];

export default function DeportationDefenseLawyerConnecticut() {
  return (
    <div className="bg-cream-50">
      {/* Urgent hero */}
      <section className="page-header-offset pb-16 sm:pb-20 bg-olive-950 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-red-500/15 border border-red-400/40 px-4 py-1.5 text-red-300 text-sm font-semibold mb-6">
            <ShieldAlert className="h-4 w-4" /> Time-sensitive matters
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Deportation Defense Lawyer in Connecticut
          </h1>
          <p className="text-white/80 text-lg sm:text-xl leading-relaxed mb-8 max-w-3xl mx-auto">
            {"A notice to appear in immigration court is frightening — but it is not the end of the road. If you or a loved one is facing removal in Connecticut, swift, knowledgeable action can make all the difference. Reach out right away."}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-red-500 px-8 py-4 text-sm font-semibold text-white hover:bg-red-600 transition-colors"
            >
              <Phone className="h-4 w-4" /> Call {siteConfig.phone}
            </a>
            <Link
              href="/consultation"
              className="inline-flex items-center justify-center rounded-sm border-2 border-white/40 px-8 py-4 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Request an Urgent Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Why act fast */}
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-6">
            <Clock className="h-8 w-8 text-red-500" />
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-olive-950">Why Time Matters in Removal Cases</h2>
          </div>
          <p className="text-slate-700 leading-relaxed mb-4">
            {"Removal proceedings move on the government's schedule, not yours. There are filing deadlines, master calendar hearings, and evidentiary cutoffs that, if missed, can permanently close off relief you might otherwise have qualified for. The earlier an attorney gets involved, the more options remain on the table."}
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            {"Deportation defense is also intensely fact-specific. Two people facing removal for similar reasons can have completely different outcomes based on how long they have lived here, their family ties, their criminal history, and the precise wording of the charges against them. A careful review of your situation is the foundation of any real defense."}
          </p>
          <p className="text-slate-700 leading-relaxed">
            {"If you have received a Notice to Appear, been detained, or fear that proceedings may begin, do not wait and hope it resolves itself. Speak with a Connecticut deportation defense lawyer who can explain your rights and chart a course forward."}
          </p>
        </div>
      </section>

      {/* If detained */}
      <section className="py-16 bg-red-950 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-8 justify-center">
            <FileWarning className="h-8 w-8 text-red-300" />
            <h2 className="font-serif text-3xl font-bold">If You or a Loved One Is Detained</h2>
          </div>
          <ul className="space-y-3 max-w-2xl mx-auto">
            {ifDetained.map((tip) => (
              <li key={tip} className="flex items-start gap-3 bg-white/5 rounded-lg px-5 py-4 border border-white/10 text-sm sm:text-base text-white/85">
                <span className="text-red-300 font-bold shrink-0">→</span> {tip}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Relief options */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-3 justify-center">
            <LifeBuoy className="h-8 w-8 text-olive-700" />
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-olive-950 text-center">Possible Forms of Relief From Removal</h2>
          </div>
          <p className="text-slate-700 text-center max-w-2xl mx-auto mb-12 leading-relaxed">
            {"Depending on your circumstances, one or more of these defenses may be available. We evaluate which, if any, fit your case."}
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {reliefOptions.map((r) => (
              <div key={r.title} className="rounded-2xl border-t-4 border-olive-600 bg-white shadow-sm p-6">
                <h3 className="font-serif text-lg font-bold text-olive-950 mb-2">{r.title}</h3>
                <p className="text-slate-700 text-sm leading-relaxed">{r.body}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-500 text-xs text-center mt-8 max-w-2xl mx-auto">
            {"Eligibility for any form of relief depends on the specific facts of your case and current law. Only an individualized consultation can tell you what applies to you."}
          </p>
        </div>
      </section>

      {/* Court process */}
      <section className="py-16 bg-olive-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-8 justify-center">
            <Gavel className="h-8 w-8 text-gold-400" />
            <h2 className="font-serif text-3xl font-bold">Understanding Immigration Court</h2>
          </div>
          <p className="text-white/80 leading-relaxed mb-4">
            {"Removal cases are heard in immigration court before an immigration judge. The process usually begins with a Notice to Appear that lists the charges. At the first hearing — the master calendar hearing — pleadings are entered and relief is identified. Later, at an individual or merits hearing, evidence and testimony are presented and the judge issues a decision."}
          </p>
          <p className="text-white/80 leading-relaxed">
            {"Having an attorney prepare your applications, gather supporting evidence, and present your case to the judge can dramatically affect the outcome. You do not have to face the courtroom alone."}
          </p>
        </div>
      </section>

      <LocalFaq
        heading="Connecticut Deportation Defense Questions"
        items={[
          {
            q: "I received a Notice to Appear. What should I do first?",
            a: "Do not miss any hearing date — failing to appear can result in an automatic removal order. Contact a deportation defense lawyer as soon as possible so your rights and possible defenses can be evaluated before your first court date.",
          },
          {
            q: "Can someone in removal proceedings still get a green card?",
            a: "Sometimes, yes. Certain individuals with a qualifying family relationship or other basis may be able to apply for adjustment of status or other relief during proceedings. It depends on your specific eligibility, which we assess case by case.",
          },
          {
            q: "What happens at a bond hearing?",
            a: "A bond hearing asks the immigration judge to set an amount that allows a detained person to be released while their case continues. The judge weighs flight risk and danger to the community. We can prepare and present a request for bond.",
          },
          {
            q: "How fast do I need to act?",
            a: "Immediately. Removal cases run on strict deadlines, and waiting can forfeit relief you might otherwise qualify for. Call the office right away so we can begin evaluating your options without delay.",
          },
        ]}
      />

      <section className="py-16 bg-olive-950 text-white border-t border-white/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif text-3xl font-bold mb-4">Do Not Face Removal Alone</h2>
          <p className="text-white/80 mb-8 leading-relaxed">
            {"Every day counts in a deportation case. Reach out now for an urgent, confidential consultation with a Connecticut deportation defense lawyer."}
          </p>
          <a
            href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
            className="inline-flex items-center justify-center gap-2 rounded-sm bg-red-500 px-8 py-4 text-sm font-semibold text-white hover:bg-red-600 transition-colors"
          >
            <Phone className="h-4 w-4" /> Call {siteConfig.phone} Now
          </a>
        </div>
      </section>
    </div>
  );
}
