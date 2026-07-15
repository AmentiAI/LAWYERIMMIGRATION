import Link from "next/link";
import { Phone } from "lucide-react";
import { siteConfig } from "@/lib/constants";
import { LocalFaq } from "../shared";

const compare = [
  { point: "Who handles your case", big: "A rotating team of paralegals", boutique: "The attorney, personally" },
  { point: "Getting a call back", big: "Through a front desk and queue", boutique: "Directly from your lawyer" },
  { point: "How you are treated", big: "One of hundreds of files", boutique: "A family with a name and a story" },
  { point: "Fees", big: "Layered and often unclear", boutique: "Explained plainly, up front" },
];

export default function ImmigrationLawFirm() {
  return (
    <div className="bg-white">
      <section className="page-header-offset pb-16 sm:pb-20 bg-cream-50 border-b border-tan-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-olive-950 mb-6 leading-tight">
            A Boutique Immigration Law Firm — Not an Assembly Line
          </h1>
          <p className="text-slate-700 text-lg sm:text-xl leading-relaxed max-w-3xl">
            {"Bigger is not always better when your family's future is on the line. The Law Office of Jacquelyn R. Goncalves is a boutique immigration firm built for personal attention, where your case never becomes a number."}
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-olive-950 mb-10 text-center">
            Boutique Firm vs. Big Firm
          </h2>
          <div className="overflow-hidden rounded-2xl border border-tan-200">
            <div className="grid grid-cols-3 bg-olive-950 text-white text-sm font-semibold">
              <div className="p-4"> </div>
              <div className="p-4 text-center border-l border-white/10">Large Firm</div>
              <div className="p-4 text-center border-l border-white/10 bg-olive-800">This Office</div>
            </div>
            {compare.map((row, i) => (
              <div key={row.point} className={`grid grid-cols-3 text-sm ${i % 2 ? "bg-cream-50" : "bg-white"}`}>
                <div className="p-4 font-semibold text-olive-900">{row.point}</div>
                <div className="p-4 text-slate-600 border-l border-tan-200">{row.big}</div>
                <div className="p-4 text-olive-900 font-medium border-l border-tan-200 bg-olive-50">{row.boutique}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-olive-950 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif text-3xl font-bold mb-6">How We Keep It Personal</h2>
          <p className="text-white/80 leading-relaxed">
            {"By choosing to stay small on purpose. Fewer clients means more time for each one — time to prepare a filing carefully, to explain every step, and to be reachable when a question or a notice arrives. That is the whole promise of a boutique firm."}
          </p>
        </div>
      </section>

      <LocalFaq
        heading="Choosing an Immigration Law Firm"
        items={[
          {
            q: "Is a small firm as capable as a large one for immigration?",
            a: "Yes. Immigration is federal and document-driven, so what matters most is the attorney's focus and care — not the size of the office. A boutique firm often gives family cases more attention, not less.",
          },
          {
            q: "Will my case be a low priority at a small firm?",
            a: "The opposite. With a deliberately limited caseload, your matter gets direct attorney time rather than being one of thousands in a large firm's pipeline.",
          },
          {
            q: "Do you handle cases outside Connecticut?",
            a: "Yes. The firm represents clients across the United States by secure video, with in-person meetings available at the Mystic, CT office.",
          },
        ]}
      />

      <section className="py-16 text-center bg-cream-50 border-t border-tan-200">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-3xl font-bold text-olive-950 mb-6">
            Experience the Difference
          </h2>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/consultation" className="inline-flex items-center justify-center rounded-sm bg-olive-800 px-8 py-4 text-sm font-semibold text-white hover:bg-olive-900 transition-colors">
              Book a Consultation
            </Link>
            <a href={`tel:${siteConfig.phone.replace(/\D/g, "")}`} className="inline-flex items-center justify-center gap-2 rounded-sm border-2 border-olive-800 px-8 py-4 text-sm font-semibold text-olive-800 hover:bg-olive-800 hover:text-white transition-colors">
              <Phone className="h-4 w-4" /> {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
