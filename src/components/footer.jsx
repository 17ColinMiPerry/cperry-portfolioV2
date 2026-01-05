import { SiGithub, SiLinkedin, SiGmail } from "react-icons/si";

function Footer() {
    return (
        <footer className='w-full bg-transparent text-white py-8 px-4 mt-16'>
            <div className="max-w-[1000px] mx-auto">
                {/* Gradient divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent mb-8" />

                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    {/* Tagline */}
                    <p className='text-gray-400 text-sm'>
                        Building products that make a difference.
                    </p>

                    {/* Social links */}
                    <div className='flex flex-row gap-4'>
                        <a
                            href="https://www.linkedin.com/in/colin-perry-499304180/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-[#0A66C2] transition-colors duration-300"
                        >
                            <SiLinkedin className='w-5 h-5' />
                        </a>
                        <a
                            href="https://github.com/17ColinMiPerry"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-purple-400 transition-colors duration-300"
                        >
                            <SiGithub className='w-5 h-5' />
                        </a>
                        <a
                            href="mailto:17colinmiperry@gmail.com"
                            className="text-gray-500 hover:text-[#EA4335] transition-colors duration-300"
                        >
                            <SiGmail className='w-5 h-5' />
                        </a>
                    </div>
                </div>

                {/* Contact note */}
                <p className='text-gray-500 text-xs text-center mt-6'>
                    Questions? Email <a href="mailto:cperry.webmaster@gmail.com" className='text-purple-400 hover:text-purple-300 transition-colors duration-300'>cperry.webmaster@gmail.com</a>
                </p>
            </div>
        </footer>
    )
}

export default Footer;
