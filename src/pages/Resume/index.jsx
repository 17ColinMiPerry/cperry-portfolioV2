import { motion } from 'framer-motion';
import { useEffect } from 'react';

function Resume() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="w-full flex flex-col items-center justify-center">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col max-w-[1000px] w-full items-center mt-16 px-4 lg:px-8 gap-8"
            >
                <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-4">
                    {/* Stats row */}
                    <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-gray-400">
                        <span className="flex items-center gap-1.5">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                            </svg>
                            UCLA Engineering
                        </span>
                        <span className="text-gray-600">•</span>
                        <span className="flex items-center gap-1.5">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            Los Angeles
                        </span>
                        <span className="text-gray-600">•</span>
                        <span className="text-green-400 flex items-center gap-1.5">
                            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                            Open to opportunities
                        </span>
                    </div>

                    <a
                        href="/ColinPerryResume.pdf"
                        download="ColinPerry_Resume.pdf"
                        className="flex items-center gap-2 px-5 py-2.5 bg-purple-600 hover:bg-purple-500 
                                   text-white font-medium rounded-lg transition-all duration-300
                                   hover:shadow-lg hover:shadow-purple-500/30"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Download PDF
                    </a>
                </div>

                {/* PDF Viewer */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="w-full bg-gray-800/50 rounded-xl backdrop-blur-md border border-white/10 overflow-hidden"
                >
                    <embed
                        src="/ColinPerryResume.pdf"
                        type="application/pdf"
                        className="w-full h-[80vh] min-h-[600px]"
                    />
                </motion.div>

                {/* Fallback for mobile/browsers without PDF support */}
                <p className="text-gray-400 text-sm text-center">
                    PDF not displaying? <a href="/ColinPerryResume.pdf" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 underline">Open in new tab</a>
                </p>
            </motion.div>
        </div>
    );
}

export default Resume;
