import React from 'react';
import { Link } from 'react-router-dom';
import { Utensils, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-20 px-4 bg-white border-t border-black/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-3 mb-6">
            <Utensils className="text-brand-accent" size={32} />
            <span className="text-2xl font-bold font-serif text-neutral-900 tracking-widest uppercase">The Mandhi <span className="text-brand-accent">Pit.</span></span>
          </div>
          <p className="max-w-sm text-neutral-500 font-light text-sm leading-relaxed mb-6">
            Bridging the gap between the Arabian desert and the Kerala coast, one slow-cooked pit at a time.
          </p>
          <div className="flex gap-4">
            {['Instagram', 'Facebook', 'Twitter'].map((social) => (
                <a key={social} href="#" className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center text-neutral-500 hover:border-brand-accent hover:text-brand-accent transition-all duration-500">{social[0]}</a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-16">
            <div>
                <h5 className="text-[10px] uppercase tracking-[0.4em] text-brand-accent font-bold mb-6">Discovery</h5>
                <ul className="space-y-4">
                    {['Our Menu', 'The Ritual', 'Roots', 'Location'].map((item) => (
                        <li key={item}><Link to="/" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">{item}</Link></li>
                    ))}
                </ul>
            </div>
            <div>
                <h5 className="text-[10px] uppercase tracking-[0.4em] text-brand-accent font-bold mb-6">Access</h5>
                <ul className="space-y-4">
                    {['WhatsApp', 'Call Us', 'Table booking', 'Feedback'].map((item) => (
                        <li key={item}><Link to="/" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">{item}</Link></li>
                    ))}
                </ul>
            </div>
        </div>
      </div>
      <div className="mt-20 pt-8 border-t border-black/5 text-center">
        <p className="text-[10px] uppercase tracking-[0.4em] text-neutral-400 flex items-center justify-center gap-2">
            © 2026 The Mandhi Pit. Hand-crafted with <Heart size={12} className="text-red-600" /> in Kerala.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
