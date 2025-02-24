"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import "tailwindcss/tailwind.css";

export function MenuHeader() {
    return (
      <nav className="p-4 flex justify-center space-x-6 text-lg bg-gradient-to-r from-teal-500 to-blue-600 text-white shadow-md rounded-b-lg">
        <Link href="/" className="hover:text-yellow-300 transition duration-300">Welcome</Link>
        <Link href="/individual" className="hover:text-yellow-300 transition duration-300">Individual Projects</Link>
        <Link href="/team" className="hover:text-yellow-300 transition duration-300">Team Projects</Link>
      </nav>
    );
  }

