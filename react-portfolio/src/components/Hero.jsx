import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import SteeringButton from './SteeringButton';

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex flex-col justify-center items-start py-20 overflow-hidden">
      {/* DRS Indicator */}
      <div className="absolute top-12 right-0 flex items-center gap-2 px-4 py-1 bg-f1-cyan/10 border-r-4 border-f1-cyan font-technical text-[10px] font-bold tracking-widest text-f1-cyan">
        DRS.ENABLED
        <div className="w-2 h-2 rounded-full bg-f1-cyan animate-ping" />
      </div>

      {/* Decorative HUD Lines */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-f1-cyan/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-f1-cyan/20 to-transparent" />
      
      <div className="relative z-10 w-full">
        {/* Status indicator */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-3 mb-8 px-4 py-1 border-l-2 border-f1-cyan bg-f1-cyan/5 font-technical text-xs tracking-[0.2em] text-f1-cyan uppercase"
        >
          <Activity size={14} className="animate-pulse" />
          <span>STATUS: ONLINE // SYSTEM.OPERATIONAL</span>
        </motion.div>

        {/* Main Title */}
        <div className="mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-technical font-bold tracking-tighter text-f1-white leading-none uppercase mb-4"
          >
            JOSEPH <span className="text-f1-cyan text-glow-cyan">MULLIEZ</span>
          </motion.h1>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
            className="h-[2px] bg-f1-cyan/30 mb-4"
          />
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="font-technical text-xl md:text-2xl tracking-[0.3em] text-f1-white/60 uppercase"
          >
            FULL STACK DEVELOPER <span className="text-f1-red">//</span> SYSTEM ONLINE
          </motion.p>
        </div>

        {/* Description & CTA */}
        <div className="flex flex-col md:flex-row items-end gap-12 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="max-w-xl border-l border-white/10 pl-6 py-2"
          >
            <p className="text-f1-white/70 text-lg leading-relaxed mb-8">
              Expert en développement d'applications haute performance et d'interfaces techniques immersives. 
              Actuellement en poste chez <span className="text-f1-white font-bold">Orano Projets</span>, 
              je transforme des données complexes en outils interactifs de précision.
            </p>
            
            <div className="flex flex-wrap gap-6 items-center">
              <Link to="/projets">
                <SteeringButton label="ENGAGE.PROJECTS" color="f1-cyan" />
              </Link>
              
              <a href="https://github.com/JosephMulliez" target="_blank" rel="noreferrer">
                <SteeringButton label="STRAT.GIT" color="f1-white" variant="rotary" />
              </a>
            </div>
          </motion.div>

          {/* Technical Data Readout (Visible on desktop) */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="hidden lg:flex flex-1 justify-end font-technical text-[10px] tracking-widest text-f1-white/20 uppercase text-right"
          >
            <div className="flex flex-col gap-1">
              <span>LATENCY: 14MS</span>
              <span>BUFFER: 0x4FC2</span>
              <span>CORE.TEMP: OPTIMAL</span>
              <span>ENCRYPTION: AES-256</span>
              <div className="mt-2 flex gap-1 justify-end">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className={`w-3 h-1 ${i < 3 ? 'bg-f1-cyan/40' : 'bg-white/5'}`} />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Cockpit Element */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none hidden xl:block">
        <Cpu size={600} className="text-f1-cyan translate-x-1/2 rotate-12" />
      </div>
    </section>
  );
};

export default Hero;
