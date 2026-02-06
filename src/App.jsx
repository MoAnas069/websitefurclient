import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Craftsmanship from './pages/Craftsmanship';
import About from './pages/About';
import Visit from './pages/Visit';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-brand-ivory text-brand-charcoal selection:bg-brand-wood selection:text-white flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/craftsmanship" element={<Craftsmanship />} />
            <Route path="/about" element={<About />} />
            <Route path="/visit" element={<Visit />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
