import { motion } from 'framer-motion';

const projects = [
    {
        name: "FitFolio",
        link: "https://github.com/17ColinMiPerry/fitfolio-v3",
        description: "A personal fitness tracking system built with a React and TailwindCSS frontend and and Express and SQLite backend for structured exercise logging and and progress tracking",
        tech: ["React", "Tailwind", "Express", "SQLite"]
    },
    {
        name: "AnythingTUI",
        link: "https://github.com/17ColinMiPerry/anything-tui",
        description: "A TUI built in Golang + Bubbletea that provids full interactive to AnythingLLM workspaces, enabling highly configurable multi-workspace LLM interaction directly from the terminal",
        tech: ["Go", "JavaScript", "React", "Express"]
    },
    {
        name: "Journal Club",
        link: "https://github.com/17ColinMiPerry/journal-clubV2",
        description: "A real-time collaboration platform for research groups built with React and TypeScript, Express, Firebase auth, and Firestore live synchronization",
        tech: ["TypeScript", "React", "Express", "Firebase", "Firestore"]
    },
    {
        name: "Wafer Defect Detection CNN",
        link: "https://github.com/17ColinMiPerry/wafer-defect-CNN",
        description: "A Convolutional Neural Network in Python using PyTorch trained to detect and classify defects and other anomalies on the surface of semiconductor wafers",
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
            className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full p-4"
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
                               flex flex-col items-start cursor-pointer h-full"
                >
                    <h2 className="text-xl font-semibold text-white">{project.name}</h2>
                    <p className="text-gray-400 mt-2">{project.description}</p>

                    {/* Bottom section - fixed to bottom of card */}
                    <div className="mt-auto pt-4 w-full">
                        {/* Tech badges */}
                        <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech) => (
                                <span key={tech} className="tech-badge">{tech}</span>
                            ))}
                        </div>

                        <div className="mt-3 text-purple-400 text-sm flex items-center group">
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
                    </div>
                </motion.a>
            ))}
        </motion.div>
    )
}
