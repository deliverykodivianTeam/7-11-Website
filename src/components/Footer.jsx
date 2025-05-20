import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa'; // Import the specific icons
import '../styles/Footer.css';

function Footer() {
    return (
        <footer className="main-footer">
            <div className="footer-content">
                <div className="footer-column locate-us">
                    <h3>Locate Us</h3>
                    <div className='footer_address'>
                        <h4>T Nagar</h4>
                        <p>New No 13, Old No 6, Rajamannar St, T. Nagar, Chennai, Tamil Nadu 600017</p>
                        <p>Phone: 044 2815 1406</p>
                    </div>
                </div>

                <div className="footer-column quick-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/courses">All Courses</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </div>

                <div className="footer-column tutorials">
                    <h3>Tutorials</h3>
                    <ul>
                        <li>Python</li>
                        <li>Java Script</li>
                        <li>C</li>
                        <li>C C++</li>
                        <li>.Net</li>
                        <li>CORE JAVA</li>
                        <li>Java - Advanced</li>
                    </ul>
                </div>

                <div className="footer-column follow-us">
                    <h3>Follow Us</h3>
                    <div className="social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaTwitter />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                            <FaYoutube />
                        </a>
                    </div>
                    <h3 className="mail-us-heading">Mail Us</h3>
                    <p className="mail-address"><a href="mailto:info@bitaacademy.com">info@seven11academy.com</a></p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;