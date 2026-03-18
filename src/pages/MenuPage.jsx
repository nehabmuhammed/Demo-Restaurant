import React from 'react';
import TastingMenu from '../components/TastingMenu';

const MenuPage = () => {
  const menuHero = "/images/table.png";

  return (
    <div className="page-wrap">
      <header className="page-hero" style={{ backgroundImage: `url(${menuHero})` }}>
        <div className="hero-content">
          <h1 className="hero-title serif reveal">The Tasting Menu</h1>
        </div>
      </header>
      <TastingMenu />
    </div>
  );
};

export default MenuPage;
