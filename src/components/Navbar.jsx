import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <Link to="/" className="nav-logo serif">La Table Éternelle</Link>
      <ul className="nav-links">
        <li><Link to="/experience">The Experience</Link></li>
        <li><Link to="/menu">Tasting Menu</Link></li>
        <li><Link to="/alacarte">À La Carte</Link></li>
        <li><Link to="/reservations">Reservations</Link></li>
        <li><Link to="/about">Our Story</Link></li>
      </ul>
      <Link to="/reservations" className="btn nav-cta">Book a Table</Link>
    </nav>
  );
};

export default Navbar;
