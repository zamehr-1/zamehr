import type { Metadata } from "next";
import {
  PolicyList,
  PolicyPage,
  PolicySection,
} from "@/components/PolicyPage";

export const metadata: Metadata = {
  title: "Custom Order & Consultation Policy",
  description:
    "How ZA MEHR custom consultations, design development, deposits, and cancellations work.",
};

export default function CustomPolicyPage() {
  return (
    <PolicyPage
      eyebrow="Custom Design"
      title="Custom Order & Consultation Policy"
      intro="How our custom process works — from booking your consultation through craftsmanship and completion."
    >
      <PolicySection title="Booking a Consultation">
        <PolicyList
          items={[
            "Consultations are by appointment only.",
            "A typical design meeting lasts approximately 2 hours.",
            "Meetings can be held virtually or in person.",
            "A design deposit is required to confirm your appointment and begin the process.",
          ]}
        />
      </PolicySection>

      <PolicySection title="During the Meeting">
        <p>We discuss:</p>
        <PolicyList
          items={[
            "Your vision, inspiration, and preferences",
            "Any existing stones, gold, or heirloom pieces you wish to incorporate",
            "Materials, style (Navratna, Polki, Kundan, Meenakari, etc.), and budget",
            "Timeline and next steps",
          ]}
        />
      </PolicySection>

      <PolicySection title="After the Meeting">
        <PolicyList
          items={[
            "We prepare sketches or renderings based on the discussion.",
            "You review and approve the design.",
            "Once approved and the production deposit is received, crafting begins.",
            "You receive updates at key stages.",
          ]}
        />
      </PolicySection>

      <PolicySection title="Cancellation">
        <PolicyList
          items={[
            "Consultation deposits are non-refundable if cancelled less than 48 hours before the appointment.",
            "Once production has started on an approved design, the order cannot be cancelled for a refund.",
          ]}
        />
      </PolicySection>

      <PolicySection title="Important Notes">
        <PolicyList
          items={[
            "All custom jewellery is made to order and is unique to you.",
            "Final appearance may vary slightly from renderings due to the nature of handcraftsmanship and natural gemstones.",
            "We recommend bringing reference images, measurements, or existing pieces to the consultation when possible.",
          ]}
        />
      </PolicySection>
    </PolicyPage>
  );
}
