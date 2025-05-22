import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ContactsList() {
  const [contacts, setContacts] = useState([]);
  const [registrations, setRegistrations] = useState([]);
  const [loadingContacts, setLoadingContacts] = useState(true);
  const [loadingRegistrations, setLoadingRegistrations] = useState(true);
  const [errorContacts, setErrorContacts] = useState(null);
  const [errorRegistrations, setErrorRegistrations] = useState(null);

  const API_TOKEN = "mysecrettoken123"; // Make sure this matches your Flask API_TOKEN

  useEffect(() => {
    // Fetch Contacts
    fetch('http://localhost:5000/api/contacts', {
      headers: {
        'Authorization': `Bearer ${API_TOKEN}` // Use template literal for token
      }
    })
      .then((response) => {
        if (!response.ok) {
          if (response.status === 401 || response.status === 403) {
            throw new Error('Authentication failed. Please check your token.');
          }
          throw new Error('Failed to fetch contacts');
        }
        return response.json();
      })
      .then((data) => {
        setContacts(data);
        setLoadingContacts(false);
      })
      .catch((err) => {
        setErrorContacts(err.message);
        setLoadingContacts(false);
      });

    // Fetch Registrations
    fetch('http://localhost:5000/api/registrations', {
      headers: {
        'Authorization': `Bearer ${API_TOKEN}`
      }
    })
      .then((response) => {
        if (!response.ok) {
          if (response.status === 401 || response.status === 403) {
            throw new Error('Authentication failed. Please check your token.');
          }
          throw new Error('Failed to fetch registrations');
        }
        return response.json();
      })
      .then((data) => {
        setRegistrations(data);
        setLoadingRegistrations(false);
      })
      .catch((err) => {
        setErrorRegistrations(err.message);
        setLoadingRegistrations(false);
      });

  }, [API_TOKEN]); // Re-run if API_TOKEN changes (though it's constant here)

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Contact List</h2>
      {loadingContacts ? (
        <p>Loading contacts...</p>
      ) : errorContacts ? (
        <div className="alert alert-danger" role="alert">Error loading contacts: {errorContacts}</div>
      ) : contacts.length === 0 ? (
        <p>No contacts found.</p>
      ) : (
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
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
                <td>{contact.name}</td>
                <td>{contact.mobile}</td>
                <td>{contact.email}</td>
                <td>{contact.course}</td>
                <td>{contact.mode}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <hr className="my-5" /> {/* Separator */}

      <h2 className="mb-4">Student Registrations</h2>
      {loadingRegistrations ? (
        <p>Loading registrations...</p>
      ) : errorRegistrations ? (
        <div className="alert alert-danger" role="alert">Error loading registrations: {errorRegistrations}</div>
      ) : registrations.length === 0 ? (
        <p>No registrations found.</p>
      ) : (
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Course</th>
              <th>Why Choose</th>
              <th>Course Gap</th>
              <th>Skills to Learn</th>
            </tr>
          </thead>
          <tbody>
            {registrations.map((reg) => (
              <tr key={reg.id}>
                <td>{reg.name}</td>
                <td>{reg.phone}</td>
                <td>{reg.email}</td>
                <td>{reg.course}</td>
                <td>{reg.whyToChoose}</td>
                <td>{reg.courseGap}</td>
                <td>{reg.skillLearning}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ContactsList;