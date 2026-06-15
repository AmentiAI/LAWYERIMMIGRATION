"use client";

import { useState } from "react";
import { CheckCircle2, Clock, Shield, MessageSquare } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/FadeIn";
import { faqs, siteConfig } from "@/lib/constants";

export default function ConsultationPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    caseType: "",
    message: "",
    preferredContact: "phone",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <PageHero
        title="Schedule a Consultation"
        subtitle="Take the first step toward resolving your immigration matter. We'll review your case and discuss your options."
        breadcrumb={[{ label: "Consultation" }]}
      />

      <section className="section-padding bg-cream-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            <FadeIn className="lg:col-span-2">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-navy-900 mb-6">
                What to Expect
              </h2>
              <p className="text-slate-700 leading-relaxed mb-8">
                Your initial consultation is an opportunity to discuss your
                immigration matter with Attorney Goncalves, understand your
                options, and determine the best path forward.
              </p>

              <StaggerContainer className="space-y-6">
                {[
                  {
                    icon: MessageSquare,
                    title: "Case Evaluation",
                    description:
                      "We'll review your immigration history, current status, and goals.",
                  },
                  {
                    icon: Shield,
                    title: "Confidential Discussion",
                    description:
                      "All consultations are private and protected by attorney-client privilege.",
                  },
                  {
                    icon: Clock,
                    title: "60-Minute Session",
                    description:
                      "Enough time to thoroughly understand your situation and outline next steps.",
                  },
                  {
                    icon: CheckCircle2,
                    title: "Clear Action Plan",
                    description:
                      "You'll leave with a understanding of options, timelines, and estimated costs.",
                  },
                ].map((item) => (
                  <StaggerItem key={item.title}>
                    <div className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-600/10 text-teal-600">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-navy-900 mb-1">
                          {item.title}
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              <div className="mt-10 rounded-2xl bg-navy-900 p-6 text-white">
                <p className="font-semibold mb-2">Prefer to call?</p>
                <p className="text-white/70 text-sm mb-3">
                  Our office is available during business hours.
                </p>
                <a
                  href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                  className="text-gold-400 font-semibold hover:text-gold-300 transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} className="lg:col-span-3">
              <div className="rounded-3xl bg-white p-8 md:p-10 shadow-xl shadow-navy-950/5">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-teal-600/10 text-teal-600 mb-6">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-navy-900 mb-3">
                      Request Received
                    </h3>
                    <p className="text-slate-600 max-w-md mx-auto">
                      Thank you for reaching out. Our office will contact you
                      within one business day to schedule your consultation.
                    </p>
                  </div>
                ) : (
                  <>
                    <h2 className="font-serif text-2xl font-bold text-navy-900 mb-2">
                      Request a Consultation
                    </h2>
                    <p className="text-slate-600 text-sm mb-8">
                      Fill out the form below and we&apos;ll be in touch shortly.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="firstName"
                            className="block text-sm font-medium text-navy-900 mb-2"
                          >
                            First Name *
                          </label>
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            required
                            value={formData.firstName}
                            onChange={handleChange}
                            className="w-full rounded-xl border border-cream-200 bg-cream-50 px-4 py-3 text-navy-900 placeholder:text-slate-400 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-all"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="lastName"
                            className="block text-sm font-medium text-navy-900 mb-2"
                          >
                            Last Name *
                          </label>
                          <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            required
                            value={formData.lastName}
                            onChange={handleChange}
                            className="w-full rounded-xl border border-cream-200 bg-cream-50 px-4 py-3 text-navy-900 placeholder:text-slate-400 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-all"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-navy-900 mb-2"
                          >
                            Email *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full rounded-xl border border-cream-200 bg-cream-50 px-4 py-3 text-navy-900 placeholder:text-slate-400 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-all"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="phone"
                            className="block text-sm font-medium text-navy-900 mb-2"
                          >
                            Phone *
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full rounded-xl border border-cream-200 bg-cream-50 px-4 py-3 text-navy-900 placeholder:text-slate-400 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="caseType"
                          className="block text-sm font-medium text-navy-900 mb-2"
                        >
                          Type of Case *
                        </label>
                        <select
                          id="caseType"
                          name="caseType"
                          required
                          value={formData.caseType}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-cream-200 bg-cream-50 px-4 py-3 text-navy-900 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-all"
                        >
                          <option value="">Select a case type</option>
                          <option value="family">Family-Based Immigration</option>
                          <option value="employment">Employment Immigration</option>
                          <option value="citizenship">Citizenship / Naturalization</option>
                          <option value="asylum">Asylum / Humanitarian Relief</option>
                          <option value="deportation">Deportation Defense</option>
                          <option value="adjustment">Adjustment of Status</option>
                          <option value="other">Other / Not Sure</option>
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-navy-900 mb-2"
                        >
                          Brief Description of Your Situation
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Please provide a brief overview of your immigration matter..."
                          className="w-full rounded-xl border border-cream-200 bg-cream-50 px-4 py-3 text-navy-900 placeholder:text-slate-400 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-all resize-none"
                        />
                      </div>

                      <div>
                        <p className="text-sm font-medium text-navy-900 mb-3">
                          Preferred Contact Method
                        </p>
                        <div className="flex gap-4">
                          {["phone", "email"].map((method) => (
                            <label
                              key={method}
                              className="flex items-center gap-2 cursor-pointer"
                            >
                              <input
                                type="radio"
                                name="preferredContact"
                                value={method}
                                checked={formData.preferredContact === method}
                                onChange={handleChange}
                                className="text-teal-600 focus:ring-teal-500"
                              />
                              <span className="text-sm text-slate-700 capitalize">
                                {method}
                              </span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <p className="text-xs text-slate-500">
                        By submitting this form, you agree to be contacted by our
                        office. This does not create an attorney-client
                        relationship. Please do not include confidential
                        information.
                      </p>

                      <button
                        type="submit"
                        className="w-full rounded-full bg-gold-500 px-8 py-4 text-base font-semibold text-navy-950 transition-all hover:bg-gold-400 hover:shadow-lg hover:shadow-gold-500/25"
                      >
                        Submit Consultation Request
                      </button>
                    </form>
                  </>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-navy-900 mb-4">
              Frequently Asked Questions
            </h2>
          </FadeIn>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FadeIn key={faq.question} delay={index * 0.05}>
                <details className="group rounded-2xl border border-cream-200 bg-cream-50 overflow-hidden">
                  <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-navy-900 hover:bg-cream-100 transition-colors">
                    {faq.question}
                    <span className="ml-4 text-teal-600 transition-transform group-open:rotate-45 text-xl">
                      +
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-slate-700 leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
