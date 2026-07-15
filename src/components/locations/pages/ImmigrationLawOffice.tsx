import Link from "next/link";
import { UserCheck, Eye, Heart, Phone } from "lucide-react";
import { siteConfig } from "@/lib/constants";

const values = [
  {
    icon: UserCheck,
    title: "One attorney, start to finish",
    body: "Your case is not handed down to a rotating cast of paralegals. Attorney Goncalves knows your file because she is the one building it.",
  },
  {
    icon: Eye,
    title: "Attention to the details that decide cases",
    body: "Immigration outcomes turn on small things — the right box, the right evidence, the right timing. This office is built to catch them.",
  },
  {
    icon: Heart,
    title: "Respect for what is at stake",
    body: "Behind every petition is a family, a marriage, or a future. We treat your timeline as if it were our own.",
  },
];

export default function ImmigrationLawOffice() {
  return (
    <div className="bg-white">
      <section className="page-header-offset pb-16 sm:pb-20 bg-olive-950 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-gold-400 font-semibold text-sm mb-4 uppercase tracking-wide">
            Our Law Office
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            A Law Office Built Around Immigration
          </h1>
          <p className="text-white/80 text-lg sm:text-xl leading-relaxed max-w-3xl">
            {"This is not a general practice that dabbles in immigration between other matters. It is a focused immigration law office in Mystic, Connecticut, where families are the whole practice — not a sideline."}
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-olive-950 mb-12 text-center">
            What You Can Expect Inside Our Practice
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl bg-cream-50 border border-tan-200 p-7">
                <v.icon className="h-9 w-9 text-olive-700 mb-4" />
                <h3 className="font-serif text-lg font-bold text-olive-950 mb-2">{v.title}</h3>
                <p className="text-slate-700 text-sm leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream-50 border-y border-tan-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif text-3xl font-bold text-olive-950 mb-6">
            The Advantage of a Smaller, Focused Office
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            {"Large practices win on volume. A focused office wins on care. Here, your call is returned by the person handling your case, your questions are answered by an attorney, and nothing about your file gets lost in a queue."}
          </p>
          <p className="text-slate-700 leading-relaxed">
            {"For most family immigration matters, that direct relationship is worth more than a big letterhead."}
          </p>
        </div>
      </section>

      <section className="py-16 text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-3xl font-bold text-olive-950 mb-4">
            Come In or Meet by Video
          </h2>
          <p className="text-slate-700 mb-2">{siteConfig.address.full}</p>
          <p className="text-slate-600 text-sm mb-8">Serving Connecticut and clients nationwide</p>
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
