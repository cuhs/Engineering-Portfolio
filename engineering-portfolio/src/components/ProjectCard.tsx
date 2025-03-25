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
  links
}: { 
  image: string; 
  title: string; 
  description: string;
  links?: LinkButton[];
}) {
  return (
    <div className="block w-full md:w-[450px] m-4">
      <motion.div 
        className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl shadow-lg overflow-hidden h-full border border-gray-700 hover:border-cyan-600/40 transition-colors duration-300"
        whileHover={{ 
          y: -12,
          scale: 1.03,
          boxShadow: "0 22px 40px -12px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.1)"
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 15,
          mass: 1.2
        }}
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        whileInView={{ 
          opacity: 1, 
          y: 0, 
          scale: 1,
          transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        delay: 0.1
          }
        }}
        viewport={{ once: true, margin: "-50px" }}
      >
        <div className="relative overflow-hidden h-56">
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-40 z-10" />
          <motion.div
            whileHover={{ scale: 1.15 }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
            className="w-full h-full"
          >
            <Image 
              src={`/${image}`} 
              alt={title} 
              width={500} 
              height={300} 
              className="w-full h-full object-cover" 
            />
          </motion.div>
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">{title}</h3>
          <div className="w-12 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 mb-3 rounded-full" />
          <p className="text-gray-300 mt-3 text-sm leading-relaxed min-h-[90px]">{description}</p>
          
          {links && links.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {links.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-1.5 bg-gray-800 hover:bg-cyan-700 border border-cyan-35 rounded-md text-sm font-medium text-cyan-400 hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 8px rgba(6, 182, 212, 0.3)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}