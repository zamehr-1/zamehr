export const brand = {
  name: "ZA MEHR",
  tagline: "Jewels of Two Empires",
  promise: "Jewels given with love, meant to be inherited.",
  email: "design@zamehr.com",
  announcement:
    "Custom design appointments available · Virtual consultations · Free consultation",
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/custom", label: "Custom Design" },
  { href: "/about", label: "Our Story" },
  { href: "/visit", label: "Visit Us" },
] as const;

export const services = [
  {
    title: "Navratna Jewellery",
    body: "The sacred nine-gem ensemble representing the Navagrahas, designed for balance, protection, and presence.",
  },
  {
    title: "Polki & Uncut Diamonds",
    body: "Regal pieces featuring the warm, diffused glow of uncut diamonds set in traditional techniques.",
  },
  {
    title: "Kundan & Meenakari",
    body: "Intricate artistry with gemstone settings and vibrant enamel work — heirloom pieces of exceptional beauty.",
  },
  {
    title: "Bridal & Heritage Sets",
    body: "Complete wedding collections or reimagined family pieces, crafted to honour tradition while reflecting your personal style.",
  },
  {
    title: "Repurpose Heirlooms",
    body: "Transform existing stones, gold, or family pieces into contemporary designs that preserve their history.",
  },
  {
    title: "Commemorative Pieces",
    body: "Jewellery created to mark an occasion, an achievement, or a gift that carries lasting meaning.",
  },
] as const;

export const customOccasions = [
  "Custom Bridal & Heritage Sets",
  "Repurpose Heirloom & Estate Jewellery",
  "Navratna, Polki & Kundan Designs",
  "Commemorate an Occasion",
  "Show Your Love With the Perfect Gift",
] as const;

export const processSteps = [
  {
    step: "01",
    title: "STEP 1",
    body: "Get in touch and meet with us virtually or in person to discuss your initial vision and ideas for the piece.",
  },
  {
    step: "02",
    title: "STEP 2",
    body: "We draft sketches of your design, working with you to make sure it is just right for your meaningful moment.",
  },
  {
    step: "03",
    title: "STEP 3",
    body: "We source materials and stones, then create a detailed rendering. You can hand-pick every design element with our guidance.",
  },
  {
    step: "04",
    title: "STEP 4",
    body: "Master artisans begin fabrication, hand-finishing every detail with traditional techniques and careful precision.",
  },
  {
    step: "05",
    title: "STEP 5",
    body: "Your finished piece is revealed — crafted with care, infused with meaning, and designed to last a lifetime.",
  },
] as const;

export const testimonials = [
  {
    quote: "We absolutely loved working with ZA MEHR for our bridal set.",
    body: "Throughout the process, they listened to our ideas while making beautiful suggestions we had never heard of before. The finished pieces feel truly one-of-a-kind and are now part of our family story.",
    name: "— Aisha R.",
  },
  {
    quote: "An amazing experience redesigning my grandmother's Polki.",
    body: "From the first consultation to the final reveal, every step was guided with care. Communication was clear, and the craftsmanship exceeded what I imagined.",
    name: "— Meera K.",
  },
  {
    quote: "We would absolutely return for future pieces.",
    body: "The team was collaborative and asked the right questions to create a Navratna set that feels personal, balanced, and made to be inherited.",
    name: "— Omar & Leila",
  },
] as const;

export const faqs = [
  {
    q: "How much does custom jewellery cost?",
    a: "Pricing varies based on materials, complexity, and gemstones. Simple designs begin around a few thousand dollars, while elaborate bridal or Navratna sets are higher. We provide a clear estimate after the initial consultation. Bringing your own stones or gold can reduce the cost.",
  },
  {
    q: "Do I need a clear idea before booking?",
    a: "Not at all. Many clients begin with inspiration images, a feeling, or family stones. We guide the process from concept to completion.",
  },
  {
    q: "Can I repurpose existing jewellery or gemstones?",
    a: "Yes. We welcome heirlooms, loose stones, and gold for redesign. This is a beautiful way to preserve family history in a new form.",
  },
  {
    q: "How long does the process take?",
    a: "Most custom pieces are completed within 4–10 weeks from design approval, depending on complexity and material availability.",
  },
  {
    q: "Is a deposit required?",
    a: "Yes. A design deposit confirms your appointment and covers the initial sketches and concept work. The remaining balance is paid in stages before production and at completion.",
  },
  {
    q: "Can I bring my own ideas or inspiration photos?",
    a: "Yes. Sketches, photographs, and existing pieces are all welcome. They help us understand the direction you have in mind.",
  },
] as const;

export const homeCollections = [
  {
    title: "Polki Radiance",
    subtitle: "The quiet luminosity of uncut diamonds",
    href: "/custom",
    imageWeb: "/images/2-web.jpg",
    imageMob: "/images/2-mob.jpg",
    cta: "Begin a Piece",
  },
  {
    title: "Courts of Istanbul & Delhi",
    subtitle: "Ottoman and Mughal motifs, united as one house",
    href: "/about",
    imageWeb: "/images/3-web.jpg",
    imageMob: "/images/3-mob.jpg",
    cta: "Our Story",
  },
] as const;

export const images = {
  heroWeb: "/images/1-web.jpg",
  heroMob: "/images/1-mob.jpg",
  logo: "/images/logo.png",
  customDesk: "/images/custom/1-first.jpg",
  about: "/images/3-web.jpg",
  visit: "/images/2-web.jpg",
  craft: "/images/custom/1-first.jpg",
  processDetail: "/images/custom/2.jpg",
  processStudio: "/images/custom/3.jpg",
  processSteps: "/images/custom/4-last.jpg",
};
