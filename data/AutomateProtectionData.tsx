import { AutomateProtectionType } from "@/types/AutomateProtectionType";

export const AutomateProtectionData: AutomateProtectionType[] = [
  {
    id: 1,
    xsText: "Adaptive security layers",
    title: "Built to grow with you",
    description:
      "Whether you’re scaling from 5 to 500 endpoints, Protex adapts its architecture dynamically, from cloud-native microservices to enterprise-grade defense policies.",
    iconSrc: "/icons/AutomateProtectionIcons/icon-1.svg",
  },
  {
    id: 2,
    xsText: "Unified visibility. Global protection",
    title: "Multi-region awareness",
    description: "Stay protected across locations, clouds and teams.",
    iconSrc: "/icons/AutomateProtectionIcons/icon-2.svg",
  },
  {
    id: 3,
    title: "Behavioral anomaly detection",
    description: "Detects subtle deviations in user and system behavior.",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
        <path
          fill="currentColor"
          d="M20 24h-8.137a4.13 4.13 0 0 0-.429-1.02L21.98 12.434A3.994 3.994 0 1 0 20.141 8H14v2h6.141a3.96 3.96 0 0 0 .425 1.02L10.02 21.566A3.994 3.994 0 1 0 11.859 26H20v3h8v-8h-8zm4-17a2 2 0 1 1-2 2a2.002 2.002 0 0 1 2-2zM8 27a2 2 0 1 1 2-2a2.002 2.002 0 0 1-2 2zm14-4h4v4h-4zM9.693 12.75a5 5 0 0 1 0-7.5l1.324 1.5a3 3 0 0 0 0 4.501z"
        ></path>
        <path
          fill="currentColor"
          d="M7.047 15.751a9 9 0 0 1 0-13.501l1.324 1.5a7 7 0 0 0 0 10.501Z"
        ></path>
      </svg>
    ),
  },
  {
    id: 4,
    title: "Modular rule engine",
    description:
      "Customize how your system reacts — with building blocks for threat response logic",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
        <path
          fill="currentColor"
          d="M20 27H7a2.006 2.006 0 0 1-2-2V12h2v13h13Z"
        ></path>
        <path
          fill="currentColor"
          d="m23.4 22l-4-4a3.606 3.606 0 0 0 .6-2a4.012 4.012 0 0 0-4-4a3.606 3.606 0 0 0-2 .6l-4-4V2H2v8h6.6l4 4a3.606 3.606 0 0 0-.6 2a4.012 4.012 0 0 0 4 4a3.606 3.606 0 0 0 2-.6l4 4V30h8v-8ZM8 8H4V4h4Zm8 10a2 2 0 1 1 2-2a2.006 2.006 0 0 1-2 2Zm12 10h-4v-4h4Z"
        ></path>
        <path
          fill="currentColor"
          d="M25 20h2V7a2.006 2.006 0 0 0-2-2H12v2h13Z"
        ></path>
      </svg>
    ),
  },
  {
    id: 5,
    xsText: "Always up to date. Always secure.",
    title: "Zero config maintenance",
    description:
      "Forget manual patching or policy tuning. Our pro tier keeps everything current and resilient. Without your team lifting a finger.",
    iconSrc: "/icons/AutomateProtectionIcons/icon-3.svg",
  },
];
