"use client";

import { motion } from "framer-motion";
import { CodeBracketIcon, StarIcon } from "@heroicons/react/24/outline";

interface Project {
  title: string;
  description: string;
  link: string;
  technologies?: string[];
  language?: string;
  stars?: number;
}

export const HoverEffect = ({
  items,
  className,
}: {
  items: Project[];
  className?: string;
}) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ${className}`}>
      {items.map((item, idx) => (
        <motion.a
          href={item.link}
          key={item.title + idx}
          className="relative group block p-2 h-full w-full"
          whileHover="hover"
          initial="initial"
          variants={{
            initial: { scale: 1 },
            hover: { scale: 1.02 },
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="relative h-full w-full p-6 flex flex-col items-start justify-between overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-800 border border-neutral-800 group-hover:border-neutral-700 transition-colors duration-500">
            <div className="relative z-10">
              <div className="flex items-center justify-between w-full mb-4">
                <CodeBracketIcon className="h-6 w-6 text-primary-500" />
                {item.stars !== undefined && (
                  <div className="flex items-center text-yellow-500">
                    <StarIcon className="h-4 w-4 mr-1" />
                    <span className="text-sm">{item.stars}</span>
                  </div>
                )}
              </div>
              
              <h4 className="font-bold text-xl text-neutral-100 mb-2 group-hover:text-primary-400 transition-colors duration-200">
                {item.title}
              </h4>
              
              <p className="text-neutral-400 text-sm mb-4 line-clamp-3">
                {item.description}
              </p>

              {item.technologies && item.technologies.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs rounded-full bg-primary-500/10 text-primary-400 border border-primary-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              {item.language && (
                <div className="flex items-center">
                  <span className="w-3 h-3 rounded-full bg-primary-500 mr-2"></span>
                  <span className="text-sm text-neutral-400">{item.language}</span>
                </div>
              )}
            </div>
            
            <motion.div
              className="absolute inset-0 z-0 bg-gradient-to-br from-primary-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              variants={{
                initial: { opacity: 0 },
                hover: { opacity: 1 },
              }}
            />
          </div>
        </motion.a>
      ))}
    </div>
  );
};