import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa'; // Added FaWhatsapp
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Footer.css'; // Your custom styles for fine-tuning

function Footer() {
    const trendingCourses = [
        "Tosca Training ", "Sap Fico Course ", "Playwright Course ",
        "Flutter Course ", "Best API Course", "Workday Training ",
        "Python Training ", "Penetration Testing Course ",
        "Data Science Course ", "Selenium Training ",
        "Digital Marketing Course ", "Mulesoft Training ",
        "Full Stack Developer Course ", "Artificial Intelligence Course ",
        "Power BI Course ", "Java Course ",
        "Business Analyst Course ", "Pyspark Training ",
        "Ethical Hacking Course ", "Cyber Security Course ",
        "SAP ABAP Training ", "Salesforce Course ",
        "React JS Course ", "AWS Devops Training ",
        "Big Data courses ", "Javascript Course ",
        "Oracle dba Course ", "Microstrategy Training ",
        "Azure Training ", "UI UX Designer course ",
        "Web Designing Course ", "dot.Net Training ",
        "SQL Training ", "Business Analyst Course ",
        "Ios Training ", "Node JS Training ",
        "MEAN Stack Training ", "Tableau Course ",
        "Ruby on rails course", "UiPath Training "
    ];

    return (
        <footer className="main-footer bg-dark text-light py-0">
            <div className="container">

                {/* Original Footer Content */}
                <div className="row">
                    {/* Locate Us Column */}
                    <div className="col-md-4 mb-4 mt-5  mb-md-0">
                        <h3 className="h5 text-orange text-uppercase mb-3">Locate Us</h3>
                        <div className="footer_address">
                            <h4 className="h6">T Nagar</h4>
                            <p className="text-start">Meenakshi Tower, No 13, Rajamannar St, T. Nagar, <br />Chennai, Tamil Nadu, India 600017</p>
                            <p className="text-start">Phone: <a href="tel:+914428151406" className="text-light text-decoration-none">044 2815 1406</a></p>
                        </div>
                    </div>

                    {/* Quick Links Column */}
                    <div className="col-md-2 mb-4 mt-5 mb-md-0">
                        <h3 className="h5 text-orange  text-uppercase mb-3">Quick Links</h3>
                        <ul className="list-unstyled">
                            <li><Link to="/" className="text-light text-decoration-none py-1 d-block">Home</Link></li>
                            <li><Link to="/about" className="text-light text-decoration-none py-1 d-block">About Us</Link></li>
                            <li><Link to="/courses" className="text-light text-decoration-none py-1 d-block">All Courses</Link></li>
                            <li><Link to="/contact" className="text-light text-decoration-none py-1 d-block">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Tutorials Column */}
                    <div className="col-md-3 mb-4 mt-5 mb-md-0">
                        <h3 className="h5 text-orange  text-uppercase mb-3">Tutorials</h3>
                        <ul className="list-unstyled">
                            <li className="py-1">Artificial Intelligence</li>
                            <li className="py-1">Data Science</li>
                            <li className="py-1">Networking</li>
                            <li className="py-1">Cyber Security</li>
                            <li className="py-1">Cloud Computing</li>
                            <li className="py-1">Software Development</li>
                            <li className="py-1">Soft Skills Training</li>
                        </ul>
                    </div>

                    {/* Follow Us & Mail Us Column */}
                    <div className="col-md-3 mb-4 mt-5 mb-md-3">
                        <h3 className="h5 text-orange  text-uppercase mb-3">Follow Us</h3>
                        <div className="social-icons mb-3">
                            <a href="https://www.facebook.com/share/16Lv2dUike/" target="_blank" rel="noopener noreferrer" className="text-light me-3">
                                <FaFacebookF size={24} />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-light me-3">
                                <FaTwitter size={24} />
                            </a>
                            <a href="https://www.linkedin.com/company/seven-eleven-academy/" target="_blank" rel="noopener noreferrer" className="text-light me-3">
                                <FaLinkedinIn size={24} />
                            </a>
                            <a href="https://www.instagram.com/seveneleven.2024?igsh=MWticWFhdWo5ODVnNg%3D%3D" target="_blank" rel="noopener noreferrer" className="text-light me-3">
                                <FaInstagram size={24} />
                            </a>
                            <a href="https://youtube.com/@ssgroupofcompanies6978?si=kQ37siYpSq726nnX" target="_blank" rel="noopener noreferrer" className="text-light"> {/* Corrected YouTube URL */}
                                <FaYoutube size={24} />
                            </a>
                        </div>
                        <h3 className="h5 text-uppercase mb-3">Mail Us</h3>
                        <p className="mail-address"><a href="mailto:info@seven11academy.com" className="text-light text-decoration-none">info@sevenelevenacademy.com</a></p>
                    </div>
                </div>
                 </div>

               <div className="container2">
                 {/* Trending Courses Section */}
                <div className="row p-5 mb-5 mt-5">
                    <div className="col-12">
                        <h3 className="section-title text text-orange mb-4">Trending Courses</h3>
                        <div className="d-flex flex-wrap gap-2 course-tags-container">
                            {trendingCourses.map((course, index) => (
                                <Link
                                    key={index}
                                    to={`/courses/${course.toLowerCase().replace(/ /g, '-')}`} // Example routing
                                    className="course-tag btn btn-outline-secondary btn-sm"
                                >
                                    {course}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Chat Widget Placeholder */}
                {/* Note: Replace 'YOUR_WHATSAPP_NUMBER' with an actual WhatsApp number, including country code (e.g., 919876543210 for India) */}
                <div className="chat-widget-container d-flex align-items-center justify-content-center">
                    <span className="chat-text me-2">Need Help? Chat with us</span>
                    <a href="https://wa.me/918248879308" target="_blank" rel="noopener noreferrer" className="chat-icon">
                        <FaWhatsapp size={32} color="#25D366" />
                    </a>
                </div>

                {/* Copyright Section (as seen in the image's footer area) */}
                 <div className="row bg-black p-3 mt-5">
                    <div className="col-12 text-center text-white copyright-text">
                        <p>Copyrights © 2025 Seven Eleven Training Academy - <Link to="/privacy-policy" className="text-white text-decoration-none">Privacy Policy</Link> - All Rights Reserved - Made in SS Group </p>
                    </div>
                </div>

            </div>
           
        </footer>
    );
}

export default Footer;