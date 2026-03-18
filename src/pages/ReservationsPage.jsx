import React from 'react';
import Reservations from '../components/Reservations';

const ReservationsPage = () => {
  const resHero = "/images/cellar.png";

  return (
    <div className="page-wrap">
      <header className="page-hero" style={{ backgroundImage: `url(${resHero})` }}>
        <div className="hero-content">
          <h1 className="hero-title serif reveal">Reservations</h1>
        </div>
      </header>
      <Reservations />
    </div>
  );
};

export default ReservationsPage;
