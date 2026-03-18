import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ExperiencePage from './pages/ExperiencePage';
import MenuPage from './pages/MenuPage';
import AboutPage from './pages/AboutPage';
import ReservationsPage from './pages/ReservationsPage';

// ScrollToTop component to reset scroll position on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Refresh animations
    const handleReveal = () => {
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const revealTop = el.getBoundingClientRect().top;
        const revealPoint = 150;
        if (revealTop < windowHeight - revealPoint) {
          el.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleReveal);
    setTimeout(handleReveal, 100); // Initial check after transition
    
    return () => window.removeEventListener('scroll', handleReveal);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/alacarte" element={<MenuPage />} /> {/* Using same menu page for demo */}
          <Route path="/reservations" element={<ReservationsPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
