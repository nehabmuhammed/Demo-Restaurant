import React from 'react';

const TastingMenu = () => {
  return (
    <section id="menu" className="tasting-menu">
      <div className="container reveal">
        <p className="hero-tagline">The Journey</p>
        <h2 className="section-title serif">The Tasting Experience</h2>
        <p className="hero-subtitle">Our tasting menu invites guests on a curated journey through seasonal ingredients and modern French artistry.</p>
        
        <div className="course-list">
          {[
            { fr: "Amuse-Bouche", en: "Chef's Greeting" },
            { fr: "Entrée", en: "Forest Discovery" },
            { fr: "Poisson", en: "Coastal Treasures" },
            { fr: "Plat Principal", en: "The Main Act" },
            { fr: "Fromage", en: "Artisanal Cheese Selection" },
            { fr: "Dessert", en: "Sweet Finality" }
          ].map((course, i) => (
            <div key={i} className="course-item">
              <span className="serif">{course.en}</span>
              <span style={{ opacity: 0.5 }}>———</span>
            </div>
          ))}
        </div>
        
        <button className="btn btn-secondary">Explore Full Menu</button>
      </div>
    </section>
  );
};

export default TastingMenu;
