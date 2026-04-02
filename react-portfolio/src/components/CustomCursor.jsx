import React, { useEffect, useRef, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isF1, setIsF1] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      const target = e.target.closest('a, button, .group, [data-cursor="f1"]');
      if (target) {
        setIsHovering(true);
        if (target.getAttribute('data-cursor') === 'f1') {
          setIsF1(true);
        }
      }
    };

    const handleMouseOut = (e) => {
      const target = e.target.closest('a, button, .group, [data-cursor="f1"]');
      if (target) {
        setIsHovering(false);
        setIsF1(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Reticle */}
      <motion.div
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        className={`fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center transition-all duration-300 ${
          isHovering ? 'w-16 h-16 opacity-100' : 'w-8 h-8 opacity-40'
        }`}
      >
        <div className={`absolute inset-0 border border-f1-cyan/30 rounded-sm transform rotate-45 transition-all duration-300 ${isHovering ? 'scale-125 border-f1-cyan' : 'scale-100'}`} />
        <div className={`absolute inset-0 border border-f1-cyan/10 transition-all duration-300 ${isHovering ? 'scale-150 rotate-90 border-f1-cyan/40' : 'scale-100'}`} />
        
        {/* Technical Markings */}
        {isHovering && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute top-[-20px] left-[-20px] font-technical text-[8px] text-f1-cyan"
          >
            LOCKED
          </motion.div>
        )}
      </motion.div>

      {/* Inner Dot */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        className={`fixed top-0 left-0 pointer-events-none z-[9999] w-1 h-1 bg-f1-cyan rounded-full shadow-[0_0_8px_#00ffcc]`}
      />
    </>
  );
};

export default CustomCursor;
