import React from 'react';
import './Team.css';

const teamMembers = [
  { name: 'Elisabeth Be', role: 'COO', image: './images/elisabeth.jpg' },
  { name: 'Andree Wijaya', role: 'CEO/CTO', image: './images/andree.jpg' },
  { name: 'Sanjaya Wahono', role: 'CFO', image: './images/sanjaya.jpg' },
];

function Team() {
  return (
    <section id='Team' className="team-section">
      <h2 className="team-title">Our Team</h2>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={member.image} alt={member.name} className="team-image" />
            <h3 className="team-name">{member.name}</h3>
            <p className="team-role">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Team;
