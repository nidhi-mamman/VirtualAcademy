import React from 'react';
import request from '../images/ritish2.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Userheader = () => {
  const [course, setcourse] = useState('');
  const [otherCourse, setOtherCourse] = useState('');
  const COURSE_OPTIONS = [
    "Data Science",
    "Data Analytics",
    "Digital Marketing",
    "CyberSecurity",
    "Ui/Ux",
    "Artificial Intelligence",
    "Web Designing",
    "Cloud Computing",
    "Web Development",
    "Others",
  ];
  return (
    <div>

      {/* Request a Call Modal */}
      <div
        className="modal fade"
        style={{ zIndex: 99999 }}
        id="modalExample"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="modalExampleTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-xl" role="document">
          <div className="modal-content" style={{
            height: 'auto',
            maxHeight: 'none',
            overflow: 'hidden',
          }}>
            <div className="modal-body p-0">
              <div className="container-fluid">
                <div className="row" style={{ height: '100%' }}>
                  {/* Image Column */}
                  <div className="col-md-6 p-0" style={{ height: '100%' }}>
                    <img
                      src={request}
                      alt="Demo"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                        borderTopLeftRadius: "0.5rem",
                        borderBottomLeftRadius: "0.5rem"
                      }}
                    />
                  </div>

                  {/* Form Column */}
                  <div
                    className="col-md-6"
                    style={{
                      padding: '40px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      height: '100%'
                    }}
                  >
                    {/* Close Button */}
                    <button
                      type="button"
                      className="close align-self-end"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                      style={{
                        position: 'absolute',
                        right: '20px',
                        top: '20px',
                        fontSize: '2rem',
                        zIndex: 1
                      }}
                    >
                      <span aria-hidden="true">×</span>
                    </button>
                    {/* Heading */}
                    <h2 className="fw-bold text-center mb-3" id="modalExampleTitle" style={{ fontSize: '2rem' }}>
                      Schedule a demo with us
                    </h2>

                    {/* Alert */}
                    <div className="alert alert-info text-center mb-4" style={{ borderRadius: '8px' }}>
                      ⭐ Limited slots available – Book early!
                    </div>

                    {/* Form */}
                    <form>
                      <div className="row">
                        {/* Email */}
                        <div className="col-12 mb-4">
                          <label htmlFor="email" style={{
                            fontWeight: 500,
                            display: 'block',
                            marginBottom: '8px',
                            fontSize: '1rem'
                          }}>
                            Email Id <span style={{ color: 'red' }}>*</span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            required
                            placeholder="Enter your Email ID"
                            style={{
                              width: '100%',
                              padding: '12px 16px',
                              border: '1px solid #ddd',
                              borderRadius: '8px',
                              fontSize: '1rem'
                            }}
                          />
                        </div>

                        {/* Full Name */}
                        <div className="col-12  mb-4">
                          <label htmlFor="fullName" style={{
                            fontWeight: 500,
                            display: 'block',
                            marginBottom: '8px',
                            fontSize: '1rem'
                          }}>
                            Full Name <span style={{ color: 'red' }}>*</span>
                          </label>
                          <input
                            type="text"
                            id="fullName"
                            required
                            placeholder="Enter your Full Name"
                            style={{
                              width: '100%',
                              padding: '12px 16px',
                              border: '1px solid #ddd',
                              borderRadius: '8px',
                              fontSize: '1rem'
                            }}
                          />
                        </div>

                        {/* Course select */}
                        <div className="col-12">
                          <select
                            className="form-select"
                            required
                            value={course}
                            onChange={(e) => setcourse(e.target.value)}
                            aria-label="Select Course"
                            title="Scroll to view more courses"
                          >
                            <option value="">Select a course*</option>
                            {COURSE_OPTIONS.map((c) => (
                              <option key={c} value={c}>{c}</option>
                            ))}
                          </select>
                          <div className="form-text">Tip: Open the dropdown and scroll to see all courses.</div>
                        </div>

                        {/* When 'Others' selected, show extra field */}
                        {course === "Others" && (
                          <div className="col-12">
                            <input
                              className="form-control"
                              type="text"
                              placeholder="Please type your course*"
                              required
                              value={otherCourse}
                              onChange={(e) => setOtherCourse(e.target.value)}
                            />
                          </div>
                        )}

                        {/* Terms and Conditions */}
                        <div className="col-12 mb-4 mt-2" style={{ textAlign: 'center' }}>
                          <small style={{
                            color: '#666',
                            fontSize: '0.875rem'
                          }}>
                            By continuing, I have read and agree to Techcadd's{' '}
                            <a href="#" style={{ color: '#007bff', textDecoration: 'none' }}>Terms</a> and{' '}
                            <a href="#" style={{ color: '#007bff', textDecoration: 'none' }}>Privacy Policy</a>
                          </small>
                        </div>

                        {/* Submit Button */}
                        <div className="col-12">
                          <button
                            type="submit"
                            style={{
                              backgroundColor: '#ec4242',
                              color: 'white',
                              border: 'none',
                              borderRadius: '8px',
                              padding: '14px',
                              width: '100%',
                              fontWeight: '600',
                              fontSize: '1rem',
                              cursor: 'pointer',
                              transition: 'background-color 0.3s'

                            }}
                            onMouseOver={(e) => e.target.style.backgroundColor = '#d33a3a'}
                            onMouseOut={(e) => e.target.style.backgroundColor = '#ec4242'}
                          >
                            Request a Call
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Help Bar */}
      <div className="header">
        <p>Need help? Talk to our Academic Advisors <span
          style={{ margin: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}><a href="#" data-bs-toggle="modal" data-bs-target="#modalExample">Request a
            call?</a><i className='bx bx-lg bx-arrow-up-right-stroke' style={{ color: "#353030" }}></i>
        </span>
        </p>
      </div>

      {/* NAVBAR with centered alignment and styled buttons */}
      <header className="navbar navbar-expand-xl navbar-light bg-white border-bottom border-xl-0 py-2 py-xl-4">
        <div className="container-fluid">
          {/* Brand */}
          <Link className="navbar-brand" to="/">
            <img src="assets/img/logo/image.png" className="navbar-brand-img" alt="..." />
          </Link>

          {/* Collapse */}
          <div className="collapse navbar-collapse" id="navbarCollapse">
            {/* Centered Navigation */}
            <ul className="navbar-nav mx-auto" style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%'
            }}>
              <li className="nav-item mx-2">
                <Link to='/' className="nav-link" aria-haspopup="true" aria-expanded="false">
                  Home
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link to='/about' className="nav-link" id="navbarCourses" aria-haspopup="true" aria-expanded="false">
                  About-Us
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link to='/contact' className="nav-link" id="navbarCourses" aria-haspopup="true" aria-expanded="false">
                  Contact-Us
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link to='/showallcourses' className="nav-link" id="navbarTeam" aria-haspopup="true" aria-expanded="false">
                  Courses
                </Link>
              </li>

              {/* Styled Login Button */}
              <li className="nav-item mx-2">
                <Link to='/login' className="nav-link" id="navbarFAQ" aria-haspopup="true" aria-expanded="false"
                  style={{
                    background: 'linear-gradient(135deg, #3b71ca 0%, #2a52a5 100%)',
                    color: 'white',
                    borderRadius: '6px',
                    padding: '8px 16px',
                    fontWeight: '500',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                  }}>
                  Login
                </Link>
              </li>

              {/* Styled Signup Button */}
              <li className="nav-item mx-2">
                <Link to='/signup' className="nav-link" id="navbarFAQ" aria-haspopup="true" aria-expanded="false"
                  style={{
                    background: 'linear-gradient(135deg, #ec4242 0%, #c53030 100%)',
                    color: 'white',
                    borderRadius: '6px',
                    padding: '8px 16px',
                    fontWeight: '500',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                  }}>
                  Signup
                </Link>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" id="navbarCall" data-bs-toggle="modal" data-bs-target="#modalExample"
                  href="#" aria-haspopup="true" aria-expanded="false" style={{
                    borderRadius: "4px"
                  }}>
                  Request A Call
                </a>
              </li>
            </ul>
          </div>

          {/* Toggler */}
          <button
            className="navbar-toggler ms-4 ms-md-5 shadow-none bg-teal text-white icon-xs p-0 outline-0 h-40p w-40p d-flex d-xl-none place-flex-center"
            type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse"
            aria-expanded="false" aria-label="Toggle navigation">
            <svg width="25" height="17" viewBox="0 0 25 17" xmlns="http://www.w3.org/2000/svg">
              <rect width="25" height="1" fill="currentColor" />
              <rect y="8" width="15" height="1" fill="currentColor" />
              <rect y="16" width="20" height="1" fill="currentColor" />
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Userheader;