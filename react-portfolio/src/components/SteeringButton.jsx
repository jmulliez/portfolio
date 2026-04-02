import React from 'react';
import { motion } from 'framer-motion';

const SteeringButton = ({ 
  label, 
  onClick, 
  color = "f1-cyan", 
  variant = "push", // "push" or "rotary"
  className = "" 
}) => {
  if (variant === "rotary") {
    return (
      <button 
        onClick={onClick}
        className={`group flex flex-col items-center gap-2 ${className}`}
      >
        <span className="text-[10px] font-technical font-bold text-f1-white/40 group-hover:text-f1-white transition-colors">{label}</span>
        <div className="relative w-12 h-12 rounded-full border-2 border-white/10 bg-f1-surface flex items-center justify-center p-2 group-hover:border-f1-cyan/40 transition-all">
            {/* The "Knob" */}
            <motion.div 
              whileTap={{ rotate: 45 }}
              className={`w-full h-full rounded-full border-4 border-${color}/40 flex items-center justify-center`}
            >
                <div className={`w-1 h-3 bg-${color} rounded-full`} />
            </motion.div>
            {/* Markers */}
            {[...Array(8)].map((_, i) => (
                <div 
                    key={i} 
                    className="absolute w-[1px] h-1 bg-white/10" 
                    style={{ 
                        top: '50%', 
                        left: '50%', 
                        transform: `rotate(${i * 45}deg) translateY(-20px) translateX(-50%)`,
                        transformOrigin: 'top center'
                    }} 
                />
            ))}
        </div>
      </button>
    );
  }

  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ y: 2, scale: 0.98 }}
      onClick={onClick}
      className={`relative px-6 py-3 bg-f1-surface-light border-b-4 border-${color}/60 font-technical font-bold text-xs tracking-[0.2em] transition-all hover:bg-f1-surface hover:border-${color} flex items-center gap-3 overflow-hidden ${className}`}
    >
      <div className={`w-2 h-2 rounded-full bg-${color} shadow-[0_0_8px_rgba(0,255,204,0.6)]`} />
      <span className="text-f1-white uppercase">{label}</span>
      
      {/* Glossy Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
      
      {/* Light Refraction */}
      <div className="absolute top-0 right-0 w-8 h-8 bg-white/5 blur-xl group-hover:bg-f1-cyan/10 transition-all" />
    </motion.button>
  );
};

export default SteeringButton;
