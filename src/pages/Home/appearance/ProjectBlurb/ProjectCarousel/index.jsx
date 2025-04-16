import { Carousel } from 'flowbite-react';

function ProjectCarousel() {
    return (
        <div className="max-w-[1100px] w-full h-[200px] overflow-hidden">
            <Carousel pauseOnHover={true} className="[&>*]:overflow-hidden">
                <div className="flex w-full h-full justify-center items-center bg-gray-800/50 border border-white/10 cursor-default">
                    <h1 className="text-white text-lg font-semibold">Semiconductor Wafer Defect Detection</h1>
                </div>
                <div className="flex w-full h-full justify-center items-center bg-gray-800/50 border border-white/10 cursor-default">
                    <h1>Project 2</h1>
                </div>
                <div className="flex w-full h-full justify-center items-center bg-gray-800/50 border border-white/10 cursor-default">
                    <h1>Project 3</h1>
                </div>
                
            </Carousel>
        </div>
    )
}

export default ProjectCarousel;