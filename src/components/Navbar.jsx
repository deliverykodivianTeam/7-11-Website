import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Navbar.css'; // All custom styles live here
import logo from "../assets/Logo - Seven Eleven Academy.png";

function Navbar() {
  return (
    // Removed 'bg-light' as 'navbar-custom-bg' handles background
    // Added 'py-0' to remove Bootstrap's default vertical padding
    <nav className="navbar navbar-expand-lg navbar-light sticky-top navbar-custom-bg py-0">
      <div className="container-fluid"> {/* Removed align-items-start here */}
        <NavLink to="/" className="navbar-brand py-0"> {/* Added py-0 here */}
          <img src={logo} alt="Your Logo" className="company_logo logo-lg" /> {/* Removed align-items-start here */}
        </NavLink>

        <button
          className="navbar-toggler py-0" // Added py-0 here
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span> {/* Removed align-items-start here */}
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/" className="nav-link" activeclassname="active">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link" activeclassname="active">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/services" className="nav-link" activeclassname="active">Services</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/courses" className="nav-link" activeclassname="active">Courses</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link" activeclassname="active">Contact</NavLink>
            </li>
          </ul>
          <NavLink to="/register" className="btn btn-custom-green">
            Register
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;