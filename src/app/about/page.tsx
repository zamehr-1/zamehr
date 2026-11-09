import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { images } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "ZA MEHR was founded with deep respect for royal jewellery heritage — Ottoman and Mughal court traditions made for families and occasions.",
};

export default function AboutPage() {
  return (
    <>
      <section className="texture-grain px-5 pb-12 pt-16 text-center md:px-10 md:pt-24">
        <Reveal>
          <p className="text-[0.7rem] tracking-[0.28em] uppercase text-gold">
            Our Story
          </p>
          <h1 className="mt-4 font-display text-5xl text-ink md:text-7xl">
            Rooted in Tradition
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
            Jewels of two empires — inspired by the courts of Istanbul and Delhi.
          </p>
        </Reveal>
      </section>

      <section className="relative mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal>
          <div className="relative aspect-[16/10] overflow-hidden md:aspect-[21/9]">
            <Image
              src={images.about}
              alt="Heritage jewellery that tells a family story"
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16 md:px-10 md:py-24">
        <Reveal className="space-y-6 text-base leading-relaxed text-ink-soft md:text-lg">
          <p>
            ZA MEHR was founded with a deep respect for jewellery heritage across
            the Islamic courts. For generations, the nine sacred gems of Navratna,
            the luminous uncut diamonds of Polki, and the masterful techniques of
            Kundan and Meenakari have been worn by families as signs of love,
            protection, and belonging.
          </p>
          <p>
            Our house also looks west to the Ottoman palaces of Istanbul — tulip
            enamel, rose-cut diamonds, telkari filigree — and east to the Mughal
            courts of Delhi, Agra and Lahore — paisley, lotus, carved emerald and
            jadau. Together they form one language of royal adornment.
          </p>
          <p>
            Today we bring that same spirit of craftsmanship to those who seek
            jewellery that is more than ornament — pieces that carry meaning,
            family history, and personal significance. Every custom design begins
            with conversation and ends as an heirloom. We work exclusively by
            appointment.
          </p>
        </Reveal>
      </section>

      <section className="bg-emerald-deep px-5 py-20 text-pearl md:px-10 md:py-28">
        <div className="mx-auto grid max-w-[1100px] gap-12 md:grid-cols-2 md:gap-16">
          <Reveal>
            <p className="text-[0.7rem] tracking-[0.28em] uppercase text-gold-bright">
              Mughal
            </p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl">
              Courts of Delhi & Agra
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-pearl/80 md:text-base">
              Kundan, jadau, polki, meenakari. Emeralds, rubies, pearls and
              spinels. Motifs of paisley, lotus, peacock, sun and moon — jewellery
              that feels drawn from a royal treasury.
            </p>
          </Reveal>
          <Reveal delay={1}>
            <p className="text-[0.7rem] tracking-[0.28em] uppercase text-gold-bright">
              Ottoman
            </p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl">
              Palaces of Istanbul
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-pearl/80 md:text-base">
              Rose-cut diamonds, enamel, telkari filigree and dense stone
              clusters. Tulip, carnation, crescent and star — garden motifs set in
              gold with quiet grandeur.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="texture-grain px-5 py-20 text-center md:px-10 md:py-28">
        <Reveal>
          <div className="gold-rule mx-auto mb-8" />
          <p className="font-display text-3xl italic text-ink md:text-4xl">
            “Jewels given with love, meant to be inherited.”
          </p>
          <Link href="/custom" className="ghost-btn mt-10">
            Begin Your Design
          </Link>
        </Reveal>
      </section>
    </>
  );
}
