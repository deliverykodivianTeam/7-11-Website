// SoftSkills.jsx
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPeopleArrows,    // Primary icon for Soft Skills (interpersonal)
  faRocket,
  faChalkboardTeacher,
  faHandsHelping,
  faLightbulb,       // For problem-solving, ideas
  faComments,        // For communication
  faHandshake,       // For collaboration, negotiation
  faClipboardCheck,  // For professionalism, ethics
  faChartLine,       // For career growth
  faUserGraduate,
  faBriefcase,
  faPuzzlePiece,     // For adaptability, complex situations
  faArrowRight,
  faBookOpen,        // For foundational learning
  faHourglassHalf,   // For time management
  faFlask,           // For empathy (though maybe too literal, use faPeopleArrows again for a general soft skill)
  faBrain,           // For critical thinking, learning agility
  faBalanceScale,    // For conflict resolution, fairness
  faStar,            // For leadership (general positive icon)
} from '@fortawesome/free-solid-svg-icons';
import '../styles/master.css'; // Assuming your shared CSS is named masterclass.css

function SoftSkill() {
  return (
    <div className="ss-page fade-in">
      {/* Hero Section - White Background, Orange Accents */}
      <div className="ss-hero-alt py-5 text-dark d-flex align-items-center" style={{ minHeight: '0vh' }}>
        <div className="container">
          <div className="row justify-content-center align-items-center text-center">
            <div className="col-lg-10">
              {/* Main Heading */}
              <h1 className="h2 fw-bold mb-2 text-dark-theme">
                Soft Skills Masterclass
              </h1>

              {/* Smaller Subheading */}
              <h3 className="h5 fw-normal mb-4 text-muted">
                Develop essential interpersonal, communication, and leadership abilities for career success.
              </h3>

              {/* Description */}
              <p className="lead mb-4">
                This comprehensive program goes beyond technical expertise, equipping you with the crucial soft skills needed to thrive in any professional environment, foster collaboration, and drive innovation.
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
                <FontAwesomeIcon icon={faPeopleArrows} className="ai-hero-icon-alt" /> {/* Using a shared class for styling */}
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
                    <li><FontAwesomeIcon icon={faComments} className="me-2 primary-color" /> Effective Communication (Verbal & Non-Verbal)</li>
                    <li><FontAwesomeIcon icon={faHandshake} className="me-2 primary-color" /> Collaboration & Teamwork</li>
                    <li><FontAwesomeIcon icon={faStar} className="me-2 primary-color" /> Leadership & Influence</li>
                    <li><FontAwesomeIcon icon={faLightbulb} className="me-2 primary-color" /> Problem-Solving & Critical Thinking</li>
                    <li><FontAwesomeIcon icon={faHourglassHalf} className="me-2 primary-color" /> Time Management & Productivity</li>
                    <li><FontAwesomeIcon icon={faPuzzlePiece} className="me-2 primary-color" /> Adaptability & Resilience</li>
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
                    <li><FontAwesomeIcon icon={faUserGraduate} className="me-2 primary-color" /> Professionals at any career stage</li>
                    <li><FontAwesomeIcon icon={faBriefcase} className="me-2 primary-color" /> Students preparing for their first jobs</li>
                    <li><FontAwesomeIcon icon={faPeopleArrows} className="me-2 primary-color" /> Leaders and team members seeking to enhance influence</li>
                    <li><FontAwesomeIcon icon={faChartLine} className="me-2 primary-color" /> Anyone looking to accelerate their personal and professional growth</li>
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
          <h2 className="text-center fw-bold mb-5">Why Soft Skills are Crucial</h2>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <p className="lead text-center mb-4">
                In today's dynamic workplace, technical skills alone are not enough. Soft skills differentiate top performers, enabling effective teamwork, clear communication, and the ability to adapt to new challenges. They are key to building strong relationships, fostering innovation, and achieving long-term career success.
              </p>
              <ul className="list-unstyled text-center benefits-list">
                <li>
                  <FontAwesomeIcon icon={faChartLine} size="2x" className="mb-2 primary-color" />
                  <h6 className="fw-bold">Career Advancement</h6>
                  <p className="small">Open doors to leadership and higher responsibilities.</p>
                </li>
                <li>
                  <FontAwesomeIcon icon={faHandshake} size="2x" className="mb-2 primary-color" />
                  <h6 className="fw-bold">Enhanced Collaboration</h6>
                  <p className="small">Build stronger teams and foster productive relationships.</p>
                </li>
                <li>
                  <FontAwesomeIcon icon={faBrain} size="2x" className="mb-2 primary-color" />
                  <h6 className="fw-bold">Increased Impact</h6>
                  <p className="small">Influence decisions and drive meaningful change.</p>
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
          <div className="accordion" id="ssSyllabusAccordion">
            {/* Module 1 */}
            <div className="accordion-item shadow-sm mb-3 rounded-3">
              <h2 className="accordion-header" id="ssHeadingOne">
                <button
                  className="accordion-button fw-bold accordion-button-theme collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#ssCollapseOne"
                  aria-expanded="false"
                  aria-controls="ssCollapseOne"
                >
                  <FontAwesomeIcon icon={faComments} className="me-2 primary-color" /> Module 1: Communication Excellence
                </button>
              </h2>
              <div
                id="ssCollapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="ssHeadingOne"
                data-bs-parent="#ssSyllabusAccordion"
              >
                <div className="accordion-body text-muted">
                  <ul>
                    <li>Active Listening and Empathetic Communication</li>
                    <li>Verbal Communication Skills (Clarity, Conciseness)</li>
                    <li>Non-Verbal Communication (Body Language, Tone)</li>
                    <li>Written Communication (Emails, Reports, Presentations)</li>
                    <li>Giving and Receiving Constructive Feedback</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Module 2 */}
            <div className="accordion-item shadow-sm mb-3 rounded-3">
              <h2 className="accordion-header" id="ssHeadingTwo">
                <button
                  className="accordion-button fw-bold accordion-button-theme collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#ssCollapseTwo"
                  aria-expanded="false"
                  aria-controls="ssCollapseTwo"
                >
                  <FontAwesomeIcon icon={faHandshake} className="me-2 primary-color" /> Module 2: Teamwork & Collaboration
                </button>
              </h2>
              <div
                id="ssCollapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="ssHeadingTwo"
                data-bs-parent="#ssSyllabusAccordion"
              >
                <div className="accordion-body text-muted">
                  <ul>
                    <li>Building High-Performing Teams</li>
                    <li>Effective Collaboration Strategies</li>
                    <li>Conflict Resolution and Negotiation</li>
                    <li>Delegation and Accountability</li>
                    <li>Cross-Cultural Communication and Inclusion</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Module 3 */}
            <div className="accordion-item shadow-sm mb-3 rounded-3">
              <h2 className="accordion-header" id="ssHeadingThree">
                <button
                  className="accordion-button fw-bold accordion-button-theme collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#ssCollapseThree"
                  aria-expanded="false"
                  aria-controls="ssCollapseThree"
                >
                  <FontAwesomeIcon icon={faStar} className="me-2 primary-color" /> Module 3: Leadership & Influence
                </button>
              </h2>
              <div
                id="ssCollapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="ssHeadingThree"
                data-bs-parent="#ssSyllabusAccordion"
              >
                <div className="accordion-body text-muted">
                  <ul>
                    <li>Qualities of Effective Leaders</li>
                    <li>Motivation and Inspiring Others</li>
                    <li>Decision Making and Problem Solving in Leadership</li>
                    <li>Managing Change and Innovation</li>
                    <li>Building and Maintaining Professional Networks</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Module 4 */}
            <div className="accordion-item shadow-sm mb-3 rounded-3">
              <h2 className="accordion-header" id="ssHeadingFour">
                <button
                  className="accordion-button fw-bold accordion-button-theme collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#ssCollapseFour"
                  aria-expanded="false"
                  aria-controls="ssCollapseFour"
                >
                  <FontAwesomeIcon icon={faLightbulb} className="me-2 primary-color" /> Module 4: Critical Thinking & Problem Solving
                </button>
              </h2>
              <div
                id="ssCollapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="ssHeadingFour"
                data-bs-parent="#ssSyllabusAccordion"
              >
                <div className="accordion-body text-muted">
                  <ul>
                    <li>Analytical Thinking and Data Interpretation</li>
                    <li>Creative Problem-Solving Techniques</li>
                    <li>Root Cause Analysis</li>
                    <li>Strategic Thinking and Planning</li>
                    <li>Decision-Making under Pressure</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Module 5 */}
            <div className="accordion-item shadow-sm mb-3 rounded-3">
              <h2 className="accordion-header" id="ssHeadingFive">
                <button
                  className="accordion-button fw-bold accordion-button-theme collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#ssCollapseFive"
                  aria-expanded="false"
                  aria-controls="ssCollapseFive"
                >
                  <FontAwesomeIcon icon={faHourglassHalf} className="me-2 primary-color" /> Module 5: Personal Effectiveness & Professionalism
                </button>
              </h2>
              <div
                id="ssCollapseFive"
                className="accordion-collapse collapse"
                aria-labelledby="ssHeadingFive"
                data-bs-parent="#ssSyllabusAccordion"
              >
                <div className="accordion-body text-muted">
                  <ul>
                    <li>Time Management and Prioritization Strategies</li>
                    <li>Stress Management and Work-Life Balance</li>
                    <li>Self-Awareness and Emotional Intelligence</li>
                    <li>Professional Ethics and Accountability</li>
                    <li>Personal Branding and Networking</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Module 6 */}
            <div className="accordion-item shadow-sm mb-3 rounded-3">
              <h2 className="accordion-header" id="ssHeadingSix">
                <button
                  className="accordion-button fw-bold accordion-button-theme collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#ssCollapseSix"
                  aria-expanded="false"
                  aria-controls="ssCollapseSix"
                >
                  <FontAwesomeIcon icon={faPuzzlePiece} className="me-2 primary-color" /> Module 6: Adaptability & Continuous Learning
                </button>
              </h2>
              <div
                id="ssCollapseSix"
                className="accordion-collapse collapse"
                aria-labelledby="ssHeadingSix"
                data-bs-parent="#ssSyllabusAccordion"
              >
                <div className="accordion-body text-muted">
                  <ul>
                    <li>Embracing Change and Flexibility</li>
                    <li>Resilience and Overcoming Setbacks</li>
                    <li>Growth Mindset and Lifelong Learning</li>
                    <li>Curiosity and Innovation</li>
                    <li>Future of Work and Soft Skills in the AI Era</li>
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
          <h2 className="text-center fw-bold mb-5">Hands-On Skill Application</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 shadow-sm border-0 rounded-3 card-dark-theme">
                <div className="card-body p-4 text-center">
                  <FontAwesomeIcon icon={faFlask} size="3x" className="mb-3 primary-color" />
                  <h5 className="card-title fw-bold mb-3">Role-Playing Scenarios</h5>
                  <p className="card-text text-muted">
                    Practice real-world soft skills in simulated environments:
                  </p>
                  <ul className="list-unstyled text-muted small checklist-dark">
                    <li><FontAwesomeIcon icon={faArrowRight} className="me-2 primary-color" /> Difficult Conversation Simulation</li>
                    <li><FontAwesomeIcon icon={faArrowRight} className="me-2 primary-color" /> Presenting a Project to Stakeholders</li>
                    <li><FontAwesomeIcon icon={faArrowRight} className="me-2 primary-color" /> Conflict Resolution between Team Members</li>
                    <li><FontAwesomeIcon icon={faArrowRight} className="me-2 primary-color" /> Negotiation Exercise</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow-sm border-0 rounded-3 card-dark-theme">
                <div className="card-body p-4 text-center">
                  <FontAwesomeIcon icon={faClipboardCheck} size="3x" className="mb-3 primary-color" />
                  <h5 className="card-title fw-bold mb-3">Practical Exercises</h5>
                  <p className="card-text text-muted">
                    Apply techniques to improve personal and professional effectiveness:
                  </p>
                  <ul className="list-unstyled text-muted small checklist-dark">
                    <li><FontAwesomeIcon icon={faArrowRight} className="me-2 primary-color" /> Developing a Personal Productivity System</li>
                    <li><FontAwesomeIcon icon={faArrowRight} className="me-2 primary-color" /> Crafting Professional Communication Templates</li>
                    <li><FontAwesomeIcon icon={faArrowRight} className="me-2 primary-color" /> Creating a Personal Development Plan</li>
                    <li><FontAwesomeIcon icon={faArrowRight} className="me-2 primary-color" /> Analyzing Case Studies of Leadership</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow-sm border-0 rounded-3 card-dark-theme">
                <div className="card-body p-4 text-center">
                  <FontAwesomeIcon icon={faComments} size="3x" className="mb-3 primary-color" />
                  <h5 className="card-title fw-bold mb-3">Interactive Workshops</h5>
                  <p className="card-text text-muted">
                    Engage in group activities and peer feedback sessions:
                  </p>
                  <ul className="list-unstyled text-muted small checklist-dark">
                    <li><FontAwesomeIcon icon={faArrowRight} className="me-2 primary-color" /> Group Brainstorming for Problem Solving</li>
                    <li><FontAwesomeIcon icon={faArrowRight} className="me-2 primary-color" /> Peer Feedback Circles for Presentations</li>
                    <li><FontAwesomeIcon icon={faArrowRight} className="me-2 primary-color" /> Team-Building Challenges</li>
                    <li><FontAwesomeIcon icon={faArrowRight} className="me-2 primary-color" /> Public Speaking Practice</li>
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
          <h2 className="fw-bold mb-4 text-dark-theme">Ready to Elevate Your Professional Impact?</h2>
          <p className="lead text-muted mb-4">Master the soft skills that unlock leadership, influence, and career success.</p>
          <a href="/contact" className="btn btn-lg btn-primary-theme rounded-pill">
            Enhance Your Skills Now <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default SoftSkill;