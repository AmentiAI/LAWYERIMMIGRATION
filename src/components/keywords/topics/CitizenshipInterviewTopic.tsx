import { BookOpen, MessageSquare, Landmark } from "lucide-react";
import { TopicFooter, FaqBlock } from "../shared";

const parts = [
  {
    icon: MessageSquare,
    title: "The N-400 review",
    body: "The officer goes through your application: addresses, trips, employment, taxes, and any arrests or citations. The answers you give have to match the form.",
  },
  {
    icon: BookOpen,
    title: "English",
    body: "Speaking is tested in the conversation itself. Reading and writing use official USCIS sentences. Exemptions exist for age and years as a resident, and we check those before you study.",
  },
  {
    icon: Landmark,
    title: "Civics",
    body: "You answer civics questions from the official set that applies to your filing date. The 2025 civics test does not apply to every pending case. We confirm which materials you should use.",
  },
];

export default function CitizenshipInterviewTopic() {
  return (
    <div className="bg-cream-50">
      <section className="page-header-offset pb-16 bg-tan-50 border-b border-tan-200">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-olive-700 text-sm font-semibold uppercase tracking-wider mb-3">
            Naturalization interview
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-olive-950 mb-6">
            What Happens at the Citizenship Interview
          </h1>
          <p className="text-slate-700 text-lg leading-relaxed max-w-3xl">
            The N-400 interview is where USCIS decides whether you meet the
            requirements for citizenship. It covers your application, an
            English test, and a civics test. Attorney Goncalves prepares you
            for the version of the test that applies to your filing.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-3 gap-6">
          {parts.map((part) => (
            <article key={part.title} className="bg-white rounded-2xl border border-tan-200 p-7">
              <part.icon className="h-8 w-8 text-olive-700 mb-4" />
              <h2 className="font-serif text-xl font-bold text-olive-950 mb-3">
                {part.title}
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed">{part.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="pb-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-olive-950 mb-4">
            How we get you ready
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            We re-read the N-400 against your travel history and any criminal
            record before the interview date. You practice the English prompts
            and the civics questions from the USCIS study materials for your
            filing, including the 2025 test when that is the set that applies.
          </p>
          <p className="text-slate-700 leading-relaxed">
            If an answer on the form needs to be corrected, we do that at the
            interview instead of hoping the officer will not notice. A clean
            explanation is safer than a surprise.
          </p>
        </div>
      </section>

      <FaqBlock
        items={[
          {
            q: "Which civics test will I take?",
            a: "It depends on when you filed Form N-400. USCIS implemented a 2025 civics test for applications filed on or after the effective date in that rule. We confirm the set before you start studying.",
          },
          {
            q: "What if I fail part of the test?",
            a: "USCIS generally gives you a second chance on the portion you did not pass, scheduled later. We use the first interview to see exactly what to practice.",
          },
          {
            q: "Do I become a citizen at the interview?",
            a: "Approval at the interview is not the oath. You become a citizen when you take the Oath of Allegiance, usually at a later ceremony unless the office administers the oath the same day.",
          },
        ]}
      />
      <TopicFooter
        cta="Prepare for Your Interview"
        relatedService="citizenship-naturalization"
      />
    </div>
  );
}
