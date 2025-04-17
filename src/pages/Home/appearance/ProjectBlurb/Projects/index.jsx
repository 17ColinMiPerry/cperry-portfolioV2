import { motion } from 'framer-motion';

const projects = [
    {
        name: "CNN for Semiconductor Wafer Defect Detection",
        link: "https://github.com/17ColinMiPerry/wafer-defect-CNN",
        description: "Convolutional Neural Network in Python using PyTorch trained to detect and classify defects and other anomalies on the surface of semiconductor wafers"
    },
    {
        name: "Portfolio Website",
        link: "https://github.com/17ColinMiPerry/cperry-portfolioV2",
        description: "This website! Built with React and Tailwind CSS to showcase my projects and skills"
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
                    className="bg-gray-800/50 p-4 rounded-xl backdrop-blur-md shadow-lg border border-white/10 
                               hover:bg-gray-700/50 hover:border-purple-500/30 transition-all duration-300
                               flex flex-col items-start cursor-pointer"
                >
                    <h2 className="text-xl font-semibold text-white">{project.name}</h2>
                    <p className="text-gray-400 mt-1">{project.description}</p>
                    <div className="mt-2 text-purple-400 text-sm flex items-center">
                        <span>View on GitHub</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </div>
                </motion.a>
            ))}
        </motion.div>
    )
}
