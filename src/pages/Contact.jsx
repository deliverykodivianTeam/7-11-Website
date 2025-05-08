import React from 'react';
import Navbar from '../components/Navbar.jsx'; // Import the Navbar component
import '../styles/Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <Navbar /> {/* Render the Navbar component */}
      <div className="contact-content">
        <h1 className="contact-heading">Contact Us</h1>
        <p className="contact-text">
          Welcome to the Contact Us page! Please feel free to reach out to us with any questions or inquiries.
        </p>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message" />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
