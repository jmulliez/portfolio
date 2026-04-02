import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import HUDCard from '../components/HUDCard';
import TelemetryBar from '../components/TelemetryBar';
import { 
  Code, 
  User, 
  Building2, 
  Rocket, 
  ArrowRight, 
  GraduationCap, 
  Heart, 
  Flag,
  Globe,
  Mail,
  Linkedin,
  Github
} from 'lucide-react';

const Home = () => {
    return (
        <div className="w-full relative">
            <Hero />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 mt-12">
                
                {/* PROFILE WIDGET */}
                <HUDCard 
                  title="PILOT_PROFILE // JOSEPH.MULLIEZ"
                  label="USER.DATA"
                  className="lg:col-span-8 row-span-2"
                >
                    <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                        <div className="relative group/avatar shrink-0">
                            <div className="absolute inset-0 bg-f1-cyan/20 blur-xl opacity-0 group-hover/avatar:opacity-100 transition-opacity" />
                            <img 
                              src="/assets/images/pp.jpg" 
                              alt="Joseph Mulliez" 
                              className="w-40 h-40 object-cover border-2 border-f1-cyan/20 group-hover:border-f1-cyan transition-all relative z-10" 
                            />
                            <div className="absolute -bottom-2 -right-2 bg-f1-cyan text-f1-black px-2 py-1 font-technical text-[10px] font-bold z-20">
                                ID: 0xFF1
                            </div>
                        </div>
                        <div className="flex-1 text-center md:text-left">
                            <h2 className="text-3xl font-technical font-bold text-f1-white mb-4 tracking-wider uppercase">
                                <span className="text-f1-cyan">01.</span> Systèmes Interactifs & Performance
                            </h2>
                            <p className="text-f1-white/60 leading-relaxed mb-6">
                                Étudiant en 3ème année de <span className="text-f1-cyan font-bold">BUT Informatique</span> à Lannion et alternant chez <span className="text-f1-white font-bold tracking-widest">ORANO</span>. 
                                Passionné par la précision technique, l'optimisation système et la création d'interfaces de pilotage critiques.
                            </p>
                            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                                <span className="px-3 py-1 bg-f1-cyan/5 border border-f1-cyan/20 text-f1-cyan font-technical text-[10px] tracking-widest uppercase">TECH.FULLSTACK</span>
                                <span className="px-3 py-1 bg-f1-cyan/5 border border-f1-cyan/20 text-f1-cyan font-technical text-[10px] tracking-widest uppercase">SYS.OPTIMIZATION</span>
                                <span className="px-3 py-1 bg-f1-cyan/5 border border-f1-cyan/20 text-f1-cyan font-technical text-[10px] tracking-widest uppercase">UI.HUD_DESIGN</span>
                            </div>
                        </div>
                    </div>
                </HUDCard>

                {/* TECH STACK / TELEMETRY */}
                <HUDCard 
                    title="TELEMETRY // CORE_SKILLS"
                    label="ANALYSIS.RT"
                    className="lg:col-span-4"
                >
                    <div className="space-y-2">
                        <TelemetryBar label="JAVA.ENGINE" value={90} />
                        <TelemetryBar label="VBA.AUTOMATION" value={95} color="f1-red" />
                        <TelemetryBar label="WEB.INTERFACE" value={85} />
                        <TelemetryBar label="REACT.FLOW" value={80} />
                        <TelemetryBar label="PYTHON.DATA" value={75} />
                    </div>
                </HUDCard>

                {/* CURRENT ROLE TRACKER */}
                <HUDCard 
                    title="CURRENT_MISSION // ORANO"
                    label="STATUS.TRACK"
                    status="ACTIVE"
                    className="lg:col-span-4"
                >
                    <div className="flex flex-col h-full bg-f1-red/5 border border-f1-red/20 p-4 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-2 opacity-10">
                            <Building2 size={80} className="text-f1-red" />
                        </div>
                        <div className="flex items-center gap-2 text-f1-red font-technical text-[10px] mb-4">
                            <span className="w-2 h-2 rounded-full bg-f1-red animate-pulse" />
                            DEPLOYED @ ORANO PROJETS
                        </div>
                        <h4 className="text-xl font-technical font-bold text-f1-white mb-2 uppercase tracking-wider">Software Architect</h4>
                        <p className="text-f1-white/40 text-sm mb-6 flex-1 italic">
                            Developing mission-critical VBA and Web tools for large-scale nuclear industrial projects.
                        </p>
                        <Link to="/alternance" className="w-full py-2 border border-f1-red/40 text-f1-red hover:bg-f1-red/10 font-technical text-[10px] font-bold tracking-widest transition-all text-center">
                            MISSION.DETAILS →
                        </Link>
                    </div>
                </HUDCard>

                {/* PASSIONS / F1 FOCUS */}
                <HUDCard 
                    title="EXT.SENSORS // PASSIONS"
                    label="DRIVE.DATA"
                    className="lg:col-span-4"
                >
                    <Link to="/passions" className="block group/passion">
                        <div className="relative h-32 bg-f1-black border border-white/5 overflow-hidden mb-4">
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541443131876-44b03de101c5?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center grayscale group-hover/passion:grayscale-0 group-hover/passion:scale-110 transition-all duration-700 opacity-40" />
                            <div className="absolute inset-0 bg-gradient-to-t from-f1-black to-transparent" />
                            <div className="absolute bottom-4 left-4 flex items-center gap-3">
                                <Flag className="text-f1-red" size={20} />
                                <span className="font-technical text-sm font-bold tracking-widest text-f1-white group-hover/passion:text-f1-red transition-colors">MOTORSPORT & F1</span>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-[8px] font-technical text-f1-white/40 uppercase tracking-widest">
                            <div className="border border-white/5 p-2 flex justify-between"><span>SAILING</span><span className="text-f1-cyan">ON</span></div>
                            <div className="border border-white/5 p-2 flex justify-between"><span>HIKING</span><span className="text-f1-cyan">ON</span></div>
                            <div className="border border-white/5 p-2 flex justify-between"><span>DANCE</span><span className="text-f1-red">STBY</span></div>
                            <div className="border border-white/5 p-2 flex justify-between"><span>DESIGN</span><span className="text-f1-cyan">ACTIVE</span></div>
                        </div>
                    </Link>
                </HUDCard>

                {/* FEATURED PROJECTS */}
                <HUDCard 
                    title="MODULES // TOP_WORK"
                    label="ARCHIVE.01"
                    className="lg:col-span-8 row-span-2"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                         <div className="border border-white/10 bg-white/2 group/proj p-4 hover:border-f1-cyan/40 transition-all">
                             <div className="flex justify-between items-start mb-4">
                                 <div className="w-12 h-12 bg-f1-cyan/10 border border-f1-cyan/30 flex items-center justify-center">
                                     <Rocket size={20} className="text-f1-cyan" />
                                 </div>
                                 <span className="font-technical text-[10px] text-f1-white/20">#P01</span>
                             </div>
                             <h5 className="font-technical text-lg font-bold text-f1-white mb-2 group-hover/proj:text-f1-cyan transition-colors">SCOOBY.TEAM</h5>
                             <p className="text-f1-white/40 text-xs mb-4">Plateforme de services Web type "Le Bon Coin", développée en PHP / MVC avec méthodologie Agile.</p>
                             <Link to="/projets" className="inline-flex items-center gap-2 text-[10px] font-bold tracking-widest text-f1-cyan hover:gap-3 transition-all">
                                VIEW.SOURCE <ArrowRight size={12} />
                             </Link>
                         </div>

                         <div className="border border-white/10 bg-white/2 group/proj p-4 hover:border-f1-red/40 transition-all">
                             <div className="flex justify-between items-start mb-4">
                                 <div className="w-12 h-12 bg-f1-red/10 border border-f1-red/30 flex items-center justify-center">
                                     <Code size={20} className="text-f1-red" />
                                 </div>
                                 <span className="font-technical text-[10px] text-f1-white/20">#P02</span>
                             </div>
                             <h5 className="font-technical text-lg font-bold text-f1-white mb-2 group-hover/proj:text-f1-red transition-colors">F1.STATS_HUB</h5>
                             <p className="text-f1-white/40 text-xs mb-4">Dashboard React temps-réel utilisant des données JSON pour l'analyse des pilotes de F1 2025.</p>
                             <Link to="/projets" className="inline-flex items-center gap-2 text-[10px] font-bold tracking-widest text-f1-red hover:gap-3 transition-all">
                                VIEW.SOURCE <ArrowRight size={12} />
                             </Link>
                         </div>
                    </div>
                </HUDCard>

                {/* CONTACT / COMMUNICATION */}
                <HUDCard 
                    title="COMLINK // CONTACT"
                    label="TX.RX"
                    className="lg:col-span-4"
                >
                    <div className="space-y-4">
                        <a href="https://linkedin.com/in/joseph-mulliez" target="_blank" rel="noreferrer" className="flex items-center justify-between p-3 border border-white/5 bg-white/2 hover:bg-f1-cyan/5 hover:border-f1-cyan/20 transition-all group/com">
                            <div className="flex items-center gap-4">
                                <Linkedin className="text-f1-cyan/40 group-hover/com:text-f1-cyan" size={18} />
                                <span className="font-technical text-xs tracking-widest text-f1-white/60">LINKEDIN</span>
                            </div>
                            <span className="text-[8px] text-f1-cyan/40 font-bold">ESTABLISHED</span>
                        </a>
                        <a href="https://github.com/JosephMulliez" target="_blank" rel="noreferrer" className="flex items-center justify-between p-3 border border-white/5 bg-white/2 hover:bg-f1-white/5 hover:border-f1-white/20 transition-all group/com">
                            <div className="flex items-center gap-4">
                                <Github className="text-f1-white/40 group-hover/com:text-f1-white" size={18} />
                                <span className="font-technical text-xs tracking-widest text-f1-white/60">GITHUB</span>
                            </div>
                            <span className="text-[8px] text-f1-white/40 font-bold">ACTIVE</span>
                        </a>
                        <a href="mailto:joseph.mulliez@example.com" className="flex items-center justify-between p-3 border border-f1-cyan/10 bg-f1-cyan/5 hover:bg-f1-cyan/10 hover:border-f1-cyan transition-all group/com">
                            <div className="flex items-center gap-4">
                                <Mail className="text-f1-cyan" size={18} />
                                <span className="font-technical text-xs tracking-widest text-f1-white font-bold">SEND.SIGNAL</span>
                            </div>
                            <span className="text-[8px] text-f1-cyan animate-pulse font-bold">SIGNAL.REC</span>
                        </a>
                    </div>
                </HUDCard>

                {/* FOOTER SYSTEM METRICS */}
                <div className="lg:col-span-12 mt-12 py-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 font-technical text-[10px] text-f1-white/20 tracking-widest uppercase">
                    <div className="flex gap-8">
                        <span>LAT: 48.732 / LON: -3.459 (LANNION)</span>
                        <span>OS: DEBIAN_GNU_LINUX</span>
                    </div>
                    <span>© 2024 JOSEPH.MULLIEZ // BUILT_WITH_PRECISION</span>
                </div>

            </div>
        </div>
    );
};

export default Home;
