"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import { FaArrowRight } from "react-icons/fa";

interface LinkButton {
  name: string;
  url: string;
}

export function BentoProjectCard({
  image,
  title,
  description,
  links,
  featured = false,
  delay = 0,
}: {
  image: string;
  title: string;
  description: string;
  links?: LinkButton[];
  featured?: boolean;
  delay?: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({
      rotateX: -y * 10,
      rotateY: x * 10,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
    setIsHovered(false);
  };

  return (
    <motion.div
      className="col-span-1"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.7,
        delay: delay * 0.08,
        ease: [0.25, 0.4, 0.25, 1],
      }}
    >
      <div className="perspective-card h-full">
        <div
          ref={cardRef}
          className="tilt-inner group relative h-full rounded-2xl overflow-hidden bg-slate-800/40 backdrop-blur-sm border border-slate-700/30 hover:border-blue-500/30 transition-colors duration-500"
          style={{
            transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
          }}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={handleMouseLeave}
        >
          {/* Glow effect on hover */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
            style={{
              background: isHovered
                ? `radial-gradient(600px circle at ${tilt.rotateY * 30 + 50}% ${-tilt.rotateX * 30 + 50}%, rgba(59, 130, 246, 0.06), transparent 40%)`
                : undefined,
            }}
          />

          {/* Image */}
          <div className="relative overflow-hidden h-48">
            <motion.div
              className="w-full h-full"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Image
                src={`/${image}`}
                alt={title}
                width={800}
                height={400}
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />
          </div>

          {/* Content */}
          <div className="p-5 md:p-6 space-y-3 relative">
            <div>
              <h3
                className="text-lg font-display font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300"
              >
                {title}
              </h3>
              <div className="w-10 h-[2px] bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full group-hover:w-16 transition-all duration-500" />
            </div>

            <p className={`text-slate-400 ${featured ? "text-sm" : "text-sm"} leading-relaxed line-clamp-4`}>
              {description}
            </p>

            {links && links.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {links.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 bg-white/5 hover:bg-blue-500/10 border border-slate-600/30 hover:border-blue-500/30 rounded-lg transition-all duration-300"
                  >
                    {link.name}
                    <FaArrowRight className="w-2.5 h-2.5 opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300" />
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
