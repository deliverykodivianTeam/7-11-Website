import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css'; // Make sure this CSS file exists if you use it

// Import your existing pages
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import AllCourses from './pages/All_Courses.jsx';
import ScholarshipDetails from './pages/ScholarshipDetails.jsx';
import Services from './pages/Services.jsx';
import Contact from './pages/Contact.jsx'; // Your existing Contact page
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

// Import the consolidated Register component
import Register from './pages/Register.jsx'; // Assuming Register.jsx is in the src directory, or adjust path if it's in src/pages or src/components
import Officialportal from './pages/Officalportal.jsx';

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

  // Define paths where Navbar should be hidden
  const hideNavbarPaths = ['/api'];

  // Define paths where Footer should be hidden
  const hideFooterPaths = ['/api', '/register']; // Add '/register' to hide the footer on registration page

  const showNavbar = !hideNavbarPaths.includes(location.pathname);
  const showFooter = !hideFooterPaths.includes(location.pathname);

  return (
    <>
      {showNavbar && <Navbar />} {/* Conditionally render Navbar */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/scholarship-details" element={<ScholarshipDetails />} />
        <Route path="/courses" element={<AllCourses />} />
        <Route path="/contact" element={<Contact />} />
        {/* Route for your consolidated Register component */}
        <Route path="/register" element={<Register />} />
        {/* Place the /api route here, it's better to have all routes within a single <Routes> block */}
        <Route path="/api" element={<Officialportal />} />
      </Routes>
      {showFooter && <Footer />} {/* Conditionally render Footer */}
    </>
  );
}

export default App;