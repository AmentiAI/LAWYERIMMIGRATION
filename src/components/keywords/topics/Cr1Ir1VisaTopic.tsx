import Link from "next/link";
import { Heart, Clock } from "lucide-react";
import { TopicFooter, FaqBlock, DocChecklist } from "../shared";

const paths = [
  {
    code: "CR-1",
    title: "Conditional spouse visa",
    when: "Married less than two years when you are admitted as a resident",
    result: "Two-year green card. Form I-751 must be filed before it expires.",
    icon: Clock,
  },
  {
    code: "IR-1",
    title: "Immediate relative spouse visa",
    when: "Married two years or longer at admission",
    result: "Ten-year green card. No I-751 filing.",
    icon: Heart,
  },
];

export default function Cr1Ir1VisaTopic() {
  return (
    <div className="bg-cream-50">
      <section className="page-header-offset pb-16 bg-olive-950 text-white">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-gold-400 text-sm font-semibold tracking-wider uppercase mb-3">
            Consular spouse visa
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            CR-1 and IR-1 Visas for Spouses Living Abroad
          </h1>
          <p className="text-white/80 text-lg leading-relaxed max-w-3xl">
            If you are already married and your spouse is outside the United
            States, the immigrant visa is a CR-1 or an IR-1. Both start with
            Form I-130. The code on the visa depends on how long you have been
            married when your spouse is admitted as a permanent resident.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-6">
          {paths.map((path) => (
            <article
              key={path.code}
              className="bg-white rounded-2xl border border-tan-200 p-8"
            >
              <path.icon className="h-8 w-8 text-olive-700 mb-4" />
              <p className="text-xs font-semibold uppercase tracking-wider text-gold-600">
                {path.code}
              </p>
              <h2 className="font-serif text-2xl font-bold text-olive-950 mt-1 mb-3">
                {path.title}
              </h2>
              <p className="text-sm text-slate-700 mb-3">{path.when}</p>
              <p className="text-sm text-slate-600">{path.result}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="pb-16">
        <div className="max-w-5xl mx-auto px-4 grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="font-serif text-3xl font-bold text-olive-950 mb-4">
              Not the same as a fiancé visa
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              A K-1 visa is for a fiancé who will marry after entering the
              United States. A CR-1 or IR-1 is for a couple that is already
              married. Your spouse enters as a permanent resident and does not
              file a separate green card application after arrival.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Permanent residents cannot file this visa. Only a U.S. citizen
              may petition for a spouse as an immediate relative. Attorney
              Goncalves prepares the I-130, the National Visa Center packet,
              and the embassy interview.
            </p>
            <Link
              href="/immigration/fiance-visa"
              className="inline-flex mt-6 text-sm font-semibold text-olive-800 underline"
            >
              Compare with the K-1 fiancé visa
            </Link>
          </div>
          <DocChecklist
            title="What the case usually includes"
            items={[
              "Form I-130 and proof the marriage is genuine",
              "Civil documents for both spouses",
              "Form I-864 affidavit of support",
              "DS-260 immigrant visa application",
              "Medical exam and embassy interview",
              "Police certificates from required countries",
            ]}
          />
        </div>
      </section>

      <FaqBlock
        items={[
          {
            q: "Which visa do we get if we have been married 18 months?",
            a: "A marriage under two years at the time of admission is issued as a CR-1. Your spouse receives a two-year conditional green card and later files Form I-751 to remove the conditions.",
          },
          {
            q: "Can a green card holder file a CR-1?",
            a: "No. CR-1 and IR-1 visas are for spouses of U.S. citizens. A permanent resident petitions in the F2A preference category, which depends on visa availability.",
          },
          {
            q: "Do we still interview at an embassy?",
            a: "Yes. After the I-130 is approved, the case moves to the National Visa Center and then to a U.S. embassy or consulate for a medical exam and interview.",
          },
        ]}
      />
      <TopicFooter cta="Plan a Spouse Visa" relatedService="consular-processing" />
    </div>
  );
}
