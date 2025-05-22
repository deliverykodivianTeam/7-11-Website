import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/All_Courses.css';
import courses_card from "../assets/courses_card.jpg";

function All_Courses() {
const courses = [
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


  return (
    <div className="all-courses-page py-5 fade-up">
      <div className="container">
        <div className="row align-items-center mt-0 mb-5"> {/* Added mt-5 for top margin */}
          <div className="col-md-6">
            <h1 className="all-courses-heading display-4 fw-bold text-orange mb-3" style={{
              color: '#cc5500',
              fontSize: '3.5rem', /* Increased height of letter */
              fontWeight: 'bold'
            }} >Courses Detail </h1>
            {/* Added text-start for left alignment */}
            <p className="all-courses-description lead text-black text-start">
             Our course section is designed to offer you an immersive and flexible learning experience tailored to your pace and goals. With expert-led content, practical assignments, and real-world case studies, you'll gain the confidence and skills needed to thrive in your chosen field. Whether you're just starting out or looking to sharpen your expertise, our courses provide clear, structured guidance that’s easy to follow and apply. Each module is thoughtfully organized to take you from foundational knowledge to advanced techniques, with interactive videos, quizzes, and downloadable resources along the way. </p>
          </div>
          <div className="col-md-6">
            <img
              src={courses_card}
              alt="Courses Hero"
              className="img-fluid rounded shadow-sm"
            />
          </div>
        </div>


        <div className="mb-4">
          <h2 className="all-courses-heading text-black">Listed Courses</h2>
          <div className="orange-line"></div>
        </div>
        <div className="course-grid">
          {courses.map((course, index) => (
            <div key={index} className="course-card">
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