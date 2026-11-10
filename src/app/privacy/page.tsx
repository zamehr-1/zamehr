import type { Metadata } from "next";
import {
  PolicyList,
  PolicyPage,
  PolicySection,
} from "@/components/PolicyPage";
import { brand } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How ZA MEHR collects, uses, and protects your information when you book a consultation or place a custom order.",
};

export default function PrivacyPage() {
  return (
    <PolicyPage
      title="Privacy Policy"
      updated="November 2026"
      intro={`At ${brand.name}, we respect your privacy. This policy explains how we collect, use, and protect your information when you book a consultation or place a custom order.`}
    >
      <PolicySection title="Information We Collect">
        <PolicyList
          items={[
            "Name, email address, and phone number when you book a consultation",
            "Details you share during the design meeting (preferences, inspiration, existing jewellery details)",
            "Payment information for deposits and final payments (processed securely by our payment provider)",
            "Communication records related to your order",
          ]}
        />
      </PolicySection>

      <PolicySection title="How We Use Your Information">
        <PolicyList
          items={[
            "To schedule and conduct your design consultation",
            "To create sketches, renderings, and your custom piece",
            "To process payments and communicate about your order",
            "To improve our service",
          ]}
        />
      </PolicySection>

      <PolicySection title="Sharing of Information">
        <p>We do not sell your personal information. We may share limited details with:</p>
        <PolicyList
          items={[
            "Our master artisans (only what is needed to craft your piece)",
            "Payment processors",
            "Shipping partners (if applicable)",
          ]}
        />
      </PolicySection>

      <PolicySection title="Data Security">
        <p>
          We take reasonable measures to protect your information. However, no
          method of transmission over the internet is 100% secure.
        </p>
      </PolicySection>

      <PolicySection title="Your Rights">
        <p>
          You may request access to, correction of, or deletion of your personal
          information by contacting us at{" "}
          <a
            href={`mailto:${brand.email}`}
            className="text-ink underline decoration-gold/60 underline-offset-4 transition-colors hover:text-gold"
          >
            {brand.email}
          </a>
          .
        </p>
      </PolicySection>

      <PolicySection title="Contact">
        <p>
          For privacy-related questions:{" "}
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
