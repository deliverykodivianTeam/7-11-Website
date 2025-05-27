import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming you have React Router installed
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

// Import your syllabus components
import DataScienceSyllabus from '../pages/DataScience.jsx';
import CybersecuritySyllabus from '../pages/CyberSecurity.jsx';
import Artificial from '../pages/ArtificialIntelligence.jsx';
import Networking from '../pages/Networking.jsx';
import SoftwareDevelopment from '../pages/SoftwareDevelopment.jsx';
import SoftSkill from '../pages/SoftSkill.jsx';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: '',
    whyToChoose: '',
    courseGap: '',
    skillLearning: ''
  });

  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [submissionError, setSubmissionError] = useState('');
  const [showScholarshipDetails, setShowScholarshipDetails] = useState(false); // State for scholarship details
  const [showSyllabus, setShowSyllabus] = useState(false); // State to control syllabus display

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
    // When the course changes, hide the syllabus initially
    if (id === 'course') {
      setShowSyllabus(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionSuccess(false);
    setSubmissionError('');

    try {
      const res = await fetch('http://127.0.0.1:5000/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      if (res.ok) {
        setSubmissionSuccess(true);
        setFormData({
          name: '',
          phone: '',
          email: '',
          course: '',
          whyToChoose: '',
          courseGap: '',
          skillLearning: ''
        });
        setTimeout(() => {
          setSubmissionSuccess(false);
        }, 5000);
      } else {
        setSubmissionError('Registration failed: ' + (data.message || 'Unknown error'));
      }
    } catch (err) {
      setSubmissionError('Error during registration: ' + err.message);
    }
  };

  // Function to render the correct syllabus component based on selected course
  const renderSyllabus = () => {
    switch (formData.course) {
      case 'Artificial':
        return <Artificial />;
      case 'data_science':
        return <DataScienceSyllabus />;
      case 'networking':
        return <Networking />;
      case 'cybersecurity':
        return <CybersecuritySyllabus />;
      case 'softwaredevelopment':
        return <SoftwareDevelopment />;
      case 'softskill':
        return <SoftSkill />;
      
      default:
        return <p className="text-muted">Please select a course to view its syllabus.</p>;
    }
  };

  return (
    <div className="container mt-5 mb-5">
      {/* Custom styles for the orange accent */}
      <style>
        {`
        :root {
          --accent-orange: #ff6f00;
        }

        /* Style for form-control focus/hover */
        .form-control:focus,
        .form-select:focus,
        .form-control:hover,
        .form-select:hover {
          border-color: var(--accent-orange) !important;
          box-shadow: 0 0 0 0.25rem rgba(255, 111, 0, 0.25) !important;
        }

        /* Style for the button background and border */
        .btn-custom-orange {
          background-color: var(--accent-orange);
          border-color: var(--accent-orange);
          color: #fff; /* Ensure text is white for contrast */
        }

        /* Style for the button hover/focus */
        .btn-custom-orange:hover,
        .btn-custom-orange:focus {
          background-color: #e65c00; /* A slightly darker orange for hover */
          border-color: #e65c00;
          color: #fff;
          box-shadow: 0 0 0 0.25rem rgba(255, 111, 0, 0.25);
        }

        /* Keep text color white for active/focused state */
        .btn-custom-orange:active {
            color: #fff !important;
        }

        /* Style for text-orange class (assuming you have one, or define it) */
        .text-orange {
            color: var(--accent-orange);
        }

        .scholarship-link {
          cursor: pointer;
          color: var(--accent-orange);
          text-decoration: underline;
        }

        .scholarship-link:hover {
          color: #e65c00;
        }
        `}
      </style>

<p className="lead">
  Our programs are open to anyone eager to grow in the tech industry—whether you're a student, a beginner, or someone returning after a career break. If you're passionate about learning, looking to switch careers, or want to upgrade your skills with industry-relevant training, this is the place for you. No prior experience? No problem. We’ve got structured paths to support every learner’s journey.
</p>


      <div className="card p-4 shadow">
        <h2 className="mb-4 text-center text-orange ">Student Registration Form</h2>


        {/* Success Message Display */}
        {submissionSuccess && (
          <div className="alert alert-success text-center" role="alert">
            Registration successful! Thank you for your submission.
          </div>
        )}

        {/* Error Message Display */}
        {submissionError && (
          <div className="alert alert-danger text-center" role="alert">
            {submissionError}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Phone Number */}
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">Phone Number</label>
            <input
              type="tel"
              className="form-control"
              id="phone"
              placeholder="e.g., 9876543210"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="name@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Course */}
          <div className="mb-3">
            <label htmlFor="course" className="form-label">Select Course</label>
            <select
              className="form-select"
              id="course"
              value={formData.course}
              onChange={handleChange}
              required
            >
              <option value="">-- Choose a Course --</option>
              <option value="Artificial">Artificial Intelligence</option>
              <option value="data_science">data Science</option>
              <option value="networking">Networking</option>
              <option value="cybersecurity">Cyber Security</option>
              <option value="softwaredevelopment">Software Development</option>
              <option value="softskill">Soft Skill Development</option>
            </select>
          </div>

          {/* View Syllabus Button */}
          {formData.course && (
            <div className="mb-3 text-center">
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={() => setShowSyllabus(!showSyllabus)}
              >
                {showSyllabus ? `Hide ${formData.course.replace(/_/g, ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} Syllabus` : `View ${formData.course.replace(/_/g, ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} Syllabus`}
              </button>
            </div>
          )}

          {/* Syllabus Display Area */}
          {showSyllabus && formData.course && (
            <div className="mb-3 p-3 border rounded bg-light">
              <h4 className="text-center text-orange mb-3">Syllabus for {formData.course.replace(/_/g, ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</h4>
              {renderSyllabus()}
            </div>
          )}

          {/* Why to Choose */}
          <div className="mb-3">
            <label htmlFor="whyToChoose" className="form-label">Why are you interested in this course?</label>
            <textarea
              className="form-control"
              id="whyToChoose"
              rows="3"
              placeholder="Tell us why you want to join this course and what your goals are."
              value={formData.whyToChoose}
              onChange={handleChange}
            ></textarea>
          </div>

          {/* Course Gap (Optional) */}
          <div className="mb-3">
            <label htmlFor="courseGap" className="form-label">Any gaps in your academic/professional journey (optional)?</label>
            <textarea
              className="form-control"
              id="courseGap"
              rows="3"
              placeholder="e.g., career break, change of field, etc."
              value={formData.courseGap}
              onChange={handleChange}
            ></textarea>
          </div>

          {/* Skill Learning */}
          <div className="mb-3">
            <label htmlFor="skillLearning" className="form-label">What specific skills are you hoping to learn from this course?</label>
            <textarea
              className="form-control"
              id="skillLearning"
              rows="3"
              placeholder="List the key skills you want to acquire."
              value={formData.skillLearning}
              onChange={handleChange}
            ></textarea>
          </div>



        {/* Who Can Join Section */}
        <div className="mb-4 text-center">
         
          <p className="mb-0">
            Interested in financial aid? <span className="scholarship-link" onClick={() => setShowScholarshipDetails(!showScholarshipDetails)}>
              Learn More about Scholarship
            </span>
          </p>
          {showScholarshipDetails && (
            <div className="alert alert-info mt-3" role="alert">
              <p>We offer various scholarship opportunities to help make education accessible. For detailed information on eligibility criteria and application processes, please visit our <Link to="/scholarship" className="alert-link text-orange">Scholarship Page</Link>.</p>
              {/* You can add more details here or direct them to a specific route */}
            </div>
          )}
        </div>

          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-lg btn-custom-orange">Register Now</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;