// SoftwareDevelopment.jsx
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLaptopCode,     // Primary icon for Software Development
  faRocket,
  faChalkboardTeacher,
  faHandsHelping,
  faLightbulb,
  faCodeBranch,     // For Git/Version Control
  faFlask,          // For projects
  faQuestionCircle,
  faUserGraduate,
  faBriefcase,
  faChartLine,      // For career growth / impact
  faPuzzlePiece,    // For problem-solving, design patterns
  faComments,
  faBookOpen,       // For syllabus/foundations
  faCode,           // General coding
  faArrowRight,
  faDatabase,       // For databases
  faGlobe,          // For web development
  faMobileAlt,      // For mobile development
  faBug,  
  faLaptop,          // For testing/debugging
  faCloud,          // For deployment/DevOps
  faSitemap,        // For data structures/algorithms
  faObjectGroup,    // For OOP & Design Patterns (conceptually)
} from '@fortawesome/free-solid-svg-icons';
import '../styles/master.css'; // Assuming your shared CSS is named masterclass.css

function SoftwareDevelopment() {
  return (
    <div className="sd-page fade-in">
      {/* Hero Section - White Background, Orange Accents */}
      <div className="sd-hero-alt py-5 text-dark d-flex align-items-center" style={{ minHeight: '0vh' }}>
        <div className="container">
          <div className="row justify-content-center align-items-center text-center">
            <div className="col-lg-10">
              {/* Main Heading */}
              <h1 className="h2 fw-bold mb-2 text-dark-theme">
                Software Development Masterclass
              </h1>

              {/* Smaller Subheading */}
              <h3 className="h5 fw-normal mb-4 text-muted">
                Master the art of building robust, scalable, and innovative software solutions.
              </h3>

              {/* Description */}
              <p className="lead mb-4">
                From fundamental programming concepts to advanced architectural design and deployment, this comprehensive program equips you to develop software across diverse platforms and industries, applicable to any language.
              </p>

              {/* Buttons */}
              <a href="#syllabus" className="btn btn-lg btn-primary-theme rounded-pill me-3 mb-2">
                Explore Syllabus <FontAwesomeIcon icon={faRocket} className="ms-2" />
              </a>
              <a href="/register" className="btn btn-lg btn-outline-theme rounded-pill mb-2">
                Enroll Now <FontAwesomeIcon icon={faHandsHelping} className="ms-2" />
              </a>

              {/* Icon */}
              <div className="mt-4">
                <FontAwesomeIcon icon={faLaptopCode} className="ai-hero-icon-alt" /> {/* Using a shared class for styling */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Overview Section - White Background */}
      <div className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center fw-bold mb-5 text-dark-theme">Course Overview</h2>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card h-100 shadow-sm border-0 rounded-3">
                <div className="card-body p-4">
                  <h5 className="card-title fw-bold mb-3 primary-color">What You'll Learn</h5>
                  <ul className="list-unstyled checklist">
                    <li><FontAwesomeIcon icon={faCode} className="me-2 primary-color" /> Core Programming Principles (Syntax, Control Flow)</li>
                    <li><FontAwesomeIcon icon={faSitemap} className="me-2 primary-color" /> Data Structures & Algorithms (Efficiency, Design)</li>
                    <li><FontAwesomeIcon icon={faObjectGroup} className="me-2 primary-color" /> Object-Oriented & Functional Programming Paradigms</li>
                    <li><FontAwesomeIcon icon={faGlobe} className="me-2 primary-color" /> Web Development (Frontend & Backend Frameworks)</li>
                    <li><FontAwesomeIcon icon={faMobileAlt} className="me-2 primary-color" /> Mobile App Development (Native & Cross-Platform)</li>
                    <li><FontAwesomeIcon icon={faCloud} className="me-2 primary-color" /> Software Architecture, Cloud Deployment & DevOps</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card h-100 shadow-sm border-0 rounded-3">
                <div className="card-body p-4">
                  <h5 className="card-title fw-bold mb-3 primary-color">Who Is This Course For?</h5>
                  <p className="card-text text-muted">
                    This course is ideal for:
                  </p>
                  <ul className="list-unstyled checklist">
                    <li><FontAwesomeIcon icon={faUserGraduate} className="me-2 primary-color" /> Aspiring Software Developers and Engineers</li>
                    <li><FontAwesomeIcon icon={faBriefcase} className="me-2 primary-color" /> IT Professionals seeking to transition into coding roles</li>
                    <li><FontAwesomeIcon icon={faLaptop} className="me-2 primary-color" /> Tech Enthusiasts eager to build their own applications</li>
                    <li><FontAwesomeIcon icon={faChartLine} className="me-2 primary-color" /> Anyone aiming for a high-demand career in tech innovation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why This Is Important Section - Black Background */}
      <div className="py-5 why-important-section text-white">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">Why Software Development Matters</h2>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <p className="lead text-center mb-4">
                Software development is the engine of the digital age, powering everything from mobile apps to complex enterprise systems. Mastering software development means acquiring the skills to innovate, solve complex problems, and drive technological progress in virtually every industry.
              </p>
              <ul className="list-unstyled text-center benefits-list">
                <li>
                  <FontAwesomeIcon icon={faLightbulb} size="2x" className="mb-2 primary-color" />
                  <h6 className="fw-bold">Innovation & Creation</h6>
                  <p className="small">Bring new ideas to life and build impactful solutions.</p>
                </li>
                <li>
                  <FontAwesomeIcon icon={faPuzzlePiece} size="2x" className="mb-2 primary-color" />
                  <h6 className="fw-bold">Complex Problem Solving</h6>
                  <p className="small">Develop logical thinking to tackle intricate challenges.</p>
                </li>
                <li>
                  <FontAwesomeIcon icon={faChartLine} size="2x" className="mb-2 primary-color" />
                  <h6 className="fw-bold">High Demand & Flexibility</h6>
                  <p className="small">Access diverse career opportunities globally.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Syllabus Section - White Background */}
      <div id="syllabus" className="py-5 bg-white">
        <div className="container">
          <h2 className="text-center fw-bold mb-5 text-dark-theme">Detailed Syllabus</h2>
          <div className="accordion" id="sdSyllabusAccordion">
            {/* Module 1 */}
            <div className="accordion-item shadow-sm mb-3 rounded-3">
              <h2 className="accordion-header" id="sdHeadingOne">
                <button
                  className="accordion-button fw-bold accordion-button-theme collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#sdCollapseOne"
                  aria-expanded="false"
                  aria-controls="sdCollapseOne"
                >
                  <FontAwesomeIcon icon={faBookOpen} className="me-2 primary-color" /> Module 1: Core Programming Fundamentals
                </button>
              </h2>
              <div
                id="sdCollapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="sdHeadingOne"
                data-bs-parent="#sdSyllabusAccordion"
              >
                <div className="accordion-body text-muted">
                  <ul>
                    <li>Introduction to Programming (variables, data types, operators)</li>
                    <li>Control Flow (conditionals, loops)</li>
                    <li>Functions and Modularity</li>
                    <li>Error Handling and Debugging</li>
                    <li>Introduction to a foundational language (e.g., Python or JavaScript)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Module 2 */}
            <div className="accordion-item shadow-sm mb-3 rounded-3">
              <h2 className="accordion-header" id="sdHeadingTwo">
                <button
                  className="accordion-button fw-bold accordion-button-theme collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#sdCollapseTwo"
                  aria-expanded="false"
                  aria-controls="sdCollapseTwo"
                >
                  <FontAwesomeIcon icon={faSitemap} className="me-2 primary-color" /> Module 2: Data Structures & Algorithms
                </button>
              </h2>
              <div
                id="sdCollapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="sdHeadingTwo"
                data-bs-parent="#sdSyllabusAccordion"
              >
                <div className="accordion-body text-muted">
                  <ul>
                    <li>Arrays, Linked Lists, Stacks, Queues</li>
                    <li>Trees (Binary, BST, AVL) and Graphs</li>
                    <li>Sorting Algorithms (Bubble, Merge, Quick Sort)</li>
                    <li>Searching Algorithms (Linear, Binary Search)</li>
                    <li>Time and Space Complexity Analysis (Big O Notation)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Module 3 */}
            <div className="accordion-item shadow-sm mb-3 rounded-3">
              <h2 className="accordion-header" id="sdHeadingThree">
                <button
                  className="accordion-button fw-bold accordion-button-theme collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#sdCollapseThree"
                  aria-expanded="false"
                  aria-controls="sdCollapseThree"
                >
                  <FontAwesomeIcon icon={faPuzzlePiece} className="me-2 primary-color" /> Module 3: Object-Oriented Design & Paradigms
                </button>
              </h2>
              <div
                id="sdCollapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="sdHeadingThree"
                data-bs-parent="#sdSyllabusAccordion"
              >
                <div className="accordion-body text-muted">
                  <ul>
                    <li>Object-Oriented Programming (Classes, Objects, Inheritance, Polymorphism)</li>
                    <li>Design Patterns (Singleton, Factory, Observer)</li>
                    <li>Functional Programming Concepts (Immutability, Higher-Order Functions)</li>
                    <li>Modular Programming and Code Organization</li>
                    <li>Version Control with Git and GitHub</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Module 4 */}
            <div className="accordion-item shadow-sm mb-3 rounded-3">
              <h2 className="accordion-header" id="sdHeadingFour">
                <button
                  className="accordion-button fw-bold accordion-button-theme collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#sdCollapseFour"
                  aria-expanded="false"
                  aria-controls="sdCollapseFour"
                >
                  <FontAwesomeIcon icon={faGlobe} className="me-2 primary-color" /> Module 4: Web & Mobile Development
                </button>
              </h2>
              <div
                id="sdCollapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="sdHeadingFour"
                data-bs-parent="#sdSyllabusAccordion"
              >
                <div className="accordion-body text-muted">
                  <ul>
                    <li>Frontend Technologies (HTML, CSS, JavaScript, React/Vue/Angular concepts)</li>
                    <li>Backend Technologies (Node.js/Express, Python/Django/Flask, Java/Spring concepts)</li>
                    <li>RESTful APIs and Microservices Architecture</li>
                    <li>Introduction to Mobile App Development (React Native/Flutter concepts)</li>
                    <li>Cross-Platform vs. Native Development Considerations</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Module 5 */}
            <div className="accordion-item shadow-sm mb-3 rounded-3">
              <h2 className="accordion-header" id="sdHeadingFive">
                <button
                  className="accordion-button fw-bold accordion-button-theme collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#sdCollapseFive"
                  aria-expanded="false"
                  aria-controls="sdCollapseFive"
                >
                  <FontAwesomeIcon icon={faDatabase} className="me-2 primary-color" /> Module 5: Databases & Software Testing
                </button>
              </h2>
              <div
                id="sdCollapseFive"
                className="accordion-collapse collapse"
                aria-labelledby="sdHeadingFive"
                data-bs-parent="#sdSyllabusAccordion"
              >
                <div className="accordion-body text-muted">
                  <ul>
                    <li>Relational Databases (SQL, Schema Design, Joins)</li>
                    <li>NoSQL Databases (MongoDB, Cassandra basics)</li>
                    <li>Database Integration with Applications</li>
                    <li>Software Testing Methodologies (Unit, Integration, End-to-End)</li>
                    <li>Test-Driven Development (TDD) concepts</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Module 6 */}
            <div className="accordion-item shadow-sm mb-3 rounded-3">
              <h2 className="accordion-header" id="sdHeadingSix">
                <button
                  className="accordion-button fw-bold accordion-button-theme collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#sdCollapseSix"
                  aria-expanded="false"
                  aria-controls="sdCollapseSix"
                >
                  <FontAwesomeIcon icon={faCloud} className="me-2 primary-color" /> Module 6: Deployment, DevOps & Professional Practices
                </button>
              </h2>
              <div
                id="sdCollapseSix"
                className="accordion-collapse collapse"
                aria-labelledby="sdHeadingSix"
                data-bs-parent="#sdSyllabusAccordion"
              >
                <div className="accordion-body text-muted">
                  <ul>
                    <li>Introduction to Cloud Platforms (AWS, Azure, GCP for deployment)</li>
                    <li>Containerization with Docker basics</li>
                    <li>CI/CD Pipelines (Continuous Integration/Continuous Deployment)</li>
                    <li>Agile Development Methodologies (Scrum, Kanban)</li>
                    <li>Software Project Management & Best Practices</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects, Tasks, and Exercises Section - Black Background */}
      <div className="py-5 projects-section-dark text-white">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">Hands-On Learning Experience</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 shadow-sm border-0 rounded-3 card-dark-theme">
                <div className="card-body p-4 text-center">
                  <FontAwesomeIcon icon={faFlask} size="3x" className="mb-3 primary-color" />
                  <h5 className="card-title fw-bold mb-3">Comprehensive Projects</h5>
                  <p className="card-text text-muted">
                    Apply your knowledge by building end-to-end software solutions:
                  </p>
                  <ul className="list-unstyled text-muted small checklist-dark">
                    <li><FontAwesomeIcon icon={faArrowRight} className="me-2 primary-color" /> Full-Stack E-commerce Application</li>
                    <li><FontAwesomeIcon icon={faArrowRight} className="me-2 primary-color" /> RESTful API for Data Management</li>
                    <li><FontAwesomeIcon icon={faArrowRight} className="me-2 primary-color" /> Cross-Platform Mobile Application</li>
                    <li><FontAwesomeIcon icon={faArrowRight} className="me-2 primary-color" /> Command-Line Utility Tool</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow-sm border-0 rounded-3 card-dark-theme">
                <div className="card-body p-4 text-center">
                  <FontAwesomeIcon icon={faCode} size="3x" className="mb-3 primary-color" />
                  <h5 className="card-title fw-bold mb-3">Practical Coding Tasks</h5>
                  <p className="card-text text-muted">
                    Engage in practical tasks that solidify your understanding:
                  </p>
                  <ul className="list-unstyled text-muted small checklist-dark">
                    <li><FontAwesomeIcon icon={faArrowRight} className="me-2 primary-color" /> Implementing Common Data Structures</li>
                    <li><FontAwesomeIcon icon={faArrowRight} className="me-2 primary-color" /> Code Refactoring and Optimization</li>
                    <li><FontAwesomeIcon icon={faArrowRight} className="me-2 primary-color" /> Building Reusable Software Components</li>
                    <li><FontAwesomeIcon icon={faArrowRight} className="me-2 primary-color" /> Collaborative Git Workflows</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow-sm border-0 rounded-3 card-dark-theme">
                <div className="card-body p-4 text-center">
                  <FontAwesomeIcon icon={faQuestionCircle} size="3x" className="mb-3 primary-color" />
                  <h5 className="card-title fw-bold mb-3">Challenging Exercises</h5>
                  <p className="card-text text-muted">
                    Reinforce learning with challenging problem-solving exercises:
                  </p>
                  <ul className="list-unstyled text-muted small checklist-dark">
                    <li><FontAwesomeIcon icon={faArrowRight} className="me-2 primary-color" /> Competitive Programming Problems</li>
                    <li><FontAwesomeIcon icon={faArrowRight} className="me-2 primary-color" /> Designing Scalable System Architectures</li>
                    <li><FontAwesomeIcon icon={faArrowRight} className="me-2 primary-color" /> Debugging Complex Legacy Codebases</li>
                    <li><FontAwesomeIcon icon={faArrowRight} className="me-2 primary-color" /> Implementing Unit and Integration Tests</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section - White Background */}
      <div className="py-5 bg-white text-center">
        <div className="container">
          <h2 className="fw-bold mb-4 text-dark-theme">Ready to Build the Future with Code?</h2>
          <p className="lead text-muted mb-4">Transform your ideas into reality with powerful software development skills.</p>
          <a href="/contact" className="btn btn-lg btn-primary-theme rounded-pill">
            Get Started Today <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default SoftwareDevelopment;