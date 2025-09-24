import { useState, useEffect } from 'react';

const Products = () => {
  const [show, setShow] = useState([]);

  useEffect(() => {
    courses();
  }, []);

  const courses = async () => {
    const response = await fetch("http://localhost:9000/showcourse", {
      method: "get",
      headers: {
        "Content-Type": "application/json; charset=UTF-8"
      }
    });
    const data = await response.json();
    if (data.statuscode === 1) {
      setShow(data.data);
    }
  };

  return (
    <div>
      <section
        className="pt-5 pb-9 py-md-11"
        style={{ backgroundColor: '#f8fafc' }}
      >
        <div className="container">
          <div
            className="row align-items-center mb-5"
            data-aos="fade-up"
            style={{ borderBottom: '1px solid #e9ecef', paddingBottom: '12px' }}
          >
            <div className="col-md mb-2 mb-md-0 text-center">
              <h1
                className="mb-1"
                style={{ color: '#1e293b', fontWeight: 700, letterSpacing: '0.3px' }}
              >
                Featured Courses
              </h1>
              <p
                className="font-size-lg text-capitalize"
                style={{ color: '#64748b', marginBottom: 0 }}
              >
                Discover your perfect program in our courses.
              </p>
            </div>
          </div>

          {/* Grid layout with fixed image dimensions and proper gaps */}
          <div className="row g-4">
            {show.map((course, index) => (
              <div
                key={index}
                className="col-12 col-md-6 col-lg-4"
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                <div
                  className="card border-0 shadow-sm h-100 overflow-hidden"
                  style={{
                    borderRadius: '12px',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
                    backgroundColor: '#ffffff'
                  }}
                >
                  {/* Image container with fixed aspect ratio (16:9) */}
                  <div
                    className="ratio ratio-16x9 bg-light"
                    style={{
                      borderTopLeftRadius: '12px',
                      borderTopRightRadius: '12px'
                    }}
                  >
                    <img
                      className="img-fluid"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      src={`/uploads/${course.image}`}
                      alt={course.course}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src =
                          'https://via.placeholder.com/400x225?text=Course+Image';
                      }}
                    />
                  </div>

                  {/* Content area */}
                  <div
                    className="card-body p-3 p-md-4 d-flex flex-column"
                    style={{ gap: '6px' }}
                  >
                    <h3
                      className="h5 fw-bold mb-2 text-center text-truncate"
                      style={{ color: '#0f172a', lineHeight: 1.3 }}
                      title={course.course}
                    >
                      {course.course}
                    </h3>

                    <p
                      className="text-muted small mb-3 text-center"
                      style={{
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        minHeight: '3rem',
                        lineHeight: 1.5,
                        color: '#6b7280',
                        marginBottom: 0
                      }}
                      title={course.description}
                    >
                      {course.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Subtle empty state */}
          {show.length === 0 && (
            <div
              className="text-center mt-4"
              style={{
                color: '#94a3b8',
                border: '1px dashed #cbd5e1',
                borderRadius: '12px',
                padding: '32px',
                backgroundColor: '#ffffff'
              }}
            >
              No courses to display.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Products;
