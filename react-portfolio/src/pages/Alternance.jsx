import React from 'react';
import { Buildings, CheckCircle, Atom } from '@phosphor-icons/react';

const cardClass = "bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[32px] p-8 shadow-2xl hover:shadow-[0_10px_40px_rgba(139,92,246,0.15)] hover:-translate-y-1 hover:bg-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden relative group flex flex-col";

const Alternance = () => {
    return (
        <div className="w-full max-w-7xl mx-auto px-6 pb-24 pt-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <article className={`${cardClass} md:col-span-2 lg:col-span-2 lg:row-span-2 bg-gradient-to-br from-yellow-500/10 to-orange-500/5`} style={{padding: '40px 48px'}}>
                <Buildings size={200} className="absolute -right-10 -bottom-10 text-yellow-500/5 group-hover:text-yellow-500/10 transition-colors duration-500 rotate-12" />
                <div className="mb-8">
                    <span className="bg-yellow-400/20 text-yellow-400 border border-yellow-400/30 text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest shadow-[0_0_15px_rgba(250,204,21,0.2)]">Actuellement en poste</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-outfit font-extrabold flex items-center gap-4 mb-6 text-white"><Buildings size={40} className="text-yellow-400 shrink-0" /> Alternance Orano Projets</h1>
                <p className="text-gray-300 text-lg leading-relaxed mb-6 font-medium">Orano Projets est l'entité d'ingénierie et de pilotage de grands projets industriels du groupe mondial Orano (nucléaire civil).</p>
                <p className="text-gray-400 text-base leading-relaxed relative z-10 bg-black/20 p-6 rounded-2xl border border-white/5">
                    <strong className="text-white block mb-2">Ma mission :</strong> 
                    Fiabiliser et accélérer le suivi d'activités via la maintenance et la création de nouveaux logiciels métier sous Excel (VBA). Ce travail permet aux chefs de projet de rationaliser leur reporting, garantissant la conformité, la qualité et la rapidité dans un domaine extrêmement réglementé.
                </p>
            </article>

            <article className={`${cardClass} md:col-span-2 lg:col-span-2 lg:row-span-2 grid grid-cols-2 gap-4`} style={{padding: '24px'}}>
                <div className="bg-black/20 border border-white/5 rounded-3xl p-6 flex flex-col justify-center items-center text-center group/stat hover:bg-white/5 transition-colors">
                    <span className="text-4xl lg:text-6xl font-extrabold font-outfit text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 mb-2 group-hover/stat:scale-110 transition-transform">~4,9</span>
                    <span className="text-xs text-gray-400 uppercase tracking-widest font-semibold">Milliards € CA (2024)</span>
                </div>
                <div className="bg-black/20 border border-white/5 rounded-3xl p-6 flex flex-col justify-center items-center text-center group/stat hover:bg-white/5 transition-colors">
                    <span className="text-4xl lg:text-6xl font-extrabold font-outfit text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-2 group-hover/stat:scale-110 transition-transform">16k+</span>
                    <span className="text-xs text-gray-400 uppercase tracking-widest font-semibold">Collaborateurs</span>
                </div>
                <div className="bg-black/20 border border-white/5 rounded-3xl p-6 flex flex-col justify-center items-center text-center group/stat hover:bg-white/5 transition-colors">
                    <span className="text-4xl lg:text-6xl font-extrabold font-outfit text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 mb-2 group-hover/stat:scale-110 transition-transform">30+</span>
                    <span className="text-xs text-gray-400 uppercase tracking-widest font-semibold">Sites en France</span>
                </div>
                <div className="bg-black/20 border border-white/5 rounded-3xl p-6 flex flex-col justify-center items-center text-center group/stat hover:bg-white/5 transition-colors">
                    <span className="text-4xl lg:text-6xl font-extrabold font-outfit text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-400 mb-2 group-hover/stat:scale-110 transition-transform">15+</span>
                    <span className="text-xs text-gray-400 uppercase tracking-widest font-semibold">Pays de présence</span>
                </div>
            </article>

            <article className={`${cardClass} lg:col-span-4`}>
                <h3 className="text-2xl font-bold font-outfit text-white mb-8 border-b border-white/10 pb-4 flex items-center gap-3"><CheckCircle size={28} className="text-green-400" /> Mes Missions et Réalisations</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                    <li className="flex items-start gap-4">
                        <span className="text-green-400 text-xl font-bold mt-1">→</span>
                        <p className="text-sm text-gray-400 leading-relaxed"><strong className="text-white">Maintenance corrective :</strong> Stabilisation des macros, gestion des erreurs, sécurisation des entrées pour les outils Legacy.</p>
                    </li>
                    <li className="flex items-start gap-4">
                        <span className="text-green-400 text-xl font-bold mt-1">→</span>
                        <p className="text-sm text-gray-400 leading-relaxed"><strong className="text-white">Maintenance évolutive :</strong> Nouveaux filtres, exports automatisés, indicateurs KPI et vues synthétiques.</p>
                    </li>
                    <li className="flex items-start gap-4">
                        <span className="text-green-400 text-xl font-bold mt-1">→</span>
                        <p className="text-sm text-gray-400 leading-relaxed"><strong className="text-white">Création d'outils from scratch :</strong> Conception complète de logiciels Excel/VBA dédiés au suivi d'activité et gestion de projet (formulaires dynamiques, dashboards).</p>
                    </li>
                    <li className="flex items-start gap-4">
                        <span className="text-green-400 text-xl font-bold mt-1">→</span>
                        <p className="text-sm text-gray-400 leading-relaxed"><strong className="text-white">Refactoring VBA :</strong> Factorisation de code, nommage explicite des variables, suppression des boucles coûteuses pour des performances optimales.</p>
                    </li>
                    <li className="flex items-start gap-4">
                        <span className="text-green-400 text-xl font-bold mt-1">→</span>
                        <p className="text-sm text-gray-400 leading-relaxed"><strong className="text-white">UX et Accompagnement :</strong> Amélioration des interfaces, ajout de raccourcis clavier, rédaction de documentations "pas-à-pas" et support IT direct aux utilisateurs.</p>
                    </li>
                </ul>
            </article>

            <article className={`${cardClass} lg:col-span-4`}>
                <h3 className="text-2xl font-bold font-outfit text-white mb-2 flex items-center gap-3"><Atom size={28} className="text-blue-400" /> Contexte : Le Cycle du Combustible Nucléaire (Orano)</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-3xl">Appréhender le métier d'Orano est crucial pour adapter les solutions logicielles : souveraineté énergétique, gestion des déchets (Cigéo), sûreté zéro-défaut, etc.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-black/30 border border-white/5 rounded-2xl p-6 hover:bg-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-2">
                        <h4 className="text-lg font-bold text-white mb-3">⛏️ Mines & Conversion</h4>
                        <p className="text-xs text-gray-400 leading-relaxed">Exploration et transformation du minerai d'uranium brut en UF6 purifié.</p>
                    </div>
                    <div className="bg-black/30 border border-white/5 rounded-2xl p-6 hover:bg-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-2">
                        <h4 className="text-lg font-bold text-white mb-3">⚡ Enrichissement & Fabrication</h4>
                        <p className="text-xs text-gray-400 leading-relaxed">Enrichissement de l'uranium et production d'assemblages pour les réacteurs (Georges Besse II).</p>
                    </div>
                    <div className="bg-black/30 border border-white/5 rounded-2xl p-6 hover:bg-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-2">
                        <h4 className="text-lg font-bold text-white mb-3">♻️ Recyclage & Démantèlement</h4>
                        <p className="text-xs text-gray-400 leading-relaxed">Traitement des combustibles usés à La Hague (96% recyclable) et gestion complexe des déchets.</p>
                    </div>
                    <div className="bg-black/30 border border-white/5 rounded-2xl p-6 hover:bg-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-2">
                        <h4 className="text-lg font-bold text-white mb-3">🏥 Innovation (Orano Med)</h4>
                        <p className="text-xs text-gray-400 leading-relaxed">Filiale spécialisée dans le croisement du nucléaire et des biotechnologies contre le cancer.</p>
                    </div>
                </div>
            </article>

        </div>
    );
};
export default Alternance;
