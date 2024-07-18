"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { IconHome, IconMenu2, IconX } from "@tabler/icons-react";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
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
          showFullNav ? "mx-auto max-w-fit" : "right-4"
        )}
      >
        {!showFullNav && (
          <button
            className="p-2  rounded-full border border-none dark:border-white/[0.2] bg-white dark:bg-transparent shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
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
            <Link href="/">
              <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full ">
                <span className="hidden sm:block text-sm">Home</span>
                <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px"></span>
              </button>
            </Link>

            {navItems.map((navItem, idx) => (
              <Link key={`link=${idx}`} href={navItem.link}>
                <button className="border text-sm font-medium relative ml-4 border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full w-fit flex items-center justify-center gap-1">
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
                "absolute top-12 right-4 bg-white dark:bg-transparent rounded-md p-4 space-y-2 z-50 border border-neutral-200 dark:border-white/[0.2]",
                className
              )}
            >
              {navItems.map((navItem, idx) => (
                <Link
                  key={`link=${idx}`}
                  href={navItem.link}
                  onClick={toggleMenu}
                >
                  <button className="border text-sm font-medium relative w-full border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
                    {navItem.icon}
                    <span className="hidden sm:block text-sm">
                      {navItem.name}
                    </span>
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
