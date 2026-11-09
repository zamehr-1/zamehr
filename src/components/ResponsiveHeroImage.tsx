import Image from "next/image";

export function ResponsiveHeroImage({
  webSrc,
  mobSrc,
  alt,
  priority = false,
  className = "object-cover",
}: {
  webSrc: string;
  mobSrc: string;
  alt: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <>
      <Image
        src={mobSrc}
        alt={alt}
        fill
        priority={priority}
        className={`${className} md:hidden`}
        sizes="100vw"
      />
      <Image
        src={webSrc}
        alt={alt}
        fill
        priority={priority}
        className={`${className} hidden md:block`}
        sizes="100vw"
      />
    </>
  );
}
