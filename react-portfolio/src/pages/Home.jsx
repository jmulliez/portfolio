import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import { Code, User, Buildings, RocketLaunch, ArrowRight, GraduationCap, Heart, Sailboat, Mountains, Sword, Link as LinkIcon, GithubLogo, LinkedinLogo, EnvelopeSimple, FlagCheckered } from '@phosphor-icons/react';

const cardClass = "bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[32px] p-8 shadow-2xl hover:shadow-[0_10px_40px_rgba(139,92,246,0.15)] hover:bg-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden relative group flex flex-col justify-between";
const titleClass = "text-xl font-outfit font-bold flex items-center gap-3 mb-6 text-white";

const Home = () => {
    return (
        <div className="w-full relative">
            <Hero />
            <div className="w-full max-w-7xl mx-auto px-6 pb-24 mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                
                {/* PROFILE WIDGET */}
                <article className={`${cardClass} md:col-span-2 row-span-2 flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left`}>
                    <User className="absolute -right-6 -bottom-6 text-white/5 group-hover:text-purple-500/10 transition-colors duration-500 rotate-12" size={200} weight="regular" />
                    <img src="/assets/images/pp.jpg" alt="Joseph Mulliez" className="w-40 h-40 rounded-full object-cover border-4 border-white/10 shadow-[0_0_30px_rgba(139,92,246,0.3)] shrink-0 group-hover:scale-105 group-hover:rotate-3 transition-transform duration-500" />
                    <div className="z-10 flex flex-col h-full justify-center">
                        <span className="text-purple-400 font-semibold mb-2">Bonjour, je suis</span>
                        <h1 className="text-4xl lg:text-5xl font-extrabold font-outfit mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Joseph Mulliez</h1>
                        <p className="text-gray-400 text-sm lg:text-base leading-relaxed">
                            Étudiant en 3ème année de <span className="text-purple-300 font-semibold">BUT Informatique</span> à Lannion et alternant chez Orano. Je me passionne pour la création d'outils interactifs, la conception d'interfaces premium et l'optimisation des performances logicielles.
                        </p>
                    </div>
                </article>

                {/* SKILLS */}
                <article className={`${cardClass} col-span-1`}>
                    <h3 className={titleClass}><Code size={26} className="text-purple-400" /> Tech Stack</h3>
                    <div className="flex flex-col gap-4 z-10 relative">
                        {[
                          { name: 'Java (Fullstack)', val: '90%' },
                          { name: 'VBA / Excel', val: '95%' },
                          { name: 'Python', val: '80%' },
                          { name: 'React & Tailwind', val: '85%' },
                          { name: 'Linux / Docker', val: '70%' },
                        ].map(skill => (
                            <div key={skill.name} className="w-full">
                                <div className="flex justify-between text-xs font-semibold mb-1"><span className="text-gray-200">{skill.name}</span><span className="text-cyan-400">{skill.val}</span></div>
                                <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                                    <div className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 transition-all duration-1000 ease-out" style={{width: skill.val}}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </article>

                {/* CURRENT ROLE */}
                <article className={`${cardClass} col-span-1 bg-gradient-to-br from-yellow-500/10 to-orange-500/5 hover:from-yellow-500/20 border-yellow-500/20 hover:border-yellow-500/40`}>
                    <Buildings className="absolute -right-4 -bottom-4 text-yellow-500/5 group-hover:text-yellow-500/10 transition-colors duration-500" size={160} />
                    <div className="z-10 flex flex-col h-full">
                        <div className="inline-flex items-center gap-2 bg-yellow-400/10 text-yellow-400 text-xs font-bold px-3 py-1 rounded-full w-max mb-6 border border-yellow-400/20 shadow-[0_0_10px_rgba(250,204,21,0.2)]">
                            <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></span>
                            En poste actuellement
                        </div>
                        <h3 className="text-xl font-bold font-outfit text-white mb-2">Développeur VBA & Web</h3>
                        <p className="text-gray-400 text-sm mb-6 flex-1">@Orano Projets (La Hague, Cherbourg). Refonte et création d'outils de pointe pour la gestion de l'immense projet industriel NUWARD.</p>
                        <Link to="/alternance" className="text-sm font-semibold text-white hover:text-white border border-yellow-500/30 hover:bg-yellow-500/20 px-4 py-2 rounded-xl text-center transition-all bg-yellow-500/10">Découvrir mes missions →</Link>
                    </div>
                </article>

                {/* PROJECTS */}
                <article className={`${cardClass} md:col-span-2 row-span-2 gap-6`}>
                    <RocketLaunch className="absolute -right-10 -bottom-10 text-white/5 group-hover:text-blue-500/10 transition-colors duration-500 rotate-45" size={250} />
                    <div className="flex justify-between items-center z-10 w-full mb-2">
                        <h3 className={titleClass} style={{marginBottom:0}}><RocketLaunch size={26} className="text-blue-400" /> Projets Phares</h3>
                        <Link to="/projets" className="text-sm text-gray-400 hover:text-white flex items-center gap-1 transition-colors bg-white/5 hover:bg-white/10 px-3 py-1 rounded-full">Voir tout <ArrowRight size={14}/></Link>
                    </div>
                    
                    <div className="flex flex-col gap-4 z-10 h-full justify-center w-full">
                        <Link to="/projets" className="flex items-center gap-4 p-4 rounded-2xl bg-black/40 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all group/card shadow-inner">
                            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-indigo-900 to-purple-900 flex items-center justify-center shrink-0 border border-white/10 shadow-[0_0_15px_rgba(79,70,229,0.5)]">
                                <span className="font-bold text-lg text-white group-hover/card:scale-110 transition-transform">VBA</span>
                            </div>
                            <div>
                                <h5 className="font-bold text-white mb-1">Outils de Suivi Orano</h5>
                                <p className="text-xs text-gray-400 mb-2">Logiciels métier pour la gestion de projet et TMA.</p>
                                <div className="flex gap-2"><span className="text-[10px] bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded-md border border-blue-500/30">VBA</span><span className="text-[10px] bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded-md border border-blue-500/30">Excel</span></div>
                            </div>
                        </Link>
                        
                        <Link to="/projets" className="flex items-center gap-4 p-4 rounded-2xl bg-black/40 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all group/card shadow-inner">
                            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-teal-900 to-cyan-900 flex items-center justify-center shrink-0 border border-white/10 shadow-[0_0_15px_rgba(20,184,166,0.5)]">
                                <span className="font-bold text-lg text-white group-hover/card:scale-110 transition-transform">Web</span>
                            </div>
                            <div>
                                <h5 className="font-bold text-white mb-1">Plateforme Web ScoobyTeam</h5>
                                <p className="text-xs text-gray-400 mb-2">App web type Le Bon Coin / TripAdvisor (Sprint Agile).</p>
                                <div className="flex gap-2"><span className="text-[10px] bg-teal-500/20 text-teal-300 px-2 py-0.5 rounded-md border border-teal-500/30">PHP</span><span className="text-[10px] bg-teal-500/20 text-teal-300 px-2 py-0.5 rounded-md border border-teal-500/30">MVC</span></div>
                            </div>
                        </Link>
                    </div>
                </article>

                {/* EDUCATION */}
                <article className={`${cardClass} md:col-span-2 row-span-2`}>
                    <GraduationCap className="absolute -right-6 -bottom-6 text-white/5 group-hover:text-cyan-500/10 transition-colors duration-500 -rotate-12" size={200} />
                    <h3 className={titleClass}><GraduationCap size={26} className="text-cyan-400" /> Parcours</h3>
                    <div className="relative pl-6 border-l-2 border-white/10 z-10 flex flex-col gap-8 py-2">
                        <div className="relative group/timeline">
                            <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_15px_#22d3ee] group-hover/timeline:scale-125 transition-transform"></div>
                            <span className="text-xs text-cyan-400 font-bold uppercase tracking-wider mb-1 block">Rentrée 2026 (Projet)</span>
                            <h4 className="text-lg font-bold text-white leading-tight">Ecole d'ingénieur</h4>
                            <p className="text-sm text-gray-400 mt-1">École d'ingénieur Électronique & Systèmes Embarqués</p>
                        </div>
                        <div className="relative group/timeline">
                            <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-[#1a1a24] border-2 border-purple-500 group-hover/timeline:bg-purple-500 transition-colors"></div>
                            <span className="text-xs text-purple-400 font-bold uppercase tracking-wider mb-1 block">2023 - 2026</span>
                            <h4 className="text-lg font-bold text-white leading-tight">BUT Informatique</h4>
                            <p className="text-sm text-gray-400 mt-1">IUT Lannion - Spécialisation Réalisation d'applications</p>
                        </div>
                        <div className="relative group/timeline">
                            <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-[#1a1a24] border-2 border-white/20 group-hover/timeline:border-white/60 transition-colors"></div>
                            <span className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1 block">2021 - 2023</span>
                            <h4 className="text-lg font-bold text-white leading-tight">BAC Général</h4>
                            <p className="text-sm text-gray-400 mt-1">Lycée Naval (Brest) - Maths & NSI</p>
                        </div>
                    </div>
                </article>

                {/* PASSIONS (F1 Edition) */}
                <Link to="/passions" data-cursor="f1" className="block col-span-1 bg-gradient-to-br from-[#1a0a0a] to-[#2a0e0e] border border-red-900/40 rounded-[32px] p-8 shadow-2xl hover:shadow-[0_10px_40px_rgba(239,68,68,0.2)] hover:border-red-500/40 transition-all duration-500 overflow-hidden relative group/f1 flex flex-col justify-between cursor-pointer">
                    <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
                    <div className="absolute -right-20 -top-20 w-64 h-64 bg-red-600/10 blur-[80px] rounded-full group-hover/f1:bg-red-500/20 transition-colors duration-700 pointer-events-none"></div>
                    <FlagCheckered weight="duotone" className="absolute -right-4 -bottom-4 text-white/5 group-hover/f1:text-red-500/10 transition-all duration-700 rotate-12 group-hover/f1:rotate-0" size={180} />
                    
                    <div className="z-10 relative flex flex-col h-full">
                        <div className="flex justify-between items-center mb-6">
                             <h3 className={titleClass.replace('mb-6', 'mb-0')}><Heart size={26} className="text-red-500 drop-shadow-[0_0_12px_rgba(239,68,68,0.8)]" /> Passions</h3>
                             <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover/f1:bg-red-500/20 transition-colors"><ArrowRight size={14} className="text-white group-hover/f1:translate-x-1 transition-transform" /></div>
                        </div>
                        <div className="flex flex-col gap-3 mb-2 relative">
                            <div className="flex justify-between items-center text-sm font-bold text-white bg-gradient-to-r from-red-600/30 to-black/60 border border-red-500/30 p-3 rounded-xl shadow-[0_4px_20px_rgba(220,38,38,0.3)] hover:scale-[1.02] transition-transform backdrop-blur-md">
                                <div className="flex items-center gap-3"><FlagCheckered size={20} className="text-white"/> Formule 1 & Auto</div>
                                <span className="text-[10px] bg-red-600/80 text-white px-2 py-0.5 rounded-md border border-red-400/50 uppercase tracking-widest">Passion</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm font-medium text-gray-300 bg-black/40 border border-white/5 p-3 rounded-xl hover:bg-white/10 transition-colors backdrop-blur-md"><Sailboat size={20} className="text-blue-400 drop-shadow-[0_0_5px_#60a5fa]"/> Voile & Velo</div>
                            <div className="flex items-center gap-3 text-sm font-medium text-gray-300 bg-black/40 border border-white/5 p-3 rounded-xl hover:bg-white/10 transition-colors backdrop-blur-md"><Sword size={20} className="text-rose-400 drop-shadow-[0_0_5px_#fb7185]"/> Danse et Rando</div>
                        </div>
                    </div>
                </Link>

                {/* SOCIALS */}
                <article className={`${cardClass} col-span-1`}>
                    <LinkIcon className="absolute -right-4 -bottom-4 text-white/5 group-hover:text-blue-500/10 transition-colors duration-500 hover:rotate-12" size={160} />
                    <div className="z-10 relative flex flex-col h-full">
                        <h3 className={titleClass}><LinkIcon size={26} className="text-purple-400"/> Contacter</h3>
                        <div className="flex flex-col gap-3 mt-auto">
                            <a href="https://github.com/JosephMulliez" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#24292e] hover:bg-[#2f363d] text-white font-medium transition-colors border border-white/10 shadow-lg"><GithubLogo size={20}/> GitHub</a>
                            <a href="https://linkedin.com/in/joseph-mulliez" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#0a66c2]/80 hover:bg-[#0a66c2] text-white font-medium transition-colors border border-blue-400/30 shadow-lg"><LinkedinLogo size={20}/> LinkedIn</a>
                            <a href="/assets/pdf/CV_MULLIEZ_Joseph.pdf" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:scale-105 text-white font-bold transition-all shadow-[0_5px_20px_rgba(139,92,246,0.4)]"><EnvelopeSimple size={20}/> Mon CV</a>
                        </div>
                    </div>
                </article>

                {/* FOOTER */}
                <footer className="col-span-1 md:col-span-2 lg:col-span-4 text-center mt-12 bg-white/5 py-6 rounded-3xl border border-white/10 backdrop-blur-md">
                    <p className="text-gray-400 text-sm font-medium">&copy; 2024 Joseph Mulliez. Tous droits réservés.</p>
                </footer>
            </div>
        </div>
    );
};
export default Home;
