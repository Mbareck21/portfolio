"use client";

import { motion } from "framer-motion";
import { 
  BriefcaseIcon, 
  AcademicCapIcon, 
  CodeBracketIcon,
  BeakerIcon 
} from "@heroicons/react/24/outline";

export function Resume() {
  return (
    <section className="py-20 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative z-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-100 mb-8">
            Professional Journey
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column - Experience & Education */}
          <div className="lg:col-span-8 space-y-8">
            {/* Experience Section */}
            <div className="bg-neutral-900/50 rounded-2xl p-8 backdrop-blur-sm border border-neutral-800">
              <div className="flex items-center mb-6">
                <BriefcaseIcon className="h-6 w-6 text-primary-500 mr-3" />
                <h3 className="text-2xl font-bold text-neutral-100">Experience</h3>
              </div>
              
              <div className="space-y-8">
                <ExperienceItem
                  title="Immigration Program Manager"
                  company="Canopy NWA"
                  period="2020-Present"
                  location="Fayetteville, AR"
                  description="Developed and launched a full-stack Immigration Case Management App using Next.js 13, Material UI, and MongoDB. Implemented NextAuth for secure authentication and CRUD operations."
                />
                
                <ExperienceItem
                  title="Language Services Contractor"
                  company="CyraCom International"
                  period="Sep 2019 – Feb 2020"
                  location="NY, NY"
                  description="Facilitated communication between clients and service providers using English, French, and Arabic language skills in medical, legal, financial, and social sectors."
                />
              </div>
            </div>

            {/* Education Section */}
            <div className="bg-neutral-900/50 rounded-2xl p-8 backdrop-blur-sm border border-neutral-800">
              <div className="flex items-center mb-6">
                <AcademicCapIcon className="h-6 w-6 text-primary-500 mr-3" />
                <h3 className="text-2xl font-bold text-neutral-100">Education</h3>
              </div>
              
              <div className="space-y-8">
                <EducationItem
                  title="Meta Front-End Developer Professional Certificate"
                  institution="Coursera"
                  period="June 2023 - October 2023"
                  description="Completed comprehensive certification in front-end development, mastering HTML, CSS, JavaScript, React, and UI design principles."
                />
                
                <EducationItem
                  title="Google Data Analytics Professional Certificate"
                  institution="Coursera"
                  period="April 2023 - May 2023"
                  description="Mastered data analytics skills using Excel, SQL, R programming, and Tableau. Developed expertise in data cleaning, analysis, and visualization."
                />

                <EducationItem
                  title="Code The Dream School Boot-Camp"
                  institution="Code The Dream"
                  period="March 2022 - Dec 2022"
                  description="Completed full-stack web development program covering HTML, CSS, JavaScript, React, MongoDB, Node.js, and Express.js."
                />

                <EducationItem
                  title="Master of Arts in Media Studies"
                  institution="University of Arkansas"
                  period="Aug 2017 – May 2019"
                  description="Applied R programming for Twitter data analysis, implementing automated text mining techniques and sentiment analysis."
                />
              </div>
            </div>
          </div>

          {/* Right Column - Skills & Certifications */}
          <div className="lg:col-span-4 space-y-8">
            {/* Skills Section */}
            <div className="bg-neutral-900/50 rounded-2xl p-8 backdrop-blur-sm border border-neutral-800">
              <div className="flex items-center mb-6">
                <CodeBracketIcon className="h-6 w-6 text-primary-500 mr-3" />
                <h3 className="text-2xl font-bold text-neutral-100">Skills</h3>
              </div>
              
              <div className="space-y-4">
                <SkillCategory
                  title="Development"
                  skills={["JavaScript", "React", "Next.js", "Node.js", "MongoDB", "SQL"]}
                />
                <SkillCategory
                  title="Data Analysis"
                  skills={["R Programming", "Data Visualization", "Statistical Analysis", "Text Mining"]}
                />
                <SkillCategory
                  title="Software"
                  skills={["Microsoft Office Suite", "Google Workspace", "Tableau", "VS Code"]}
                />
              </div>
            </div>

            {/* Certifications Section */}
            <div className="bg-neutral-900/50 rounded-2xl p-8 backdrop-blur-sm border border-neutral-800">
              <div className="flex items-center mb-6">
                <BeakerIcon className="h-6 w-6 text-primary-500 mr-3" />
                <h3 className="text-2xl font-bold text-neutral-100">Certifications</h3>
              </div>
              
              <div className="space-y-4">
                <div className="border-l-2 border-primary-500 pl-4">
                  <h4 className="text-neutral-100 font-semibold">Meta Front-End Developer</h4>
                  <p className="text-neutral-400 text-sm">Coursera - 2023</p>
                </div>
                <div className="border-l-2 border-primary-500 pl-4">
                  <h4 className="text-neutral-100 font-semibold">Google Data Analytics</h4>
                  <p className="text-neutral-400 text-sm">Coursera - 2023</p>
                </div>
                <div className="border-l-2 border-primary-500 pl-4">
                  <h4 className="text-neutral-100 font-semibold">Full-Stack Development</h4>
                  <p className="text-neutral-400 text-sm">Code The Dream - 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const ExperienceItem = ({ title, company, period, location, description }: {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="border-l-2 border-primary-500 pl-4"
  >
    <h4 className="text-neutral-100 font-semibold text-lg">{title}</h4>
    <div className="flex justify-between items-center mb-2">
      <p className="text-primary-400">{company}</p>
      <p className="text-neutral-500 text-sm">{period}</p>
    </div>
    <p className="text-neutral-400 text-sm mb-2">{location}</p>
    <p className="text-neutral-300 text-sm">{description}</p>
  </motion.div>
);

const EducationItem = ({ title, institution, period, description }: {
  title: string;
  institution: string;
  period: string;
  description: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="border-l-2 border-primary-500 pl-4"
  >
    <h4 className="text-neutral-100 font-semibold text-lg">{title}</h4>
    <div className="flex justify-between items-center mb-2">
      <p className="text-primary-400">{institution}</p>
      <p className="text-neutral-500 text-sm">{period}</p>
    </div>
    <p className="text-neutral-300 text-sm">{description}</p>
  </motion.div>
);

const SkillCategory = ({ title, skills }: { title: string; skills: string[] }) => (
  <div>
    <h4 className="text-neutral-100 font-semibold mb-2">{title}</h4>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span
          key={skill}
          className="px-3 py-1 bg-primary-500/10 text-primary-400 rounded-full text-sm border border-primary-500/20"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);