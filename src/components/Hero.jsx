import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const heroImg = "/images/hero-bg.png";
  const heroVideo = "https://assets.mixkit.co/videos/preview/mixkit-interior-of-a-luxury-restaurant-at-night-4467-large.mp4";

  return (
    <header className="hero">
      <video 
        autoPlay 
        muted 
        loop 
        playsInline 
        className="hero-video"
        poster={heroImg}
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div className="hero-content">
        <div className="michelin-badge reveal">
          <svg className="michelin-star" viewBox="0 0 24 24"><path d="M12,2L14.39,8.26L21,9.27L16.2,13.94L17.33,20.53L12,17.4L6.67,20.53L7.8,13.94L3,9.27L9.61,8.26L12,2Z" /></svg>
          50th Anniversary Michelin Distinction
        </div>
        <h1 className="hero-title serif reveal">Modern French dining with a timeless soul.</h1>
        <p className="hero-subtitle reveal">Elegant plates, warm candlelight, and flavors crafted to linger long after the evening ends.</p>
        <div className="hero-btns reveal">
          <Link to="/reservations" className="btn btn-primary">Book a Table</Link>
          <Link to="/menu" className="btn btn-secondary">View the Menu</Link>
        </div>
      </div>
    </header>
  );
};

export default Hero;
