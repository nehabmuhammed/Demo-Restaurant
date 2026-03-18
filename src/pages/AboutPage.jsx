import React from 'react';
import Philosophy from '../components/Philosophy';
import Awards from '../components/Awards';

const AboutPage = () => {
  const aboutHero = "/images/exterior.png";

  return (
    <div className="page-wrap">
      <header className="page-hero" style={{ backgroundImage: `url(${aboutHero})` }}>
        <div className="hero-content">
          <h1 className="hero-title serif reveal">Our Heritage</h1>
        </div>
      </header>
      <Philosophy />
      <Awards />
    </div>
  );
};

export default AboutPage;
