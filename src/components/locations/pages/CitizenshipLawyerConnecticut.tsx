import Link from "next/link";
import { Vote, Plane, ShieldCheck, Briefcase, BookOpen, Flag } from "lucide-react";
import { LocalFaq } from "../shared";

const benefits = [
  { icon: Vote, title: "The Right to Vote", body: "Have a voice in the elections that shape your community and country." },
  { icon: Plane, title: "A U.S. Passport", body: "Travel freely and re-enter the United States without restriction." },
  { icon: ShieldCheck, title: "Protection From Removal", body: "Citizens cannot be deported — your status in the U.S. becomes permanent." },
  { icon: Briefcase, title: "More Opportunities", body: "Access federal jobs, benefits, and the ability to sponsor more relatives." },
];

const requirements = [
  { label: "Permanent residence", detail: "Generally 5 years as a green card holder — or 3 years if married to and living with a U.S. citizen." },
  { label: "Continuous residence", detail: "Maintaining your home in the United States without lengthy trips abroad that break continuity." },
  { label: "Physical presence", detail: "Being physically present in the U.S. for at least half of the required residence period." },
  { label: "Good moral character", detail: "Demonstrating good moral character during the statutory period, with full disclosure of any history." },
  { label: "English & civics", detail: "Reading, writing, and speaking basic English and passing the U.S. history and government test." },
  { label: "Oath of Allegiance", detail: "Willingness to take the Oath of Allegiance to the United States at your ceremony." },
];

export default function CitizenshipLawyerConnecticut() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="page-header-offset pb-16 sm:pb-20 bg-gradient-to-b from-olive-950 to-olive-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <Flag className="h-12 w-12 text-gold-400 mx-auto mb-6" />
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Citizenship Lawyer in Connecticut
          </h1>
          <p className="text-white/80 text-lg sm:text-xl leading-relaxed mb-8 max-w-3xl mx-auto">
            {"Becoming a United States citizen is the culmination of your immigration journey. As a Connecticut citizenship lawyer, Attorney Goncalves helps lawful permanent residents cross that final threshold — from application to the oath ceremony."}
          </p>
          <Link
            href="/consultation"
            className="inline-flex items-center justify-center rounded-sm bg-gold-500 px-8 py-4 text-sm font-semibold text-olive-950 hover:bg-gold-400 transition-colors"
          >
            Begin Your Citizenship Journey
          </Link>
        </div>
      </section>

      {/* Why citizenship */}
      <section className="py-16 sm:py-20 bg-cream-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-olive-950 mb-3 text-center">
            Why Citizenship Is Worth Pursuing
          </h2>
          <p className="text-slate-700 text-center max-w-2xl mx-auto mb-12 leading-relaxed">
            {"Citizenship offers security and opportunities that a green card alone cannot. Here is what naturalization unlocks."}
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map((b) => (
              <div key={b.title} className="bg-white rounded-2xl border border-tan-200 p-6 text-center">
                <b.icon className="h-9 w-9 text-olive-700 mx-auto mb-4" />
                <h3 className="font-serif text-lg font-bold text-olive-950 mb-2">{b.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-olive-950 mb-6">
            Naturalization, Guided Step by Step
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            {"The path to citizenship runs through Form N-400, the Application for Naturalization. On paper it looks straightforward, but the application asks detailed questions about your travel, residence, employment, family, and any encounters with law enforcement. Honest, accurate answers are essential — and a Connecticut citizenship lawyer helps you give them while avoiding the missteps that lead to delays or denials."}
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            {"For many applicants, the process is smooth: confirm eligibility, file the N-400, attend a biometrics appointment, pass the interview and tests, and take the Oath of Allegiance. But some cases require extra care — long absences from the United States, tax issues, or a criminal record can complicate the good moral character analysis. Attorney Goncalves reviews your history carefully before you file, so you know where you stand and apply at the right time."}
          </p>
          <p className="text-slate-700 leading-relaxed">
            {"Throughout the process, you receive personal attention, study support for the civics and English tests, and mock interview preparation so you walk into your appointment ready and calm."}
          </p>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 bg-olive-950 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-3xl font-bold mb-12 text-center">
            Eligibility for U.S. Citizenship
          </h2>
          <div className="space-y-4">
            {requirements.map((r, i) => (
              <div key={r.label} className="flex gap-5 bg-white/5 rounded-xl p-5 border border-white/10">
                <span className="font-serif text-2xl font-bold text-gold-400 shrink-0">{i + 1}</span>
                <div>
                  <h3 className="font-semibold text-white mb-1">{r.label}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{r.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Test prep */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <BookOpen className="h-10 w-10 text-olive-700 mx-auto mb-5" />
          <h2 className="font-serif text-3xl font-bold text-olive-950 mb-5">
            We Help You Prepare for the Interview and Civics Test
          </h2>
          <p className="text-slate-700 leading-relaxed max-w-2xl mx-auto">
            {"The citizenship interview includes an English reading and writing component and a civics test on U.S. history and government. Many applicants feel nervous about it — and that is exactly why we provide study materials and conduct realistic mock interviews. By the time your appointment arrives, the questions feel familiar and you feel confident."}
          </p>
        </div>
      </section>

      <LocalFaq
        heading="Connecticut Citizenship Questions"
        items={[
          {
            q: "When can I apply for citizenship in Connecticut?",
            a: "Most permanent residents can apply after five years with a green card, or three years if married to and living with a U.S. citizen. You generally may file the N-400 up to 90 days before reaching that residency requirement.",
          },
          {
            q: "What happens at the citizenship interview?",
            a: "A USCIS officer reviews your N-400, asks about your background, and administers the English and civics tests. We prepare you thoroughly with study materials and mock interviews so you know what to expect.",
          },
          {
            q: "Can I still become a citizen if I have a criminal record?",
            a: "Possibly. Some offenses create permanent bars, while others only require disclosure or a waiting period. A citizenship lawyer reviews your record carefully before you file to protect you from a denial or worse.",
          },
          {
            q: "Do I have to give up my original citizenship?",
            a: "The United States permits dual citizenship, but whether you keep your original nationality depends on that country's laws. We can discuss the general considerations, and you may wish to confirm with your home country.",
          },
        ]}
      />

      <section className="py-16 bg-cream-50 border-t border-tan-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif text-3xl font-bold text-olive-950 mb-4">
            Take the Final Step Toward Becoming an American
          </h2>
          <p className="text-slate-700 mb-8 leading-relaxed">
            {"You have built your life here. Now make it official. A Connecticut citizenship lawyer is ready to help you naturalize."}
          </p>
          <Link
            href="/consultation"
            className="inline-flex items-center justify-center rounded-sm bg-olive-800 px-8 py-4 text-sm font-semibold text-white hover:bg-olive-900 transition-colors"
          >
            Apply for Citizenship
          </Link>
        </div>
      </section>
    </div>
  );
}
