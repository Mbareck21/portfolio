"use client";

import { motion } from "framer-motion";
import {
	BriefcaseIcon,
	AcademicCapIcon,
	CodeBracketIcon,
	BeakerIcon,
} from "@heroicons/react/24/outline";

export function Resume() {
	return (
		<section className='py-20 bg-neutral-950'>
			<div className='max-w-7xl mx-auto px-6'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className='relative z-10'>
					<h2 className='text-4xl md:text-5xl font-bold text-neutral-100 mb-8'>
						Professional Journey
					</h2>
				</motion.div>

				<div className='grid grid-cols-1 lg:grid-cols-12 gap-8'>
					<div className='lg:col-span-8 space-y-8'>
						<div className='bg-neutral-900/50 rounded-2xl p-8 backdrop-blur-sm border border-neutral-800'>
							<div className='flex items-center mb-6'>
								<BriefcaseIcon className='h-6 w-6 text-primary-500 mr-3' />
								<h3 className='text-2xl font-bold text-neutral-100'>
									Experience
								</h3>
							</div>

							<div className='space-y-8'>
								<ExperienceItem
									title='Immigration Program Manager'
									company='Canopy NWA'
									period='2021-Present'
									location='Fayetteville, AR'
									description='Managed a high-volume portfolio of over 500 cases annually, implementing organizational processes to ensure efficient service delivery and data management for each case. 

Developed and implemented efficient case tracking and management processes, significantly improving operational effectiveness and data integrity, directly relevant to data quality management and process optimization. 

Led rapid response projects, coordinating complex logistics and resources under pressure to assist large groups, demonstrating strong project management and problem-solving skills applicable to supply chain coordination and issue resolution. 

Established and maintained collaborative partnerships with various external organizations, fostering communication and streamlining workflows to enhance service delivery, mirroring the need to collaborate with suppliers and cross-functional partners. 

Provided crisis support and quick solutions for urgent client needs, showcasing adaptability and the ability to troubleshoot and resolve issues efficiently. Supervised and mentored staff and interns, delegating tasks and ensuring performance to meet program goals, reflecting leadership and team coordination abilities. '
								/>

								<ExperienceItem
									title='Language Services Contractor'
									company='CyraCom International'
									period='Sep 2019 – Feb 2020'
									location='NY, NY'
									description='Facilitated communication between clients and service providers using English, French, and Arabic language skills in medical, legal, financial, and social sectors.'
								/>
								<ExperienceItem
									title='Attaché de Presse'
									company='Cabinet Présidentiel'
									period='Jan 2011 – Jan 2018'
									location='NKC, Mauritania'
									description='Collaborated with senior leadership on planning and executing official communication strategies, contributing to public image and information dissemination efforts. 

Managed media relations and public information flow, ensuring accurate and timely communication to diverse stakeholders, relevant to external communication and data transparency. 

Monitored media coverage and public sentiment, providing insights for strategic communication adjustments, similar to monitoring customer feedback and industry trends. '
								/>
							</div>
						</div>

						<div className='bg-neutral-900/50 rounded-2xl p-8 backdrop-blur-sm border border-neutral-800'>
							<div className='flex items-center mb-6'>
								<AcademicCapIcon className='h-6 w-6 text-primary-500 mr-3' />
								<h3 className='text-2xl font-bold text-neutral-100'>
									Education
								</h3>
							</div>

							<div className='space-y-8'>
								<EducationItem
									title='Foundation of Generative AI Nanodegree'
									institution='Udacity'
									period='2025'
									description='Mastered practical applications of LLMs, RAG, prompt engineering and ethical AI. Developed hands-on experience with PyTorch, Hugging Face, and LangChain. Learned transfer learning, parameter-efficient fine-tuning, and foundation model adaptation.'
								/>
								<EducationItem
									title='Google Data Analytics Professional Certificate'
									institution='Coursera'
									period='2023'
									description='Self-taught SQL, R, and data visualization techniques while working full-time. Completed case study demonstrating ability to derive actionable insights from complex datasets.'
								/>

								<EducationItem
									title='Front-End Web Development Certificate'
									institution='University of Arkansas'
									period='2023'
									description='Built dynamic web applications using JavaScript, React, and modern web technologies. Supplemented self-taught skills with formal instruction in UI/UX design principles.'
								/>

								<EducationItem
									title='Code The Dream School Boot-Camp'
									institution='Code The Dream'
									period='2022'
									description='Completed full-stack web development program covering HTML, CSS, JavaScript, React, MongoDB, Node.js, and Express.js.'
								/>

								<EducationItem
									title='Master of Arts in Media Studies'
									institution='University of Arkansas'
									period='2019'
									description='Self-taught R programming to analyze political discourse on Twitter. Applied automated text mining techniques to extract insights from unstructured data. Implemented data visualization components to present complex findings.'
								/>
							</div>
						</div>
					</div>

					<div className='lg:col-span-4 space-y-8'>
						<div className='bg-neutral-900/50 rounded-2xl p-8 backdrop-blur-sm border border-neutral-800'>
							<div className='flex items-center mb-6'>
								<CodeBracketIcon className='h-6 w-6 text-primary-500 mr-3' />
								<h3 className='text-2xl font-bold text-neutral-100'>Skills</h3>
							</div>

							<div className='space-y-4'>
								<SkillCategory
									title='Development'
									skills={[
										"JavaScript",
										"React",
										"Next.js",
										"Node.js",
										"MongoDB",
										"SQL",
									]}
								/>
								<SkillCategory
									title='Data Analysis'
									skills={[
										"R Programming",
										"Data Visualization",
										"Statistical Analysis",
										"Text Mining",
									]}
								/>
								<SkillCategory
									title='Software'
									skills={[
										"Microsoft Office Suite",
										"Google Workspace",
										"Tableau",
										"VS Code",
									]}
								/>
							</div>
						</div>

						<div className='bg-neutral-900/50 rounded-2xl p-8 backdrop-blur-sm border border-neutral-800'>
							<div className='flex items-center mb-6'>
								<BeakerIcon className='h-6 w-6 text-primary-500 mr-3' />
								<h3 className='text-2xl font-bold text-neutral-100'>
									Certifications
								</h3>
							</div>

							<div className='space-y-4'>
								<div className='border-l-2 border-primary-500 pl-4'>
									<h4 className='text-neutral-100 font-semibold'>
										Foundation of Generative AI
									</h4>
									<p className='text-neutral-400 text-sm'>Udacity - 2025</p>
								</div>
								<div className='border-l-2 border-primary-500 pl-4'>
									<h4 className='text-neutral-100 font-semibold'>
										Front-End Developer
									</h4>
									<p className='text-neutral-400 text-sm'>
										University of Arkansas - 2023
									</p>
								</div>
								<div className='border-l-2 border-primary-500 pl-4'>
									<h4 className='text-neutral-100 font-semibold'>
										Google Data Analytics
									</h4>
									<p className='text-neutral-400 text-sm'>Coursera - 2023</p>
								</div>
								<div className='border-l-2 border-primary-500 pl-4'>
									<h4 className='text-neutral-100 font-semibold'>
										Full-Stack Development
									</h4>
									<p className='text-neutral-400 text-sm'>
										Code The Dream - 2022
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

const ExperienceItem = ({
	title,
	company,
	period,
	location,
	description,
}: {
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
		className='border-l-2 border-primary-500 pl-4'>
		<h4 className='text-neutral-100 font-semibold text-lg'>{title}</h4>
		<div className='flex justify-between items-center mb-2'>
			<p className='text-primary-400'>{company}</p>
			<p className='text-neutral-500 text-sm'>{period}</p>
		</div>
		<p className='text-neutral-400 text-sm mb-2'>{location}</p>
		<p className='text-neutral-300 text-sm'>{description}</p>
	</motion.div>
);

const EducationItem = ({
	title,
	institution,
	period,
	description,
}: {
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
		className='border-l-2 border-primary-500 pl-4'>
		<h4 className='text-neutral-100 font-semibold text-lg'>{title}</h4>
		<div className='flex justify-between items-center mb-2'>
			<p className='text-primary-400'>{institution}</p>
			<p className='text-neutral-500 text-sm'>{period}</p>
		</div>
		<p className='text-neutral-300 text-sm'>{description}</p>
	</motion.div>
);

const SkillCategory = ({
	title,
	skills,
}: {
	title: string;
	skills: string[];
}) => (
	<div>
		<h4 className='text-neutral-100 font-semibold mb-2'>{title}</h4>
		<div className='flex flex-wrap gap-2'>
			{skills.map((skill) => (
				<span
					key={skill}
					className='px-3 py-1 bg-primary-500/10 text-primary-400 rounded-full text-sm border border-primary-500/20'>
					{skill}
				</span>
			))}
		</div>
	</div>
);
