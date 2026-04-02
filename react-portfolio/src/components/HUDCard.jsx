import React from 'react';
import { motion } from 'framer-motion';

const HUDCard = ({ 
  children, 
  title, 
  label = "DATA.STREAM", 
  status = "OK", 
  className = "",
  delay = 0 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`relative group ${className}`}
    >
      {/* HUD Borders & Accents */}
      <div className="absolute -top-[2px] -left-[2px] w-4 h-4 border-t-2 border-l-2 border-f1-cyan/40 group-hover:border-f1-cyan transition-colors" />
      <div className="absolute -top-[2px] -right-[2px] w-4 h-4 border-t-2 border-r-2 border-f1-cyan/40 group-hover:border-f1-cyan transition-colors" />
      <div className="absolute -bottom-[2px] -left-[2px] w-4 h-4 border-b-2 border-l-2 border-f1-cyan/40 group-hover:border-f1-cyan transition-colors" />
      <div className="absolute -bottom-[2px] -right-[2px] w-4 h-4 border-b-2 border-r-2 border-f1-cyan/40 group-hover:border-f1-cyan transition-colors" />

      {/* Main Container */}
      <div className="bg-f1-surface/80 backdrop-blur-md border border-white/5 p-6 h-full flex flex-col relative overflow-hidden group-hover:bg-f1-surface-light/90 transition-all duration-300">
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-f1-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        
        {/* Header Metadata */}
        <div className="flex justify-between items-center mb-6 font-technical text-[10px] tracking-widest text-f1-white/40 uppercase">
          <div className="flex items-center gap-2">
            <span className="w-1 h-3 bg-f1-cyan/60" />
            <span>{label}</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline">SYS.STATUS // {status}</span>
            <span className="animate-pulse text-f1-cyan">●</span>
          </div>
        </div>

        {/* Title */}
        {title && (
          <h3 className="font-technical text-xl font-bold text-f1-white mb-4 tracking-wider group-hover:text-f1-cyan transition-colors">
            {title}
          </h3>
        )}

        {/* Content */}
        <div className="relative z-10 flex-1">
          {children}
        </div>

        {/* Footer Accent */}
        <div className="mt-6 pt-4 border-t border-white/5 flex justify-between items-end">
          <div className="h-[2px] w-12 bg-f1-cyan/20 group-hover:w-24 transition-all duration-500" />
          <span className="font-technical text-[8px] text-f1-white/20">0x{Math.random().toString(16).slice(2, 6).toUpperCase()}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default HUDCard;
