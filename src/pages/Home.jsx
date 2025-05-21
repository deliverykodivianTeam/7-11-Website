import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Home.css'; // Import your custom CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faBriefcase,
  faGraduationCap,
  faUsers,
  faFire,
  faLightbulb,
  faChalkboardTeacher,
  faChartLine,
  faPuzzlePiece,
  faComments,
  faCode,
  faBrain,
  faShieldAlt,
  faDatabase,
  faRocket,
  faCalendarAlt,
  faNewspaper,
  faArrowRight,
  faChevronLeft,
  faChevronRight,
  faUserGraduate,
  faBookOpen,
  faCalendarCheck,
  faNetworkWired, // Added for Networking
  faHandsHelping, // Added for Soft Skills
} from '@fortawesome/free-solid-svg-icons';

function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [whatsNewItems] = useState([
{
      title: 'New Advanced Cybersecurity Program',
      description:
        "We've launched an in-depth program covering the latest trends and techniques in cybersecurity. Enroll now to secure your future!",
      link: '/new-course/cybersecurity-advanced',
      date: 'October 26, 2023',
      color: 'info',
    },
    {
      title: 'AI and Machine Learning Workshop',
      description:
        'Join our upcoming workshop to get hands-on experience with the fundamentals of AI and machine learning. Limited seats available!',
      link: '/workshop/ai-ml',
      date: 'November 15, 2023',
      color: 'success',
    },
    {
      title: 'Cloud Computing Essentials Course',
      description:
        'Master the basics of cloud technologies and prepare for a future in cloud engineering.',
      link: '/course/cloud-computing',
      date: 'December 1, 2023',
      color: 'primary',
    },
    {
      title: 'Front-End Development Bootcamp',
      description:
        'Become a skilled front-end developer with our intensive bootcamp. Learn React, Angular, and Vue.js.',
      link: '/bootcamp/front-end',
      date: 'January 5, 2024',
      color: 'warning',
    },
    {
      title: 'Backend Development with Node.js',
      description: 'Learn to build robust server-side applications using Node.js and Express.',
      link: '/course/backend-nodejs',
      date: 'February 10, 2024',
      color: 'danger',
    },
    {
      title: 'Mobile App Development with React Native',
      description: 'Create cross-platform mobile apps with JavaScript and React Native framework.',
      link: '/course/mobile-react-native',
      date: 'March 1, 2024',
      color: 'secondary',
    },
    // New items added below, reflecting the updated product offerings and dates
    {
      title: 'New Artificial Intelligence Course Launched!',
      description: 'Explore the foundations and advanced concepts of AI, machine learning, and deep learning.',
      link: '/course/artificial-intelligence',
      date: 'May 10, 2025',
      color: 'primary',
    },
    {
      title: 'Data Science Program Enhanced!',
      description: 'Dive deeper into data analysis, statistical modeling, and big data technologies.',
      link: '/course/data-science',
      date: 'April 25, 2025',
      color: 'success',
    },
    {
      title: 'Networking & Cyber Security Masterclass',
      description: 'Secure your future with our comprehensive program on network security and ethical hacking.',
      link: '/course/networking-cybersecurity',
      date: 'March 15, 2025',
      color: 'info',
    },
    {
      title: 'New Software Development Tracks Available!',
      description: 'Specialized paths in web, mobile, and enterprise software development.',
      link: '/course/software-development',
      date: 'February 20, 2025',
      color: 'warning',
    },
    {
      title: 'Soft Skills Training for Career Success',
      description: 'Develop essential communication, leadership, and problem-solving skills for the modern workplace.',
      link: '/course/soft-skills',
      date: 'January 5, 2025',
      color: 'secondary',
    },
  ]);


  const [slideIndex, setSlideIndex] = useState(0);
  const containerRef = useRef(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const itemsToShowOnTouch = 1; // Changed to 1 for better mobile display
  const itemsPerSlideDesktop = 2;

  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0);
  }, []);

  const itemsPerDisplay = isTouchDevice ? itemsToShowOnTouch : itemsPerSlideDesktop;

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
    console.log('Search query:', event.target.value);
  };

  const goToPreviousSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex === 0 ? whatsNewItems.length - 1 : prevIndex - 1));
  };

  const goToNextSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex === whatsNewItems.length - 1 ? 0 : prevIndex + 1));
  };

  const getVisibleItems = () => {
    const items = [];
    for (let i = 0; i < itemsPerDisplay; i++) {
      items.push(whatsNewItems[(slideIndex + i) % whatsNewItems.length]);
    }
    return items;
  };

  const visibleItems = getVisibleItems();

  return (
    <div className='fade-up'>
      {/* Hero Section */}
      <div className="bg-light p-5 text-center mb-0 hero-section fade-up">
        <h1 className="display-4 mt-5 fw-bold hero-title">
          Welcome to Seven Eleven Training Academy!
        </h1>
        <p className="lead hero-lead">
          Where Excellence is crafted in 7 Days a Week, 11 Hours a Day!
        </p>
        <p className="lead mt-4 text-start hero-lead">
          At Seven Eleven Academy, we strive to provide world-class education that empowers students to reach their full
          potential. Whether you're looking to enhance your skills or start your academic journey, we offer
          comprehensive programs tailored to meet your goals.
        </p>
        <p className="lead mt-4 text-start hero-lead">
          From fundamental concepts to advanced techniques, our expert trainers ensure that you have the necessary
          tools for your professional endeavors. Our exceptional training is not the only factor that distinguishes
          us as the best IT training institute in Chennai; we also provide unwavering support for your professional
          development. We offer placement assistance to aid you in securing opportunities at top-tier companies,
          thereby bridging the gap between education and employment.
        </p>
      </div>
      {/* Featured Courses Section */}
      <div className="py-5 bg-white">
        <div className="container">
          <h2 className="fw-bold text-center mb-4">Explore Our Leading Programs</h2>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
            <div className="col">
              <div className="card h-100 border-3 shadow-sm rounded-3">
                <div className="card-body text-center p-4">
                  <FontAwesomeIcon icon={faBrain} size="3x" className="text-primary mb-3" />
                  <h5 className="card-title fw-bold">Artificial Intelligence</h5>
                  <p className="card-text small text-muted">Master the technologies in future.</p>
                  <a href="/courses" className="btn btn-outline-primary btn-sm rounded-pill">Learn More</a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 border-3 shadow-sm rounded-3">
                <div className="card-body text-center p-4">
                  <FontAwesomeIcon icon={faDatabase} size="3x" className="text-primary mb-3" />
                  <h5 className="card-title fw-bold">Data Science</h5>
                  <p className="card-text small text-muted">Transform data into actionable insights.</p>
                  <a href="/courses" className="btn btn-outline-primary btn-sm rounded-pill">Learn More</a>
                </div>
              </div>
            </div>
            {/* NETWORKING & CYBER SECURITY */}
            <div className="col">
              <div className="card h-100 border-3 shadow-sm rounded-3">
                <div className="card-body text-center p-4">
                  <FontAwesomeIcon icon={faShieldAlt} size="3x" className="text-primary mb-3" />
                  <h5 className="card-title fw-bold">Networking & Cyber Security</h5>
                  <p className="card-text small text-muted">Safeguard digital assets and infrastructure.</p>
                  <a href="/courses" className="btn btn-outline-primary btn-sm rounded-pill">Learn More</a>
                </div>
              </div>
            </div>
            {/* SOFTWARE DEVELOPMENT */}
            <div className="col">
              <div className="card h-100 border-3 shadow-sm rounded-3">
                <div className="card-body text-center p-4">
                  <FontAwesomeIcon icon={faCode} size="3x" className="text-primary mb-3" />
                  <h5 className="card-title fw-bold">Software Development</h5>
                  <p className="card-text small text-muted">Build innovative solutions with code.</p>
                  <a href="/courses" className="btn btn-outline-primary btn-sm rounded-pill">Learn More</a>
                </div>
              </div>
            </div>
            {/* SOFT SKILLS TRAINING */}
            <div className="col">
              <div className="card h-100 border-3 shadow-sm rounded-3">
                <div className="card-body text-center p-4">
                  <FontAwesomeIcon icon={faHandsHelping} size="3x" className="text-primary mb-3" />
                  <h5 className="card-title fw-bold">Soft Skills Training</h5>
                  <p className="card-text small text-muted">Enhance communication and professional growth.</p>
                  <a href="/courses" className="btn btn-outline-primary btn-sm rounded-pill">Learn More</a>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-4">
            <a href="/courses" className="btn btn-outline-secondary rounded-pill">View All Courses</a>
            <div className="mt-4 d-flex justify-content-center flex-wrap">
              <div className="mx-3 my-2 d-flex align-items-center">
                <FontAwesomeIcon icon={faUserGraduate} className="text-primary me-2" size="lg" />
                <strong className="lead mb-0">1,500+ Students</strong>
              </div>
              <div className="mx-3 my-2 d-flex align-items-center">
                <FontAwesomeIcon icon={faBookOpen} className="text-primary me-2" size="lg" />
                <strong className="lead mb-0">4+ Courses</strong>
              </div>
              <div className="mx-3 my-2 d-flex align-items-center">
                <FontAwesomeIcon icon={faCalendarCheck} className="text-primary me-2" size="lg" />
                <strong className="lead mb-0">Established in 2020</strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What's New Section */}
      <div className="py-5 bg-light">
        <div className="container position-relative">
          <h2 className="fw-bold text-center mb-4">
            <FontAwesomeIcon icon={faNewspaper} className="text-primary me-2" /> What's New at Our Academy
          </h2>
          <div
            className="row row-cols-1 row-cols-md-2 g-4 justify-content-center"
            ref={containerRef}
            style={{ overflowX: 'hidden' }}
          >
            {visibleItems.map((item, index) => (
              <div
                key={index}
                className="col d-flex"
              >
                <div className="card border-0 shadow-sm rounded-3 h-100 w-100">
                  <div className="card-body p-4">
                    <h5 className="card-title fw-bold text-primary">{item.title}</h5>
                    <p className="card-text text-muted small text-start text-wrap">{item.description}</p>
                    <a href={item.link} className={`btn btn-sm ms-2 btn-primary rounded-pill`}>
                      Learn More <FontAwesomeIcon icon={faArrowRight} className="ms-3" />
                    </a>
                  </div>
                  <div className="card-footer bg-transparent border-top text-muted small">
                    <FontAwesomeIcon icon={faCalendarAlt} className="me-1" /> Launched {item.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Navigation Buttons */}
          {whatsNewItems.length > itemsPerDisplay && (
            <>
              <button
                className="btn btn-light shadow-sm position-absolute top-50 start-0 translate-middle-y rounded-circle d-flex align-items-center justify-content-center"
                onClick={goToPreviousSlide}
                style={{ zIndex: 1, width: '50px', height: '50px', left: '0px' }}
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              <button
                className="btn btn-light shadow-sm position-absolute top-50 end-0 translate-middle-y rounded-circle d-flex align-items-center justify-content-center"
                onClick={goToNextSlide}
                style={{ zIndex: 1, width: '50px', height: '50px', right: '0px' }}
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </>
          )}
        </div>
      </div>

      {/* Join Us Today Section */}
      <div className="py-4 bg-white text-center">
        <h2 className="fw-bold mb-3 text-dark">Join Us Today!</h2>
        <p className="lead text-muted mb-5">
          Embark on a transformative learning journey where every moment counts. With Seven
          Eleven Training Academy, you don’t just gain skills—you gain the tools to shape
          your future. Ready to take the next step? We’ll be here, training 7 days a
          week, 11 hours a day, ready to help you unlock your full potential.
          Your success doesn’t wait. Neither do we.
        </p>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-secondary py-5">
        <div className="container mb-3">
          <h2 className="text-black fw-bold mb-5 text-center">
            <FontAwesomeIcon icon={faLightbulb} className="text-warning me-2" />
            Why Choose Our Academy?
          </h2>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="d-flex align-items-start">
                <FontAwesomeIcon icon={faChalkboardTeacher} size="2x" className="text-warning me-3" />
                <div>
                  <h6 className="fw-bold mb-1 text-black">Expert Instruction</h6>
                  <p className="text-black small mb-0">Learn from industry leaders and experienced educators.</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="d-flex align-items-start">
                <FontAwesomeIcon icon={faFire} size="2x" className="text-warning me-3" />
                <div>
                  <h6 className="fw-bold mb-1 text-black">Cutting-Edge Curriculum</h6>
                  <p className="text-black small mb-0">Stay ahead with the latest technologies and trends.</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="d-flex align-items-start">
                <FontAwesomeIcon icon={faBriefcase} size="2x" className="text-warning me-3" />
                <div>
                  <h6 className="fw-bold mb-1 text-black">Career Advancement</h6>
                  <p className="text-black small mb-0">Gain skills that directly translate to job opportunities.</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="d-flex align-items-start">
                <FontAwesomeIcon icon={faUsers} size="2x" className="text-warning me-3" />
                <div>
                  <h6 className="fw-bold mb-1 text-black">Supportive Community</h6>
                  <p className="text-black text-start small mb-0">Connect with peers and instructors in a collaborative environment.</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="d-flex align-items-start">
                <FontAwesomeIcon icon={faChartLine} size="2x" className="text-warning me-3" />
                <div>
                  <h6 className="fw-bold mb-1 text-black">Measurable Results</h6>
                  <p className="text-black small mb-0">Track your progress and achieve your learning goals.</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="d-flex align-items-start">
                <FontAwesomeIcon icon={faComments} size="2x" className="text-warning me-3" />
                <div>
                  <h6 className="fw-bold mb-1 text-black">Interactive Learning</h6>
                  <p className="text-black small mb-0">Engage with dynamic content and hands-on projects.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-white py-5 text-center">
        <h2 className="fw-bold mb-4 text-dark">Ready to Take the Next Step?</h2>
        <p className="lead text-muted mb-4">Your journey to a successful IT career starts here.</p>
        <a href="/contact" className="btn btn-primary btn-lg rounded-pill">
          Take a Step Now <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
        </a>
      </div>

      
    </div>
  );
}

export default Home;