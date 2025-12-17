export const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
];

export const CHIPS = [
  "Framer Motion ready",
  "Dark & light modes",
  "Glassmorphism details",
  "Scroll-linked nav",
  "OKLCH color system",
];

type SpotlightFeature = {
  id: string;
  label: string;
  title: string;
  description: string;
  points: string[];
};

export const FEATURES: SpotlightFeature[] = [
  {
    id: "flow",
    label: "Flow",
    title: "Keep your work in a single, focused flow",
    description:
      "Replace scattered tabs and tools with a single streamlined surface that keeps you in the zone.",
    points: [
      "Capture ideas and tasks without leaving the main view.",
      "Built-in shortcuts for your most common actions.",
      "Beautiful motion states that feel responsive, not noisy.",
    ],
  },
  {
    id: "spaces",
    label: "Spaces",
    title: "Organize complex projects into clear spaces",
    description:
      "Group related work into lightweight spaces so you never lose track of what matters.",
    points: [
      "Color-coded spaces using your main theme palette.",
      "Instant switching without hard page transitions.",
      "Designed for teams but friendly to solo builders.",
    ],
  },
  {
    id: "insights",
    label: "Insights",
    title: "Turn activity into meaningful insights",
    description:
      "Surface the signals that actually matter instead of drowning you in dashboards.",
    points: [
      "Contextual metrics that live next to your work.",
      "Configurable highlights for what “success” means to you.",
      "No heavy analytics setup required to get started.",
    ],
  },
];

type Plan = {
  id: string;
  name: string;
  badge?: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlight?: boolean;
};

export const PLANS: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    price: "$19",
    period: "/month",
    description: "A simple way to try the product on a smaller project.",
    features: [
      "Up to 3 active projects",
      "Basic collaboration tools",
      "Email support within 48 hours",
    ],
  },
  {
    id: "focus",
    name: "Focus",
    badge: "Most popular",
    price: "$39",
    period: "/month",
    description: "Designed for people who live in this workspace every day.",
    features: [
      "Unlimited active projects",
      "Priority collaboration features",
      "Dedicated support with faster response",
      "Early access to new experiments",
    ],
    highlight: true,
  },
  {
    id: "studio",
    name: "Studio",
    price: "$79",
    period: "/month",
    description: "For teams that need more control and higher limits.",
    features: [
      "Everything in Focus",
      "Advanced roles & permissions",
      "Custom onboarding for your team",
    ],
  },
];
