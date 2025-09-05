import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../Assets/RBG CAR LOGO.png'


function Navbar() {
  return (

        <div className="hero-section">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-black px-4">
        <a className="navbar-brand text-warning fw-bold" href="/">
         <img src={logo} alt='' className='logo' />
          Breathe Easy, Drive Cool
        </a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link active">
                Home 
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-link">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/blogs" className="nav-link">
                Blogs
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Gallery" className="nav-link">
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contact Us
              </Link>
            </li>
          </ul>
          <Link to="/services">
            <button className="btn btn-warning ms-3 fw-bold">Book Service</button>
          </Link>
          <Link to="/signup">
            <button className="btn btn-outline-warning ms-3 fw-bold">Login</button>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;