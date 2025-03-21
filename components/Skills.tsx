"use client";

import { motion } from "framer-motion";
import {
  CommandLineIcon,
  CubeIcon,
  GlobeAltIcon,
  ServerIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";

const skills = {
  frontend: [
    "React.js",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "JavaScript",
    "HTML5/CSS3",
    "Python",
    "Bootstrap",
  ],
  backend: [
    "Node.js", 
    "Express",
    "REST APIs", 
    "MongoDB", 
    "PostgreSQL",
    "SQL"
  ],
  dataAnalysis: [
    "R Programming",
    "Tableau",
    "Data Visualization",
    "Text Mining",
    "Sentiment Analysis",
    "Data Cleaning"
  ],
  software: [
    
    "MS Windows",
    'MacOS',
    'Troubleshooting',
    'Software installation',
    "Microsoft Office Suite",
    "Google Workspace",
    "VS Code",
    "Git/GitHub",
    '...And more!'
    
  ]
};

export function Skills() {
  return (
    <section className="py-20 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-neutral-100 mb-4">
            Programming Skills
          </h2>
          <p className="text-neutral-400 max-w-2xl mb-12 text-lg">
            My comprehensive programming skill set spans web development and data analysis, allowing me to build
            robust applications while leveraging data-driven insights.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <SkillCategory
            title="Frontend Development"
            skills={skills.frontend}
            icon={GlobeAltIcon}
            delay={0}
          />
          <SkillCategory
            title="Backend Development"
            skills={skills.backend}
            icon={ServerIcon}
            delay={0.2}
          />
          <SkillCategory
            title="Data Analysis"
            skills={skills.dataAnalysis}
            icon={ChartBarIcon}
            delay={0.4}
          />
          <SkillCategory
            title="IT & Tools"
            skills={skills.software}
            icon={CubeIcon}
            delay={0.6}
          />
        </div>
      </div>
    </section>
  );
}

function SkillCategory({
  title,
  skills,
  icon: Icon,
  delay,
}: {
  title: string;
  skills: string[];
  icon: any;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800"
    >
      <div className="flex items-center mb-4">
        <Icon className="h-6 w-6 text-primary-500 mr-2" />
        <h3 className="text-lg font-semibold text-neutral-100">{title}</h3>
      </div>
      <ul className="space-y-2">
        {skills.map((skill) => (
          <li
            key={skill}
            className="text-neutral-400 flex items-center text-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary-500/50 mr-2"></span>
            {skill}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}