"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { siteConfig, navLinks } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "glass shadow-lg shadow-navy-950/5 py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="group flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900 text-gold-400 font-serif text-xl font-bold transition-transform group-hover:scale-105">
              JG
            </div>
            <div className="hidden sm:block">
              <p
                className={cn(
                  "font-serif text-lg font-semibold leading-tight transition-colors",
                  scrolled ? "text-navy-900" : "text-white"
                )}
              >
                Goncalves Immigration Law
              </p>
              <p
                className={cn(
                  "text-xs tracking-wide transition-colors",
                  scrolled ? "text-slate-600" : "text-white/70"
                )}
              >
                Mystic, Connecticut
              </p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300",
                  scrolled
                    ? "text-slate-700 hover:text-navy-900 hover:bg-navy-900/5"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
              className={cn(
                "flex items-center gap-2 text-sm font-medium transition-colors",
                scrolled ? "text-navy-800" : "text-white/90"
              )}
            >
              <Phone className="h-4 w-4" />
              {siteConfig.phone}
            </a>
            <Link
              href="/consultation"
              className="inline-flex items-center rounded-full bg-gold-500 px-5 py-2.5 text-sm font-semibold text-navy-950 transition-all hover:bg-gold-400 hover:shadow-lg hover:shadow-gold-500/25"
            >
              Free Consultation
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "lg:hidden p-2 rounded-lg transition-colors",
              scrolled ? "text-navy-900" : "text-white"
            )}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-[72px] z-40 glass-dark">
          <nav className="flex flex-col p-6 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 text-lg font-medium text-white/90 hover:text-white hover:bg-white/10 rounded-xl transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <hr className="my-4 border-white/10" />
            <a
              href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
              className="flex items-center gap-2 px-4 py-3 text-white/80"
            >
              <Phone className="h-5 w-5" />
              {siteConfig.phone}
            </a>
            <Link
              href="/consultation"
              onClick={() => setIsOpen(false)}
              className="mt-4 inline-flex items-center justify-center rounded-full bg-gold-500 px-6 py-3 text-base font-semibold text-navy-950"
            >
              Free Consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
