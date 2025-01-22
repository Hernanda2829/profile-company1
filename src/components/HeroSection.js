import React from 'react';
import './HeroSection.css';

function HeroSection() {
  return (
    <div id='HeroSection' className="hero-section">
      <div className="hero-content">
        <h1>We Code <br /> We Deliver</h1>
        <p>
          Twiscode specializes in developing high-performing mobile and web applications.
        </p>
        <button className="hero-button">Let's Have a Coffee</button>
      </div>
      <div className="hero-image">
        <img src="/images/Rectangle 2.png" alt="Hero Section" />
      </div>
    </div>
  );
}

export default HeroSection;
