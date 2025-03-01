"use client";

import { motion } from "framer-motion";
import {Header} from "../components/Header";
import {ProjectCard} from "../components/ProjectCard";
import { FaChevronDown } from "react-icons/fa";
import "tailwindcss/tailwind.css";
import { useState, useEffect } from "react";

export default function MyWork() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <motion.div 
        className="flex flex-col justify-center items-center min-h-screen bg-gray-900 text-white text-center relative overflow-hidden"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 opacity-50"></div>
        <div className="absolute inset-0 bg-grid-cyan opacity-20"></div>
        <h1 className="text-5xl font-bold text-cyan-400 animate-pulse relative">Alexander Hu</h1>
        <h2 className="text-2xl mt-2 text-gray-300 relative">Project Portfolio</h2>
        <p className="text-lg mt-4 text-gray-400 relative">Made from scratch using NextJS, TailwindCSS, and NodeJS</p>
        <div className="w-16 h-1 bg-cyan-400 mt-4 rounded-full animate-bounce relative"></div>
      </motion.div>
    );
  }

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
      <section id="about" className="p-6 text-cyan-400 text-center min-h-screen flex flex-col justify-center relative">
        <h1 className="text-5xl font-semibold">Welcome to My Portfolio</h1>
        <p className="text-lg mt-2">Scroll down to see my work!</p>
      </section>
      
      
      <section id="projects" className="p-6 text-cyan-400 flex flex-col items-center relative">
        <h1 className="text-4xl mb-6 font-medium text-center">My Projects</h1>
        <div className="flex flex-wrap justify-center gap-6 max-w-6xl">
          <ProjectCard image="projectexample.png" title="Project 1" description="A cool project I worked on." link="/project-1" />
          <ProjectCard image="projectexample.png" title="Project 2" description="Another interesting project." link="/project-2" />
          <ProjectCard image="projectexample.png" title="Team Project 1" description="A collaborative effort." link="/team-project-1" />
          <ProjectCard image="projectexample.png" title="Team Project 2" description="An exciting group project." link="/team-project-2" />
        </div>
      </section>
    </motion.div>
  );
}
