import React, { useState, useEffect } from 'react';
import { motion, useScroll, useVelocity, useTransform, useSpring } from 'framer-motion';

const ApexMeter = () => {
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  
  // Transform velocity to G-Force like values
  const gForceX = useTransform(scrollVelocity, [-2000, 2000], [-15, 15]);
  const gForceY = useTransform(scrollVelocity, [-2000, 2000], [5, -5]);
  
  const springX = useSpring(gForceX, { damping: 20, stiffness: 100 });
  const springY = useSpring(gForceY, { damping: 20, stiffness: 100 });

  const [displayG, setDisplayG] = useState(1.0);

  useEffect(() => {
    return scrollVelocity.onChange((v) => {
      const g = 1.0 + Math.abs(v) / 1000;
      setDisplayG(parseFloat(g.toFixed(1)));
    });
  }, [scrollVelocity]);

  return (
    <div className="fixed bottom-12 right-12 z-50 hidden lg:block font-technical">
      <div className="relative w-32 h-32 flex items-center justify-center">
        {/* Outer Ring */}
        <div className="absolute inset-0 border border-f1-white/10 rounded-full" />
        <div className="absolute inset-2 border border-f1-cyan/20 rounded-full" />
        
        {/* Crosshair */}
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-[1px] bg-f1-white/5" />
            <div className="absolute h-full w-[1px] bg-f1-white/5" />
        </div>

        {/* Moving G-Dot */}
        <motion.div 
          style={{ x: springX, y: springY }}
          className="w-3 h-3 bg-f1-cyan rounded-full shadow-[0_0_15px_#00ffcc] z-10"
        />

        {/* Labels */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[8px] text-f1-white/40 tracking-widest">LAT.G</div>
        <div className="absolute -left-8 top-1/2 -translate-y-1/2 text-[8px] text-f1-white/40 tracking-widest origin-center -rotate-90">LONG.G</div>

        {/* Value Display */}
        <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 flex flex-col items-center">
            <span className="text-xl font-bold text-f1-white">{displayG} <span className="text-f1-cyan text-[10px]">G</span></span>
            <div className="h-[2px] w-12 bg-f1-white/10 relative overflow-hidden">
                <motion.div 
                    animate={{ width: `${(displayG-1)*100}%` }}
                    className="absolute h-full bg-f1-red"
                />
            </div>
        </div>
      </div>
    </div>
  );
};

export default ApexMeter;
