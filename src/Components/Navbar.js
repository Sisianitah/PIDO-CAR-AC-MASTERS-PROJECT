import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import logo from '../Assets/RBG CAR LOGO.png'
import "./Herosection.css";

// Import your images
import heroImg1 from "../Assets/IMG_20250128_145646_545.jpg";
import heroImg2 from "../Assets/IMG_20250621_122806_908.jpg";
import heroImg3 from "../Assets/IMG_20250323_131214_543.jpg";

const images = [heroImg1, heroImg2, heroImg3];

function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-section">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-black px-4">
        <a className="navbar-brand text-warning fw-bold" href="/">
         <img src={logo} alt='' className='logo' />
           {/* <!-- Sidebar toggle --> */}
        <div class="sidebar-toggle" id="sidebarToggle">
         <i class="fas fa-address-card"></i>
        </div>

         {/* <!-- Hamburger menu for nav links --> */}
        <div class="hamburger" id="hamburger">
          <i class="fas fa-bars"></i>
        </div>

         
        </a>
        {/* <h6 className="text-warning fw-bold">Breathe Easy, Drive Cool</h6> */}
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
            <button className="btn btn-outline-warning ms-3 fw-bold">Signup</button>
          </Link>
        </div>
      </nav>

      {/* Hero Section with Slideshow Background */}
      <header
        className="hero"
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      >
        <div className="overlay">
          <div className="hero-content text-center text-white">
            <h1>
              WELCOME TO CAR A-C MASTERS
            </h1>
            <p>Your trusted experts in car air conditioning service and repair.</p>
            <div className="hero-buttons">
              <Link to="/signup">
                <button className="learn-btn">LEARN MORE</button>
              </Link>
              {/* <Link to="/contact">
                <button className="book-btn">Book an Appointment</button>
              </Link> */}
            </div>
          </div>
        </div>
      </header>

      {/* Floating Contact Icons */}
      <div className="floating-icons">
        <a href="https://wa.me/+256786068830" target="_blank" rel="noreferrer">
          <FaWhatsapp className="whatsapp-icon" />
        </a>
        <a href="tel:+256 786068830">
          <FaPhoneAlt className="phone-icon" />
        </a>
      </div>

      {/* Manual Navigation Arrows */}
      <div
        className="arrow left-arrow"
        onClick={() =>
          setCurrentImageIndex(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length
          )
        }
      >
        ❮
      </div>
      <div
        className="arrow right-arrow"
        onClick={() =>
          setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
        }
      >
        ❯
      </div>
    </div>
  );
}

export default HeroSection;