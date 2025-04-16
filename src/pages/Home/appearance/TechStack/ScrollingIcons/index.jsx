import Marquee from 'react-fast-marquee';

import c from '../assets/c-.png';
import js from '../assets/js.png';
import python from '../assets/python.png';
import solidity from '../assets/solidity-logo.png';
import github from '../assets/github.svg';
import react from '../assets/react.svg';
import vite from '../assets/vite.svg';

const techIcons = [
    { name: 'C', logo: c },
    { name: 'JavaScript', logo: js },
    { name: 'Python', logo: python },
    { name: 'Solidity', logo: solidity },
    { name: 'GitHub', logo: github },
    { name: 'React', logo: react },
    { name: 'Vite', logo: vite },
]

function ScrollingIcons() {
    return (
        <div className="overflow-hidden w-full mx-auto p-4">
            <Marquee 
                loop={0} 
                speed={50} 
                gradient={false}
                delay={0}
                direction="left"
                className="py-6"
            >
                {techIcons.map((icon, index) => (
                    <img 
                        key={`${icon.name}-${index}`}
                        src={icon.logo} 
                        alt={icon.name} 
                        className='h-16 md:h-24 inline-block mx-6 md:mx-12 hover:drop-shadow-[0_0_20px_rgba(59,130,246,0.9)]' 
                    />
                ))}
                
                {techIcons.map((icon, index) => (
                    <img 
                        key={`${icon.name}-duplicate-${index}`}
                        src={icon.logo} 
                        alt={icon.name} 
                        className='h-16 md:h-24 inline-block mx-6 md:mx-12 hover:drop-shadow-[0_0_20px_rgba(59,130,246,0.9)]' 
                    />
                ))}
            </Marquee>
        </div>
    )
}

export default ScrollingIcons;