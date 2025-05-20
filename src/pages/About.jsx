import React from 'react';
import intro_card from "../assets/intro_card.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/About.css'; // Keep your custom styles for overrides if needed
import mission from "../assets/mission.png"; // Assuming you have this image
import layersIcon from "../assets/layers.png"; // Import the layers icon

function About() {
  return (
    <div className="container py-5">
      <div className="row align-items-center mb-5">
        <div className="col-md-6">
          <h1 className="display-4 fw-bold text-warning mb-3">7 Eleven Academy</h1>
          <p className="lead text-secondary">
            Welcome to Seven Eleven Training Academy! We believe that true mastery
            takes dedication, persistence, and the right environment to thrive.
            That's why we offer a unique training experience that extends across
            the week—7 days a week, 11 hours a day—designed to equip you with
            unparalleled skills and expertise.
          </p>
        </div>
        <div className="col-md-6">
          <img
            src={intro_card}
            alt="Construction Animation"
            className="img-fluid rounded shadow-sm"
          />
        </div>
      </div>
      <div className="">
        <div className="card-body p-4 text-center"> {/* Added text-center */}
          <img
            src={layersIcon}
            alt="Layers Icon"
            className="img-fluid mb-2" // Added mb-2 for spacing
            style={{ maxWidth: '50px', height: 'auto' }} // Adjust size as needed
          />
          <h2 className="h4 fw-bold text-info mb-3">Why 7 Days, 11 Hours?</h2>
          <p className="text-secondary">
            The world doesn't slow down, and neither should your growth. By
            offering training 7 days a week, we ensure that you have the
            flexibility to learn, practice, and evolve every single day. And with
            11 hours in a day, you get ample time to engage in immersive,
            hands-on learning experiences, collaborate with peers, and receive
            personalized guidance from seasoned instructors.
          </p>
        </div>
      </div>

      <div className="card bg-light border-0 shadow-sm rounded-4 mb-5">
        <div className="card-body p-4">
          <h2 className="h4 fw-bold text-success mb-3">Our Approach</h2>
          <ul className="list-unstyled">
            <li className="mb-3">
              <h3 className="h6 fw-bold text-secondary mb-2">Holistic Learning</h3>
              <p className="text-secondary">
                We blend theory and practical application to ensure that every
                hour spent with us contributes directly to your development. With
                interactive workshops, real-world simulations, and expert-led
                sessions, you’ll be ready to tackle challenges head-on.
              </p>
            </li>
            <li className="mb-3">
              <h3 className="h6 fw-bold text-secondary mb-2">Non-stop Support</h3>
              <p className="text-secondary">
                Our trainers are available throughout the week, providing you with
                ongoing feedback and guidance. Whether it's early in the morning
                or late in the evening, help is just a message away.
              </p>
            </li>
            <li className="mb-3">
              <h3 className="h6 fw-bold text-secondary mb-2">Flexible Schedules</h3>
              <p className="text-secondary">
                Life is unpredictable, so we give you the flexibility to choose
                your ideal training times. Whether you’re an early bird or a night
                owl, there’s a time slot just for you.
              </p>
            </li>
            <li>
              <h3 className="h6 fw-bold text-secondary mb-2">Innovative Environment</h3>
              <p className="text-secondary">
                At Seven Eleven, we don’t just teach—we inspire. Our
                state-of-the-art facilities, collaborative community, and
                forward-thinking methodology ensure that you leave not just with
                knowledge but with the confidence to excel in your field.
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className="row align-items-center mb-5">
        <div className="col-md-6">
          <h2 className="h4 fw-bold text-primary mb-3">Our Mission</h2>
          <p className="text-secondary">
            The mission of Seven Eleven Training Academy is to empower individuals
            with the skills and knowledge necessary for personal and professional
            development. The academy focuses on delivering high-quality training
            programs aimed at enhancing capabilities in various fields, fostering
            lifelong learning, and creating opportunities for career advancement.
          </p>
          <h2 className="h4 fw-bold text-info mb-3">Our Vision</h2>
          <p className="text-secondary">
            The vision of Seven Eleven Training Academy is to be a leading
            educational institution that shapes the future of learners by providing
            innovative and practical training. The academy envisions becoming a
            globally recognized platform for excellence in skill development,
            enabling individuals to achieve their full potential and contribute
            meaningfully to society.
          </p>
        </div>
        <div className="col-md-6">
          <img
            src={mission}
            alt="Mission Image"
            className="img-fluid"
          />
        </div>
      </div>

      <div className="card bg-light border-0 shadow-sm rounded-4 mb-5">
        <div className="card-body p-4">
          <h2 className="h4 fw-bold text-success mb-3">Our Services</h2>
          <div className="mb-4">
            <h3 className="h5 fw-bold text-secondary mb-2">IT Training</h3>
            <p className="text-secondary">
              Our comprehensive IT training programs designed to equip individuals
              and teams with the skills needed to thrive in today’s fast-paced
              digital environment. Each course is led by industry-certified
              instructors and includes hands-on labs, real-world projects, and
              certification exam preparation. Whether you're a beginner looking
              to enter the IT field or a professional seeking to upskill or get
              certified, Training Academy provides tailored learning paths to meet
              your career goals.
            </p>
          </div>
          <div className="mb-4">
            <h3 className="h5 fw-bold text-secondary mb-2">Certification Training</h3>
            <p className="text-secondary">
              Seven Eleven offers a range of industry-recognized certification
              training programs designed to enhance professional skills, support
              career advancement, and meet current market demands. Each
              certification training program is structured to combine theoretical
              knowledge with hands-on practical experience. Delivered by certified
              instructors, the programs often include live sessions, self-paced
              modules, real-world projects, and mock exams to prepare learners
              for official certification exams.
            </p>
          </div>
          <div className="mb-4">
            <h3 className="h5 fw-bold text-secondary mb-2">Non IT to IT Training</h3>
            <p className="text-secondary">
              Whether you’re looking to switch careers, start fresh in IT, or
              enhance your digital literacy, Seven Eleven Academy specialize in
              transforming non-IT professionals into skilled IT industry
              contributors through our comprehensive "Non-IT to IT Training"
              program. Designed for individuals from various academic and
              professional backgrounds—such as commerce, arts, mechanical, civil,
              or even fresh graduates; this program bridges the gap between
              non-technical experience and the rapidly evolving tech sector. This
              initiative ensures that students are not only academically
              proficient but also industry-ready, aligning their education with
              practical business needs.
            </p>
          </div>
          <div className="mb-4">
            <h3 className="h5 fw-bold text-secondary mb-2">Internship</h3>
            <p className="text-secondary">
              Excel yourself on an awesome internship training experience that
              will help you overcome hurdles and achieve success. By following
              the advice of the industry experts, you may seize this chance to
              break new ground, develop our talent, and shine with success in
              your chosen company.
            </p>
          </div>
          <div>
            <h3 className="h5 fw-bold text-secondary mb-2">Project Support</h3>
            <p className="text-secondary">
              Seven Eleven Academy, operating under the umbrella of the SS Group
              of Companies, is dedicated to providing comprehensive support to its
              students, particularly in the realm of project-based learning.The
              institution emphasizes a holistic educational approach, integrating
              academic excellence with practical experiences to prepare students
              for real-world challenges. This inclusive approach ensures that
              students are well-equipped to tackle complex problems and excel in
              their future academic and professional endeavors.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;