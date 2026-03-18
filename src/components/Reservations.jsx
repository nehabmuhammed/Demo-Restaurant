import React from 'react';

const Reservations = () => {
  const resBg = "/images/reservation-bg.png";

  return (
    <section id="reservations" className="reservations" style={{ backgroundImage: `url(${resBg})` }}>
      <div className="container">
        <div className="reservation-box reveal">
          <h2 className="section-title serif">Reserve Your Table</h2>
          <p style={{ textAlign: 'center', marginBottom: '3rem', opacity: 0.7 }}>
            Reservations are recommended to ensure an intimate dining experience.
          </p>
          
          <form className="form-grid">
            <div className="form-group">
              <label>Date</label>
              <input type="date" required />
            </div>
            <div className="form-group">
              <label>Time</label>
              <select required>
                <option>18:00</option>
                <option>19:00</option>
                <option>20:00</option>
                <option>21:00</option>
              </select>
            </div>
            <div className="form-group">
              <label>Number of Guests</label>
              <input type="number" min="1" max="10" defaultValue="2" />
            </div>
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="John Doe" />
            </div>
            <div className="form-group full-width">
              <label>Special Requests</label>
              <textarea rows="4" placeholder="Allergies, anniversaries, etc."></textarea>
            </div>
            <button type="submit" className="btn btn-primary full-width">Confirm Reservation</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Reservations;
