import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

function Background() {
  const controlsTop = useAnimation();
  const controlsBottom = useAnimation();
  const controlsCenter = useAnimation();
  const controlsTopLeft = useAnimation();
  const controlsBottomRight = useAnimation();

  useEffect(() => {
    const moveTopBlob = () => {
      controlsTop.start({
        top: `${Math.random() * 40 - 20}%`,
        right: `${Math.random() * 40 - 20}%`,
        transition: { duration: 5, ease: 'easeInOut' },
      })
    }
    
    const moveBottomBlob = () => {
      controlsBottom.start({
        bottom: `${Math.random() * 40 - 20}%`,
        left: `${Math.random() * 40 - 20}%`,
        transition: { duration: 7, ease: 'easeInOut' },
      })
    }
    
    const moveCenterBlob = () => {
      controlsCenter.start({
        top: `${Math.random() * 60 + 20}%`,
        left: `${Math.random() * 60 + 20}%`,
        transition: { duration: 8, ease: 'easeInOut' },
      })
    }
    
    const moveTopLeftBlob = () => {
      controlsTopLeft.start({
        top: `${Math.random() * 30}%`,
        left: `${Math.random() * 30}%`,
        transition: { duration: 6, ease: 'easeInOut' },
      })
    }
    
    const moveBottomRightBlob = () => {
      controlsBottomRight.start({
        bottom: `${Math.random() * 30}%`,
        right: `${Math.random() * 30}%`,
        transition: { duration: 9, ease: 'easeInOut' },
      })
    }
    
    moveTopBlob();
    moveBottomBlob();
    moveCenterBlob();
    moveTopLeftBlob();
    moveBottomRightBlob();
    
    const intervalTop = setInterval(moveTopBlob, 5000);
    const intervalBottom = setInterval(moveBottomBlob, 7000);
    const intervalCenter = setInterval(moveCenterBlob, 8000);
    const intervalTopLeft = setInterval(moveTopLeftBlob, 6000);
    const intervalBottomRight = setInterval(moveBottomRightBlob, 9000);

    return () => {
      clearInterval(intervalTop);
      clearInterval(intervalBottom);
      clearInterval(intervalCenter);
      clearInterval(intervalTopLeft);
      clearInterval(intervalBottomRight);
    };
  }, [controlsTop, controlsBottom, controlsCenter, controlsTopLeft, controlsBottomRight]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Mobile blobs (smallest size) - visible on all screens */}
      <div 
        className="absolute top-[-10%] left-[-20%] h-[350px] w-[350px] md:h-[400px] md:w-[400px] lg:h-[450px] lg:w-[450px] rounded-full z-0" 
        style={{ 
          maxWidth: '100vw',
          background: 'radial-gradient(circle farthest-side, rgba(255,0,182,0.2), rgba(255,255,255,0))'
        }}
      />
      
      <div 
        className="absolute bottom-[-10%] right-[-20%] h-[250px] w-[250px] md:h-[300px] md:w-[300px] lg:h-[350px] lg:w-[350px] rounded-full z-0" 
        style={{ 
          maxWidth: '100vw',
          background: 'radial-gradient(circle farthest-side, rgba(0,182,255,0.2), rgba(255,255,255,0))'
        }}
      />

      <motion.div
        animate={controlsTop}
        initial={{ top: '-10%', right: '-20%' }}
        className="absolute h-[450px] w-[450px] md:h-[500px] md:w-[500px] lg:h-[600px] lg:w-[600px] rounded-full z-0"
        style={{ 
          maxWidth: '100vw',
          background: 'radial-gradient(circle farthest-side, rgba(255,0,182,0.2), rgba(255,255,255,0))'
        }}
      />
      
      <motion.div
        animate={controlsBottom}
        initial={{ bottom: '-10%', left: '-20%' }}
        className="absolute h-[400px] w-[400px] md:h-[450px] md:w-[450px] lg:h-[550px] lg:w-[550px] rounded-full z-0"
        style={{ 
          maxWidth: '100vw',
          background: 'radial-gradient(circle farthest-side, rgba(0,182,255,0.2), rgba(255,255,255,0))'
        }}
      />

      {/* Medium screen blobs - visible on md screens and up */}
      <div className="hidden md:block">
        {/* Higher opacity versions of the main blobs */}
        <div 
          className="absolute top-[-10%] left-[-20%] h-[400px] w-[400px] lg:h-[450px] lg:w-[450px] rounded-full z-0" 
          style={{ 
            maxWidth: '100vw',
            background: 'radial-gradient(circle farthest-side, rgba(255,0,182,0.2), rgba(255,255,255,0))'
          }}
        />
        
        <div 
          className="absolute bottom-[-10%] right-[-20%] h-[300px] w-[300px] lg:h-[350px] lg:w-[350px] rounded-full z-0" 
          style={{ 
            maxWidth: '100vw',
            background: 'radial-gradient(circle farthest-side, rgba(0,182,255,0.2), rgba(255,255,255,0))'
          }}
        />

        <motion.div
          animate={controlsTop}
          initial={{ top: '-10%', right: '-20%' }}
          className="absolute h-[500px] w-[500px] lg:h-[600px] lg:w-[600px] rounded-full z-0"
          style={{ 
            maxWidth: '100vw',
            background: 'radial-gradient(circle farthest-side, rgba(255,0,182,0.2), rgba(255,255,255,0))'
          }}
        />
        
        <motion.div
          animate={controlsBottom}
          initial={{ bottom: '-10%', left: '-20%' }}
          className="absolute h-[450px] w-[450px] lg:h-[550px] lg:w-[550px] rounded-full z-0"
          style={{ 
            maxWidth: '100vw',
            background: 'radial-gradient(circle farthest-side, rgba(0,182,255,0.2), rgba(255,255,255,0))'
          }}
        />
      </div>

      {/* Large screen additional blobs - visible only on lg screens and up */}
      <div className="hidden lg:block">
        <motion.div
          animate={controlsTopLeft}
          initial={{ top: '10%', left: '10%' }}
          className="absolute h-[400px] w-[400px] rounded-full z-0"
          style={{ 
            maxWidth: '100vw',
            background: 'radial-gradient(circle farthest-side, rgba(0,182,255,0.18), rgba(255,255,255,0))'
          }}
        />

        <motion.div
          animate={controlsBottomRight}
          initial={{ bottom: '10%', right: '10%' }}
          className="absolute h-[500px] w-[500px] rounded-full z-0"
          style={{ 
            maxWidth: '100vw',
            background: 'radial-gradient(circle farthest-side, rgba(255,0,182,0.18), rgba(255,255,255,0))'
          }}
        />
      </div>
    </div>
  );
}

export default Background; 