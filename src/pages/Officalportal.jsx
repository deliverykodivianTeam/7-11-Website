import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Register from './Register'; // Adjust path if needed
import ContactsList from './ContactsList'; // Adjust path if needed
// Assuming you have an App.css

function Officialportal() {
  return (
    <Router>
      <div className="container mt-4">
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">Student App</Link>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/register">Register Student</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contacts">View Registrations</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/contacts" element={<ContactsList />} />
          <Route path="/" element={<Home />} /> {/* Optional Home page */}
        </Routes>
      </div>
    </Router>
  );
}

// Optional Home Component
const Home = () => (
  <div className="text-center mt-5">
    <h1>Welcome to the Student Management Portal!</h1>
    <p>Use the navigation above to Register a new student or View existing registrations.</p>
  </div>
);

export default Officialportal;