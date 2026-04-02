import React from "react";
import { motion } from "framer-motion";
import { Heart, Flag, Anchor, Bike, Mountain, Activity, Wind, Zap } from "lucide-react";
import HUDCard from "../components/HUDCard";

const Passions = () => {
  const passions = [
    {
      id: "F1",
      title: "FORMULA_1 & MOTORSPORT",
      label: "DRIVE.SYS",
      desc: "Fasciné par l'ingénierie de pointe, la stratégie millimétrée et le traitement massif de la data en temps réel. Analyse des flux aérodynamiques et de la télémétrie.",
      icon: <Flag size={40} className="text-f1-red" />,
      color: "f1-red",
      metrics: ["STRATEGY", "AERODYNAMICS", "DATA.ANALYSIS"],
      img: "https://images.unsplash.com/photo-1541443131876-44b03de101c5?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "DANSE",
      title: "CLASSICAL_BALLET",
      label: "ART.SYS",
      desc: "12 ans de pratique intensive. Rigueur absolue, mémorisation précise et esthétisme technique. Performance scénique (Le Lac des Cygnes).",
      icon: <Activity size={40} className="text-f1-cyan" />,
      color: "f1-cyan",
      metrics: ["DISCIPLINE", "PRECISION", "STRENGTH"],
      img: "/assets/images/LC1.png"
    },
    {
      id: "SAILING",
      title: "SAILING_NAVIGATION",
      label: "NAV.SYS",
      desc: "Navigation en haute mer. Compréhension des flux éoliens, courants et synchronisation d'équipage en environnement critique.",
      icon: <Anchor size={40} className="text-f1-cyan" />,
      color: "f1-cyan",
      metrics: ["NAVIGATION", "TEAMWORK", "ENVIRONMENT"],
      img: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=2094&auto=format&fit=crop"
    }
  ];

  return (
    <div className="w-full">
      {/* HEADER HUD */}
      <HUDCard 
        title="EXTERNAL_SENSORS // PERSONAL_SYSTEMS"
        label="LIFE.STREAM"
        className="mb-12"
      >
        <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
            <div className="flex-1">
                <h1 className="text-4xl font-technical font-bold text-f1-white tracking-widest uppercase mb-4">
                    PASSIONS.CORE <span className="text-f1-red">_DATA</span>
                </h1>
                <p className="text-f1-white/40 text-sm max-w-2xl font-light">
                    Analyse des systèmes de motivation externes. Chaque module représente un pilier de 
                    discipline, d'adrénaline ou de déconnexion technique nécessaire à l'équilibre du pilote.
                </p>
            </div>
            <div className="flex items-center gap-4 animate-pulse">
                <div className="w-2 h-2 rounded-full bg-f1-red" />
                <span className="font-technical text-xs text-f1-red tracking-[0.3em]">RECORDING_LIVE</span>
            </div>
        </div>
      </HUDCard>

      {/* PASSIONS MAIN LIST */}
      <div className="space-y-8">
        {passions.map((p, i) => (
          <HUDCard 
            key={p.id}
            title={p.title}
            label={p.label}
            className="w-full"
            delay={i * 0.1}
          >
            <div className="flex flex-col lg:flex-row gap-12">
               <div className="flex-1">
                  <div className="flex items-center gap-4 mb-6">
                      {p.icon}
                      <div className="h-[2px] flex-1 bg-gradient-to-r from-white/10 to-transparent" />
                  </div>
                  <p className="text-f1-white/60 text-lg leading-relaxed mb-8 border-l-2 border-f1-cyan/20 pl-6">
                      {p.desc}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                      {p.metrics.map(m => (
                          <div key={m} className="p-3 border border-white/5 bg-f1-black/50">
                              <span className="block font-technical text-[8px] text-f1-white/20 mb-2 tracking-[0.2em]">{m}</span>
                              <div className="flex gap-1">
                                  {[...Array(5)].map((_, i) => (
                                      <div key={i} className={`w-full h-1 ${i < 4 ? `bg-${p.color}` : 'bg-white/5'}`} />
                                  ))}
                              </div>
                          </div>
                      ))}
                  </div>
               </div>
               
               <div className="w-full lg:w-1/3 aspect-video lg:aspect-square relative group overflow-hidden border border-white/5">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-f1-black via-transparent to-transparent opacity-60" />
                  <div className="absolute inset-0 border-[20px] border-f1-black/40 group-hover:border-transparent transition-all duration-700" />
               </div>
            </div>
          </HUDCard>
        ))}
      </div>

      {/* SECONDARY PASSIONS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <HUDCard title="ENDURANCE // CYCLING" label="TRAIN.01">
            <div className="flex items-center gap-6">
                <Bike className="text-f1-cyan/40" size={32} />
                <p className="text-xs text-f1-white/40 uppercase tracking-widest leading-relaxed">
                    VTT & Route. Exploration territoriale et renforcement de l'endurance mentale durable.
                </p>
            </div>
        </HUDCard>
        <HUDCard title="EXPLORATION // HIKING" label="TRAIN.02">
            <div className="flex items-center gap-6">
                <Mountain className="text-f1-cyan/40" size={32} />
                <p className="text-xs text-f1-white/40 uppercase tracking-widest leading-relaxed">
                    Confrontation nature. Persévérance et analyse topographique en environnement sauvage.
                </p>
            </div>
        </HUDCard>
      </div>

      {/* FOOTER telemetry */}
      <div className="mt-12 p-6 border-y border-white/5 font-technical flex justify-between items-center text-[10px] text-f1-white/10 tracking-[0.5em] uppercase">
          <span>SENSORS_STABLE</span>
          <div className="flex gap-4">
              <span className="flex items-center gap-2 text-f1-cyan"><Zap size={10} /> ADRENALINE_LEVEL: OPTIMAL</span>
              <span className="flex items-center gap-2 text-f1-cyan"><Wind size={10} /> FLOW_STATE: ACHIEVED</span>
          </div>
      </div>
    </div>
  );
};

export default Passions;
