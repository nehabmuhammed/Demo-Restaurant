import React from 'react';
import { ArrowRight, Flame, Utensils, ChefHat, Sprout, Heart, Star, MapPin, Phone, Mail } from 'lucide-react';
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="flex flex-col w-full bg-brand-primary overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
         <div className="absolute inset-0 z-0">
            <img 
               src="/images/mandhi_hero.png" 
               alt="Hero Background" 
               className="w-full h-full object-cover scale-100 animate-ken-burns"
            />
            <div className="absolute inset-0 bg-white/10" />
            <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-transparent to-white/60 opacity-30" />
         </div>

         {/* Authority Badge */}
         <div className="absolute top-32 right-12 md:right-24 z-20 hidden md:block">
            <div className="relative w-32 h-32 flex items-center justify-center">
               <div className="absolute inset-0 border border-brand-accent/30 rounded-full animate-spin-slow" />
               <div className="text-center">
                  <span className="block text-[10px] uppercase tracking-widest text-brand-accent font-bold">Original</span>
                  <span className="block text-lg font-serif italic text-neutral-900">Recipe</span>
                  <div className="w-8 h-px bg-brand-accent mx-auto mt-1" />
               </div>
            </div>
         </div>

         <div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}
               className="mb-8"
            >
               <span className="px-4 py-2 rounded-full border border-brand-accent/20 bg-brand-accent/5 text-[10px] uppercase tracking-[0.4em] font-bold text-brand-accent">
                  Since 1998 • Authentic Kuzhi Method
               </span>
            </motion.div>

            <h1 className="text-6xl md:text-9xl font-bold tracking-tighter text-neutral-900 mb-8 font-serif leading-[0.9]">
               <motion.span 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="block"
               >
                  The Mandhi
               </motion.span>
               <motion.span 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="block italic text-brand-accent"
               >
                  Pit.
               </motion.span>
            </h1>

            <motion.p
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 1, delay: 0.6 }}
               className="text-lg md:text-xl text-neutral-600 max-w-2xl mb-12 font-light leading-relaxed px-4"
            >
               Where Arabian tradition meets the lush spices of Kerala. Experience the soulful depth of slow-smoked perfection, cooked deep within the earth.
            </motion.p>

            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 1, delay: 0.8 }}
               className="flex flex-col sm:flex-row gap-6 items-center"
            >
               <a href="#menu" className="inline-flex items-center justify-center gap-3 px-12 py-5 rounded-full bg-brand-accent text-white font-bold uppercase tracking-widest text-xs transition-all duration-500 hover:bg-neutral-900 hover:shadow-[0_20px_40px_rgba(197,160,89,0.3)] hover:-translate-y-1 active:scale-95 group">
                  Explore Menu 
                  <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
               </a>
               <a href="#booking" className="inline-flex items-center justify-center gap-3 px-12 py-5 rounded-full border-2 border-brand-accent text-brand-accent font-bold uppercase tracking-widest text-xs transition-all duration-500 hover:bg-brand-accent hover:text-white hover:shadow-[0_20px_40px_rgba(197,160,89,0.2)] hover:-translate-y-1 active:scale-95">
                  Book a Table
               </a>
            </motion.div>
         </div>

         {/* Scroll Indicator */}
         <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-20">
            <div className="w-px h-12 bg-gradient-to-b from-brand-accent to-transparent" />
            <span className="text-[10px] uppercase tracking-[0.5em] text-brand-accent font-bold">Discover</span>
         </div>
      </section>

      {/* The Ritual (Services) */}
      <section className="py-32 bg-neutral-50 px-4 relative overflow-hidden" data-section-fade>
         <div className="absolute top-20 -right-20 text-[20vw] font-serif font-bold text-black/[0.02] select-none pointer-events-none whitespace-nowrap">
            KUZHIMANDHI
         </div>
         <div className="max-w-7xl mx-auto relative z-10">
            <div className="mb-24">
               <h2 className="text-sm font-semibold text-brand-accent tracking-[0.3em] uppercase mb-4">The Secret Ritual</h2>
               <div className="inline-block">
                  <h3 className="text-5xl md:text-7xl font-bold text-neutral-900 tracking-tight font-serif leading-tight" data-split-text>
                     The Alchemy of <br /><span className="italic text-brand-accent">Smoke & Spice</span>.
                  </h3>
                  <div className="gold-line h-0.5 bg-brand-accent mt-4" />
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
               {[
                  {
                     icon: <Flame size={32} />,
                     title: "Underground Pit",
                     description: "The traditional Kuzhi method where heat is trapped underground for maximum tenderness.",
                     delay: "md:mt-0"
                  },
                  {
                     icon: <ChefHat size={32} />,
                     title: "Heirloom Spices",
                     description: "A secret blend of 14 Arabian spices tempered with Kerala's own fresh pepper and cloves.",
                     delay: "md:mt-24"
                  },
                  {
                     icon: <Utensils size={32} />,
                     title: "Fragrant Basmati",
                     description: "Extra long-grain rice infused with the drippings of slow-roasted meat for legendary flavor.",
                     delay: "md:mt-48"
                  }
               ].map((item, i) => (
                  <div key={i} className={`${item.delay}`} data-service-card>
                     <div className="group relative p-8 bg-white border border-black/5 rounded-2xl hover:border-brand-accent/30 transition-all duration-700 shadow-sm">
                        <div className="w-16 h-16 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent mb-8 group-hover:bg-brand-accent group-hover:text-white transition-all">
                           {item.icon}
                        </div>
                        <h4 className="text-2xl font-bold mb-4 text-neutral-900 font-serif">{item.title}</h4>
                        <p className="text-neutral-600 leading-relaxed font-light">{item.description}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Editorial Gallery */}
      <section className="py-40 px-4 bg-brand-primary relative overflow-hidden" data-section-fade>
         <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-6">
               <div className="max-w-2xl">
                  <h2 className="text-sm font-semibold text-brand-accent tracking-[0.3em] uppercase mb-4">The Sensory Collection</h2>
                  <div className="inline-block">
                     <h2 className="text-6xl md:text-8xl font-bold tracking-tight mb-4 text-neutral-900 font-serif" data-split-text>The <span className="italic text-brand-accent">Feast</span>.</h2>
                     <div className="gold-line h-0.5 bg-brand-accent mt-1" />
                  </div>
                  <p className="text-2xl text-neutral-500 font-light mt-8 max-w-lg leading-relaxed" data-text-reveal>
                     Visual poetry for the hungry soul. Every plate is a masterpiece of tradition and taste.
                  </p>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
               <div className="md:col-span-7 h-[600px] md:h-[800px]" data-gallery-reveal>
                  <div className="group relative w-full h-full rounded-3xl overflow-hidden bg-neutral-900">
                     <img src="/images/mandhi_gallery_1.png" alt="Beef Mandhi" className="w-full h-full object-cover" />
                     <div className="absolute inset-x-0 bottom-0 p-12 bg-gradient-to-t from-black via-transparent to-transparent">
                        <span className="text-brand-accent font-bold tracking-widest uppercase text-xs mb-4 block">Signature 01</span>
                        <h4 className="text-4xl font-bold text-white font-serif">Slow-Burn Beef Mandhi</h4>
                        <p className="text-neutral-400 mt-2">Derreri beef slow-cooked for 8 hours.</p>
                     </div>
                  </div>
               </div>
               <div className="md:col-span-5 flex flex-col gap-12">
                  <div className="h-[400px]" data-gallery-reveal>
                     <div className="group relative w-full h-full rounded-3xl overflow-hidden bg-white shadow-sm">
                        <img src="/images/mandhi_pit.png" alt="Pit Cooking" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-white/40 group-hover:bg-white/0 transition-all duration-700" />
                        <div className="absolute inset-x-8 bottom-8">
                           <h4 className="text-2xl font-serif text-neutral-900">The Pit Ritual</h4>
                        </div>
                     </div>
                  </div>
                  <div className="h-[360px]" data-gallery-reveal>
                     <div className="group relative w-full h-full rounded-3xl overflow-hidden bg-white shadow-sm flex items-center justify-center p-12 text-center border border-black/5">
                        <div>
                           <p className="text-brand-accent font-serif text-3xl italic mb-6">"Flavor that stays in your heart."</p>
                           <div className="w-12 h-px bg-brand-accent mx-auto" />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Horizontal Scroll Selection */}
      <section data-horizontal-scroll className="relative bg-neutral-50 border-y border-neutral-100">
         <div data-horizontal-inner className="flex items-center h-screen gap-0">
            <div className="flex-shrink-0 w-screen h-full flex items-center justify-center px-12">
               <div className="max-w-2xl text-center">
                  <h2 className="text-sm font-semibold text-brand-accent tracking-[0.4em] uppercase mb-8">The Selection</h2>
                  <h3 className="text-6xl md:text-8xl font-bold text-neutral-900 font-serif mb-8 leading-tight">Flavor <br /><span className="text-brand-accent italic">Odyssey</span></h3>
                  <div className="mt-12 flex flex-col items-center">
                     <div className="w-px h-24 bg-gradient-to-b from-brand-accent to-transparent" />
                     <p className="text-[10px] uppercase tracking-[0.4em] text-brand-accent mt-4">Scroll Sideways</p>
                  </div>
               </div>
            </div>
            {[
               { img: '/images/mandhi_hero.png', title: 'Chicken Mandhi', cat: 'Traditional' },
               { img: '/images/mandhi_gallery_1.png', title: 'Beef Special', cat: 'Premium' },
               { img: '/images/mandhi_hero.png', title: 'Alfaham Chicken', cat: 'Smoked' },
            ].map((item, i) => (
               <div key={i} data-h-panel className="flex-shrink-0 w-[80vw] h-[75vh] relative group overflow-hidden rounded-[2.5rem] mx-8 bg-neutral-50 shadow-lg border border-black/5">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover opacity-100 group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/20 to-transparent" />
                  <div className="absolute bottom-12 left-12">
                     <span className="text-brand-accent font-bold tracking-widest uppercase text-xs mb-3 block">{item.cat}</span>
                     <h4 className="text-5xl font-bold text-neutral-900 font-serif">{item.title}</h4>
                  </div>
               </div>
            ))}
         </div>
      </section>

      {/* About Section */}
      <section className="relative py-40 bg-brand-primary overflow-hidden" data-section-fade>
         <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-12 gap-20 items-center">
            <div className="md:col-span-6 relative">
               <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-white/10">
                  <img src="/images/mandhi_pit.png" alt="Our Story" className="w-full h-full object-cover grayscale opacity-70" />
               </div>
               <div className="absolute -bottom-12 -right-12 w-2/3 aspect-square rounded-3xl overflow-hidden border-8 border-brand-primary hidden md:block">
                  <img src="/images/mandhi_gallery_1.png" alt="Chef Work" className="w-full h-full object-cover" />
               </div>
            </div>
            <div className="md:col-span-6">
               <h2 className="text-sm font-semibold text-brand-accent tracking-[0.4em] uppercase mb-6">Our Roots</h2>
               <h3 className="text-6xl md:text-8xl font-bold font-serif text-neutral-900 mb-10" data-split-text>Kerala Soul,<br /><span className="text-brand-accent italic">Arabian Essence.</span></h3>
               <p className="text-xl text-neutral-600 mb-12 font-light leading-relaxed max-w-lg" data-text-reveal>
                  Born in the spice-rich soil of Kerala, The Mandhi Pit brings the ancient desert tradition of slow-cooked meat to the lush coast. We believe in patience, heat, and the intoxicating dance of smoke.
               </p>
               <div className="grid grid-cols-2 gap-8 mb-16" data-text-reveal>
                  <div>
                     <h5 className="text-brand-accent font-serif text-xl mb-2 italic">Craft</h5>
                     <p className="text-neutral-700 text-sm">Authentic pit-cooking maintained for 2 decades.</p>
                  </div>
                  <div>
                     <h5 className="text-brand-accent font-serif text-xl mb-2 italic">Community</h5>
                     <p className="text-neutral-700 text-sm">Supporting local spice farmers in Wayanad.</p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Contact Section */}
      <section className="py-40 px-4 bg-brand-primary relative border-t border-white/5" data-section-fade>
         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16">
            <div className="md:col-span-5">
               <h2 className="text-sm font-semibold text-brand-accent tracking-[0.4em] uppercase mb-8">Reach The Pit</h2>
               <h3 className="text-6xl md:text-7xl font-bold text-neutral-900 mb-12 font-serif leading-none" data-split-text>Join the <span className="italic text-brand-accent">Table</span>.</h3>
               
               <div className="space-y-12">
                  <div>
                     <p className="text-neutral-400 text-[10px] uppercase tracking-[0.4em] mb-4">Location</p>
                     <p className="text-xl text-neutral-800 font-light leading-relaxed">
                        Near Central Junction, <br />
                        Kozhikode, Kerala
                     </p>
                  </div>
                  <div className="flex gap-12">
                     <div>
                        <p className="text-neutral-400 text-[10px] uppercase tracking-[0.4em] mb-4">WhatsApp</p>
                        <a href="#" className="text-2xl text-neutral-800 font-serif">+91 90000 12345</a>
                     </div>
                  </div>
                  <div className="pt-12">
                     <a href="https://wa.me/919000012345" className="btn-gold flex gap-3 w-full">Join the Waitlist <FaWhatsapp size={20} /></a>
                  </div>
               </div>
            </div>
            <div className="md:col-span-7">
               <div className="w-full h-[500px] rounded-[2rem] overflow-hidden border border-black/5 relative bg-neutral-100">
                  {/* Google Maps Embed Placeholder with Gray Filter */}
                  <div className="absolute inset-0 bg-neutral-100 flex items-center justify-center">
                     <MapPin size={40} className="text-brand-accent opacity-20" />
                     <span className="text-neutral-400 font-serif ml-4 italic">Mapping Kozhikode...</span>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Home;
