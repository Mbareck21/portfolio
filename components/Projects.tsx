import { SectionHeader } from "./SectionHeader";

interface Project {
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  codeUrl: string;
}

const projects: Project[] = [
  {
    title: "TrendSpark",
    subtitle: "Agentic AI content pipeline",
    description:
      "A five-stage GenAI pipeline covering trend discovery, content extraction, ideation, script generation, and audio synthesis, orchestrating multiple LLM APIs end to end.",
    technologies: ["Next.js", "TypeScript", "OpenAI", "Groq"],
    liveUrl: "https://trendspark.vercel.app",
    codeUrl: "https://github.com/Mbareck21/TrendSpart",
  },
  {
    title: "Walmart Review Analysis",
    subtitle: "Voice-of-customer dashboard",
    description:
      "A live sentiment analysis dashboard scoring 23,000 e-commerce apparel reviews and segmenting negative feedback by department and issue type, so merchandising teams can act on urgent issues first.",
    technologies: ["Python", "Streamlit", "NLTK", "Plotly"],
    liveUrl: "https://walmartvoc.streamlit.app",
    codeUrl: "https://github.com/Mbareck21/Walmart_Sentiment_Project",
  },
  {
    title: "Snowflake Data Engineering",
    subtitle: "Pipeline patterns portfolio",
    description:
      "Snowflake and Python data engineering work covering warehousing, ingestion, and transformation patterns, documented in Jupyter notebooks.",
    technologies: ["Snowflake", "Python", "Jupyter"],
    codeUrl:
      "https://github.com/Mbareck21/Snowflake-Python-Data-Engineering-Portfolio",
  },
  {
    title: "Immigration Case Management App",
    subtitle: "Full-stack internal tool",
    description:
      "A full-stack case management application built to replace spreadsheet tracking for an immigration legal services program, managing client records and case lifecycle data.",
    technologies: ["Next.js", "MongoDB", "Node.js"],
    liveUrl: "https://clientdatabase-hazel.vercel.app/dashboard",
    codeUrl: "https://github.com/Mbareck21/clientdatabase",
  },
  {
    title: "Sentiment Analysis of Political Tweets",
    subtitle: "Reproducible R text mining pipeline",
    description:
      "An end-to-end R pipeline: ingestion from Twitter and news APIs, tidy preprocessing, TF-IDF feature engineering, lexicon-based sentiment scoring, and theme extraction with co-occurrence analysis.",
    technologies: ["R", "tidyverse", "ggplot2", "NLP"],
    codeUrl:
      "https://github.com/Mbareck21/Sentiment-Analysis-of-Political-Tweets-with-R",
  },
];

export function Projects() {
  return (
    <section id="projects" className="section py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          index="02"
          title="Projects"
          lede="Selected work across data engineering, analytics, and AI. Each project ships with source code, and three run live."
        />

        <ul>
          {projects.map((project, index) => (
            <li
              key={project.title}
              className="border-t border-ink/15 last:border-b hover:bg-ink/5 transition-colors"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-4 py-9">
                <span className="md:col-span-1 font-mono text-sm text-ink/40">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="md:col-span-6">
                  <h3 className="font-display text-2xl md:text-3xl tracking-tight">
                    {project.title}
                  </h3>
                  <p className="mt-1 font-mono text-xs uppercase tracking-widest text-pine">
                    {project.subtitle}
                  </p>
                  <p className="mt-4 leading-relaxed text-ink/70 max-w-xl">
                    {project.description}
                  </p>
                </div>

                <div className="md:col-span-3 font-mono text-xs leading-loose text-ink/60 md:pt-2">
                  {project.technologies.join(" / ")}
                </div>

                <div className="md:col-span-2 flex md:flex-col items-start gap-x-6 gap-y-3 font-mono text-sm md:pt-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-4 decoration-1 text-pine hover:text-pine-deep transition-colors"
                    >
                      Live &#8599;
                    </a>
                  )}
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4 decoration-1 text-ink/70 hover:text-pine transition-colors"
                  >
                    Source &#8599;
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-10 font-mono text-sm">
          <a
            href="https://github.com/Mbareck21"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 decoration-1 hover:text-pine transition-colors"
          >
            More on GitHub &#8599;
          </a>
        </p>
      </div>
    </section>
  );
}
