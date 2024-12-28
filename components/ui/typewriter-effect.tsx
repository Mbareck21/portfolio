"use client";

import { motion, stagger, useAnimate } from "framer-motion";
import { useEffect } from "react";

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: {
  words: string[];
  className?: string;
  cursorClassName?: string;
}) => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 0.1,
        delay: stagger(0.1),
      }
    );
  }, [animate]);

  const renderWords = () => {
    return (
      <motion.div ref={scope} className="inline">
        {words.map((word, idx) => {
          return (
            <div key={`word-${idx}`} className="inline-block">
              {word.split("").map((char, index) => (
                <motion.span
                  initial={{
                    opacity: 0,
                  }}
                  key={`char-${index}`}
                  className={className}
                >
                  {char}
                </motion.span>
              ))}
              &nbsp;
            </div>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className="relative">
      {renderWords()}
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cursorClassName}
      >
        |
      </motion.span>
    </div>
  );
};