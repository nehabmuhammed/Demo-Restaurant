import React from 'react';
import SignatureDishes from '../components/SignatureDishes';
import Gallery from '../components/Gallery';

const ExperiencePage = () => {
  const expHero = "/images/hero-bg.png";

  return (
    <div className="page-wrap">
      <header className="page-hero" style={{ backgroundImage: `url(${expHero})`, height: '60vh' }}>
        <div className="hero-content">
          <h1 className="hero-title serif reveal">The Culinary Journey</h1>
        </div>
      </header>
      <SignatureDishes />
      <Gallery />
    </div>
  );
};

export default ExperiencePage;
