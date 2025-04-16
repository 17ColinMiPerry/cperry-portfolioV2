import Projects from './Projects';
import { motion } from 'framer-motion';

function ProjectBlurb() {
    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: 0.50 }}
            className="flex flex-col w-full h-full justify-center items-center"
        >
            <div className="flex flex-col w-full justify-center items-center p-6">
                <h1 className="text-4xl font-bold">Projects</h1>
                <p className="text-gray-400 text-lg font-semibold pt-4">Here are some things I'm proud of - </p>
                <p className="text-gray-400 text-lg font-semibold">Click on a project to learn more!</p>
            </div>
            <Projects />
        </motion.div>
    )
}

export default ProjectBlurb;