"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/utils/cn";
import Link from "next/link";
import {
  IconUser,
  IconMenu2,
  IconMessage,
  IconCode,
  IconX,
} from "@tabler/icons-react";
const navItems = [
  {
    name: "About",
    link: "/",
    icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Projects",
    link: "/projects",
    icon: <IconCode className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Contact",
    link: "/contact",
    icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
];

export const FloatingNav = ({ className }: { className?: string }) => {
  const [showFullNav, setShowFullNav] = useState(true);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowFullNav(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "fixed top-10 inset-x-0 z-50 flex items-center justify-end transition-transform",
          showFullNav ? "mx-auto max-w-fit" : "right-4 "
        )}
      >
        {!showFullNav && (
          <button
            className="p-2 rounded-full border border-none dark:border-white/[0.2] bg-white dark:bg-transparent shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
            onClick={toggleMenu}
          >
            {showMenu ? (
              <IconX className="h-10 w-10 text-neutral-500 dark:text-white" />
            ) : (
              <IconMenu2 className="h-10 w-10 text-neutral-500 dark:text-white" />
            )}
          </button>
        )}

        {showFullNav && (
          <>
            {navItems.map((navItem, idx) => (
              <Link key={`link=${idx}`} href={navItem.link}>
                <button className="border text-sm font-medium relative mx-4 my-2 border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-lg w-fit flex items-center justify-center gap-1 ">
                  {navItem.icon}
                  <span className="hidden sm:block text-sm">
                    {navItem.name}
                  </span>
                  <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px"></span>
                </button>
              </Link>
            ))}
          </>
        )}

        <AnimatePresence>
          {!showFullNav && showMenu && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={cn(
                "absolute top-12 right-4 min-w-fit bg-white dark:bg-transparent rounded-md p-4 space-y-2 z-50 dark:border-white/[0.2]",
                className
              )}
            >
              {navItems.map((navItem, idx) => (
                <Link
                  key={`link=${idx}`}
                  href={navItem.link}
                  onClick={toggleMenu}
                >
                  <button className="border text-sm font-medium relative w-fit flex border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-lg my-1">
                    {navItem.icon}
                    <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px"></span>
                  </button>
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
};
