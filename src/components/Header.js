import React from 'react';
import { Link } from "react-scroll";
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">Twiscode</div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item"><Link to="HeroSection" smooth={true} duration={500}>Work</Link></li>
          <li className="nav-item"><Link to="Services" smooth={true} duration={500}>Services</Link></li>
          <li className="nav-item"><Link to="Team" smooth={true} duration={500}>Team</Link></li>
          <li className="nav-item"><Link to="Footer" smooth={true} duration={500}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
