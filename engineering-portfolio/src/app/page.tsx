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
      image:"roominate.png",
      title:"Roominate",
      description:"Full-stack app made with NextJS, TailwindCSS, ExpressJS, Prisma, and MongoDB to allow UCLA students to filter and search for roommates and roommate groups, complete with user authentication and authorization features. Made as a part of Software Construction class (CS 35L).",
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
      image:"allgrow.png", 
      title:"Allgrow educational app", 
      description:"Mobile app made for Romanian non-profit Allgrow Association, created as a part of Develop For Good. Used React Native and Supabase to create user-authenticated app for project-based education system.",
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
      image:"airacer.png", 
      title:"Airacer Intern: AI SQL chatbot", 
      description:"Over the Summer of 2024, I worked as an intern for Airacer, where I assisted in the effort to create an AI customer support chatbot. To do this, I worked with tools such as Langchain, Langgraph, MongoDB, and MySQL, to create a large language model agent that could query a database and answer user questions.",
    },
    {
      image:"blink.png", 
      title:"BLink: student team app", 
      description:"I worked as a part of a UCLA DevX team to create a mobile app to notify students of free food and popups on campus. We used React Native, ExpressJS, MongoDB, and AWS to build this app and are in the process of deploying it to the app store.",
      links: [
        {
          name: "Demo",
          url: "https://drive.google.com/file/d/1hKBgRNGygMJ6vz0MgqpDv_Zeo5HVh16d/view?usp=sharing"
        }
      ]
    },
    {
      image:"adblock.png", 
      title:"Ad Blocker Chrome Extension", 
      description:"Chrome extension created using HTML, C++ scripting, Javascript, and CSS for ad blocker that blocks over 10,000 ad domains. Implemented manual ad blocking and video ad skipping functionality.",
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
      className="bg-gradient-to-br from-gray-950 to-gray-800 text-white min-h-screen relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-black opacity-40"></div>
      <div className="absolute inset-0 bg-grid-cyan opacity-15"></div>
      <Header />
      <section id="about" className="p-6 text-center min-h-screen flex flex-col justify-center relative">
        <motion.h1 
          className="text-6xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Alexander Hu
        </motion.h1>
        
        <motion.h2 
          className="text-3xl font-semibold mb-3 text-gray-300"
          initial={{ y: -15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Computer Science Major at <span className="text-blue-400">UCLA</span>
        </motion.h2>
        
        <motion.div 
          className="w-20 h-1 mx-auto bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mb-4"
          initial={{ width: 0 }}
          animate={{ width: "5rem" }}
          transition={{ duration: 0.8, delay: 0.4 }}
        />
        
        <motion.div
          className="max-w-3xl mx-auto mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.p 
            className="text-xl mb-4 text-gray-300 leading-relaxed"
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Full-stack developer with an interest in 
            <span className="relative inline-block px-2">
              <span className="absolute inset-0 bg-cyan-900 bg-opacity-30 rounded-md blur-sm"></span>
              <span className="relative text-cyan-400 font-medium">ML algorithms</span>
            </span> 
            and 
            <span className="relative inline-block px-2">
              <span className="absolute inset-0 bg-blue-900 bg-opacity-30 rounded-md blur-sm"></span>
              <span className="relative text-blue-300 font-medium">cybersecurity challenges</span>
            </span>
          </motion.p>
          <motion.p
            className="text-xl text-gray-300 leading-relaxed"
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Focused on building 
            <span className="relative inline-block px-2">
              <span className="absolute inset-0 bg-blue-900 bg-opacity-30 rounded-md blur-sm"></span>
              <span className="relative text-blue-400 font-medium">data-driven applications</span>
            </span> 
            and 
            <span className="relative inline-block px-2">
              <span className="absolute inset-0 bg-cyan-900 bg-opacity-30 rounded-md blur-sm"></span>
              <span className="relative text-cyan-300 font-medium">solving complex technical challenges</span>
            </span>.
          </motion.p>
        </motion.div>
        
        <motion.button 
          onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })} 
          className="px-6 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium mx-auto hover:from-cyan-600 hover:to-blue-700 transition duration-300 shadow-lg"
          initial={{ y: -5, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          See my work
        </motion.button>
        
        <motion.button 
          onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })} 
          className="mt-12 mx-auto text-cyan-400 hover:text-cyan-600 transition duration-300"
          initial={{ y: -5, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1, repeat: Infinity, repeatType: "reverse" }}
        >
          <FaChevronDown size={30} />
        </motion.button>
        
        {showFooterText && (
          <motion.p
            className="text-sm text-gray-500 absolute bottom-4 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            This website was made from scratch with <span className="text-cyan-500">NextJS</span>, <span className="text-blue-500">NodeJS</span>, and <span className="text-cyan-400">TailwindCSS</span>
          </motion.p>
        )}
      </section>
      
      <section id="projects" className="py-20 px-6 flex flex-col items-center relative">
  <motion.h1 
    className="text-4xl md:text-5xl mb-3 font-medium text-center bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text"
    initial={{ opacity: 0, y: -10 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    My Projects
  </motion.h1>
  <motion.div
    className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full mb-12"
    initial={{ width: 0 }}
    whileInView={{ width: "6rem" }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  />
  <div className="flex flex-wrap justify-center gap-8 max-w-6xl">
    {projectList.map((project, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
      >
        <ProjectCard 
          image={project.image} 
          title={project.title}
          description={project.description} 
          links={project.links}
        />
      </motion.div>
    ))}
  </div>
</section>
    </motion.div>
  );
}