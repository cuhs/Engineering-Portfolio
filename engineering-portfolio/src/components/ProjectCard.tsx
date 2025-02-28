"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export function ProjectCard({ image, title, description, link }: { image: string; title: string; description: string; link: string }) {
    return (
      <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <Link href={link}>
          <Image src={`/${image}`} alt={title} width={500} height={500} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold text-cyan-400">{title}</h3>
            <p className="text-gray-300 mt-2">{description}</p>
          </div>
        </Link>
      </motion.div>
    );
  }