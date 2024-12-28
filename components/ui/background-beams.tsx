"use client";

import React from "react";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export const BackgroundBeams = () => {
  const beamsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!beamsRef.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!beamsRef.current) return;
      
      const rect = beamsRef.current.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      
      beamsRef.current.style.setProperty("--mouse-x", `${mouseX}px`);
      beamsRef.current.style.setProperty("--mouse-y", `${mouseY}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      ref={beamsRef}
      className="absolute inset-0 opacity-30"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/40 via-transparent to-secondary-500/40 [mask-image:radial-gradient(circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),transparent_20%,black_80%)]" />
    </motion.div>
  );
};