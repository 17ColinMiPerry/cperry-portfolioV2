import Experience from './Experience';

const experienceData = [
    {
        title: "UCLA Nanolab",
        subtitle: "Process Development Engineer",
        date: "October 2023 - December 2024",
        bullets: [
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
        <div className='flex flex-col gap-16 justify-start items-start w-full'>
            <h1 className='text-4xl font-bold self-center'>
                Experience
            </h1>

            {experienceData.map((exp, index) => (
                <Experience
                    key={index}
                    title={exp.title}
                    subtitle={exp.subtitle}
                    date={exp.date}
                    bullets={exp.bullets}
                    isEven={index % 2 !== 0}
                />
            ))}
        </div>
    )
}

export default ExperienceSection;