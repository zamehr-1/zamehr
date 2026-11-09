import Link from "next/link";
import { ResponsiveHeroImage } from "@/components/ResponsiveHeroImage";
import { Reveal } from "@/components/Reveal";
import { homeCollections, images } from "@/lib/content";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-[37px] bg-pearl md:gap-[50px]">
      <section className="relative min-h-[100svh] overflow-hidden bg-emerald-deep">
        <ResponsiveHeroImage
          webSrc={images.heroWeb}
          mobSrc={images.heroMob}
          alt="Heirloom jewellery styled for ZA MEHR"
          priority
          className="object-cover object-center scale-105 animate-float"
        />
        <div className="hero-shade absolute inset-0" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(12,36,28,0.45)_100%)]" />

        <div className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center px-6 pb-16 pt-36 text-center text-pearl md:pt-44">
          <h1 className="animate-fade-up font-display text-[clamp(2.4rem,8vw,5.5rem)] leading-[0.95] tracking-[0.12em]">
            Bridal Heirlooms
          </h1>
          <div className="animate-line gold-rule mt-6 opacity-90" />
          <p className="animate-fade-up mx-auto mt-7 max-w-xl text-base leading-relaxed text-pearl/85 md:text-lg">
            For the moments that become family history
          </p>
          <div className="animate-fade-up mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <Link
              href="/custom#book"
              className="ghost-btn ghost-btn-light text-pearl"
            >
              Schedule a Free Consultation
            </Link>
            <Link
              href="/custom"
              className="text-[0.68rem] tracking-[0.22em] uppercase text-pearl/80 transition hover:text-pearl"
            >
              Explore Custom Design
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-pearl px-5 py-10 text-center md:px-10 md:py-12">
        <Reveal>
          <p className="font-display text-2xl italic leading-relaxed text-ink-soft md:text-3xl">
            “Jewels given with love, meant to be inherited.”
          </p>
        </Reveal>
      </section>

      {homeCollections.map((collection, index) => (
        <section
          key={collection.title}
          className="relative min-h-[88svh] overflow-hidden bg-ink"
        >
          <ResponsiveHeroImage
            webSrc={collection.imageWeb}
            mobSrc={collection.imageMob}
            alt={collection.title}
            priority={index === 0}
          />
          <div className="editorial-shade absolute inset-0" />
          <div className="relative z-10 flex min-h-[88svh] flex-col items-center justify-center px-6 text-center text-pearl">
            <Reveal>
              <h2 className="font-display text-[clamp(2.4rem,7vw,5rem)] tracking-[0.12em]">
                {collection.title}
              </h2>
              <p className="mt-4 text-sm tracking-[0.08em] text-pearl/80 md:text-base">
                {collection.subtitle}
              </p>
              <Link
                href={collection.href}
                className="ghost-btn ghost-btn-light mt-8 text-pearl"
              >
                {collection.cta}
              </Link>
            </Reveal>
          </div>
        </section>
      ))}

      <section className="relative min-h-[70svh] overflow-hidden bg-emerald-deep md:min-h-[80svh]">
        <ResponsiveHeroImage
          webSrc="/images/3-web.jpg"
          mobSrc="/images/3-mob.jpg"
          alt="Jewellery that carries meaning"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-emerald-deep/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/55 to-ink/75" />

        <div className="relative z-10 flex min-h-[70svh] items-center justify-center px-5 py-20 text-center text-pearl md:min-h-[80svh] md:px-10 md:py-28">
          <Reveal className="mx-auto max-w-3xl">
            <p className="text-[0.7rem] tracking-[0.28em] uppercase text-gold-bright">
              Jewellery That Carries Meaning
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
              Every piece begins with a conversation
            </h2>
            <p className="mt-6 text-base leading-relaxed text-pearl/85 md:text-lg">
              At ZA MEHR, we design traditional and royal jewellery that
              reflects your story — whether you are creating a new heirloom or
              reimagining one that already exists.
            </p>
            <p className="mt-4 text-base leading-relaxed text-pearl/85 md:text-lg">
              From the celestial balance of Navratna to the quiet luminosity of
              Polki and the intricate artistry of Kundan and Meenakari, we work
              with you to bring your vision to life.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-emerald-deep px-5 py-24 text-center text-pearl md:px-10 md:py-32">
        <Reveal>
          <p className="text-[0.7rem] tracking-[0.28em] uppercase text-gold-bright">
            Exclusive Service
          </p>
          <h2 className="mt-4 font-display text-4xl md:text-6xl">
            Custom Jewellery Design
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-pearl/80 md:text-lg">
            Work with us one-on-one to design a personalised piece for a
            meaningful moment — an engagement, a wedding, a family heirloom, or
            simply for yourself.
          </p>
          <Link
            href="/custom#book"
            className="ghost-btn ghost-btn-light mt-10 text-pearl"
          >
            Begin Your Design
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
