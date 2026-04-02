import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const F1Loader = ({ onComplete }) => {
  const [lights, setLights] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (lights < 5) {
      const timer = setTimeout(() => {
        setLights(lights + 1);
      }, 500);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setIsVisible(false);
        if (onComplete) onComplete();
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [lights, onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed inset-0 z-[9999] bg-f1-black flex flex-col items-center justify-center"
        >
          <div className="flex gap-4 p-8 rounded-2xl bg-f1-surface border border-f1-surface-light shadow-2xl">
            {[0, 1, 2, 3, 4].map((i) => (
              <div key={i} className="flex flex-col gap-2">
                {/* Red Lights */}
                <div 
                  className={`w-12 h-12 rounded-full border-2 border-f1-surface-light transition-all duration-300 ${
                    lights > i ? 'bg-f1-red shadow-[0_0_20px_rgba(225,6,0,0.8)]' : 'bg-gray-900'
                  }`}
                />
                <div 
                  className={`w-12 h-12 rounded-full border-2 border-f1-surface-light transition-all duration-300 ${
                    lights > i ? 'bg-f1-red shadow-[0_0_20px_rgba(225,6,0,0.8)]' : 'bg-gray-900'
                  }`}
                />
              </div>
            ))}
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-8 font-technical text-f1-white tracking-[0.3em] uppercase text-sm"
          >
            System Initialization... {lights * 20}%
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default F1Loader;
