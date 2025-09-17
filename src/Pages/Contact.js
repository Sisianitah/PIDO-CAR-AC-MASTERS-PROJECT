import React from 'react';
import './Contact.css';
import { Link } from 'react-router-dom';


function Contact() {
  return (
    <section className="contact-us">
      {/* Header Section */}
      <div className="contact-hero">
        <h1>CONTACT</h1>
      </div>
      
    <div className="contact-container">
      {/* TOP ROW INFO */}
      <div className="top-contact-info">
        <div className="contact-item">
          <span role="img" aria-label="location">📍</span>
          <p><strong>Location:</strong><br />NTINDA along Ntinda - Kisaasi road</p>
        </div>
        <div className="contact-item">
          <span role="img" aria-label="phone">📞</span>
          <p>
            +256 786068830<br />
            +256 758681323<br />
            caracmasters4@gmail.com
          </p>
        </div>
        <div className="contact-item">
          <span role="img" aria-label="clock">⏰</span>
          <p><strong>OPEN HOURS</strong><br />24 hours</p>
        </div>
      </div>

      {/* BOTTOM ROW - MAP & FORM */}
      <div className="bottom-contact-section">
        {/* Map */}
        <div className="map-section">
          <iframe
            title="Car A-C Masters Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7405736030237!2d32.60886687596178!3d0.35768676395935006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbbdd7d3cc13f%3A0x38e47022cb71a207!2sCAR%20A-C%20MASTERS!5e0!3m2!1sen!2sug!4v1758020747802!5m2!1sen!2sug"
            width="600%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Contact Form */}
        <div className="form-section">
          <h2>REACH OUT</h2>
          <form>
            <input type="text" placeholder="NAME" required />
            <input type="text" placeholder="CONTACT" required />
            <input type="email" placeholder="EMAIL" required />
            <textarea placeholder="MESSAGE" rows="5" required></textarea>
            <div className="checkbox">
              <input type="checkbox" id="consent" required />
              <label htmlFor="consent">
                I agree that my submitted data is being collected and stored as explained here!
              </label>
            </div>
            <Link to="/contact">
            <button type="submit">submit</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  </section>
  );
}

export default Contact;