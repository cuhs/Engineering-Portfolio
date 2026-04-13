"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { ScrollProgress } from "./ScrollProgress";
import { MagneticButton } from "./MagneticButton";

export function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [activeLink, setActiveLink] = useState(isHomePage ? "home" : "about");

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const navLinks = [
    {
      id: "home",
      label: "Home",
      action: isHomePage
        ? () => {
            scrollToSection("about");
            setActiveLink("home");
          }
        : undefined,
      href: isHomePage ? undefined : "/",
    },
    {
      id: "projects",
      label: "Projects",
      action: isHomePage
        ? () => {
            scrollToSection("projects");
            setActiveLink("projects");
          }
        : undefined,
      href: isHomePage ? undefined : "/#projects",
    },
    {
      id: "about",
      label: "About",
      href: "/about",
    },
  ];

  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/alex-hu374/",
      icon: FaLinkedin,
      hoverColor: "hover:text-blue-400",
    },
    {
      href: "https://github.com/cuhs",
      icon: FaGithub,
      hoverColor: "hover:text-white",
    },
    {
      href: "https://instagram.com/alexhu374",
      icon: FaInstagram,
      hoverColor: "hover:text-pink-400",
    },
  ];

  return (
    <>
      <ScrollProgress />
      <nav className="fixed top-0 w-full px-6 py-4 flex justify-between items-center text-white bg-slate-950/60 backdrop-blur-xl border-b border-white/5 z-50">
        <div className="flex items-center space-x-8 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive =
              link.id === "about"
                ? pathname === "/about"
                : activeLink === link.id;

            if (link.action) {
              return (
                <button
                  key={link.id}
                  onClick={link.action}
                  className="relative py-2 text-slate-400 hover:text-white transition-colors duration-300"
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                </button>
              );
            }

            return (
              <Link
                key={link.id}
                href={link.href!}
                onClick={() => setActiveLink(link.id)}
                className="relative py-2 text-slate-400 hover:text-white transition-colors duration-300"
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        <div className="hidden sm:flex items-center space-x-3">
          {socialLinks.map((social, index) => (
            <MagneticButton key={index} strength={0.4}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-slate-500 ${social.hoverColor} transition-colors duration-300 p-2 block`}
              >
                <social.icon size={16} />
              </a>
            </MagneticButton>
          ))}
        </div>
      </nav>
    </>
  );
}
