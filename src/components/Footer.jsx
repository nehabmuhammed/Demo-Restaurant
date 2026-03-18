import React from 'react';

const Footer = () => {
  return (
    <footer className="reveal">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="nav-logo serif" style={{ marginBottom: '1rem' }}>La Table Éternelle</div>
          <p style={{ opacity: 0.6, fontSize: '0.9rem' }}>Modern French Excellence</p>
        </div>
        <div className="footer-loc">
          <h4 className="serif" style={{ marginBottom: '1rem' }}>Visit Us</h4>
          <p style={{ opacity: 0.7 }}>12 Rue de la Paix, 75002 Paris</p>
          <p style={{ opacity: 0.7 }}>+33 1 23 45 67 89</p>
        </div>
        <div className="footer-hours">
          <h4 className="serif" style={{ marginBottom: '1rem' }}>Hours</h4>
          <p style={{ opacity: 0.7 }}>Tuesday – Sunday</p>
          <p style={{ opacity: 0.7 }}>6:00 PM – 11:00 PM</p>
        </div>
      </div>
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', opacity: 0.4 }}>
        <p>© 2026 La Table Éternelle. All Rights Reserved.</p>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
