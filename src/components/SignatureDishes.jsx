import React from 'react';

const SignatureDishes = () => {
  const dishes = [
    { 
      name: "Truffle Infused Risotto", 
      desc: "Aged carnaroli rice, winter black truffles, 36-month reggiano.",
      img: "/images/risotto.png"
    },
    { 
      name: "Seared Duck Breast", 
      desc: "Cherry reduction, spiced parsnip silk, heirloom carrots.",
      img: "/images/duck.png"
    },
    { 
      name: "Lobster Thermidor", 
      desc: "Native blue lobster, cognac cream, gruyère crust.",
      img: "/images/lobster.png"
    },
    { 
      name: "Herb-Crusted Lamb", 
      desc: "Provence herbs, fondant potato, rosemary jus.",
      img: "/images/lamb.png"
    },
    { 
      name: "Wild Mushroom Velouté", 
      desc: "Forest mushrooms, truffle foam, crispy leeks.",
      img: "/images/veloute.png"
    },
    { 
      name: "Dark Chocolate Soufflé", 
      desc: "70% Valrhona chocolate, grand marnier, vanilla bean ice cream.",
      img: "/images/souffle.png"
    }
  ];

  return (
    <section id="experience" className="dishes">
      <div className="container">
        <p className="hero-tagline" style={{ textAlign: 'center' }}>Curated Selections</p>
        <h2 className="section-title serif">Signature Creations</h2>
        <div className="dishes-grid">
          {dishes.map((dish, idx) => (
            <div key={idx} className="dish-card reveal">
              <img src={dish.img} alt={dish.name} className="dish-img" />
              <div className="dish-overlay">
                <h3 className="dish-name serif">{dish.name}</h3>
                <p className="dish-desc">{dish.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SignatureDishes;
