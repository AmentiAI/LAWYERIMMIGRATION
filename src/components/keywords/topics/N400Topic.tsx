import { Flag, BookOpen, Mic, Award } from "lucide-react";
import { TopicFooter, FaqBlock } from "../shared";

const eligibilityGrid = [
  { req: "Age 18+", detail: "At time of filing and oath ceremony" },
  { req: "LPR 5 Years", detail: "3 years if married to U.S. citizen" },
  { req: "Physical Presence", detail: "30 months in U.S. (18 if married to USC)" },
  { req: "Continuous Residence", detail: "No breaks longer than 6 months" },
  { req: "Good Moral Character", detail: "Evaluated for statutory period" },
  { req: "English & Civics", detail: "Read, write, speak basic English; pass civics test" },
];

const civicsTopics = [
  "Principles of American democracy",
  "System of government",
  "Rights and responsibilities of citizens",
  "American history (colonial period through today)",
  "Geography and national symbols",
  "Recent American history and government",
];

export default function N400Topic() {
  return (
    <div className="bg-white">
      <section className="page-header-offset pb-12 bg-tan-50 border-b border-tan-200">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Flag className="h-8 w-8 text-olive-700" />
            <p className="text-olive-700 text-sm font-bold uppercase tracking-widest">
              Application for Naturalization
            </p>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6">
            Form N-400: Your Application to Become a United States Citizen
          </h1>
          <p className="text-slate-800 text-xl md:text-2xl max-w-3xl leading-relaxed">
            Naturalization is the process by which lawful permanent residents
            become U.S. citizens. Form N-400 is the application — and Attorney
            Goncalves has guided clients from filing to oath ceremony in as little
            as three months.
          </p>
        </div>
      </section>

      <section className="py-20 bg-cream-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-navy-900 text-center mb-12">
            N-400 Eligibility Requirements
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {eligibilityGrid.map((item) => (
              <div
                key={item.req}
                className="bg-white rounded-xl p-6 border-2 border-cream-200 hover:border-teal-500 transition-colors"
              >
                <p className="font-serif text-xl font-bold text-navy-900 mb-2">
                  {item.req}
                </p>
                <p className="text-slate-600 text-sm">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="h-8 w-8 text-teal-600" />
              <h2 className="font-serif text-3xl font-bold text-navy-900">
                Civics & English Test Preparation
              </h2>
            </div>
            <p className="text-slate-600 leading-relaxed mb-6">
              The citizenship interview includes an English reading and writing
              test and a civics test covering U.S. history and government. USCIS
              publishes 100 civics questions — you will be asked up to 10, and
              must answer 6 correctly.
            </p>
            <h3 className="font-semibold text-navy-900 mb-3">Civics Topics Covered:</h3>
            <ul className="space-y-2">
              {civicsTopics.map((t) => (
                <li key={t} className="flex items-center gap-2 text-slate-700 text-sm">
                  <span className="w-2 h-2 rounded-full bg-gold-400 shrink-0" />
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-slate-500">
              Exceptions exist for applicants over 50 or 55 with long residence,
              and for medical disability waivers (Form N-648).
            </p>
          </div>
          <div className="space-y-6">
            <div className="bg-navy-900 text-white rounded-2xl p-8">
              <Mic className="h-8 w-8 text-gold-400 mb-4" />
              <h3 className="font-serif text-xl font-bold mb-3">
                The Citizenship Interview
              </h3>
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                A USCIS officer reviews your entire N-400 application and asks
                questions about your background, residence, travel, and moral
                character. The civics and English tests are administered at this
                interview.
              </p>
              <p className="text-white/70 text-sm leading-relaxed">
                We conduct mock interviews so you arrive prepared, confident,
                and able to address any issues in your application.
              </p>
            </div>
            <div className="bg-gold-500 rounded-2xl p-8 text-navy-950">
              <Award className="h-8 w-8 mb-4" />
              <h3 className="font-serif text-xl font-bold mb-3">
                Oath Ceremony
              </h3>
              <p className="text-navy-900/80 text-sm leading-relaxed">
                After approval, you attend an oath ceremony where you take the
                Oath of Allegiance and officially become a U.S. citizen. You may
                then apply for a U.S. passport and register to vote.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-olive-800 text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-serif text-2xl font-bold mb-8 text-center">
            N-400 Processing Steps
          </h2>
          <div className="flex flex-col md:flex-row justify-between gap-4 text-center text-sm">
            {[
              "File N-400",
              "Biometrics",
              "Interview",
              "Decision",
              "Oath Ceremony",
            ].map((step, i) => (
              <div key={step} className="flex-1">
                <div className="w-10 h-10 rounded-full bg-teal-600 flex items-center justify-center mx-auto mb-2 font-bold">
                  {i + 1}
                </div>
                <p className="text-white/80">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FaqBlock
        title="N-400 Questions"
        items={[
          {
            q: "Can I travel while my N-400 is pending?",
            a: "Short trips are generally fine, but extended absences can break continuous residence or physical presence requirements. Consult before any international travel.",
          },
          {
            q: "What if I fail the civics test?",
            a: "You receive a second opportunity to take the test within 60–90 days. We provide study materials and practice sessions to maximize your chances of passing on the first attempt.",
          },
          {
            q: "How long does N-400 processing take?",
            a: "Processing times vary by USCIS field office, currently averaging 6–12 months nationally. Some offices process significantly faster.",
          },
        ]}
      />

      <TopicFooter
        cta="Begin Your N-400 Application"
        relatedService="citizenship-naturalization"
      />
    </div>
  );
}
