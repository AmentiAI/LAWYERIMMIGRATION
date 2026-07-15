import Link from "next/link";
import { MapPin, Clock, CheckCircle2, XCircle, Phone } from "lucide-react";
import { siteConfig } from "@/lib/constants";

const govOffice = [
  "Accepts filings and collects biometrics",
  "Cannot give you legal advice",
  "Cannot tell you which option is best for you",
  "Long waits and no one accountable to you",
];

const lawOffice = [
  "Builds a strategy around your goals",
  "Prepares and double-checks every filing",
  "Answers your questions in plain language",
  "One attorney responsible from start to finish",
];

const bring = [
  "Any notices or receipts from USCIS",
  "Passports and current immigration documents",
  "Prior applications or petitions, if any",
  "A list of your questions and concerns",
];

export default function ImmigrationOffice() {
  return (
    <div className="bg-white">
      <section className="page-header-offset pb-16 sm:pb-20 bg-olive-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-olive-950 mb-6 leading-tight">
            Looking for an Immigration Office in Connecticut?
          </h1>
          <p className="text-slate-700 text-lg sm:text-xl leading-relaxed max-w-3xl">
            {"If you searched for an “immigration office,” you may be looking for the government — or for someone who can actually guide you. Here is the difference, and how our Mystic law office helps."}
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-olive-950 mb-12 text-center">
            A Government Field Office vs. a Law Office
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-3xl border-2 border-tan-200 bg-cream-50 p-7">
              <h3 className="font-serif text-xl font-bold text-olive-950 mb-5">USCIS Field Office</h3>
              <ul className="space-y-3">
                {govOffice.map((g) => (
                  <li key={g} className="flex items-start gap-3">
                    <XCircle className="h-5 w-5 text-slate-400 shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-sm">{g}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border-2 border-olive-300 bg-olive-50 p-7">
              <h3 className="font-serif text-xl font-bold text-olive-950 mb-5">Our Immigration Law Office</h3>
              <ul className="space-y-3">
                {lawOffice.map((l) => (
                  <li key={l} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-olive-700 shrink-0 mt-0.5" />
                    <span className="text-slate-800 text-sm">{l}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream-50 border-y border-tan-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10">
          <div>
            <MapPin className="h-8 w-8 text-olive-700 mb-4" />
            <h2 className="font-serif text-2xl font-bold text-olive-950 mb-3">Visit Our Office</h2>
            <p className="text-slate-700 mb-2">{siteConfig.address.full}</p>
            <p className="inline-flex items-center gap-2 text-slate-600 text-sm">
              <Clock className="h-4 w-4" /> {siteConfig.hours.weekdays}
            </p>
            <p className="text-slate-600 text-sm ml-6">{siteConfig.hours.saturday}</p>
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(siteConfig.address.full)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-sm font-semibold text-olive-700 hover:text-olive-900"
            >
              Get directions →
            </a>
          </div>
          <div>
            <h2 className="font-serif text-2xl font-bold text-olive-950 mb-4">What to Bring</h2>
            <ul className="space-y-2">
              {bring.map((b) => (
                <li key={b} className="flex items-start gap-2 text-slate-700 text-sm">
                  <CheckCircle2 className="h-5 w-5 text-olive-700 shrink-0" /> {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-3xl font-bold text-olive-950 mb-4">
            Prefer to Meet by Video?
          </h2>
          <p className="text-slate-700 mb-8">
            {"You do not have to come to an office at all. Many clients handle their entire case by secure video and phone from anywhere in the country."}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/consultation" className="inline-flex items-center justify-center rounded-sm bg-olive-800 px-8 py-4 text-sm font-semibold text-white hover:bg-olive-900 transition-colors">
              Book In Person or by Video
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
