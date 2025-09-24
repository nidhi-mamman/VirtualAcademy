import React, { useState } from 'react';

const Contactus = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    contactNo: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("http://localhost:9000/submit-contact-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      
      if (result.statuscode === 1) {
        alert("Contact request submitted successfully!");
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          contactNo: ''
        });
      } else {
        alert("Failed to submit contact request. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      {/* Hero Section with animated SVG background */}
      <header className="position-relative overflow-hidden header-gradient" style={{ color: "#fff", minHeight: "250px",display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <svg width="100%" height="100%" viewBox="0 0 1440 520" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }}>
          <defs>
            <radialGradient id="heroGlow1" cx="50%" cy="50%" r="70%" fx="50%" fy="50%" gradientTransform="rotate(20)">
              <stop offset="0%" stopColor="#a259e6" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#73328e" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="heroGlow2" cx="50%" cy="50%" r="80%" fx="50%" fy="50%">
              <stop offset="0%" stopColor="#5a276f" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#73328e" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="heroWave" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fff" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#73328e" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* Top left glow */}
          <circle cx="220" cy="80" r="180" fill="url(#heroGlow1)" className="svg-anim svg-glow1" />
          {/* Bottom right glow */}
          <circle cx="1300" cy="420" r="220" fill="url(#heroGlow2)" className="svg-anim svg-glow2" />
          {/* Decorative wave */}
          <path d="M0 400 Q 400 500 900 400 T 1440 420 V520 H0Z" fill="url(#heroWave)" className="svg-anim svg-wave" />
          {/* Small accent shapes */}
          <ellipse cx="320" cy="320" rx="32" ry="14" fill="#fff" opacity="0.10" className="svg-anim svg-ellipse1" />
          <ellipse cx="1200" cy="120" rx="22" ry="10" fill="#fff" opacity="0.13" className="svg-anim svg-ellipse2" />
          <circle cx="700" cy="100" r="18" fill="#fff" opacity="0.09" className="svg-anim svg-circle1" />
        </svg>
        <style>{`
          .header-gradient {
            background: linear-gradient(120deg, #73328e 0%, #5a276f 100%);
          }
          .svg-anim {
            transition: transform 0.7s cubic-bezier(.23,1,.32,1);
            will-change: transform;
          }
          .svg-glow1 { animation: moveGlow1 6s ease-in-out infinite alternate; }
          .svg-glow2 { animation: moveGlow2 7s ease-in-out infinite alternate; }
          .svg-wave { animation: moveWave 8s ease-in-out infinite alternate; }
          .svg-ellipse1 { animation: moveEllipse1 5s ease-in-out infinite alternate; }
          .svg-ellipse2 { animation: moveEllipse2 6s ease-in-out infinite alternate; }
          .svg-circle1 { animation: moveCircle1 7s ease-in-out infinite alternate; }
          @keyframes moveGlow1 { 0%{ transform: translateY(0) scale(1); } 100%{ transform: translateY(18px) scale(1.04); } }
          @keyframes moveGlow2 { 0%{ transform: translateY(0) scale(1); } 100%{ transform: translateY(-22px) scale(1.03); } }
          @keyframes moveWave { 0%{ transform: translateY(0); } 100%{ transform: translateY(-12px); } }
          @keyframes moveEllipse1 { 0%{ transform: translateX(0); } 100%{ transform: translateX(16px); } }
          @keyframes moveEllipse2 { 0%{ transform: translateX(0); } 100%{ transform: translateX(-18px); } }
          @keyframes moveCircle1 { 0%{ transform: scale(1); } 100%{ transform: scale(1.12); } }
        `}</style>
        <div className="container text-center py-xl-4" style={{ position: 'relative', zIndex: 1 }}>
          <h1 className="display-4 fw-bold text-white mb-3">Get in Touch Today!</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center">
              <li className="breadcrumb-item">
                <a href="#" className="text-decoration-none text-white-50">Home</a>
              </li>
              <li className="breadcrumb-item active text-white" aria-current="page">
                Contact Us
              </li>
            </ol>
          </nav>
        </div>
      </header>

      {/* Main Contact Section */}
      <section className="py-8 py-lg-11 bg-white">
        <div className="container">
          <div className="row g-5">
            {/* Contact Info Column */}
            <div className="col-lg-5">
              <div className="pe-lg-5">
                <h2 className="fw-bold mb-5">Contact Details</h2>
                
                {/* Contact Card - Address */}
                <div className="d-flex mb-5">
                  <div className="me-4 text-primary">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="bi bi-geo-alt">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <div>
                    <h5 className="fw-semibold mb-3">Our Location</h5>
                    <address className="mb-0 text-muted">
                      B484,Indirapuram,Ghaziabad<br/>
                      Delhi NCR.
                    </address>
                  </div>
                </div>

                {/* Contact Card - Phone */}
                <div className="d-flex mb-5">
                  <div className="me-4 text-primary">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="bi bi-telephone">
                      <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                    </svg>
                  </div>
                  <div>
                    <h5 className="fw-semibold mb-3">Phone Numbers</h5>
                    <p className="mb-1">
                      <a href="tel:3159052321" className="text-decoration-none text-muted">+91: 9888122442</a>
                    </p>
                     
                  </div>
                </div>

                {/* Contact Card - Hours */}
                <div className="d-flex mb-5">
                  <div className="me-4 text-primary">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="bi bi-clock">
                      <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h5 className="fw-semibold mb-3">Working Hours</h5>
                    {/* <p className="mb-1 text-muted">Monday - Friday: 8 AM - 5 PM</p>
                    <p className="mb-0 text-muted">Saturday - Sunday: 8 AM - 2 PM</p> */}
                  </div>
                </div>

                {/* Contact Card - Email */}
                <div className="d-flex mb-5">
                  <div className="me-4 text-primary">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="bi bi-envelope">
                      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
                    </svg>
                  </div>
                  <div>
                    <h5 className="fw-semibold mb-3">Email Us</h5>
                    <p className="mb-1">
                      <a href="mailto:info@skola.com" className="text-decoration-none text-muted">info@virtual.techcadd.com</a>
                    </p>
                     
                  </div>
                </div>

                {/* Social Links */}
                <div className="d-flex">
                  <div className="me-4 text-primary">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="bi bi-share">
                      <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z"/>
                    </svg>
                  </div>
                  <div>
                    <h5 className="fw-semibold mb-3">Follow Us</h5>
                    <div className="d-flex">
                      <a href="#" className="text-decoration-none me-3 text-muted">
                        <i className="fab fa-facebook-f fa-lg"></i>
                      </a>
                      <a href="#" className="text-decoration-none me-3 text-muted">
                        <i className="fab fa-twitter fa-lg"></i>
                      </a>
                      <a href="#" className="text-decoration-none me-3 text-muted">
                        <i className="fab fa-instagram fa-lg"></i>
                      </a>
                      <a href="#" className="text-decoration-none me-3 text-muted">
                        <i className="fab fa-linkedin-in fa-lg"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Column */}
            <div className="col-lg-7">
              <div className="bg-light p-5 rounded-3 shadow-sm">
                <h2 className="fw-bold mb-4">Have a Question?</h2>
                <p className="text-muted mb-5">Fill out the form below and we'll get back to you as soon as possible.</p>
                
                <form onSubmit={handleSubmit}>
                  <div className="row g-4">
                    <div className="col-md-6">
                      <label htmlFor="name" className="form-label fw-semibold">Your Name</label>
                      <input 
                        type="text" 
                        className="form-control py-3" 
                        id="name" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Enter your name"
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="email" className="form-label fw-semibold">Email Address</label>
                      <input 
                        type="email" 
                        className="form-control py-3" 
                        id="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="contactNo" className="form-label fw-semibold">Contact Number</label>
                      <input 
                        type="text" 
                        className="form-control py-3" 
                        id="contactNo" 
                        name="contactNo"
                        value={formData.contactNo}
                        onChange={handleChange}
                        required
                        placeholder="Your contact number"
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="subject" className="form-label fw-semibold">Subject</label>
                      <input 
                        type="text" 
                        className="form-control py-3" 
                        id="subject" 
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="What's this about?"
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="message" className="form-label fw-semibold">Your Message</label>
                      <textarea 
                        className="form-control py-3" 
                        id="message" 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="5"
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>
                    <div className="col-12">
                      <button 
                        type="submit" 
                        className="btn btn-primary py-3 px-5 fw-semibold"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
 
    </div>
  );
};

export default Contactus;