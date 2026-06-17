import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "gold";
  size?: "sm" | "md" | "lg";
  className?: string;
  external?: boolean;
}

const variants = {
  primary:
    "bg-olive-800 text-white hover:bg-olive-700 border border-olive-700",
  secondary:
    "bg-olive-950 text-white hover:bg-olive-900 border border-olive-900",
  gold:
    "bg-gold-500 text-olive-950 hover:bg-gold-400 border border-gold-600 font-semibold tracking-wide",
  outline:
    "border-2 border-white/40 text-white hover:bg-white/10 hover:border-gold-400/60",
  ghost: "text-olive-900 hover:bg-olive-900/5 border border-transparent",
};

const sizes = {
  sm: "px-4 py-2 text-xs tracking-wide uppercase",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-3.5 text-sm sm:text-base",
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  external,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-sm font-semibold transition-colors duration-200",
    variants[variant],
    sizes[size],
    className
  );

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

export function ButtonWithArrow({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
}: Omit<ButtonProps, "external">) {
  return (
    <Button href={href} variant={variant} size={size} className={className}>
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
    </Button>
  );
}
