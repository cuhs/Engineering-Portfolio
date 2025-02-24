"use client";

import { motion } from "framer-motion";
import {MenuHeader} from "@/components/Header"

export default function TeamProjects() {
    return (
        <motion.div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white min-h-screen">
          <MenuHeader />
          <motion.div className="p-6 text-aquamarine"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-3xl mb-4 font-semibold">Team Projects</h1>
            <p className="text-lg">These are the awesome projects I have collaborated on.</p>
          </motion.div>
        </motion.div>
      );
}