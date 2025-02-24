"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import "tailwindcss/tailwind.css";
import {MenuHeader} from "@/components/Header"

export default function Home() {
  return (
    <motion.div 
      className="bg-gradient-to-br from-gray-900 to-gray-800 text-white min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <MenuHeader />
      <motion.div className="flex justify-center items-center h-screen text-4xl font-bold text-aquamarine"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Welcome to My Portfolio
      </motion.div>
    </motion.div>
  );
}