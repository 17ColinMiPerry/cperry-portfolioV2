import { SiGithub, SiLinkedin, SiGmail } from "react-icons/si";
import { Link } from 'react-router-dom';

function SocialMediaIcons() {
    return (
        <div className='flex flex-col gap-4 font-semibold'>
            <div className='flex flex-row gap-4 items-center'>
                <Link to="https://www.linkedin.com/in/colin-perry-499304180/">
                    <SiLinkedin className='w-8 h-8 opacity-100 hover:shadow-sm hover:opacity-60 transition duration-300' />
                </Link>
                <Link to="https://www.linkedin.com/in/colin-perry-499304180/">
                    <h1 className='text-purple-400 hover:text-purple-500 transition duration-300'>Colin Perry</h1>
                </Link>
            </div>
            <div className='flex flex-row gap-4 items-center'>
                <Link to="https://github.com/17ColinMiPerry">
                    <SiGithub className='w-8 h-8 opacity-100 hover:shadow-sm hover:opacity-60 transition duration-300' />
                </Link>
                <Link to="https://github.com/17ColinMiPerry">
                    <h1 className='text-purple-400 hover:text-purple-500 transition duration-300'>17ColinMiPerry</h1>
                </Link>
            </div>
            <div className='flex flex-row gap-4 items-center'>
                <Link to="mailto:cperry27@g.ucla.edu">
                    <SiGmail className='w-8 h-8 opacity-100 hover:shadow-sm hover:opacity-60 transition duration-300' />
                </Link>
                <Link to="mailto:cperry27@g.ucla.edu">
                    <h1 className='text-purple-400 hover:text-purple-500 transition duration-300'>Cperry27@g.ucla.edu</h1>
                </Link>
            </div>
        </div>
    )
}

export default SocialMediaIcons;