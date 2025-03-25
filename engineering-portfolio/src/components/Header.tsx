"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "tailwindcss/tailwind.css";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 w-full p-4 flex justify-between items-center text-base bg-gradient-to-r from-blue-900 to-gray-800 text-white shadow-md rounded-b-lg z-50">
      <div className="flex space-x-6 text-lg font-medium tracking-wide">
        {isHomePage ? (
          <button 
            onClick={() => scrollToSection("about")} 
            className="hover:text-cyan-400 transition duration-300"
          >
            Home
          </button>
        ) : (
          <Link href="/" className="hover:text-cyan-400 transition duration-300">
            Home
          </Link>
        )}
        
        {isHomePage ? (
          <button 
            onClick={() => scrollToSection("projects")} 
            className="hover:text-cyan-400 transition duration-300"
          >
            Projects
          </button>
        ) : (
          <Link href="/#projects" className="hover:text-cyan-400 transition duration-300">
            Projects
          </Link>
        )}
        
        <Link href="/about" className="hover:text-cyan-400 transition duration-300">
          About Me
        </Link>
      </div>
      <div className="flex space-x-4">
        <a href="https://www.linkedin.com/in/alex-hu374/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition duration-300">
          <FaLinkedin size={20} />
        </a>
        <a href="https://github.com/cuhs" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition duration-300">
          <FaGithub size={20} />
        </a>
        <a href="https://instagram.com/alexhu374" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition duration-300">
          <FaInstagram size={20} />
        </a>
      </div>
    </nav>
  );
}