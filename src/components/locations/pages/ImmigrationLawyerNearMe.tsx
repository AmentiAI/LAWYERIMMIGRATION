import Link from "next/link";
import { Navigation, Video, MapPin, Search, CheckCircle2, Phone } from "lucide-react";
import { siteConfig } from "@/lib/constants";
import { LocalFaq } from "../shared";

const meetingOptions = [
  {
    icon: MapPin,
    title: "In Person, Near You",
    body: "Visit our office in Mystic, Connecticut — convenient to the I-95 shoreline corridor and easy to reach from New London, Groton, Stonington, and Westerly. Sit down face to face with the attorney handling your case.",
    cta: "Get directions",
  },
  {
    icon: Video,
    title: "By Secure Video",
    body: "Cannot find an immigration lawyer close enough? Meet from your living room. Our encrypted video consultations give you the same direct attorney access without the drive, wherever you are located.",
    cta: "Book a video consult",
  },
];

const checklist = [
  "Does the lawyer focus on immigration, not a little of everything?",
  "Will you work directly with the attorney, or be passed to staff?",
  "Are the consultation fees and attorney fees explained clearly up front?",
  "Can they communicate in your preferred language?",
  "Do they respond promptly when you reach out?",
];

export default function ImmigrationLawyerNearMe() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="page-header-offset pb-16 sm:pb-20 bg-olive-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="inline-flex items-center gap-2 text-olive-700 font-semibold text-sm mb-4">
            <Search className="h-4 w-4" /> Searching &ldquo;immigration lawyer near me&rdquo;?
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-olive-950 mb-6 leading-tight">
            Looking for an Immigration Lawyer Near You?
          </h1>
          <p className="text-slate-700 text-lg sm:text-xl leading-relaxed mb-8 max-w-3xl mx-auto">
            {"If you typed those words into a search bar, you want help you can trust and reach. The Law Office of Jacquelyn R. Goncalves offers both local, in-person meetings in Mystic and convenient video consultations across Connecticut and the United States."}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/consultation"
              className="inline-flex items-center justify-center rounded-sm bg-olive-800 px-7 py-4 text-sm font-semibold text-white hover:bg-olive-900 transition-colors"
            >
              Find a Time to Meet
            </Link>
            <a
              href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
              className="inline-flex items-center justify-center gap-2 rounded-sm border-2 border-olive-800 px-7 py-4 text-sm font-semibold text-olive-800 hover:bg-olive-800 hover:text-white transition-colors"
            >
              <Phone className="h-4 w-4" /> Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Meeting options */}
      <section className="py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-olive-950 mb-10 text-center">
            Two Easy Ways to Meet Your Immigration Lawyer
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {meetingOptions.map((o) => (
              <div key={o.title} className="rounded-3xl border-2 border-olive-200 p-8 hover:border-olive-500 transition-colors">
                <o.icon className="h-10 w-10 text-olive-700 mb-5" />
                <h3 className="font-serif text-2xl font-bold text-olive-950 mb-3">{o.title}</h3>
                <p className="text-slate-700 leading-relaxed mb-5">{o.body}</p>
                <Link href="/consultation" className="inline-flex items-center gap-2 text-olive-700 font-semibold text-sm hover:text-olive-900">
                  {o.cta} <Navigation className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why proximity */}
      <section className="py-16 bg-cream-50 border-y border-tan-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-3xl font-bold text-olive-950 mb-6">
            Does Your Immigration Lawyer Really Have to Be Nearby?
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            {"It is a common and reasonable question. The honest answer: immigration law is federal, which means an attorney licensed and experienced in this area can represent you no matter where you live in the United States. The forms go to the same federal agencies, the law is the same in every state, and most communication happens by mail, online, and at federal offices."}
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            {"So why do so many people search for a lawyer near them? Because proximity brings comfort. Being able to drop off documents, shake hands across a desk, and put a face to the person guiding your future genuinely matters when the stakes are this high. We honor that instinct by welcoming local clients to our Mystic office — while also making sure distance never stops anyone from getting excellent representation through video meetings."}
          </p>
          <p className="text-slate-700 leading-relaxed">
            {"In short: choose a lawyer who is qualified and attentive first, and convenient second. With this office, you get both."}
          </p>
        </div>
      </section>

      {/* Checklist */}
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-3xl font-bold text-olive-950 mb-8">
            How to Choose the Right Immigration Lawyer Near You
          </h2>
          <ul className="space-y-4">
            {checklist.map((item) => (
              <li key={item} className="flex items-start gap-3 bg-olive-50 rounded-xl p-5 border border-olive-100">
                <CheckCircle2 className="h-6 w-6 text-olive-700 shrink-0" />
                <span className="text-slate-800">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Directions */}
      <section className="py-14 bg-olive-950 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <MapPin className="h-9 w-9 text-gold-400 mx-auto mb-4" />
          <h2 className="font-serif text-2xl font-bold mb-3">Our Local Office</h2>
          <p className="text-white/80">{siteConfig.address.full}</p>
          <p className="text-white/60 text-sm mt-2">{siteConfig.hours.weekdays} &middot; {siteConfig.hours.saturday}</p>
        </div>
      </section>

      <LocalFaq
        heading="&ldquo;Immigration Lawyer Near Me&rdquo; — Your Questions"
        items={[
          {
            q: "Can an immigration lawyer help me if they are not in my town?",
            a: "Yes. Immigration law is federal, so a qualified attorney can represent you anywhere in the United States. We serve nearby shoreline clients in person and reach everyone else through secure video consultations.",
          },
          {
            q: "How close is your office to me?",
            a: `Our office is located at ${siteConfig.address.full}. It is easily reached from the I-95 shoreline corridor, including New London, Groton, Stonington, and nearby Westerly, Rhode Island.`,
          },
          {
            q: "What if I cannot travel to the office?",
            a: "No problem. Many clients never visit in person and complete their entire case through video meetings, phone calls, and secure document sharing. You receive the same direct attorney attention either way.",
          },
          {
            q: "How soon can I see an immigration lawyer?",
            a: "Consultations are typically available within a few business days, and urgent matters are given priority. You can book online or call the office directly to find the soonest available time.",
          },
        ]}
      />

      <section className="py-16 bg-cream-50 border-t border-tan-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif text-3xl font-bold text-olive-950 mb-4">
            The Immigration Lawyer You Were Searching For
          </h2>
          <p className="text-slate-700 mb-8 leading-relaxed">
            {"Stop scrolling through search results. Reach out now and get real answers from a real attorney."}
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
