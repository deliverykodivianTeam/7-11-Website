// src/components/OfficialPort.jsx
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const API_BASE_URL = 'http://localhost:5000/api'; // Your Flask backend URL

const OfficialPort = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const [contacts, setContacts] = useState([]);
  const [registrations, setRegistrations] = useState([]);
  const [dataError, setDataError] = useState('');
  const [loading, setLoading] = useState(false);

  // Hardcoded credentials for this example (DO NOT use in production)
  const ADMIN_EMAIL = 'seven11@info.com';
  const ADMIN_PASSWORD = 'seven11';
  const MOCK_API_TOKEN = 'mysecrettoken123'; // Matches your app.py

  const handleLogin = (e) => {
    e.preventDefault();
    setLoginError('');

    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      setIsLoggedIn(true);
      // In a real app, you'd receive a token from the backend here
    } else {
      setLoginError('Invalid email or password.');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail('');
    setPassword('');
    setContacts([]);
    setRegistrations([]);
    setLoginError('');
    setDataError('');
  };

  useEffect(() => {
    if (isLoggedIn) {
      fetchData();
    }
  }, [isLoggedIn]); // Fetch data whenever login status changes to true

  const fetchData = async () => {
    setLoading(true);
    setDataError('');

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${MOCK_API_TOKEN}` // Send the token
    };

    try {
      // Fetch Contacts
      const contactsResponse = await fetch(`${API_BASE_URL}/contacts`, { headers });
      if (!contactsResponse.ok) {
        const errorData = await contactsResponse.json();
        throw new Error(errorData.message || 'Failed to fetch contacts');
      }
      const contactsData = await contactsResponse.json();
      setContacts(contactsData);

      // Fetch Registrations
      const registrationsResponse = await fetch(`${API_BASE_URL}/registrations`, { headers });
      if (!registrationsResponse.ok) {
        const errorData = await registrationsResponse.json();
        throw new Error(errorData.message || 'Failed to fetch registrations');
      }
      const registrationsData = await registrationsResponse.json();
      setRegistrations(registrationsData);

    } catch (error) {
      console.error('Error fetching data:', error);
      setDataError(`Error fetching data: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="container mt-5 d-flex justify-content-center align-items-center" style={{ minHeight: '70vh' }}>
        <div className="card p-4 shadow-lg" style={{ width: '100%', maxWidth: '400px' }}>
          <h2 className="card-title text-center mb-4" style={{ color: '#ff6f00' }}>Admin Login</h2>
          <form onSubmit={handleLogin}>
            {loginError && <div className="alert alert-danger text-center">{loginError}</div>}
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-lg btn-warning text-white">Login</button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-5 mb-5">
      <h1 className="text-center mb-4" style={{ color: '#ff6f00' }}>Admin Panel</h1>
      <div className="text-end mb-3">
        <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
      </div>

      {loading && <div className="alert alert-info text-center">Loading data...</div>}
      {dataError && <div className="alert alert-danger text-center">{dataError}</div>}

      {/* Contacts Section */}
      <div className="card shadow mb-5">
        <div className="card-header bg-warning text-white">
          <h3 className="mb-0">Contact Form Submissions</h3>
        </div>
        <div className="card-body">
          {contacts.length === 0 ? (
            <p className="text-center">No contact submissions yet.</p>
          ) : (
            <div className="table-responsive">
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Mobile</th>
                    <th>Email</th>
                    <th>Course</th>
                    <th>Mode</th>
                  </tr>
                </thead>
                <tbody>
                  {contacts.map((contact) => (
                    <tr key={contact.id}>
                      <td>{contact.id}</td>
                      <td>{contact.name}</td>
                      <td>{contact.mobile}</td>
                      <td>{contact.email}</td>
                      <td>{contact.course}</td>
                      <td>{contact.mode}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Registrations Section */}
      <div className="card shadow">
        <div className="card-header bg-warning text-white">
          <h3 className="mb-0">Student Registrations</h3>
        </div>
        <div className="card-body">
          {registrations.length === 0 ? (
            <p className="text-center">No student registrations yet.</p>
          ) : (
            <div className="table-responsive">
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Course</th>
                    <th>Why Choose</th>
                    <th>Course Gap</th>
                    <th>Skills Learning</th>
                  </tr>
                </thead>
                <tbody>
                  {registrations.map((reg) => (
                    <tr key={reg.id}>
                      <td>{reg.id}</td>
                      <td>{reg.name}</td>
                      <td>{reg.phone}</td>
                      <td>{reg.email}</td>
                      <td>{reg.course}</td>
                      <td>{reg.whyToChoose || 'N/A'}</td>
                      <td>{reg.courseGap || 'N/A'}</td>
                      <td>{reg.skillLearning || 'N/A'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OfficialPort;