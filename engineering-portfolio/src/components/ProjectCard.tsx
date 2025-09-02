"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface LinkButton {
  name: string;
  url: string;
}

export function ProjectCard({ 
  image, 
  title, 
  description, 
  links,
  delay = 0
}: { 
  image: string; 
  title: string; 
  description: string;
  links?: LinkButton[];
  delay?: number;
}) {
  return (
    <motion.div 
      className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500 h-full"
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ 
        opacity: 1, 
        y: 0,
        transition: {
          duration: 0.6,
          delay: delay * 0.1,
          ease: "easeOut"
        }
      }}
    >
      <div className="relative overflow-hidden h-48">
        <motion.div
          className="w-full h-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Image 
            src={`/${image}`} 
            alt={title} 
            width={400} 
            height={240} 
            className="w-full h-full object-cover" 
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
      </div>
      
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-medium text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
            {title}
          </h3>
          <div className="w-8 h-px bg-gradient-to-r from-blue-400 to-transparent" />
        </div>
        
        <p className="text-slate-300 text-sm leading-relaxed">
          {description}
        </p>
        
        {links && links.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {links.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-1.5 text-xs font-medium text-slate-300 bg-slate-700/50 hover:bg-slate-600/50 border border-slate-600/50 hover:border-slate-500/50 rounded-lg transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {link.name}
              </motion.a>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}