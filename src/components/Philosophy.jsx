import React from 'react';

const Philosophy = () => {
  const chefImg = "/images/chef.png";

  return (
    <section id="about" className="philosophy">
      <div className="container philosophy-grid">
        <div className="chef-image reveal">
          <img src={chefImg} alt="Our Executive Chef" />
        </div>
        <div className="philosophy-content reveal">
          <p className="hero-tagline">Heritage</p>
          <h2 className="section-title serif" style={{ textAlign: 'left' }}>Our Philosophy</h2>
          <p className="text-large">
            La Table Éternelle celebrates the art of French cuisine through refined simplicity. 
            Each dish honors traditional techniques while embracing modern creativity, 
            seasonal ingredients, and thoughtful presentation.
          </p>
          <div className="quote-box">
            "Cooking is not just craft. It is memory, emotion, and patience on a plate."
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
