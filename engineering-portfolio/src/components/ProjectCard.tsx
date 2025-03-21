"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export function ProjectCard({ image, title, description, link }: { image: string; title: string; description: string; link: string }) {
  return (
    <Link href={link} className="block w-80 m-4">
      <motion.div 
        className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl shadow-lg overflow-hidden h-full border border-gray-700 hover:border-cyan-600/40 transition-colors duration-300 cursor-pointer"
        whileHover={{ 
          y: -8,
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)"
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30
        }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="relative overflow-hidden h-48">
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-40 z-10" />
          <Image 
            src={`/${image}`} 
            alt={title} 
            width={500} 
            height={300} 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" 
          />
        </div>
        <div className="p-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">{title}</h3>
            <div className="w-12 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 mb-3 rounded-full" />
            <p className="text-gray-300 mt-3 text-sm leading-relaxed h-16 line-clamp-3">{description}</p>
          </motion.div>
        </div>
      </motion.div>
    </Link>
  );
}