import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { siteConfig, navLinks } from "@/lib/constants";
import { servicesList } from "@/lib/services";
import { keywordPagesList } from "@/lib/keyword-pages";

export function Footer() {
  return (
    <footer className="bg-olive-950 text-white border-t-4 border-gold-500">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 py-16 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-sm border border-gold-500/50 bg-olive-900 text-gold-400 font-serif text-xl font-bold">
                JG
              </div>
              <div>
                <p className="font-serif text-sm sm:text-base lg:text-lg font-semibold leading-snug">
                  {siteConfig.name}
                </p>
                <p className="text-sm text-white/60">{siteConfig.serviceAreas}</p>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              {siteConfig.tagline}
            </p>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-gold-400 tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-olive-300 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-gold-400 tracking-wide">Services</h3>
            <ul className="space-y-3">
              {servicesList.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-white/60 hover:text-olive-300 transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-sm text-olive-300/80 hover:text-olive-300 transition-colors"
                >
                  View all services →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-gold-400 tracking-wide">Topics</h3>
            <ul className="space-y-3">
              {keywordPagesList.slice(0, 6).map((topic) => (
                <li key={topic.slug}>
                  <Link
                    href={`/immigration/${topic.slug}`}
                    className="text-sm text-white/60 hover:text-olive-300 transition-colors"
                  >
                    {topic.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/immigration"
                  className="text-sm text-olive-300/80 hover:text-olive-300 transition-colors"
                >
                  View all topics →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-gold-400 tracking-wide">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                  className="flex items-start gap-3 text-sm text-white/60 hover:text-gold-400 transition-colors"
                >
                  <Phone className="h-4 w-4 mt-0.5 shrink-0" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-3 text-sm text-white/60 hover:text-gold-400 transition-colors"
                >
                  <Mail className="h-4 w-4 mt-0.5 shrink-0" />
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/60">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                {siteConfig.address.full}
              </li>
              <li className="flex items-start gap-3 text-sm text-white/60">
                <Clock className="h-4 w-4 mt-0.5 shrink-0" />
                <span>
                  {siteConfig.hours.weekdays}
                  <br />
                  {siteConfig.hours.saturday}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          <p className="text-xs text-white/30 text-center sm:text-right max-w-md">
            This website is for informational purposes only and does not
            constitute legal advice. No attorney-client relationship is formed
            until a signed engagement agreement is in place.
          </p>
        </div>
      </div>
    </footer>
  );
}
