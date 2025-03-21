"use client";

import { motion } from "framer-motion";
import { Header } from "../components/Header";
import { ProjectCard } from "../components/ProjectCard";
import { FaChevronDown } from "react-icons/fa";
import "tailwindcss/tailwind.css";
import { useState, useEffect } from "react";

export default function MyWork() {
  const [showFooterText, setShowFooterText] = useState(true);

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
    <ProjectCard 
      image="projectexample.png" 
      title="UCLA Xplore"
      description="AI-driven extracurricular planner using PostgreSQL database, LLM embeddings, and Python to recommend student activities. Utilized LangChain SQL querying agents to manage 300+ student club timeslots." 
      link="/project-1" 
    />
    <ProjectCard 
      image="projectexample.png" 
      title="Ad Blocker Chrome Extension" 
      description="Created Chrome extension using C++ scripting, HTML, JSON, Javascript, and CSS to create ad blocker for over 10,000 ad domains. Implemented manual ad blocking and video ad skipping functionality." 
      link="/project-2" 
    />
    <ProjectCard 
      image="projectexample.png" 
      title="African Crises ML Research" 
      description="Engineered economic data and predicted economic crises by evaluating data in African countries using Python libraries like Pandas, PyTorch, and Scikit-Learn. Tested 3 different models and presented findings." 
      link="/team-project-1" 
    />
    <ProjectCard 
      image="projectexample.png" 
      title="RoboCup Junior: Rescue Maze" 
      description="Implemented sensory depth first search navigation algorithms using C++ and Python, integrating OpenCV libraries with KNN machine learning to navigate randomly generated mazes. Won 1st place nationally." 
      link="/team-project-2" 
    />
  </div>
</section>
    </motion.div>
  );
}