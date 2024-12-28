"use client";

import { motion } from "framer-motion";
import { BackgroundBeams } from "./ui/background-beams";
import Image from "next/image";
import { MapPinIcon } from "@heroicons/react/24/outline";

export function Hero() {
  return (
    <div className="min-h-screen w-full bg-neutral-950 relative flex flex-col items-center justify-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-7xl mx-auto px-6 py-20 relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-12"
            >              
              <h1 className="text-4xl lg:text-6xl font-bold text-neutral-100">
                Mohamed Lemine
                <span className="text-violet-500 block mt-2">Mbareck</span>
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center text-neutral-400 mb-6"
            >
              <MapPinIcon className="h-5 w-5 mr-2 text-violet-500" />
              <span>Fayetteville, AR</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="space-y-6"
            >
              <p className="text-neutral-300 text-lg leading-relaxed">
                A full-stack developer with a unique background in data analysis and media studies. As a Fulbright scholar, 
                I combine analytical thinking with creative problem-solving to build elegant, user-focused web solutions.
              </p>
              
              <p className="text-neutral-300 text-lg leading-relaxed">
                Drawing from my experience in media research and sentiment analysis, I bring a distinctive perspective to software development. 
                My journey from analyzing data patterns to crafting intuitive web applications has equipped me with a holistic understanding 
                of both user needs and technical implementation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-8 flex gap-4"
            >
              <a
                href="#projects"
                className="bg-violet-500 hover:bg-violet-600 text-white px-8 py-4 rounded-lg transition-colors duration-200 font-medium"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="border border-violet-500/30 hover:border-violet-500 text-neutral-300 hover:text-white px-8 py-4 rounded-lg transition-colors duration-200 font-medium"
              >
                Contact Me
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-72 h-72 lg:w-96 lg:h-96">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.2 }}
                transition={{ delay: 0.5 }}
                className="absolute inset-0 bg-gradient-to-br from-violet-500 to-purple-500 rounded-3xl rotate-6"
              />
              <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src="/images/profile.jpg"
                  alt="Lemine Mbareck"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 288px, 384px"
                  priority
                  quality={95}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
      
      <BackgroundBeams />
    </div>
  );
}