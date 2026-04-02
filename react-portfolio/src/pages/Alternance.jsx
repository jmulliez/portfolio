import React from 'react';
import { motion } from 'framer-motion';
import { Building2, CheckCircle, Database, Shield, Zap, TrendingUp, Cpu } from 'lucide-react';
import HUDCard from '../components/HUDCard';

const Alternance = () => {
    return (
        <div className="w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* CAREER OVERVIEW */}
                <HUDCard 
                    title="CAREER_TRACK // ORANO_PROJETS"
                    label="MISSION.LOG"
                    status="ACTIVE"
                    className="lg:col-span-8"
                >
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            <div className="w-full md:w-1/3 shrink-0 aspect-video bg-f1-black border border-white/10 flex items-center justify-center relative group overflow-hidden">
                                <Building2 size={80} className="text-f1-white/10 group-hover:text-f1-cyan/20 transition-colors" />
                                <div className="absolute inset-x-0 bottom-0 h-1 bg-f1-cyan/40" />
                            </div>
                            <div className="flex-1">
                                <h1 className="text-3xl font-technical font-bold text-f1-white mb-4 uppercase tracking-wider">
                                    INGÉNIERIE & DÉVELOPPEMENT <span className="text-f1-cyan">ORANO</span>
                                </h1>
                                <p className="text-f1-white/60 text-sm leading-relaxed mb-6">
                                    Orano Projets est l'entité d'ingénierie et de pilotage de grands projets industriels du groupe mondial Orano. 
                                    Ma mission consiste à fiabiliser et accélérer le suivi d'activités via la création d'outils critiques.
                                </p>
                                <div className="p-4 bg-f1-cyan/5 border-l-2 border-f1-cyan">
                                    <span className="font-technical text-[10px] text-f1-cyan font-bold block mb-2 tracking-widest">MISSION.CORE_OBJECTIVE</span>
                                    <p className="text-f1-white/80 text-xs italic">
                                        "Digitalisation des processus de reporting et automatisation des workflows de gestion de projet nucléaire."
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* KEY PERFORMANCES */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {[
                                { icon: <Database size={20} />, label: "DATA.RELIABILITY", val: "99.9%" },
                                { icon: <Zap size={20} />, label: "PROCESS.SPEED", val: "+40%" },
                                { icon: <Shield size={20} />, label: "SAFETY.COMPLIANCE", val: "L1" }
                            ].map(stat => (
                                <div key={stat.label} className="p-4 border border-white/5 bg-f1-black/50 flex flex-col items-center text-center">
                                    <div className="text-f1-cyan mb-2">{stat.icon}</div>
                                    <span className="text-[10px] text-f1-white/20 font-technical tracking-widest mb-1">{stat.label}</span>
                                    <span className="text-xl font-technical font-bold text-f1-white">{stat.val}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </HUDCard>

                {/* CORPORATE METRICS */}
                <HUDCard 
                    title="ENTITY_PROFILE // ORANO.CORP"
                    label="SOURCE.WIKI"
                    className="lg:col-span-4"
                >
                    <div className="space-y-4">
                        <div className="p-4 border border-white/5 bg-f1-black/50">
                            <span className="text-[8px] text-f1-white/20 font-technical block mb-1">REVENUE (2024)</span>
                            <div className="text-2xl font-technical font-bold text-f1-white">~4.9 <span className="text-f1-cyan">BN.€</span></div>
                        </div>
                        <div className="p-4 border border-white/5 bg-f1-black/50">
                            <span className="text-[8px] text-f1-white/20 font-technical block mb-1">GLOBAL_STAFF</span>
                            <div className="text-2xl font-technical font-bold text-f1-white">16K+ <span className="text-f1-cyan">UNITS</span></div>
                        </div>
                        <div className="p-4 border border-white/5 bg-f1-black/50">
                            <span className="text-[8px] text-f1-white/20 font-technical block mb-1">DEPOLYMENT</span>
                            <div className="text-2xl font-technical font-bold text-f1-white">30+ <span className="text-f1-cyan">SITES</span></div>
                        </div>
                        <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-2">
                            <div className="flex justify-between items-center text-[10px] font-technical text-f1-white/40">
                                <span>SYSTEM.Uptime</span>
                                <span>99.99%</span>
                            </div>
                            <div className="w-full h-1 bg-white/5 overflow-hidden">
                                <motion.div 
                                    initial={{ width: 0 }}
                                    animate={{ width: '100.00%' }}
                                    className="h-full bg-f1-cyan shadow-[0_0_8px_#00ffcc]"
                                />
                            </div>
                        </div>
                    </div>
                </HUDCard>

                {/* DETAILED TASKS */}
                <HUDCard 
                    title="TASK_HISTORY // OPERATIONS"
                    label="TX.LOG"
                    className="lg:col-span-12"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { title: "MAINTENANCE.CORRECTIVE", desc: "Stabilisation des macros legacy, gestion des exceptions et sécurisation des flux de données." },
                            { title: "DEVELOPMENT.EVOLUTIVE", desc: "Implémentation de nouveaux filtres décisionnels et génération automatisée de KPI." },
                            { title: "UX.ENGINEERING", desc: "Refonte des interfaces Excel pour une navigation fluide et intuitive pour les chefs de projet." },
                            { title: "OPTIMIZATION.CODE", desc: "Refactoring complet des algorithmes VBA pour réduire le temps de traitement de -60%." },
                            { title: "DOCUMENTATION.SYS", desc: "Rédaction de protocoles d'utilisation 'Zero-Error' pour les équipes opérationnelles." },
                            { title: "MISSION.SCR_SCRATCH", desc: "Conception from-scratch de modules de suivi d'activité avec base de données intégrée." }
                        ].map((task, i) => (
                            <div key={i} className="flex gap-4 p-4 border border-white/5 hover:bg-white/5 transition-colors group">
                                <div className="text-f1-cyan font-technical text-sm font-bold opacity-30 group-hover:opacity-100 transition-opacity">0{i+1}.</div>
                                <div>
                                    <h4 className="font-technical text-sm font-bold text-f1-white mb-2 tracking-widest">{task.title}</h4>
                                    <p className="text-f1-white/40 text-xs leading-relaxed">{task.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </HUDCard>

                {/* NUCLEAR FUEL CYCLE (RESOURCES) */}
                <div className="lg:col-span-12 mt-8">
                    <h3 className="font-technical text-xl font-bold text-f1-white mb-6 tracking-widest uppercase flex items-center gap-3">
                        <Cpu size={24} className="text-f1-cyan" />
                        CONTEXT: NUCLEAR_FUEL_CYCLE
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-technical">
                        {[
                            { id: "01", icon: "⛏️", name: "MINING", desc: "Extraction and conversion of raw uranium." },
                            { id: "02", icon: "⚡", name: "ENRICHMENT", desc: "Fuel fabrication for reactors (GB II)." },
                            { id: "03", icon: "♻️", name: "RECYCLING", desc: "Spent fuel treatment (La Hague)." },
                            { id: "04", icon: "🏥", name: "MED.TECH", desc: "Isotopes for cancer treatment research." }
                        ].map(ctx => (
                            <div key={ctx.id} className="p-6 bg-f1-black border border-white/10 relative group hover:border-f1-cyan transition-colors">
                                <div className="absolute top-2 right-2 text-[8px] text-f1-white/20">RES.{ctx.id}</div>
                                <div className="text-4xl mb-4 grayscale group-hover:grayscale-0 transition-all">{ctx.icon}</div>
                                <h4 className="text-sm font-bold text-f1-white mb-2 tracking-[0.2em]">{ctx.name}</h4>
                                <p className="text-[10px] text-f1-white/40 leading-relaxed uppercase">{ctx.desc}</p>
                                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-f1-cyan group-hover:w-full transition-all duration-500" />
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Alternance;
