"use client";

import { motion } from "framer-motion";
import {Header} from "@/components/Header"
export default function IndividualProjects() {
    return (
        <motion.div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white min-h-screen">
          <Header />
          <motion.div className="p-6 text-aquamarine"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-3xl mb-4 font-semibold">Individual Projects</h1>
            <p className="text-lg">Here are some cool projects I have worked on.</p>
          </motion.div>
        </motion.div>
      );
}