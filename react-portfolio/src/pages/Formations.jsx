import React from "react";
import { GraduationCap, Target } from "@phosphor-icons/react";

const cardClass =
  "bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[32px] p-8 shadow-2xl hover:shadow-[0_10px_40px_rgba(139,92,246,0.15)] hover:-translate-y-1 hover:bg-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden relative group flex flex-col";

const Formations = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 pb-24 pt-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <article
        className={`${cardClass} lg:col-span-4 intro-box`}
        style={{ padding: "40px 48px" }}
      >
        <h1 className="text-3xl md:text-4xl font-outfit font-extrabold flex items-center gap-4 mb-4 text-white">
          <GraduationCap size={36} className="text-cyan-400" /> Parcours
          Académique & Poursuite d'Études
        </h1>
        <p className="text-gray-400 text-lg max-w-4xl leading-relaxed">
          Mon chemin vers une école d'ingénieur. Découvrez mon parcours depuis
          le BAC, mon expérience au BUT Informatique de Lannion, et les écoles
          d'ingénieurs vers lesquelles je m'oriente pour approfondir mes
          compétences en développement, électronique communicante et innovation
          technologique.
        </p>
      </article>

      {/* TIMELINE BOX */}
      <article className={`${cardClass} md:col-span-2`}>
        <h3 className="text-2xl font-bold font-outfit text-white mb-8 border-b border-white/10 pb-4">
          Historique
        </h3>
        <div className="relative pl-6 border-l-2 border-white/10 flex flex-col gap-10">
          <div className="relative group/timeline">
            <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 shadow-[0_0_15px_rgba(139,92,246,0.6)] group-hover/timeline:scale-125 transition-transform animate-pulse"></div>
            <span className="text-xs text-purple-400 font-bold uppercase tracking-wider mb-2 block">
              2026 - 2029 (Projet)
            </span>
            <h4 className="text-xl font-bold text-white mb-2">
              École d'Ingénieur
            </h4>
            <p className="text-sm text-gray-400 leading-relaxed mb-3">
              Poursuite d'études pour approfondir systèmes logiciels,
              architecture et innovation. Intérêts: Fullstack, IoT, Cyber.
            </p>
            <ul className="text-sm text-gray-300 space-y-1">
              <li className="flex items-center gap-2">
                <span className="text-purple-400">→</span> Objectif : Diplôme
                d'Ingénieur
              </li>
            </ul>
          </div>
          <div className="relative group/timeline">
            <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-[#1a1a24] border-2 border-cyan-400 group-hover/timeline:bg-cyan-400 transition-colors"></div>
            <span className="text-xs text-cyan-400 font-bold uppercase tracking-wider mb-2 block">
              2023 - 2026
            </span>
            <h4 className="text-xl font-bold text-white mb-2">
              BUT Informatique - Parcours A
            </h4>
            <p className="text-sm text-gray-400 leading-relaxed mb-3">
              IUT de Lannion - Spécialisation "Réalisation d'applications". 3
              ans de formation intensive.
            </p>
            <ul className="text-sm text-gray-300 space-y-1">
              <li className="flex items-center gap-2">
                <span className="text-cyan-400">→</span> Stage en 2ème année
                chez Orano
              </li>
              <li className="flex items-center gap-2">
                <span className="text-cyan-400">→</span> Alternance en 3ème
                année (Orano TMA)
              </li>
            </ul>
          </div>
          <div className="relative group/timeline">
            <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-[#1a1a24] border-2 border-white/20 group-hover/timeline:border-white/60 transition-colors"></div>
            <span className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-2 block">
              2021 - 2023
            </span>
            <h4 className="text-xl font-bold text-white mb-2">
              Baccalauréat Général
            </h4>
            <p className="text-sm text-gray-400 leading-relaxed mb-3">
              Lycée Naval de Brest - Spécialités Mathématiques & NSI.
            </p>
            <ul className="text-sm text-gray-300 space-y-1">
              <li className="flex items-center gap-2">
                <span className="text-gray-500">→</span> Bases solides en
                programmation Python
              </li>
            </ul>
          </div>
        </div>
      </article>

      {/* STATS BOX */}
      <article
        className={`${cardClass} md:col-span-2 grid grid-cols-2 gap-4`}
        style={{ padding: "24px" }}
      >
        <div className="bg-black/20 border border-white/5 rounded-2xl p-6 flex flex-col justify-center items-center text-center group/stat hover:bg-white/5 transition-colors">
          <span className="text-4xl lg:text-5xl font-extrabold font-outfit text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-2 group-hover/stat:scale-110 transition-transform">
            6
          </span>
          <span className="text-xs text-gray-400 uppercase tracking-widest font-semibold">
            Années d'études
          </span>
        </div>
        <div className="bg-black/20 border border-white/5 rounded-2xl p-6 flex flex-col justify-center items-center text-center group/stat hover:bg-white/5 transition-colors">
          <span className="text-4xl lg:text-5xl font-extrabold font-outfit text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2 group-hover/stat:scale-110 transition-transform">
            8+
          </span>
          <span className="text-xs text-gray-400 uppercase tracking-widest font-semibold">
            Projets majeurs
          </span>
        </div>
        <div className="bg-black/20 border border-white/5 rounded-2xl p-6 flex flex-col justify-center items-center text-center group/stat hover:bg-white/5 transition-colors">
          <span className="text-4xl lg:text-5xl font-extrabold font-outfit text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400 mb-2 group-hover/stat:scale-110 transition-transform">
            2
          </span>
          <span className="text-xs text-gray-400 uppercase tracking-widest font-semibold">
            Expériences Pro
          </span>
        </div>
        <div className="bg-black/20 border border-white/5 rounded-2xl p-6 flex flex-col justify-center items-center text-center group/stat hover:bg-white/5 transition-colors">
          <span className="text-4xl lg:text-5xl font-extrabold font-outfit text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2 group-hover/stat:scale-110 transition-transform">
            50+
          </span>
          <span className="text-xs text-gray-400 uppercase tracking-widest font-semibold">
            Compétences tech
          </span>
        </div>
      </article>

      <div className="lg:col-span-4 mt-8 mb-4 px-4">
        <h2 className="text-2xl font-outfit font-bold flex items-center gap-3 text-white">
          <Target size={28} className="text-purple-400" /> Écoles d'Ingénieur
          Envisagées
        </h2>
      </div>

      <article
        className={`${cardClass} md:col-span-2 lg:col-span-1 bg-gradient-to-br from-indigo-900/20 to-purple-900/10`}
      >
        <span className="bg-purple-500/20 text-purple-300 border border-purple-500/30 text-xs font-bold px-3 py-1 rounded-full w-max mb-4 uppercase tracking-widest">
          Cible Prioritaire
        </span>
        <h3 className="text-xl font-bold text-white mb-1">
          ENSICAEN — Parcours ECSE
        </h3>
        <span className="text-xs text-gray-400 block mb-4 flex items-center gap-1">
          📍 Caen, France
        </span>
        <p className="text-sm text-gray-400 leading-relaxed mb-6 flex-1">
          Parcours "Électronique communicante & systèmes embarqués" par
          apprentissage. Accent sur l'embarqué, l'IoT et les communications
          (co-design soft/hard).
        </p>
        <div className="flex gap-2 flex-wrap mt-auto">
          <span className="bg-white/5 border border-white/10 text-gray-300 text-[10px] font-bold px-2 py-1 rounded-md">
            Apprentissage
          </span>
          <span className="bg-white/5 border border-white/10 text-gray-300 text-[10px] font-bold px-2 py-1 rounded-md">
            IoT
          </span>
          <span className="bg-white/5 border border-white/10 text-gray-300 text-[10px] font-bold px-2 py-1 rounded-md">
            RF
          </span>
        </div>
      </article>

      <article
        className={`${cardClass} md:col-span-2 lg:col-span-1 bg-gradient-to-br from-blue-900/20 to-cyan-900/10`}
      >
        <span className="bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-bold px-3 py-1 rounded-full w-max mb-4 uppercase tracking-widest">
          Cible Prioritaire
        </span>
        <h3 className="text-xl font-bold text-white mb-1">
          ENSICAEN — Parcours I3N
        </h3>
        <span className="text-xs text-gray-400 block mb-4 flex items-center gap-1">
          📍 Caen, France
        </span>
        <p className="text-sm text-gray-400 leading-relaxed mb-6 flex-1">
          Parcours "Ingénierie des Installations Nucléaires et Instrumentation"
          par apprentissage. Focus instrumentation, sûreté et contrôle-commande.
        </p>
        <div className="flex gap-2 flex-wrap mt-auto">
          <span className="bg-white/5 border border-white/10 text-gray-300 text-[10px] font-bold px-2 py-1 rounded-md">
            Apprentissage
          </span>
          <span className="bg-white/5 border border-white/10 text-gray-300 text-[10px] font-bold px-2 py-1 rounded-md">
            Nucléaire
          </span>
          <span className="bg-white/5 border border-white/10 text-gray-300 text-[10px] font-bold px-2 py-1 rounded-md">
            Instrumentation
          </span>
        </div>
      </article>
      <article
        className={`${cardClass} md:col-span-2 lg:col-span-1 bg-gradient-to-br from-blue-900/20 to-cyan-900/10`}
      >
        <span className="bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-bold px-3 py-1 rounded-full w-max mb-4 uppercase tracking-widest">
          Cible Prioritaire
        </span>
        <h3 className="text-xl font-bold text-white mb-1">ESEO</h3>
        <span className="text-xs text-gray-400 block mb-4 flex items-center gap-1">
          📍 Angers, France
        </span>
        <p className="text-sm text-gray-400 leading-relaxed mb-6 flex-1">
          Programme bac+3 Ingénierie Informatique et Electronique
        </p>
        <div className="flex gap-2 flex-wrap mt-auto">
          <span className="bg-white/5 border border-white/10 text-gray-300 text-[10px] font-bold px-2 py-1 rounded-md">
            Apprentissage
          </span>
          <span className="bg-white/5 border border-white/10 text-gray-300 text-[10px] font-bold px-2 py-1 rounded-md">
            Nucléaire
          </span>
          <span className="bg-white/5 border border-white/10 text-gray-300 text-[10px] font-bold px-2 py-1 rounded-md">
            Instrumentation
          </span>
        </div>
      </article>
      <article
        className={`${cardClass} md:col-span-2 lg:col-span-2 bg-gradient-to-br from-teal-900/20 to-blue-900/10`}
      >
        <span className="bg-blue-500/20 text-blue-300 border border-blue-500/30 text-xs font-bold px-3 py-1 rounded-full w-max mb-4 uppercase tracking-widest">
          Cible Prioritaire
        </span>
        <h3 className="text-2xl font-bold text-white mb-1 font-outfit">
          ENSTA Bretagne
        </h3>
        <span className="text-xs text-gray-400 block mb-4 flex items-center gap-1">
          📍 Brest, France
        </span>
        <p className="text-sm text-gray-400 leading-relaxed mb-6 flex-1">
          Grande école d'ingénieur orientée innovation, systèmes complexes et
          domaine maritime/défense, avec un solide département informatique
          (Cyber, IA/ML, Systèmes Connectés).
        </p>
        <div className="flex gap-2 flex-wrap mt-auto">
          <span className="bg-white/5 border border-white/10 text-gray-300 text-xs font-bold px-3 py-1 rounded-md">
            Innovation
          </span>
          <span className="bg-white/5 border border-white/10 text-gray-300 text-xs font-bold px-3 py-1 rounded-md">
            Cyber
          </span>
          <span className="bg-white/5 border border-white/10 text-gray-300 text-xs font-bold px-3 py-1 rounded-md">
            Systèmes Complexes
          </span>
          <span className="bg-white/5 border border-white/10 text-gray-300 text-xs font-bold px-3 py-1 rounded-md">
            Défense
          </span>
        </div>
      </article>
    </div>
  );
};
export default Formations;
