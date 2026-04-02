import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Target, Map, BookOpen, Search, Milestone } from "lucide-react";
import HUDCard from "../components/HUDCard";

const Formations = () => {
  const timeline = [
    {
      date: "2026 - 2029",
      target: "PROJECT",
      title: "SCHOOL_OF_ENGINEERING",
      location: "FRANCE_TARGET",
      desc: "Architecting complex software systems and exploring next-gen electronics. Focus on IoT, Cyber, and Fullstack systems.",
      status: "LOCKED",
      color: "f1-red"
    },
    {
      date: "2023 - 2026",
      target: "ACTIVE",
      title: "BUT_COMPUTER_SCIENCE",
      location: "IUT_LANNION",
      desc: "Intensive 3-year track specializing in 'Software Engineering'. Covering Java, PHP, SQL, and Network Administration.",
      status: "IN_PROGRESS",
      color: "f1-cyan"
    },
    {
      date: "2021 - 2023",
      target: "COMPLETE",
      title: "GENERAL_BACCALAUREATE",
      location: "LYCEE_NAVAL_BREST",
      desc: "Specialized in Mathematics & Computer Science (NSI). Foundation in Python and logic systems.",
      status: "VALIDATED",
      color: "f1-white"
    }
  ];

  const targets = [
    { name: "ENSICAEN", track: "ECSE (IoT / Embedded)", location: "CAEN", note: "Priority Target" },
    { name: "ENSICAEN", track: "I3N (Nuclear Inst.)", location: "CAEN" },
    { name: "ESEO", track: "Software & Digital", location: "ANGERS" },
    { name: "ENSTA BRETAGNE", track: "Maritime Systems", location: "BREST" }
  ];

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* HEADER INTRO */}
        <HUDCard 
          title="ACADEMIC_TRACK // PATHWAY_VISUALIZATION"
          label="EDU.MAP"
          className="lg:col-span-8"
        >
            <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="p-6 bg-f1-cyan/10 border border-f1-cyan/20 rounded-full">
                    <GraduationCap size={48} className="text-f1-cyan" />
                </div>
                <div>
                    <h1 className="text-3xl font-technical font-bold text-f1-white mb-2 uppercase tracking-widest">
                        ACADEMIC.ENGINEERING <span className="text-f1-cyan">03_LEVEL</span>
                    </h1>
                    <p className="text-f1-white/40 text-sm font-light max-w-2xl">
                        Mapping the evolution from core logic foundations to advanced software architecture. 
                        Targeting elite engineering schools to master mission-critical systems.
                    </p>
                </div>
            </div>
        </HUDCard>

        {/* STATS BOX */}
        <HUDCard 
            title="METRICS // CORE_VALUE"
            label="ANALYSIS.EDU"
            className="lg:col-span-4"
        >
            <div className="grid grid-cols-2 gap-4 h-full">
                <div className="p-4 border border-white/5 bg-f1-black flex flex-col justify-center items-center text-center">
                    <span className="text-4xl font-technical font-bold text-f1-cyan">06</span>
                    <span className="text-[8px] text-f1-white/40 uppercase tracking-widest mt-1">YRS.TRAIN</span>
                </div>
                <div className="p-4 border border-white/5 bg-f1-black flex flex-col justify-center items-center text-center">
                    <span className="text-4xl font-technical font-bold text-f1-cyan">08+</span>
                    <span className="text-[8px] text-f1-white/40 uppercase tracking-widest mt-1">MAJ.PROJ</span>
                </div>
                <div className="p-4 border border-white/5 bg-f1-black flex flex-col justify-center items-center text-center">
                    <span className="text-4xl font-technical font-bold text-f1-cyan">02</span>
                    <span className="text-[8px] text-f1-white/40 uppercase tracking-widest mt-1">CORP.EXP</span>
                </div>
                <div className="p-4 border border-white/5 bg-f1-black flex flex-col justify-center items-center text-center">
                    <span className="text-4xl font-technical font-bold text-f1-cyan">50+</span>
                    <span className="text-[8px] text-f1-white/40 uppercase tracking-widest mt-1">TECH.STACK</span>
                </div>
            </div>
        </HUDCard>

        {/* TIMELINE */}
        <HUDCard 
            title="TIMELINE_DATA // HISTORICAL"
            label="CHRONO.LOG"
            className="lg:col-span-7"
        >
            <div className="relative pl-12 border-l border-white/10 flex flex-col gap-12 py-4">
                {timeline.map((step, i) => (
                    <div key={i} className="relative group">
                        {/* Technical Step Node */}
                        <div className={`absolute -left-[57px] top-0 w-8 h-8 rounded-sm bg-f1-black border-2 border-${step.color} flex items-center justify-center`}>
                           <div className={`w-3 h-3 bg-${step.color} ${step.status === 'IN_PROGRESS' ? 'animate-pulse' : ''}`} />
                        </div>
                        
                        <div className="flex justify-between items-start mb-2">
                           <span className={`font-technical text-xs font-bold text-${step.color} tracking-[0.2em]`}>{step.date}</span>
                           <span className="font-technical text-[8px] text-f1-white/20 uppercase">STATUS::{step.status}</span>
                        </div>
                        <h4 className="text-xl font-technical font-bold text-f1-white mb-2 uppercase tracking-wider">{step.title}</h4>
                        <div className="flex items-center gap-2 mb-4 text-[10px] text-f1-white/40 font-technical">
                            <Map size={12} className="text-f1-cyan" />
                            <span>{step.location}</span>
                        </div>
                        <p className="text-xs text-f1-white/60 leading-relaxed max-w-lg mb-4 italic">
                            {step.desc}
                        </p>
                        <div className="h-[1px] w-full bg-gradient-to-r from-white/10 to-transparent" />
                    </div>
                ))}
            </div>
        </HUDCard>

        {/* TARGET SCHOOLS */}
        <HUDCard 
            title="TARGET_GRID // ENGINEERING_UNITS"
            label="RECON.TARGET"
            className="lg:col-span-5"
        >
            <div className="space-y-4">
                {targets.map((target, i) => (
                    <div key={i} className="group p-4 border border-white/5 bg-f1-black/50 hover:border-f1-cyan/40 transition-all relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-2 font-technical text-[8px] text-f1-white/10">TRGT.O{i+1}</div>
                        <div className="flex items-start gap-4 mb-3">
                            <div className="mt-1 w-2 h-2 bg-f1-cyan shadow-[0_0_8px_#00ffcc]" />
                            <div>
                                <h5 className="font-technical font-bold text-f1-white text-sm tracking-widest">{target.name}</h5>
                                <span className="font-technical text-[10px] text-f1-cyan opacity-60 tracking-widest uppercase">{target.track}</span>
                            </div>
                        </div>
                        <div className="flex justify-between items-center text-[8px] font-technical text-f1-white/40 px-6">
                            <span>LOC: {target.location}</span>
                            {target.note && <span className="text-f1-red animate-pulse">PRIORITY_TARGET</span>}
                        </div>
                    </div>
                ))}
                
                <div className="p-4 border border-f1-cyan/10 bg-f1-cyan/5 mt-6">
                   <div className="flex items-center gap-2 text-f1-cyan font-technical text-[10px] mb-2 font-bold tracking-widest">
                       <Search size={14} /> SCANNING_FOR_OPPORTUNITY
                   </div>
                   <div className="w-full h-1 bg-white/5 relative">
                       <motion.div 
                        initial={{ left: 0 }}
                        animate={{ left: '100%' }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="absolute h-full w-4 bg-f1-cyan/40 blur-sm"
                       />
                   </div>
                </div>
            </div>
        </HUDCard>

      </div>
    </div>
  );
};

export default Formations;
