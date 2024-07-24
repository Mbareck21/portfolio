"use client";

import { HoverEffect } from "@/components/ui/card";
import React, { useState, useEffect } from "react";

interface GithubProject {
  name: string;
  description: string | null;
  html_url: string;
}

const ProjectsPage = () => {
  const [gitProjects, setGitProjects] = useState<GithubProject[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch("https://api.github.com/users/Mbareck21/repos");
        if (!res.ok) {
          throw new Error("Data did not load!");
        }
        const data = await res.json();
        setGitProjects(data);
      } catch (err) {
        console.error("Error fetching GitHub repos:", err);
        setError(
          err instanceof Error ? err : new Error("Unknown error occurred.")
        );
      } finally {
        setIsLoading(false);
      }
    };
    fetchRepos();
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-8 mt-40 lg:text-xl">
      <div className="rounded-2xl h-full w-full p-4 overflow-hidden border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20">
        <h1 className="text-zinc-100 font-bold tracking-wide mt-4">
          My GitHub Repositories!
        </h1>
        <p className="mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm">
          This component dynamically displays some of my{" "}
          <span className="text-sky-500">GitHub</span> repositories by fetching
          data from the GitHub <span className="text-sky-500">API</span> using
          the <span className="text-sky-500">fetch</span> method, it uses React
          Hooks, specifically <span className="text-sky-500">useState</span> and
          <span className="text-sky-500"> useEffect</span> to manage the
          component's state and fetch the data from the API respectively. It
          also uses a JavaScript filter method inside to render only public
          repositories that have description. We, additionally, display a
          loading message while the is being fetched with some{" "}
          <span className="text-sky-500">error handling</span> .
        </p>
      </div>
      {isLoading ? (
        <p className="text-center text-lg font-bold text-amber-200 animate-pulse">
          Loading projects...
        </p>
      ) : error ? (
        <p className="text-center text-lg font-bold text-amber-200 animate-pulse">
          Error loading projects: {error.message}
        </p>
      ) : (
        <HoverEffect
          items={gitProjects
            .filter((project) => project.description !== null)
            .map((project) => ({
              title: project.name,
              description: project.description!,
              link: project.html_url,
            }))}
        />
      )}
    </div>
  );
};

export default ProjectsPage;
