"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { siteConfig, navLinks } from "@/lib/constants";
import { servicesList } from "@/lib/services";
import { keywordPagesList } from "@/lib/keyword-pages";
import { cn } from "@/lib/utils";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [topicsOpen, setTopicsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const topicsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setServicesOpen(false);
      }
      if (
        topicsRef.current &&
        !topicsRef.current.contains(e.target as Node)
      ) {
        setTopicsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const mainLinks = navLinks.filter((l) => l.href !== "/consultation");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass shadow-lg shadow-olive-950/5 py-2.5 sm:py-3 bg-tan-100/95 safe-top">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3">
          <Link href="/" className="group flex items-center gap-2 sm:gap-3 min-w-0">
            <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl bg-olive-800 text-tan-100 font-serif text-lg sm:text-xl font-bold transition-transform group-hover:scale-105">
              JG
            </div>
            <div className="min-w-0">
              <p className="font-serif text-base sm:text-lg font-semibold leading-tight text-olive-900 truncate">
                {siteConfig.shortName}
              </p>
              <p className="text-[10px] sm:text-xs tracking-wide text-slate-600 hidden sm:block">
                Immigration Law
              </p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {mainLinks.map((link) => {
              if (link.href === "/immigration") {
                return (
                  <div key={link.href} className="relative" ref={topicsRef}>
                    <button
                      onClick={() => setTopicsOpen(!topicsOpen)}
                      className={cn(
                        "flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 text-slate-700 hover:text-olive-900 hover:bg-olive-900/5",
                        topicsOpen && "bg-olive-900/5"
                      )}
                    >
                      Topics
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform",
                          topicsOpen && "rotate-180"
                        )}
                      />
                    </button>
                    {topicsOpen && (
                      <div className="absolute top-full left-0 mt-2 w-80 bg-tan-50 rounded-2xl shadow-2xl shadow-olive-950/10 border border-tan-200 py-2 max-h-96 overflow-y-auto">
                        <Link
                          href="/immigration"
                          onClick={() => setTopicsOpen(false)}
                          className="block px-4 py-2.5 text-sm font-semibold text-olive-900 hover:bg-olive-50 border-b border-tan-200"
                        >
                          All Topics →
                        </Link>
                        {keywordPagesList.map((topic) => (
                          <Link
                            key={topic.slug}
                            href={`/immigration/${topic.slug}`}
                            onClick={() => setTopicsOpen(false)}
                            className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-olive-50 hover:text-olive-700 transition-colors"
                          >
                            {topic.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              if (link.href === "/services") {
                return (
                  <div key={link.href} className="relative" ref={dropdownRef}>
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className={cn(
                        "flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 text-slate-700 hover:text-olive-900 hover:bg-olive-900/5",
                        servicesOpen && "bg-olive-900/5"
                      )}
                    >
                      Services
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform",
                          servicesOpen && "rotate-180"
                        )}
                      />
                    </button>
                    {servicesOpen && (
                      <div className="absolute top-full left-0 mt-2 w-72 bg-tan-50 rounded-2xl shadow-2xl shadow-olive-950/10 border border-tan-200 py-2 max-h-96 overflow-y-auto">
                        <Link
                          href="/services"
                          onClick={() => setServicesOpen(false)}
                          className="block px-4 py-2.5 text-sm font-semibold text-olive-900 hover:bg-olive-50 border-b border-tan-200"
                        >
                          All Services →
                        </Link>
                        {servicesList.map((service) => (
                          <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            onClick={() => setServicesOpen(false)}
                            className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-olive-50 hover:text-olive-700 transition-colors"
                          >
                            {service.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 text-slate-700 hover:text-olive-900 hover:bg-olive-900/5"
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
              className="flex items-center gap-2 text-sm font-medium text-olive-800 transition-colors"
            >
              <Phone className="h-4 w-4" />
              {siteConfig.phone}
            </a>
            <Link
              href="/consultation"
              className="inline-flex items-center rounded-full bg-olive-700 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-olive-600 hover:shadow-lg hover:shadow-olive-700/25"
            >
              Book Now
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-olive-900 transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-[60px] sm:top-[68px] z-40 glass-dark overflow-y-auto overscroll-contain safe-bottom">
          <nav className="flex flex-col p-4 sm:p-6 gap-1 pb-8">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="px-4 py-3 text-lg font-medium text-white/90 hover:text-white hover:bg-white/10 rounded-xl transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="px-4 py-3 text-lg font-medium text-white/90 hover:text-white hover:bg-white/10 rounded-xl transition-colors"
            >
              About
            </Link>
            <div className="px-4 py-2 text-sm font-semibold text-white/50 uppercase tracking-wider">
              Services
            </div>
            {servicesList.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                onClick={() => setIsOpen(false)}
                className="px-6 py-2.5 text-base text-white/80 hover:text-white hover:bg-white/10 rounded-xl transition-colors"
              >
                {service.title}
              </Link>
            ))}
            <Link
              href="/services"
              onClick={() => setIsOpen(false)}
              className="px-6 py-2 text-sm text-olive-300 font-medium"
            >
              View All Services →
            </Link>
            <div className="px-4 py-2 mt-4 text-sm font-semibold text-white/50 uppercase tracking-wider">
              Immigration Topics
            </div>
            {keywordPagesList.map((topic) => (
              <Link
                key={topic.slug}
                href={`/immigration/${topic.slug}`}
                onClick={() => setIsOpen(false)}
                className="px-6 py-2.5 text-base text-white/80 hover:text-white hover:bg-white/10 rounded-xl transition-colors"
              >
                {topic.title}
              </Link>
            ))}
            <Link
              href="/immigration"
              onClick={() => setIsOpen(false)}
              className="px-6 py-2 text-sm text-olive-300 font-medium"
            >
              View All Topics →
            </Link>
            <Link
              href="/faq"
              onClick={() => setIsOpen(false)}
              className="px-4 py-3 text-lg font-medium text-white/90 hover:text-white hover:bg-white/10 rounded-xl transition-colors"
            >
              FAQ
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="px-4 py-3 text-lg font-medium text-white/90 hover:text-white hover:bg-white/10 rounded-xl transition-colors"
            >
              Contact
            </Link>
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
              className="mt-4 inline-flex items-center justify-center rounded-full bg-olive-700 px-6 py-3 text-base font-semibold text-white"
            >
              Book Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
