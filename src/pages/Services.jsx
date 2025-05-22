import React from 'react';

function Services() {
  return (
    <div style={{ backgroundColor: '#fff', color: '#333', padding: '40px 0' }} className="fade-up">

      {/* Scholarship Opportunities Section - Stays within container-fluid */}
      <div className="container-fluid mt-5">
        <section className="mb-5 mt-5">
          <h1
            className="text-center mb-5"
            style={{
              color: '#cc5500',
              fontSize: '3.5rem', /* Increased height of letter */
              fontWeight: 'bold'
            }}
          >
            Scholarship Opportunities
          </h1>
          <p className="lead text-center mb-4" style={{ color: '#555' }}>
            We believe in fostering academic excellence and ensuring financial barriers don't hinder your educational journey.
            Explore various scholarship programs designed to support deserving students.
          </p>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="card h-100" style={{ backgroundColor: '#fff', border: '1px solid #cc5500', color: '#333' }}>
                <div className="card-body">
                  <h5 className="card-title text-center mb-3" style={{ color: '#cc5500', fontSize: '1.75rem' }}>
                    Access Our Scholarship Portal
                  </h5>
                  <p className="card-text text-center" style={{ color: '#555' }}>
                    Find detailed information on eligibility criteria, application procedures, deadlines, and available scholarship programs.
                    This portal is your comprehensive guide to securing financial aid for your studies.
                  </p>
                  <div className="text-center mt-4">
                    <a href="/scholarship-details"
                      className="btn btn-warning btn-lg"
                      style={{ backgroundColor: '#cc5500', borderColor: '#cc5500', color: '#fff' }}
                    >
                      Explore Scholarships
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div> {/* End of container-fluid for Scholarship Opportunities */}

      

      {/* Certification & Support Section - Full width */}
      <section className="mb-5 p-5" style={{ backgroundColor: 'white', width: '170vw', marginLeft: 'calc(12% - 50vw)' }}>
        <div className="container"> {/* Use container for content alignment */}
          <h2 className="mb-4" style={{ color: 'black' }}>Beyond the Course: Your Growth & Support</h2>
          <p className="lead text-start" style={{ color: '#555' }}>
            We are committed to providing you with a holistic learning experience that extends beyond the classroom.
            From official certifications to personalized guidance and helpful resources, we support your success every step of the way.
          </p>
          <ul className="list-group list-group-flush mb-4" style={{ backgroundColor: 'transparent', color: '#333' }}>
            <li className="list-group-item d-flex justify-content-between align-items-center" style={{ backgroundColor: '#fff', borderColor: 'black', color: '#cc5500' }}>
              Official Course Completion Certificates
              <span className="badge bg-warning rounded-pill" style={{ backgroundColor: '#cc5500 !important' }}>Awarded</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center" style={{ backgroundColor: '#fff', borderColor: 'black', color: '#cc5500' }}>
              Personalized Guidance and Mentorship
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center" style={{ backgroundColor: '#fff', borderColor: 'black', color: '#cc5500' }}>
              Comprehensive Course Notes and Supplementary Materials
              <span className="badge bg-success rounded-pill" style={{ backgroundColor: '#cc5500 !important' }}>Provided</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center" style={{ backgroundColor: '#fff', borderColor: 'black', color: '#cc5500' }}>
              Welcome Kit (Bag, Cap, and more!)
            </li>
          </ul>
        </div>
      </section>

      

      {/* Cafeteria Services Section - Stays within container-fluid */}
      <div className="container-fluid mt-5">
        <section className="mb-5 p-4 border rounded shadow-sm" style={{ backgroundColor: '#f8f9fa', borderColor: '#ddd' }}>
          <h2 className="mb-4" style={{ color: '#cc5500' }}>Cafeteria Services</h2>
          <p className="lead" style={{ color: '#555' }}>
            Enjoy nutritious and delicious meals at our modern food facilities. We prioritize hygiene, variety, and high-quality food to ensure
            a dining experience for everyone.
          </p>
          <div className="row">
            <div className="col-md-6 mb-3">
              <div className="card h-100" style={{ backgroundColor: '#fff', border: '1px solid #bbb', color: '#333' }}>
                <div className="card-body">
                  <h5 className="card-title" style={{ color: 'black' }}>Snacks & Beverages</h5>
                  <p className="card-text text-start" style={{ color: '#555' }}>
                    Grab a quick bite with our selection of tea, coffee, milk, Boost, and various snacks like biscuits and more. Perfect for a refreshing break.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="card h-100" style={{ backgroundColor: '#fff', border: '1px solid #bbb', color: '#333' }}>
                <div className="card-body">
                  <h5 className="card-title" style={{ color: 'black' }}>Full Meals</h5>
                  <p className="card-text text-start" style={{ color: '#555' }}>
                    Savor our extensive menu for breakfast and lunch, featuring a variety of wholesome dishes, including fresh vegetables.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-3">
            <p style={{ color: '#555' }}>
              We maintain the highest standards of quality and hygiene in food preparation and service. Our kitchen adheres to strict safety protocols.
            </p>
          </div>
          <p className="mt-3" style={{ color: '#555' }}>
            Our food facility operates in daily basics.
          </p>
        </section>
      </div> {/* End of container-fluid for Cafeteria Services */}

     

      {/* Fees Structure Section - Full width */}
      <section className="mb-5 p-4" style={{ backgroundColor: 'white', width: '100vw', marginLeft: 'calc(45% - 50vw)' }}>
        <div className="container"> {/* Use container for content alignment */}
          <h2 className="mb-4" style={{ color: 'black' }}>Fees Structure</h2>
          <p className="lead text-start" style={{ color: '#555' }}>
            We offer a flexible payment structure designed to ease your financial planning.
            Our fees are structured to provide convenience and transparency.
          </p>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="card h-100" style={{ backgroundColor: '#fff', border: '1px solid #cc5500', color: '#333' }}>
                <div className="card-body">
                  <h5 className="card-title text-center mb-3" style={{ color: '#cc5500', fontSize: '1.75rem' }}>
                    Flexible Payment Plan
                  </h5>
                  <p className="card-text text-center" style={{ color: '#555' }}>
                    Our standard payment plan is divided into two convenient installments:
                  </p>
                  <ul className="list-group list-group-flush mb-3 text-center">
                    <li className="list-group-item" style={{ backgroundColor: '#fff', borderColor: '#eee', color: '#333' }}>
                      <strong>30%</strong> of the total fees due at the time of admission.
                    </li>
                    <li className="list-group-item" style={{ backgroundColor: '#fff', borderColor: '#eee', color: '#333' }}>
                      The remaining balance will be due at a later, specified date.
                    </li>
                  </ul>
                  <p className="card-text text-center" style={{ color: '#555' }}>
                    For detailed information on payment deadlines and other options, please contact our admissions office.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* Mind Refreshment Games Section - Stays within container-fluid */}
      <div className="container-fluid mt-5">
        <section className="mb-0 p-4 " style={{ backgroundColor: 'white', borderColor: '#ddd' }}>
          <h2 className="mb-4" style={{ color: 'black' }}>Mind Refreshment Games</h2>
          <p className="lead text-start" style={{ color: '#555' }}>
            Take a break from your studies and engage in fun and stimulating mind games. These activities are designed to
            improve focus, critical thinking, and provide a much-needed mental recharge.
          </p>
          <div className="row">
            <div className="col-md-6 mb-2">
              <div className="card h-100" style={{ backgroundColor: '#fff', border: '1px solid #bbb', color: '#333' }}>
                <div className="card-body text-center">
                  <h5 className="card-title" style={{ color: '#cc5500' }}>Friday Fun</h5>
                </div>
              </div>
            </div>
             <div className="col-md-6 mb-2">
              <div className="card h-100" style={{ backgroundColor: '#fff', border: '1px solid #bbb', color: '#333' }}>
                <div className="card-body text-center">
                  <h5 className="card-title" style={{ color: '#cc5500' }}>Games </h5>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-1">
              <div className="card h-100" style={{ backgroundColor: '#fff', border: '1px solid #bbb', color: '#333' }}>
                <div className="card-body text-center">
                  <h5 className="card-title" style={{ color: '#cc5500' }}>Brain Teasers</h5>
                  </div>
              </div>
            </div>
            <div className="col-md-6 mb-1">
              <div className="card h-100" style={{ backgroundColor: '#fff', border: '1px solid #bbb', color: '#333' }}>
                <div className="card-body text-center">
                  <h5 className="card-title" style={{ color: '#cc5500' }}>Festival Celebration</h5>
                 </div>
              </div>
            </div>
          </div>
          <p className="mt-3 text-center text-muted" style={{ color: '#777' }}>
            Remember to take regular breaks for optimal productivity!
          </p>
        </section>
      </div> {/* End of container-fluid for Mind Refreshment Games */}

    </div>
  );
}

export default Services;