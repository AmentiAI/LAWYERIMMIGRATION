import { siteConfig } from "@/lib/constants";
import { Button } from "@/components/Button";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-olive-900 py-14 sm:py-20 md:py-28">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 px-2">
          Ready to Discuss Your{" "}
          <span className="gradient-text">Immigration Case?</span>
        </h2>
        <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2">
          Schedule a consultation today. We&apos;re here to guide you every step
          of the way.
        </p>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-md sm:max-w-none mx-auto">
          <Button href="/consultation" size="lg" className="w-full sm:w-auto">
            Book Now
          </Button>
          <Button href={`tel:${siteConfig.phone.replace(/\D/g, "")}`} variant="outline" size="lg" className="w-full sm:w-auto">
            Call {siteConfig.phone}
          </Button>
        </div>
      </div>
    </section>
  );
}
