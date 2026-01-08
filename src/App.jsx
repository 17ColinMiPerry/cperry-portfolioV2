import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { Analytics } from '@vercel/analytics/react';
import NavBar from './components/NavBar';
import Background from './components/Background';
import Home from './pages/Home';
import Contact from './pages/Contact/index';
import Resume from './pages/Resume';
import Footer from './components/footer';

function App() {
  useEffect(() => {
    // Initialize EmailJS with your public key from environment variable
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  return (
    <div className='min-h-screen w-full bg-slate-950 text-white'>
      <Background />
      <div className="relative z-10 flex flex-col items-center w-full">
        <Router>
          <NavBar />
          <div className="w-full overflow-x-hidden">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/resume" element={<Resume />} />
            </Routes>
          </div>
        </Router>
        <Footer />
      </div>
      <Analytics />
    </div>
  )
}

export default App


