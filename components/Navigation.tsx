"use client";

import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";

const navigationItems = [
  { name: "Home", href: "#home" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".section");
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop =
          section.getBoundingClientRect().top + window.scrollY;
        const sectionBottom = sectionTop + section.clientHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    const element = document.getElementById(href.replace("#", ""));
    if (element) {
      const offsetPosition =
        element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-paper/90 backdrop-blur border-b border-ink/10">
      <nav className="mx-auto max-w-6xl px-6">
        <div className="flex h-16 items-center justify-between">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="font-mono text-sm font-medium tracking-[0.2em] hover:text-pine transition-colors"
          >
            LEMINE MBARECK
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`font-mono text-xs uppercase tracking-widest transition-colors ${
                  activeSection === item.href.replace("#", "")
                    ? "text-pine underline underline-offset-8 decoration-1"
                    : "text-ink/60 hover:text-pine"
                }`}
              >
                {item.name}
              </a>
            ))}
            <ThemeToggle />
            <a
              href="/Lemine-Mbareck-Resume.pdf"
              download
              className="font-mono text-xs uppercase tracking-widest border border-ink px-3.5 py-2 hover:bg-ink hover:text-paper transition-colors"
            >
              Resume
            </a>
          </div>

          <div className="md:hidden flex items-center gap-6">
            <ThemeToggle />
            <button
              className="font-mono text-xs uppercase tracking-widest text-ink/70 hover:text-pine"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-ink/10 py-4 bg-paper">
            <div className="flex flex-col gap-4">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`font-mono text-xs uppercase tracking-widest ${
                    activeSection === item.href.replace("#", "")
                      ? "text-pine"
                      : "text-ink/60"
                  }`}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="/Lemine-Mbareck-Resume.pdf"
                download
                className="font-mono text-xs uppercase tracking-widest text-ink"
              >
                Download resume (PDF) &#8595;
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
