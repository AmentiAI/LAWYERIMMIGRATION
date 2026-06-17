import Link from "next/link";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumb?: { label: string; href?: string }[];
  className?: string;
}

export function PageHero({ title, subtitle, breadcrumb, className }: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative pt-24 pb-14 sm:pt-28 sm:pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28 bg-olive-950 border-b-4 border-gold-500 overflow-hidden",
        className
      )}
    >
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c9a227' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {breadcrumb && (
          <nav className="mb-4 md:mb-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm text-white/45 font-medium tracking-wide">
            <Link href="/" className="hover:text-gold-400 transition-colors">
              Home
            </Link>
            {breadcrumb.map((item, i) => (
              <span key={i} className="flex items-center gap-2">
                <span className="text-gold-500/50">/</span>
                {item.href ? (
                  <Link
                    href={item.href}
                    className="hover:text-gold-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-white/75">{item.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <div className="law-rule mb-6 sm:mb-8" />
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white max-w-4xl leading-tight break-words">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 sm:mt-7 text-lg sm:text-xl md:text-2xl text-tan-100/85 max-w-3xl leading-relaxed font-light">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
