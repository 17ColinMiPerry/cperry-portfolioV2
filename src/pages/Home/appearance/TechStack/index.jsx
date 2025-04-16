import ScrollingIcons from './ScrollingIcons';

function TechStack() {
    return (
        <div className='flex flex-col items-center justify-center gap-12'>
            <h1 className='text-4xl font-bold'>My Tech Stack</h1>
            <ScrollingIcons />
        </div>
    )
}

export default TechStack;