import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { House, RocketLaunch, GraduationCap, Buildings, FileText, List, X, Heart } from '@phosphor-icons/react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', path: '/', icon: <House size={20} /> },
    { name: 'Projets', path: '/projets', icon: <RocketLaunch size={20} /> },
    { name: 'Formations', path: '/formations', icon: <GraduationCap size={20} /> },
    { name: 'Alternance', path: '/alternance', icon: <Buildings size={20} /> },
    { name: 'Passions', path: '/passions', icon: <Heart size={20} /> },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-in-out px-6 py-4 ${
        isScrolled 
          ? 'bg-[#0a0a0c]/80 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_40px_rgba(139,92,246,0.1)] py-3' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* LOGO */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold text-xl shadow-[0_0_20px_rgba(139,92,246,0.4)]">
            JM
          </div>
          <span className="font-outfit font-bold text-xl tracking-wide hidden sm:block bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Joseph Mulliez
          </span>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center bg-white/5 border border-white/10 px-2 py-1.5 rounded-full backdrop-blur-md shadow-inner">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) => `
                flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all duration-300
                ${isActive 
                  ? 'bg-gradient-to-r from-purple-500/80 to-blue-500/80 text-white shadow-[0_0_15px_rgba(139,92,246,0.5)]' 
                  : 'text-gray-400 hover:text-white hover:bg-white/10'
                }
              `}
            >
              {link.icon}
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* CTA BUTTON */}
        <div className="hidden md:flex items-center">
          <a
            href="/assets/pdf/CV_MULLIEZ_Joseph.pdf"
            target="_blank"
            rel="noreferrer"
            className="group relative inline-flex items-center justify-center gap-2 px-6 py-2.5 font-semibold text-white transition-all duration-300 ease-in-out bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(139,92,246,0.5)]"
          >
            <FileText size={20} className="group-hover:animate-pulse" />
            <span>Mon CV</span>
          </a>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button 
          className="md:hidden text-white p-2 rounded-lg bg-white/5 border border-white/10"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <List size={24} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-[#0a0a0c]/95 backdrop-blur-xl border-b border-white/10 overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0 py-0'
        }`}
      >
        <div className="flex flex-col gap-2 px-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) => `
                flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all
                ${isActive 
                  ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' 
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
                }
              `}
            >
              {link.icon}
              {link.name}
            </NavLink>
          ))}
          <a
            href="/assets/pdf/CV_MULLIEZ_Joseph.pdf"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-3 mt-4 text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl font-bold"
          >
            <FileText size={20} />
            Télécharger CV
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
