import React from 'react';

function ScholarshipDetails() {
  return (
    <div style={{ backgroundColor: '#fff', color: '#333', padding: '40px 0' }} className="fade-up">
      <div className="container mt-5">
        <h1
          className="text-center mb-5"
          style={{
            color: '#cc5500',
            fontSize: '3.5rem',
            fontWeight: 'bold',
          }}
        >
          Detailed Scholarship Information
        </h1>

        {/* Introduction */}
        <p className="lead text-center mb-5" style={{ color: '#555' }}>
          We are dedicated to empowering talented students by providing various scholarship opportunities.
          Our goal is to ensure that financial circumstances do not limit access to quality education.
          Explore the details below to find the scholarship that's right for you.
        </p>

        {/* Eligibility Criteria */}
        <section className="mb-5 p-4 border rounded shadow-sm" style={{ backgroundColor: '#f8f9fa', borderColor: '#ddd' }}>
          <h2 className="mb-4" style={{ color: '#cc5500' }}>Eligibility Criteria</h2>
          <p className="mb-4 text-start" style={{ color: '#555' }}>
            To be considered for our scholarship programs, applicants must meet the following academic and general requirements:
          </p>
          <ul className="list-group list-group-flush">
            <li className="list-group-item" style={{ backgroundColor: 'transparent', borderColor: '#eee', color: '#333' }}>
              <strong>Academic Performance:</strong>
              <ul style={{ listStyleType: 'circle', marginLeft: '20px', marginTop: '10px' }}>
                <li>Minimum of <strong>80% marks</strong> in both 10th and 12th grade examinations.</li>
                <li>Consistent strong academic records throughout your previous educational journey.</li>
              </ul>
            </li>
            <li className="list-group-item" style={{ backgroundColor: 'transparent', borderColor: '#eee', color: '#333' }}>
              <strong>Interest in Learning:</strong> Demonstrated passion and enthusiasm for your chosen field of study. This can be evidenced through personal statements, extracurricular activities, or previous projects.
            </li>
            <li className="list-group-item" style={{ backgroundColor: 'transparent', borderColor: '#eee', color: '#333' }}>
              <strong>Enrollment:</strong> Must be accepted into and enrolled in one of our academic programs.
            </li>
          </ul>
        </section>

        {/* Financial Background Assessment */}
        <section className="mb-5 p-4 border rounded shadow-sm" style={{ backgroundColor: '#f8f9fa', borderColor: '#ddd' }}>
          <h2 className="mb-4" style={{ color: '#cc5500' }}>Financial Background Assessment</h2>
          <p className="mb-4 text-start" style={{ color: '#555' }}>
            Our scholarships are primarily need-based, aiming to support students from diverse financial backgrounds.
            A thorough assessment of your financial situation is a crucial part of the application process.
          </p>
          <ul className="list-group list-group-flush">
            <li className="list-group-item" style={{ backgroundColor: 'transparent', borderColor: '#eee', color: '#333' }}>
              <strong>Required Documents:</strong>
              <ul style={{ listStyleType: 'circle', marginLeft: '20px', marginTop: '10px' }}>
                <li>Income certificates of parents/guardians.</li>
                <li>Bank statements for the past 6-12 months.</li>
                <li>Proof of any outstanding loans or financial burdens.</li>
                <li>Details of family assets and liabilities.</li>
              </ul>
            </li>
            <li className="list-group-item" style={{ backgroundColor: 'transparent', borderColor: '#eee', color: '#333' }}>
              <strong>Assessment Process:</strong> Our dedicated committee will review your financial documents confidentially to determine the level of financial assistance required. We may request an interview to discuss your situation further.
            </li>
            <li className="list-group-item" style={{ backgroundColor: 'transparent', borderColor: '#eee', color: '#333' }}>
              <strong>Transparency:</strong> We are committed to a fair and transparent assessment process. All information provided will be handled with utmost confidentiality.
            </li>
          </ul>
        </section>

        {/* Application Process and Deadlines */}
        <section className="mb-5 p-4 border rounded shadow-sm" style={{ backgroundColor: '#f8f9fa', borderColor: '#ddd' }}>
          <h2 className="mb-4" style={{ color: '#cc5500' }}>Application Process & Deadlines</h2>
          <p className="mb-4 text-start" style={{ color: '#555' }}>
            Applying for a scholarship is straightforward. Follow these steps to submit your application:
          </p>
          <ol className="list-group list-group-flush">
            <li className="list-group-item" style={{ backgroundColor: 'transparent', borderColor: '#eee', color: '#333' }}>
              <strong>Step 1: Online Application Form:</strong> Fill out the comprehensive online scholarship application form available on our portal.
            </li>
            <li className="list-group-item" style={{ backgroundColor: 'transparent', borderColor: '#eee', color: '#333' }}>
              <strong>Step 2: Document Submission:</strong> Upload all necessary documents, including academic transcripts, income proofs, and identification.
            </li>
            <li className="list-group-item" style={{ backgroundColor: 'transparent', borderColor: '#eee', color: '#333' }}>
              <strong>Step 3: Personal Statement:</strong> Write a compelling personal statement outlining your academic achievements, career aspirations, and how this scholarship will impact your educational journey.
            </li>
            <li className="list-group-item" style={{ backgroundColor: 'transparent', borderColor: '#eee', color: '#333' }}>
              <strong>Step 4: Interview (if required):</strong> Shortlisted candidates may be invited for an interview to assess their motivation and suitability for the scholarship.
            </li>
          </ol>
          <p className="mt-4" style={{ color: '#cc5500', fontWeight: 'bold' }}>
            Current Application Deadline: Please check our announcements section for the latest scholarship application deadlines.
          </p>
        </section>

        {/* Contact Information */}
        <section className="text-center p-4" style={{ backgroundColor: '#fff', border: '1px solid #cc5500', borderRadius: '8px' }}>
          <h2 className="mb-3" style={{ color: '#cc5500' }}>Need More Information?</h2>
          <p className="mb-4" style={{ color: '#555' }}>
            If you have any questions regarding the scholarship programs or the application process, please don't hesitate to contact our admissions and financial aid office.
          </p>
          <p style={{ color: '#555' }}>
            Email: <a href="mailto:scholarships@example.com" style={{ color: '#cc5500', textDecoration: 'none' }}>info@sevenelevenacademy.com</a><br />
            Phone: <a href="tel:+911234567890" style={{ color: '#cc5500', textDecoration: 'none' }}>+91 12345 67890</a>
          </p>
        </section>
      </div>
    </div>
  );
}

export default ScholarshipDetails;