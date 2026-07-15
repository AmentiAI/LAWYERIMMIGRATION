import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";
import { siteConfig } from "@/lib/constants";

const services = [
  { slug: "family-based-petitions", name: "Family-Based Petitions", text: "Sponsor a spouse, child, parent, or sibling for a green card." },
  { slug: "adjustment-of-status", name: "Adjustment of Status", text: "Apply for a green card from inside the United States." },
  { slug: "fiance-petitions", name: "Fiancé Petitions", text: "K-1 visas to bring a fiancé to marry in the U.S." },
  { slug: "consular-processing", name: "Consular Processing", text: "Immigrant visa processing through a U.S. consulate abroad." },
  { slug: "citizenship-naturalization", name: "Citizenship & Naturalization", text: "Guidance through the N-400 process to U.S. citizenship." },
  { slug: "removal-of-conditions", name: "Removal of Conditions", text: "Form I-751 to make a conditional green card permanent." },
  { slug: "work-permit-renewal", name: "Work Permit Renewal", text: "Keep your employment authorization current with Form I-765." },
  { slug: "green-card-renewal", name: "Green Card Renewal", text: "Renew or replace a permanent resident card with Form I-90." },
];

const audiences = [
  "Families trying to reunite across borders",
  "Couples building a life together in the U.S.",
  "Green card holders ready to become citizens",
  "Workers and entrepreneurs securing their status",
];

export default function ImmigrationServices() {
  return (
    <div className="bg-white">
      <section className="page-header-offset pb-16 sm:pb-20 bg-olive-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-olive-950 mb-6 leading-tight">
            Immigration Services for Families and Individuals
          </h1>
          <p className="text-slate-700 text-lg sm:text-xl leading-relaxed max-w-3xl">
            {"From a first petition to the oath of citizenship, the Law Office of Jacquelyn R. Goncalves handles the full range of family and individual immigration matters — each one personally, start to finish."}
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-olive-950 mb-12 text-center">
            How We Can Help
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group rounded-2xl border border-tan-200 p-5 hover:border-olive-500 hover:shadow-md transition-all"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-serif text-base font-bold text-olive-950">{s.name}</h3>
                  <ArrowUpRight className="h-4 w-4 text-olive-500 group-hover:text-olive-700 shrink-0" />
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">{s.text}</p>
              </Link>
            ))}
          </div>
          <p className="text-center text-slate-600 text-sm mt-8">
            Looking for something else?{" "}
            <Link href="/services" className="text-olive-700 font-semibold hover:text-olive-900">
              See all services
            </Link>
          </p>
        </div>
      </section>

      <section className="py-16 bg-olive-950 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-serif text-3xl font-bold mb-4">Who We Serve</h2>
            <p className="text-white/75 leading-relaxed">
              {"Most of the people we help are simply trying to keep a family together or take the next step in their life here. We meet clients in English, Spanish, and Portuguese."}
            </p>
          </div>
          <ul className="space-y-3">
            {audiences.map((a) => (
              <li key={a} className="flex items-center gap-3 border-b border-white/10 pb-3">
                <span className="h-2 w-2 rounded-full bg-gold-400 shrink-0" />
                <span className="text-white/85">{a}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-3xl font-bold text-olive-950 mb-4">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-slate-700 mb-8">
            {"That is exactly what a consultation is for. Tell us your situation and we will point you to the right path."}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/consultation" className="inline-flex items-center justify-center rounded-sm bg-olive-800 px-8 py-4 text-sm font-semibold text-white hover:bg-olive-900 transition-colors">
              Book a Consultation
            </Link>
            <a href={`tel:${siteConfig.phone.replace(/\D/g, "")}`} className="inline-flex items-center justify-center gap-2 rounded-sm border-2 border-olive-800 px-8 py-4 text-sm font-semibold text-olive-800 hover:bg-olive-800 hover:text-white transition-colors">
              <Phone className="h-4 w-4" /> Call Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
