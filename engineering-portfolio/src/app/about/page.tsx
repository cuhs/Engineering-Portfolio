"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Header } from "../../components/Header";
import { FaGraduationCap, FaCode} from "react-icons/fa";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Link from "next/link";

export default function AboutPage() {

  const languages = [
    "Javascript/Typescript",
    "Python",
    "Java",
    "C/C++",
    "HTML/CSS",
    "SQL",
    "Lisp",
    "TailwindCSS"
  ]  

  const technologies = [
    "ReactJS/NextJS",
    "MongoDB",
    "Cloud technologies",
    "REST APIs",
    "Git",
    "Large language models",
    "Linux",
    "Database Design"

  ]
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
      <section className="pt-32 pb-20 px-6 flex flex-col items-center relative max-w-6xl mx-auto">
        <motion.h1 
          className="text-3xl md:text-4xl mb-4 font-light text-center text-white tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h1>
        <motion.div
          className="w-16 h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent mx-auto mb-16"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 w-full">
          <motion.div
            className="lg:col-span-1 flex flex-col items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative mb-8">
              <div className="w-72 h-80 rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl">
                <Image 
                  src="/treepic.png" 
                  alt="Alexander Hu" 
                  width={400} 
                  height={500} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h2 className="text-2xl font-medium text-white mb-2">Alexander Hu</h2>
            <p className="text-slate-400 text-center mb-6 font-light">Computer Science Major at UCLA</p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/alex-hu374/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-400 hover:text-blue-400 transition-colors duration-300 p-2"
              >
                <FaLinkedin size={20} />
              </a>
              <a 
                href="https://github.com/cuhs" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-400 hover:text-slate-200 transition-colors duration-300 p-2"
              >
                <FaGithub size={20} />
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50">
              <h2 className="text-xl font-medium mb-6 flex items-center text-white">
                <FaGraduationCap className="mr-3 text-blue-400" /> Education & Background
              </h2>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  Hi! I&apos;m Alex, a computer science major at <span className="text-blue-400 font-medium">UCLA</span>.
                </p>
                <p>
                  Through engaging in coursework and projects while studying computer science, I&apos;ve gained valuable experience in <span className="text-blue-400 font-medium">full-stack development</span>, <span className="text-emerald-400 font-medium">machine learning</span>, <span className="text-purple-400 font-medium">cybersecurity</span>, <span className="text-cyan-400 font-medium">operating systems</span>, and more. Some projects I&apos;ve worked on are an AI SQL-querying chatbot, an app that notifies students about free foods and events, a roommate finding app for UCLA students, and this portfolio website. <Link href="/#projects" className="text-blue-400 hover:text-blue-300 underline font-medium transition-colors duration-300">Discover more</Link> about these and other projects I&apos;ve done!
                </p>
                <p>
                  When I&apos;m not developing apps or exploring new areas in computer science, I love playing tennis, rock climbing, practicing new songs on piano, reading, playing Monster Hunter World, and backpacking.
                </p>
              </div>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50">
              <h2 className="text-xl font-medium mb-6 flex items-center text-white">
                <FaCode className="mr-3 text-blue-400" /> Technical Skills
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-medium text-blue-400 mb-4">Languages</h3>
                  <div className="space-y-2">
                    {languages.map((language, index) => (
                      <div key={index} className="flex items-center text-slate-300">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                        {language}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-emerald-400 mb-4">Technologies</h3>
                  <div className="space-y-2">
                    {technologies.map((tech, index) => (
                      <div key={index} className="flex items-center text-slate-300">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}