import { siteConfig } from "@/lib/constants";
import { Button } from "@/components/Button";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-olive-950 py-14 sm:py-20 md:py-28 border-t-4 border-gold-500">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23c9a227'%3E%3Cpath d='M30 0l4 12h12l-10 8 4 12-10-8-10 8 4-12-10-8h12z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="law-eyebrow mb-4">Schedule a Consultation</p>
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 px-2">
          Ready to Discuss Your Immigration Case?
        </h2>
        <div className="law-rule law-rule-center mb-6 sm:mb-8" />
        <p className="text-base sm:text-lg text-tan-100/75 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2">
          Schedule a consultation today. Attorney Goncalves will review your
          situation and outline a clear path forward.
        </p>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-md sm:max-w-none mx-auto">
          <Button href="/consultation" variant="gold" size="lg" className="w-full sm:w-auto">
            Book Consultation
          </Button>
          <Button
            href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
            variant="outline"
            size="lg"
            className="w-full sm:w-auto"
          >
            Call {siteConfig.phone}
          </Button>
        </div>
      </div>
    </section>
  );
}
