// CyberSecurity.jsx
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShieldHalved, // Primary icon for Cybersecurity
  faRocket,
  faChalkboardTeacher,
  faHandsHelping,
  faLightbulb,
  faCodeBranch,
  faLaptopCode,
  faFlask,
  faQuestionCircle,
  faUserGraduate,
  faBriefcase,
  faChartLine,
  faPuzzlePiece,
  faMagnifyingGlass ,
  faBookOpen,
  faCloud, 
  faLaptop,
  faCode,
  faArrowRight,
  faBug,           // Vulnerability analysis, exploits
  faLock,          // Encryption, access control
  faEye,           // Monitoring, threat detection
  faClipboardList, // Policies, compliance
  faFingerprint,   // Authentication, biometrics
  faServer,        // Infrastructure security
} from '@fortawesome/free-solid-svg-icons';
import '../styles/master.css'; // Assuming your shared CSS is named masterclass.css

function CyberSecurity() {
  return (
    <div className="cs-page fade-in">
      {/* Hero Section - White Background, Orange Accents */}
      <div className="cs-hero-alt py-5 text-dark d-flex align-items-center" style={{ minHeight: '0vh' }}>
        <div className="container">
          <div className="row justify-content-center align-items-center text-center">
            <div className="col-lg-10">
              {/* Main Heading */}
              <h1 className="h2 fw-bold mb-2 text-dark-theme">
                Cyber Security Masterclass
              </h1>

              {/* Smaller Subheading */}
              <h3 className="h5 fw-normal mb-4 text-muted">
                Protect digital assets, detect threats, and defend against cyber attacks.
              </h3>

              {/* Description */}
              <p className="lead mb-4">
                Become an expert in safeguarding information systems and networks from evolving cyber threats with our comprehensive Cyber Security program.
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
                <FontAwesomeIcon icon={faShieldHalved} className="ai-hero-icon-alt" /> {/* Using the same class for styling */}
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
                    <li><FontAwesomeIcon icon={faLock} className="me-2 primary-color" /> Foundations of Information Security & Risk Management</li>
                    <li><FontAwesomeIcon icon={faBug} className="me-2 primary-color" /> Network Security, Vulnerability Assessment & Penetration Testing</li>
                    <li><FontAwesomeIcon icon={faEye} className="me-2 primary-color" /> Incident Response & Digital Forensics</li>
                    <li><FontAwesomeIcon icon={faCloud} className="me-2 primary-color" /> Cloud Security & Application Security</li>
                    <li><FontAwesomeIcon icon={faClipboardList} className="me-2 primary-color" /> Security Operations & Compliance</li>
                    <li><FontAwesomeIcon icon={faFingerprint} className="me-2 primary-color" /> Cryptography & Secure Authentication</li>
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
                    <li><FontAwesomeIcon icon={faUserGraduate} className="me-2 primary-color" /> Aspiring Cybersecurity Analysts and Engineers</li>
                    <li><FontAwesomeIcon icon={faBriefcase} className="me-2 primary-color" /> IT Professionals seeking to specialize in security</li>
                    <li><FontAwesomeIcon icon={faLaptop} className="me-2 primary-color" /> Developers aiming to build secure applications</li>
                    <li><FontAwesomeIcon icon={faPuzzlePiece} className="me-2 primary-color" /> Anyone concerned with digital safety and privacy</li>
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
          <h2 className="text-center fw-bold mb-5">Why Cyber Security Matters</h2>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <p className="lead text-center mb-4">
                In an increasingly connected world, cyber security is paramount. It protects sensitive data, maintains privacy, ensures business continuity, and defends against malicious attacks that can cripple individuals and organizations. It's a field with immense demand and critical importance.
              </p>
              <ul className="list-unstyled text-center benefits-list">
                <li>
                  <FontAwesomeIcon icon={faLock} size="2x" className="mb-2 primary-color" />
                  <h6 className="fw-bold">Protect Critical Data</h6>
                  <p className="small">Safeguard sensitive information from breaches.</p>
                </li>
                <li>
                  <FontAwesomeIcon icon={faBug} size="2x" className="mb-2 primary-color" />
                  <h6 className="fw-bold">Combat Evolving Threats</h6>
                  <p className="small">Learn to counter sophisticated cyber attacks.</p>
                </li>
                <li>
                  <FontAwesomeIcon icon={faChartLine} size="2x" className="mb-2 primary-color" />
                  <h6 className="fw-bold">High Demand & Impact</h6>
                  <p className="small">Join a vital and rapidly expanding global industry.</p>
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
          <div className="accordion" id="csSyllabusAccordion">
            {/* Module 1 */}
            <div className="accordion-item shadow-sm mb-3 rounded-3">
              <h2 className="accordion-header" id="csHeadingOne">
                <button
                  className="accordion-button fw-bold accordion-button-theme collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#csCollapseOne"
                  aria-expanded="false"
                  aria-controls="csCollapseOne"
                >
                  <FontAwesomeIcon icon={faBookOpen} className="me-2 primary-color" /> Module 1: Introduction to Cyber Security & InfoSec Principles
                </button>
              </h2>
              <div
                id="csCollapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="csHeadingOne"
                data-bs-parent="#csSyllabusAccordion"
              >
                <div className="accordion-body text-muted">
                  <ul>
                    <li>Fundamentals of Information Security (CIA Triad)</li>
                    <li>Threats, Vulnerabilities, and Risks</li>
                    <li>Security Governance, Risk, and Compliance (GRC)</li>
                    <li>Legal and Ethical Aspects of Cyber Security</li>
                    <li>Security Architectures and Models</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Module 2 */}
            <div className="accordion-item shadow-sm mb-3 rounded-3">
              <h2 className="accordion-header" id="csHeadingTwo">
                <button
                  className="accordion-button fw-bold accordion-button-theme collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#csCollapseTwo"
                  aria-expanded="false"
                  aria-controls="csCollapseTwo"
                >
                  <FontAwesomeIcon icon={faServer} className="me-2 primary-color" /> Module 2: Network & System Security
                </button>
              </h2>
              <div
                id="csCollapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="csHeadingTwo"
                data-bs-parent="#csSyllabusAccordion"
              >
                <div className="accordion-body text-muted">
                  <ul>
                    <li>Network Security Devices (Firewalls, IDS/IPS, VPNs)</li>
                    <li>Secure Network Design (Segmentation, Zero Trust)</li>
                    <li>Operating System Security (Windows, Linux Hardening)</li>
                    <li>Endpoint Security (Antivirus, EDR)</li>
                    <li>Virtualization and Container Security</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Module 3 */}
            <div className="accordion-item shadow-sm mb-3 rounded-3">
              <h2 className="accordion-header" id="csHeadingThree">
                <button
                  className="accordion-button fw-bold accordion-button-theme collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#csCollapseThree"
                  aria-expanded="false"
                  aria-controls="csCollapseThree"
                >
                  <FontAwesomeIcon icon={faBug} className="me-2 primary-color" /> Module 3: Vulnerability Assessment & Ethical Hacking
                </button>
              </h2>
              <div
                id="csCollapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="csHeadingThree"
                data-bs-parent="#csSyllabusAccordion"
              >
                <div className="accordion-body text-muted">
                  <ul>
                    <li>Phases of Ethical Hacking</li>
                    <li>Reconnaissance and Footprinting</li>
                    <li>Scanning and Enumeration Techniques</li>
                    <li>Vulnerability Analysis and Exploitation (Metasploit)</li>
                    <li>Web Application Penetration Testing (OWASP Top 10)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Module 4 */}
            <div className="accordion-item shadow-sm mb-3 rounded-3">
              <h2 className="accordion-header" id="csHeadingFour">
                <button
                  className="accordion-button fw-bold accordion-button-theme collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#csCollapseFour"
                  aria-expanded="false"
                  aria-controls="csCollapseFour"
                >
                  <FontAwesomeIcon icon={faEye} className="me-2 primary-color" /> Module 4: Incident Response & Digital Forensics
                </button>
              </h2>
              <div
                id="csCollapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="csHeadingFour"
                data-bs-parent="#csSyllabusAccordion"
              >
                <div className="accordion-body text-muted">
                  <ul>
                    <li>Incident Response Life Cycle (NIST, SANS)</li>
                    <li>Threat Intelligence and SIEM Systems</li>
                    <li>Log Analysis and Security Monitoring</li>
                    <li>Digital Forensics Principles and Tools</li>
                    <li>Malware Analysis Basics</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Module 5 */}
            <div className="accordion-item shadow-sm mb-3 rounded-3">
              <h2 className="accordion-header" id="csHeadingFive">
                <button
                  className="accordion-button fw-bold accordion-button-theme collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#csCollapseFive"
                  aria-expanded="false"
                  aria-controls="csCollapseFive"
                >
                  <FontAwesomeIcon icon={faCloud} className="me-2 primary-color" /> Module 5: Cloud & Application Security
                </button>
              </h2>
              <div
                id="csCollapseFive"
                className="accordion-collapse collapse"
                aria-labelledby="csHeadingFive"
                data-bs-parent="#csSyllabusAccordion"
              >
                <div className="accordion-body text-muted">
                  <ul>
                    <li>Cloud Security Architectures (IaaS, PaaS, SaaS Security)</li>
                    <li>Shared Responsibility Model</li>
                    <li>DevSecOps Principles</li>
                    <li>Secure Coding Practices</li>
                    <li>API Security and Container Security in Cloud</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Module 6 */}
            <div className="accordion-item shadow-sm mb-3 rounded-3">
              <h2 className="accordion-header" id="csHeadingSix">
                <button
                  className="accordion-button fw-bold accordion-button-theme collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#csCollapseSix"
                  aria-expanded="false"
                  aria-controls="csCollapseSix"
                >
                  <FontAwesomeIcon icon={faClipboardList} className="me-2 primary-color" /> Module 6: Compliance, Governance & Future Trends
                </button>
              </h2>
              <div
                id="csCollapseSix"
                className="accordion-collapse collapse"
                aria-labelledby="csHeadingSix"
                data-bs-parent="#csSyllabusAccordion"
              >
                <div className="accordion-body text-muted">
                  <ul>
                    <li>Data Privacy Regulations (GDPR, HIPAA, CCPA)</li>
                    <li>Industry Standards (ISO 27001, NIST Cybersecurity Framework)</li>
                    <li>Security Auditing and Assessment</li>
                    <li>Emerging Threats (AI/ML in Cyber Security, IoT Security)</li>
                    <li>Career Paths in Cyber Security</li>
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
                  <h5 className="card-title fw-bold mb-3">Penetration Testing Exercises</h5>
                  <p className="card-text text-muted">
                    Apply ethical hacking techniques to identify and exploit vulnerabilities:
                  </p>
                  <ul className="list-unstyled text-muted small checklist-dark">
                    <li><FontAwesomeIcon icon={faArrowRight} className="me-2 primary-color" /> Web Application Vulnerability Scanning</li>
                    <li><FontAwesomeIcon icon={faArrowRight} className="me-2 primary-color" /> Network Reconnaissance and Exploitation</li>
                    <li><FontAwesomeIcon icon={faArrowRight} className="me-2 primary-color" /> Social Engineering Simulations</li>
                    <li><FontAwesomeIcon icon={faArrowRight} className="me-2 primary-color" /> Buffer Overflow Exploitation</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow-sm border-0 rounded-3 card-dark-theme">
                <div className="card-body p-4 text-center">
                  <FontAwesomeIcon icon={faCode} size="3x" className="mb-3 primary-color" />
                  <h5 className="card-title fw-bold mb-3">Security Implementation Tasks</h5>
                  <p className="card-text text-muted">
                    Engage in practical security configurations and defenses:
                  </p>
                  <ul className="list-unstyled text-muted small checklist-dark">
                    <li><FontAwesomeIcon icon={faArrowRight} className="me-2 primary-color" /> Firewall Rule Configuration & VPN Setup</li>
                    <li><FontAwesomeIcon icon={faArrowRight} className="me-2 primary-color" /> Implementing Access Control Systems</li>
                    <li><FontAwesomeIcon icon={faArrowRight} className="me-2 primary-color" /> Secure Coding Practices in Python/Java</li>
                    <li><FontAwesomeIcon icon={faArrowRight} className="me-2 primary-color" /> Configuring SIEM for Alerting</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow-sm border-0 rounded-3 card-dark-theme">
                <div className="card-body p-4 text-center">
                  <FontAwesomeIcon icon={faMagnifyingGlass} size="3x" className="mb-3 primary-color" />
                  <h5 className="card-title fw-bold mb-3">Incident Response Drills</h5>
                  <p className="card-text text-muted">
                    Reinforce learning with challenging incident response scenarios:
                  </p>
                  <ul className="list-unstyled text-muted small checklist-dark">
                    <li><FontAwesomeIcon icon={faArrowRight} className="me-2 primary-color" /> Simulated Phishing Attack Analysis</li>
                    <li><FontAwesomeIcon icon={faArrowRight} className="me-2 primary-color" /> Malware Analysis and Containment</li>
                    <li><FontAwesomeIcon icon={faArrowRight} className="me-2 primary-color" /> Digital Forensics Case Study</li>
                    <li><FontAwesomeIcon icon={faArrowRight} className="me-2 primary-color" /> Developing an Incident Response Plan</li>
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
          <h2 className="fw-bold mb-4 text-dark-theme">Ready to Become a Cyber Security Defender?</h2>
          <p className="lead text-muted mb-4">Protect the digital world with cutting-edge security expertise.</p>
          <a href="/contact" className="btn btn-lg btn-primary-theme rounded-pill">
            Get Started Today <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default CyberSecurity;