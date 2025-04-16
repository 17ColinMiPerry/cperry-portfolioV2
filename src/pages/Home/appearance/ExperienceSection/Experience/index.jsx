import { motion } from 'framer-motion';

function Experience({ title, date, bullets, isEven }) {
    return (
        <motion.div 
            className={`flex flex-col gap-1 justify-start items-start w-full md:self-${isEven ? 'end' : 'start'}`}
            initial={{ opacity: 0, x: isEven ? 100 : -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
        >
            <div className="flex flex-col sm:flex-row gap-2 justify-between w-full">
                <h1 className='text-xl font-bold mr-2 sm:mr-4 break-words'>{title}</h1>
                <div className='shrink-0 self-start mt-1 sm:mt-0'>
                    <span className='font-semibold text-gray-400 bg-gray-700/50 rounded-md px-2 py-1 whitespace-nowrap'>{date}</span>
                </div>
            </div>
            <div className="flex flex-col w-full">
                {bullets.map((bullet, index) => (
                    <p key={index}> {'\u2022'}{bullet}</p>
                ))}
            </div>
        </motion.div>
    );
}

export default Experience; 