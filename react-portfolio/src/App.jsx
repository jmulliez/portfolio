import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Projets from './pages/Projets';
import Formations from './pages/Formations';
import Alternance from './pages/Alternance';
import Passions from './pages/Passions';
import CustomCursor from './components/CustomCursor';
import F1Loader from './components/F1Loader';
import ApexMeter from './components/ApexMeter';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <Router>
      <F1Loader onComplete={() => setLoading(false)} />
      
      {/* HUD Background Layers */}
      <div className="fixed inset-0 z-0 bg-f1-black pointer-events-none f1-blueprint overflow-hidden">
        <div className="absolute inset-0 hud-grid opacity-20" />
        <div className="absolute inset-0 scanline h-[200vh] fixed w-full" />
        <div className="absolute inset-0 bg-gradient-to-b from-f1-black via-f1-black/40 to-f1-black opacity-80" />
      </div>

      <div className={`min-h-screen text-f1-white font-body overflow-x-hidden relative transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <CustomCursor />
        <ApexMeter />
        <Header />
        
        {/* Dynamic Data Streams */}
        <div className="fixed left-2 top-1/2 -translate-y-1/2 data-stream-y hidden xl:block">
            SECTOR_1: 21.432 // SECTOR_2: 32.109 // SECTOR_3: 18.002 // OPTIMAL: 1:11.543
        </div>
        <div className="fixed right-2 top-1/2 -translate-y-1/2 data-stream-y hidden xl:block rotate-180">
            ENGINE_MAP: STRAT_2 // ERS: OVERTAKE // TYRE_TEMP: 85°C // STATUS: NOMINAL
        </div>
        
        <main className="relative z-10 pt-[100px] pb-24 px-6 md:px-12 max-w-7xl mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projets" element={<Projets />} />
            <Route path="/formations" element={<Formations />} />
            <Route path="/alternance" element={<Alternance />} />
            <Route path="/passions" element={<Passions />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
