"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 w-full px-6 py-4 flex justify-between items-center text-white bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50 z-50">
      <div className="flex space-x-8 text-sm font-medium">
        {isHomePage ? (
          <button 
            onClick={() => scrollToSection("about")} 
            className="hover:text-blue-400 transition-colors duration-300 py-2"
          >
            Home
          </button>
        ) : (
          <Link href="/" className="hover:text-blue-400 transition-colors duration-300 py-2">
            Home
          </Link>
        )}
        
        {isHomePage ? (
          <button 
            onClick={() => scrollToSection("projects")} 
            className="hover:text-blue-400 transition-colors duration-300 py-2"
          >
            Projects
          </button>
        ) : (
          <Link href="/#projects" className="hover:text-blue-400 transition-colors duration-300 py-2">
            Projects
          </Link>
        )}
        
        <Link href="/about" className="hover:text-blue-400 transition-colors duration-300 py-2">
          About
        </Link>
      </div>
      <div className="flex space-x-5">
        <a 
          href="https://www.linkedin.com/in/alex-hu374/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-slate-400 hover:text-blue-400 transition-colors duration-300 p-1"
        >
          <FaLinkedin size={18} />
        </a>
        <a 
          href="https://github.com/cuhs" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-slate-400 hover:text-slate-200 transition-colors duration-300 p-1"
        >
          <FaGithub size={18} />
        </a>
        <a 
          href="https://instagram.com/alexhu374" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-slate-400 hover:text-pink-400 transition-colors duration-300 p-1"
        >
          <FaInstagram size={18} />
        </a>
      </div>
    </nav>
  );
}