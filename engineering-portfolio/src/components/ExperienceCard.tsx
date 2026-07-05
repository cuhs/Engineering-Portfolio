"use client";

import { motion } from "framer-motion";
import type { ExperienceData } from "../data/experience";

export function ExperienceCard({
  experience,
  delay = 0,
}: {
  experience: ExperienceData;
  delay?: number;
}) {
  return (
    <motion.div
      className="relative bg-white/[0.03] backdrop-blur-sm rounded-2xl border border-white/5 p-6 md:p-8 hover:border-blue-500/20 transition-colors duration-500"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: delay * 0.1 }}
    >
      <div className="absolute left-0 top-6 bottom-6 w-[2px] bg-gradient-to-b from-blue-400 via-emerald-400 to-transparent rounded-full" />

      <div className="pl-4">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
          <div>
            <h3 className="text-lg font-display font-semibold text-white">
              {experience.role}
            </h3>
            <p className="text-blue-400 font-medium">{experience.organization}</p>
          </div>
          <span className="text-sm text-slate-500 font-mono shrink-0">
            {experience.period}
          </span>
        </div>

        <p className="text-slate-400 leading-relaxed mb-4">
          {experience.description}
        </p>

        <ul className="space-y-2">
          {experience.highlights.map((highlight, index) => (
            <li
              key={index}
              className="flex items-start gap-2 text-sm text-slate-500"
            >
              <span className="text-emerald-400 mt-1.5 shrink-0">▸</span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
