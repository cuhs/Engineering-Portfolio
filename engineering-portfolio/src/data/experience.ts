export interface ExperienceData {
  role: string;
  organization: string;
  period: string;
  description: string;
  highlights: string[];
}

export const experienceList: ExperienceData[] = [
  {
    role: "Software Engineering Intern",
    organization: "Airacer",
    period: "Summer 2024",
    description:
      "Built an AI customer-support agent that queries production databases to answer user questions in natural language.",
    highlights: [
      "Designed LLM workflows with LangChain and LangGraph",
      "Integrated MongoDB and MySQL for structured data retrieval",
      "Shipped features that reduced manual support triage",
    ],
  },
  {
    role: "Project Lead",
    organization: "DataRes Consulting · Zeitios",
    period: "2024 – 2025",
    description:
      "Led a consulting team delivering an AI-powered video course generator for a startup client.",
    highlights: [
      "Architected a pipeline from text input to full video lectures",
      "Integrated LLM APIs, text-to-speech, and automated slide generation",
      "Managed scope, timelines, and client deliverables",
    ],
  },
  {
    role: "Mobile Developer",
    organization: "UCLA DevX · BLink",
    period: "2023 – 2024",
    description:
      "Developed and deployed a campus app that notifies UCLA students about free food and pop-up events.",
    highlights: [
      "Built with React Native, Express, MongoDB, and AWS",
      "Released to the App Store with active student usage",
      "Collaborated in an agile student engineering team",
    ],
  },
];
