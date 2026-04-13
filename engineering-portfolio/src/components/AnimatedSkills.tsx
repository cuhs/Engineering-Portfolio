"use client";

import { motion } from "framer-motion";

interface SkillCategory {
  label: string;
  skills: string[];
  color: string;
  glowColor: string;
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const tagVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export function AnimatedSkills({ categories }: { categories: SkillCategory[] }) {
  return (
    <div className="space-y-8">
      {categories.map((category, catIndex) => (
        <div key={catIndex}>
          <h3
            className="text-lg font-display font-medium mb-4"
            style={{ color: category.color }}
          >
            {category.label}
          </h3>
          <motion.div
            className="flex flex-wrap gap-2.5"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {category.skills.map((skill, index) => (
              <motion.span
                key={index}
                className="px-3.5 py-2 text-sm font-medium text-slate-300 bg-white/5 border border-slate-700/40 rounded-xl cursor-default transition-all duration-300"
                variants={tagVariants}
                whileHover={{
                  scale: 1.05,
                  borderColor: category.color,
                  boxShadow: `0 0 20px ${category.glowColor}`,
                  transition: { duration: 0.2 },
                }}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </div>
      ))}
    </div>
  );
}
