// About.js
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import intro_card from "../assets/intro_card.jpg"; // Ensure this path is correct
import {
    faBrain,
    faHeadset,
    faCalendarAlt,
    faLightbulb,
    faBullseye,
    faEye,
    faChalkboardTeacher,
    faUsersCog,
    faAward,
    faHandshake
} from '@fortawesome/free-solid-svg-icons';
import '../styles/About.css'; // Ensure this path is correct

function About() {
    return (
        <div className="about-page-container py-0 fade-up">
            {/* Introduction Section */}
            <Container className="py-5 ">
                <h1 className="mt-0 text-xl mb-5 text-'#cc5500' robot-text display-4 text-center" 
                style={{
              color: '#cc5500',
              fontSize: '3.5rem', /* Increased height of letter */
              fontWeight: 'bold'
            }}
              >Seven Eleven Training Academy</h1>

                <Row className="mb-5 align-items-center bg-white p-4 ">
                    <Col>
                        <img
                            src={intro_card}
                            alt="Dedication and Mastery in Training"
                            className="img-fluid rounded shadow-lg border border-warning border-3 float-right-wrap mb-3 ms-4"
                            style={{ maxWidth: '600px' }} // Changed from 400px to 600px
                        />
                        <p className="lead text-black text-start mb-4 text-justify ">
                            At <span className="text-orange fw-bold">Seven Eleven Training Academy</span>, we're driven by a singular belief: true mastery
                            is forged through unwavering dedication, persistent effort, and cultivating an environment where potential
                            can truly flourish. This conviction is the bedrock of our unique training philosophy, which extends across the entire week—<span className="text-orange fw-bold">7 days a week, 11 hours a day</span>. Our meticulously crafted programs are designed not just to
                            impart knowledge, but to equip you with unparalleled, industry-relevant skills and profound expertise.
                        </p>
                        <p className="text-black larger-text text-start text-justify">
                            We fully recognize that the journey to success is continuous and demanding; hence, our commitment to your growth
                            is equally relentless. Every aspect of our curriculum is thoughtfully tailored for individuals poised to significantly
                            advance their capabilities. Whether your ambition lies in the dynamic realms of technology, the strategic landscapes
                            of business, the disciplined world of fitness, or the creative expressions of the arts, Seven Eleven Training Academy
                            stands as your steadfast partner. We're committed to delivering rigorous, dynamic, and exceptionally supportive
                            training experiences that seamlessly integrate with your demanding schedule, empowering you to not just keep pace,
                            but to consistently stay ahead of the curve.
                        </p>
                        <div className="clearfix"></div>
                    </Col>
                </Row>
            </Container>

            {/* Why 7 Days, 11 Hours? Section */}
            <div className="why-7-11-section py-5 text-center text-white shadow-lg">
                <Container>
                    <h2 className="mb-4 text-orange robot-text display-5">The Seven Eleven Advantage: Uninterrupted Growth</h2>
                    <p className="lead text-start larger-text mb-4 text-justify">
                        The modern world operates at a relentless pace, and your personal and professional growth should never be
                        constrained by traditional schedules. Our unique <span className="fw-bold">7-days-a-week training model</span>
                        is meticulously designed to provide you with unparalleled flexibility and continuous access to learning.
                        This ensures you have the freedom to engage, practice, and evolve every single day, without compromise.
                    </p>
                    <p className="larger-text text-start mb-0 text-justify">
                        Furthermore, our <span className="fw-bold">11-hours-a-day immersive sessions</span> offer far more than just extended
                        study time. They provide ample opportunity for deep dives into complex subjects, extensive hands-on practical
                        application, and invaluable real-world simulations. You'll have dedicated time to collaborate organically
                        with a diverse peer group, engage in robust problem-solving discussions, and receive highly personalized,
                        constructive guidance directly from our seasoned instructors. This extended, intensive, and supportive
                        learning environment is engineered to accelerate your skill acquisition, solidify your understanding,
                        and fast-track your journey to true expertise. We believe that consistent, dedicated exposure is key to mastery, and our 7/11 model is the ultimate
                        framework for achieving just that.
                    </p>
                </Container>
            </div>

            {/* Our Transformative Approach to Learning Section */}
            <Container className="py-5">
                <h2 className="text-orange mb-5 text-center robot-text display-5">Our Transformative Approach to Learning</h2>
                <Row className="mb-5 justify-content-center">
                    <Col md={6} lg={4} className="mb-4">
                        <Card className="h-100 shadow-lg border-0 text-center approach-card p-3">
                            <Card.Body>
                                <div className="icon-wrapper mb-3">
                                    <FontAwesomeIcon icon={faBrain} size="4x" className="text-orange animate-icon" />
                                </div>
                                <Card.Title className="text-black fw-bold robot-text mb-3">Holistic Learning Ecosystem</Card.Title>
                                <Card.Text className="text-start text-black larger-text text-justify">
                                    Our curriculum is a seamless fusion of foundational theory and dynamic practical application. We ensure that every moment
                                    spent with us directly fuels your comprehensive development. Through highly interactive workshops, cutting-edge
                                    real-world simulations, and meticulously curated expert-led sessions, you will not only gain knowledge but also
                                    develop the robust critical thinking and problem-solving skills necessary to confidently tackle any challenge head-on.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} lg={4} className="mb-4">
                        <Card className="h-100 shadow-lg border-0 text-center approach-card p-3">
                            <Card.Body>
                                <div className="icon-wrapper mb-3">
                                    <FontAwesomeIcon icon={faHeadset} size="4x" className="text-orange animate-icon" />
                                </div>
                                <Card.Title className="text-black fw-bold robot-text mb-3">Unwavering, Non-stop Support</Card.Title>
                                <Card.Text className="text-start text-black larger-text text-justify">
                                    Our dedicated team of world-class trainers is available to you throughout the entire week, ensuring continuous
                                    and personalized support. We provide timely, constructive feedback, immediate clarification on complex topics,
                                    and strategic guidance to keep you on track. Whether you prefer early morning sessions or late evening inquiries,
                                    expert help and mentorship are always just a message or click away, ensuring you never feel stuck.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} lg={4} className="mb-4">
                        <Card className="h-100 shadow-lg border-0 text-center approach-card p-3">
                            <Card.Body>
                                <div className="icon-wrapper mb-3">
                                    <FontAwesomeIcon icon={faCalendarAlt} size="4x" className="text-orange animate-icon" />
                                </div>
                                <Card.Title className="text-black fw-bold robot-text mb-3">Empowering Flexible Schedules</Card.Title>
                                <Card.Text className="text-start text-black larger-text text-justify">
                                    We understand that life is dynamic and often unpredictable. That's why we empower you with unparalleled flexibility
                                    to seamlessly integrate your training into your existing commitments. Our diverse array of time slots allows you
                                    to choose the ideal learning periods that align perfectly with your personal rhythm. Whether you are an early bird
                                    who thrives in the dawn hours or a night owl who prefers the quiet of the evening, there is a perfectly suited
                                    time slot waiting just for you.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    
                </Row>
                </Container>

                {/* Our Instructors/Team */}
            <div className="why-7-11-section py-5 text-center text-white shadow-lg">
                <Container>
                    <h2 className="mb-4 text-orange robot-text display-5">Meet  our Expert Instructors </h2>
                    <p className="lead text-start larger-text mb-4 text-justify">
                        Our strength lies in the caliber of our educators. At Seven Eleven Training Academy, you learn from the best.
                            Our instructors are not just teachers; they are industry veterans, thought leaders, and passionate mentors
                            with extensive real-world experience. They bring a wealth of practical knowledge and current industry insights
                            directly into the classroom, ensuring that your learning is always relevant, practical, and cutting-edge
                    </p>
                    <p className="larger-text text-start mb-0 text-justify">
                        They are committed to fostering an engaging, supportive, and challenging learning environment, guiding you
                            through every step of your journey with personalized attention and expert guidance. Their dedication is
                            key to unlocking your full potential.
                    </p>
                </Container>
            </div>

                {/* Our Values */}
                <Row className="mb-5 p-5 bg-white">
      <Col className="text-center"> {/* This Col is already text-centered */}
        <h2 className="text-black mb-4 robot-text display-5">Our Core Values</h2>
        <p className="lead text-center larger-text mb-4 text-justify">
          At Seven Eleven Training Academy, our operations are guided by a set of fundamental values that define
          our commitment to our learners and the community:
        </p>
        {/* The list items within this ul should be centered due to parent's text-center */}
        <ul className="list-unstyled mb-2 text-black larger-text values-list d-inline-block"> {/* Added d-inline-block */}
          <li><FontAwesomeIcon icon={faAward} className="me-2 text-orange" /> Excellence: We strive for the highest standards in all our programs and services.</li>
          <li><FontAwesomeIcon icon={faHandshake} className="me-2 text-orange" /> Integrity: We operate with transparency, honesty, and ethical conduct.</li>
          <li><FontAwesomeIcon icon={faLightbulb} className="me-2 text-orange" /> Innovation: We continuously evolve our methods and curriculum to stay ahead.</li>
          <li><FontAwesomeIcon icon={faUsersCog} className="me-2 text-orange" /> Empowerment: We equip individuals with the tools and confidence to succeed.</li>
          <li><FontAwesomeIcon icon={faCalendarAlt} className="me-2 text-orange" /> Accessibility: We make high-quality education attainable for diverse schedules.</li>
        </ul>
      </Col>
    </Row>



                {/* Mission and Vision */}
                   <Container>
      <Row className="mb-5">
        <Col md={6} className="mb-4">
          <Card className="h-100 bg-gradient-dark text-white mission-vision-card p-4">
            <Card.Body className="d-flex flex-column justify-content-center align-items-center text-center">
              <FontAwesomeIcon icon={faBullseye} size="4x" className="mb-3 text-orange animate-icon" />
              <Card.Title className="text-orange fw-bold robot-text display-6">OUR MISSION</Card.Title>
              <Card.Text className="larger-text text-start text-justify">
                The overarching mission of <span className="fw-bold">Seven Eleven Training Academy</span> is to empower individuals with the skills and knowledge necessary for personal and professional development. The academy focuses on delivering high-quality training programs aimed at enhancing capabilities in various fields, fostering lifelong learning, and creating opportunities for career advancement.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-4">
          <Card className="h-100 shadow-lg border-0 bg-gradient-dark text-white mission-vision-card p-4">
            <Card.Body className="d-flex flex-column justify-content-center align-items-center text-center">
              <FontAwesomeIcon icon={faEye} size="4x" className="mb-3 text-orange animate-icon" />
              <Card.Title className="text-orange fw-bold robot-text display-6">OUR VISION</Card.Title>
              <Card.Text className="larger-text text-start text-justify">
                The visionary aim of <span className="fw-bold">Seven Eleven Training Academy</span> is to be a leading educational institution that shapes the future of learners by providing innovative and practical training. The academy envisions becoming a globally recognized platform for excellence in skill development, enabling individuals to achieve their full potential and contribute meaningfully to society.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
                <hr className="my-5 border-orange" />

                {/* Call to Action */}
                   <footer className="py-0 bg-dark text-light text-center">

                <Row className="mt-5 text-center p-5 bg-orange text-white rounded shadow-lg call-to-action-section">
                    <Col>
                        <h2 className="mb-3 robot-text display-5">Your Future Starts Now.</h2>
                        <p className="lead larger-text mb-4 text-justify">
                            Are you ready to transcend your current capabilities and truly elevate your skills to an unprecedented level?
                            Join the distinguished community at **Seven Eleven Training Academy**. Here, innovation meets dedication,
                            and your ambition finds its ultimate pathway to success. Unlock your full potential with our unparalleled,
                            intensive training programs designed to empower you for tomorrow's challenges.
                        </p>
                        <Button
                            href="/contact"
                            variant="light"
                            size="lg"
                            className="custom-btn-light-outline-orange shadow-lg"
                        >
                            Begin Your Transformation Today!
                        </Button>
                    </Col>
                </Row>
            
              </footer>

        </div>
    );
}

export default About;