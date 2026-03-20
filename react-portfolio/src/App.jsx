import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Projets from './pages/Projets';
import Formations from './pages/Formations';
import Alternance from './pages/Alternance';
import Passions from './pages/Passions';
import CustomCursor from './components/CustomCursor';

// Original Glassmorphism Styles
import './assets/css/style.css';

function App() {
  return (
    <Router>
      {/* Background Orbs ported from HTML */}
      <div className="background-effects">
          <div className="glow-orb orb-1"></div>
          <div className="glow-orb orb-2"></div>
          <div className="glow-orb orb-3"></div>
      </div>

      <div className="min-h-screen bg-[#0a0a0c] text-white font-sans overflow-x-hidden relative">
        <CustomCursor />
        <Header />
        <main className="page-layout mt-[120px]">
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
