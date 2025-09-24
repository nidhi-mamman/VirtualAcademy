import React from 'react'

const Testimonials = () => {
    return (
        <div>
            <section class="pt-5 pt-md-11 pb-9">
                <div class="container">
                    <div class="text-center mb-2" data-aos="fade-up">
                        <h1 class="mb-1">What our students have to say</h1>
                        <p class="font-size-lg text-capitalize mb-0">Discover your perfect program in our courses.</p>
                    </div>

                    <div class="row mx-n4">
                        <div class="col-12 col-md-6 col-xl-4 py-md-7 py-3" data-aos="fade-up" data-aos-delay="50"
                            style={{ paddingRight: "15px", paddingLeft: "15px" }}>
                            {/* <!-- Card --> */}
                            <div class="card border shadow p-6 lift-md">
                                {/* <!-- Image --> */}
                                <div class="card-zoom">
                                    <div class="d-flex align-items-center">
                                        <div class="avatar avatar-custom me-5">
                                            <img src="assets/img/avatars/avatar-1.jpg" alt="..."
                                                class="avatar-img rounded-circle" />
                                        </div>
                                        <div class="media-body">
                                            <h5 class="mb-0">Albert Cole</h5>
                                            <span>Designer</span>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Footer --> */}
                                <div class="card-footer px-0 pb-0">
                                    <p class="mb-0 text-capitalize">“ I believe in lifelong learning and Skola is a great place
                                        to learn from experts. I've learned a lot and recommend it to all my friends “</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-md-6 col-xl-4 py-md-7 py-3" data-aos="fade-up" data-aos-delay="100"
                            style={{ paddingRight: "15px", paddingLeft: "15px" }}>
                            {/* <!-- Card --> */}
                            <div class="card border shadow p-6 lift-md">
                                {/* <!-- Image --> */}
                                <div class="card-zoom">
                                    <div class="d-flex align-items-center">
                                        <div class="avatar avatar-custom me-5">
                                            <img src="assets/img/avatars/avatar-2.jpg" alt="..."
                                                class="avatar-img rounded-circle" />
                                        </div>
                                        <div class="media-body">
                                            <h5 class="mb-0">Alison Dawn</h5>
                                            <span>WordPress Developer</span>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Footer --> */}
                                <div class="card-footer px-0 pb-0">
                                    <p class="mb-0 text-capitalize">“ I believe in lifelong learning and Skola is a great place
                                        to learn from experts. I've learned a lot and recommend it to all my friends “</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-md-6 col-xl-4 py-md-7 py-3" data-aos="fade-up" data-aos-delay="150"
                            style={{ paddingRight: "15px", paddingLeft: "15px" }}>
                            {/* <!-- Card --> */}
                            <div class="card border shadow p-6 lift-md">
                                {/* <!-- Image --> */}
                                <div class="card-zoom">
                                    <div class="d-flex align-items-center">
                                        <div class="avatar avatar-custom me-5">
                                            <img src="assets/img/avatars/avatar-3.jpg" alt="..."
                                                class="avatar-img rounded-circle" />
                                        </div>
                                        <div class="media-body">
                                            <h5 class="mb-0">Daniel Parker</h5>
                                            <span>Front-end Developer</span>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Footer --> */}
                                <div class="card-footer px-0 pb-0">
                                    <p class="mb-0 text-capitalize">“ I believe in lifelong learning and Skola is a great place
                                        to learn from experts. I've learned a lot and recommend it to all my friends “</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonials