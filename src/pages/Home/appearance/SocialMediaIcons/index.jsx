import { SiGithub, SiLinkedin, SiGmail } from "react-icons/si";

function SocialMediaIcons() {
    return (
        <div className='flex flex-row gap-5'>
            <a
                href="https://www.linkedin.com/in/colin-perry-499304180/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-300 hover:scale-110"
            >
                <SiLinkedin className='w-8 h-8 text-gray-300 hover:text-[#0A66C2] transition-colors duration-300' />
            </a>
            <a
                href="https://github.com/17ColinMiPerry"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-300 hover:scale-110"
            >
                <SiGithub className='w-8 h-8 text-gray-300 hover:text-purple-400 transition-colors duration-300' />
            </a>
            <a
                href="mailto:17colinmiperry@gmail.com"
                className="transition-all duration-300 hover:scale-110"
            >
                <SiGmail className='w-8 h-8 text-gray-300 hover:text-[#EA4335] transition-colors duration-300' />
            </a>
        </div>
    )
}

export default SocialMediaIcons;