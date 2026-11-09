import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { brand, images } from "@/lib/content";

export const metadata: Metadata = {
  title: "Visit Us",
  description:
    "Visit the ZA MEHR private design studio by appointment — in person or virtually worldwide.",
};

export default function VisitPage() {
  return (
    <>
      <section className="texture-grain px-5 pb-12 pt-16 text-center md:px-10 md:pt-24">
        <Reveal>
          <p className="text-[0.7rem] tracking-[0.28em] uppercase text-gold">
            Studio
          </p>
          <h1 className="mt-4 font-display text-5xl text-ink md:text-7xl">
            Visit Us
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
            By appointment only
          </p>
        </Reveal>
      </section>

      <section className="relative mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal>
          <div className="relative aspect-[16/10] overflow-hidden md:aspect-[21/9]">
            <Image
              src={images.visit}
              alt="Private jewellery studio atmosphere"
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16 text-center md:px-10 md:py-20">
        <Reveal>
          <p className="text-base leading-relaxed text-ink-soft md:text-lg">
            Our studio welcomes clients for private consultations and design
            presentations. Please book in advance so we can give your visit the
            time and attention it deserves.
          </p>
        </Reveal>
      </section>

      <section className="bg-stone/50 px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-[1000px] gap-8 md:grid-cols-3">
          {[
            {
              title: "Private Design Studio",
              body: "Available in select cities & virtually worldwide",
            },
            {
              title: "Hours",
              body: "Monday – Saturday · 10:00 AM – 6:00 PM (by appointment)",
            },
            {
              title: "Virtual Consultations",
              body: "Available for clients across the United States and internationally.",
            },
          ].map((item, index) => (
            <Reveal key={item.title} delay={(index % 3) as 0 | 1 | 2 | 3}>
              <article className="h-full border border-mist bg-pearl px-6 py-8 text-center">
                <h2 className="font-display text-2xl text-ink">{item.title}</h2>
                <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                  {item.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-emerald-deep px-5 py-20 text-center text-pearl md:px-10 md:py-28">
        <Reveal>
          <h2 className="font-display text-4xl md:text-5xl">
            Schedule Your Visit
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pearl/80">
            Request a private studio appointment or a virtual design
            consultation. We will confirm a time that works for you.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/custom#book" className="ghost-btn ghost-btn-light text-pearl">
              Schedule Your Visit
            </Link>
            <a
              href={`mailto:${brand.email}`}
              className="text-[0.7rem] tracking-[0.2em] uppercase text-gold-bright"
            >
              {brand.email}
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
