import { siteConfig } from "@/lib/constants";
import { Button } from "@/components/Button";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-20 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_var(--color-teal-600)_0%,_transparent_50%)] opacity-30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,_var(--color-gold-500)_0%,_transparent_40%)] opacity-15" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          Your Future Starts with a{" "}
          <span className="gradient-text">Conversation</span>
        </h2>
        <p className="text-lg text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
          Every immigration journey is unique. Schedule a consultation with
          Attorney Goncalves to discuss your goals and explore your options.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/consultation" size="lg">
            Schedule Consultation
          </Button>
          <Button href={`tel:${siteConfig.phone.replace(/\D/g, "")}`} variant="outline" size="lg">
            Call {siteConfig.phone}
          </Button>
        </div>
      </div>
    </section>
  );
}
