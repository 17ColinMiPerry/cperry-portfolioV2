import Experience from './Experience';

const experienceData = [
    {
        title: "Experience 1 - I am making this line very long to see how it looks",
        date: "August 2020 - December 2021",
        bullets: [
            "This is the first bullet point where i can write about things that i did at this job",
            "This is the second bullet point where i can write about other things i may have done at this job",
            "This is the third bullet point where i can write even more things about the things i may have done at this job"
        ]
    },
    {
        title: "Experience 2",
        date: "August 2020 - December 2021",
        bullets: [
            "This is the first bullet point",
            "This is the second bullet point",
            "This is the third bullet point"
        ]
    },
    {
        title: "Experience 3",
        date: "August 2020 - December 2021",
        bullets: [
            "This is the first bullet point",
            "This is the second bullet point",
            "This is the third bullet point"
        ]
    },
    {
        title: "Experience 4",
        date: "August 2020 - December 2021",
        bullets: [
            "This is the first bullet point :)",
            "This is the second bullet point",
            "This is the third bullet point"
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
                    date={exp.date}
                    bullets={exp.bullets}
                    isEven={index % 2 !== 0}
                />
            ))}
        </div>
    )
}

export default ExperienceSection;