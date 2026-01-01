import { PricingType } from "@/types/PricingType";

export const MonthlyData: PricingType[] = [
  {
    id: 1,
    title: "Starter",
    description:
      "Ideal for early-stage builders who want to launch fast with enterprise-grade protection.",
    price: "$19",
    limitations: [
      "Basic protection",
      "1 project",
      "Email alerts",
      "Manual scans",
      "Community support",
    ],
  },
  {
    id: 2,
    title: "Growth",
    description:
      "Built for startups that need reliable, scalable security without slowing down growth.",
    price: "$49",
    descriptionOfLimitation: "Everything Starter, plus:",
    limitations: [
      "Advanced protection",
      "Up to 10 projects",
      "Email + slack alerts",
      "Auto scans",
      "Standard support",
    ],
  },
  {
    id: 3,
    title: "Enterprise",
    description:
      "Designed for teams that prioritize robust security, compliance, and resilience.",
    price: "$99",
    descriptionOfLimitation: "Everything Growth, plus:",
    limitations: [
      "Full-scale coverage",
      "Unlimited projects",
      "Custom integrations",
      "Dedicated support",
      "Priority SLA support",
    ],
  },
];

export const YearlyData: PricingType[] = [
  {
    id: 1,
    title: "Starter",
    description:
      "Ideal for early-stage builders who want to launch fast with enterprise-grade protection.",
    price: "$180",
    discount: "20%",
    limitations: [
      "Basic protection",
      "1 project",
      "Email alerts",
      "Manual scans",
      "Community support",
    ],
  },
  {
    id: 2,
    title: "Growth",
    description:
      "Built for startups that need reliable, scalable security without slowing down growth.",
    price: "$470",
    discount: "20%",
    descriptionOfLimitation: "Everything Starter, plus:",
    limitations: [
      "Advanced protection",
      "Up to 10 projects",
      "Email + slack alerts",
      "Auto scans",
      "Standard support",
    ],
  },
  {
    id: 3,
    title: "Enterprise",
    description:
      "Designed for teams that prioritize robust security, compliance, and resilience.",
    price: "$950",
    discount: "20%",
    descriptionOfLimitation: "Everything Growth, plus:",
    limitations: [
      "Full-scale coverage",
      "Unlimited projects",
      "Custom integrations",
      "Dedicated support",
      "Priority SLA support",
    ],
  },
];
