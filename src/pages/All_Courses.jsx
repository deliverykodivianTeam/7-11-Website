import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/All_Courses.css';
import courses_card from "../assets/courses_card.jpg";
import { width } from '@fortawesome/free-brands-svg-icons/fa42Group';

function All_Courses() {
const originalCourses = [
  {
    title: 'Artificial Intelligence Essentials',
    instructor: 'Mr.',
    description: 'Understand the core concepts of AI, including machine learning, neural networks, and real-world applications.',
    link: '/courses',
  },
  {
    title: 'Data Science with Python',
    instructor: 'mr.',
    description: 'Learn how to analyze data, visualize insights, and build predictive models using Python.',
    link: '/courses',
  },
  {
    title: 'Networking & Cyber Security',
    instructor: 'mr.',
    description: 'Gain hands-on experience with network protocols, security threats, ethical hacking, and protection strategies.',
    link: '/courses',
  },
  {
    title: 'Full Stack Software Development',
    instructor: 'mr.',
    description: 'Master full stack development using modern tools like React, Node.js, and MongoDB.',
    link: '/courses',
  },
  {
    title: 'Soft Skills for Career Success',
    instructor: 'mr.',
    description: 'Enhance your communication, leadership, and problem-solving skills for a professional edge.',
    link: '/courses',
  },
];

// Duplicate the courses array several times to create a longer, seamless loop.
// The more duplicates, the longer before it "resets" visually, making it appear truly infinite.
// For 5 original courses, doubling them up (10 courses total) is usually enough
// to ensure a smooth transition. You can triple or quadruple for extra safety.
const courses = [...originalCourses, ...originalCourses, ...originalCourses]; // Tripling for robust looping

  return (
    <div className="all-courses-page py-5 fade-up">
      <div className="container">
        {/* Main Header Section */}
        <div className="row align-items-center mt-0 mb-4">
          <div className="col-12 text-center">
            {/* You had an empty div here, consider adding a heading if needed */}
          </div>
        </div>

        {/* Large Image Section */}
        <div className="row mb-5">
          <div className="col-12">
            <img
              src={courses_card}
              alt="Courses Hero"
              className="img-fluid rounded shadow-sm w-100"
              style={{ maxHeight: '900px', objectFit: 'cover' }}
            />
          </div>
        </div>

        {/* Listed Courses Section */}
        <div className="mb-4">
          <h2 className="all-courses-heading text-black">Listed Courses</h2>
          <div className="orange-line"></div>
        </div>
        <div className="course-grid-wrapper"> {/* Add a wrapper for overflow handling */}
          <div className="course-grid">
            {courses.map((course, index) => (
              // IMPORTANT: When duplicating, simple 'index' is not unique.
              // A better key combines original index with the copy number, or use a library for unique IDs.
              // For demonstration, a combination is used.
              <div key={`${course.title}-${index}`} className="course-card">
                <h2 className="course-title text-orange">{course.title}</h2>
                <p className="course-instructor text-white">Instructor: {course.instructor}</p>
                <p className="course-description text-start text-white">{course.description}</p>
                <a href={course.link} className="course-link text-center">
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
          {/* New Section: Beyond the Courses */}
       <div className="mt-5 pt-4">
            <h2 className="all-courses-heading text-black display-4 text-center mb-4">Beyond the Courses: Your Path to Success</h2>
            <div className="orange-line mx-auto mb-5" style={{ width: '890px' }}></div> {/* Centered orange line */}

            <div className="row justify-content-center text-black"> {/* Added justify-content-center here */}
               <div className="col-lg-3 col-md-5 mb-4"> {/* Changed col-md-3 to col-md-4 for better spacing or col-lg-3 for a tighter fit */}
                  <div className="p-4 rounded shadow-sm h-100 feature-card" style={{ border: '2px solid #ddd' }}>
                    <i className="bi bi-code-slash display-4 text-orange mb-3"></i> {/* Icon for Hands-on */}
                    <h3 className="text-orange mb-3">Hands-On Learning & Real-Time Projects</h3>
                    <p className="text-start">Apply your knowledge immediately with practical exercises and real-time projects. Build a robust portfolio that showcases your capabilities and prepares you for industry demands.</p>
                  </div>
               </div>
               <div className="col-lg-3 col-md-5 mb-4"> {/* Changed col-md-3 to col-md-4 */}
                  <div className="p-4 rounded shadow-sm h-100 feature-card" style={{ border: '2px solid #ddd' }}>
                    <i className="bi bi-check2-square display-4 text-orange mb-3"></i> {/* Icon for Assessments */}
                    <h3 className="text-orange mb-3">Skill Assessments & Aptitude Tests</h3>
                    <p className="text-start">Gauge your progress and identify areas for improvement with regular skill assessments and aptitude tests. Sharpen your problem-solving abilities and critical thinking.</p>
                  </div>
               </div>
               <div className="col-lg-3 col-md-5 mb-4"> {/* Changed col-md-3 to col-md-4 */}
                  <div className="p-4 rounded shadow-sm h-100 feature-card" style={{ border: '2px solid #ddd' }}>
                    <i className="bi bi-person-workspace display-4 text-orange mb-3"></i> {/* Icon for Interview Prep */}
                    <h3 className="text-orange mb-3">Interview Preparation & Career Guidance</h3>
                    <p className="text-start">Ace your interviews with dedicated preparation modules, mock interviews, and personalized career guidance. We'll equip you with the confidence to land your dream job.</p>
                  </div>
               </div>
            </div>
       </div>
    </div>
  );
}

export default All_Courses;