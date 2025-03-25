"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Header } from "../../components/Header";
import { FaGraduationCap, FaCode, FaLaptopCode, FaGamepad, FaHiking, FaMusic } from "react-icons/fa";
import { MdInterests } from "react-icons/md";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

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
      className="bg-gradient-to-br from-gray-950 to-gray-800 text-white min-h-screen relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-black opacity-40"></div>
      <div className="absolute inset-0 bg-grid-cyan opacity-15"></div>
      <Header />
      <section className="pt-28 pb-16 px-6 flex flex-col items-center relative max-w-6xl mx-auto">
        <motion.h1 
          className="text-4xl md:text-5xl mb-3 font-bold text-center bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h1>
        <motion.div
          className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full mb-12"
          initial={{ width: 0 }}
          animate={{ width: "6rem" }}
          transition={{ duration: 0.8 }}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          <motion.div
            className="md:col-span-1 flex flex-col items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="rounded-2xl overflow-hidden border-4 border-gradient-cyan-blue p-1 shadow-xl mb-6 max-w-xs">
              <div className="rounded-xl overflow-hidden">
                <Image 
                  src="/treepic.png" 
                  alt="Alexander Hu" 
                  width={400} 
                  height={500} 
                  className="rounded-xl transform transition-transform duration-500"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
            <h2 className="text-2xl font-semibold text-cyan-400 mb-2">Alexander Hu</h2>
            <p className="text-gray-300 text-center mb-4">Computer Science Major at UCLA</p>
            <div className="flex space-x-4 text-gray-400">
              <a href="https://www.linkedin.com/in/alex-hu374/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition duration-300">
                <FaLinkedin size={22} />
              </a>
              <a href="https://github.com/cuhs" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition duration-300">
                <FaGithub size={22} />
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:col-span-2 text-gray-300"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-700 shadow-lg mb-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center text-cyan-400">
                <FaGraduationCap className="mr-2" /> Education & Background
              </h2>
              <p className="mb-4 leading-relaxed">
                Hi! I'm Alex, a computer science major at <span className="text-blue-400 font-medium">UCLA</span>.
              </p>
              <p className="mb-4 leading-relaxed">
                Through engaging in coursework and projects while studying computer science, I've gained valuable experience in <span className="text-blue-300 font-medium">full-stack development</span>, <span className="text-blue-400 font-medium">machine learning</span>, 
                <span className="text-blue-500 font-medium"> cybersecurity</span>, <span className="text-blue-600 font-medium"> operating systems</span>, and more. Some projects I've worked on are an AI SQL-querying chatbot, an app that notifies students about free foods and events, a roommate finding app for UCLA students, and this portfolio website. <a href="/#projects" className="text-cyan-400 hover:text-cyan-200 underline font-medium transition-colors duration-300">Discover More</a> about these and other projects I've done!
              </p>
              <p className="leading-relaxed">
                When I'm not developing apps or exploring new areas in computer science, I love playing tennis, rock climbing, practicing new songs on piano, reading, playing Monster Hunter World, and backpacking. 
              </p>
            </div>
            
            <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-700 shadow-lg mb-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center text-cyan-400">
                <FaCode className="mr-2" /> Technical Skills
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-lg font-medium text-blue-400 mb-2">Languages</h3>
                  <ul className="list-disc list-inside space-y-1">
                    {languages.map((language, index) => (
                      <li key={index}>{language}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-blue-400 mb-2">Technologies</h3>
                  <ul className="list-disc list-inside space-y-1">
                    {technologies.map((tech, index) => (
                        <li key = {index}>{tech}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}