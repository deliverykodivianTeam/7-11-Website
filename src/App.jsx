import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'; // Import useLocation
import './App.css';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import AllCourses from './pages/All_Courses.jsx';
import ScholarshipDetails from './pages/ScholarshipDetails.jsx';
import Services from './pages/Services.jsx';
import Contact from './pages/Contact.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import ContactsList from './pages/ContactsList.jsx';

function App() {
  return (
    <Router>
      <div className="app-container">
        <AppContent /> {/* Create a new component to handle conditional rendering */}
      </div>
    </Router>
  );
}

function AppContent() {
  const location = useLocation(); // Get the current location
  const hideNavAndFooter = location.pathname === '/api'; // Check if the path is '/api'

  return (
    <>
      {!hideNavAndFooter && <Navbar />} {/* Conditionally render Navbar */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/scholarship-details" element={<ScholarshipDetails />} />
        <Route path="/courses" element={<AllCourses />} />
        <Route path="/contact" element={<Contact />} />
        {/* Place the /api route here, it's better to have all routes within a single <Routes> block */}
        <Route path="/api" element={<ContactsList />} />
      </Routes>
      {!hideNavAndFooter && <Footer />} {/* Conditionally render Footer */}
    </>
  );
}

export default App;