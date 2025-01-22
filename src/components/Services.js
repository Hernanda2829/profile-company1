import React from 'react';
import './Services.css';

function Service() {
  return (
    <section id='Services' className="service-section">
      <h2 className="section-title">What We Do?</h2>
      <div className="service-container">
        <div className="service-card">
          <i className="fas fa-mobile-alt"></i>
          <h3>Mobile Application</h3>
          <p>We develop high-quality mobile apps with great performance and smooth user experience.</p>
        </div>
        <div className="service-card">
          <i className="fas fa-laptop-code"></i>
          <h3>Web Application</h3>
          <p>Our web applications are optimized for performance, security, and user experience.</p>
        </div>
        <div className="service-card">
          <i className="fas fa-paint-brush"></i>
          <h3>UI/UX Design</h3>
          <p>We create user-friendly and aesthetically pleasing UI/UX designs for better engagement.</p>
        </div>
      </div>
    </section>
  );
}

export default Service;
