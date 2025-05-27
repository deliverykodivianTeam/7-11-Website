// Networking.jsx
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faNetworkWired, // Primary icon for Networking
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
  faComments,
  faBookOpen,
  faCode,
  faArrowRight,
  faServer,        // Servers and infrastructure
  faShieldHalved,  // Network Security
  faCloud,         // Cloud Networking
  faGaugeHigh,     // Performance
  faCogs,          // Configuration/Management
  faWifi,          // Wireless Networking
  faLaptop,        // General computing/networking
  faMagnifyingGlass, // Troubleshooting
} from '@fortawesome/free-solid-svg-icons';
import '../styles/master.css'; // Assuming you named it masterclass.css

function Networking() {
  return (
    <div className="net-page fade-in">
      {/* Hero Section - White Background, Orange Accents */}
      <div className="net-hero-alt py-5 text-dark d-flex align-items-center" style={{ minHeight: '0vh' }}>
        <div className="container">
          <div className="row justify-content-center align-items-center text-center">
            <div className="col-lg-10">
              {/* Main Heading */}
              <h1 className="h2 fw-bold mb-2 text-dark-theme">
                Networking Masterclass
              </h1>

              {/* Smaller Subheading */}
              <h3 className="h5 fw-normal mb-4 text-muted">
                Build, secure, and manage robust network infrastructures.
              </h3>

              {/* Description */}
              <p className="lead mb-4">
                From foundational concepts to advanced network security and cloud integrations, this program covers everything you need to become a networking expert.
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
                <FontAwesomeIcon icon={faNetworkWired} className="ai-hero-icon-alt" /> {/* Using the same class for styling */}
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
                    <li><FontAwesomeIcon icon={faServer} className="me-2 primary-color" /> Network Fundamentals (OSI, TCP/IP, Protocols)</li>
                    <li><FontAwesomeIcon icon={faShieldHalved} className="me-2 primary-color" /> Network Security Principles and Best Practices</li>
                    <li><FontAwesomeIcon icon={faCogs} className="me-2 primary-color" /> Router and Switch Configuration</li>
                    <li><FontAwesomeIcon icon={faCloud} className="me-2 primary-color" /> Cloud Networking Concepts (AWS, Azure, GCP)</li>
                    <li><FontAwesomeIcon icon={faGaugeHigh} className="me-2 primary-color" /> Network Troubleshooting and Performance Monitoring</li>
                    <li><FontAwesomeIcon icon={faWifi} className="me-2 primary-color" /> Wireless Network Design and Implementation</li>
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
                    <li><FontAwesomeIcon icon={faUserGraduate} className="me-2 primary-color" /> Aspiring Network Engineers and Administrators</li>
                    <li><FontAwesomeIcon icon={faBriefcase} className="me-2 primary-color" /> IT Professionals looking to enhance their networking skills</li>
                    <li><FontAwesomeIcon icon={faLaptop} className="me-2 primary-color" /> Anyone preparing for networking certifications (CCNA, Network+)</li>
                    <li><FontAwesomeIcon icon={faPuzzlePiece} className="me-2 primary-color" /> Individuals interested in cybersecurity fundamentals</li>
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
          <h2 className="text-center fw-bold mb-5">Why Networking Matters</h2>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <p className="lead text-center mb-4">
                Networking is the backbone of the digital world, connecting devices, people, and data globally. Strong networking skills are essential for building secure, efficient, and scalable IT infrastructures, making it a critical area for career growth and innovation.
              </p>
              <ul className="list-unstyled text-center benefits-list">
                <li>
                  <FontAwesomeIcon icon={faRocket} size="2x" className="mb-2 primary-color" />
                  <h6 className="fw-bold">Foundation of IT</h6>
                  <p className="small">Essential for all modern IT roles and infrastructure.</p>
                </li>
                <li>
                  <FontAwesomeIcon icon={faShieldHalved} size="2x" className="mb-2 primary-color" />
                  <h6 className="fw-bold">Security & Reliability</h6>
                  <p className="small">Secure data and ensure seamless communication.</p>
                </li>
                <li>
                  <FontAwesomeIcon icon={faChartLine} size="2x" className="mb-2 primary-color" />
                  <h6 className="fw-bold">High Demand & Versatility</h6>
                  <p className="small">Valued across all industries and evolving technologies.</p>
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
          <div className="accordion" id="netSyllabusAccordion">
            {/* Module 1 */}
            <div className="accordion-item shadow-sm mb-3 rounded-3">
              <h2 className="accordion-header" id="netHeadingOne">
                <button
                  className="accordion-button fw-bold accordion-button-theme collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#netCollapseOne"
                  aria-expanded="false"
                  aria-controls="netCollapseOne"
                >
                  <FontAwesomeIcon icon={faBookOpen} className="me-2 primary-color" /> Module 1: Network Fundamentals
                </button>
              </h2>
              <div
                id="netCollapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="netHeadingOne"
                data-bs-parent="#netSyllabusAccordion"
              >
                <div className="accordion-body text-muted">
                  <ul>
                    <li>OSI Model vs. TCP/IP Model</li>
                    <li>Network Topologies (Bus, Star, Ring, Mesh)</li>
                    <li>IP Addressing (IPv4, IPv6) and Subnetting</li>
                    <li>Common Network Protocols (HTTP, DNS, DHCP, FTP)</li>
                    <li>Network Devices (Routers, Switches, Hubs, Firewalls)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Module 2 */}
            <div className="accordion-item shadow-sm mb-3 rounded-3">
              <h2 className="accordion-header" id="netHeadingTwo">
                <button
                  className="accordion-button fw-bold accordion-button-theme collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#netCollapseTwo"
                  aria-expanded="false"
                  aria-controls="netCollapseTwo"
                >
                  <FontAwesomeIcon icon={faServer} className="me-2 primary-color" /> Module 2: LAN & WAN Technologies
                </button>
              </h2>
              <div
                id="netCollapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="netHeadingTwo"
                data-bs-parent="#netSyllabusAccordion"
              >
                <div className="accordion-body text-muted">
                  <ul>
                    <li>Ethernet Standards and Cabling</li>
                    <li>VLANs and Trunking</li>
                    <li>Spanning Tree Protocol (STP)</li>
                    <li>Routing Concepts and Protocols (Static, RIP, OSPF, EIGRP)</li>
                    <li>WAN Technologies (DSL, Cable, Fiber, MPLS)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Module 3 */}
            <div className="accordion-item shadow-sm mb-3 rounded-3">
              <h2 className="accordion-header" id="netHeadingThree">
                <button
                  className="accordion-button fw-bold accordion-button-theme collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#netCollapseThree"
                  aria-expanded="false"
                  aria-controls="netCollapseThree"
                >
                  <FontAwesomeIcon icon={faShieldHalved} className="me-2 primary-color" /> Module 3: Network Security
                </button>
              </h2>
              <div
                id="netCollapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="netHeadingThree"
                data-bs-parent="#netSyllabusAccordion"
              >
                <div className="accordion-body text-muted">
                  <ul>
                    <li>Firewall Concepts and Configuration</li>
                    <li>VPN Technologies (IPsec, SSL VPN)</li>
                    <li>Intrusion Detection/Prevention Systems (IDS/IPS)</li>
                    <li>Authentication, Authorization, and Accounting (AAA)</li>
                    <li>Wireless Security (WPA2/3, Enterprise)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Module 4 */}
            <div className="accordion-item shadow-sm mb-3 rounded-3">
              <h2 className="accordion-header" id="netHeadingFour">
                <button
                  className="accordion-button fw-bold accordion-button-theme collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#netCollapseFour"
                  aria-expanded="false"
                  aria-controls="netCollapseFour"
                >
                  <FontAwesomeIcon icon={faCloud} className="me-2 primary-color" /> Module 4: Cloud Networking
                </button>
              </h2>
              <div
                id="netCollapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="netHeadingFour"
                data-bs-parent="#netSyllabusAccordion"
              >
                <div className="accordion-body text-muted">
                  <ul>
                    <li>Introduction to Cloud Computing Models (IaaS, PaaS, SaaS)</li>
                    <li>Virtual Private Clouds (VPCs) and Subnets</li>
                    <li>Network Security Groups and ACLs in Cloud</li>
                    <li>Load Balancers and Content Delivery Networks (CDNs)</li>
                    <li>Interconnecting On-Premises with Cloud Networks</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Module 5 */}
            <div className="accordion-item shadow-sm mb-3 rounded-3">
              <h2 className="accordion-header" id="netHeadingFive">
                <button
                  className="accordion-button fw-bold accordion-button-theme collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#netCollapseFive"
                  aria-expanded="false"
                  aria-controls="netCollapseFive"
                >
                  <FontAwesomeIcon icon={faGaugeHigh} className="me-2 primary-color" /> Module 5: Network Management & Troubleshooting
                </button>
              </h2>
              <div
                id="netCollapseFive"
                className="accordion-collapse collapse"
                aria-labelledby="netHeadingFive"
                data-bs-parent="#netSyllabusAccordion"
              >
                <div className="accordion-body text-muted">
                  <ul>
                    <li>Network Monitoring Tools (SNMP, NetFlow)</li>
                    <li>Packet Analysis (Wireshark)</li>
                    <li>Troubleshooting Methodologies (Top-Down, Bottom-Up)</li>
                    <li>Performance Optimization Techniques</li>
                    <li>Introduction to Network Automation (Ansible, Python Scripting)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Module 6 */}
            <div className="accordion-item shadow-sm mb-3 rounded-3">
              <h2 className="accordion-header" id="netHeadingSix">
                <button
                  className="accordion-button fw-bold accordion-button-theme collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#netCollapseSix"
                  aria-expanded="false"
                  aria-controls="netCollapseSix"
                >
                  <FontAwesomeIcon icon={faLaptopCode} className="me-2 primary-color" /> Module 6: Advanced Topics & Case Studies
                </button>
              </h2>
              <div
                id="netCollapseSix"
                className="accordion-collapse collapse"
                aria-labelledby="netHeadingSix"
                data-bs-parent="#netSyllabusAccordion"
              >
                <div className="accordion-body text-muted">
                  <ul>
                    <li>Software-Defined Networking (SDN) and Network Function Virtualization (NFV)</li>
                    <li>Container Networking (Docker, Kubernetes)</li>
                    <li>IoT Networking Challenges and Solutions</li>
                    <li>Disaster Recovery and Business Continuity Planning</li>
                    <li>Real-World Network Design Case Studies</li>
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
                  <h5 className="card-title fw-bold mb-3">Network Design Projects</h5>
                  <p className="card-text text-muted">
                    Apply your knowledge by designing and implementing network solutions:
                  </p>
                  <ul className="list-unstyled text-muted small checklist-dark">
                    <li><FontAwesomeIcon icon={faArrowRight} className="me-2 primary-color" /> Small Business Network Design</li>
                    <li><FontAwesomeIcon icon={faArrowRight} className="me-2 primary-color" /> Secure Branch Office Connectivity</li>
                    <li><FontAwesomeIcon icon={faArrowRight} className="me-2 primary-color" /> Cloud VPC and Subnet Configuration</li>
                    <li><FontAwesomeIcon icon={faArrowRight} className="me-2 primary-color" /> Wireless Network Deployment for a Campus</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow-sm border-0 rounded-3 card-dark-theme">
                <div className="card-body p-4 text-center">
                  <FontAwesomeIcon icon={faCode} size="3x" className="mb-3 primary-color" />
                  <h5 className="card-title fw-bold mb-3">Configuration Tasks</h5>
                  <p className="card-text text-muted">
                    Engage in practical configuration and management tasks:
                  </p>
                  <ul className="list-unstyled text-muted small checklist-dark">
                    <li><FontAwesomeIcon icon={faArrowRight} className="me-2 primary-color" /> Router and Switch CLI Configuration</li>
                    <li><FontAwesomeIcon icon={faArrowRight} className="me-2 primary-color" /> Firewall Rule Implementation</li>
                    <li><FontAwesomeIcon icon={faArrowRight} className="me-2 primary-color" /> VPN Tunnel Setup and Testing</li>
                    <li><FontAwesomeIcon icon={faArrowRight} className="me-2 primary-color" /> Network Monitoring Tool Setup and Alerting</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow-sm border-0 rounded-3 card-dark-theme">
                <div className="card-body p-4 text-center">
                  <FontAwesomeIcon icon={faMagnifyingGlass} size="3x" className="mb-3 primary-color" />
                  <h5 className="card-title fw-bold mb-3">Troubleshooting Scenarios</h5>
                  <p className="card-text text-muted">
                    Reinforce learning with challenging troubleshooting exercises:
                  </p>
                  <ul className="list-unstyled text-muted small checklist-dark">
                    <li><FontAwesomeIcon icon={faArrowRight} className="me-2 primary-color" /> IP Connectivity Issues Resolution</li>
                    <li><FontAwesomeIcon icon={faArrowRight} className="me-2 primary-color" /> VLAN Configuration Debugging</li>
                    <li><FontAwesomeIcon icon={faArrowRight} className="me-2 primary-color" /> Performance Bottleneck Identification</li>
                    <li><FontAwesomeIcon icon={faArrowRight} className="me-2 primary-color" /> Security Breach Simulation and Response</li>
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
          <h2 className="fw-bold mb-4 text-dark-theme">Ready to Master Networking?</h2>
          <p className="lead text-muted mb-4">Build the connections that power the digital world.</p>
          <a href="/contact" className="btn btn-lg btn-primary-theme rounded-pill">
            Get Started Today <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Networking;