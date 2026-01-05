import { motion } from 'framer-motion';

const projects = [
    {
        name: "FitFolio",
        link: "https://github.com/17ColinMiPerry/fitfolio-v3",
        description: "A fitness tracker build with a React/Tailwind frontend and a an Express/SQLite backend that allows users to track their workouts and progress",
        tech: ["React", "Tailwind", "Express", "SQLite"]
    },
    {
        name: "CNN for Semiconductor Wafer Defect Detection",
        link: "https://github.com/17ColinMiPerry/wafer-defect-CNN",
        description: "Convolutional Neural Network in Python using PyTorch trained to detect and classify defects and other anomalies on the surface of semiconductor wafers",
        tech: ["Python", "PyTorch", "NumPy", "CNN"]
    },
    {
        name: "Portfolio Website",
        link: "https://github.com/17ColinMiPerry/cperry-portfolioV2",
        description: "This website! Built with React and Tailwind CSS to showcase my projects and skills",
        tech: ["React", "Tailwind", "Vite", "Framer Motion"]
    }
];

export default function Projects() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-4 w-full p-4"
        >
            {projects.map((project, index) => (
                <motion.a
                    key={project.name}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="card-shine bg-gray-800/50 p-5 rounded-xl backdrop-blur-md shadow-lg border border-white/10 
                               hover:bg-gray-700/50 hover:border-purple-500/30 hover:shadow-purple-500/10 hover:shadow-xl
                               hover:-translate-y-1 transition-all duration-300
                               flex flex-col items-start cursor-pointer"
                >
                    <h2 className="text-xl font-semibold text-white">{project.name}</h2>
                    <p className="text-gray-400 mt-2">{project.description}</p>

                    {/* Tech badges */}
                    <div className="flex flex-wrap gap-2 mt-3">
                        {project.tech.map((tech) => (
                            <span key={tech} className="tech-badge">{tech}</span>
                        ))}
                    </div>

                    <div className="mt-4 text-purple-400 text-sm flex items-center group">
                        <span>View on GitHub</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </div>
                </motion.a>
            ))}
        </motion.div>
    )
}
