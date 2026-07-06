import Link from "next/link";
import { MapPin, Phone, Compass, HeartHandshake, FileCheck2, Users } from "lucide-react";
import { siteConfig } from "@/lib/constants";
import { LocalFaq } from "../shared";

const townsServed = [
  "Mystic",
  "Stonington",
  "Groton",
  "New London",
  "Waterford",
  "Ledyard",
  "North Stonington",
  "Pawcatuck",
  "Noank",
  "Old Mystic",
  "Gales Ferry",
  "Niantic",
];

const reasons = [
  {
    icon: Compass,
    title: "A neighbor, not a call center",
    body: "When you hire a Mystic immigration lawyer, you should be able to sit across the table from the person handling your file. Our office on Roosevelt Avenue is a short drive from downtown Mystic, and every consultation is with Attorney Goncalves herself.",
  },
  {
    icon: HeartHandshake,
    title: "Service in your language",
    body: "Southeastern Connecticut is home to large Portuguese-speaking and Spanish-speaking communities. We meet clients in English, Spanish, and Portuguese so nothing about your immigration case gets lost in translation.",
  },
  {
    icon: FileCheck2,
    title: "Paperwork done right the first time",
    body: "A single mistake on an immigration form can cost months of waiting or trigger a Request for Evidence. We prepare, double-check, and assemble your petition so it reaches USCIS complete and accurate.",
  },
  {
    icon: Users,
    title: "Built around families",
    body: "Most of the people we help are trying to keep a family together — a spouse abroad, a parent waiting for a green card, a child aging toward 21. We treat your timeline as if it were our own.",
  },
];

const steps = [
  "Book a consultation online or by phone and tell us what you are trying to accomplish.",
  "Meet with Attorney Goncalves in Mystic or by secure video to map out the right pathway.",
  "We prepare your forms, gather supporting evidence, and review everything with you before filing.",
  "We file with USCIS or the consulate and keep you updated at every notice, interview, and decision.",
];

export default function ImmigrationLawyerMysticCt() {
  return (
    <div className="bg-cream-50">
      {/* Hero */}
      <section className="page-header-offset pb-16 sm:pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <p className="inline-flex items-center gap-2 text-olive-700 font-semibold text-sm mb-4">
              <MapPin className="h-4 w-4" /> 12 Roosevelt Ave, Mystic, CT 06355
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-olive-950 mb-6 leading-tight">
              Immigration Lawyer in Mystic, CT
            </h1>
            <p className="text-slate-700 text-lg sm:text-xl leading-relaxed mb-6">
              {"Living in or around Mystic and trying to navigate the U.S. immigration system? The Law Office of Jacquelyn R. Goncalves is a local, family-focused practice that walks beside you from the first form to the final approval."}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/consultation"
                className="inline-flex items-center justify-center rounded-sm bg-olive-800 px-7 py-4 text-sm font-semibold text-white hover:bg-olive-900 transition-colors"
              >
                Schedule a Mystic Consultation
              </Link>
              <a
                href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                className="inline-flex items-center justify-center gap-2 rounded-sm border-2 border-olive-800 px-7 py-4 text-sm font-semibold text-olive-800 hover:bg-olive-800 hover:text-white transition-colors"
              >
                <Phone className="h-4 w-4" /> {siteConfig.phone}
              </a>
            </div>
          </div>
          <div className="bg-olive-950 rounded-3xl p-8 sm:p-10 text-white shadow-2xl">
            <p className="font-serif text-2xl font-bold text-gold-400 mb-6">
              Why Mystic families call us first
            </p>
            <ul className="space-y-4 text-white/80 text-sm sm:text-base">
              <li>Direct access to your attorney — no rotating case managers.</li>
              <li>Bilingual help in Spanish and Portuguese.</li>
              <li>Transparent, flat-fee consultations starting at $99.</li>
              <li>In-person meetings downtown or secure video from home.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why local */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-olive-950 mb-4">
            What a Local Mystic Immigration Lawyer Brings to Your Case
          </h2>
          <p className="text-slate-700 leading-relaxed max-w-3xl mb-10">
            {"U.S. immigration law is federal, so a Connecticut attorney can represent you no matter where you were born. But there is real value in choosing someone close to home — someone who knows the rhythms of southeastern Connecticut, who can meet you in person, and who answers when you call. Here is what that looks like at our Mystic office."}
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((r) => (
              <div key={r.title} className="bg-white rounded-2xl border border-tan-200 p-7">
                <r.icon className="h-9 w-9 text-olive-700 mb-4" />
                <h3 className="font-serif text-xl font-bold text-olive-950 mb-2">{r.title}</h3>
                <p className="text-slate-700 text-sm leading-relaxed">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Towns served */}
      <section className="py-16 bg-olive-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-3xl font-bold mb-3">
            Serving Mystic and the Surrounding Shoreline
          </h2>
          <p className="text-white/70 max-w-3xl mb-8 leading-relaxed">
            {"From the villages of Old Mystic and Noank to the cities of New London and Groton, we help immigrants and their families across New London County and the Connecticut shoreline."}
          </p>
          <div className="flex flex-wrap gap-3">
            {townsServed.map((town) => (
              <span
                key={town}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm"
              >
                <MapPin className="h-3.5 w-3.5 text-gold-400" /> {town}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-olive-950 mb-10">
            How Working With Our Mystic Office Feels
          </h2>
          <ol className="space-y-6">
            {steps.map((step, i) => (
              <li key={step} className="flex gap-5 items-start">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-olive-800 text-white font-serif text-lg font-bold">
                  {i + 1}
                </span>
                <p className="text-slate-700 leading-relaxed pt-1.5">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <LocalFaq
        heading="Questions From Mystic Clients"
        items={[
          {
            q: "Do I need an immigration lawyer who is physically in Mystic?",
            a: "Not strictly — immigration is federal law. But many clients prefer the comfort of a local attorney they can meet in person, drop documents off with, and reach easily. Our office is right in Mystic, and we also offer video consultations for those who prefer to meet from home.",
          },
          {
            q: "What kinds of immigration cases do you handle in Mystic?",
            a: "We focus on family-based immigration: marriage green cards, fiancé visas, I-130 petitions for spouses, children, and parents, adjustment of status, work permits, green card renewals, removal of conditions, and naturalization. We also assist with business and investment immigration matters.",
          },
          {
            q: "How much does it cost to talk to a Mystic immigration lawyer?",
            a: "A 30-minute General Overview Snapshot consultation is $99. A one-hour case-planning consultation is $350 and is credited toward your attorney fees if you retain our office. You will know exactly what you are paying before we begin.",
          },
          {
            q: "Can you help if I live near Mystic but not in town?",
            a: "Yes. We regularly help clients throughout New London County and the shoreline, including Stonington, Groton, New London, Waterford, Ledyard, and Pawcatuck, as well as clients across Connecticut and the country.",
          },
        ]}
      />

      <section className="py-16 bg-tan-100 border-t border-tan-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif text-3xl font-bold text-olive-950 mb-4">
            Talk to a Mystic Immigration Lawyer Today
          </h2>
          <p className="text-slate-700 mb-8 leading-relaxed">
            {"Your immigration journey deserves a steady hand and a familiar face. Reach out and let us show you the clearest path forward."}
          </p>
          <Link
            href="/consultation"
            className="inline-flex items-center justify-center rounded-sm bg-olive-800 px-8 py-4 text-sm font-semibold text-white hover:bg-olive-900 transition-colors"
          >
            Book Your Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
