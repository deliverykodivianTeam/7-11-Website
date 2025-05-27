import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css'; // Make sure this CSS file exists if you use it
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import 'bootstrap/dist/css/bootstrap.min.css'; // Always import CSS
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Import JS bundle ONCE
import ScrollTop from './components/ScrollTop';

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
import Register from './pages/Register.jsx';
import Officialportal from './pages/Officalportal.jsx';

// Import the Chatbot component
import Chatbot from './components/Chatbot.jsx'; // <--- ADD THIS LINE
import Artificial from './pages/ArtificialIntelligence.jsx';
import DataScience from './pages/DataScience.jsx';
import Networking from './pages/Networking.jsx';
import CyberSecurity from './pages/CyberSecurity.jsx'
import SoftwareDevelopment from './pages/SoftwareDevelopment.jsx';
import SoftSkill from './pages/SoftSkill.jsx';
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
  const hideFooterPaths = ['/api', '/register'];

  // You might want to hide the chatbot on certain paths too,
  // similar to how Navbar and Footer are hidden.
  // For now, it will appear on all pages unless you add paths here.
  const hideChatbotPaths = ['/api']; // Example: hide chatbot on the /api page

  const showNavbar = !hideNavbarPaths.includes(location.pathname);
  const showFooter = !hideFooterPaths.includes(location.pathname);
  const showChatbot = !hideChatbotPaths.includes(location.pathname); // <--- ADD THIS LINE

  return (
    <>
      {showNavbar && <Navbar />} {/* Conditionally render Navbar */}
      <ScrollTop></ScrollTop>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/artificial" element={<Artificial />} />
        <Route path="/datscience" element={<DataScience />} />
        <Route path="/network" element={<Networking />} />
        <Route path="/cyber" element={<CyberSecurity />} />
        <Route path="/software" element={<SoftwareDevelopment />} />
        <Route path="/softskill" element={<SoftSkill />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/scholarship-details" element={<ScholarshipDetails />} />
        <Route path="/courses" element={<AllCourses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/api" element={<Officialportal />} />
      </Routes>
      {showFooter && <Footer />} {/* Conditionally render Footer */}
      {showChatbot && <Chatbot />} {/* <--- ADD THIS LINE TO RENDER THE CHATBOT */}
    </>
  );
}

export default App;