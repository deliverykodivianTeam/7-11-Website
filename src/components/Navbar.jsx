import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink
import '../styles/Navbar.css'; // Import the CSS file
import logo from "../assets/Logo - Seven Eleven Academy.png";

function Navbar() {
  return (
    <nav className="transparent-navbar">
      <ul>
        {/* The logo should also use NavLink if you want it to be "active" on the homepage */}
        <NavLink to="/" className="logo-link">
          <img src={logo} alt="Your Logo" className="company_logo" />
        </NavLink>
        <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
        <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
        <li><NavLink to="/courses" activeClassName="active">All Courses</NavLink></li>
        <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;