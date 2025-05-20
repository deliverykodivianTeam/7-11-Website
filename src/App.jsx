import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import AllCourses from './pages/All_Courses.jsx';
import Contact from './pages/Contact.jsx';
import Navbar from './components/Navbar.jsx'; // Import the Navbar component
import Footer from './components/Footer.jsx';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar /> {/* Use the Navbar component here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<AllCourses />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;