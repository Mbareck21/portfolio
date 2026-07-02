import { SectionHeader } from "./SectionHeader";

const categories = [
  {
    title: "Data Engineering",
    skills: [
      "SQL (Snowflake, SQL Server, PostgreSQL)",
      "Python (pandas, APIs, automation)",
      "ETL / ELT pipeline development",
      "Data modeling (star schema)",
      "Data quality management & governance",
      "Batch job scheduling & monitoring",
      "Git",
    ],
  },
  {
    title: "BI & Analytics",
    skills: [
      "Power BI & DAX",
      "Data storytelling & executive reporting",
      "KPI definition & tracking",
      "Root cause analysis",
      "R (tidyverse, text mining)",
      "Streamlit",
    ],
  },
  {
    title: "AI & Development",
    skills: [
      "Agentic AI / LLM integration",
      "GenAI-assisted workflows",
      "Next.js & TypeScript",
      "React & Node.js",
      "MongoDB",
      "REST APIs",
    ],
  },
  {
    title: "Leadership & Business",
    skills: [
      "Team leadership & talent development",
      "Cross-functional stakeholder management",
      "Program & project management",
      "Compliance & audit readiness",
      "Process improvement",
      "Training & enablement",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="section py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          index="01"
          title="Skills"
          lede="A modern data stack paired with five years of people leadership. I move work from raw source systems to decisions leaders act on."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {categories.map((category) => (
            <div key={category.title}>
              <h3 className="font-mono text-xs uppercase tracking-widest text-pine border-t border-ink/15 pt-4">
                {category.title}
              </h3>
              <ul className="mt-5 space-y-2.5">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="relative pl-5 text-[15px] leading-relaxed text-ink/80 before:content-[''] before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:bg-pine/40"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
