"use client";

import { BentoProjectCard } from "./BentoProjectCard";
import { SectionReveal } from "./SectionReveal";
import type { ProjectCategory } from "../data/projects";

export function ProjectCategorySection({
  category,
  isFirst = false,
  delayOffset = 0,
}: {
  category: ProjectCategory;
  isFirst?: boolean;
  delayOffset?: number;
}) {
  return (
    <div className={isFirst ? "" : "mt-16 md:mt-20"}>
      <SectionReveal className="mb-10">
        <div className="flex items-center gap-4 mb-4">
          <p
            className="font-mono text-sm tracking-wider shrink-0"
            style={{ color: category.accentColor }}
          >
            // {category.id}
          </p>
          <div
            className="flex-1 h-px"
            style={{
              background: `linear-gradient(to right, ${category.accentColor}4D, transparent)`,
            }}
          />
        </div>
        <h3 className="text-2xl font-display font-semibold text-white mb-2">
          {category.label}
        </h3>
        <p className="text-slate-500 text-sm">{category.tagline}</p>
      </SectionReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {category.projects.map((project, index) => (
          <BentoProjectCard
            key={project.title}
            image={project.image}
            video={project.video}
            title={project.title}
            description={project.description}
            links={project.links}
            featured={project.featured}
            delay={delayOffset + index}
          />
        ))}
      </div>
    </div>
  );
}
