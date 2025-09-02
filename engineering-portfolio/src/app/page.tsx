"use client";

import { motion } from "framer-motion";
import { Header } from "../components/Header";
import { ProjectCard } from "../components/ProjectCard";
import { FaChevronDown } from "react-icons/fa";
import "tailwindcss/tailwind.css";
import { useState, useEffect } from "react";

export default function MyWork() {
  const [showFooterText, setShowFooterText] = useState(true);


  const projectList = [
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
      ]
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
      ]
    }
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowFooterText(false);
      } else {
        setShowFooterText(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.div
      className="bg-slate-900 text-white min-h-screen relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="absolute inset-0 bg-grid-subtle"></div>
      <Header />
      <section id="about" className="px-6 py-20 text-center min-h-screen flex flex-col justify-center relative max-w-6xl mx-auto">
        <motion.h1
          className="text-5xl md:text-7xl font-light mb-8 text-white tracking-tight"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Alexander Hu
        </motion.h1>

        <motion.h2
          className="text-xl md:text-2xl font-normal mb-8 text-slate-300"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Computer Science Major at <span className="text-blue-400 font-medium">UCLA</span>
        </motion.h2>

        <motion.div
          className="w-16 h-px mx-auto bg-gradient-to-r from-transparent via-slate-400 to-transparent mb-12"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        />

        <motion.div
          className="max-w-4xl mx-auto mb-16 space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.p
            className="text-lg md:text-xl text-slate-300 leading-relaxed font-light"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Full-stack developer with a passion for <span className="text-blue-400 font-medium">machine learning</span> and <span className="text-emerald-400 font-medium">cybersecurity</span>
          </motion.p>
          <motion.p
            className="text-lg md:text-xl text-slate-400 leading-relaxed font-light"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Developing data-driven software solutions both with a team and individually
          </motion.p>
        </motion.div>

        <div className="flex justify-center">
          <motion.button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="group relative overflow-hidden px-10 py-4 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/30 rounded-xl text-white font-medium transition-all duration-500 backdrop-blur-sm shadow-lg hover:shadow-2xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10 flex items-center space-x-3">
              <span>See what I've built</span>
              <motion.span
                className="text-blue-400 text-sm"
                animate={{ y: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                ↓
              </motion.span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </motion.button>
        </div>

        <motion.button
          onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          className="mt-16 mx-auto text-slate-400 hover:text-slate-300 transition-colors duration-300"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <FaChevronDown size={24} />
          </motion.div>
        </motion.button>

        {showFooterText && (
          <motion.p
            className="text-sm text-slate-500 absolute bottom-8 left-1/2 transform -translate-x-1/2 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            Built with <span className="text-blue-400">Next.js</span>, <span className="text-emerald-400">Node.js</span>, and <span className="text-cyan-400">Tailwind CSS</span>
          </motion.p>
        )}
      </section>

      <section id="projects" className="py-24 px-6 flex flex-col items-center relative max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl mb-4 font-light text-center text-white tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Featured Projects
        </motion.h2>
        <motion.p
          className="text-slate-400 text-center mb-16 font-light max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          A collection of projects showcasing full-stack development, machine learning, and innovative problem-solving
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {projectList.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              title={project.title}
              description={project.description}
              links={project.links}
              delay={index}
            />
          ))}
        </div>
      </section>
    </motion.div>
  );
}