import React from 'react';
import { Container, Row, Col, Card, Button, ListGroup, Badge } from 'react-bootstrap';
import '../styles/Services.css'; // Ensure this path is correct

function Services() {
    return (
        <div className="services-page-container fade-up">

            {/* Scholarship Opportunities Section */}
            <Container className="py-5">
                <section className="mb-5 mt-0">
                    <h1 className="text-center mb-5 section-title-orange">
                        Scholarship Opportunities
                    </h1>
                    <p className="lead text-center mb-4 text-secondary-darker">
                        We believe in fostering academic excellence and ensuring financial barriers don't hinder your educational journey.
                        Explore various scholarship programs designed to support deserving students.
                    </p>
                    <Row className="justify-content-center">
                        <Col md={8}>
                            <Card className="h-100 scholarship-card">
                                <Card.Body>
                                    <h5 className="card-title text-center mb-3 text-orange card-heading">
                                        Access Our Scholarship Portal
                                    </h5>
                                    <p className="card-text text-center text-secondary-darker">
                                        Find detailed information on eligibility criteria, application procedures, deadlines, and available scholarship programs.
                                        This portal is your comprehensive guide to securing financial aid for your studies.
                                    </p>
                                    <div className="text-center mt-4">
                                        <Button
                                            href="/scholarship-details"
                                            className="btn-orange-fill btn-lg"
                                        >
                                            Explore Scholarships
                                        </Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </section>
            </Container>

            {/* Certification & Support Section */}
            <section className="py-5 bg-light-gray">
                <Container>
                    <h2 className="mb-4 text-dark section-title-black">Beyond the Course: Your Growth & Support</h2>
                    <p className="lead text-start text-secondary-darker">
                        We are committed to providing you with a holistic learning experience that extends beyond the classroom.
                        From official certifications to personalized guidance and helpful resources, we support your success every step of the way.
                    </p>
                    <ListGroup className="list-group-flush mb-4">
                        <ListGroup.Item className="d-flex justify-content-between align-items-center list-item-custom">
                            Official Course Completion Certificates
                            <Badge bg="orange" className="badge-orange">Awarded</Badge>
                        </ListGroup.Item>
                        <ListGroup.Item className="d-flex justify-content-between align-items-center list-item-custom">
                            Personalized Guidance and Mentorship
                        </ListGroup.Item>
                        <ListGroup.Item className="d-flex justify-content-between align-items-center list-item-custom">
                            Comprehensive Course Notes and Supplementary Materials
                            <Badge bg="orange" className="badge-orange">Provided</Badge>
                        </ListGroup.Item>
                        <ListGroup.Item className="d-flex justify-content-between align-items-center list-item-custom">
                            Welcome Kit (Bag, Cap, and more!)
                        </ListGroup.Item>
                    </ListGroup>
                </Container>
            </section>

            {/* Cafeteria Services Section */}
            <Container className="py-5">
                <section className="mb-5 p-4 border rounded shadow-sm bg-light-section">
                    <h2 className="mb-4 text-orange section-title-black">Cafeteria Services</h2>
                    <p className="lead text-secondary-darker">
                        Enjoy nutritious and delicious meals at our modern food facilities. We prioritize hygiene, variety, and high-quality food to ensure
                        a dining experience for everyone.
                    </p>
                    <Row>
                        <Col md={6} className="mb-3">
                            <Card className="h-100 service-card">
                                <Card.Body>
                                    <h5 className="card-title text-dark card-heading">Snacks & Beverages</h5>
                                    <p className="card-text text-start text-secondary-darker">
                                        Grab a quick bite with our selection of tea, coffee, milk, Boost, and various snacks like biscuits and more. Perfect for a refreshing break.
                                    </p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} className="mb-3">
                            <Card className="h-100 service-card">
                                <Card.Body>
                                    <h5 className="card-title text-dark card-heading">Full Meals</h5>
                                    <p className="card-text text-start text-secondary-darker">
                                        Savor our extensive menu for breakfast and lunch, featuring a variety of wholesome dishes, including fresh vegetables.
                                    </p>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <div className="mt-3">
                        <p className="text-secondary-darker">
                            We maintain the highest standards of quality and hygiene in food preparation and service. Our kitchen adheres to strict safety protocols.
                        </p>
                    </div>
                    <p className="mt-3 text-secondary-darker">
                        Our food facility operates on a daily basis.
                    </p>
                </section>
            </Container>

            {/* Fees Structure Section */}
            <section className="py-5 bg-light-gray">
                <Container>
                    <h2 className="mb-4 text-dark section-title-black">Fees Structure</h2>
                    <p className="lead text-start text-secondary-darker">
                        We offer a flexible payment structure designed to ease your financial planning.
                        Our fees are structured to provide convenience and transparency.
                    </p>
                    <Row className="justify-content-center">
                        <Col md={8}>
                            <Card className="h-100 fees-card">
                                <Card.Body>
                                    <h5 className="card-title text-center mb-3 text-orange card-heading">
                                        Flexible Payment Plan
                                    </h5>
                                    <p className="card-text text-center text-secondary-darker">
                                        Our standard payment plan is divided into two convenient installments:
                                    </p>
                                    <ListGroup className="list-group-flush mb-3 text-center">
                                        <ListGroup.Item className="list-item-fee">
                                            <strong>30%</strong> of the total fees due at the time of admission.
                                        </ListGroup.Item>
                                        <ListGroup.Item className="list-item-fee">
                                            The remaining balance will be due at a later, specified date.
                                        </ListGroup.Item>
                                    </ListGroup>
                                    <p className="card-text text-center text-secondary-darker">
                                        For detailed information on payment deadlines and other options, please contact our admissions office.
                                    </p>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Mind Refreshment Games Section */}
            <Container className="py-5">
                <section className="mb-0 p-4 bg-light-section">
                    <h2 className="mb-4 text-dark section-title-black">Mind Refreshment Games</h2>
                    <p className="lead text-start text-secondary-darker">
                        Take a break from your studies and engage in fun and stimulating mind games. These activities are designed to
                        improve focus, critical thinking, and provide a much-needed mental recharge.
                    </p>
                    <Row>
                        <Col md={6} className="mb-2">
                            <Card className="h-100 game-card">
                                <Card.Body className="text-center">
                                    <h5 className="card-title text-orange card-heading">Friday Fun</h5>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} className="mb-2">
                            <Card className="h-100 game-card">
                                <Card.Body className="text-center">
                                    <h5 className="card-title text-orange card-heading">Games</h5>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} className="mb-1">
                            <Card className="h-100 game-card">
                                <Card.Body className="text-center">
                                    <h5 className="card-title text-orange card-heading">Brain Teasers</h5>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} className="mb-1">
                            <Card className="h-100 game-card">
                                <Card.Body className="text-center">
                                    <h5 className="card-title text-orange card-heading">Festival Celebration</h5>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <p className="mt-3 text-center text-muted text-secondary-lighter">
                        Remember to take regular breaks for optimal productivity!
                    </p>
                </section>
            </Container>

        </div>
    );
}

export default Services;