import React from 'react'

const Categories = () => {
    return (
        <div>
            <style>{`
                .icon-category {
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                }
                .icon-category > .position-relative {
                    flex: 1;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .icon-h-p {
                    color: #4e54c8;
                    font-size: 2.5rem;
                    z-index: 2;
                }
            `}</style>
            
            <section className="py-5 py-md-11 bg-white"   style={{ backgroundImage: "linear-gradient(#021028 0%, #6d2f9a 100%)" }}
>
                <div className="container">
                    <div className="row align-items-end mb-md-7 mb-4" data-aos="fade-up">
                        <div className="col-md mb-4 mb-md-0 text-center text-white">
                            <h1 className="mb-1 text-white">We have designed a flexible program for you</h1>
                            <p className="font-size-lg mb-0 text-capitalize">Cum doctus civibus efficiantur in imperdiet
                                deterruisset.</p>
                        </div>
                    </div>

<div className="row row-cols-2 row-cols-lg-3 row-cols-xl-3 justify-content-center">
                        <div className="col mb-md-6 mb-4 px-2 px-md-4 " data-aos="fade-up" data-aos-delay="50" >
                            <a href="course-list-v3.html"
                                className="card icon-category border shadow-dark p-md-5 p-3 text-center lift">
                                <div className="position-relative text-light " >
                                    <div className="position-absolute bottom-0 right-0 left-0 icon-h-p">
                                        <i className="fas fa-bezier-curve"></i>
                                    </div>
                                    <svg width="116" height="82" viewBox="0 0 116 82" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M11.9238 65.8391C11.9238 65.8391 20.4749 72.4177 35.0465 70.036C49.6182 67.6542 75.9897 78.4406 75.9897 78.4406C75.9897 78.4406 90.002 85.8843 104.047 79.2427C118.093 72.6012 115.872 58.8253 115.872 58.8253C115.743 56.8104 115.606 46.9466 97.5579 22.0066C91.0438 13.0024 84.1597 6.97958 75.9458 3.74641C58.8245 -2.99096 37.7881 -0.447684 22.9067 9.81852C15.5647 14.8832 7.65514 22.0695 3.0465 31.5007C-7.27017 52.6135 11.9238 65.8391 11.9238 65.8391Z"
                                            fill="currentColor" fillOpacity="0.1" />
                                    </svg>
                                </div>
                                <div className="card-footer px-0 pb-0 pt-6" style={{ whiteSpace: 'normal' }}>
                                    <h5 className="mb-0">Live classes</h5>
                                    <p className="mb-0">Anytime you can ask query regarding your session.</p>
                                </div>
                            </a>
                        </div>

                        <div className="col mb-md-6 mb-4 px-2 px-md-4" data-aos="fade-up" data-aos-delay="100">
                            <a href="course-list-v3.html"
                                className="card icon-category border shadow-dark p-md-5 p-3 text-center lift">
                                <div className="position-relative text-light">
                                    <div className="position-absolute bottom-0 right-0 left-0 icon-h-p">
                                        <i className="fas fa-briefcase"></i>
                                    </div>
                                    <svg width="116" height="82" viewBox="0 0 116 82" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M11.9238 65.8391C11.9238 65.8391 20.4749 72.4177 35.0465 70.036C49.6182 67.6542 75.9897 78.4406 75.9897 78.4406C75.9897 78.4406 90.002 85.8843 104.047 79.2427C118.093 72.6012 115.872 58.8253 115.872 58.8253C115.743 56.8104 115.606 46.9466 97.5579 22.0066C91.0438 13.0024 84.1597 6.97958 75.9458 3.74641C58.8245 -2.99096 37.7881 -0.447684 22.9067 9.81852C15.5647 14.8832 7.65514 22.0695 3.0465 31.5007C-7.27017 52.6135 11.9238 65.8391 11.9238 65.8391Z"
                                            fill="currentColor" fillOpacity="0.1" />
                                    </svg>
                                </div>
                                <div className="card-footer px-0 pb-0 pt-6" style={{ whiteSpace: 'normal' }}>
                                    <h5 className="mb-0">One on one sessions</h5>
                                    <p className="mb-0">There are only you and your mentor in the session.</p>
                                </div>
                            </a>
                        </div>

                        <div className="col mb-md-6 mb-4 px-2 px-md-4" data-aos="fade-up" data-aos-delay="150">
                            <a href="course-list-v3.html"
                                className="card icon-category border shadow-dark p-md-5 p-3 text-center lift">
                                <div className="position-relative text-light">
                                    <div className="position-absolute bottom-0 right-0 left-0 icon-h-p">
                                        <i className="fas fa-laptop-code"></i>
                                    </div>
                                    <svg width="116" height="82" viewBox="0 0 116 82" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M11.9238 65.8391C11.9238 65.8391 20.4749 72.4177 35.0465 70.036C49.6182 67.6542 75.9897 78.4406 75.9897 78.4406C75.9897 78.4406 90.002 85.8843 104.047 79.2427C118.093 72.6012 115.872 58.8253 115.872 58.8253C115.743 56.8104 115.606 46.9466 97.5579 22.0066C91.0438 13.0024 84.1597 6.97958 75.9458 3.74641C58.8245 -2.99096 37.7881 -0.447684 22.9067 9.81852C15.5647 14.8832 7.65514 22.0695 3.0465 31.5007C-7.27017 52.6135 11.9238 65.8391 11.9238 65.8391Z"
                                            fill="currentColor" fillOpacity="0.1" />
                                    </svg>
                                </div>
                                <div className="card-footer px-0 pb-0 pt-6" style={{ whiteSpace: 'normal' }}>
                                    <h5 className="mb-0">Job and class timing clash?</h5>
                                    <p className="mb-0">Schedule your time according to your preference with your concerned mentor.</p>
                                </div>
                            </a>
                        </div>

                        <div className="col mb-md-6 mb-4 px-2 px-md-4" data-aos="fade-up" data-aos-delay="200">
                            <a href="course-list-v3.html"
                                className="card icon-category border shadow-dark p-md-5 p-3 text-center lift">
                                <div className="position-relative text-light">
                                    <div className="position-absolute bottom-0 right-0 left-0 icon-h-p">
                                        <i className="far fa-file-alt"></i>
                                    </div>
                                    <svg width="116" height="82" viewBox="0 0 116 82" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M11.9238 65.8391C11.9238 65.8391 20.4749 72.4177 35.0465 70.036C49.6182 67.6542 75.9897 78.4406 75.9897 78.4406C75.9897 78.4406 90.002 85.8843 104.047 79.2427C118.093 72.6012 115.872 58.8253 115.872 58.8253C115.743 56.8104 115.606 46.9466 97.5579 22.0066C91.0438 13.0024 84.1597 6.97958 75.9458 3.74641C58.8245 -2.99096 37.7881 -0.447684 22.9067 9.81852C15.5647 14.8832 7.65514 22.0695 3.0465 31.5007C-7.27017 52.6135 11.9238 65.8391 11.9238 65.8391Z"
                                            fill="currentColor" fillOpacity="0.1" />
                                    </svg>
                                </div>
                                <div className="card-footer px-0 pb-0 pt-6" style={{ whiteSpace: 'normal' }}>
                                    <h5 className="mb-0">Tech support</h5>
                                    <p className="mb-0">Troubleshooting assistance readily available and don’t hesitate to ask.</p>
                                </div>
                            </a>
                        </div>

                        <div className="col mb-md-6 mb-4 px-2 px-md-4" data-aos="fade-up" data-aos-delay="250" >
                            <a href="course-list-v3.html"
                                className="card icon-category border shadow-dark p-md-5 p-3 text-center lift ">
                                <div className="position-relative text-light">
                                    <div className="position-absolute bottom-0 right-0 left-0 icon-h-p">
                                        <i className="fas fa-camera"></i>
                                    </div>
                                    <svg width="116" height="82" viewBox="0 0 116 82" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M11.9238 65.8391C11.9238 65.8391 20.4749 72.4177 35.0465 70.036C49.6182 67.6542 75.9897 78.4406 75.9897 78.4406C75.9897 78.4406 90.002 85.8843 104.047 79.2427C118.093 72.6012 115.872 58.8253 115.872 58.8253C115.743 56.8104 115.606 46.9466 97.5579 22.0066C91.0438 13.0024 84.1597 6.97958 75.9458 3.74641C58.8245 -2.99096 37.7881 -0.447684 22.9067 9.81852C15.5647 14.8832 7.65514 22.0695 3.0465 31.5007C-7.27017 52.6135 11.9238 65.8391 11.9238 65.8391Z"
                                            fill="currentColor" fillOpacity="0.1" />
                                    </svg>
                                </div>
                                <div className="card-footer px-0 pb-0 pt-6" style={{ whiteSpace: 'normal' }}>
                                    <h5 className="mb-0">Hands on experience</h5>
                                    <p className="mb-0">Our mentors will provide you assignments and projects related to your course.</p>
                                </div>
                            </a>
                        </div>

                        {/* <div className="col mb-md-6 mb-4 px-2 px-md-4" data-aos="fade-up" data-aos-delay="300">
                            <a href="course-list-v3.html"
                                className="card icon-category border shadow-dark p-md-5 p-3 text-center lift">
                                <div className="position-relative text-light">
                                    <div className="position-absolute bottom-0 right-0 left-0 icon-h-p">
                                        <i className="fas fa-music"></i>
                                    </div>
                                    <svg width="116" height="82" viewBox="0 0 116 82" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M11.9238 65.8391C11.9238 65.8391 20.4749 72.4177 35.0465 70.036C49.6182 67.6542 75.9897 78.4406 75.9897 78.4406C75.9897 78.4406 90.002 85.8843 104.047 79.2427C118.093 72.6012 115.872 58.8253 115.872 58.8253C115.743 56.8104 115.606 46.9466 97.5579 22.0066C91.0438 13.0024 84.1597 6.97958 75.9458 3.74641C58.8245 -2.99096 37.7881 -0.447684 22.9067 9.81852C15.5647 14.8832 7.65514 22.0695 3.0465 31.5007C-7.27017 52.6135 11.9238 65.8391 11.9238 65.8391Z"
                                            fill="currentColor" fillOpacity="0.1" />
                                    </svg>
                                </div>
                                <div className="card-footer px-0 pb-0 pt-6" style={{ whiteSpace: 'normal' }}>
                                    <h5 className="mb-0">Progress tracking</h5>
                                    <p className="mb-0">Your can track your course journey through course map.</p>
                                </div>
                            </a>
                        </div> */}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Categories