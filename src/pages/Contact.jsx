import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '../styles/Contact.css'; // Keep your custom styles, we'll adjust them

function Contact() {
  return (
    <div className="container-fluid"> {/* fluid container for full width */}
      {/* Render the Navbar component */}
      <div className="container py-5"> {/* Add a container for centered content and vertical padding */}
        <div className="row justify-content-center align-items-start"> {/* Use row and align-items-start */}
          <div className="col-md-6"> {/* Left column takes up half the width on medium screens and above */}
            <div className="contact-left">
              <h2 className="why-contact-heading">Why Contact Us?</h2>
              <ul className="contact-reasons">
                <li>Get personalized course recommendations.</li>
                <li>Clarify your doubts with our expert team.</li>
                <li>Explore training options tailored to your needs.</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6"> {/* Right column takes up half the width on medium screens and above */}
            <div className="contact-right">
              <h2 className="contact-us-heading">Contact Us</h2>
              <form className="contact-form">
                <input type="text" placeholder="Name" className="form-control" /> {/* Bootstrap form-control */}
                <div className="input-group"> {/* Bootstrap input group */}
                  <div className="input-group-prepend">
                    <span className="input-group-text">+91</span> {/* Static country code */}
                  </div>
                  <input type="tel" placeholder="Mobile Number" className="form-control" />
                </div>
                <input type="email" placeholder="E-Mail Id" className="form-control" />
                <select className="form-control">
                  <option value="" disabled selected>Select Course</option>
                  <option value="course1">Artifical Intelligent</option>
                  <option value="course2">Data Science</option>
                  <option value="course2">Networking</option>
                  <option value="course2">Cyber Security</option>
                  <option value="course2">Software Development & Soft skills</option>
                  {/* Add more course options as needed */}
                </select>
                <select className="form-control">
                  <option value="" disabled selected>Mode of Training</option>
                  <option value="online">Online</option>
                  <option value="offline">Offline</option>
                  {/* Add more mode of training options as needed */}
                </select>
                <div className="form-group">
                  {/* You'll need to integrate a real CAPTCHA here */}
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
                <button type="submit" className="btn btn-primary submit-button">Submit</button> {/* Bootstrap button */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
