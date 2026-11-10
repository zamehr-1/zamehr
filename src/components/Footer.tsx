import Link from "next/link";
import { brand, nav } from "@/lib/content";

const policyLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/custom-policy", label: "Custom Order Policy" },
  { href: "/shipping", label: "Shipping & Delivery" },
] as const;

export function Footer() {
  return (
    <footer className="bg-emerald-deep text-pearl">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-16 md:grid-cols-[1.4fr_1fr_1fr_1fr] md:px-10 md:py-20">
        <div>
          <p className="font-display text-3xl tracking-[0.22em]">{brand.name}</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-pearl/75">
            Traditional jewellery designed for legacy. Ottoman and Mughal court
            inspiration, made to be passed down.
          </p>
          <div className="gold-rule mt-6 opacity-80" />
        </div>

        <div>
          <p className="mb-4 text-[0.65rem] tracking-[0.22em] uppercase text-gold-bright">
            Explore
          </p>
          <ul className="space-y-3 text-sm text-pearl/80">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-pearl">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 text-[0.65rem] tracking-[0.22em] uppercase text-gold-bright">
            Policies
          </p>
          <ul className="space-y-3 text-sm text-pearl/80">
            {policyLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-pearl">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 text-[0.65rem] tracking-[0.22em] uppercase text-gold-bright">
            Connect
          </p>
          <ul className="space-y-3 text-sm text-pearl/80">
            <li>
              <Link href="/custom" className="transition-colors hover:text-pearl">
                Book Appointment
              </Link>
            </li>
            <li>
              <a
                href={`mailto:${brand.email}`}
                className="transition-colors hover:text-pearl"
              >
                {brand.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-pearl/10 px-5 py-5 text-center text-[0.7rem] tracking-[0.12em] text-pearl/55 md:px-10">
        © 2026 {brand.name}. All rights reserved. Custom design by appointment
        only.
      </div>
    </footer>
  );
}
