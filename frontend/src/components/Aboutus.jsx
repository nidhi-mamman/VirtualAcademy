import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function StatsAnimated() {
  const [stats, setStats] = useState({
    learning: 0,
    experts: 0,
    students: 0,
    access: 0
  });
  const [active, setActive] = useState(false);
  const statsRef = React.useRef(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setActive(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );
    if (statsRef.current) {
      observer.observe(statsRef.current);
    }
    return () => {
      if (statsRef.current) observer.unobserve(statsRef.current);
    };
  }, []);

  useEffect(() => {
    if (!active) return;
    const targets = { learning: 100, experts: 50, students: 1000, access: 24 };
    const increments = { learning: 1, experts: 1, students: 10, access: 1 };
    const interval = setInterval(() => {
      setStats(prev => {
        let updated = { ...prev };
        Object.keys(targets).forEach(key => {
          if (prev[key] < targets[key]) {
            updated[key] = Math.min(prev[key] + increments[key], targets[key]);
          }
        });
        return updated;
      });
    }, 30);
    return () => clearInterval(interval);
  }, [active]);

  return (
    <div className="container" ref={statsRef}>
      <div className="row text-center">
        <div className="col-md-3 mb-5 mb-md-0">
          <div className="display-3 fw-bold mb-2">{stats.learning}%</div>
          <p className="text-uppercase text-white-50 mb-0">Personalized Learning</p>
        </div>
        <div className="col-md-3 mb-5 mb-md-0">
          <div className="display-3 fw-bold mb-2">{stats.experts}+</div>
          <p className="text-uppercase text-white-50 mb-0">Industry Experts</p>
        </div>
        <div className="col-md-3 mb-5 mb-md-0">
          <div className="display-3 fw-bold mb-2">{stats.students}+</div>
          <p className="text-uppercase text-white-50 mb-0">Students Trained</p>
        </div>
        <div className="col-md-3">
          <div className="display-3 fw-bold mb-2">{stats.access}/7</div>
          <p className="text-uppercase text-white-50 mb-0">Learning Access</p>
        </div>
      </div>
    </div>
  );
}

