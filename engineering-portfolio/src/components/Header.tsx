"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import "tailwindcss/tailwind.css";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";



export function Header() {
  return (
    <nav className="p-4 flex justify-between items-center text-base bg-gradient-to-r from-blue-900 to-gray-800 text-white shadow-md rounded-b-lg">
      <div className="flex space-x-6 text-lg font-medium tracking-wide">
        <Link href="/" className="hover:text-cyan-400 transition duration-300">Welcome</Link>
        <Link href="/individual" className="hover:text-cyan-400 transition duration-300">Individual Projects</Link>
        <Link href="/team" className="hover:text-cyan-400 transition duration-300">Team Projects</Link>
      </div>
      <div className="flex space-x-4">
        <a href="https://www.linkedin.com/in/alex-hu374/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition duration-300"><FaLinkedin size={20} /></a>
        <a href="https://github.com/cuhs" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition duration-300"><FaGithub size={20} /></a>
        <a href="https://instagram.com/alexhu374" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition duration-300"><FaInstagram size={20} /></a>
      </div>
    </nav>
  );
}

