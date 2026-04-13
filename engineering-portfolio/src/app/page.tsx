"use client";

import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { Header } from "../components/Header";
import { BentoProjectCard } from "../components/BentoProjectCard";
import { TextReveal } from "../components/TextReveal";
import { MagneticButton } from "../components/MagneticButton";
import { SectionReveal } from "../components/SectionReveal";
import { projectList } from "../data/projects";
import { FaChevronDown } from "react-icons/fa";

const HeroScene = lazy(() =>
  import("../components/HeroScene").then((mod) => ({ default: mod.HeroScene }))
);

export default function MyWork() {
  return (
    <motion.div
      className="bg-slate-950 text-white min-h-screen relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Background layers */}
      <div className="fixed inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      <div className="fixed inset-0 aurora-bg" />
      <div className="fixed inset-0 bg-grid-subtle" />

      <Header />

      {/* Hero Section */}
      <section
        id="about"
        className="relative min-h-screen flex items-center overflow-hidden"
      >
        {/* 3D Scene background */}
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>

        <div className="relative z-10 px-6 py-20 max-w-7xl mx-auto w-full">
          <div className="max-w-3xl">
            <motion.p
              className="text-emerald-400 font-mono text-sm mb-6 tracking-wider"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              console.log(&quot;Hello, world!&quot;);
            </motion.p>

            <div className="mb-4">
              <TextReveal
                text="Hi, I'm Alex"
                as="h1"
                mode="char"
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold text-white tracking-tight"
              />
            </div>

            <motion.div
              className="mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-emerald-400 to-purple-400">
                Engineer.
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <TextReveal
                text="Software Engineer & System Builder"
                as="h2"
                mode="word"
                className="text-xl md:text-2xl text-slate-400 font-light mt-6"
                delay={1.1}
              />
            </motion.div>

            <motion.div
              className="mt-8 space-y-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.8 }}
            >
              <p className="text-slate-400 leading-relaxed max-w-xl text-lg">
                CS student at{" "}
                <span className="text-blue-400 font-medium">UCLA</span>{" "}
                passionate about building scalable software systems and
                architecting robust solutions.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-3 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.6 }}
            >
              {[
                "Software Engineer",
                "System Design",
                "Backend Architecture",
                "Open Source",
              ].map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm text-slate-400 backdrop-blur-sm hover:border-blue-500/30 hover:text-slate-300 transition-all duration-300"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.div
              className="mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.6 }}
            >
              <MagneticButton>
                <button
                  onClick={() =>
                    document
                      .getElementById("projects")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="group relative px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/15 hover:border-blue-500/40 rounded-xl text-white font-medium transition-all duration-500 backdrop-blur-sm overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-3 font-display">
                    See what I&apos;ve built
                    <motion.span
                      animate={{ y: [0, 3, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <FaChevronDown className="w-3 h-3" />
                    </motion.span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </button>
              </MagneticButton>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-5 h-8 rounded-full border-2 border-slate-600 flex justify-center pt-1.5">
              <motion.div
                className="w-1 h-1.5 bg-slate-500 rounded-full"
                animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 md:py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <SectionReveal className="text-center mb-16 md:mb-20">
            <p className="text-blue-400 font-mono text-sm mb-4 tracking-wider">
              // featured work
            </p>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">
              Things I&apos;ve{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Built
              </span>
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed text-lg">
              From scalable web applications to distributed systems, here&apos;s
              a showcase of projects where
              <span className="text-blue-400 font-medium">
                {" "}
                engineering meets innovation
              </span>
            </p>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {projectList.map((project, index) => (
              <BentoProjectCard
                key={index}
                image={project.image}
                title={project.title}
                description={project.description}
                links={project.links}
                featured={project.featured}
                delay={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-6 border-t border-slate-800/50">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-slate-600">
            Built with{" "}
            <span className="text-blue-400/60">Next.js</span>,{" "}
            <span className="text-emerald-400/60">Three.js</span>, and{" "}
            <span className="text-cyan-400/60">Tailwind CSS</span>
          </p>
        </div>
      </footer>
    </motion.div>
  );
}
