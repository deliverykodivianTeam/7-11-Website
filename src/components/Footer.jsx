import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Footer.css'; // Your custom styles for fine-tuning

function Footer() {
    const trendingCourses = [
        "Tosca Training", "Sap Fico Course", "Playwright Course",
        "Flutter Course", "Best API Course", "Workday Training",
        "Python Training", "Penetration Testing Course",
        "Data Science Course", "Selenium Training",
        "Digital Marketing Course", "Mulesoft Training",
        "Full Stack Developer Course", "Artificial Intelligence Course",
        "Power BI Course", "Java Course",
        "Business Analyst Course", "Pyspark Training",
        "Ethical Hacking Course", "Cyber Security Course",
        "SAP ABAP Training", "Salesforce Course",
        "React JS Course", "AWS Devops Training",
        "Big Data courses", "Javascript Course",
        "Oracle dba Course", "Microstrategy Training",
        "Azure Training", "UI UX Designer course",
        "Web Designing Course", "dot.Net Training",
        "SQL Training", "Business Analyst Course",
        "Ios Training", "Node JS Training",
        "MEAN Stack Training", "Tableau Course",
        "Ruby on rails course", "UiPath Training"
    ];

    return (
        <footer className="main-footer text-light py-0">
            <div className="container">

                {/* Main Footer Columns */}
                <div className="row pt-5 pb-4"> {/* Added padding for vertical spacing */}
                    {/* Locate Us Column */}
                    <div className="col-md-4 mb-4 mb-md-0 text-center text-md-start">
                        <h3 className="h5 text-orange text-uppercase mb-3">Locate Us</h3>
                        <div className="footer-address">
                            <h4 className="h6">T Nagar</h4>
                            <p className="text-start">Meenakshi Tower, No 13, Rajamannar St, T. Nagar, <br />Chennai, Tamil Nadu, India 600017</p>
                            <p className="text-start">Phone: <a href="tel:+919150574201" className="text-light text-decoration-none">+91 9150 574201</a></p>
                        </div>
                    </div>

                    {/* Quick Links Column */}
                    <div className="col-md-2 mb-4 mb-md-0 text-center text-md-start">
                        <h3 className="h5 text-orange text-uppercase mb-3">Quick Links</h3>
                        <ul className="list-unstyled">
                            <li><Link to="/" className="text-light text-decoration-none py-1 d-block">Home</Link></li>
                            <li><Link to="/about" className="text-light text-decoration-none py-1 d-block">About Us</Link></li>
                            <li><Link to="/courses" className="text-light text-decoration-none py-1 d-block">All Courses</Link></li>
                            <li><Link to="/contact" className="text-light text-decoration-none py-1 d-block">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Tutorials Column */}
                    <div className="col-md-3 mb-4 mb-md-0 text-center text-md-start">
                        <h3 className="h5 text-orange text-uppercase mb-3">Tutorials</h3>
                        <ul className="list-unstyled footer-tutorial-list">
                            <li>Artificial Intelligence</li>
                            <li>Data Science</li>
                            <li>Networking</li>
                            <li>Cyber Security</li>
                            <li>Cloud Computing</li>
                            <li>Software Development</li>
                            <li>Soft Skills Training</li>
                        </ul>
                    </div>

                    {/* Follow Us & Mail Us Column */}
                    <div className="col-md-3 mb-4 mb-md-0 text-center text-md-start">
                        <h3 className="h5 text-orange text-uppercase mb-3">Follow Us</h3>
                        <div className="social-icons mb-3">
                            <a href="https://www.facebook.com/share/16Lv2dUike/" target="_blank" rel="noopener noreferrer" className="text-light">
                                <FaFacebookF size={24} />
                            </a>
                            <a href="https://twitter.com/seven11academy" target="_blank" rel="noopener noreferrer" className="text-light">
                                <FaTwitter size={24} />
                            </a>
                            <a href="https://www.linkedin.com/company/seven-eleven-academy/" target="_blank" rel="noopener noreferrer" className="text-light">
                                <FaLinkedinIn size={24} />
                            </a>
                            <a href="https://www.instagram.com/seveneleven.2024?igsh=MWticWFhdWo5ODVnNg%3D%3D" target="_blank" rel="noopener noreferrer" className="text-light">
                                <FaInstagram size={24} />
                            </a>
                            <a href="https://www.youtube.com/@SevenElevenAcademy" target="_blank" rel="noopener noreferrer" className="text-light">
                                <FaYoutube size={24} />
                            </a>
                        </div>
                        <h3 className="h5 text-orange text-uppercase mb-3">Mail Us</h3>
                        <p className="mail-address-text text-start"><a href="mailto:info@seven11academy.com" className="text-light text-start text-decoration-none">info@sevenelevenacademy.com</a></p>
                    </div>
                </div>
            </div>

            {/* Trending Courses Section */}
            <div className="container-fluid trending-courses-section py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="section-title text-orange mb-4 text-center text-md-start">Trending Courses</h3>
                            <div className="d-flex flex-wrap gap-2 justify-content-center justify-content-md-start course-tags-container">
                                {trendingCourses.map((course, index) => (
                                    <span
                                        key={index}
                                        className="course-tag btn btn-outline-secondary btn-sm"
                                    >
                                        {course}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Chat Widget */}
            {/* Note: Replace '919150574201' with your actual WhatsApp number, including country code (e.g., 919876543210 for India) */}
            <a href="https://wa.me/919150574201" target="_blank" rel="noopener noreferrer" className="chat-widget-link">
                <div className="chat-widget-container">
                    <span className="chat-text me-2">Need Help? Chat with us</span>
                    <FaWhatsapp size={32} className="chat-icon-whatsapp" />
                </div>
            </a>

            {/* Copyright Section */}
            <div className="copyright-section py-3">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center text-white copyright-text">
                            <p>Copyrights &copy; 2025 Seven Eleven Training Academy - <Link to="/privacy-policy" className="text-white text-decoration-none">Privacy Policy</Link> - All Rights Reserved - Made in SS Group </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;