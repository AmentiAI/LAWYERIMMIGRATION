import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { siteConfig, navLinks, practiceAreas } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-800 text-gold-400 font-serif text-xl font-bold">
                JG
              </div>
              <div>
                <p className="font-serif text-lg font-semibold">
                  Goncalves Immigration Law
                </p>
                <p className="text-sm text-white/60">Mystic, Connecticut</p>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              Compassionate, expert immigration legal services serving
              Connecticut and clients nationwide from our Mystic office.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-gold-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">
              Practice Areas
            </h3>
            <ul className="space-y-3">
              {practiceAreas.slice(0, 5).map((area) => (
                <li key={area.id}>
                  <Link
                    href={`/practice-areas#${area.id}`}
                    className="text-sm text-white/60 hover:text-gold-400 transition-colors"
                  >
                    {area.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">
              Contact Us
            </h3>
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
                <span>{siteConfig.hours.weekdays}</span>
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
