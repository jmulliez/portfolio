import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Rocket,
  Filter,
  FileText,
  Github,
  Figma,
  ExternalLink,
  Table,
  CheckCircle2,
  TrendingUp,
  Cpu,
  Layers,
  Terminal
} from "lucide-react";
import HUDCard from "../components/HUDCard";
import TelemetryBar from "../components/TelemetryBar";

const Projets = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: "F1-01",
      title: "F1 Stats Dashboard",
      category: "REACT",
      description: "Application React immersive listant les statistiques en temps réel des pilotes du championnat F1 2025. Gestion d'états complexes et design HUD.",
      tags: ["REACT", "JSON", "MOTION"],
      metrics: [
        { label: "PERF", val: 95 },
        { label: "UI.UX", val: 98 },
        { label: "DATA", val: 90 }
      ],
      img: "/assets/images/projet_f1.jpeg",
      link: "https://f1-ashen.vercel.app/",
      github: "https://github.com/jmulliez/f1.git",
      status: "STABLE",
      color: "f1-red"
    },
    {
      id: "ALT-01",
      title: "Orano Suite Manager",
      category: "VBA",
      description: "Logiciel métier de suivi d'activité et gestion de projet pour les ingénieurs chez Orano. Optimisation de workflows industriels.",
      tags: ["VBA", "EXCEL", "SQL"],
      metrics: [
        { label: "AUTO", val: 99 },
        { label: "RELI", val: 95 },
        { label: "EFFI", val: 85 }
      ],
      img: "/assets/images/VBA.png",
      status: "PRODUCTION",
      color: "f1-cyan"
    },
    {
      id: "WEB-01",
      title: "ScoobyTeam Platform",
      category: "PHP",
      description: "Plateforme de services Web type 'Le Bon Coin' développée en équipe. Architecture MVC et mode Sprint Agile.",
      tags: ["PHP", "MVC", "AGILE"],
      metrics: [
        { label: "TEAM", val: 100 },
        { label: "CODE", val: 80 },
        { label: "SCALE", val: 75 }
      ],
      img: "/assets/images/scooby-team.png",
      github: "https://github.com/LucasOtw/SAE3_ScoobyTeam",
      status: "ARCHIVE",
      color: "f1-cyan"
    },
    {
      id: "SYS-01",
      title: "Network & Big Data",
      category: "LINUX",
      description: "Déploiement de serveurs Linux (Apache/MySQL) et exploitation de bases de données massives avec requêtes optimisées.",
      tags: ["LINUX", "SQL", "APACHE"],
      metrics: [
        { label: "SERV", val: 90 },
        { label: "DATA", val: 85 },
        { label: "SEC", val: 70 }
      ],
      status: "STABLE",
      color: "f1-cyan"
    }
  ];

  const filteredProjects = filter === "all" ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="w-full">
      {/* HEADER HUD */}
      <HUDCard 
        title="MODULES // MISSION_ARCHIVE"
        label="ARCHIVE.LIST"
        className="mb-12"
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex-1">
                <h1 className="text-4xl font-technical font-bold text-f1-white tracking-widest uppercase mb-4">
                    PROJETS.LIST <span className="text-f1-cyan">_01</span>
                </h1>
                <p className="text-f1-white/40 text-sm max-w-2xl font-light">
                    Exploration des missions techniques réalisées. De l'automatisation industrielle (Orano) 
                    aux interfaces haute performance (React/F1), chaque module représente un saut technologique.
                </p>
            </div>
            
            {/* FILTERS */}
            <div className="flex flex-wrap justify-center gap-2 border border-white/5 p-2 bg-f1-black/50">
                {["all", "REACT", "VBA", "PHP", "LINUX"].map((f) => (
                    <button
                        key={f}
                        onClick={() => setFilter(f)}
                        className={`px-4 py-2 font-technical text-[10px] tracking-widest transition-all ${
                            filter === f 
                            ? 'bg-f1-cyan text-f1-black font-bold' 
                            : 'text-f1-white/40 hover:text-f1-white hover:bg-white/5'
                        }`}
                    >
                        {f === "all" ? "ALL.MODULES" : `TYPE.${f}`}
                    </button>
                ))}
            </div>
        </div>
      </HUDCard>

      {/* PROJECTS GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, idx) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <HUDCard 
                title={project.title}
                label={`MODULE.${project.id}`}
                status={project.status}
                className="h-full"
              >
                <div className="flex flex-col h-full">
                  <div className="relative group overflow-hidden mb-6 border border-white/10">
                    <div className={`absolute top-2 right-2 z-20 bg-${project.color} text-f1-black text-[10px] font-bold px-2 py-0.5`}>
                        {project.category}
                    </div>
                    {project.img ? (
                      <img src={project.img} alt={project.title} className="w-full h-48 object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
                    ) : (
                      <div className="w-full h-48 bg-f1-black flex items-center justify-center">
                        <Terminal size={48} className="text-white/10" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-f1-black via-transparent to-transparent opacity-60" />
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[8px] font-technical tracking-tighter text-f1-white/60 bg-white/5 border border-white/10 px-2 py-1">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-f1-white/60 text-sm mb-6 flex-1 leading-relaxed">
                    {project.description}
                  </p>

                  {/* TELEMETRY DATA */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                    {project.metrics.map(m => (
                      <div key={m.label} className="border-l border-white/10 pl-3">
                        <div className="text-[8px] text-f1-white/40 uppercase tracking-widest mb-1">{m.label}</div>
                        <div className="flex items-center gap-2">
                            <span className={`text-xs font-technical font-bold text-${project.color}`}>{m.val}%</span>
                            <div className="flex-1 h-[2px] bg-white/5">
                                <div className={`h-full bg-${project.color}`} style={{ width: `${m.val}%` }} />
                            </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-4 border-t border-white/5">
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[10px] font-technical font-bold tracking-widest text-f1-cyan hover:bg-f1-cyan/10 px-3 py-1.5 transition-all">
                        LIVE.ACCESS <ExternalLink size={12} />
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[10px] font-technical font-bold tracking-widest text-f1-white hover:bg-white/10 px-3 py-1.5 transition-all">
                        GIT.SOURCE <Github size={12} />
                      </a>
                    )}
                  </div>
                </div>
              </HUDCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* FOOTER METRICS */}
      <div className="mt-12 p-4 bg-f1-cyan/5 border border-f1-cyan/10 flex justify-between items-center font-technical text-[10px] text-f1-cyan/60 tracking-widest uppercase">
          <div className="flex gap-4">
              <span>ACTIVE_RESOURCES: {filteredProjects.length}</span>
              <span>INDEXING: COMPLETE</span>
          </div>
          <div className="flex items-center gap-2">
              <TrendingUp size={14} />
              SCR_SCAN: OPTIMAL
          </div>
      </div>
    </div>
  );
};

export default Projets;
