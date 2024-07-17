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
    <div className="max-w-5xl mx-auto px-8 my-20">
      {isLoading ? (
        <p>Loading projects...</p>
      ) : error ? (
        <p>Error loading projects: {error.message}</p>
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
