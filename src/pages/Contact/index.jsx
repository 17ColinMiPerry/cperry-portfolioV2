import { useEffect } from 'react';
import { motion } from 'framer-motion';

import ContactText from './appearance/ContactText';
import ContactForm from './appearance/ContactForm';

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-full max-w-[900px] min-h-[80vh] relative z-10 flex flex-col items-center justify-center px-4 py-4">
        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, delay: 0.25 }}
        >
          <ContactText />
        </motion.div>
        
        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, delay: 0.50 }}
        >
          <ContactForm />
        </motion.div>
      </div>
    </div>
  )
}

export default Contact;