import { SiGithub, SiLinkedin, SiGmail } from "react-icons/si";

function SocialMediaIcons() {
    return (
        <div className='flex flex-row gap-4'>
            <a href="https://www.linkedin.com/in/colin-perry-499304180/" target="_blank" rel="noopener noreferrer">
                <SiLinkedin className='w-8 h-8 opacity-100 hover:opacity-60 transition duration-300' />
            </a>
            <a href="https://github.com/17ColinMiPerry" target="_blank" rel="noopener noreferrer">
                <SiGithub className='w-8 h-8 opacity-100 hover:opacity-60 transition duration-300' />
            </a>
            <a href="mailto:17colinmiperry@gmail.com">
                <SiGmail className='w-8 h-8 opacity-100 hover:opacity-60 transition duration-300' />
            </a>
        </div>
    )
}

export default SocialMediaIcons;