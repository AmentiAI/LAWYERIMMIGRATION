import Link from "next/link";
import { MapPinned, Plane, Home, Briefcase, GraduationCap, ArrowRight } from "lucide-react";
import { LocalFaq } from "../shared";

const regions = [
  { name: "New London County", towns: "Mystic, New London, Groton, Norwich" },
  { name: "Hartford County", towns: "Hartford, New Britain, Manchester, Enfield" },
  { name: "New Haven County", towns: "New Haven, Waterbury, Meriden, Milford" },
  { name: "Fairfield County", towns: "Bridgeport, Stamford, Danbury, Norwalk" },
  { name: "Middlesex County", towns: "Middletown, Old Saybrook, Cromwell" },
  { name: "Windham & Tolland", towns: "Willimantic, Putnam, Vernon, Mansfield" },
];

const pathways = [
  {
    icon: Home,
    title: "Family & Marriage",
    body: "If your spouse, parent, child, or sibling is abroad or already here, we build the petition and shepherd it through to a green card.",
  },
  {
    icon: Plane,
    title: "Fiancé & Consular",
    body: "K-1 fiancé visas and immigrant visa processing through U.S. consulates for relatives living overseas.",
  },
  {
    icon: GraduationCap,
    title: "Citizenship",
    body: "Naturalization for permanent residents ready to take the oath, including civics and interview preparation.",
  },
  {
    icon: Briefcase,
    title: "Work & Business",
    body: "Employment authorization documents, green card renewals, and immigration matters tied to entrepreneurship and investment.",
  },
];

export default function ImmigrationLawyerConnecticut() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="page-header-offset pb-16 sm:pb-20 bg-gradient-to-br from-olive-950 via-olive-900 to-olive-800 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-5 gap-10 items-center">
          <div className="lg:col-span-3">
            <p className="inline-flex items-center gap-2 text-gold-400 font-semibold text-sm mb-4">
              <MapPinned className="h-4 w-4" /> Serving all of Connecticut
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Your Connecticut Immigration Lawyer
            </h1>
            <p className="text-white/80 text-lg sm:text-xl leading-relaxed mb-8">
              {"From the shoreline to the Gold Coast to the Quiet Corner, the Law Office of Jacquelyn R. Goncalves helps Connecticut residents and their families move through the immigration system with confidence."}
            </p>
            <Link
              href="/consultation"
              className="inline-flex items-center gap-2 rounded-sm bg-gold-500 px-8 py-4 text-sm font-semibold text-olive-950 hover:bg-gold-400 transition-colors"
            >
              Start Your Case <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="lg:col-span-2 bg-white/10 backdrop-blur rounded-3xl p-8 border border-white/15">
            <p className="font-serif text-xl font-bold text-gold-400 mb-4">Statewide, with a home base</p>
            <p className="text-white/80 text-sm leading-relaxed">
              {"Our office sits in Mystic, but immigration law is federal — so we represent clients in every Connecticut county and far beyond. Meet us in person on the shoreline, or by secure video wherever you are in the state."}
            </p>
          </div>
        </div>
      </section>

      {/* Statewide intro */}
      <section className="py-16 sm:py-20 bg-cream-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-olive-950 mb-6">
            One Lawyer for Immigrants Across the Constitution State
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            {"Connecticut is one of the most diverse states in the nation, home to immigrant communities from Latin America, the Caribbean, Europe, Asia, and Africa. Whether you settled in a coastal town like Mystic, a city like Hartford or New Haven, or a suburb in Fairfield County, the immigration challenges you face are real — and you do not have to face them alone."}
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            {"As a Connecticut immigration lawyer, Attorney Goncalves handles the petitions and applications that keep families together and put people on the path to permanent residence and citizenship. Because immigration law is governed by federal statutes and federal agencies, your physical location within Connecticut never limits the help you can receive — what matters is having an attorney who prepares your case carefully and stays with you through every step."}
          </p>
          <p className="text-slate-700 leading-relaxed">
            {"That is the promise of this practice: personal, attentive representation delivered to clients across the entire state, without the impersonal feel of a large national firm."}
          </p>
        </div>
      </section>

      {/* Regions */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-3xl font-bold text-olive-950 mb-10 text-center">
            Connecticut Communities We Serve
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {regions.map((r) => (
              <div key={r.name} className="rounded-2xl bg-olive-50 border border-olive-200 p-6">
                <h3 className="font-serif text-lg font-bold text-olive-950 mb-1">{r.name}</h3>
                <p className="text-slate-600 text-sm">{r.towns}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pathways */}
      <section className="py-16 sm:py-20 bg-olive-950 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-12 text-center">
            How We Help Connecticut Immigrants
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pathways.map((p) => (
              <div key={p.title} className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <p.icon className="h-9 w-9 text-gold-400 mb-4" />
                <h3 className="font-serif text-lg font-bold mb-2">{p.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LocalFaq
        heading="Connecticut Immigration Questions"
        items={[
          {
            q: "Does my immigration lawyer need to be in my Connecticut town?",
            a: "No. Immigration is federal law, so a Connecticut immigration lawyer can represent you whether you live in Stamford, Hartford, New Haven, or anywhere else in the state. Many clients meet by secure video; others visit our Mystic office in person.",
          },
          {
            q: "What areas of Connecticut do you serve?",
            a: "We assist clients in all eight Connecticut counties — Fairfield, Hartford, Litchfield, Middlesex, New Haven, New London, Tolland, and Windham — as well as clients across the United States and abroad.",
          },
          {
            q: "What types of cases does a Connecticut immigration lawyer handle here?",
            a: "Our practice centers on family-based immigration: green cards, marriage and fiancé petitions, adjustment of status, work permits, naturalization, and consular processing, along with business and investment immigration matters.",
          },
          {
            q: "Can you represent me if I move out of Connecticut?",
            a: "Yes. Because we practice federal immigration law, we can continue representing you if you relocate to another state or even abroad while your case is pending.",
          },
        ]}
      />

      <section className="py-16 bg-cream-50 border-t border-tan-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif text-3xl font-bold text-olive-950 mb-4">
            Connecticut Families Trust Us With What Matters Most
          </h2>
          <p className="text-slate-700 mb-8 leading-relaxed">
            {"Wherever you are in the state, your immigration goals are within reach. Let us help you get there."}
          </p>
          <Link
            href="/consultation"
            className="inline-flex items-center justify-center rounded-sm bg-olive-800 px-8 py-4 text-sm font-semibold text-white hover:bg-olive-900 transition-colors"
          >
            Book a Statewide Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
