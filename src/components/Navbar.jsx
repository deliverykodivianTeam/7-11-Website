import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; // Import the CSS file
import logo from "../assets/Logo - Seven Eleven Academy.png";

function Navbar() {
  return (
    <nav className="transparent-navbar">
      <ul>
        <div>
          <Link to="/" className="logo-link">
            <img src={logo} alt="Your Logo" className="company_logo" />
          </Link>
        </div>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/courses">All Courses</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;