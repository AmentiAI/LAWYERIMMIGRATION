"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { FadeIn } from "@/components/FadeIn";
import { siteConfig } from "@/lib/constants";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Reach out to our Mystic office. We're here to answer your questions and help you get started."
        breadcrumb={[{ label: "Contact" }]}
      />

      <section className="section-padding bg-cream-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <FadeIn>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-navy-900 mb-8">
                Get in Touch
              </h2>

              <div className="space-y-8">
                <a
                  href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                  className="flex items-start gap-4 group"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-gold-400 transition-colors group-hover:bg-teal-600 group-hover:text-white">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy-900 mb-1">Phone</p>
                    <p className="text-slate-600 group-hover:text-teal-600 transition-colors">
                      {siteConfig.phone}
                    </p>
                  </div>
                </a>

                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-4 group"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-gold-400 transition-colors group-hover:bg-teal-600 group-hover:text-white">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy-900 mb-1">Email</p>
                    <p className="text-slate-600 group-hover:text-teal-600 transition-colors">
                      {siteConfig.email}
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-gold-400">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy-900 mb-1">Office</p>
                    <p className="text-slate-600">{siteConfig.address.street}</p>
                    <p className="text-slate-600">
                      {siteConfig.address.city}, {siteConfig.address.state}{" "}
                      {siteConfig.address.zip}
                    </p>
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(siteConfig.address.full)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 text-sm font-semibold text-teal-600 hover:text-teal-500 transition-colors"
                    >
                      Get Directions →
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-gold-400">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy-900 mb-1">
                      Office Hours
                    </p>
                    <p className="text-slate-600">{siteConfig.hours.weekdays}</p>
                    <p className="text-slate-600">{siteConfig.hours.saturday}</p>
                    <p className="text-slate-600">{siteConfig.hours.sunday}</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 rounded-2xl overflow-hidden shadow-lg h-64 bg-navy-900 relative">
                <iframe
                  title="Office location map"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(siteConfig.address.full)}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                  className="absolute inset-0 w-full h-full border-0 grayscale-[30%] contrast-[1.1]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="rounded-3xl bg-white p-8 md:p-10 shadow-xl shadow-navy-950/5">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-teal-600/10 text-teal-600 mb-6">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-navy-900 mb-3">
                      Message Sent
                    </h3>
                    <p className="text-slate-600">
                      We&apos;ll respond to your inquiry within one business day.
                    </p>
                  </div>
                ) : (
                  <>
                    <h2 className="font-serif text-2xl font-bold text-navy-900 mb-2">
                      Send a Message
                    </h2>
                    <p className="text-slate-600 text-sm mb-8">
                      Have a question? Fill out the form and we&apos;ll get back
                      to you promptly.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="contact-name"
                            className="block text-sm font-medium text-navy-900 mb-2"
                          >
                            Name *
                          </label>
                          <input
                            type="text"
                            id="contact-name"
                            required
                            className="w-full rounded-xl border border-cream-200 bg-cream-50 px-4 py-3 text-navy-900 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-all"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="contact-email"
                            className="block text-sm font-medium text-navy-900 mb-2"
                          >
                            Email *
                          </label>
                          <input
                            type="email"
                            id="contact-email"
                            required
                            className="w-full rounded-xl border border-cream-200 bg-cream-50 px-4 py-3 text-navy-900 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="contact-subject"
                          className="block text-sm font-medium text-navy-900 mb-2"
                        >
                          Subject
                        </label>
                        <input
                          type="text"
                          id="contact-subject"
                          className="w-full rounded-xl border border-cream-200 bg-cream-50 px-4 py-3 text-navy-900 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-all"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="contact-message"
                          className="block text-sm font-medium text-navy-900 mb-2"
                        >
                          Message *
                        </label>
                        <textarea
                          id="contact-message"
                          required
                          rows={5}
                          className="w-full rounded-xl border border-cream-200 bg-cream-50 px-4 py-3 text-navy-900 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-all resize-none"
                        />
                      </div>

                      <p className="text-xs text-slate-500">
                        Submitting this form does not create an attorney-client
                        relationship. Please do not send confidential information.
                      </p>

                      <button
                        type="submit"
                        className="w-full rounded-full bg-gold-500 px-8 py-4 text-base font-semibold text-navy-950 transition-all hover:bg-gold-400 hover:shadow-lg hover:shadow-gold-500/25"
                      >
                        Send Message
                      </button>
                    </form>
                  </>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
