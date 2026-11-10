import type { Metadata } from "next";
import { PolicyPage, PolicySection } from "@/components/PolicyPage";
import { brand } from "@/lib/content";

export const metadata: Metadata = {
  title: "Shipping & Delivery Policy",
  description:
    "How ZA MEHR packages, ships, and delivers custom jewellery orders.",
};

export default function ShippingPage() {
  return (
    <PolicyPage
      title="Shipping & Delivery Policy"
      updated="November 2026"
      intro="Custom pieces are carefully packaged and shipped with care appropriate to their value."
    >
      <PolicySection title="Packaging & Shipping">
        <p>
          Custom pieces are carefully packaged and shipped with insurance and
          tracking. Delivery times depend on location. Signature may be required
          for high-value orders.
        </p>
      </PolicySection>

      <PolicySection title="International Orders">
        <p>
          International customers are responsible for any customs duties or
          taxes.
        </p>
      </PolicySection>

      <PolicySection title="Contact">
        <p>
          Questions about shipping or delivery:{" "}
          <a
            href={`mailto:${brand.email}`}
            className="text-ink underline decoration-gold/60 underline-offset-4 transition-colors hover:text-gold"
          >
            {brand.email}
          </a>
        </p>
      </PolicySection>
    </PolicyPage>
  );
}
