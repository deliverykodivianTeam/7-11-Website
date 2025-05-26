import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import '../styles/Register.css'; // Import your custom CSS for this component

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        course: '',
        whyToChoose: '',
        courseGap: '',
        skillLearning: ''
    });

    const [submissionSuccess, setSubmissionSuccess] = useState(false);
    const [submissionError, setSubmissionError] = useState(''); // New state for error messages

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmissionSuccess(false); // Reset success message on new submission attempt
        setSubmissionError(''); // Reset error message

        try {
            const res = await fetch('http://127.0.0.1:5000/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const data = await res.json();
            if (res.ok) {
                setSubmissionSuccess(true);
                // Optionally, clear the form after successful submission
                setFormData({
                    name: '',
                    phone: '',
                    email: '',
                    course: '',
                    whyToChoose: '',
                    courseGap: '',
                    skillLearning: ''
                });
                // You might want to hide the success message after a few seconds
                setTimeout(() => {
                    setSubmissionSuccess(false);
                }, 5000);
            } else {
                setSubmissionError('Registration failed: ' + (data.message || 'Unknown error'));
            }
        } catch (err) {
            setSubmissionError('Error during registration: ' + err.message);
        }
    };

    return (
        <div className="register-page-container"> {/* Wrapper for full page styling */}
            <div className="container py-5"> {/* Added vertical padding */}
                <div className="card p-4 shadow-lg register-card"> {/* Added shadow-lg for more emphasis, custom class for styling */}
                    <h2 className="mb-4 text-center register-heading">Student Registration Form</h2>

                    {/* Success Message Display */}
                    {submissionSuccess && (
                        <div className="alert alert-success text-center mb-3" role="alert">
                            Registration successful! Thank you for your submission.
                        </div>
                    )}

                    {/* Error Message Display */}
                    {submissionError && (
                        <div className="alert alert-danger text-center mb-3" role="alert">
                            {submissionError}
                        </div>
                    )}

                    <form onSubmit={handleSubmit}>
                        {/* Name */}
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Full Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                placeholder="Enter your full name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Phone Number */}
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">Phone Number</label>
                            <input
                                type="tel"
                                className="form-control"
                                id="phone"
                                placeholder="e.g., 9876543210"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Email */}
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email Address</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="name@example.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Course */}
                        <div className="mb-3">
                            <label htmlFor="course" className="form-label">Select Course</label>
                            <select
                                className="form-select"
                                id="course"
                                value={formData.course}
                                onChange={handleChange}
                                required
                            >
                                <option value="">-- Choose a Course --</option>
                                <option value="web_development">Web Development</option>
                                <option value="data_science">Data Science</option>
                                <option value="mobile_app_development">Mobile App Development</option>
                                <option value="cybersecurity">Cybersecurity</option>
                                <option value="cloud_computing">Cloud Computing</option>
                                <option value="ui_ux_design">UI/UX Design</option>
                                <option value="digital_marketing">Digital Marketing</option>
                            </select>
                        </div>

                        {/* Why to Choose */}
                        <div className="mb-3">
                            <label htmlFor="whyToChoose" className="form-label">Why are you interested in this course?</label>
                            <textarea
                                className="form-control"
                                id="whyToChoose"
                                rows="3"
                                placeholder="Tell us why you want to join this course and what your goals are."
                                value={formData.whyToChoose}
                                onChange={handleChange}
                            ></textarea>
                        </div>

                        {/* Course Gap (Optional) */}
                        <div className="mb-3">
                            <label htmlFor="courseGap" className="form-label">Any gaps in your academic/professional journey (optional)?</label>
                            <textarea
                                className="form-control"
                                id="courseGap"
                                rows="3"
                                placeholder="e.g., career break, change of field, etc."
                                value={formData.courseGap}
                                onChange={handleChange}
                            ></textarea>
                        </div>

                        {/* Skill Learning */}
                        <div className="mb-4"> {/* Increased margin bottom for button separation */}
                            <label htmlFor="skillLearning" className="form-label">What specific skills are you hoping to learn from this course?</label>
                            <textarea
                                className="form-control"
                                id="skillLearning"
                                rows="3"
                                placeholder="List the key skills you want to acquire."
                                value={formData.skillLearning}
                                onChange={handleChange}
                            ></textarea>
                        </div>

                        <div className="d-grid gap-2">
                            <button type="submit" className="btn btn-lg btn-custom-orange">Register Now</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;