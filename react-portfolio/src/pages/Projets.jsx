import React, { useState } from "react";
import {
  RocketLaunch,
  Funnel,
  FilePdf,
  GithubLogo,
  FigmaLogo,
  Browsers,
  MicrosoftExcelLogo,
  FlagCheckered,
  ChartLineUp,
} from "@phosphor-icons/react";

const cardClass =
  "bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[32px] p-8 shadow-2xl hover:shadow-[0_10px_40px_rgba(139,92,246,0.15)] hover:-translate-y-1 hover:bg-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden relative group flex flex-col";
const titleClass =
  "text-xl font-outfit font-bold flex items-center gap-3 mb-6 text-white";

const Projets = () => {
  const [filter, setFilter] = useState("all");

  return (
    <div className="w-full max-w-7xl mx-auto px-6 pb-24 pt-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <article
        className={`${cardClass} lg:col-span-4 intro-box`}
        style={{ padding: "40px 48px" }}
      >
        <h1 className="text-3xl md:text-4xl font-outfit font-extrabold flex items-center gap-4 mb-4 text-white">
          <RocketLaunch size={36} className="text-purple-400" /> Mes Projets
          (Universitaires & Pros)
        </h1>
        <p className="text-gray-400 text-lg max-w-4xl leading-relaxed">
          Depuis le début de ma formation au BUT Informatique de l'IUT de
          Lannion, j'ai travaillé sur des projets variés couvrant le
          développement logiciel, les bases de données et l'administration
          système. Ces différentes missions m'ont permis de developper mon
          esprit d'analyse et ma capacité de gestion.
        </p>
      </article>

      {/* PROJECT FILTERS */}
      <div
        className={`${cardClass} lg:col-span-4 flex flex-wrap justify-center items-center gap-3 p-6 !flex-row`}
      >
        <span className="text-gray-400 font-semibold mr-4 flex items-center gap-2">
          <Funnel size={18} className="text-purple-400" /> Filtrer :
        </span>
        {["all", "REACT", "VBA", "PHP", "JAVA", "LINUX"].map((f) => (
          <button
            key={f}
            className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${filter === f ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-[0_5px_20px_rgba(139,92,246,0.4)] scale-105" : "bg-black/30 border border-white/5 text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20"}`}
            onClick={() => setFilter(f)}
          >
            {f === "all"
              ? "Tous"
              : f === "REACT"
                ? "F1 & React"
                : f === "PHP"
                  ? "Web / PHP"
                  : f === "LINUX"
                    ? "Système"
                    : f}
          </button>
        ))}
      </div>

      {/* F1 DASHBOARD PROJECT */}
      <article
        data-cursor="f1"
        className={`${cardClass} md:col-span-2 lg:col-span-4 flex md:flex-row flex-col gap-8 bg-gradient-to-br from-[#1a0a0a] to-[#2a0e0e] border-red-900/40 shadow-[0_10px_50px_rgba(239,68,68,0.1)] hover:border-red-500/30 hover:shadow-[0_10px_50px_rgba(239,68,68,0.25)]`}
        style={{
          display: filter === "all" || filter === "REACT" ? "flex" : "none",
        }}
      >
        <FlagCheckered
          weight="duotone"
          size={300}
          className="absolute -right-10 -bottom-20 text-red-500/5 group-hover:text-red-500/10 transition-colors duration-700 -rotate-12 group-hover:rotate-0"
        />
        <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay pointer-events-none"></div>

        <img
          src="assets/images/projet_f1.jpeg"
          alt="F1 Dashboard"
          className="w-45 h-60 object-cover rounded-2xl border border-white/20 shadow-lg group-hover:scale-[1.02] transition-transform duration-500"
        />
        

        <div className="flex flex-col h-full justify-center w-full z-10">
          <span className="text-xs font-bold text-red-500 uppercase tracking-widest block mb-2 px-3 py-1 bg-red-500/10 border border-red-500/20 w-max rounded-md">
            PERSO-01 PASSION
          </span>
          <h3 className="text-3xl font-extrabold text-white font-outfit mb-4 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
            F1 Stats Dashboard
          </h3>
          <div className="flex gap-2 flex-wrap mb-6">
            <span className="bg-red-500/20 border border-red-500/40 text-red-300 text-xs font-bold px-3 py-1 rounded-full shadow-[0_0_10px_rgba(239,68,68,0.3)]">
              REACT
            </span>
            <span className="bg-white/5 border border-white/10 text-gray-300 text-xs font-bold px-3 py-1 rounded-full">
              JSON DATA
            </span>
            <span className="bg-white/5 border border-white/10 text-gray-300 text-xs font-bold px-3 py-1 rounded-full">
              FORMULE 1
            </span>
          </div>
          <p className="text-gray-300 text-base leading-relaxed mb-6 flex-1">
            Projet personnel né d'une passion absolue pour la F1. Application
            React web listant l'ensemble des données statistiques des pilotes du
            championnat 2025. Gestion complète des états et des composants (Team
            Details, Driver Stats, Live Standings).
          </p>
          <div className="flex gap-4 mt-auto flex-wrap">
            <span className="flex items-center gap-2 bg-gradient-to-r from-red-600 to-rose-600 text-white font-bold px-6 py-3 rounded-xl shadow-[0_5px_20px_rgba(239,68,68,0.4)]">
              <FlagCheckered size={20} /> Projet Actif
            </span>
            <a
              href="https://f1-ashen.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/10 border border-white/20 text-white font-bold px-6 py-3 rounded-xl hover:bg-white/20 transition-all hover:scale-105 shadow-[0_5px_15px_rgba(0,0,0,0.2)]"
            >
              <Browsers size={20} /> Visiter le site
            </a>
            <a
              href="https://github.com/jmulliez/f1.git"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-black/40 border border-white/10 text-white font-bold px-6 py-3 rounded-xl hover:bg-black/60 transition-all hover:scale-105 shadow-[0_5px_15px_rgba(0,0,0,0.2)]"
            >
              <GithubLogo size={20} /> GitHub
            </a>
          </div>
        </div>
      </article>

      {/* PROJECTS */}
      <article
        className={`${cardClass} md:col-span-2`}
        style={{
          display: filter === "all" || filter === "VBA" ? "flex" : "none",
        }}
      >
        <MicrosoftExcelLogo
          weight="fill"
          size={160}
          className="absolute -right-10 -bottom-10 text-white/5 group-hover:text-green-500/10 transition-colors duration-500 rotate-12"
        />
        <img
          src="/assets/images/VBA.png"
          alt="Outil VBA"
          className="w-full h-56 object-cover rounded-2xl mb-6 border border-white/10 group-hover:border-green-500/30 transition-colors"
        />
        <div className="flex justify-between items-start mb-4">
          <div>
            <span className="text-xs font-bold text-green-400 uppercase tracking-widest block mb-1">
              ALT-01
            </span>
            <h3 className="text-2xl font-bold text-white font-outfit">
              Logiciel VBA - Suivi Projets (Orano)
            </h3>
          </div>
        </div>
        <div className="flex gap-2 flex-wrap mb-6">
          <span className="bg-green-500/20 border border-green-500/30 text-green-300 text-xs font-bold px-3 py-1 rounded-full">
            VBA
          </span>
          <span className="bg-green-500/20 border border-green-500/30 text-green-300 text-xs font-bold px-3 py-1 rounded-full">
            EXCEL
          </span>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
          Maintenance corrective et évolutive d'un outil de suivi d'activité
          pensé pour les chefs de projet chez Orano. Refactoring, optimisation
          et UX.
        </p>
        <div className="border-t border-white/10 pt-4 mt-auto">
          <ul className="text-sm text-gray-400 space-y-2">
            <li className="flex items-center gap-2">
              <span className="text-green-400">▸</span> Réaliser un
              développement d'apps
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-400">⚙️</span> Optimiser des
              applications
            </li>
          </ul>
        </div>
      </article>

      <article
        className={`${cardClass} md:col-span-2 bg-gradient-to-br from-indigo-900/10 to-purple-900/10`}
        style={{
          display: filter === "all" || filter === "VBA" ? "flex" : "none",
        }}
      >
        <div className="flex justify-between items-start mb-4">
          <div>
            <span className="text-xs font-bold text-purple-400 uppercase tracking-widest block mb-1">
              ALT-02
            </span>
            <h3 className="text-2xl font-bold text-white font-outfit">
              Outils internes VBA (Orano)
            </h3>
            <img
              src="/Logo_Orano.svg"
              alt="Logo Orano"
              className="bg-white rounded-3xl"
            />
          </div>
        </div>
        <div className="flex gap-2 flex-wrap mb-6">
          <span className="bg-purple-500/20 border border-purple-500/30 text-purple-300 text-xs font-bold px-3 py-1 rounded-full">
            VBA
          </span>
          <span className="bg-purple-500/20 border border-purple-500/30 text-purple-300 text-xs font-bold px-3 py-1 rounded-full">
            AUTOMATION
          </span>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
          Conception de nouveaux logiciels Excel/VBA internes (modèles prêts à
          l'emploi, tableaux de bord interactifs) pour faciliter le suivi
          opérationnel.
        </p>
        <div className="border-t border-white/10 pt-4 mt-auto">
          <ul className="text-sm text-gray-400 space-y-2">
            <li className="flex items-center gap-2">
              <span className="text-purple-400">🔧</span> Conception from
              scratch
            </li>
            <li className="flex items-center gap-2">
              <span className="text-purple-400">📊</span> Tableaux de bord
            </li>
          </ul>
        </div>
      </article>

      <article
        className={`${cardClass} lg:col-span-4 flex md:flex-row flex-col gap-8 bg-gradient-to-br from-blue-900/40 to-teal-900/20 border-blue-500/30 shadow-[0_10px_50px_rgba(59,130,246,0.15)]`}
        style={{
          display: filter === "all" || filter === "PHP" ? "flex" : "none",
        }}
      >
        <Browsers
          weight="fill"
          size={250}
          className="absolute -right-20 -bottom-20 text-blue-500/10 group-hover:text-blue-500/20 transition-colors duration-500 rotate-12"
        />
        <div className="w-full md:w-1/2 shrink-0">
          <img
            src="/assets/images/scooby-team.png"
            alt="ScoobyTeam"
            className="w-full h-80 object-cover rounded-3xl border border-white/20 shadow-xl group-hover:scale-[1.02] transition-transform duration-500"
          />
        </div>
        <div className="flex flex-col h-full justify-center w-full z-10">
          <span className="text-xs font-bold text-blue-400 uppercase tracking-widest block mb-2">
            S3-01 PROJECT MAJEUR
          </span>
          <h3 className="text-3xl font-extrabold text-white font-outfit mb-4">
            Plateforme de Services Web
          </h3>
          <div className="flex gap-2 flex-wrap mb-6">
            <span className="bg-blue-500/30 border border-blue-400/50 text-white text-xs font-bold px-3 py-1 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]">
              PHP
            </span>
            <span className="bg-white/10 border border-white/20 text-gray-300 text-xs font-bold px-3 py-1 rounded-full">
              MVC
            </span>
            <span className="bg-white/10 border border-white/20 text-gray-300 text-xs font-bold px-3 py-1 rounded-full">
              AGILE
            </span>
          </div>
          <p className="text-gray-300 text-base leading-relaxed mb-6 flex-1">
            Projet majeur : une plateforme web combinant "Le Bon Coin" et des
            avis "TripAdvisor". Travail en équipe de 6 en méthodologie Agile.
            Frontend responsive et animations.
          </p>
          <div className="flex gap-4 mt-auto">
            <a
              href="https://github.com/LucasOtw/SAE3_ScoobyTeam"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-white text-black font-bold px-6 py-3 rounded-xl hover:scale-105 transition-transform"
            >
              <GithubLogo size={20} /> Code Source
            </a>
            <a
              href="#"
              className="flex items-center gap-2 bg-blue-600 border border-blue-500/50 text-white font-bold px-6 py-3 rounded-xl hover:bg-blue-500 transition-colors"
            >
              <FigmaLogo size={20} /> Maquette
            </a>
          </div>
        </div>
      </article>

      <article
        className={`${cardClass} md:col-span-2`}
        style={{
          display: filter === "all" || filter === "JAVA" ? "flex" : "none",
        }}
      >
        <img
          src="/assets/images/java.PNG"
          alt="Java Planning"
          className="w-full h-56 object-cover rounded-2xl mb-6 border border-white/10 group-hover:border-red-500/30 transition-colors"
        />
        <div className="flex justify-between items-start mb-4">
          <div>
            <span className="text-xs font-bold text-red-400 uppercase tracking-widest block mb-1">
              S2-01 & S2-04
            </span>
            <h3 className="text-2xl font-bold text-white font-outfit">
              Développement Java & Planification
            </h3>
          </div>
        </div>
        <div className="flex gap-2 flex-wrap mb-6">
          <span className="bg-red-500/20 border border-red-500/30 text-red-300 text-xs font-bold px-3 py-1 rounded-full">
            JAVA
          </span>
          <span className="bg-red-500/20 border border-red-500/30 text-red-300 text-xs font-bold px-3 py-1 rounded-full">
            MVC
          </span>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
          Application pour une salle de spectacles (IHM, logique métier, BD).
          Couplée en amont de phase de planification (Matrice RACI, WBS, Gantt)
          avec MS Project.
        </p>
        <div className="mt-auto pt-4 border-t border-white/10">
          <a
            href="https://github.com/ChatPardeur/SAE_205/tree/master/SAE_201/src"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-4 py-2 rounded-xl transition-colors"
          >
            <GithubLogo size={18} /> Source
          </a>
        </div>
      </article>

      <article
        className={`${cardClass} md:col-span-2`}
        style={{
          display: filter === "all" || filter === "LINUX" ? "flex" : "none",
        }}
      >
        <div className="flex justify-between items-start mb-4">
          <div>
            <span className="text-xs font-bold text-yellow-400 uppercase tracking-widest block mb-1">
              S2-02 & S2-03
            </span>
            <h3 className="text-2xl font-bold text-white font-outfit">
              Services Réseau Linux & Big Data
            </h3>
          </div>
        </div>
        <div className="flex gap-2 flex-wrap mb-6">
          <span className="bg-yellow-500/20 border border-yellow-500/30 text-yellow-300 text-xs font-bold px-3 py-1 rounded-full">
            LINUX
          </span>
          <span className="bg-yellow-500/20 border border-yellow-500/30 text-yellow-300 text-xs font-bold px-3 py-1 rounded-full">
            APACHE
          </span>
          <span className="bg-yellow-500/20 border border-yellow-500/30 text-yellow-300 text-xs font-bold px-3 py-1 rounded-full">
            SQL
          </span>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
          Déploiement d'une stack Web complète sous Linux (Apache/PHP/MySQL) et
          exploitation d'une base de données massive (création MCD/MLD, imports
          CSV, requêtes complexes).
        </p>
        <div className="mt-auto pt-4 border-t border-white/10">
          <a
            href="/assets/pdf/Rapport_projet_service_réseaux.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-4 py-2 rounded-xl transition-colors"
          >
            <FilePdf size={18} /> Rapport PDF
          </a>
        </div>
      </article>
    </div>
  );
};
export default Projets;
