import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Resume } from "@/components/Resume";
import { Contact } from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lemine Mbareck | Full Stack Developer",
  description: "Full-stack developer specializing in modern web technologies with a background in data analysis",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 selection:bg-primary-500/30 selection:text-primary-100">
      <div id="home" className="section">
        <Hero />
      </div>
      <div id="skills" className="section">
        <Skills />
      </div>
      <div id="projects" className="section">
        <Projects />
      </div>
      <div id="resume" className="section">
        <Resume />
      </div>
      <div id="contact" className="section">
        <Contact />
      </div>
    </main>
  );
}