import { faqs } from "@/lib/content";

export function FaqList() {
  return (
    <div className="divide-y divide-mist border-y border-mist">
      {faqs.map((item) => (
        <details key={item.q} className="faq group">
          <summary className="flex items-center justify-between gap-6 py-5 md:py-6">
            <span className="font-display text-xl text-ink md:text-2xl">
              {item.q}
            </span>
            <span className="faq-icon flex h-8 w-8 shrink-0 items-center justify-center border border-mist text-lg text-gold transition-transform duration-300">
              +
            </span>
          </summary>
          <p className="pb-6 pr-12 text-sm leading-relaxed text-ink-soft md:text-base">
            {item.a}
          </p>
        </details>
      ))}
    </div>
  );
}
