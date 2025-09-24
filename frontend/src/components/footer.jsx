const Footer = () => {
    return (
        <div>
            <footer className="pt-8 pt-md-11 bg-dark"> {/* Changed background to dark */}
                <div className="container">
                    <div className="row" id="accordionFooter">
                        <div className="col-12 col-md-4 col-lg-4" style={{width:"280px"}}>

           
            <img src="assets/img/logo/image.png" className="navbar-brand-img" alt="..." />
                             {/* <!-- Text --> */}
                            <p className="text-white mb-4 font-size-sm-alone"> {/* Changed text to white */}
                                329 Queensberry Street, North Melbourne VIC 3051, Australia.
                            </p>

                            <div className="mb-4">
                                <a href="tel:1234567890" className="text-white font-size-sm-alone">123 456 7890</a> {/* Changed text to white */}
                            </div>

                            <div className="mb-4">
                                <a href="mailto:support@skola.com"
                                    className="text-white font-size-sm-alone">support@skola.com</a> {/* Changed text to white */}
                            </div>

                            {/* <!-- Social --> */}
                            <ul className="list-unstyled list-inline list-social mb-4 mb-md-0">
                                <li className="list-inline-item list-social-item">
                                    <a href="#"
                                        className="text-white font-size-sm w-36 h-36 shadow-dark-hover d-flex align-items-center justify-content-center rounded-circle border-hover">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item list-social-item">
                                    <a href="#"
                                        className="text-white font-size-sm w-36 h-36 shadow-dark-hover d-flex align-items-center justify-content-center rounded-circle border-hover">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item list-social-item">
                                    <a href="#"
                                        className="text-white font-size-sm w-36 h-36 shadow-dark-hover d-flex align-items-center justify-content-center rounded-circle border-hover">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item list-social-item">
                                    <a href="#"
                                        className="text-white font-size-sm w-36 h-36 shadow-dark-hover d-flex align-items-center justify-content-center rounded-circle border-hover">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-12 col-md-4 col-lg-2">
                            <div className="mb-5 mb-xl-0 footer-accordion">

                                {/* <!-- Heading --> */}
                                <div id="widgetOne">
                                    <h5 className="mb-5">
                                        <button className="text-white fw-medium footer-accordion-toggle d-flex align-items-center"
                                            type="button" data-bs-toggle="collapse" data-bs-target="#widgetcollapseOne"
                                            aria-expanded="true" aria-controls="widgetcollapseOne">
                                            Our Company
                                            <span className="ms-auto text-white">
                                                {/* <!-- Icon --> */}
                                                <svg width="15" height="2" viewBox="0 0 15 2" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <rect width="15" height="2" fill="currentColor" />
                                                </svg>

                                                <svg width="15" height="16" viewBox="0 0 15 16" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0 7H15V9H0V7Z" fill="currentColor" />
                                                    <path d="M6 16L6 8.74228e-08L8 0L8 16H6Z" fill="currentColor" />
                                                </svg>

                                            </span>
                                        </button>
                                    </h5>
                                </div>

                                <div id="widgetcollapseOne" className="collapse show" aria-labelledby="widgetOne"
                                    data-parent="#accordionFooter">
                                    {/* <!-- List --> */}
                                    <ul className="list-unstyled text-white font-size-sm-alone mb-6 mb-md-8 mb-lg-0"> {/* Changed text to white */}
                                        <li className="mb-3">
                                            <a href="about-v1.html" className="text-white"> {/* Changed text to white */}
                                                Our Company
                                            </a>
                                        </li>
                                        <li className="mb-3">
                                            <a href="about-v2.html" className="text-white"> {/* Changed text to white */}
                                                About Us
                                            </a>
                                        </li>
                                        <li className="mb-3">
                                            <a href="contact-us.html" className="text-white"> {/* Changed text to white */}
                                                Contact Us
                                            </a>
                                        </li>
                                        <li className="mb-3">
                                            <a href="contact-us.html" className="text-white"> {/* Changed text to white */}
                                                Community
                                            </a>
                                        </li>
                                        <li className="mb-3">
                                            <a href="course-list-v1.html" className="text-white"> {/* Changed text to white */}
                                                Student Perks
                                            </a>
                                        </li>
                                        <li className="mb-3">
                                            <a href="blog-grid-v1.html" className="text-white"> {/* Changed text to white */}
                                                Blog
                                            </a>
                                        </li>
                                        <li className="mb-3">
                                            <a href="pricing.html" className="text-white"> {/* Changed text to white */}
                                                Affiliate Program
                                            </a>
                                        </li>
                                        <li className="mb-3">
                                            <a href="contact-us.html" className="text-white"> {/* Changed text to white */}
                                                Careers
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-4 col-lg-2">
                            <div className="mb-5 mb-xl-0 ms-xl-6 footer-accordion">

                                {/* <!-- Heading --> */}
                                <div id="widgetTwo">
                                    <h5 className="mb-5">
                                        <button className="text-white fw-medium footer-accordion-toggle d-flex align-items-center"
                                            type="button" data-bs-toggle="collapse" data-bs-target="#widgetcollapseTwo"
                                            aria-expanded="false" aria-controls="widgetcollapseTwo">
                                            Topics
                                            <span className="ms-auto text-white">
                                                {/* <!-- Icon --> */}
                                                <svg width="15" height="2" viewBox="0 0 15 2" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <rect width="15" height="2" fill="currentColor" />
                                                </svg>

                                                <svg width="15" height="16" viewBox="0 0 15 16" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0 7H15V9H0V7Z" fill="currentColor" />
                                                    <path d="M6 16L6 8.74228e-08L8 0L8 16H6Z" fill="currentColor" />
                                                </svg>

                                            </span>
                                        </button>
                                    </h5>
                                </div>

                                <div id="widgetcollapseTwo" className="collapse" aria-labelledby="widgetTwo"
                                    data-parent="#accordionFooter">
                                    {/* <!-- List --> */}
                                    <ul className="list-unstyled text-white font-size-sm-alone mb-6 mb-md-8 mb-lg-0"> {/* Changed text to white */}
                                        <li className="mb-3">
                                            <a href="course-list-v2.html" className="text-white"> {/* Changed text to white */}
                                                HTML
                                            </a>
                                        </li>
                                        <li className="mb-3">
                                            <a href="course-list-v2.html" className="text-white"> {/* Changed text to white */}
                                                CSS
                                            </a>
                                        </li>
                                        <li className="mb-3">
                                            <a href="course-list-v6.html" className="text-white"> {/* Changed text to white */}
                                                Design
                                            </a>
                                        </li>
                                        <li className="mb-3">
                                            <a href="course-list-v5.html" className="text-white"> {/* Changed text to white */}
                                                JavaScript
                                            </a>
                                        </li>
                                        <li className="mb-3">
                                            <a href="course-list-v4.html" className="text-white"> {/* Changed text to white */}
                                                Ruby
                                            </a>
                                        </li>
                                        <li className="mb-3">
                                            <a href="course-list-v1.html" className="text-white"> {/* Changed text to white */}
                                                PHP
                                            </a>
                                        </li>
                                        <li className="mb-3">
                                            <a href="course-list-v3.html" className="text-white"> {/* Changed text to white */}
                                                Android
                                            </a>
                                        </li>
                                        <li className="mb-3">
                                            <a href="course-list-v4.html" className="text-white"> {/* Changed text to white */}
                                                Development Tools
                                            </a>
                                        </li>
                                        <li className="mb-3">
                                            <a href="course-list-v6.html" className="text-white"> {/* Changed text to white */}
                                                Business
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-4 offset-md-4 col-lg-2 offset-lg-0">
                            <div className="mb-5 mb-xl-0 ms-xl-6 footer-accordion">

                                {/* <!-- Heading --> */}
                                <div id="widgetThree">
                                    <h5 className="mb-5">
                                        <button className="text-white fw-medium footer-accordion-toggle d-flex align-items-center"
                                            type="button" data-bs-toggle="collapse" data-bs-target="#widgetcollapseThree"
                                            aria-expanded="false" aria-controls="widgetcollapseThree">
                                            Tracks
                                            <span className="ms-auto text-white">
                                                {/* <!-- Icon --> */}
                                                <svg width="15" height="2" viewBox="0 0 15 2" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <rect width="15" height="2" fill="currentColor" />
                                                </svg>

                                                <svg width="15" height="16" viewBox="0 0 15 16" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0 7H15V9H0V7Z" fill="currentColor" />
                                                    <path d="M6 16L6 8.74228e-08L8 0L8 16H6Z" fill="currentColor" />
                                                </svg>

                                            </span>
                                        </button>
                                    </h5>
                                </div>

                                <div id="widgetcollapseThree" className="collapse" aria-labelledby="widgetThree"
                                    data-parent="#accordionFooter">
                                    {/* <!-- List --> */}
                                    <ul className="list-unstyled text-white font-size-sm-alone mb-0"> {/* Changed text to white */}
                                        <li className="mb-3">
                                            <a href="lesson-single-v1.html" className="text-white"> {/* Changed text to white */}
                                                Web Design
                                            </a>
                                        </li>
                                        <li className="mb-3">
                                            <a href="lesson-single-v2.html" className="text-white"> {/* Changed text to white */}
                                                Web Development
                                            </a>
                                        </li>
                                        <li className="mb-3">
                                            <a href="lesson-single-v1.html" className="text-white"> {/* Changed text to white */}
                                                Rails Development
                                            </a>
                                        </li>
                                        <li className="mb-3">
                                            <a href="lesson-single-v2.html" className="text-white"> {/* Changed text to white */}
                                                PHP Development
                                            </a>
                                        </li>
                                        <li className="mb-3">
                                            <a href="lesson-single-v1.html" className="text-white"> {/* Changed text to white */}
                                                Android Development
                                            </a>
                                        </li>
                                        <li className="mb-3">
                                            <a href="lesson-single-v2.html" className="text-white"> {/* Changed text to white */}
                                                Starting a Business
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-4 col-lg-2 d-xl-flex">
                            <div className="mb-5 mb-xl-0 ms-xl-auto footer-accordion">

                                {/* <!-- Heading --> */}
                                <div id="widgetFour">
                                    <h5 className="mb-5">
                                        <button className="text-white fw-medium footer-accordion-toggle d-flex align-items-center"
                                            type="button" data-bs-toggle="collapse" data-bs-target="#widgetcollapseFour"
                                            aria-expanded="false" aria-controls="widgetcollapseFour">
                                            Support
                                            <span className="ms-auto text-white">
                                                {/* <!-- Icon --> */}
                                                <svg width="15" height="2" viewBox="0 0 15 2" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <rect width="15" height="2" fill="currentColor" />
                                                </svg>

                                                <svg width="15" height="16" viewBox="0 0 15 16" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0 7H15V9H0V7Z" fill="currentColor" />
                                                    <path d="M6 16L6 8.74228e-08L8 0L8 16H6Z" fill="currentColor" />
                                                </svg>

                                            </span>
                                        </button>
                                    </h5>
                                </div>

                                <div id="widgetcollapseFour" className="collapse" aria-labelledby="widgetFour"
                                    data-parent="#accordionFooter">
                                    {/* <!-- List --> */}
                                    <ul className="list-unstyled text-white font-size-sm-alone mb-0"> {/* Changed text to white */}
                                        <li className="mb-3">
                                            <a href="docs/index.html" className="text-white"> {/* Changed text to white */}
                                                Documentation
                                            </a>
                                        </li>
                                        <li className="mb-3">
                                            <a href="docs/index.html" className="text-white"> {/* Changed text to white */}
                                                Forums
                                            </a>
                                        </li>
                                        <li className="mb-3">
                                            <a href="docs/index.html" className="text-white"> {/* Changed text to white */}
                                                Language Packs
                                            </a>
                                        </li>
                                        <li className="mb-3">
                                            <a href="docs/changelog.html" className="text-white"> {/* Changed text to white */}
                                                Release Status
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer