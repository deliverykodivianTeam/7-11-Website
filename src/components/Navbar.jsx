// Navbar.jsx
import React, { useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Keep CSS import here
import '../styles/Navbar.css';
import logo from "../assets/Logo - Seven Eleven Academy.png";

// REMOVED: import 'bootstrap/dist/js/bootstrap.bundle.min'; // Now imported globally in App.js

function Navbar() {
  const navbarCollapseRef = useRef(null);
  const bsCollapseInstanceRef = useRef(null); // To store the Bootstrap Collapse instance

  // Effect to initialize Bootstrap Collapse instance once on mount
  useEffect(() => {
    if (navbarCollapseRef.current && window.bootstrap && window.bootstrap.Collapse) {
      // Create the Bootstrap Collapse instance only once
      if (!bsCollapseInstanceRef.current) {
        bsCollapseInstanceRef.current = new window.bootstrap.Collapse(navbarCollapseRef.current, {
          toggle: false // Do not toggle on initialization; keep it closed by default
        });
        console.log("Navbar: Bootstrap Collapse instance initialized.");
      }
    } else {
      console.error("Navbar: Critical Error! window.bootstrap.Collapse not found. Ensure bootstrap.bundle.min is loaded globally in App.js/index.js.");
    }

    // Cleanup: Dispose the Bootstrap instance when component unmounts
    return () => {
      if (bsCollapseInstanceRef.current) {
        bsCollapseInstanceRef.current.dispose();
        bsCollapseInstanceRef.current = null;
        console.log("Navbar: Bootstrap Collapse instance disposed.");
      }
    };
  }, []); // Empty dependency array: runs only once on mount

  // Function to close the navbar when a NavLink is clicked
  const handleNavLinkClick = () => {
    console.log("Navbar: NavLink clicked. Attempting to close...");
    if (bsCollapseInstanceRef.current && navbarCollapseRef.current.classList.contains('show')) {
      bsCollapseInstanceRef.current.hide();
      console.log("Navbar: Hide method called via NavLink click.");
    } else {
      console.log("Navbar: Not open or instance not ready for NavLink click.");
    }
  };

  // Effect to handle closing navbar on scroll for small screens
  useEffect(() => {
    const handleScroll = () => {
      // Ensure instance exists and navbar is currently open on small screens
      if (bsCollapseInstanceRef.current && window.innerWidth < 992 && navbarCollapseRef.current.classList.contains('show')) {
        bsCollapseInstanceRef.current.hide();
        console.log("Navbar: Hide method called via scroll event.");
      }
    };

    window.addEventListener('scroll', handleScroll);
    console.log("Navbar: Scroll event listener added.");

    // Cleanup: Remove event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
      console.log("Navbar: Scroll event listener removed.");
    };
  }, []); // Empty dependency array: runs only once on mount

  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top navbar-custom-bg">
      <div className="container-fluid navbar-content-wrapper">
        <NavLink to="/" className="navbar-brand">
          <img src={logo} alt="Seven Eleven Academy Logo" className="company_logo logo-lg" />
          {/* Wrapped SS Group text with a NavLink to the specified URL */}
         <NavLink to="https://www.ssgroup.biz/" target="_blank" rel="noopener noreferrer" className="ss-group-link">
            <span className="ss-group-text">SS Group</span>
          </NavLink>
        </NavLink>
         

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav" ref={navbarCollapseRef}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/" className="nav-link" activeclassname="active" onClick={handleNavLinkClick}>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link" activeclassname="active" onClick={handleNavLinkClick}>About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/services" className="nav-link" activeclassname="active" onClick={handleNavLinkClick}>Services</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/courses" className="nav-link" activeclassname="active" onClick={handleNavLinkClick}>Courses</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link" activeclassname="active" onClick={handleNavLinkClick}>Contact</NavLink>
            </li>
          </ul>
          <NavLink to="/register" className="btn btn-custom-green" onClick={handleNavLinkClick}>
            Register
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;