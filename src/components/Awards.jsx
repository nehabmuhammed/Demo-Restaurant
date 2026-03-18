import React from 'react';

const Awards = () => {
  const awardsBg = "/images/awards-bg.png";

  return (
    <section className="awards" style={{ backgroundImage: `url(${awardsBg})` }}>
      <div className="container reveal">
        <h2 className="section-title serif">Recognition</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '4rem', marginBottom: '4rem', opacity: 0.8 }}>
          <div className="michelin-badge">★★★ Michelin Guide</div>
          <div className="michelin-badge">James Beard Award</div>
          <div className="michelin-badge">World's 50 Best</div>
        </div>
        
        <div className="testimonials" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
          <div className="testimonial">
            <p className="serif italic" style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>“A remarkable interpretation of modern French cuisine with impeccable service.”</p>
            <p className="hero-tagline" style={{ fontSize: '0.7rem' }}>— Gastronome Weekly</p>
          </div>
          <div className="testimonial">
            <p className="serif italic" style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>“The atmosphere alone is worth the wait. A sanctuary of taste and light.”</p>
            <p className="hero-tagline" style={{ fontSize: '0.7rem' }}>— Culinary Arts</p>
          </div>
          <div className="testimonial">
            <p className="serif italic" style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>“Perfection in every detail. The truffle risotto is a memory I will keep forever.”</p>
            <p className="hero-tagline" style={{ fontSize: '0.7rem' }}>— Elite Traveler</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
