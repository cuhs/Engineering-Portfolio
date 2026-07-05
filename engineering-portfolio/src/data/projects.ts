export interface ProjectData {
  image: string;
  title: string;
  description: string;
  links?: { name: string; url: string }[];
  featured?: boolean;
}

export const projectList: ProjectData[] = [
  {
    image: "pltr_hacks.png",
    title: "V2V AI Traffic Alerts — Palantir Hacks Winner",
    description:
      "Won 1st place by building a real-time vehicle safety system on Palantir Foundry. Processed LiDAR data to map traffic density and driver risk ratings, then deployed an AI agent that sends personalized alerts so drivers can avoid high-risk areas.",
    links: [
      {
        name: "Presentation",
        url: "https://docs.google.com/presentation/d/1Vo31ciCCi2TR8HoXoxiFxSEksQcvpokZnbcksyUw96E/edit?usp=sharing",
      },
    ],
    featured: true,
  },
  {
    image: "zeitios.png",
    title: "Zeitios AI — Video Course Generator",
    description:
      "Led a consulting team to build an AI platform that transforms text into complete video lectures. Integrated LLM APIs, text-to-speech, and automated slideshow generation for a startup client through DataRes Consulting.",
    links: [
      {
        name: "GitHub",
        url: "https://github.com/cuhs/zeitios",
      },
      {
        name: "Presentation",
        url: "https://docs.google.com/presentation/d/1s0J9AeFsgkG2AsYnmJRgNApBljsxAyFQ3eo5LMNmHwE/edit?usp=sharing",
      },
    ],
  },
  {
    image: "accessible.png",
    title: "Accessible AR — LA Hacks Top 10",
    description:
      "Built a Snapchat Spectacles Lens that lets users create and interact with 3D objects using American Sign Language. Combined AI sign-language detection with real-world surface recognition to place top 10 out of 160+ teams at LA Hacks 2025.",
    links: [
      {
        name: "DevPost",
        url: "https://devpost.com/software/accessible-ar",
      },
    ],
  },
  {
    image: "roominate.png",
    title: "Roominate — UCLA Roommate Finder",
    description:
      "Full-stack web app helping UCLA students search and filter roommates and roommate groups. Built with Next.js, Express, Prisma, and MongoDB, including authentication, authorization, and profile matching for CS 35L.",
    links: [
      {
        name: "GitHub",
        url: "https://github.com/ejinsw/roominate",
      },
      {
        name: "Presentation",
        url: "https://docs.google.com/presentation/d/1tIICCtC1mLWKHqbUkMkQvDkFDilORmUkvyBITaaq5zI/edit?usp=sharing",
      },
    ],
  },
  {
    image: "allgrow.png",
    title: "Allgrow — Educational Mobile App",
    description:
      "Shipped a React Native app for Romanian nonprofit Allgrow Association through Develop For Good. Built authenticated, project-based learning flows with Supabase for a real-world education platform.",
    links: [
      {
        name: "Case Study",
        url: "https://developforgood.notion.site/AllGrow-App-Case-Study-188fbe7117c080bf8ca3d26f198f71db#188fbe7117c081118c7bcce3df6240cb",
      },
      {
        name: "Presentation",
        url: "https://docs.google.com/presentation/d/1yoci7nF5Xi1OkvuZA3gj0dkJ4zNwfK5bpVNCbzXVo4Q/edit#slide=id.g33111289283_0_1",
      },
    ],
  },
  {
    image: "airacer.png",
    title: "Airacer — AI SQL Chatbot",
    description:
      "Intern project building an LLM agent that queries MySQL and MongoDB to answer customer support questions. Used LangChain and LangGraph to orchestrate multi-step database retrieval and natural-language responses.",
  },
  {
    image: "blink.png",
    title: "BLink — Campus Events App",
    description:
      "Mobile app that notifies UCLA students about free food and campus pop-ups. Built with React Native, Express, MongoDB, and AWS, and deployed to the App Store as part of UCLA DevX.",
    links: [
      {
        name: "Demo",
        url: "https://drive.google.com/file/d/1hKBgRNGygMJ6vz0MgqpDv_Zeo5HVh16d/view?usp=sharing",
      },
    ],
    featured: true,
  },
  {
    image: "adblock.png",
    title: "Chrome Ad Blocker Extension",
    description:
      "Browser extension blocking 10,000+ ad domains with custom filtering rules, manual ad blocking, and video ad skipping. Built with JavaScript, HTML, and CSS using Chrome extension APIs.",
    links: [
      {
        name: "GitHub",
        url: "https://github.com/cuhs/AdBlocker",
      },
    ],
  },
  {
    image: "MLcrises.png",
    title: "African Economic Crises — ML Research",
    description:
      "Researched and predicted economic crises across African countries using Pandas, PyTorch, and Scikit-learn. Evaluated three model architectures and presented findings in a research paper and presentation.",
    links: [
      {
        name: "Research Paper",
        url: "https://docs.google.com/document/d/1m1uxI2QJc-VQtGh4DwqLulsywsnPx7uUgPfbinBrwPc/edit?usp=sharing",
      },
      {
        name: "Presentation",
        url: "https://docs.google.com/presentation/d/1-PIDrqUsGwQBLzf20Rj-i290MVYNA_YjTYiEMaGOIiw/edit?usp=sharing",
      },
    ],
  },
  {
    image: "RCJposter.png",
    title: "RoboCup Junior — Rescue Maze",
    description:
      "Programmed autonomous maze navigation in C++ and Python with OpenCV and KNN-based victim detection. Won 1st place nationally and 4th internationally in the Rescue Maze competition.",
    links: [
      {
        name: "Presentation",
        url: "https://docs.google.com/presentation/d/1CgderGgfNAWGIQ9CKd9YO8GfXwburPwyYsFkAENqaSM/edit?usp=sharing",
      },
      {
        name: "GitHub",
        url: "https://github.com/cuhs/Nerd-2021-2022-RCJ",
      },
    ],
    featured: true,
  },
];
