import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Download, Github, Linkedin, Briefcase } from 'lucide-react';

const HeaderHero = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'Projects', 'About', 'Contact'];

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-white overflow-hidden relative font-sans">
      {/* Animated Glowing Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/30 rounded-full blur-[120px] mix-blend-screen animate-pulse"></div>
      <div className="absolute top-[20%] right-[-10%] w-[30%] h-[30%] bg-blue-600/20 rounded-full blur-[100px] mix-blend-screen"></div>
      <div className="absolute bottom-[-20%] left-[20%] w-[50%] h-[50%] bg-cyan-600/20 rounded-full blur-[120px] mix-blend-screen"></div>

      {/* Sticky Header */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-400 ${
          isScrolled
            ? 'py-4 bg-[#0a0a0c]/70 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Left: Branding */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center font-bold text-lg shadow-[0_0_15px_rgba(139,92,246,0.5)] group-hover:shadow-[0_0_25px_rgba(139,92,246,0.8)] transition-all">
              JM
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              Joseph.dev
            </span>
          </a>

          {/* Center: Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 bg-white/5 px-2 py-1.5 rounded-full border border-white/10 backdrop-blur-md shadow-inner">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={`#${link.toLowerCase()}`}
                className="px-5 py-2 rounded-full text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Right: CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden md:flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/10 border border-white/20 text-sm font-semibold hover:bg-white/20 hover:border-purple-500/50 transition-all hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]"
            >
              <Briefcase size={16} className="text-purple-400" />
              Hire me
            </a>
            <button
              className="md:hidden text-gray-300 hover:text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#0a0a0c]/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-4 shadow-2xl">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={`#${link.toLowerCase()}`}
                className="text-lg font-medium text-gray-300 hover:text-purple-400 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-4 flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold shadow-[0_0_20px_rgba(139,92,246,0.4)]"
            >
              Hire me
            </a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 z-10">
        
        {/* Left Content */}
        <div className="flex-1 flex flex-col items-start text-left">
          {/* Floating Badge */}
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 text-green-400 text-sm font-medium backdrop-blur-sm animate-pulse">
            <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e]"></span>
            Available for work
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
            Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400">digital experiences</span> that matter.
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed">
            I'm a Full-Stack Developer specializing in React, Next.js, and modern UX architectures. I transform bold ideas into elegant, high-performance web applications.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a href="#projects" className="group flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-gray-200 shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all">
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#resume" className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 hover:border-white/20 transition-all">
              <Download size={18} />
              Download CV
            </a>
          </div>

          <div className="mt-12 flex items-center gap-6">
            <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Connect</span>
            <div className="h-px w-12 bg-gray-700"></div>
            <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all"><Github size={20}/></a>
            <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-[#0a66c2] transition-all"><Linkedin size={20}/></a>
          </div>
        </div>

        {/* Right Abstract Visual (Bento Glass Elements) */}
        <div className="flex-1 relative w-full max-w-[500px] aspect-square flex items-center justify-center">
          <div className="relative w-full h-full animate-[spin_60s_linear_infinite]">
            <div className="absolute top-10 right-10 w-48 h-48 bg-gradient-to-br from-purple-500/20 to-transparent backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl rotate-12"></div>
            <div className="absolute bottom-10 left-10 w-56 h-32 bg-gradient-to-br from-blue-500/20 to-cyan-500/10 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl -rotate-6 delay-150"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-tr from-purple-600/30 via-transparent to-blue-500/20 backdrop-blur-2xl border border-white/20 rounded-[40px] shadow-[0_0_50px_rgba(139,92,246,0.3)] z-10 flex items-center justify-center overflow-hidden">
               {/* Abstract 3D-like glowing element inside */}
               <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-purple-400 to-cyan-400 blur-2xl opacity-60 mix-blend-screen animate-pulse"></div>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
};

export default HeaderHero;
