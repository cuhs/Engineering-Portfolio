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
    title: "Palantir Hacks - First place (V2V AI Traffic Alerts)",
    description: "Developed system that takes LiDAR sensor data of streets and maps vehicles by risk rating and traffic density in real-time on Palantir Foundry map. An AI agent then uses the data to create real-time NLP messages to individual drivers so they can avoid high-risk areas or areas with a lot of drivers tagged as 'dangerous'.",
    links: [
      {
        name: "More Info",
        url: "https://docs.google.com/presentation/d/1Vo31ciCCi2TR8HoXoxiFxSEksQcvpokZnbcksyUw96E/edit?usp=sharing"
      }
    ],
    featured: true
  },
  {
    image: "zeitios.png",
    title: "Zeitios AI",
    description: "Project Lead of a consulting team that developed an AI-powered video course generator that leverages LLM APIs to automatically create educational content. The system integrates AI text-to-speech technology and automated slideshow generation to transform text input into complete video lectures. Built as a part of DataRes Consulting working with the client Zeitios.",
    links: [
      {
        name: "Github",
        url: "https://github.com/cuhs/zeitios"
      },
      {
        name: "More Info",
        url: "https://docs.google.com/presentation/d/1s0J9AeFsgkG2AsYnmJRgNApBljsxAyFQ3eo5LMNmHwE/edit?usp=sharing"
      }
    ]
  },
  {
    image: "accessible.png",
    title: "Accessible AR (top 10 LA Hacks)",
    description: "Developed Accessible AR, a Snapchat Spectacles Lens that enables virtual world building through American Sign Language (ASL), placing top 10 out of over 160 teams at LA Hacks 2025. The app uses AI-powered sign language detection and real-world surface recognition to allow users to generate and interact with 3D objects through ASL gestures.",
    links: [
      {
        name: "DevPost",
        url: "https://devpost.com/software/accessible-ar"
      }
    ]
  },
  {
    image: "roominate.png",
    title: "Roominate",
    description: "Full-stack app made with NextJS, TailwindCSS, ExpressJS, Prisma, and MongoDB to allow UCLA students to filter and search for roommates and roommate groups, complete with user authentication and authorization features. Made as a part of Software Construction class (CS 35L).",
    links: [
      {
        name: "Github",
        url: "https://github.com/ejinsw/roominate"
      },
      {
        name: "More Info",
        url: "https://docs.google.com/presentation/d/1tIICCtC1mLWKHqbUkMkQvDkFDilORmUkvyBITaaq5zI/edit?usp=sharing"
      }
    ]
  },
  {
    image: "allgrow.png",
    title: "Allgrow educational app",
    description: "Mobile app made for Romanian non-profit Allgrow Association, created as a part of Develop For Good. Used React Native and Supabase to create user-authenticated app for project-based education system.",
    links: [
      {
        name: "Case Study",
        url: "https://developforgood.notion.site/AllGrow-App-Case-Study-188fbe7117c080bf8ca3d26f198f71db#188fbe7117c081118c7bcce3df6240cb"
      },
      {
        name: "More info",
        url: "https://docs.google.com/presentation/d/1yoci7nF5Xi1OkvuZA3gj0dkJ4zNwfK5bpVNCbzXVo4Q/edit#slide=id.g33111289283_0_1"
      }
    ]
  },
  {
    image: "airacer.png",
    title: "Airacer Intern: AI SQL chatbot",
    description: "Over the Summer of 2024, I worked as an intern for Airacer, where I assisted in the effort to create an AI customer support chatbot. To do this, I worked with tools such as Langchain, Langgraph, MongoDB, and MySQL, to create a large language model agent that could query a database and answer user questions.",
  },
  {
    image: "blink.png",
    title: "BLink: student team app",
    description: "I worked as a part of a UCLA DevX team to create a mobile app to notify students of free food and popups on campus. We used React Native, ExpressJS, MongoDB, and AWS to build this app and have deployed it to the app store.",
    links: [
      {
        name: "Demo",
        url: "https://drive.google.com/file/d/1hKBgRNGygMJ6vz0MgqpDv_Zeo5HVh16d/view?usp=sharing"
      }
    ],
    featured: true
  },
  {
    image: "adblock.png",
    title: "Ad Blocker Chrome Extension",
    description: "Chrome extension created using HTML, C++ scripting, Javascript, and CSS for ad blocker that blocks over 10,000 ad domains. Implemented manual ad blocking and video ad skipping functionality.",
    links: [
      {
        name: "Github",
        url: "https://github.com/cuhs/AdBlocker"
      }
    ]
  },
  {
    image: "MLcrises.png",
    title: "African Crises ML Research",
    description: "Engineered economic data and predicted economic crises by evaluating data in African countries using Python libraries like Pandas, PyTorch, and Scikit-Learn. Tested 3 different models and presented findings.",
    links: [
      {
        name: "Research Paper",
        url: "https://docs.google.com/document/d/1m1uxI2QJc-VQtGh4DwqLulsywsnPx7uUgPfbinBrwPc/edit?usp=sharing"
      },
      {
        name: "Presentation",
        url: "https://docs.google.com/presentation/d/1-PIDrqUsGwQBLzf20Rj-i290MVYNA_YjTYiEMaGOIiw/edit?usp=sharing"
      }
    ]
  },
  {
    image: "RCJposter.png",
    title: "RoboCup Junior: Rescue Maze",
    description: "Implemented sensory depth first search navigation algorithms using C++ and Python, integrating OpenCV libraries with KNN machine learning to detect simulated victims and navigate randomly generated mazes. Won 1st place nationally, 4th internationally.",
    links: [
      {
        name: "Presentation",
        url: "https://docs.google.com/presentation/d/1CgderGgfNAWGIQ9CKd9YO8GfXwburPwyYsFkAENqaSM/edit?usp=sharing"
      },
      {
        name: "Github",
        url: "https://github.com/cuhs/Nerd-2021-2022-RCJ"
      }
    ],
    featured: true
  }
];
