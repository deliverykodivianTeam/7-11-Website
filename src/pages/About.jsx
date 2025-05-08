import React from 'react';
import '../styles/About.css';

function About() {
  return (
    <div className="about-container">
      <h1 className="about-heading">About Us</h1>
      <p className="about-text">
        Welcome to our platform! We are dedicated providing high-quality education and resources to help you succeed.
      </p>
      <div className="about-mission">
        <h2 className="about-mission-heading">Our Mission</h2>
        <p className="about-mission-text">
          Our vision is to empower employe around the with the knowledge and skills they need to achieve their goals. We believe in accessible, affordable, and effective education for everyone.
        </p>
      </div>
    </div>
  );
}

export default About;
