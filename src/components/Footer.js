import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer id='Footer' className="footer">
      <div className="footer-container">
        {/* Location Section */}
        <div className="footer-section">
          <h3 className="footer-title">Location</h3>
          <p>Twiscode</p>
          <p>Jl. Kenyon, Surabaya</p>
        </div>

        {/* Company Section */}
        <div className="footer-section">
          <h3 className="footer-title">Company</h3>
          <ul className="footer-links">
            <li><a href="/work">Work</a></li>
            <li><a href="/service">Service</a></li>
            <li><a href="/team">Team</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>&copy; 2024 Twiscode. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
