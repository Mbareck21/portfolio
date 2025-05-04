"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import logo from "../public/images/logo.png"; // Adjust the path to your logo image
export function Logo() {
  return (
    <motion.div
      className="inline-block rounded-xl shadow-lg transform hover:scale-105 transition-transform select-none"
      whileHover={{ rotate: [0, -5, 5, -5, 0] }}
      transition={{ duration: 0.5 }}
    >
      <div className="p-1">
        <Image
          src={logo}
          alt="Logo"
          width={50} 
          height={50}
          className="rounded-xl"
        />
      </div>
    </motion.div>
  );
}
