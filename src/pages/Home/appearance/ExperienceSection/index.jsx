import Experience from './Experience';
import { motion } from 'framer-motion';

const experienceData = [
    {
        title: "UCLA Nanolab",
        subtitle: "Process Development Engineer",
        date: "October 2023 - December 2024",
        bullets: [
            "Aided in the research of companies including Apple, Boeing, and TSMC by providing research fabrication expertise and completing research projects in a foundry environment",
            "Created a parameter validation tool using Python and PyQt to validate and optimize wafer bonding parameters",
            "Developed a standard lithography process for i-line stepper and contact aligners to assist in etch recipe optimization through the employment of Design of Experiment (DOE) principles",
            "Applied Statistical Process Control (SPC) methods to track the performance of metrology equipment leading to improved performance and reduced tool downtime",
            "Maintained essential cleanroom function through tracking and ordering all laboratory chemical and non-chemical inventory",
            "Supervised and managed undergraduate and career laboratory assistants to ensure ISO Class 5 and ISO Class 6 cleanroom standards throughout lab spaces",
            "Inducted nearly 100 new core facility users and customers by conducting prospect outreach, offering personalized facility tours, and delivering capability demonstrations tailored to client needs"
        ]
    },
    {
        title: "Freelance Web3 Developer",
        subtitle: "Software Engineer",
        date: "June 2021 - September 2022",
        bullets: [
            "Authored and deployed solidity smart contracts, integrating them with a responsive frontend using Web3.js",
            "Designed and executed unit tests for smart contract functions using Chai.js to ensure functionality and reliability",
            "Developed Python scripts to automate the asset generation process, streamlining development workflows for artists",
            "Led a team of 4 SWEs to meet aggressively set deadlines on time and under budget",
            "Used community feedback to drive application development and marketing initiatives, increasing user engagement and community support",
            "Aided in the generation of over $500k in revenue through the design and implementation of the project's tokenomics system"
        ]
    },
    {
        title: "UCLA Sensors and Technology Laboratory",
        subtitle: "Academic Researcher",
        date: "February 2020 - June 2021",
        bullets: [
            "Informed future research by analyzing and visualizing device data from over 50 experimental devices using MATLAB",
            "Presented original research findings to peers and faculty members across a large research consortium, fostering collaboration and discussion regarding future research directions",
            "Co-authored manuscript of research that was accepted for publication in Applied Physics Letters"
        ]
    }
];

function ExperienceSection() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='flex flex-col gap-0 justify-start items-start w-full'
        >
            <h1 className='text-4xl font-bold self-center mb-12'>
                Experience
            </h1>

            {/* Timeline container */}
            <div className="relative w-full">
                {/* Vertical timeline line */}
                <div className="absolute left-4 md:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-purple-500/20" />

                {experienceData.map((exp, index) => (
                    <div key={index} className="relative pl-12 md:pl-16 pb-12 last:pb-0">
                        {/* Timeline dot */}
                        <div className="absolute left-2.5 md:left-4.5 top-1 w-3 h-3 md:w-4 md:h-4 rounded-full bg-purple-500 border-2 border-slate-950 shadow-lg shadow-purple-500/50" />

                        <Experience
                            title={exp.title}
                            subtitle={exp.subtitle}
                            date={exp.date}
                            bullets={exp.bullets}
                            index={index}
                        />
                    </div>
                ))}
            </div>
        </motion.div>
    )
}

export default ExperienceSection;