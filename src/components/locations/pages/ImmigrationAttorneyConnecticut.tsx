import Link from "next/link";
import { Languages, Eye, MessagesSquare, HandHeart, FileSignature } from "lucide-react";
import { LocalFaq } from "../shared";

const values = [
  {
    icon: Eye,
    title: "Transparency",
    body: "You will always know what stage your case is in, what it costs, and what realistically comes next. No vague answers, no hidden fees.",
  },
  {
    icon: MessagesSquare,
    title: "Communication",
    body: "Immigration is stressful enough without being left in the dark. We keep you informed at every receipt, request, and decision.",
  },
  {
    icon: HandHeart,
    title: "Compassion",
    body: "Behind every file is a family, a dream, a deadline. We never lose sight of the human being our work is meant to serve.",
  },
  {
    icon: FileSignature,
    title: "Precision",
    body: "Immigration cases turn on details. Every form is reviewed line by line so your application reaches the government complete and correct.",
  },
];

const journey = [
  { phase: "Consult", text: "We review your situation and identify the strongest immigration option available to you." },
  { phase: "Prepare", text: "We complete your forms and assemble the evidence that supports your eligibility." },
  { phase: "File", text: "We submit to USCIS or the consulate and confirm receipt of your case." },
  { phase: "Advocate", text: "We respond to requests, prepare you for interviews, and push your case to a decision." },
];

export default function ImmigrationAttorneyConnecticut() {
  return (
    <div className="bg-cream-50">
      {/* Hero */}
      <section className="page-header-offset pb-16 sm:pb-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-olive-950 mb-6 leading-tight">
            Connecticut Immigration Attorney You Can Rely On
          </h1>
          <p className="text-slate-700 text-lg sm:text-xl leading-relaxed mb-8 max-w-3xl mx-auto">
            {"Choosing an immigration attorney is one of the most important decisions a family can make. Attorney Jacquelyn R. Goncalves brings dedicated, personal representation to immigrants throughout Connecticut — guiding each client with care from the first question to the final approval."}
          </p>
          <Link
            href="/consultation"
            className="inline-flex items-center justify-center rounded-sm bg-olive-800 px-8 py-4 text-sm font-semibold text-white hover:bg-olive-900 transition-colors"
          >
            Speak With the Attorney
          </Link>
        </div>
      </section>

      {/* Language band */}
      <section className="bg-gold-500 py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-center gap-5 text-center sm:text-left">
          <Languages className="h-12 w-12 text-olive-950 shrink-0" />
          <div>
            <p className="font-serif text-xl sm:text-2xl font-bold text-olive-950">
              Representation in English, Spanish &amp; Portuguese
            </p>
            <p className="text-olive-900/80 text-sm">
              {"Clear communication in your own language — because the details of an immigration case should never be lost in translation."}
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-olive-950 mb-6">
            Why Connecticut Immigrants Choose This Attorney
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            {"There is no shortage of immigration attorneys in Connecticut, but there is a shortage of attorneys who treat each client as a person rather than a transaction. Attorney Goncalves built this practice to be different — a place where the lawyer who shakes your hand at the consultation is the same lawyer who prepares your petition, answers your late-night worries, and stands beside you at your interview."}
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            {"Immigration law changes constantly, and the consequences of a misstep are severe: denied petitions, lost work authorization, even separation from family. An attorney who knows the current rules and applies them carefully to your specific facts is the difference between an approval and a setback. That is the level of attention every Connecticut client receives here."}
          </p>
          <p className="text-slate-700 leading-relaxed">
            {"Whether you are filing your first family petition, renewing a work permit, or finally applying for citizenship, you deserve an advocate who is fully invested in your outcome. That is the standard we hold ourselves to on every case, in every county."}
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-olive-950 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-3xl font-bold mb-12 text-center">
            The Principles Behind Every Case
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((v) => (
              <div key={v.title} className="flex gap-5 bg-white/5 rounded-2xl p-6 border border-white/10">
                <v.icon className="h-9 w-9 text-gold-400 shrink-0" />
                <div>
                  <h3 className="font-serif text-lg font-bold mb-2">{v.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{v.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey strip */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-3xl font-bold text-olive-950 mb-12 text-center">
            From First Call to Final Decision
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {journey.map((j, i) => (
              <div key={j.phase} className="relative bg-white rounded-2xl border border-tan-200 p-6">
                <span className="absolute -top-3 left-6 inline-flex h-8 w-8 items-center justify-center rounded-full bg-olive-700 text-white text-sm font-bold">
                  {i + 1}
                </span>
                <h3 className="font-serif text-lg font-bold text-olive-950 mt-3 mb-2">{j.phase}</h3>
                <p className="text-slate-700 text-sm leading-relaxed">{j.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LocalFaq
        heading="Choosing a Connecticut Immigration Attorney"
        items={[
          {
            q: "How do I know if an immigration attorney is right for my case?",
            a: "Start with a consultation. A good Connecticut immigration attorney will listen to your situation, explain your realistic options, and tell you clearly what the process and costs look like. You should feel informed and respected, not rushed.",
          },
          {
            q: "Is it worth hiring an attorney instead of filing myself?",
            a: "While you can file immigration forms on your own, the system is unforgiving of mistakes. An attorney helps you avoid delays, denials, and Requests for Evidence, and ensures you are pursuing the strongest pathway for your circumstances.",
          },
          {
            q: "Do you offer consultations in Spanish or Portuguese?",
            a: "Yes. Attorney Goncalves represents clients in English, Spanish, and Portuguese, so you can discuss the details of your case in the language you are most comfortable using.",
          },
          {
            q: "Where in Connecticut can the attorney meet me?",
            a: "In-person meetings take place at the Mystic office, and secure video consultations are available to clients anywhere in Connecticut and across the country.",
          },
        ]}
      />

      <section className="py-16 bg-white border-t border-tan-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif text-3xl font-bold text-olive-950 mb-4">
            Let an Attorney Who Cares Handle Your Immigration Case
          </h2>
          <p className="text-slate-700 mb-8 leading-relaxed">
            {"Take the first step today. A focused, compassionate Connecticut immigration attorney is ready to help."}
          </p>
          <Link
            href="/consultation"
            className="inline-flex items-center justify-center rounded-sm bg-olive-800 px-8 py-4 text-sm font-semibold text-white hover:bg-olive-900 transition-colors"
          >
            Schedule Your Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
