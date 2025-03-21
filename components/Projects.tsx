"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HoverEffect } from "./ui/card-hover-effect";
import { BackgroundBeams } from "./ui/background-beams";

interface GithubProject {
  name: string;
  description: string | null;
  html_url: string;
  topics: string[];
  language: string;
  stargazers_count: number;
}

export function Projects() {
  const [gitProjects, setGitProjects] = useState<GithubProject[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch("https://api.github.com/users/Mbareck21/repos");
        if (!res.ok) {
          throw new Error("Failed to fetch projects");
        }
        const data = await res.json();
        setGitProjects(data);
      } catch (err) {
        console.error("Error fetching GitHub repos:", err);
        setError(err instanceof Error ? err : new Error("Failed to fetch projects"));
      } finally {
        setIsLoading(false);
      }
    };

    fetchRepos();
  }, []);

  const formatProjectName = (name: string) => {
    return name
      .split("-")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <section id="projects" className="min-h-screen bg-neutral-950 relative py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative z-10"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-neutral-100 mb-4">
            Featured Projects
          </h2>
          <p className="text-neutral-400 max-w-2xl mb-12 text-lg">
            Explore my latest work on GitHub, showcasing expertise in modern web development.
            Each project demonstrates my commitment to clean code, innovative solutions, and
            industry best practices. This section is dynamically generated from my public repositories on GitHub.
          </p>
        </motion.div>

        {isLoading ? (
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary-500"></div>
          </div>
        ) : error ? (
          <div className="text-red-500 text-center p-4 rounded-lg border border-red-800 bg-red-900/20">
            {error.message}
          </div>
        ) : (
          <HoverEffect
            items={gitProjects
              .filter(project => project.description !== null)
              .map(project => ({
                title: formatProjectName(project.name),
                description: project.description!,
                link: project.html_url,
                technologies: project.topics || [],
                language: project.language,
                stars: project.stargazers_count
              }))}
          />
        )}
      </div>
      <BackgroundBeams />
    </section>
  );
}