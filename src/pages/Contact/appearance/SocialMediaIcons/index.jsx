import { SiGithub, SiLinkedin, SiGmail } from "react-icons/si";

function SocialMediaIcons() {
    return (
        <div className='flex flex-col gap-4 font-semibold'>
            <div className='flex flex-row gap-4 items-center'>
                <a href="https://www.linkedin.com/in/colin-perry-499304180/" target="_blank" rel="noopener noreferrer">
                    <SiLinkedin className='w-8 h-8 opacity-100 hover:shadow-sm hover:opacity-60 transition duration-300' />
                </a>
                <a href="https://www.linkedin.com/in/colin-perry-499304180/" target="_blank" rel="noopener noreferrer">
                    <h1 className='text-purple-400 hover:text-purple-500 transition duration-300'>Colin Perry</h1>
                </a>
            </div>
            <div className='flex flex-row gap-4 items-center'>
                <a href="https://github.com/17ColinMiPerry" target="_blank" rel="noopener noreferrer">
                    <SiGithub className='w-8 h-8 opacity-100 hover:shadow-sm hover:opacity-60 transition duration-300' />
                </a>
                <a href="https://github.com/17ColinMiPerry" target="_blank" rel="noopener noreferrer">
                    <h1 className='text-purple-400 hover:text-purple-500 transition duration-300'>17ColinMiPerry</h1>
                </a>
            </div>
            <div className='flex flex-row gap-4 items-center'>
                <a href="mailto:17colinmiperry@gmail.com">
                    <SiGmail className='w-8 h-8 opacity-100 hover:shadow-sm hover:opacity-60 transition duration-300' />
                </a>
                <a href="mailto:17colinmiperry@gmail.com">
                    <h1 className='text-purple-400 hover:text-purple-500 transition duration-300'>17colinmiperry@gmail.com</h1>
                </a>
            </div>
        </div>
    )
}

export default SocialMediaIcons;