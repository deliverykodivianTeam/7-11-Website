import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '../styles/Contact.css'; // Keep your custom styles

function Contact() {
  return (
    <div className="container-fluid contact-page-wrapper fade-up"> {/* Added a wrapper for potential full-width styling */}
      {/* Container for centered content and vertical padding */}
      <div className="container py-5">
        <div className=" mt-5 row justify-content-center align-items-start gx-5"> {/* Added gx-5 for more column gap */}
          {/* Left column for Map and Address */}
          <div className="col-md-6 mb-4 mb-md-0"> {/* Add margin-bottom for mobile */}
            <div className="map-and-address-section">
              {/* Google Map Embed */}
              <div className="map-container mb-4"> {/* Added margin-bottom for spacing */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.8770252239015!2d80.23390417621557!3d13.04349878052226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52665123f40001%3A0x1ed74852e36df68!2sSS%20GROUP!5e0!3m2!1sen!2sin!4v1747737591335!5m2!1sen!2sin" // REPLACE THIS WITH YOUR ACTUAL GOOGLE MAPS EMBED URL
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="BITA Academy Location"
                ></iframe>
              </div>

              {/* Address Details */}
              <div className="address-details text-md-start text-center"> {/* Align text left on medium screens, center on small */}
                <h3 className="academy-name">7 Eleven Academy</h3>
                <p className="address-line">New No 13, Old No 6, Rajamannar St, T. Nagar, Chennai, Tamil Nadu 600017</p>
                <p className="address-landmark">Opposite to Ramakrishna Play Ground</p>
              </div>
            </div>
          </div>

          {/* Right column for Contact Form */}
          <div className="col-md-6">
            <div className="contact-right">
              <h2 className="contact-us-heading">Contact Us</h2>
              <form className="contact-form">
                <input type="text" placeholder="Name" className="form-control" />
                <div className="input-group">
                  <span className="input-group-text">+91</span>
                  <input type="tel" placeholder="Mobile Number" className="form-control" />
                </div>
                <input type="email" placeholder="E-Mail Id" className="form-control" />
                <select className="form-control">
                  <option value="" disabled selected>Select Course</option>
                  <option value="course1">Artificial Intelligence</option>
                  <option value="course2">Data Science</option>
                  <option value="course3">Networking</option>
                  <option value="course4">Cyber Security</option>
                  <option value="course5">Software Development & Soft skills</option>
                </select>
                <select className="form-control">
                  <option value="" disabled selected>Mode of Training</option>
                  <option value="online">Online</option>
                  <option value="offline">Offline</option>
                </select>
                <div className="form-group">
                  <div className="mock-captcha">
                    <div className="form-check">
                      <input type="checkbox" className="form-check-input" id="captchaCheck" />
                      <label className="form-check-label" htmlFor="captchaCheck">I'm not a robot</label>
                    </div>
                    <div className="captcha-provider">
                      reCAPTCHA <a href="#">Privacy</a> - <a href="#">Terms</a>
                    </div>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary submit-button">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Newsletter Section */}
        <div className="row justify-content-center mt-1 mb-5">
          <div className="col-lg-8">
            <div className="newsletter-section p-4">
              <h3 className="newsletter-heading text-center">Subscribe to Our Newsletter</h3>
              <p className="newsletter-description text-center">Stay updated with our latest courses, events, and news.</p>
              <form className="newsletter-form d-flex flex-column flex-sm-row justify-content-center align-items-center">
                <input type="email" placeholder="Enter your E-Mail Id" className="form-control border newsletter-input mb-3 mb-sm-0 me-sm-3" />
                <button type="submit" className="btn btn-primary subscribe-button">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Contact;