const Aboutus = () => {
  return (
    <div className="about-us-page">
      {/* Hero Banner Section with animated SVG background */}
      <section className="position-relative overflow-hidden header-gradient" style={{ color: "#fff", minHeight: "250px", display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
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
        <div className="container">
          <div className="row justify-content-center" style={{ position: 'relative', zIndex: 1 }}>
            <div className="col-lg-10 text-center">
              <h1 className="display-4 fw-bold mb-4 text-white">About TechCadd Virtual Academy</h1>
              <div className="mx-auto mb-4" style={{ width: '80px', height: '4px', background: '#fff' }}></div>
              <p className="lead text-white-50 mb-5 px-lg-5">
                Empowering learners with the skills and knowledge they need to excel in today's technology-driven world
              </p>
              <div className="d-flex justify-content-center gap-3">
                <button className="btn btn-primary btn-lg px-4 rounded-pill">
                  <Link to='/showallcourses' style={{ textDecoration: 'none', color: 'inherit' }}>
                    Explore Courses
                  </Link>
                </button>
                <button className="btn btn-outline-light btn-lg px-4 rounded-pill">
                  <Link to='/team' style={{ textDecoration: 'none', color: 'inherit' }}>
                    Meet Our Team
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-8 py-md-10">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0" data-aos="fade-right" data-aos-duration="400">
              <div className="pe-lg-5">
                <h2 className="fw-bold mb-4">Our Mission</h2>
                <p className="mb-4">
                  At TechCadd Virtual Academy, we believe in empowering learners with the skills and knowledge they need to excel in today's technology-driven world. Our mission is to provide top-quality, personalized education that helps you turn your passion for computer science into a successful and rewarding career.
                </p>
                <p className="mb-4">
                  We offer one-on-one interactive sessions, ensuring that every learner receives dedicated attention and tailored guidance. Our team of highly qualified and industry-experienced mentors are committed to making complex concepts simple, practical, and industry-relevant.
                </p>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <div className="about-mission-img">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
                  alt="Our mission"
                  className="img-fluid rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-8 py-md-10 bg-light">
        <div className="container">
          <div className="row justify-content-center mb-6">
            <div className="col-lg-8 text-center">
              <h2 className="fw-bold mb-3">Comprehensive Course Offerings</h2>
              <p className="lead">
                Covering the entire spectrum of Computer Science to meet all learning needs
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <p className="text-center mb-5">
                From fundamentals of programming to advanced technologies in Artificial Intelligence, Data Science, Cybersecurity, Cloud Computing, Web Development, and more, we cover the entire spectrum of Computer Science courses to meet the needs of beginners, advanced learners, and professionals looking to upgrade their skills.
              </p>
              <div className="row text-center">
                <div className="col-md-4 mb-4">
                  <div className="card h-100 border-0 shadow-sm hover-lift">
                    <div className="card-body p-4">
                      <div className="icon-circle bg-primary-soft text-primary mb-4 mx-auto">
                        <i className="fas fa-robot fa-2x"></i>
                      </div>
                      <h5 className="fw-bold">AI & Machine Learning</h5>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card h-100 border-0 shadow-sm hover-lift">
                    <div className="card-body p-4">
                      <div className="icon-circle bg-primary-soft text-primary mb-4 mx-auto">
                        <i className="fas fa-database fa-2x"></i>
                      </div>
                      <h5 className="fw-bold">Data Science</h5>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card h-100 border-0 shadow-sm hover-lift">
                    <div className="card-body p-4">
                      <div className="icon-circle bg-primary-soft text-primary mb-4 mx-auto">
                        <i className="fas fa-shield-alt fa-2x"></i>
                      </div>
                      <h5 className="fw-bold">Cybersecurity</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Support Section */}
      <section className="py-8 py-md-10">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-2 mb-5 mb-lg-0" data-aos="fade-left" data-aos-duration="400">
              <div className="ps-lg-5">
                <h2 className="fw-bold mb-4">Beyond Education - Career Support</h2>
                <p className="mb-4">
                  At TechCadd Virtual Academy, your journey doesn't end with learning — we provide comprehensive career support, including resume building, interview preparation, portfolio development, and networking opportunities with industry experts, to guide you all the way from classroom to career.
                </p>
                <ul className="list-unstyled">
                  <li className="mb-3 d-flex">
                    <i className="fas fa-check-circle text-primary mt-1 me-3"></i>
                    <span>Professional resume building tailored to tech roles</span>
                  </li>
                  <li className="mb-3 d-flex">
                    <i className="fas fa-check-circle text-primary mt-1 me-3"></i>
                    <span>Mock technical interviews with feedback</span>
                  </li>
                  <li className="mb-3 d-flex">
                    <i className="fas fa-check-circle text-primary mt-1 me-3"></i>
                    <span>Portfolio project guidance</span>
                  </li>
                  <li className="d-flex">
                    <i className="fas fa-check-circle text-primary mt-1 me-3"></i>
                    <span>Industry networking opportunities</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 order-lg-1" data-aos="fade-right" data-aos-duration="400">
              <div className="about-career-img">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
                  alt="Career support"
                  className="img-fluid rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Experience Section */}
      <section className="py-8 py-md-10 bg-light">
        <div className="container">
          <div className="row justify-content-center mb-6">
            <div className="col-lg-8 text-center">
              <h2 className="fw-bold mb-3">Our Learning Experience</h2>
              <p className="lead">
                Flexible, interactive, and designed for real-world success
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <p className="text-center mb-6">
                Our flexible online learning platform allows you to learn at your own pace, from anywhere in the world, without compromising on interaction or quality. With real-world projects, hands-on practice, and continuous mentorship, we ensure you gain not just knowledge, but confidence to apply it.
              </p>
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body p-5">
                      <div className="icon-circle bg-primary text-white mb-4">
                        <i className="fas fa-user-clock fa-2x"></i>
                      </div>
                      <h4 className="fw-bold mb-3">Flexible Learning</h4>
                      <p>
                        Learn at your own pace with 24/7 access to course materials and recorded sessions, while still benefiting from live interactive sessions with mentors.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body p-5">
                      <div className="icon-circle bg-primary text-white mb-4">
                        <i className="fas fa-hands-helping fa-2x"></i>
                      </div>
                      <h4 className="fw-bold mb-3">Hands-on Practice</h4>
                      <p>
                        Work on real-world projects and practical exercises that build the skills employers are looking for in today's tech industry.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Stats Section with hero background and dynamic animation */}
      <section className="py-8 py-md-10 position-relative header-gradient text-white" style={{ overflow: 'hidden' }}>
        <style>{`
          .header-gradient {
            background: linear-gradient(120deg, #73328e 0%, #5a276f 100%);
          }
        `}</style>
        <StatsAnimated />
      </section>

      {/* Professional CTA Section */}
      <section className="py-10 py-md-12 bg-white border-top border-bottom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-xl-7 text-center position-relative">

              <h2 className="display-5 fw-bold mb-4 text-dark position-relative">
                Ready to Transform Your Career?
              </h2>

              <div className="mx-auto mb-5" style={{ width: '100px', height: '2px' }}>
                <div className="w-25 mx-auto bg-primary" style={{ height: '2px' }}></div>
                <div className="w-50 mx-auto bg-primary mt-1" style={{ height: '2px' }}></div>
              </div>

              <p className="lead text-muted mb-6 px-lg-5">
                Join TechCadd Virtual Academy and take the next step toward becoming a confident, career-ready tech professional.
              </p>

              <div className="d-flex flex-column flex-md-row justify-content-center gap-3">
                <button className="btn btn-primary btn-lg px-5 py-3 rounded-0 fw-medium">
                  <i className="fas fa-user-graduate me-2"></i> Enroll Now
                </button>
                <button className="btn btn-outline-dark btn-lg px-5 py-3 rounded-0 fw-medium">
                  <i className="fas fa-info-circle me-2"></i> Request Information
                </button>
              </div>

              <div className="mt-5 text-muted small">
                <i className="fas fa-lock me-1"></i> Secure enrollment process
                <span className="mx-2">•</span>
                <i className="fas fa-calendar-check me-1"></i> Flexible start dates
                <span className="mx-2">•</span>
                <i className="fas fa-headset me-1"></i> 24/7 support
              </div>
            </div>
          </div>
        </div>
      </section>      {/* Global Styles */}
      <style jsx>{`
        .about-hero {
          background: linear-gradient(135deg, #3a7bd5 0%, #00d2ff 100%);
        }
        .icon-circle {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 60px;
          height: 60px;
          border-radius: 50%;
        }
        .hover-lift {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .hover-lift:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
        }
        .rounded-lg {
          border-radius: 1rem !important;
        }
      `}</style>
    </div>
  );
}

export default Aboutus;