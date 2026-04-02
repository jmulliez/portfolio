import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { List, X, FileText } from 'lucide-react';

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
    { name: 'HOME', path: '/', id: '01' },
    { name: 'PROJECTS', path: '/projets', id: '02' },
    { name: 'ACADEMIC', path: '/formations', id: '03' },
    { name: 'CAREER', path: '/alternance', id: '04' },
    { name: 'PASSIONS', path: '/passions', id: '05' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-6 ${
        isScrolled 
          ? 'bg-f1-black/90 backdrop-blur-md border-b border-f1-cyan/20 py-3' 
          : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between font-technical">
        {/* LOGO / SYSTEM ID */}
        <div className="flex items-center gap-4 group cursor-pointer">
          <div className="relative w-10 h-10 border border-f1-cyan/30 flex items-center justify-center overflow-hidden">
            <motion.div 
               animate={{ y: [-40, 40] }}
               transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
               className="absolute inset-0 bg-f1-cyan/10"
            />
            <span className="text-f1-cyan font-bold text-lg relative z-10">JM</span>
          </div>
          <div className="flex flex-col">
            <span className="text-f1-white text-sm font-bold tracking-[0.2em]">JOSEPH.MULLIEZ</span>
            <span className="text-f1-cyan/60 text-[8px] tracking-[0.3em]">SYSTEM.READY // V2.0</span>
          </div>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) => `
                relative px-6 py-2 group transition-all duration-300
                ${isActive ? 'text-f1-cyan' : 'text-f1-white/40 hover:text-f1-white'}
              `}
            >
              {({ isActive }) => (
                <>
                  <div className="flex flex-col items-center">
                    <div className="flex gap-1 mb-1">
                        <div className={`w-1 h-1 rounded-full ${link.id === '01' ? 'bg-f1-red' : 'bg-f1-cyan/20'}`} />
                        <div className={`w-1 h-1 rounded-full ${isActive ? 'bg-f1-cyan' : 'bg-f1-cyan/20'}`} />
                        <div className={`w-1 h-1 rounded-full ${link.id === '05' ? 'bg-f1-red/40' : 'bg-f1-cyan/20'}`} />
                    </div>
                    <span className="text-[8px] mb-1 opacity-40 group-hover:opacity-100 transition-opacity">
                      SEC.{link.id}
                    </span>
                    <span className="text-xs font-bold tracking-widest">{link.name}</span>
                  </div>
                  
                  {isActive && (
                    <motion.div 
                      layoutId="nav-indicator"
                      className="absolute -bottom-[22px] left-0 right-0 h-[2px] bg-f1-cyan shadow-[0_0_10px_#00ffcc]"
                    />
                  )}
                  <div className="absolute top-0 left-0 w-[1px] h-2 border-l border-f1-cyan/0 group-hover:border-f1-cyan/40 transition-all" />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* ACCESS KEY / CV */}
        <div className="hidden md:flex items-center gap-6">
           <div className="h-8 w-[1px] bg-white/10" />
           <a
            href="/assets/pdf/CV_MULLIEZ_Joseph.pdf"
            target="_blank"
            rel="noreferrer"
            className="group relative flex items-center gap-3 px-6 py-2 border border-f1-cyan/40 hover:border-f1-cyan transition-all overflow-hidden"
          >
            <motion.div 
              whileHover={{ x: '100%' }}
              initial={{ x: '-100%' }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 bg-f1-cyan/10"
            />
            <FileText size={14} className="text-f1-cyan" />
            <span className="text-[10px] font-bold tracking-widest text-f1-white">ACCESS.CV</span>
          </a>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button 
          className="md:hidden text-f1-cyan p-2 border border-f1-cyan/20"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <List size={24} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-f1-black/95 backdrop-blur-xl border-b border-f1-cyan/20 overflow-hidden font-technical"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) => `
                    flex justify-between items-center px-4 py-3 border-l-2 transition-all
                    ${isActive 
                      ? 'border-f1-cyan bg-f1-cyan/10 text-f1-white' 
                      : 'border-transparent text-f1-white/40 hover:text-f1-white hover:bg-white/5'
                    }
                  `}
                >
                  <span className="text-xs tracking-widest font-bold">{link.name}</span>
                  <span className="text-[10px] opacity-40">CH.{link.id}</span>
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
