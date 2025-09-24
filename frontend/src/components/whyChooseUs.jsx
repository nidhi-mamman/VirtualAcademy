import React from 'react';
import carrer from '../pics/career.png'
import hol from '../pics/hol.png'
import certi from '../pics/certi.png'

const WhyChooseUs = () => {
  return (
    <div className="why-choose-us">
      <section className="py-5 bg-light">
        <div className="container" data-aos="fade-up">
               <div className="row align-items-center mb-5" data-aos="fade-up">
                        <div className="col-md mb-2 mb-md-0 text-center">
                            <h1 className="mb-1">WHY YOU CHOOSE TECHCADD VIRTUAL ACADEMY </h1>
                            {/* <p className="font-size-lg text-capitalize">Discover your perfect program in our courses.</p> */}
                        </div>
                    </div>
          
          {/* First Row - Image Left, Content Right */}
          <div className="row align-items-center gy-4 mb-5">
            <div className="col-lg-6" data-aos="fade-right">
              <div className="image-container" style={{ height: '300px', overflow: 'hidden', borderRadius: '8px' }}>
                <img 
                src={hol}
                   alt="Hands-on Learning" 
                  className="img-fluid h-100 w-100 object-fit-cover"
                  style={{ objectPosition: 'center' }}
                />
              </div>
            </div>
            
            <div className="col-lg-6" data-aos="fade-left">
              <div className="ps-lg-4">
                <h5 className="fw-semibold mb-3">Hands-On Learning in IT</h5>
                <p className="mb-0 text-muted">
Our online IT training institute offers hands-on learning with real-world projects, live workshops, and case studies, helping you build job-ready IT skills and practical industry experience.                 </p>
              </div>
            </div>
          </div>

          {/* Second Row - Content Left, Image Right */}
          <div className="row align-items-center gy-4 mb-5">
            <div className="col-lg-6 order-lg-2" data-aos="fade-left">
              <div className="image-container" style={{ height: '300px', overflow: 'hidden', borderRadius: '8px' }}>
                <img 
                                src={certi}

                   alt="Industry Certifications" 
                  className="img-fluid h-100 w-100 object-fit-cover"
                  style={{ objectPosition: 'center' }}
                />
              </div>
            </div>
            
            <div className="col-lg-6 order-lg-1" data-aos="fade-right">
              <div className="pe-lg-4">
                <h5 className="fw-semibold mb-3">Industry-Recognized Certification Online</h5>
                <p className="mb-0 text-muted">
                  Earn industry-recognized IT certifications online in in-demand technologies like web development, cloud computing, and data analytics to boost career growth and stand out to recruiters.
                 </p>
              </div>
            </div>
          </div>

          {/* Third Row - Image Left, Content Right */}
          <div className="row align-items-center gy-4">
            <div className="col-lg-6" data-aos="fade-right">
              <div className="image-container" style={{ height: '300px', overflow: 'hidden', borderRadius: '8px' }}>
                <img 
                src={carrer}
                  alt="Placement Success" 
                  className="img-fluid h-100 w-100 object-fit-cover"
                  style={{ objectPosition: 'center' }}
                />
              </div>
            </div>
            
            <div className="col-lg-6" data-aos="fade-left">
              <div className="ps-lg-4">
                <h5 className="fw-semibold mb-3">High Placement Success in IT Careers</h5>
                <p className="mb-0 text-muted">
With a high placement success rate, our job-oriented IT courses online prepare you for top roles in leading companies through career guidance, resume support, and interview preparation.                 </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <style jsx>{`
        .why-choose-us .image-container {
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
          transition: transform 0.3s ease;
        }
        .why-choose-us .image-container:hover {
          transform: translateY(-5px);
        }
        .object-fit-cover {
          object-fit: cover;
        }
        @media (max-width: 992px) {
          .why-choose-us .pe-lg-4, 
          .why-choose-us .ps-lg-4 {
            padding-right: 0 !important;
            padding-left: 0 !important;
          }
          .why-choose-us .image-container {
            margin-bottom: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default WhyChooseUs;