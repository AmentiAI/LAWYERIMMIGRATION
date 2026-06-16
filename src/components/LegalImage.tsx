import Image from "next/image";
import { legalImages, type LegalImageKey } from "@/lib/images";
import { cn } from "@/lib/utils";

interface LegalImageProps {
  imageKey: LegalImageKey;
  className?: string;
  priority?: boolean;
  fill?: boolean;
  sizes?: string;
}

export function LegalImage({
  imageKey,
  className,
  priority,
  fill = true,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
}: LegalImageProps) {
  const img = legalImages[imageKey];

  if (fill) {
    return (
      <Image
        src={img.src}
        alt={img.alt}
        fill
        priority={priority}
        sizes={sizes}
        unoptimized
        className={cn("object-cover", className)}
      />
    );
  }

  return (
    <Image
      src={img.src}
      alt={img.alt}
      width={1200}
      height={800}
      priority={priority}
      unoptimized
      className={cn("w-full h-auto object-cover", className)}
    />
  );
}
