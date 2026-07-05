"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { Header } from "../../components/Header";
import { ExperienceCard } from "../../components/ExperienceCard";
import { FaGraduationCap, FaCode, FaBriefcase, FaEnvelope } from "react-icons/fa";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SectionReveal } from "../../components/SectionReveal";
import { AnimatedSkills } from "../../components/AnimatedSkills";
import { MagneticButton } from "../../components/MagneticButton";
import { experienceList } from "../../data/experience";

const skillCategories = [
  {
    label: "Languages",
    color: "#60a5fa",
    glowColor: "rgba(96, 165, 250, 0.2)",
    skills: [
      "TypeScript / JavaScript",
      "Python",
      "Java",
      "C / C++",
      "SQL",
      "HTML / CSS",
    ],
  },
  {
    label: "Technologies",
    color: "#34d399",
    glowColor: "rgba(52, 211, 153, 0.2)",
    skills: [
      "React / Next.js",
      "React Native",
      "Node.js / Express",
      "MongoDB / MySQL",
      "AWS",
      "LangChain / LLMs",
      "Supabase",
      "Git / Linux",
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
            about
          </p>
          <h1 className="text-4xl md:text-5xl mb-4 font-display font-bold text-center text-white tracking-tight">
            Background & Skills
          </h1>
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto mb-16" />
        </SectionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 w-full">
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
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 via-transparent to-purple-500/10 rounded-3xl blur-2xl -z-10" />
            </motion.div>
            <h2 className="text-2xl font-display font-semibold text-white mb-2">
              Alexander Hu
            </h2>
            <p className="text-slate-500 text-center mb-2 font-light">
              Computer Science · UCLA
            </p>
            <p className="text-slate-600 text-center text-sm mb-6">
              Seeking SWE internships & new grad roles
            </p>

            <MagneticButton>
              <a
                href="mailto:alexhu00374@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 mb-6 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 rounded-xl text-sm text-white font-medium transition-all duration-300"
              >
                <FaEnvelope className="w-3.5 h-3.5" />
                Email Me
              </a>
            </MagneticButton>

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

          <div className="lg:col-span-2 space-y-6">
            <SectionReveal delay={0.2}>
              <div className="bg-white/[0.03] backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/5 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-400 via-emerald-400 to-transparent" />
                <h2 className="text-xl font-display font-semibold mb-6 flex items-center text-white pl-4">
                  <FaGraduationCap className="mr-3 text-blue-400" />
                  Education
                </h2>
                <div className="space-y-4 text-slate-400 leading-relaxed pl-4">
                  <div>
                    <p className="text-white font-medium">
                      B.S. Computer Science
                    </p>
                    <p className="text-blue-400">University of California, Los Angeles</p>
                  </div>
                  <p>
                    Coursework spans full-stack development, machine learning,
                    operating systems, and cybersecurity. I apply what I learn
                    through internships, hackathons, and team projects — from
                    LLM-powered backends to mobile apps deployed on the App Store.
                  </p>
                  <p>
                    Outside of code, I stay active with tennis, rock climbing,
                    piano, and backpacking. I bring the same focus and persistence
                    to engineering that I do to everything else.
                  </p>
                  <Link
                    href="/#projects"
                    className="inline-flex text-blue-400 hover:text-blue-300 underline font-medium transition-colors duration-300"
                  >
                    See my projects →
                  </Link>
                </div>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.25}>
              <div className="bg-white/[0.03] backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/5">
                <h2 className="text-xl font-display font-semibold mb-6 flex items-center text-white">
                  <FaBriefcase className="mr-3 text-emerald-400" />
                  Experience
                </h2>
                <div className="space-y-4">
                  {experienceList.map((experience, index) => (
                    <div
                      key={index}
                      className="border-b border-white/5 last:border-0 pb-4 last:pb-0"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
                        <div>
                          <p className="text-white font-medium">{experience.role}</p>
                          <p className="text-blue-400 text-sm">{experience.organization}</p>
                        </div>
                        <span className="text-xs text-slate-500 font-mono">
                          {experience.period}
                        </span>
                      </div>
                      <p className="text-sm text-slate-500">{experience.description}</p>
                    </div>
                  ))}
                </div>
                <Link
                  href="/#experience"
                  className="inline-flex mt-4 text-emerald-400 hover:text-emerald-300 text-sm font-medium transition-colors duration-300"
                >
                  View full experience →
                </Link>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.3}>
              <div className="bg-white/[0.03] backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/5">
                <h2 className="text-xl font-display font-semibold mb-6 flex items-center text-white">
                  <FaCode className="mr-3 text-blue-400" />
                  Technical Skills
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
