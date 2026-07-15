import Link from "next/link";
import { Route, Phone } from "lucide-react";
import { siteConfig } from "@/lib/constants";
import { LocalFaq } from "../shared";

const process = [
  { t: "Reach out", d: "Book online or call. Tell us briefly what you need — a green card, citizenship, a petition, or just answers." },
  { t: "Meet by video", d: "Sit down with the attorney over secure video from anywhere in the Hartford area. No commute to the shoreline." },
  { t: "We prepare everything", d: "Your petition and evidence are assembled, reviewed, and filed correctly the first time." },
  { t: "Stay informed", d: "You hear directly from your attorney at each step — including interview prep and any USCIS notices." },
];

const areas = ["Hartford", "West Hartford", "New Britain", "Manchester", "East Hartford", "Bristol", "Newington", "Wethersfield"];

export default function ImmigrationLawyerHartford() {
  return (
    <div className="bg-white">
      <section className="page-header-offset pb-16 sm:pb-20 bg-olive-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="inline-flex items-center gap-2 text-olive-700 font-semibold text-sm mb-4">
            <Route className="h-4 w-4" /> Central Connecticut
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-olive-950 mb-6 leading-tight">
            Immigration Lawyer for Hartford, Connecticut
          </h1>
          <p className="text-slate-700 text-lg sm:text-xl leading-relaxed max-w-3xl">
            {"From the capital region to the towns along the I-84 and I-91 corridors, families in and around Hartford turn to Attorney Jacquelyn R. Goncalves for direct, personal immigration help — most of it handled conveniently by video."}
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-olive-950 mb-10 text-center">
            How Working With Us Looks From Hartford
          </h2>
          <ol className="space-y-5">
            {process.map((p, i) => (
              <li key={p.t} className="flex gap-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-olive-800 text-white font-bold">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-serif text-lg font-bold text-olive-950 mb-1">{p.t}</h3>
                  <p className="text-slate-700 text-sm leading-relaxed">{p.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-14 bg-olive-950 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif text-2xl font-bold mb-6">Serving the Greater Hartford Area</h2>
          <div className="flex flex-wrap justify-center gap-2">
            {areas.map((a) => (
              <span key={a} className="rounded-full border border-white/20 px-4 py-1.5 text-sm text-white/85">
                {a}
              </span>
            ))}
          </div>
        </div>
      </section>

      <LocalFaq
        heading="Hartford Immigration — Common Questions"
        items={[
          {
            q: "Can you represent me if you are not based in Hartford?",
            a: "Yes. Immigration law is federal, so a Connecticut attorney can represent you throughout the Hartford area and the entire United States. We meet clients by secure video and handle documents online.",
          },
          {
            q: "Is a video consultation as good as meeting in person?",
            a: "For most immigration matters, yes. You get the same direct attorney attention, the same careful case preparation, and the convenience of skipping the drive.",
          },
          {
            q: "What immigration matters do you handle for Hartford clients?",
            a: "Family petitions, green cards, adjustment of status, consular processing, work permit renewals, and citizenship, among other family-based cases.",
          },
        ]}
      />

      <section className="py-16 text-center bg-cream-50 border-t border-tan-200">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-3xl font-bold text-olive-950 mb-6">
            Start Your Case From Hartford Today
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
