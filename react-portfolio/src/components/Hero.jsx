import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 z-10 w-full">
      <div className="flex-1 flex flex-col items-start text-left">
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium backdrop-blur-sm animate-pulse">
          <span className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_8px_#a855f7]"></span>
          Recherche Ecole Ingénieur (2026-2029)
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
          Construire des <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400">expériences digitales</span> premium.
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed">
          Je suis un développeur Full-Stack fraîchement diplômé d'un BUT Informatique, et je transforme les idées ambitieuses en applications web élégantes et ultra-performantes. Actuellement en poste chez Orano Projets.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Link to="/projets" className="group flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-gray-200 shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all">
            Explorer les projets
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <a href="/assets/pdf/recherche_ecole.pdf" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 hover:border-white/20 transition-all">
            <Download size={18} />
            Télécharger le CV
          </a>
        </div>
      </div>
      <div className="flex-1 relative w-full max-w-[500px] aspect-square flex items-center justify-center">
        <div className="relative w-full h-full animate-[spin_60s_linear_infinite]">
          <div className="absolute top-10 right-10 w-48 h-48 bg-gradient-to-br from-purple-500/20 to-transparent backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl rotate-12"></div>
          <div className="absolute bottom-10 left-10 w-56 h-32 bg-gradient-to-br from-blue-500/20 to-cyan-500/10 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl -rotate-6 delay-150"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-tr from-purple-600/30 via-transparent to-blue-500/20 backdrop-blur-2xl border border-white/20 rounded-[40px] shadow-[0_0_50px_rgba(139,92,246,0.3)] z-10 flex items-center justify-center overflow-hidden">
             <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-purple-400 to-cyan-400 blur-2xl opacity-60 mix-blend-screen animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
