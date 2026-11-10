import type { Metadata } from "next";
import {
  PolicyList,
  PolicyPage,
  PolicySection,
} from "@/components/PolicyPage";
import { brand } from "@/lib/content";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms governing ZA MEHR consultations, custom orders, deposits, timelines, and intellectual property.",
};

export default function TermsPage() {
  return (
    <PolicyPage
      title="Terms & Conditions"
      updated="November 2026"
      intro={`Welcome to ${brand.name}. By booking a consultation or placing a custom order, you agree to these terms.`}
    >
      <PolicySection title="Custom Design Process">
        <ol className="list-decimal space-y-3 pl-5 marker:text-gold">
          <li>
            <span className="font-medium text-ink">Consultation:</span> A design
            meeting (typically around 2 hours) is held virtually or in person to
            understand your vision.
          </li>
          <li>
            <span className="font-medium text-ink">Design Development:</span>{" "}
            Sketches and/or renderings are prepared based on the consultation.
          </li>
          <li>
            <span className="font-medium text-ink">Approval:</span> You review and
            approve the design before production begins.
          </li>
          <li>
            <span className="font-medium text-ink">Craftsmanship:</span> Your piece
            is handcrafted by our artisans.
          </li>
          <li>
            <span className="font-medium text-ink">Completion:</span> The finished
            piece is presented or delivered.
          </li>
        </ol>
      </PolicySection>

      <PolicySection title="Deposits and Payments">
        <PolicyList
          items={[
            "A non-refundable design deposit is required to confirm the consultation and begin design work.",
            "The remaining balance is paid in stages: typically half before production begins and the final amount upon completion or before shipment.",
            "Prices are confirmed in writing after the design is approved.",
          ]}
        />
      </PolicySection>

      <PolicySection title="Custom Orders">
        <p>
          All pieces are made to order. Because each design is unique and created
          specifically for you, custom orders are non-returnable and
          non-refundable once production has begun, except in cases of
          manufacturing defect.
        </p>
      </PolicySection>

      <PolicySection title="Changes to Design">
        <p>
          Minor adjustments can be made during the design phase. Significant
          changes after approval may incur additional costs and delay the
          timeline.
        </p>
      </PolicySection>

      <PolicySection title="Timeline">
        <p>
          Most custom pieces are completed within 4–10 weeks from design
          approval, depending on complexity and material availability. We will
          provide an estimated timeline after the consultation.
        </p>
      </PolicySection>

      <PolicySection title="Intellectual Property">
        <p>
          Designs created by {brand.name} remain our intellectual property. You
          receive the finished piece; the design concepts and sketches may not be
          reproduced or shared commercially without permission.
        </p>
      </PolicySection>

      <PolicySection title="Limitation of Liability">
        <p>
          {brand.name} is not liable for delays caused by material availability,
          shipping, or circumstances beyond our control.
        </p>
      </PolicySection>

      <PolicySection title="Governing Law">
        <p>
          These terms are governed by the laws of the jurisdiction in which{" "}
          {brand.name} operates.
        </p>
      </PolicySection>

      <PolicySection title="Contact">
        <p>
          Questions about these terms:{" "}
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
