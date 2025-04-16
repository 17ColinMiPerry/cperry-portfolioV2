import Experience from './Experience';
import ExperienceData from './Experience/ExperienceData';

function ExperienceSection() {
    return (
        <div className='flex flex-col gap-16 justify-start items-start w-full'>
            <h1 className='text-4xl font-bold self-center'>
                Experience
            </h1>

            {ExperienceData.map((exp, index) => (
                <Experience
                    key={index}
                    title={exp.title}
                    date={exp.date}
                    bullets={exp.bullets}
                    isEven={index % 2 !== 0}
                />
            ))}
        </div>
    )
}

export default ExperienceSection;