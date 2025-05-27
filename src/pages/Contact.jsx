import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Contact.css'; // Make sure this path is correct

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        course: '',
        mode: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch('https://seven-11-website-4.onrender.com/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const data = await res.json();
            if (res.ok) {
                alert('Submitted successfully!');
                // Optionally clear the form after successful submission
                setFormData({
                    name: '',
                    mobile: '',
                    email: '',
                    course: '',
                    mode: '',
                });
            } else {
                alert('Submission failed: ' + data.message);
            }
        } catch (err) {
            alert('Error: ' + err.message);
        }
    };

    return (
        <div className="contact-page-wrapper fade-up">
            {/* Main content container */}
            <div className="container py-5">
                <div className="row justify-content-center align-items-start gx-5">
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
                            <div className="address-details text-md-start text-center">
                                <h3 className="academy-name">Seven Eleven Academy</h3>
                                <p className="address-line text-start">Meenakshi Tower, No 13, Rajamannar St, T. Nagar,<br />Chennai, Tamil Nadu, India 600017</p>
                                <p className="address-landmark text-start">Opposite to Ramakrishna Play Ground</p>
                            </div>
                        </div>
                    </div>

                    {/* Right column for Contact Form */}
                    <div className="col-md-6">
                        <div className="contact-right">
                            <h2 className="contact-us-heading">Contact Us</h2>
                            <form onSubmit={handleSubmit} className="contact-form">
                                <input name="name" value={formData.name} onChange={handleChange} type="text" placeholder="Name" className="form-control contact-form-input" required />
                                <div className="input-group">
                                    <span className="input-group-text mobile-prefix">+91</span>
                                    <input name="mobile" value={formData.mobile} onChange={handleChange} type="tel" placeholder="Mobile Number" className="form-control contact-form-input" required />
                                </div>
                                <input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="E-Mail Id" className="form-control contact-form-input" required />
                                <select name="course" value={formData.course} onChange={handleChange} className="form-select contact-form-input" required>
                                    <option value="" disabled>Select Course</option>
                                    <option value="AI">Artificial Intelligence</option>
                                    <option value="DS">Data Science</option>
                                    <option value="Networking">Networking</option>
                                    <option value="Cyber Security">Cyber Security</option>
                                    <option value="Software Development">Software Development & Soft skills</option>
                                </select>
                                <select name="mode" value={formData.mode} onChange={handleChange} className="form-select contact-form-input" required>
                                    <option value="" disabled>Mode of Training</option>
                                    <option value="Online">Online</option>
                                    <option value="Offline">Offline</option>
                                </select>
                                <button type="submit" className="btn submit-button">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Newsletter Section */}
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="newsletter-section p-2">
                            <h3 className="newsletter-heading text-center">Subscribe to Our Newsletter</h3>
                            <p className="newsletter-description text-center">Stay updated with our latest courses, events, and news.</p>
                            <form className="newsletter-form d-flex flex-column flex-sm-row justify-content-center align-items-center">
                                <input type="email" placeholder="Enter your E-Mail Id" className="form-control newsletter-input mb-3 mb-sm-0 me-sm-3" />
                                <button type="submit" className="btn subscribe-button">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;