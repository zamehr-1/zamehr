import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AppointmentStepper } from "@/components/AppointmentStepper";
import { FaqList } from "@/components/FaqList";
import { Reveal } from "@/components/Reveal";
import {
  brand,
  customOccasions,
  images,
  processSteps,
  testimonials,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Custom Jewellery Design",
  description:
    "One-of-a-kind custom traditional jewellery by ZA MEHR. Work with us one-on-one from consultation to reveal.",
};

export default function CustomPage() {
  return (
    <>
      <section className="bg-pearl px-5 pb-8 pt-10 text-center md:px-10 md:pb-12 md:pt-16">
        <h1 className="font-display text-4xl text-ink md:text-6xl">
          Custom Jewellery Design
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base text-ink-soft md:text-lg">
          One-of-a-kind, custom designed jewellery made just for you.
        </p>
      </section>

      <section className="bg-pearl px-5 pb-16 md:px-10 md:pb-24">
        <div className="mx-auto grid max-w-[1200px] items-center gap-10 md:grid-cols-2 md:gap-14">
          <div className="relative aspect-[4/3] overflow-hidden bg-stone">
            <Image
              src={images.customDesk}
              alt="Custom jewellery design workspace"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
          <div className="md:py-4">
            <p className="text-base leading-relaxed text-ink-soft md:text-lg">
              Work with ZA MEHR one-on-one for a personalised experience to
              design your dream piece. From the initial consultation to the
              final polishing, we take you through the journey step by step,
              specialising in one-of-a-kind custom heirlooms for every day or
              any special occasion. Whether you are starting entirely from
              scratch or reworking an existing piece or stone, we are excited to
              bring your vision to life.
            </p>
            <Link
              href="#book"
              className="mt-8 inline-block text-[0.72rem] font-medium tracking-[0.18em] uppercase text-ink underline underline-offset-8 transition hover:text-gold"
            >
              Schedule a Free Consultation
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-pearl px-5 pb-16 md:px-10 md:pb-24">
        <div className="mx-auto grid max-w-[1200px] gap-8 md:grid-cols-3 md:gap-6">
          <ul className="flex h-full flex-col justify-center gap-5 py-2 md:gap-6">
            {customOccasions.map((item) => (
              <li
                key={item}
                className="border-b border-mist pb-4 font-display text-xl text-ink md:text-2xl"
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="relative aspect-[3/4] overflow-hidden bg-stone">
            <Image
              src={images.processDetail}
              alt="Measuring and refining a custom design"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative aspect-[3/4] overflow-hidden bg-stone">
            <Image
              src={images.processStudio}
              alt="Artisan at the ZA MEHR design studio"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>
      </section>

      <section className="bg-pearl px-5 pb-16 md:px-10 md:pb-24">
        <div className="mx-auto grid max-w-[1200px] items-start gap-10 md:grid-cols-2 md:gap-14">
          <div className="relative aspect-square overflow-hidden bg-stone md:aspect-[5/6]">
            <Image
              src={images.processSteps}
              alt="Custom design coming into form"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <ol className="space-y-7 md:space-y-8 md:pt-4">
            {processSteps.map((step) => (
              <li key={step.step}>
                <p className="text-[0.72rem] font-semibold tracking-[0.2em] text-ink">
                  {step.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft md:text-base">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        id="book"
        className="scroll-mt-36 bg-stone/60 px-5 py-16 md:px-10 md:py-24"
      >
        <div className="mx-auto max-w-[980px]">
          <h2 className="mx-auto max-w-3xl text-center font-display text-2xl text-ink md:text-3xl">
            Use the calendar below to book your appointment. Consultations are
            held virtually.
          </h2>
          <div className="mt-10">
            <AppointmentStepper />
          </div>
          <div className="mt-12 text-center">
            <h3 className="font-display text-3xl text-ink md:text-4xl">
              Don&apos;t see a day or time that works for you?
            </h3>
            <p className="mt-4 text-sm text-ink-soft md:text-base">
              Send us an email at{" "}
              <a
                href={`mailto:${brand.email}`}
                className="text-ink underline underline-offset-4"
              >
                {brand.email}
              </a>{" "}
              and we will work something out!
            </p>
          </div>
        </div>
      </section>

      <section className="bg-stone/40 px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-3xl space-y-14 text-center">
          {testimonials.map((item) => (
            <Reveal key={item.name}>
              <blockquote>
                <p className="font-display text-2xl text-ink md:text-3xl">
                  “{item.quote}”
                </p>
                <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-ink-soft md:text-base">
                  {item.body}
                </p>
                <footer className="mt-5 text-sm tracking-wide text-ink">
                  {item.name}
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-pearl px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <h2 className="font-display text-4xl text-ink md:text-5xl">
              FAQ&apos;s
            </h2>
            <p className="mt-3 text-sm tracking-[0.12em] uppercase text-ink-soft">
              Frequently Asked Questions
            </p>
          </div>
          <FaqList />
        </div>
      </section>
    </>
  );
}
