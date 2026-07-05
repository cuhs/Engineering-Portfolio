"use client";

import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { Header } from "../components/Header";
import { BentoProjectCard } from "../components/BentoProjectCard";
import { ExperienceCard } from "../components/ExperienceCard";
import { TextReveal } from "../components/TextReveal";
import { MagneticButton } from "../components/MagneticButton";
import { SectionReveal } from "../components/SectionReveal";
import { projectList } from "../data/projects";
import { experienceList } from "../data/experience";
import { FaChevronDown, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const HeroScene = lazy(() =>
  import("../components/HeroScene").then((mod) => ({ default: mod.HeroScene }))
);

export default function HomePage() {
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

      {/* Hero */}
      <section
        id="home"
        className="relative min-h-screen flex items-center overflow-hidden"
      >
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
              UCLA Computer Science · Software Engineer
            </motion.p>

            <div className="mb-4">
              <TextReveal
                text="Alexander Hu"
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
                I build software that ships.
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <TextReveal
                text="Full-stack engineer with experience in AI systems, mobile apps, and production backends."
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
                From winning{" "}
                <span className="text-blue-400 font-medium">Palantir Hacks</span>{" "}
                to shipping apps on the{" "}
                <span className="text-emerald-400 font-medium">App Store</span>, I
                turn ideas into reliable, user-facing products. Currently seeking
                software engineering internships and new grad roles.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-3 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.6 }}
            >
              {[
                "Full-Stack Development",
                "AI / LLM Systems",
                "Mobile (React Native)",
                "Hackathon Winner",
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
              className="flex flex-wrap gap-4 mt-12"
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
                    View Projects
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

              <MagneticButton>
                <a
                  href="mailto:alexhu00374@gmail.com"
                  className="group relative px-8 py-4 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 hover:border-blue-400/50 rounded-xl text-white font-medium transition-all duration-500 backdrop-blur-sm overflow-hidden inline-flex items-center gap-3 font-display"
                >
                  <FaEnvelope className="w-4 h-4" />
                  Get in Touch
                </a>
              </MagneticButton>
            </motion.div>
          </div>
        </div>

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

      {/* Experience */}
      <section id="experience" className="py-24 md:py-32 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <SectionReveal className="text-center mb-16 md:mb-20">
            <p className="text-emerald-400 font-mono text-sm mb-4 tracking-wider">
              experience
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Where I&apos;ve{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">
                Worked
              </span>
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed text-lg">
              Internships, consulting, and team leadership — building real
              products for real users.
            </p>
          </SectionReveal>

          <div className="space-y-6">
            {experienceList.map((experience, index) => (
              <ExperienceCard
                key={index}
                experience={experience}
                delay={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 md:py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <SectionReveal className="text-center mb-16 md:mb-20">
            <p className="text-blue-400 font-mono text-sm mb-4 tracking-wider">
              selected work
            </p>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">
              Projects &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Highlights
              </span>
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed text-lg">
              Hackathon wins, shipped apps, research, and open source — each
              project reflects a problem I cared enough to solve end to end.
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

      {/* Contact */}
      <section id="contact" className="py-24 md:py-32 px-6 relative">
        <div className="max-w-3xl mx-auto text-center">
          <SectionReveal>
            <p className="text-purple-400 font-mono text-sm mb-4 tracking-wider">
              contact
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Let&apos;s{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                Connect
              </span>
            </h2>
            <p className="text-slate-500 leading-relaxed text-lg mb-10">
              Open to software engineering internships and full-time opportunities.
              Reach out — I&apos;d love to hear about your team.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <MagneticButton>
                <a
                  href="mailto:alexhu00374@gmail.com"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 hover:border-blue-400/50 rounded-xl text-white font-medium transition-all duration-300 font-display"
                >
                  <FaEnvelope className="w-4 h-4" />
                  alexhu00374@gmail.com
                </a>
              </MagneticButton>

              <MagneticButton strength={0.4}>
                <a
                  href="https://www.linkedin.com/in/alex-hu374/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-500/30 rounded-xl text-slate-300 hover:text-white font-medium transition-all duration-300"
                >
                  <FaLinkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </MagneticButton>

              <MagneticButton strength={0.4}>
                <a
                  href="https://github.com/cuhs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 rounded-xl text-slate-300 hover:text-white font-medium transition-all duration-300"
                >
                  <FaGithub className="w-4 h-4" />
                  GitHub
                </a>
              </MagneticButton>
            </div>
          </SectionReveal>
        </div>
      </section>

      <footer className="relative py-12 px-6 border-t border-slate-800/50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600">
            © {new Date().getFullYear()} Alexander Hu
          </p>
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
