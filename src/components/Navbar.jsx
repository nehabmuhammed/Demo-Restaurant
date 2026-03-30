import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Utensils, Menu as MenuIcon, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 py-4 md:px-12 md:py-6 flex items-center justify-between ${isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-black/5 py-3 md:py-4' : 'bg-transparent'}`}>
      <Link to="/" className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-brand-accent flex items-center justify-center text-white">
          <Utensils size={20} />
        </div>
        <div className="flex flex-col">
          <span className={`text-xl font-bold font-serif tracking-tighter transition-colors duration-500 ${isScrolled ? 'text-neutral-900' : 'text-neutral-900'}`}>THE MANDHI <span className="text-brand-accent">PIT.</span></span>
          <span className="text-[8px] uppercase tracking-[0.4em] text-brand-accent font-bold">Kerala - Arabian Fusion</span>
        </div>
      </Link>

      <div className="hidden md:flex items-center gap-10">
        {['Menu', 'The Ritual', 'Roots', 'Location'].map((item) => (
          <Link 
            key={item} 
            to="/" 
            className={`text-[10px] uppercase tracking-[0.3em] font-bold transition-colors duration-500 ${isScrolled ? 'text-neutral-600 hover:text-brand-accent' : 'text-neutral-700 hover:text-brand-accent'}`}
          >
            {item}
          </Link>
        ))}
        <Link to="/" className="px-6 py-3 border border-brand-accent text-brand-accent text-[10px] uppercase font-bold tracking-widest rounded-full hover:bg-brand-accent hover:text-brand-primary transition-all duration-500 hover:shadow-[0_0_30px_rgba(212,175,55,0.2)]">
          Book Table
        </Link>
      </div>

      <button 
        className="md:hidden text-neutral-900"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X /> : <MenuIcon />}
      </button>

      {/* Mobile Menu Placeholder - Simplified for demo */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-black/5 px-6 py-8 flex flex-col gap-6 md:hidden shadow-lg">
            {['Menu', 'Process', 'About', 'Contact'].map((item) => (
            <Link key={item} to="/" className="text-xl font-serif text-neutral-900">{item}</Link>
            ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
