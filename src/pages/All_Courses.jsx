import React from 'react';
import '../styles/All_Courses.css';

function AllCourses() {
  const courses = [
    {
      title: 'Introduction to React',
      instructor: 'Jane Smith',
      description: 'Learn the fundamentals of React and build your first application.',
      link: '/course/react-intro',
    },
    {
      title: 'Advanced JavaScript',
      instructor: 'David Johnson',
      description: 'Master advanced JavaScript concepts like closures, prototypes, and async/await.',
      link: '/course/js-advanced',
    },
    {
      title: 'Web Development Best Practices',
      instructor: 'Emily Brown',
      description: 'Discover the best practices for building modern web applications.',
      link: '/course/web-dev-best',
    },
        {
      title: 'Data Structures and Algorithms',
      instructor: 'Michael Lee',
      description: 'Learn common data structures and algorithms, and how to apply them.',
      link: '/course/data-structures',
    },
        {
      title: 'Full Stack Development with Django',
      instructor: 'Sarah Williams',
      description: 'Build a full stack web application using Django and React.',
      link: '/course/django-fullstack',
    },
        {
      title: 'Mobile App Development with React Native',
      instructor: 'Chris Miller',
      description: 'Get started with mobile app development using React Native.',
      link: '/course/react-native',
    },
  ];

  return (
    <div className="all-courses-container">
      <h1 className="all-courses-heading">All Courses</h1>
      <p className="all-courses-description">
        Explore our comprehensive selection of courses designed to help you achieve your learning goals.
      </p>
      <div className="course-grid">
        {courses.map((course, index) => (
          <div key={index} className="course-card">
            <h2 className="course-title">{course.title}</h2>
            <p className="course-instructor">Instructor: {course.instructor}</p>
            <p className="course-description">{course.description}</p>
            <a href={course.link} className="course-link">
              Learn More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllCourses;
