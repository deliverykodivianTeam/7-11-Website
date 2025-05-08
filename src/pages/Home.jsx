import React from 'react';
import '../styles/Home.css';

function Home() {
  const featuredCourses = [
    {
      title: 'Featured Course 1',
      instructor: 'Instructor A',
    },
    {
      title: 'Featured Course 2',
      instructor: 'Instructor B',
    },
    {
      title: 'Featured Course 3',
      instructor: 'Instructor C',
    },
  ];

  return (
    <div className="home-container">
      <h1 className="home-heading">Welcome to Our Learning Platform</h1>
      <p className="home-text">
        Discover a wide range of courses to help you expand your knowledge and skills.
      </p>
      <div className="featured-courses">
        <h2 className="featured-courses-heading">Featured Courses</h2>
        <div className="course-grid">
          {featuredCourses.map((course, index) => (
            <div key={index} className="course-card">
              <h3 className="course-title">{course.title}</h3>
              <p className="course-instructor">Instructor: {course.instructor}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
