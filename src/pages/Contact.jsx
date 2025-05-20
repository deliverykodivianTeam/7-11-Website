import React from 'react';
import '../styles/Contact.css'; // Make sure this CSS file exists

function Contact() {
  return (
    <div className="contact-container">
    {/* Render the Navbar component */}
      <div className="contact-page-content">
        <div className="contact-left">
          <h2 className="why-contact-heading">Why Contact Us?</h2>
          <ul className="contact-reasons">
            <li>Get personalized course recommendations.</li>
            <li>Clarify your doubts with our expert team.</li>
            <li>Explore training options tailored to your needs.</li>
          </ul>
        </div>
        <div className="contact-right">
          <h2 className="contact-us-heading">Contact Us</h2>
          <form className="contact-form">
            <input type="text" placeholder="Name" />
            <div className="mobile-input-group">
              <div className="country-code">+91</div> {/* Static country code */}
              <input type="tel" placeholder="Mobile Number" />
            </div>
            <input type="email" placeholder="E-Mail Id" />
            <select>
              <option value="" disabled selected>Select Course</option>
              <option value="course1">Course 1</option>
              <option value="course2">Course 2</option>
              {/* Add more course options as needed */}
            </select>
            <select>
              <option value="" disabled selected>Mode of Training</option>
              <option value="online">Online</option>
              <option value="offline">Offline</option>
              {/* Add more mode of training options as needed */}
            </select>
            <div className="captcha-container">
              {/* You'll need to integrate a real CAPTCHA here */}
              <div className="mock-captcha">
                <input type="checkbox" /> I'm not a robot
                <div className="captcha-provider">reCAPTCHA <a href="#">Privacy</a> - <a href="#">Terms</a></div>
              </div>
            </div>
            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;