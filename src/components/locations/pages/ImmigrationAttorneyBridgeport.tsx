import Link from "next/link";
import { Video, Building, Phone } from "lucide-react";
import { siteConfig } from "@/lib/constants";
import { LocalFaq } from "../shared";

const towns = [
  "Bridgeport",
  "Stamford",
  "Norwalk",
  "Danbury",
  "Fairfield",
  "Stratford",
  "Trumbull",
  "Shelton",
];

const services = [
  "Family-based green card petitions",
  "Marriage and fiancé (K-1) visas",
  "Adjustment of status and consular processing",
  "Citizenship and naturalization (N-400)",
];

export default function ImmigrationAttorneyBridgeport() {
  return (
    <div className="bg-white">
      <section className="page-header-offset pb-16 sm:pb-20 bg-olive-950 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="inline-flex items-center gap-2 text-gold-400 font-semibold text-sm mb-4">
            <Building className="h-4 w-4" /> Serving Fairfield County
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Immigration Attorney Serving Bridgeport, Connecticut
          </h1>
          <p className="text-white/80 text-lg sm:text-xl leading-relaxed max-w-3xl">
            {"Bridgeport is home to one of Connecticut's largest and most diverse immigrant communities. Attorney Jacquelyn R. Goncalves helps families across the city and Fairfield County — by secure video from home, or in person at our Connecticut office."}
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-olive-950 mb-4 text-center">
            Immigration Help Across Fairfield County
          </h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-10">
            {"You do not need a lawyer on your block — you need the right lawyer. We serve clients throughout the region:"}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {towns.map((t) => (
              <div key={t} className="rounded-xl border border-tan-200 bg-cream-50 py-4 text-center font-medium text-olive-900">
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream-50 border-y border-tan-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <Video className="h-9 w-9 text-olive-700 mb-4" />
            <h2 className="font-serif text-2xl font-bold text-olive-950 mb-3">
              Bridgeport to Mystic — No Long Drive Required
            </h2>
            <p className="text-slate-700 leading-relaxed">
              {"Fairfield County is a distance from our shoreline office, and that is exactly why we built a video-first practice. Meet your attorney from your kitchen table, share documents securely online, and handle your whole case without I-95 traffic."}
            </p>
          </div>
          <ul className="space-y-3">
            {services.map((s) => (
              <li key={s} className="flex items-center gap-3 bg-white rounded-xl p-4 border border-tan-200">
                <span className="h-2 w-2 rounded-full bg-olive-700 shrink-0" />
                <span className="text-slate-800 text-sm">{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <LocalFaq
        heading="Bridgeport Immigration Questions"
        items={[
          {
            q: "Do I have to travel to your office in Mystic?",
            a: "No. Most Bridgeport-area clients work with us entirely by secure video and phone. In-person meetings are available at the Connecticut office if you prefer.",
          },
          {
            q: "Do you speak Spanish and Portuguese?",
            a: "Yes. Consultations and case work are handled in English, Spanish, and Portuguese — important in a community as diverse as Bridgeport.",
          },
          {
            q: "What kinds of cases do you take from Fairfield County?",
            a: "Family petitions, marriage and fiancé visas, adjustment of status, consular processing, and naturalization, among other family immigration matters.",
          },
        ]}
      />

      <section className="py-16 text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-3xl font-bold text-olive-950 mb-6">
            Get Started From Bridgeport
          </h2>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/consultation" className="inline-flex items-center justify-center rounded-sm bg-olive-800 px-8 py-4 text-sm font-semibold text-white hover:bg-olive-900 transition-colors">
              Book a Video Consultation
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
