import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Showallcourses = () => {
  const [show, setShow] = useState([]);

  useEffect(() => {
    courses();
  }, []);

  const courses = async () => {
    const response = await fetch("http://localhost:9000/showallcourse", {
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

  const navigate = useNavigate();
  return (
    <div>
      <section className="pb-9 py-md-8">
        <div className="container" style={{paddingTop:'150px'}}>
          <div className="row align-items-center mb-5" data-aos="fade-up">
            <div className="col-md mb-2 mb-md-0 text-center">
              <h1 className="mb-1">Featured Courses</h1>
              <p className="font-size-lg text-capitalize">Discover your perfect program in our courses.</p>
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
                <div className="card border-0 shadow-sm h-100 overflow-hidden position-relative d-flex flex-column">
                  {/* Image container with fixed aspect ratio (16:9) */}
                  <div className="ratio ratio-16x9 bg-light">
                    <img 
                      className="img-fluid object-fit-cover"
                      src={`/uploads/${course.image}`} 
                      alt={course.course}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://via.placeholder.com/400x225?text=Course+Image';
                      }}
                    />
                  </div>
                  
                  {/* Content area */}
                  <div className="card-body p-3 p-md-4 d-flex flex-column" style={{paddingBottom: '72px'}}>
                    <h3 className="h5 fw-bold mb-2 text-center text-truncate">   
                      {course.course}
                    </h3>
                    <p className="text-muted small mb-3 pb-4 text-center line-clamp-2">  
                      {course.description}
                    </p>
                  </div>
                  <button 
                    className="btn btn-sm w-100"
                    style={{
                      background: 'linear-gradient(120deg, #73328e 0%, #5a276f 100%)',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '0 0 0.5rem 0.5rem',
                      position: 'absolute',
                      left: 0,
                      right: 0,
                      bottom: 0,
                      zIndex: 2
                    }}
                    onClick={() => navigate(`/details/${course._id}`)}
                  >
                    Course Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Showallcourses;