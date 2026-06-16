import { HeartCrack, FileX, Shield } from "lucide-react";
import { TopicFooter, FaqBlock, DocChecklist } from "../shared";

const waiverPaths = [
  {
    title: "Divorce Waiver",
    basis: "Marriage entered in good faith but ended in divorce or annulment",
    keyEvidence: "Divorce decree, bona fide marriage evidence, proof marriage was genuine",
    interview: "Often required — be prepared to discuss marriage history",
  },
  {
    title: "Battery / Extreme Cruelty Waiver",
    basis: "Applicant or child was subjected to battery or extreme cruelty by U.S. citizen/LPR spouse",
    keyEvidence: "Police reports, medical records, restraining orders, counseling records, affidavits",
    interview: "May qualify for VAWA confidentiality protections",
  },
  {
    title: "Extreme Hardship Waiver",
    basis: "Removal would result in extreme hardship to the applicant",
    keyEvidence: "Medical records, country conditions, financial dependency, family ties",
    interview: "Less common as sole basis but available in limited circumstances",
  },
];

export default function RemovalOfConditionsDivorceTopic() {
  return (
    <div className="bg-white">
      <section className="page-header-offset pb-20 bg-gradient-to-b from-slate-100 to-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-slate-500 font-semibold text-sm mb-3">
            Form I-751 · Post-Divorce
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-navy-900 mb-6">
            Removal of Conditions After Divorce and Separation
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed max-w-3xl mx-auto mb-4">
            If you received a two-year conditional green card through marriage and
            your marriage ended before you filed to remove conditions, you cannot
            file jointly with your spouse. You must file Form I-751 with a waiver
            — and the burden is on you to prove the marriage was entered in good
            faith.
          </p>
          <p className="text-slate-500 leading-relaxed max-w-2xl mx-auto">
            Missing the 90-day filing window before your conditional card expires
            can result in automatic termination of your permanent residence and
            placement in removal proceedings.
          </p>
        </div>
      </section>

      <section className="py-12 bg-olive-800 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-center mb-12">
            Three Waiver Paths After Separation
          </h2>
          <div className="space-y-6">
            {waiverPaths.map((path, i) => (
              <div
                key={path.title}
                className="grid md:grid-cols-4 gap-6 bg-white/5 border border-white/10 rounded-2xl p-8"
              >
                <div className="md:col-span-1">
                  <span className="font-mono text-4xl font-bold text-gold-400/30">
                    0{i + 1}
                  </span>
                  <h3 className="font-serif text-xl font-bold mt-2">
                    {path.title}
                  </h3>
                </div>
                <div>
                  <p className="text-xs text-teal-400 font-semibold uppercase mb-2">
                    Legal Basis
                  </p>
                  <p className="text-white/70 text-sm">{path.basis}</p>
                </div>
                <div>
                  <p className="text-xs text-teal-400 font-semibold uppercase mb-2">
                    Key Evidence
                  </p>
                  <p className="text-white/70 text-sm">{path.keyEvidence}</p>
                </div>
                <div>
                  <p className="text-xs text-teal-400 font-semibold uppercase mb-2">
                    Interview
                  </p>
                  <p className="text-white/70 text-sm">{path.interview}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16">
          <div>
            <HeartCrack className="h-10 w-10 text-rose-500 mb-6" />
            <h2 className="font-serif text-3xl font-bold text-navy-900 mb-6">
              Proving Good Faith After Divorce
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              USCIS understands marriages can end. What they need to see is that
              the marriage was genuine when entered — not a sham to obtain
              immigration benefits. The same evidence used in your original green
              card case remains critical.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              We compile joint financial records, photos, correspondence, and
              affidavits from people who knew your marriage — plus the final
              divorce decree showing the legal end of the relationship.
            </p>
            <div className="bg-rose-50 border border-rose-200 rounded-xl p-6">
              <p className="text-rose-800 text-sm">
                <strong>Important:</strong> You may file I-751 with a divorce
                waiver before the divorce is final if you have filed for divorce
                and the case is pending. We advise on optimal timing.
              </p>
            </div>
          </div>
          <div>
            <FileX className="h-10 w-10 text-navy-900 mb-6" />
            <h2 className="font-serif text-3xl font-bold text-navy-900 mb-6">
              The 90-Day Filing Window
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Form I-751 must be filed during the 90-day period before your
              conditional green card expires. Filing early (before the window
              opens) or late (after expiration) can result in rejection or
              termination of status.
            </p>
            <DocChecklist
              title="I-751 Waiver Filing Package"
              items={[
                "Form I-751 with waiver request checked",
                "Copy of conditional green card (front and back)",
                "Final divorce decree or proof divorce filed",
                "Joint financial documents from marriage",
                "Photos together during marriage",
                "Joint lease, mortgage, or utility bills",
                "Affidavits from friends and family",
                "Birth certificates of children together (if any)",
                "Filing fee",
              ]}
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 flex items-start gap-6">
          <Shield className="h-10 w-10 shrink-0" />
          <div>
            <h2 className="font-serif text-2xl font-bold mb-3">
              What If I Receive a Notice to Appear (NTA)?
            </h2>
            <p className="text-white/90 leading-relaxed">
              If your conditional residence expires before I-751 is filed or
              approved, USCIS may issue a Notice to Appear placing you in removal
              proceedings. You can still file I-751 in immigration court. Contact
              an attorney immediately if you receive an NTA.
            </p>
          </div>
        </div>
      </section>

      <FaqBlock
        title="I-751 After Divorce FAQs"
        items={[
          {
            q: "Can my ex-spouse still help my case?",
            a: "They are not required to participate in a waiver filing. However, a willing ex-spouse affidavit confirming the marriage was genuine can strengthen your case significantly.",
          },
          {
            q: "Will USCIS contact my ex-spouse?",
            a: "In waiver cases, USCIS generally does not contact the petitioning spouse. Your case is adjudicated on the evidence you submit.",
          },
          {
            q: "How long does I-751 waiver processing take?",
            a: "Currently 18–36 months. Filing before card expiration extends your conditional status while the case is pending.",
          },
        ]}
      />

      <TopicFooter
        cta="Discuss Your I-751 Waiver"
        relatedService="removal-of-conditions"
      />
    </div>
  );
}
