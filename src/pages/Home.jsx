import React from 'react';
import Hero from '../components/Hero';
import Philosophy from '../components/Philosophy';
import SignatureDishes from '../components/SignatureDishes';
import TastingMenu from '../components/TastingMenu';
import Gallery from '../components/Gallery';
import Reservations from '../components/Reservations';
import Awards from '../components/Awards';

const Home = () => {
  return (
    <main>
      <Hero />
      <Philosophy />
      <SignatureDishes />
      <TastingMenu />
      <Gallery />
      <Awards />
      <Reservations />
    </main>
  );
};

export default Home;
