"use client";

import { motion } from "framer-motion";

export function Logo() {
  return (
    <motion.div 
      className="inline-block bg-violet-500 rounded-xl shadow-lg transform hover:scale-105 transition-transform select-none"
      whileHover={{ rotate: [0, -5, 5, -5, 0] }}
      transition={{ duration: 0.5 }}
    >
      <div className="px-4 py-3 text-2xl font-bold text-white">
        LM
      </div>
    </motion.div>
  );
}