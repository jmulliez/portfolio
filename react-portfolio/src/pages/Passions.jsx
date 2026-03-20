import React from 'react';
import { Heart, FlagCheckered, Sailboat, Bicycle, Sword, Mountains } from '@phosphor-icons/react';

const Passions = () => {
    return (
        <div className="w-full max-w-7xl mx-auto px-6 pb-24 pt-32 flex flex-col gap-10">
            
            {/* INTRO */}
            <div className={`bg-gradient-to-r from-purple-900/20 to-pink-900/10 border border-purple-500/20 rounded-[40px] p-10 md:p-16 text-center relative overflow-hidden backdrop-blur-2xl shadow-[0_10px_50px_rgba(168,85,247,0.1)]`}>
                <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay pointer-events-none"></div>
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/20 blur-[120px] rounded-full pointer-events-none"></div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-outfit font-extrabold flex items-center justify-center gap-4 mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 relative z-10">
                    <Heart size={50} className="text-pink-500 animate-pulse" /> Mes Passions
                </h1>
                <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed relative z-10 font-medium">
                    Au-delà du code et de l'ingénierie, je nourris un équilibre de vie construit autour du sport, de la rigueur et de l'adrénaline. Découvrez ce qui m'anime au quotidien.
                </p>
            </div>

            {/* F1 SECTION */}
            <article data-cursor="f1" className="bg-gradient-to-br from-[#1a0a0a] to-[#2a0e0e] border border-red-900/50 rounded-[40px] p-10 md:p-14 lg:p-16 shadow-[0_20px_60px_rgba(239,68,68,0.15)] hover:border-red-500/40 hover:shadow-[0_20px_60px_rgba(239,68,68,0.3)] transition-all duration-700 relative overflow-hidden group/f1">
                <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
                <div className="absolute -left-20 -bottom-20 w-[500px] h-[500px] bg-red-600/10 blur-[100px] rounded-full group-hover/f1:bg-red-500/20 transition-colors duration-700 pointer-events-none"></div>
                <FlagCheckered weight="duotone" className="absolute -right-10 -top-10 text-white/5 group-hover/f1:text-red-500/10 transition-all duration-1000 rotate-12 group-hover/f1:rotate-0" size={500} />
                
                <div className="relative z-10 max-w-4xl">
                    <span className="text-sm font-bold text-red-500 uppercase tracking-widest block mb-4 px-4 py-2 bg-red-500/10 border border-red-500/20 w-max rounded-full shadow-[0_0_15px_rgba(239,68,68,0.2)]">Vitesse & Précision</span>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white font-outfit mb-6 drop-shadow-[0_0_15px_rgba(239,68,68,0.6)] flex items-center gap-4">
                        Formule 1 & Auto
                    </h2>
                    <p className="text-gray-300 text-lg leading-relaxed mb-8 border-l-2 border-red-500/50 pl-6 bg-gradient-to-r from-red-500/5 to-transparent py-4 rounded-r-2xl">
                        Fasciné par la Formule 1 et le sport automobile en général, je suis les championnats avec une attention particulière pour l'ingénierie de pointe, la mécanique des fluides, la stratégie millimétrée et le traitement de la data. L'univers hautement technologique de la compétition reflète mon approche méthodique du développement.
                    </p>
                </div>
            </article>

            {/* DANSE SECTION */}
            <article data-cursor="danse" className="bg-gradient-to-br from-[#1a0b2e] to-[#2d1847] border border-purple-900/50 rounded-[40px] p-10 md:p-14 lg:p-16 shadow-[0_20px_60px_rgba(168,85,247,0.15)] hover:border-purple-500/40 hover:shadow-[0_20px_60px_rgba(168,85,247,0.3)] transition-all duration-700 relative overflow-hidden group/danse">
                <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
                <div className="absolute -right-20 -top-20 w-[500px] h-[500px] bg-purple-600/10 blur-[100px] rounded-full group-hover/danse:bg-purple-500/20 transition-colors duration-700 pointer-events-none"></div>
                <Sword weight="duotone" className="absolute left-1/2 -bottom-20 text-white/5 transition-all duration-1000 -rotate-12 group-hover/danse:rotate-0 pointer-events-none" size={400} />

                <div className="relative z-10 flex flex-col xl:flex-row gap-12 items-center">
                    <div className="flex-1">
                        <span className="text-sm font-bold text-purple-400 uppercase tracking-widest block mb-4 px-4 py-2 bg-purple-500/10 border border-purple-500/20 w-max rounded-full shadow-[0_0_15px_rgba(168,85,247,0.2)]">Art & Discipline</span>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white font-outfit mb-6 drop-shadow-[0_0_15px_rgba(168,85,247,0.6)] flex items-center gap-4">
                            Danse Classique
                        </h2>
                        <div className="text-gray-300 text-lg leading-relaxed mb-8 border-l-2 border-purple-500/50 pl-6 bg-gradient-to-r from-purple-500/5 to-transparent py-4 rounded-r-2xl space-y-4">
                            <p>
                                La danse classique est pour moi bien plus qu'une discipline corporelle, c'est un véritable art de vivre exigeant. Avec <strong className="text-purple-300">12 ans de pratique</strong> passionnée, j'ai développé une rigueur absolue, une mémorisation précise et un grand sens de l'esthétisme.
                            </p>
                            <p>
                                Cette passion m'a mené à me produire sur scène pour interpréter de grands ballets classiques, tel que le majestueux <em className="text-purple-300">Lac des Cygnes</em>. Une expérience inoubliable mêlant performance physique, expression artistique et synchronisation parfaite au cœur d'un corps de ballet.
                            </p>
                        </div>
                    </div>
                    
                    <div className="flex-1 w-full flex gap-4 md:gap-6 h-[250px] sm:h-[350px] md:h-[450px]">
                        <img src="/assets/images/LC1.png" alt="Danse Classique pointes" className="w-1/2 h-full object-cover rounded-[2rem] border border-purple-500/30 transform group-hover/danse:-translate-y-2 transition-all duration-700 shadow-[0_10px_30px_rgba(168,85,247,0.2)]" />
                        <img src="/assets/images/LC2.png" alt="Ballet stage" className="w-1/2 h-full object-cover rounded-[2rem] border border-purple-500/30 transform translate-y-6 group-hover/danse:translate-y-2 transition-all duration-700 shadow-[0_10px_30px_rgba(168,85,247,0.2)]" />
                    </div>
                </div>
            </article>

            {/* AUTRES PASSIONS GRID */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <article className="bg-gradient-to-br from-[#0f172a] to-blue-950/20 border border-blue-900/50 rounded-[40px] p-8 lg:p-10 shadow-[0_20px_60px_rgba(59,130,246,0.1)] hover:border-blue-500/30 transition-all duration-700 relative overflow-hidden group/mer flex flex-col h-full">
                    <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
                    <div className="absolute right-0 bottom-0 w-64 h-64 bg-blue-600/10 blur-[80px] rounded-full group-hover/mer:bg-blue-400/20 transition-colors duration-700 pointer-events-none"></div>
                    <Sailboat weight="duotone" className="absolute -left-10 -bottom-10 text-white/5 group-hover/mer:text-blue-500/10 transition-all duration-1000 -rotate-12 group-hover/mer:rotate-0" size={300} />
                    
                    <div className="relative z-10 h-full flex flex-col">
                        <span className="text-xs font-bold text-blue-400 uppercase tracking-widest block mb-4 px-3 py-1 bg-blue-500/10 border border-blue-500/20 w-max rounded-full">Évasion & Éléments</span>
                        <h2 className="text-3xl font-extrabold text-white font-outfit mb-6">Voile</h2>
                        <p className="text-gray-300 text-sm lg:text-base leading-relaxed flex-1 bg-blue-900/10 p-5 rounded-2xl border border-blue-500/10 backdrop-blur-sm shadow-inner mt-auto">
                            La navigation en mer offre un sentiment de liberté absolu. Pratiquer la voile demande une compréhension fine des vents, des courants et une synchronisation en équipe.
                        </p>
                    </div>
                </article>

                <article className="bg-gradient-to-br from-[#064e3b]/20 to-green-950/20 border border-green-900/50 rounded-[40px] p-8 lg:p-10 shadow-[0_20px_60px_rgba(16,185,129,0.1)] hover:border-green-500/30 transition-all duration-700 relative overflow-hidden group/velo flex flex-col h-full">
                    <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
                    <div className="absolute right-0 bottom-0 w-64 h-64 bg-green-600/10 blur-[80px] rounded-full group-hover/velo:bg-green-400/20 transition-colors duration-700 pointer-events-none"></div>
                    <Bicycle weight="duotone" className="absolute -left-10 -bottom-10 text-white/5 group-hover/velo:text-green-500/10 transition-all duration-1000 rotate-12 group-hover/velo:rotate-0" size={300} />
                    
                    <div className="relative z-10 h-full flex flex-col">
                        <span className="text-xs font-bold text-green-400 uppercase tracking-widest block mb-4 px-3 py-1 bg-green-500/10 border border-green-500/20 w-max rounded-full">Endurance</span>
                        <h2 className="text-3xl font-extrabold text-white font-outfit mb-6">Vélo & VTT</h2>
                        <p className="text-gray-300 text-sm lg:text-base leading-relaxed flex-1 bg-green-900/10 p-5 rounded-2xl border border-green-500/10 backdrop-blur-sm shadow-inner mt-auto">
                            Le grand air et l'effort physique me ressourcent. Le vélo est idéal pour explorer de nouveaux paysages et repousser mes limites d'endurance mentale et physique.
                        </p>
                    </div>
                </article>

                <article className="bg-gradient-to-br from-[#3f2c25]/30 to-orange-950/10 border border-orange-900/50 rounded-[40px] p-8 lg:p-10 shadow-[0_20px_60px_rgba(249,115,22,0.1)] hover:border-orange-500/30 transition-all duration-700 relative overflow-hidden group/rando flex flex-col h-full">
                    <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
                    <div className="absolute right-0 top-0 w-64 h-64 bg-orange-600/10 blur-[80px] rounded-full group-hover/rando:bg-orange-500/20 transition-colors duration-700 pointer-events-none"></div>
                    <Mountains weight="duotone" className="absolute -right-10 -bottom-10 text-white/5 group-hover/rando:text-orange-500/10 transition-all duration-1000 rotate-12 group-hover/rando:rotate-0" size={300} />
                    
                    <div className="relative z-10 h-full flex flex-col">
                        <span className="text-xs font-bold text-orange-400 uppercase tracking-widest block mb-4 px-3 py-1 bg-orange-500/10 border border-orange-500/20 w-max rounded-full">Déconnexion nature</span>
                        <h2 className="text-3xl font-extrabold text-white font-outfit mb-6">Randonnée</h2>
                        <p className="text-gray-300 text-sm lg:text-base leading-relaxed flex-1 bg-orange-900/20 p-5 rounded-2xl border border-orange-500/20 backdrop-blur-sm shadow-inner mt-auto">
                            Se confronter à la nature sauvage, marcher pendant des heures avec pour seule récompense de magnifiques points de vue en altitude. La randonnée développe la persévérance.
                        </p>
                    </div>
                </article>
            </div>

        </div>
    );
};

export default Passions;
