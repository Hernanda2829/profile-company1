import React from 'react';
import './Customers.css';

function Customers() {
  return (
    <section className="customers-section">
      <h2 className="section-title">Our Customers Are Our Biggest Fans</h2>
      <p className="section-subtitle">
        We have helped startups around the globe as well as Fortune 500 companies.
      </p>
      <div className="customers-logos">
        <img src="./images/mandiri.png" alt="Mandiri" className="customer-logo" />
        <img src="./images/amartha2.png" alt="Amartha" className="customer-logo" />
        <img src="./images/cisco.png" alt="Cisco" className="customer-logo" />
        <img src="./images/google.png" alt="Google" className="customer-logo" />
        <img src="./images/microsoft.png" alt="Microsoft" className="customer-logo" />
      </div>
    </section>
  );
}

export default Customers;
