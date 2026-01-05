import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const leftNavPages = [
    { name: 'Home', path: '/' },
    { name: 'Résumé', path: '/resume' },
]

const rightNavPages = [
    { name: 'Contact', path: '/contact' },
]

function NavBar() {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;

    return (
        <motion.nav
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="mt-16 sticky top-4 z-50 w-full max-w-[1000px] px-4"
            style={{ position: 'sticky', top: '16px' }}
        >
            <div className="bg-gray-800/50 p-4 rounded-xl backdrop-blur-md shadow-lg border border-white/10">
                <div className="flex justify-between items-center">
                    {/* Left side - Home & Resume */}
                    <div className="flex gap-6 lg:gap-12">
                        {leftNavPages.map((page) => (
                            <Link to={page.path} key={page.name} className={`font-medium text-xl transition duration-300 ease-in-out ${isActive(page.path) ? 'text-purple-500' : 'text-gray-200 hover:text-purple-400'}`}>{page.name}</Link>
                        ))}
                    </div>

                    {/* Right side - Contact */}
                    <div className="flex gap-6 lg:gap-12">
                        {rightNavPages.map((page) => (
                            <Link to={page.path} key={page.name} className={`font-medium text-xl transition duration-300 ease-in-out ${isActive(page.path) ? 'text-purple-500' : 'text-gray-200 hover:text-purple-400'}`}>{page.name}</Link>
                        ))}
                    </div>
                </div>
            </div>
        </motion.nav>
    )
}

export default NavBar;