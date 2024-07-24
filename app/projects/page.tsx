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
    <div className="max-w-5xl mx-auto px-8 mt-40">
      <div className="rounded-2xl h-full w-full p-4 overflow-hidden border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20">
        <h1 className="text-zinc-100 font-bold tracking-wide mt-4">
          My GitHub Repos!
        </h1>
        <p className="mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm">
          This component displays some of my GitHub repositories by fetching
          data from the GitHub API using fetch method, it uses React Hooks,
          specifically useState and useEffect to manage the component's state
          and fetch the data from the API respectively. It also uses a ternary
          operator inside the map function to check if the repository's
          description is not null before rendering the repository, this way I
          render only the repositories that I wrote a description for. And it
          also uses a ternary operator to check if the component is still
          loading data from the API or not.
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
