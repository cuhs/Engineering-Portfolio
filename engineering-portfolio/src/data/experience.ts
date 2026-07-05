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
    organization: "Scale AI",
    period: "Summer 2026",
    description:
      "Incoming software engineering intern at Scale AI, building on prior experience in distributed systems and AI infrastructure.",
    highlights: [
      "Selected for Scale AI's Summer 2026 engineering internship program",
    ],
  },
  {
    role: "Cyber Software Engineering Intern",
    organization: "STR (Systems and Technology Research)",
    period: "June 2025 – September 2025",
    description:
      "Built low-latency distributed systems for aircraft-ground communication in Dockerized Linux environments.",
    highlights: [
      "Architected process/thread control in Docker containers, reducing signal detection latency by 30%",
      "Designed dynamic process-resource graphs and network socket monitors, cutting debugging time by 20%",
      "Built a Python distributed command bus with ZeroMQ to sync 10+ modules across remote subsystems at under 1ms latency",
      "Collaborated with signals team via GitLab CI/CD to improve integration reliability across 3 subsystems",
    ],
  },
  {
    role: "Software Consultant Project Lead",
    organization: "Zeitios Inc",
    period: "April 2025 – June 2025",
    description:
      "Led architecture and development of an agentic AI course generation platform for a startup client through DataRes Consulting.",
    highlights: [
      "Built MERN + Vite platform with GPT-4 integration, cutting video creation time by 70%",
      "Managed agile sprints and client syncs, delivering MVP 2 weeks ahead of schedule",
      "Targeted 500+ users with programmatic video rendering pipeline",
    ],
  },
  {
    role: "Internal Vice President",
    organization: "UCLA DevX",
    period: "October 2024 – Present",
    description:
      "Lead engineering operations for UCLA's largest student software club, directing teams that ship products used across campus.",
    highlights: [
      "Directed cross-functional dev teams of 40+ students launching apps used by 10K+ UCLA students",
      "Drove 40% increase in club retention through tech workshops, showcases, and interdisciplinary collabs",
      "Oversaw full-stack products including BLink, deployed to the App Store",
    ],
  },
  {
    role: "AI Backend Engineering Intern",
    organization: "Airacer",
    period: "June 2024 – September 2024",
    description:
      "Built NLP and LLM-powered backend systems for real-time aircraft analytics from 10K+ flight records.",
    highlights: [
      "Built NLP chatbot with LangChain, LLM agents, and vector-based semantic search",
      "Developed natural language to SQL interface, boosting analyst query throughput by 30%",
      "Used GitHub and Agile workflows, reducing integration conflicts by 25%",
    ],
  },
];
