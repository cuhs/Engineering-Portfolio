"use client";

import { motion } from "framer-motion";
import {Header} from "../components/Header";
import {ProjectCard} from "../components/ProjectCard";
import { FaChevronDown } from "react-icons/fa";
import "tailwindcss/tailwind.css";

export default function MyWork() {
  return (
    <motion.div 
      className="bg-gradient-to-br from-gray-950 to-gray-800 text-white min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Header />
      <section id="about" className="p-6 text-cyan-400 text-center min-h-screen flex flex-col justify-center">
        <h1 className="text-5xl font-semibold">Welcome to My Portfolio</h1>
        <p className="text-lg mt-2">Scroll down to see my work!</p>
      </section>
      
      <section id="projects" className="p-6 text-cyan-400 flex flex-col items-center">
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
