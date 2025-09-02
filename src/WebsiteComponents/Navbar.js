// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css';
// import { FaBars, FaTimes } from 'react-icons/fa';
// import logo from '../Assets/RBG CAR LOGO.png';

// function Navbar() {
//   const [isMobile, setIsMobile] = useState(false);

//   return (
//     <nav className="navbar">
//       <div className="navbar-logo">
//         <img src={logo} alt="Logo" className="logo" />
//         <h6 className="logo-text">Breathe Easy, Drive Cool</h6>
//       </div>

//       <ul className={isMobile ? "nav-links-mobile" : "nav-links"} onClick={() => setIsMobile(false)}>
//         <li><Link to="/">HOME</Link></li>
//         <li><Link to="/about">ABOUT US</Link></li>
//         <li><Link to="/services">SERVICE</Link></li>
//         <li><Link to="/blogs">BLOGS</Link></li>
//         <li><Link to="/contact">CONTACT</Link></li>
//         <li><Link to="/testimonials">TESTIMONIALS</Link></li>
//       </ul>

//       <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
//         {isMobile ? <FaTimes /> : <FaBars />}
//       </button>
//     </nav>
//   );
// }

// export default Navbar;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../Assets/RBG CAR LOGO.png';
import { FaBars, FaTimes, FaUserCircle } from 'react-icons/fa';
import LoginModal from './LoginModal';

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" className="logo" />
        <h6 className="logo-text">Breathe Easy, Drive Cool</h6>
      </div>

      <ul className={isMobile ? "nav-links-mobile" : "nav-links"} onClick={() => setIsMobile(false)}>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/about">ABOUT US</Link></li>
        <li><Link to="/services">SERVICE</Link></li>
        <li><Link to="/blogs">BLOGS</Link></li>
        <li><Link to="/contact">CONTACT</Link></li>
        <li><Link to="/testimonials">TESTIMONIALS</Link></li>
        <li>
          <button
            onClick={() => setShowLogin(true)}
            className="login-btn"
            style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}
          >
            <FaUserCircle size={24} />
          </button>
        </li>
      </ul>

      <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? <FaTimes /> : <FaBars />}
      </button>

      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
    </nav>
  );
}

export default Navbar;
