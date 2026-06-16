import { CreditCard, Clock, AlertTriangle } from "lucide-react";
import { TopicFooter, FaqBlock, DocChecklist } from "../shared";

const scenarios = [
  {
    title: "Card Expiring in 6 Months",
    action: "File I-90 renewal now",
    urgency: "Normal",
    color: "bg-teal-100 text-teal-800",
  },
  {
    title: "Card Already Expired",
    action: "File I-90 immediately — status not lost but card needed",
    urgency: "High",
    color: "bg-gold-100 text-gold-800",
  },
  {
    title: "Card Lost or Stolen",
    action: "File replacement + consider police report",
    urgency: "High",
    color: "bg-red-100 text-red-800",
  },
  {
    title: "Name Change",
    action: "File replacement with legal name change document",
    urgency: "Normal",
    color: "bg-blue-100 text-blue-800",
  },
  {
    title: "Incorrect Information",
    action: "File replacement with correct documentation",
    urgency: "Medium",
    color: "bg-purple-100 text-purple-800",
  },
  {
    title: "Card Never Received",
    action: "Inquire with USCIS, then file replacement if needed",
    urgency: "Medium",
    color: "bg-slate-100 text-slate-800",
  },
];

export default function I90Topic() {
  return (
    <div className="bg-cream-50">
      <section className="page-header-offset pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-teal-600 font-semibold text-sm mb-3">
              Permanent Resident Card
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-navy-900 mb-6">
              Form I-90: Renew or Replace Your Green Card
            </h1>
            <p className="text-slate-600 text-lg leading-relaxed mb-4">
              Lawful permanent residents receive a card valid for 10 years (or 2
              years if conditional). Form I-90 is used to renew an expiring card
              or replace one that is lost, stolen, damaged, or contains errors.
            </p>
            <p className="text-slate-500 leading-relaxed">
              An expired green card does not mean you lose permanent residence —
              but it creates serious problems with employment verification,
              travel, and accessing government benefits. Keep your card current.
            </p>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-navy-900 to-teal-800 rounded-3xl p-10 text-white shadow-2xl">
              <CreditCard className="h-12 w-12 text-gold-400 mb-6" />
              <p className="font-serif text-5xl font-bold text-gold-400 mb-2">
                10
              </p>
              <p className="text-xl font-semibold mb-2">Year Validity</p>
              <p className="text-white/60 text-sm leading-relaxed">
                Standard permanent resident cards expire every 10 years. File
                I-90 six months before expiration. Conditional cards (2-year)
                require Form I-751 instead.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-navy-900 mb-4">
            Which Situation Applies to You?
          </h2>
          <p className="text-slate-600 mb-10">
            I-90 has different filing reasons — selecting the wrong one can delay
            processing or cause rejection.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {scenarios.map((s) => (
              <div
                key={s.title}
                className="bg-white rounded-xl p-6 border border-cream-200 shadow-sm"
              >
                <span
                  className={`inline-block px-2 py-1 rounded text-xs font-bold mb-3 ${s.color}`}
                >
                  {s.urgency}
                </span>
                <h3 className="font-bold text-navy-900 mb-2">{s.title}</h3>
                <p className="text-slate-600 text-sm">{s.action}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-olive-800 text-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
          <div>
            <Clock className="h-10 w-10 text-gold-400 mb-6" />
            <h2 className="font-serif text-3xl font-bold mb-6">
              I-90 Processing Timeline
            </h2>
            <div className="space-y-4">
              {[
                { step: "File I-90 online or by mail", time: "Day 0" },
                { step: "Receipt notice (I-797C) issued", time: "2–4 weeks" },
                { step: "Biometrics appointment scheduled", time: "4–8 weeks" },
                { step: "Card production and mailing", time: "8–14 months total" },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex justify-between items-center border-b border-white/10 pb-3"
                >
                  <p className="text-white/80 text-sm">{item.step}</p>
                  <p className="text-gold-400 font-mono text-sm">{item.time}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-red-950/50 border border-red-500/30 rounded-2xl p-8">
            <AlertTriangle className="h-8 w-8 text-red-400 mb-4" />
            <h3 className="font-bold text-red-300 mb-3">
              I-90 vs. I-751 — Don&apos;t Confuse Them
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              If your card says &ldquo;CR1&rdquo; or &ldquo;Conditional
              Resident&rdquo; and is valid for 2 years, you need Form I-751 (Removal
              of Conditions) — not I-90. Filing the wrong form wastes time and
              fees. We confirm which form applies before filing.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <DocChecklist
            title="I-90 Filing Checklist"
            items={[
              "Form I-90 completed and signed",
              "Filing fee (or fee waiver Form I-912)",
              "Copy of current green card (front and back)",
              "Copy of government-issued photo ID",
              "Legal name change document (if applicable)",
              "Police report (if card stolen — recommended)",
              "Passport-style photos (if filing by mail)",
            ]}
            columns={1}
          />
        </div>
      </section>

      <FaqBlock
        title="I-90 Questions"
        items={[
          {
            q: "Can I travel with an expired green card?",
            a: "Airlines may refuse boarding for international flights. You can apply for an I-131A carrier boarding document at a U.S. embassy if abroad with an expired card.",
          },
          {
            q: "Will I lose permanent residence if my card expires?",
            a: "No. Permanent residence is a status, not a card. But you must renew the card to prove your status for employment, travel, and benefits.",
          },
          {
            q: "Can I get temporary proof of status while I-90 is pending?",
            a: "Yes. The I-797C receipt notice extends your expired card validity for 24 months (as of recent USCIS policy updates). Carry it with your expired card.",
          },
        ]}
      />

      <TopicFooter cta="Renew or Replace Your Green Card" relatedService="green-card-renewal" />
    </div>
  );
}
