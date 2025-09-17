import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../Assets/RBG CAR LOGO.png';

function Footer() {
  return (
      /* Footer */
      <footer className="footer mt-5 text-white">
        <div className="container py-4">
          <div className="row">
            {/* Left Logo + About */}
            <div className="col-md-3 mb-3">
              <img src={logo} alt="Car A-C Masters Logo" className="logo"  />
              {/* <h5 className="fw-bold">CAR A-C MASTERS</h5> */}
              <p>
                Your trusted experts in car air conditioning service and repair.
              </p>
              <form className="newsletter-form">
                <input
                  type="email"
                  className="form-control mb-2"
                  placeholder="Email"
                />
                <button className="btn btn-warning w-100">Submit</button>
              </form>
            </div>

            {/* Content Links */}
            <div className="col-md-3 mb-3">
              <h6 className="fw-bold">CONTENT</h6>
              <ul className="list-unstyled">
                <li>Introduction</li>
                <li>Mission</li>
                <li>Vision</li>
                <li>Service</li>
                <li>Reviews</li>
                <li>Gallery</li>
                <li>FAQ's</li>
              </ul>
            </div>

            {/* Pages */}
            <div className="col-md-3 mb-3">
              <h6 className="fw-bold">PAGES</h6>
              <ul className="list-unstyled">
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/about">ABOUT US</Link></li>
                <li><Link to="/services">SERVICE</Link></li>
                <li><Link to="/blogs">BLOGS</Link></li>
                <li><Link to="/contact">CONTACT</Link></li>
                <li><Link to="/testimonials">TESTIMONIALS</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="col-md-3 mb-3">
              <h6 className="fw-bold">CONTACT INFORMATION</h6>
              <p>
                <i className="bi bi-envelope-fill me-2"></i>
                caracmasters4@gmail.com
              </p>
              <p>
                <i className="bi bi-whatsapp me-2"></i>
                +256 780068830
              </p>
              <p>
                <i className="bi bi-telephone-fill me-2"></i>
                +256 758681323
              </p>
              <p>
                <i className="bi bi-facebook me-2"></i>
                CAR A-C MASTERS
              </p>
            </div>
          </div>
        </div>
        <div className="text-center py-2 bg-dark">
          © 2025 Car A-C Masters. All rights reserved
        </div>
      </footer>
  );
}

export default Footer;