import React from 'react';
import { motion } from 'framer-motion';

const TelemetryBar = ({ 
  label, 
  value, 
  maxValue = 100, 
  unit = "%", 
  color = "f1-cyan",
  delay = 0 
}) => {
  const percentage = (value / maxValue) * 100;

  return (
    <div className="mb-6 last:mb-0">
      <div className="flex justify-between items-center mb-2 font-technical text-xs tracking-widest uppercase">
        <span className="text-f1-white/60">{label}</span>
        <span className={`text-${color} font-bold`}>{value}{unit}</span>
      </div>
      
      <div className="relative h-4 bg-f1-black/50 border border-white/5 p-[2px] overflow-hidden group">
        {/* Background segments */}
        <div className="absolute inset-0 flex gap-[2px] opacity-10">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="flex-1 bg-white/20 h-full" />
          ))}
        </div>

        {/* Foreground Progress Mask */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay, ease: "easeOut" }}
          className={`h-full relative overflow-hidden bg-gradient-to-r from-${color}/20 via-${color}/80 to-${color} group-hover:shadow-[0_0_15px_rgba(0,255,204,0.4)] transition-shadow duration-500`}
        >
          {/* Animated Glint */}
          <motion.div
            animate={{ x: ['-200%', '200%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          />
        </motion.div>

        {/* Scanning Pointer */}
        <motion.div
          initial={{ left: 0 }}
          whileInView={{ left: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay, ease: "easeOut" }}
          className="absolute top-0 bottom-0 w-[2px] bg-white shadow-[0_0_8px_white] z-10"
        />
      </div>
    </div>
  );
};

export default TelemetryBar;
