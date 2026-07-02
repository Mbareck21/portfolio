import { SectionHeader } from "./SectionHeader";

const experience = [
  {
    title: "Junior Data Engineer",
    company: "Walton Arts Center & Walmart AMP",
    period: "Feb 2026 - Present",
    location: "Fayetteville, AR",
    bullets: [
      "Build Python and SQL ingestion pipelines into a Snowflake warehouse across Tessitura, Ticketmaster, Blackbaud, and Shift4, creating a single source of truth for cross-departmental reporting.",
      "Design and deliver P&L dashboards and operational reports in Power BI, partnering with finance and business units to turn reporting requirements into decisions.",
      "Cut report development time by about 80% by integrating GenAI-assisted workflows into dashboard and report design.",
      "Safeguard data quality through validation checks and root cause analysis across Snowflake, SQL Server, and PostgreSQL; schedule and monitor automated batch jobs.",
      "Trained 30+ department heads and senior leaders on Power BI and data-informed decision making.",
    ],
  },
  {
    title: "Administrative Supervisor, Immigration Legal Services",
    company: "International Rescue Committee (IRC)",
    period: "Oct 2025 - Feb 2026",
    location: "Atlanta, GA",
    bullets: [
      "Led a 9-member team delivering high-volume immigration legal services in one of IRC's largest U.S. offices, serving 5,000+ clients annually across programs.",
      "Owned monthly KPI tracking and program audits, ensuring timely, accurate data entry and compliance with federal (ORR) and grant reporting requirements.",
      "Coached staff through performance feedback and targeted training; coordinated file reviews and corrective actions that strengthened funder audit readiness.",
    ],
  },
  {
    title: "Immigration Program Manager",
    company: "Canopy NWA",
    period: "May 2022 - Oct 2025",
    location: "Fayetteville, AR",
    bullets: [
      "Built and led the agency's immigration legal services program end to end, managing the complete case lifecycle for 1,000+ cumulative clients with a near-perfect approval rate across hundreds of federal applications.",
      "Earned the 2024 Arkansas Access to Justice Award for the program's impact on refugees and immigrants across Northwest Arkansas.",
      "Replaced spreadsheet tracking with a full-stack case management application (Next.js, MongoDB), after first building an Excel system with data validation that sped up case tracking.",
      "Performed root cause analysis across 1,000+ case records to surface operational bottlenecks, directly informing staffing and workflow decisions.",
      "Standardized reporting templates and metric definitions across all grants and donors, cutting reporting time by 20%.",
      "Trained and developed 25+ interns, staff, and volunteers on data quality, documentation standards, compliance, and legal ethics.",
    ],
  },
  {
    title: "Case Manager",
    company: "Canopy NWA",
    period: "Jan 2021 - May 2022",
    location: "Fayetteville, AR",
    bullets: [
      "Co-launched Canopy's legal services program covering family reunification, green cards, citizenship, DACA, and TPS; earned U.S. Department of Justice accreditation (2022) to represent clients before the Department of Homeland Security.",
      "Designed and led Know Your Rights workshops and community presentations in English, Arabic, and French.",
    ],
  },
  {
    title: "Language Services Contractor",
    company: "CyraCom International",
    period: "2019 - 2020",
    location: "Remote",
    bullets: [
      "Delivered high-stakes legal and medical interpretation and translation in Arabic, English, and French, supporting trauma-informed, culturally responsive service delivery.",
    ],
  },
  {
    title: "Assistant Press Attaché",
    company: "Presidential Cabinet",
    period: "2011 - 2018",
    location: "Nouakchott, Mauritania",
    bullets: [
      "Curated and analyzed information for executive briefings to the President's Chief of Staff; managed confidential, deadline-driven communications under strict protocol.",
    ],
  },
];

const education = [
  {
    title: "M.A., Media Studies",
    institution: "University of Arkansas",
    period: "2019",
    description:
      "Fulbright Scholar, U.S. Department of State (2017-2019). Thesis: computational sentiment analysis of political speech and news coverage using R and NLP.",
  },
  {
    title: "B.A., Journalism",
    institution: "University of Manouba, Tunisia",
    period: "2011",
    description: "",
  },
];

const certifications = [
  {
    name: "U.S. Department of Justice Accredited Representative",
    detail: "U.S. DOJ, 2022 - Present",
  },
  {
    name: "Foundations of Generative AI",
    detail: "Udacity, 2025",
  },
  {
    name: "Google Data Analytics Professional Certificate",
    detail: "Coursera, 2023",
  },
  {
    name: "Front-End Web Development Certificate",
    detail: "University of Arkansas, 2023",
  },
  {
    name: "Full-Stack Web Development",
    detail: "Code The Dream, 2022",
  },
];

const languages = ["English", "Arabic", "French"];

export function Experience() {
  return (
    <section id="experience" className="section py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          index="03"
          title="Experience"
          lede="From leading federally audited programs to building the data systems that report on them."
        />

        <div>
          {experience.map((job) => (
            <div
              key={`${job.title}-${job.company}`}
              className="grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-3 border-t border-ink/15 py-9"
            >
              <div className="md:col-span-3 font-mono text-sm text-ink/60">
                <p>{job.period}</p>
                <p className="mt-1">{job.location}</p>
              </div>
              <div className="md:col-span-9">
                <h3 className="font-display text-2xl tracking-tight">
                  {job.title}
                </h3>
                <p className="mt-1 font-mono text-sm text-pine">
                  {job.company}
                </p>
                <ul className="mt-5 space-y-2.5 max-w-3xl">
                  {job.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="relative pl-5 text-[15px] leading-relaxed text-ink/80 before:content-[''] before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:bg-pine/40"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-pine text-paper p-8 md:p-12">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-paper/70">
            Recognition
          </p>
          <p className="mt-4 font-display text-3xl md:text-4xl tracking-tight">
            2024 Arkansas Access to Justice Award
          </p>
          <p className="mt-4 max-w-2xl leading-relaxed text-paper/85">
            Outstanding Pro Bono Service, Community Member. Awarded for
            building a legal services program that served refugees and
            immigrants across Northwest Arkansas.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-pine border-t border-ink/15 pt-4">
              Education
            </h3>
            <div className="mt-5 space-y-6">
              {education.map((item) => (
                <div key={item.title}>
                  <p className="font-medium">{item.title}</p>
                  <p className="mt-1 font-mono text-xs text-ink/60">
                    {item.institution}, {item.period}
                  </p>
                  {item.description && (
                    <p className="mt-2 text-sm leading-relaxed text-ink/70">
                      {item.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-pine border-t border-ink/15 pt-4">
              Certifications
            </h3>
            <div className="mt-5 space-y-4">
              {certifications.map((cert) => (
                <div key={cert.name}>
                  <p className="text-[15px] font-medium leading-snug">
                    {cert.name}
                  </p>
                  <p className="mt-1 font-mono text-xs text-ink/60">
                    {cert.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-pine border-t border-ink/15 pt-4">
              Languages
            </h3>
            <ul className="mt-5 space-y-2">
              {languages.map((language) => (
                <li key={language} className="text-[15px] text-ink/80">
                  {language}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
