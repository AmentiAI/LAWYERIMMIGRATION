"use client";

import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { FadeIn } from "@/components/FadeIn";
import { AppointmentBookingForm } from "@/components/AppointmentBookingForm";
import { siteConfig } from "@/lib/constants";

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact"
        subtitle="Reach our Mystic office by phone, email, or book an appointment below."
        breadcrumb={[{ label: "Contact" }]}
      />

      <section className="section-padding bg-tan-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
            <FadeIn>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-olive-900 mb-8">
                Get in Touch
              </h2>

              <div className="space-y-8">
                <a
                  href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                  className="flex items-start gap-4 group"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-olive-800 text-tan-100 transition-colors group-hover:bg-olive-600">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-olive-900 mb-1">Phone</p>
                    <p className="text-slate-600 group-hover:text-olive-700 transition-colors">
                      {siteConfig.phone}
                    </p>
                    <p className="text-sm text-slate-500 mt-1">
                      Office: {siteConfig.phoneAlt}
                    </p>
                  </div>
                </a>

                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-4 group"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-olive-800 text-tan-100 transition-colors group-hover:bg-olive-600">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-olive-900 mb-1">Email</p>
                    <p className="text-slate-600 group-hover:text-olive-700 transition-colors">
                      {siteConfig.email}
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-olive-800 text-tan-100">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-olive-900 mb-1">Office</p>
                    <p className="text-slate-600">{siteConfig.address.street}</p>
                    <p className="text-slate-600">
                      {siteConfig.address.city}, {siteConfig.address.state}{" "}
                      {siteConfig.address.zip}
                    </p>
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(siteConfig.address.full)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 text-sm font-semibold text-olive-700 hover:text-olive-600 transition-colors"
                    >
                      Get Directions →
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-olive-800 text-tan-100">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-olive-900 mb-1">
                      Office Hours
                    </p>
                    <p className="text-slate-600">{siteConfig.hours.weekdays}</p>
                    <p className="text-slate-600">{siteConfig.hours.saturday}</p>
                    <p className="text-slate-600">{siteConfig.hours.sunday}</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 rounded-2xl overflow-hidden shadow-lg h-64 bg-olive-900 relative">
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
              <AppointmentBookingForm />
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
