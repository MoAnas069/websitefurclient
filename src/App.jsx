import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ErrorBoundary from './components/ErrorBoundary';
import Loading from './components/ui/Loading';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const Craftsmanship = lazy(() => import('./pages/Craftsmanship'));
const About = lazy(() => import('./pages/About'));
const Visit = lazy(() => import('./pages/Visit'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <ScrollToTop />
        <div className="min-h-screen bg-brand-ivory text-brand-charcoal selection:bg-brand-wood selection:text-white flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Suspense fallback={<Loading />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/craftsmanship" element={<Craftsmanship />} />
                <Route path="/about" element={<About />} />
                <Route path="/visit" element={<Visit />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </ErrorBoundary>
    </Router>
  );


}

export default App;
