import { motion } from 'framer-motion';

function Experience({ title, subtitle, date, bullets, index }) {
    return (
        <motion.div
            className="flex flex-col gap-3 justify-start items-start w-full"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <div className="flex flex-col sm:flex-row justify-between w-full gap-2">
                <div className='flex flex-col'>
                    <h1 className='text-xl font-bold text-white'>{title}</h1>
                    <h2 className='text-lg font-medium text-purple-400'>{subtitle}</h2>
                </div>
                <div className='shrink-0 self-start'>
                    <span className='font-medium text-sm text-gray-300 bg-gray-800/80 rounded-lg px-3 py-1.5 whitespace-nowrap border border-gray-700/50'>{date}</span>
                </div>
            </div>

            {/* Styled bullet points */}
            <ul className="flex flex-col gap-2.5 w-full mt-2 pl-4">
                {bullets.map((bullet, idx) => (
                    <li key={idx} className="text-gray-400 text-base leading-relaxed relative pl-5 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-purple-500/60 before:rounded-full">
                        {bullet}
                    </li>
                ))}
            </ul>
        </motion.div>
    );
}

export default Experience; 