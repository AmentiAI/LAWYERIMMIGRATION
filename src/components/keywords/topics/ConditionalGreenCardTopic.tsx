import Link from "next/link";
import { TopicFooter, FaqBlock } from "../shared";

const windowSteps = [
  { label: "Card issued", detail: "Two-year expiration date is printed on the card." },
  { label: "90-day window opens", detail: "USCIS accepts Form I-751 only during the 90 days before expiration." },
  { label: "File I-751", detail: "Joint petition with marriage evidence, or a waiver if you cannot file together." },
  { label: "Extension", detail: "A receipt notice extends residence while USCIS decides the petition." },
];

export default function ConditionalGreenCardTopic() {
  return (
    <div className="bg-white">
      <section className="page-header-offset pb-16 bg-olive-950 text-white">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-gold-400 text-sm font-semibold uppercase tracking-wider mb-3">
            Two-year green card
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Conditional Green Cards and the I-751 Filing Window
          </h1>
          <p className="text-white/80 text-lg leading-relaxed max-w-3xl">
            A conditional green card is the two-year card issued when residence
            is granted through a marriage that is less than two years old.
            Permanent residence ends if Form I-751 is not filed in the 90 days
            before that card expires.
          </p>
        </div>
      </section>

      <section className="py-16 bg-cream-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-olive-950 mb-8">
            The window is the whole case
          </h2>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {windowSteps.map((step, index) => (
              <li key={step.label} className="bg-white rounded-2xl border border-tan-200 p-5">
                <p className="text-gold-600 font-serif text-2xl font-bold">
                  {index + 1}
                </p>
                <h3 className="font-semibold text-olive-950 mt-2 mb-2">{step.label}</h3>
                <p className="text-sm text-slate-700 leading-relaxed">{step.detail}</p>
              </li>
            ))}
          </ol>
          <p className="mt-8 text-slate-700 leading-relaxed max-w-3xl">
            Filing before the 90-day window opens gets the petition rejected.
            Filing after the card expires can put you in removal proceedings.
            Attorney Goncalves calendars the date when the card is issued so
            the petition is ready when the window opens.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-8">
          <article className="rounded-2xl border border-tan-200 p-8">
            <h2 className="font-serif text-2xl font-bold text-olive-950 mb-3">
              Joint filing
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Most couples file together and submit evidence they built a life
              after the green card was issued: shared finances, a shared
              address, children, and photos over time. The question is whether
              the marriage was real, not whether it is perfect.
            </p>
          </article>
          <article className="rounded-2xl border border-tan-200 p-8">
            <h2 className="font-serif text-2xl font-bold text-olive-950 mb-3">
              Filing without your spouse
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Divorce, separation, or abuse can still allow a waiver of the
              joint-filing requirement. That petition is different from a
              standard joint I-751.
            </p>
            <Link
              href="/immigration/removal-of-conditions-divorce"
              className="text-sm font-semibold text-olive-800 underline"
            >
              I-751 after divorce or separation
            </Link>
          </article>
        </div>
      </section>

      <FaqBlock
        items={[
          {
            q: "Does an expired conditional card mean I am no longer a resident?",
            a: "The card is evidence of status, not the status itself. If you file I-751 on time, residence continues while USCIS decides. If you never file, conditional residence terminates.",
          },
          {
            q: "Is a conditional card the same as a ten-year renewal?",
            a: "No. Form I-90 renews or replaces a ten-year card. Form I-751 removes the conditions on a two-year marriage-based card. Filing the wrong form wastes the fee and the window.",
          },
          {
            q: "Will USCIS interview us?",
            a: "Some joint petitions are approved on the papers. Others are scheduled for an interview. We prepare the evidence either way so you are not assembling it after the notice arrives.",
          },
        ]}
      />
      <TopicFooter cta="Review Your I-751 Window" relatedService="removal-of-conditions" />
    </div>
  );
}
