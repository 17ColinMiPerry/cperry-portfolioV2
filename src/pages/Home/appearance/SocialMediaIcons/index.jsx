import { SiGithub, SiLinkedin, SiGmail } from "react-icons/si";
import { Link } from 'react-router-dom';

function SocialMediaIcons() {
    return (
        <div className='flex flex-row gap-4'>
            <Link to="https://www.linkedin.com/in/colin-perry-499304180/">
                <SiLinkedin className='w-8 h-8 opacity-100 hover:opacity-60 transition duration-300' />
            </Link>
            <Link to="https://github.com/17ColinMiPerry">
                <SiGithub className='w-8 h-8 opacity-100 hover:opacity-60 transition duration-300' />
            </Link>
            <Link to="mailto:cperry27@g.ucla.edu">
                <SiGmail className='w-8 h-8 opacity-100 hover:opacity-60 transition duration-300' />
            </Link>
        </div>
    )
}

export default SocialMediaIcons;