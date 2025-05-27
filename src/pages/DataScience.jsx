// DataScience.jsx
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChartSimple, // Data Science related icon for hero
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
  faDatabase, // New icon for data
  faMagnifyingGlassChart, // New icon for analysis
  faRobot, // Can also be used for ML within DS
} from '@fortawesome/free-solid-svg-icons';
import '../styles/master.css'; // Changed CSS import

function DataScience() {
  return (
    <div className="ds-page fade-in">
      {/* Hero Section - NOW WHITE Background, Orange Accents */}
      <div className="ds-hero-alt py-5 text-dark d-flex align-items-center" style={{ minHeight: '0vh' }}>
        <div className="container">
          <div className="row justify-content-center align-items-center text-center">
            <div className="col-lg-10">
              {/* Main Heading */}
              <h1 className="h2 fw-bold mb-2 text-dark-theme"> {/* Updated class */}
                Data Science Masterclass
              </h1>

              {/* Smaller Subheading */}
              <h3 className="h5 fw-normal mb-4 text-muted">
                Uncover insights, build predictive models, and drive data-driven decisions.
              </h3>

              {/* Description */}
              <p className="lead mb-4">
                Master the art of extracting knowledge from data with our comprehensive Data Science program.
              </p>

              {/* Buttons */}
              <a href="#syllabus" className="btn btn-lg btn-primary-theme rounded-pill me-3 mb-2"> {/* Updated class */}
                Explore Syllabus <FontAwesomeIcon icon={faRocket} className="ms-2" />
              </a>
              <a href="/register" className="btn btn-lg btn-outline-theme rounded-pill mb-2"> {/* Updated class */}
                Enroll Now <FontAwesomeIcon icon={faHandsHelping} className="ms-2" />
              </a>

              {/* Icon (Optional - centered below content) */}
              <div className="mt-4">
                <FontAwesomeIcon icon={faChartSimple} className="ds-hero-icon-alt" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Overview Section - White Background */}
      <div className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center fw-bold mb-5 text-dark-theme">Course Overview</h2> {/* Updated class */}
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card h-100 shadow-sm border-0 rounded-3">
                <div className="card-body p-4">
                  <h5 className="card-title fw-bold mb-3 primary-color">What You'll Learn</h5> {/* Updated class */}
                  <ul className="list-unstyled checklist"> {/* Updated class */}
                    <li><FontAwesomeIcon icon={faDatabase} className="me-2 primary-color" /> Data Collection, Cleaning, and Preprocessing</li> {/* Updated class */}
                    <li><FontAwesomeIcon icon={faChartLine} className="me-2 primary-color" /> Exploratory Data Analysis (EDA) and Visualization</li> {/* Updated class */}
                    <li><FontAwesomeIcon icon={faChalkboardTeacher} className="me-2 primary-color" /> Statistical Modeling and Hypothesis Testing</li> {/* Updated class */}
                    <li><FontAwesomeIcon icon={faRobot} className="me-2 primary-color" /> Machine Learning Algorithms for Prediction</li> {/* Updated class */}
                    <li><FontAwesomeIcon icon={faCode} className="me-2 primary-color" /> Big Data Technologies (Spark, Hadoop)</li> {/* Updated class */}
                    <li><FontAwesomeIcon icon={faLightbulb} className="me-2 primary-color" /> Data Storytelling and Communication</li> {/* Updated class */}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card h-100 shadow-sm border-0 rounded-3">
                <div className="card-body p-4">
                  <h5 className="card-title fw-bold mb-3 primary-color">Who Is This Course For?</h5> {/* Updated class */}
                  <p className="card-text text-muted">
                    This course is ideal for:
                  </p>
                  <ul className="list-unstyled checklist"> {/* Updated class */}
                    <li><FontAwesomeIcon icon={faUserGraduate} className="me-2 primary-color" /> Students looking to kickstart a career in Data Science</li> {/* Updated class */}
                    <li><FontAwesomeIcon icon={faBriefcase} className="me-2 primary-color" /> Analysts and Researchers seeking advanced data skills</li> {/* Updated class */}
                    <li><FontAwesomeIcon icon={faChartLine} className="me-2 primary-color" /> Business Professionals aiming to make data-driven decisions</li> {/* Updated class */}
                    <li><FontAwesomeIcon icon={faPuzzlePiece} className="me-2 primary-color" /> Anyone passionate about extracting insights from data</li> {/* Updated class */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why This Is Important Section - Black Background */}
      <div className="py-5 why-important-section text-white"> {/* Updated class */}
        <div className="container">
          <h2 className="text-center fw-bold mb-5">Why Data Science Matters</h2>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <p className="lead text-center mb-4">
                Data Science is at the forefront of innovation, enabling businesses and organizations to make informed decisions, optimize operations, and discover new opportunities. A strong understanding of data science is crucial for success in today's data-rich world.
              </p>
              <ul className="list-unstyled text-center benefits-list"> {/* Updated class */}
                <li>
                  <FontAwesomeIcon icon={faChartLine} size="2x" className="mb-2 primary-color" /> {/* Updated class */}
                  <h6 className="fw-bold">Strategic Decision Making</h6>
                  <p className="small">Leverage data to make informed business choices.</p>
                </li>
                <li>
                  <FontAwesomeIcon icon={faMagnifyingGlassChart} size="2x" className="mb-2 primary-color" /> {/* Updated class */}
                  <h6 className="fw-bold">Problem Solving & Optimization</h6>
                  <p className="small">Solve complex problems and improve efficiency.</p>
                </li>
                <li>
                  <FontAwesomeIcon icon={faCodeBranch} size="2x" className="mb-2 primary-color" /> {/* Updated class */}
                  <h6 className="fw-bold">High Demand & Career Growth</h6>
                  <p className="small">Enter a rapidly growing field with diverse opportunities.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Syllabus Section - White Background */}
      <div id="syllabus" className="py-5 bg-white">
        <div className="container">
          <h2 className="text-center fw-bold mb-5 text-dark-theme">Detailed Syllabus</h2> {/* Updated class */}
          <div className="accordion" id="dsSyllabusAccordion">
            {/* Module 1 */}
            <div className="accordion-item shadow-sm mb-3 rounded-3">
              <h2 className="accordion-header" id="dsHeadingOne">
                <button
                  className="accordion-button fw-bold accordion-button-theme collapsed" /* Updated class */
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#dsCollapseOne"
                  aria-expanded="false"
                  aria-controls="dsCollapseOne"
                >
                  <FontAwesomeIcon icon={faBookOpen} className="me-2 primary-color" /> Module 1: Introduction to Data Science & Python {/* Updated class */}
                </button>
              </h2>
              <div
                id="dsCollapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="dsHeadingOne"
                data-bs-parent="#dsSyllabusAccordion"
              >
                <div className="accordion-body text-muted">
                  <ul>
                    <li>What is Data Science? Roles and Applications</li>
                    <li>The Data Science Life Cycle</li>
                    <li>Python for Data Science (NumPy, Pandas, Matplotlib, Seaborn)</li>
                    <li>Setting up your Data Science environment</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Module 2 */}
            <div className="accordion-item shadow-sm mb-3 rounded-3">
              <h2 className="accordion-header" id="dsHeadingTwo">
                <button
                  className="accordion-button fw-bold accordion-button-theme collapsed" /* Updated class */
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#dsCollapseTwo"
                  aria-expanded="false"
                  aria-controls="dsCollapseTwo"
                >
                  <FontAwesomeIcon icon={faDatabase} className="me-2 primary-color" /> Module 2: Data Preprocessing & EDA {/* Updated class */}
                </button>
              </h2>
              <div
                id="dsCollapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="dsHeadingTwo"
                data-bs-parent="#dsSyllabusAccordion"
              >
                <div className="accordion-body text-muted">
                  <ul>
                    <li>Data Collection and Data Sources</li>
                    <li>Handling Missing Data, Outliers, and Duplicates</li>
                    <li>Feature Engineering and Selection</li>
                    <li>Univariate, Bivariate, and Multivariate Analysis</li>
                    <li>Data Visualization techniques</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Module 3 */}
            <div className="accordion-item shadow-sm mb-3 rounded-3">
              <h2 className="accordion-header" id="dsHeadingThree">
                <button
                  className="accordion-button fw-bold accordion-button-theme collapsed" /* Updated class */
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#dsCollapseThree"
                  aria-expanded="false"
                  aria-controls="dsCollapseThree"
                >
                  <FontAwesomeIcon icon={faChalkboardTeacher} className="me-2 primary-color" /> Module 3: Statistical Foundations & Machine Learning {/* Updated class */}
                </button>
              </h2>
              <div
                id="dsCollapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="dsHeadingThree"
                data-bs-parent="#dsSyllabusAccordion"
              >
                <div className="accordion-body text-muted">
                  <ul>
                    <li>Descriptive and Inferential Statistics</li>
                    <li>Hypothesis Testing and A/B Testing</li>
                    <li>Introduction to Machine Learning (Supervised vs. Unsupervised)</li>
                    <li>Regression Models (Linear, Logistic)</li>
                    <li>Classification Algorithms (Decision Trees, SVM, K-NN)</li>
                    <li>Model Evaluation Metrics</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Module 4 */}
            <div className="accordion-item shadow-sm mb-3 rounded-3">
              <h2 className="accordion-header" id="dsHeadingFour">
                <button
                  className="accordion-button fw-bold accordion-button-theme collapsed" /* Updated class */
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#dsCollapseFour"
                  aria-expanded="false"
                  aria-controls="dsCollapseFour"
                >
                  <FontAwesomeIcon icon={faRobot} className="me-2 primary-color" /> Module 4: Advanced Machine Learning & Deep Learning Basics {/* Updated class */}
                </button>
              </h2>
              <div
                id="dsCollapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="dsHeadingFour"
                data-bs-parent="#dsSyllabusAccordion"
              >
                <div className="accordion-body text-muted">
                  <ul>
                    <li>Ensemble Methods (Random Forests, Gradient Boosting)</li>
                    <li>Clustering Techniques (K-Means, Hierarchical)</li>
                    <li>Dimensionality Reduction (PCA)</li>
                    <li>Introduction to Neural Networks and Deep Learning</li>
                    <li>Time Series Analysis basics</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Module 5 */}
            <div className="accordion-item shadow-sm mb-3 rounded-3">
              <h2 className="accordion-header" id="dsHeadingFive">
                <button
                  className="accordion-button fw-bold accordion-button-theme collapsed" /* Updated class */
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#dsCollapseFive"
                  aria-expanded="false"
                  aria-controls="dsCollapseFive"
                >
                  <FontAwesomeIcon icon={faLaptopCode} className="me-2 primary-color" /> Module 5: Big Data & Deployment {/* Updated class */}
                </button>
              </h2>
              <div
                id="dsCollapseFive"
                className="accordion-collapse collapse"
                aria-labelledby="dsHeadingFive"
                data-bs-parent="#dsSyllabusAccordion"
              >
                <div className="accordion-body text-muted">
                  <ul>
                    <li>Introduction to Big Data Ecosystem (Hadoop, Spark)</li>
                    <li>SQL for Data Science</li>
                    <li>NoSQL Databases (MongoDB basics)</li>
                    <li>Introduction to Cloud Platforms (AWS, Azure, GCP for DS)</li>
                    <li>Deploying Machine Learning Models</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Module 6 */}
            <div className="accordion-item shadow-sm mb-3 rounded-3">
              <h2 className="accordion-header" id="dsHeadingSix">
                <button
                  className="accordion-button fw-bold accordion-button-theme collapsed" /* Updated class */
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#dsCollapseSix"
                  aria-expanded="false"
                  aria-controls="dsCollapseSix"
                >
                  <FontAwesomeIcon icon={faFlask} className="me-2 primary-color" /> Module 6: Data Storytelling & Ethics {/* Updated class */}
                </button>
              </h2>
              <div
                id="dsCollapseSix"
                className="accordion-collapse collapse"
                aria-labelledby="dsHeadingSix"
                data-bs-parent="#dsSyllabusAccordion"
              >
                <div className="accordion-body text-muted">
                  <ul>
                    <li>Effective Data Visualization and Infographics</li>
                    <li>Communicating Data Insights to Stakeholders</li>
                    <li>Ethics in Data Science: Bias, Privacy, and Fairness</li>
                    <li>Case Studies and Real-World Applications</li>
                    <li>Future Trends in Data Science</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects, Tasks, and Exercises Section - Black Background */}
      <div className="py-5 projects-section-dark text-white"> {/* Updated class */}
        <div className="container">
          <h2 className="text-center fw-bold mb-5">Hands-On Learning Experience</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 shadow-sm border-0 rounded-3 card-dark-theme"> {/* Updated class */}
                <div className="card-body p-4 text-center">
                  <FontAwesomeIcon icon={faFlask} size="3x" className="mb-3 primary-color" /> {/* Updated class */}
                  <h5 className="card-title fw-bold mb-3">Real-World Projects</h5>
                  <p className="card-text text-muted">
                    Apply your knowledge by building end-to-end Data Science solutions. Projects include:
                  </p>
                  <ul className="list-unstyled text-muted small checklist-dark"> {/* Updated class */}
                    <li><FontAwesomeIcon icon={faArrowRight} className="me-2 primary-color" /> Customer Churn Prediction Model</li> {/* Updated class */}
                    <li><FontAwesomeIcon icon={faArrowRight} className="me-2 primary-color" /> Sales Forecasting for Retail</li> {/* Updated class */}
                    <li><FontAwesomeIcon icon={faArrowRight} className="me-2 primary-color" /> Sentiment Analysis of Product Reviews</li> {/* Updated class */}
                    <li><FontAwesomeIcon icon={faArrowRight} className="me-2 primary-color" /> Credit Card Fraud Detection</li> {/* Updated class */}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow-sm border-0 rounded-3 card-dark-theme"> {/* Updated class */}
                <div className="card-body p-4 text-center">
                  <FontAwesomeIcon icon={faCode} size="3x" className="mb-3 primary-color" /> {/* Updated class */}
                  <h5 className="card-title fw-bold mb-3">Practical Tasks</h5>
                  <p className="card-text text-muted">
                    Engage in practical tasks that solidify your understanding:
                  </p>
                  <ul className="list-unstyled text-muted small checklist-dark"> {/* Updated class */}
                    <li><FontAwesomeIcon icon={faArrowRight} className="me-2 primary-color" /> Data Cleaning and Transformation ETL Pipelines</li> {/* Updated class */}
                    <li><FontAwesomeIcon icon={faArrowRight} className="me-2 primary-color" /> Advanced SQL Queries for Data Extraction</li> {/* Updated class */}
                    <li><FontAwesomeIcon icon={faArrowRight} className="me-2 primary-color" /> A/B Testing Experiment Design</li> {/* Updated class */}
                    <li><FontAwesomeIcon icon={faArrowRight} className="me-2 primary-color" /> Interactive Data Visualization Dashboards</li> {/* Updated class */}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow-sm border-0 rounded-3 card-dark-theme"> {/* Updated class */}
                <div className="card-body p-4 text-center">
                  <FontAwesomeIcon icon={faQuestionCircle} size="3x" className="mb-3 primary-color" /> {/* Updated class */}
                  <h5 className="card-title fw-bold mb-3">Challenging Exercises</h5> {/* CORRECTED LINE */}
                  <p className="card-text text-muted">
                    Reinforce learning with challenging exercises:
                  </p>
                  <ul className="list-unstyled text-muted small checklist-dark"> {/* Updated class */}
                    <li><FontAwesomeIcon icon={faArrowRight} className="me-2 primary-color" /> Kaggle Data Analysis Competitions</li> {/* Updated class */}
                    <li><FontAwesomeIcon icon={faArrowRight} className="me-2 primary-color" /> Optimizing Machine Learning Model Performance</li> {/* Updated class */}
                    <li><FontAwesomeIcon icon={faArrowRight} className="me-2 primary-color" /> Designing and Interpreting Complex Statistical Tests</li> {/* Updated class */}
                    <li><FontAwesomeIcon icon={faArrowRight} className="me-2 primary-color" /> End-to-End Data Science Case Studies</li> {/* Updated class */}
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
          <h2 className="fw-bold mb-4 text-dark-theme">Ready to Become a Data Science Expert?</h2> {/* Updated class */}
          <p className="lead text-muted mb-4">Transform data into actionable insights with our expert-led program.</p>
          <a href="/contact" className="btn btn-lg btn-primary-theme rounded-pill"> {/* Updated class */}
            Get Started Today <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default DataScience;