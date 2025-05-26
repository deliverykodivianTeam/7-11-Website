import React, { useRef, useEffect } from 'react'; // Import useEffect
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Navbar.css';
import logo from "../assets/Logo - Seven Eleven Academy.png";
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Navbar() {
  const navbarCollapseRef = useRef(null); // Create a ref

  // Function to close the navbar when a NavLink is clicked
  const handleNavLinkClick = () => {
    if (navbarCollapseRef.current) {
      // Check if the navbar is currently open (has the 'show' class)
      if (navbarCollapseRef.current.classList.contains('show')) {
        // Use Bootstrap's native JS method to hide the collapse
        const bsCollapse = new window.bootstrap.Collapse(navbarCollapseRef.current, {
          toggle: false
        });
        bsCollapse.hide();
      }
    }
  };

  // Effect to handle closing navbar on scroll for small screens
  useEffect(() => {
    const handleScroll = () => {
      // Check if the navbar is open and if it's a small screen
      if (window.innerWidth < 992 && navbarCollapseRef.current && navbarCollapseRef.current.classList.contains('show')) {
        const bsCollapse = new window.bootstrap.Collapse(navbarCollapseRef.current, {
          toggle: false
        });
        bsCollapse.hide();
      }
    };

    // Add the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top navbar-custom-bg">
      <div className="container-fluid navbar-content-wrapper">
        <NavLink to="/" className="navbar-brand">
          <img src={logo} alt="Your Logo" className="company_logo logo-lg" />
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