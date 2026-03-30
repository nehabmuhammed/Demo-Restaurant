import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ScrollAnimationProvider from './components/ScrollAnimations';

const App = () => {
  return (
    <Router>
      <ScrollAnimationProvider>
        <div className="app">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Keeping placeholders for now, but focus is on Home */}
            <Route path="/menu" element={<Home />} />
            <Route path="/about" element={<Home />} />
            <Route path="/reservations" element={<Home />} />
          </Routes>
          <Footer />
        </div>
      </ScrollAnimationProvider>
    </Router>
  );
};

export default App;

