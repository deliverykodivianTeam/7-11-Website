// ArtificialIntelligence.jsx
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBrain,
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
} from '@fortawesome/free-solid-svg-icons';
import '../styles/ArtificialIntelligence.css'; // You'll need to create this CSS file for custom styles

function ArtificialIntelligence() {
  return (
    <div className="ai-page fade-in">
      {/* Hero Section - NOW WHITE Background, Orange Accents */}
<div className="ai-hero-alt py-5 text-dark d-flex align-items-center" style={{ minHeight: '100vh' }}>
  <div className="container">
    <div className="row justify-content-center align-items-center text-center">
      <div className="col-lg-10">
        {/* Main Heading */}
        <h1 className="h2 fw-bold mb-2 ai-text-dark">
          Artificial Intelligence Masterclass
        </h1>

        {/* Smaller Subheading */}
        <h3 className="h5 fw-normal mb-4 text-muted">
          Dive deep into the core concepts and advanced applications of AI.
        </h3>

        {/* Description */}
        <p className="lead mb-4">
          Unlock the power of intelligent systems and shape the future with our comprehensive Artificial Intelligence program.
        </p>

        {/* Buttons */}
        <a href="#syllabus" className="btn btn-lg ai-btn-primary rounded-pill me-3 mb-2">
          Explore Syllabus <FontAwesomeIcon icon={faRocket} className="ms-2" />
        </a>
        <a href="/register" className="btn btn-lg ai-btn-outline rounded-pill mb-2">
          Enroll Now <FontAwesomeIcon icon={faHandsHelping} className="ms-2" />
        </a>

        {/* Icon (Optional - centered below content) */}
        <div className="mt-4">
          <FontAwesomeIcon icon={faBrain} className="ai-hero-icon-alt" />
        </div>
      </div>
    </div>
  </div>
</div>


      {/* Rest of your component code remains the same */}

      {/* Course Overview Section - White Background */}
      <div className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center fw-bold mb-5 ai-text-dark">Course Overview</h2>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card h-100 shadow-sm border-0 rounded-3">
                <div className="card-body p-4">
                  <h5 className="card-title fw-bold mb-3 ai-primary-color">What You'll Learn</h5>
                  <ul className="list-unstyled ai-checklist">
                    <li><FontAwesomeIcon icon={faLightbulb} className="me-2 ai-primary-color" /> Foundations of AI and Machine Learning</li>
                    <li><FontAwesomeIcon icon={faLightbulb} className="me-2 ai-primary-color" /> Deep Learning Architectures (CNNs, RNNs, Transformers)</li>
                    <li><FontAwesomeIcon icon={faLightbulb} className="me-2 ai-primary-color" /> Natural Language Processing (NLP)</li>
                    <li><FontAwesomeIcon icon={faLightbulb} className="me-2 ai-primary-color" /> Computer Vision techniques</li>
                    <li><FontAwesomeIcon icon={faLightbulb} className="me-2 ai-primary-color" /> Reinforcement Learning concepts</li>
                    <li><FontAwesomeIcon icon={faLightbulb} className="me-2 ai-primary-color" /> Ethical considerations in AI</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card h-100 shadow-sm border-0 rounded-3">
                <div className="card-body p-4">
                  <h5 className="card-title fw-bold mb-3 ai-primary-color">Who Is This Course For?</h5>
                  <p className="card-text text-muted">
                    This course is ideal for:
                  </p>
                  <ul className="list-unstyled ai-checklist">
                    <li><FontAwesomeIcon icon={faUserGraduate} className="me-2 ai-primary-color" /> Students aspiring to enter the AI/ML field</li>
                    <li><FontAwesomeIcon icon={faBriefcase} className="me-2 ai-primary-color" /> Developers looking to integrate AI into their applications</li>
                    <li><FontAwesomeIcon icon={faChartLine} className="me-2 ai-primary-color" /> Data Scientists wanting to deepen their AI knowledge</li>
                    <li><FontAwesomeIcon icon={faPuzzlePiece} className="me-2 ai-primary-color" /> Professionals interested in the future of AI</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why This Is Important Section - Black Background */}
      <div className="py-5 ai-why-important text-white">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">Why Artificial Intelligence Matters</h2>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <p className="lead text-center mb-4">
                Artificial Intelligence is transforming every industry, from healthcare and finance to entertainment and manufacturing. Understanding AI is no longer a niche skill but a fundamental requirement for innovation and career growth in the digital age.
              </p>
              <ul className="list-unstyled text-center ai-benefits-list">
                <li>
                  <FontAwesomeIcon icon={faRocket} size="2x" className="mb-2 ai-primary-color" />
                  <h6 className="fw-bold">Career Advancement</h6>
                  <p className="small">High demand for AI professionals globally.</p>
                </li>
                <li>
                  <FontAwesomeIcon icon={faLightbulb} size="2x" className="mb-2 ai-primary-color" />
                  <h6 className="fw-bold">Innovation & Problem Solving</h6>
                  <p className="small">Develop solutions for complex real-world challenges.</p>
                </li>
                <li>
                  <FontAwesomeIcon icon={faCodeBranch} size="2x" className="mb-2 ai-primary-color" />
                  <h6 className="fw-bold">Future-Proof Your Skills</h6>
                  <p className="small">Stay relevant in a rapidly evolving technological landscape.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Syllabus Section - White Background */}
      <div id="syllabus" className="py-5 bg-white">
        <div className="container">
          <h2 className="text-center fw-bold mb-5 ai-text-dark">Detailed Syllabus</h2>
          <div className="accordion" id="aiSyllabusAccordion">
            {/* Module 1 */}
            <div className="accordion-item shadow-sm mb-3 rounded-3">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button fw-bold ai-accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >
                  <FontAwesomeIcon icon={faBookOpen} className="me-2 ai-primary-color" /> Module 1: Introduction to AI & Python for AI
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#aiSyllabusAccordion"
              >
                <div className="accordion-body text-muted">
                  <ul>
                    <li>What is AI? History and Applications</li>
                    <li>AI vs. Machine Learning vs. Deep Learning</li>
                    <li>Python Fundamentals for AI (NumPy, Pandas, Matplotlib)</li>
                    <li>Setting up your AI development environment</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Module 2 */}
            <div className="accordion-item shadow-sm mb-3 rounded-3">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button fw-bold ai-accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  <FontAwesomeIcon icon={faChalkboardTeacher} className="me-2 ai-primary-color" /> Module 2: Machine Learning Fundamentals
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#aiSyllabusAccordion"
              >
                <div className="accordion-body text-muted">
                  <ul>
                    <li>Supervised Learning (Regression, Classification)</li>
                    <li>Unsupervised Learning (Clustering, Dimensionality Reduction)</li>
                    <li>Model Evaluation and Hyperparameter Tuning</li>
                    <li>Ensemble Methods (Random Forests, Gradient Boosting)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Module 3 */}
            <div className="accordion-item shadow-sm mb-3 rounded-3">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button fw-bold ai-accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  <FontAwesomeIcon icon={faLightbulb} className="me-2 ai-primary-color" /> Module 3: Deep Learning and Neural Networks
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#aiSyllabusAccordion"
              >
                <div className="accordion-body text-muted">
                  <ul>
                    <li>Introduction to Neural Networks</li>
                    <li>Forward and Backward Propagation</li>
                    <li>Convolutional Neural Networks (CNNs) for Image Processing</li>
                    <li>Recurrent Neural Networks (RNNs) for Sequential Data</li>
                    <li>Introduction to Transformers</li>
                    <li>Frameworks: TensorFlow and Keras / PyTorch</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Module 4 */}
            <div className="accordion-item shadow-sm mb-3 rounded-3">
              <h2 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button fw-bold ai-accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  <FontAwesomeIcon icon={faComments} className="me-2 ai-primary-color" /> Module 4: Natural Language Processing (NLP)
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#aiSyllabusAccordion"
              >
                <div className="accordion-body text-muted">
                  <ul>
                    <li>Text Preprocessing and Tokenization</li>
                    <li>Word Embeddings (Word2Vec, GloVe)</li>
                    <li>Sentiment Analysis and Text Classification</li>
                    <li>Introduction to Large Language Models (LLMs)</li>
                    <li>Applications: Chatbots, Machine Translation</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Module 5 */}
            <div className="accordion-item shadow-sm mb-3 rounded-3">
              <h2 className="accordion-header" id="headingFive">
                <button
                  className="accordion-button fw-bold ai-accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  <FontAwesomeIcon icon={faLaptopCode} className="me-2 ai-primary-color" /> Module 5: Computer Vision
                </button>
              </h2>
              <div
                id="collapseFive"
                className="accordion-collapse collapse"
                aria-labelledby="headingFive"
                data-bs-parent="#aiSyllabusAccordion"
              >
                <div className="accordion-body text-muted">
                  <ul>
                    <li>Image Fundamentals and Preprocessing</li>
                    <li>Object Detection and Recognition</li>
                    <li>Image Segmentation</li>
                    <li>Generative Adversarial Networks (GANs)</li>
                    <li>Applications: Facial Recognition, Autonomous Driving</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Module 6 */}
            <div className="accordion-item shadow-sm mb-3 rounded-3">
              <h2 className="accordion-header" id="headingSix">
                <button
                  className="accordion-button fw-bold ai-accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSix"
                  aria-expanded="false"
                  aria-controls="collapseSix"
                >
                  <FontAwesomeIcon icon={faRocket} className="me-2 ai-primary-color" /> Module 6: Reinforcement Learning & Ethics in AI
                </button>
              </h2>
              <div
                id="collapseSix"
                className="accordion-collapse collapse"
                aria-labelledby="headingSix"
                data-bs-parent="#aiSyllabusAccordion"
              >
                <div className="accordion-body text-muted">
                  <ul>
                    <li>Introduction to Reinforcement Learning</li>
                    <li>Markov Decision Processes (MDPs)</li>
                    <li>Q-Learning and Deep Q-Networks (DQNs)</li>
                    <li>Ethical considerations, bias, and fairness in AI</li>
                    <li>Future trends and research in AI</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects, Tasks, and Exercises Section - Black Background */}
      <div className="py-5 ai-projects-section text-white">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">Hands-On Learning Experience</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 shadow-sm border-0 rounded-3 ai-card-black">
                <div className="card-body p-4 text-center">
                  <FontAwesomeIcon icon={faFlask} size="3x" className="mb-3 ai-primary-color" />
                  <h5 className="card-title fw-bold mb-3">Real-World Projects</h5>
                  <p className="card-text text-muted">
                    Apply your knowledge by building end-to-end AI applications. Projects include:
                  </p>
                  <ul className="list-unstyled text-muted small ai-checklist-dark">
                    <li><FontAwesomeIcon icon={faArrowRight} className="me-2 ai-primary-color" /> Predictive House Price Regression</li>
                    <li><FontAwesomeIcon icon={faArrowRight} className="me-2 ai-primary-color" /> Image Classifier for Medical Diagnosis</li>
                    <li><FontAwesomeIcon icon={faArrowRight} className="me-2 ai-primary-color" /> Sentiment Analyzer for Social Media Data</li>
                    <li><FontAwesomeIcon icon={faArrowRight} className="me-2 ai-primary-color" /> Chatbot for Customer Support</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow-sm border-0 rounded-3 ai-card-black">
                <div className="card-body p-4 text-center">
                  <FontAwesomeIcon icon={faCode} size="3x" className="mb-3 ai-primary-color" />
                  <h5 className="card-title fw-bold mb-3">Practical Tasks</h5>
                  <p className="card-text text-muted">
                    Engage in practical tasks that solidify your understanding:
                  </p>
                  <ul className="list-unstyled text-muted small ai-checklist-dark">
                    <li><FontAwesomeIcon icon={faArrowRight} className="me-2 ai-primary-color" /> Data Preprocessing and Feature Engineering</li>
                    <li><FontAwesomeIcon icon={faArrowRight} className="me-2 ai-primary-color" /> Model Training and Optimization</li>
                    <li><FontAwesomeIcon icon={faArrowRight} className="me-2 ai-primary-color" /> Hyperparameter Tuning Challenges</li>
                    <li><FontAwesomeIcon icon={faArrowRight} className="me-2 ai-primary-color" /> Deploying Simple ML Models</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow-sm border-0 rounded-3 ai-card-black">
                <div className="card-body p-4 text-center">
                  <FontAwesomeIcon icon={faQuestionCircle} size="3x" className="mb-3 ai-primary-color" />
                  <h5 className="card-title fw-bold mb-3">Challenging Exercises</h5>
                  <p className="card-text text-muted">
                    Reinforce learning with challenging exercises:
                  </p>
                  <ul className="list-unstyled text-muted small ai-checklist-dark">
                    <li><FontAwesomeIcon icon={faArrowRight} className="me-2 ai-primary-color" /> Kaggle-style Machine Learning Competitions</li>
                    <li><FontAwesomeIcon icon={faArrowRight} className="me-2 ai-primary-color" /> Debugging and Troubleshooting AI Models</li>
                    <li><FontAwesomeIcon icon={faArrowRight} className="me-2 ai-primary-color" /> Implementing AI Algorithms from Scratch</li>
                    <li><FontAwesomeIcon icon={faArrowRight} className="me-2 ai-primary-color" /> Case Study Analysis of AI Applications</li>
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
          <h2 className="fw-bold mb-4 ai-text-dark">Ready to Master Artificial Intelligence?</h2>
          <p className="lead text-muted mb-4">Join our expert-led program and become an AI innovator.</p>
          <a href="/contact" className="btn btn-lg ai-btn-primary rounded-pill">
            Get Started Today <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ArtificialIntelligence;