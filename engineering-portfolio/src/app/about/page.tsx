"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Header } from "../../components/Header";
import { FaGraduationCap, FaCode } from "react-icons/fa";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SectionReveal } from "../../components/SectionReveal";
import { AnimatedSkills } from "../../components/AnimatedSkills";
import { MagneticButton } from "../../components/MagneticButton";
import Link from "next/link";
import { useRef } from "react";

const skillCategories = [
  {
    label: "Languages",
    color: "#60a5fa",
    glowColor: "rgba(96, 165, 250, 0.2)",
    skills: [
      "Javascript/Typescript",
      "Python",
      "Java",
      "C/C++",
      "HTML/CSS",
      "SQL",
      "Lisp",
      "TailwindCSS",
    ],
  },
  {
    label: "Technologies",
    color: "#34d399",
    glowColor: "rgba(52, 211, 153, 0.2)",
    skills: [
      "ReactJS/NextJS",
      "MongoDB",
      "Cloud technologies",
      "REST APIs",
      "Git",
      "Large language models",
      "Linux",
      "Database Design",
    ],
  },
];

export default function AboutPage() {
  const photoRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: photoRef,
    offset: ["start end", "end start"],
  });
  const photoY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <motion.div
      className="bg-slate-950 text-white min-h-screen relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="fixed inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      <div className="fixed inset-0 aurora-bg" />
      <div className="fixed inset-0 bg-grid-subtle" />
      <Header />

      <section className="pt-32 pb-20 px-6 flex flex-col items-center relative max-w-6xl mx-auto">
        <SectionReveal>
          <p className="text-blue-400 font-mono text-sm mb-4 tracking-wider text-center">
            // about me
          </p>
          <h1 className="text-4xl md:text-5xl mb-4 font-display font-bold text-center text-white tracking-tight">
            About Me
          </h1>
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto mb-16" />
        </SectionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 w-full">
          {/* Photo column */}
          <SectionReveal className="lg:col-span-1 flex flex-col items-center" delay={0.1}>
            <motion.div className="relative mb-8" ref={photoRef} style={{ y: photoY }}>
              <div className="w-64 h-72 md:w-72 md:h-80 rounded-2xl overflow-hidden border border-slate-700/30 shadow-2xl relative group">
                <Image
                  src="/treepic.png"
                  alt="Alexander Hu"
                  width={400}
                  height={500}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
              </div>
              {/* Decorative glow behind photo */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 via-transparent to-purple-500/10 rounded-3xl blur-2xl -z-10" />
            </motion.div>
            <h2 className="text-2xl font-display font-semibold text-white mb-2">
              Alexander Hu
            </h2>
            <p className="text-slate-500 text-center mb-6 font-light">
              Computer Science Major at UCLA
            </p>
            <div className="flex space-x-3">
              <MagneticButton strength={0.4}>
                <a
                  href="https://www.linkedin.com/in/alex-hu374/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-blue-400 transition-colors duration-300 p-2.5 bg-white/5 rounded-xl border border-white/5 hover:border-blue-500/20 block"
                >
                  <FaLinkedin size={18} />
                </a>
              </MagneticButton>
              <MagneticButton strength={0.4}>
                <a
                  href="https://github.com/cuhs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-white transition-colors duration-300 p-2.5 bg-white/5 rounded-xl border border-white/5 hover:border-white/20 block"
                >
                  <FaGithub size={18} />
                </a>
              </MagneticButton>
            </div>
          </SectionReveal>

          {/* Content column */}
          <div className="lg:col-span-2 space-y-6">
            <SectionReveal delay={0.2}>
              <div className="bg-white/[0.03] backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/5 relative overflow-hidden">
                {/* Left accent line */}
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-400 via-emerald-400 to-transparent" />
                <h2 className="text-xl font-display font-semibold mb-6 flex items-center text-white pl-4">
                  <FaGraduationCap className="mr-3 text-blue-400" /> Education &
                  Background
                </h2>
                <div className="space-y-4 text-slate-400 leading-relaxed pl-4">
                  <p>
                    Hi! I&apos;m Alex, a computer science major at{" "}
                    <span className="text-blue-400 font-medium">UCLA</span>.
                  </p>
                  <p>
                    Through engaging in coursework and projects while studying
                    computer science, I&apos;ve gained valuable experience in{" "}
                    <span className="text-blue-400 font-medium">
                      full-stack development
                    </span>
                    ,{" "}
                    <span className="text-emerald-400 font-medium">
                      machine learning
                    </span>
                    ,{" "}
                    <span className="text-purple-400 font-medium">
                      cybersecurity
                    </span>
                    ,{" "}
                    <span className="text-cyan-400 font-medium">
                      operating systems
                    </span>
                    , and more. Some projects I&apos;ve worked on are an AI
                    SQL-querying chatbot, an app that notifies students about
                    free foods and events, a roommate finding app for UCLA
                    students, and this portfolio website.{" "}
                    <Link
                      href="/#projects"
                      className="text-blue-400 hover:text-blue-300 underline font-medium transition-colors duration-300"
                    >
                      Discover more
                    </Link>{" "}
                    about these and other projects I&apos;ve done!
                  </p>
                  <p>
                    When I&apos;m not developing apps or exploring new areas in
                    computer science, I love playing tennis, rock climbing,
                    practicing new songs on piano, reading, playing Monster
                    Hunter World, and backpacking.
                  </p>
                </div>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.3}>
              <div className="bg-white/[0.03] backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/5">
                <h2 className="text-xl font-display font-semibold mb-6 flex items-center text-white">
                  <FaCode className="mr-3 text-blue-400" /> Technical Skills
                </h2>
                <AnimatedSkills categories={skillCategories} />
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
