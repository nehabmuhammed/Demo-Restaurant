import React from 'react';

const Gallery = () => {
  const images = [
    { src: "/images/wine.png", alt: "Fine Wine Service" },
    { src: "/images/bar.png", alt: "The Cocktail Lounge" },
    { src: "/images/table.png", alt: "Elegant Table Setting" },
    { src: "/images/exterior.png", alt: "Parisian Night Facade" },
    { src: "/images/cellar.png", alt: "Private Wine Cellar" },
    { src: "/images/hero-bg.png", alt: "Main Dining Hall" }
  ];

  return (
    <section className="gallery">
      <div className="container">
        <p className="hero-tagline" style={{ textAlign: 'center' }}>Atmosphere</p>
        <h2 className="section-title serif">The Dining Experience</h2>
        <div className="gallery-wrap">
          {images.map((img, i) => (
            <div key={i} className="gallery-item reveal">
              <img src={img.src} alt={img.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
