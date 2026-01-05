import { useEffect } from 'react';
import { motion } from 'framer-motion';

import AboutMeText from './appearance/AboutMeText';
import ProfilePhoto from './appearance/ProfilePhoto';
import SocialMediaIcons from './appearance/SocialMediaIcons';
import TechStack from './appearance/TechStack';
import ExperienceSection from './appearance/ExperienceSection';
import ProjectBlurb from './appearance/ProjectBlurb';

// Reusable section divider component
const SectionDivider = () => (
  <div className="w-full max-w-[600px] h-px bg-gradient-to-r from-transparent via-gray-600/30 to-transparent my-4" />
);

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='w-full flex flex-col items-center justify-center'>
      <div className='flex flex-col max-w-[1000px] w-full justify-center items-center mt-16 px-4 lg:px-8 gap-12'>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, delay: 0.25 }}
        >
          <div className='flex flex-col lg:flex-row w-full justify-center items-center lg:justify-start lg:items-start'>
            <div className='flex order-2 lg:order-1 lg:w-3/5 p-4 flex-col justify-center items-center lg:justify-start lg:items-start gap-8'>
              <AboutMeText />
              <SocialMediaIcons />
            </div>
            <div className='flex order-1 lg:order-2 lg:w-2/5 p-4 justify-center items-center mb-8 lg:mb-0'>
              <ProfilePhoto />
            </div>
          </div>
        </motion.div>

        <SectionDivider />

        {/* Tech Stack Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, delay: 0.50 }}
          className='w-full'
        >
          <TechStack />
        </motion.div>

        <SectionDivider />

        {/* Projects Section */}
        <div className='max-w-[800px] w-full'>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: 0.75 }}
            className='w-full'
          >
            <ProjectBlurb />
          </motion.div>
        </div>

        <SectionDivider />

        {/* Experience Section */}
        <ExperienceSection />

      </div>
    </div>
  )
}

export default Home;