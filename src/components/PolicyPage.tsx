import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";

type PolicyPageProps = {
  eyebrow?: string;
  title: string;
  updated?: string;
  intro?: string;
  children: ReactNode;
};

export function PolicyPage({
  eyebrow = "Policy",
  title,
  updated,
  intro,
  children,
}: PolicyPageProps) {
  return (
    <>
      <section className="texture-grain px-5 pb-12 pt-16 text-center md:px-10 md:pt-24">
        <Reveal>
          <p className="text-[0.7rem] tracking-[0.28em] uppercase text-gold">
            {eyebrow}
          </p>
          <h1 className="mt-4 font-display text-5xl text-ink md:text-6xl">
            {title}
          </h1>
          {updated ? (
            <p className="mt-4 text-sm tracking-[0.08em] text-ink-soft">
              Last Updated: {updated}
            </p>
          ) : null}
          {intro ? (
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
              {intro}
            </p>
          ) : null}
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-5 pb-20 md:px-10 md:pb-28">
        <Reveal>
          <div className="policy-content space-y-10 text-base leading-relaxed text-ink-soft md:text-lg">
            {children}
          </div>
        </Reveal>
      </section>
    </>
  );
}

export function PolicySection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section>
      <h2 className="font-display text-2xl text-ink md:text-3xl">{title}</h2>
      <div className="mt-4 space-y-4">{children}</div>
    </section>
  );
}

export function PolicyList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-2 pl-5 marker:text-gold">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
