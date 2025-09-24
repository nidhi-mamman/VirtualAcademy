import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import StarRating from './Rating';
const SingleCourse = () => {
    const { id } = useParams();
    const [course, setCourse] = useState(null);
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [rating, setRating] = useState(0);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        if (id) {
            fetch(`http://localhost:9000/course/${id}`)
                .then(res => res.json())
                .then(data => {
                    if (data.statuscode === 1) setCourse(data.data);
                });
        }
    }, [id]);
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccess("");
        setError("");

        const userId = localStorage.getItem("userId");

        if (!userId) {
            setError("❌ Please login to submit a review.");
            setLoading(false);
            return;
        }

        try {
            const response = await fetch("http://localhost:9000/reviews", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    courseId: id,
                    userId, 
                    fname: fullName,
                    email,
                    reviewText: message,
                    rating,
                }),
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error || "Failed to submit review");
            }

            setSuccess("✅ Review submitted successfully!");
            setTimeout(() => {
                setSuccess("");
            }, 3000);

            // Reset form
            setFullName("");
            setEmail("");
            setMessage("");
            setRating(0);
        } catch (err) {
            setError(`❌ ${err.message}`);
            setTimeout(() => {
                setError("");
            }, 3000);
        } finally {
            setLoading(false);
        }
    };



    if (!course) return <div className="container py-5 text-center">Loading course details...</div>;
    return (
        <>
            <section id="ed-breadcrumb2" className="ed-breadcrumb2-sec">
                <div className="ed-breadcrumb-content2 position-relative" style={{ backgroundImage: `url(/uploads/${course.background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className="container">
                        <div className="ed-breadcrumb-text2  headline ul-li">
                            <div className="ed-back-btn">
                                <a href="/showallcourses"><i className="fa-solid fa-chevron-left"></i> Back to Course Page</a>
                            </div>
                            <h2 className="bread_title">{course.course || 'Untitled Course'}</h2>
                            <ul>
                                <li><i className="fa-regular fa-user"> </i>{course.instructor || 'Instructor not specified'}</li>
                                <li><i className="fa-solid fa-calendar-days"> </i>{course.date || 'Full Time Access'}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section id="ed-course-detail" className="ed-course-detail-sec pt-80 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">

                            <div className="ed-course-detail-text">
                                <div className="ed-cr-de-btn tx-tab-btn ul-li mb-50">
                                    <ul className="nav nav-tabs" id="mt-about-tab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="ft_tab_1" data-bs-toggle="tab" data-bs-target="#ft_1_1" type="button" role="tab" aria-controls="ft_1_1" aria-selected="false">
                                                Overview
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active" id="ft_tab_4" data-bs-toggle="tab" data-bs-target="#ft_1_4" type="button" role="tab" aria-controls="ft_1_4" aria-selected="true">
                                                Reviews
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                                <div className="ed-tab-course-detail">
                                    <div className="tab-content" id="myTabContent">
                                        <div className="tab-pane  animated fadeInUp" id="ft_1_1" role="tabpanel">
                                            <div className="ed-crd-overview headline pera-content ul-li-block">
                                                <div className="ed-crd-text-wrap">
                                                    <h3>Course Description</h3>
                                                    <p>{course.description || 'No description available.'}</p>
                                                    <h3>What You’ll Learn From This Course</h3>
                                                    <ul>
                                                        {course.learn
                                                            ? Array.isArray(course.learn)
                                                                ? course.learn.map((item, idx) => (
                                                                    <li key={idx}>{item}</li>
                                                                ))
                                                                : typeof course.learn === 'string' && course.learn.trim() !== ''
                                                                    ? course.learn.split(/✅/).filter(Boolean).map((item, idx) => (
                                                                        <li key={idx}>{item.trim()}</li>
                                                                    ))
                                                                    : <li>No learning outcomes provided.</li>
                                                            : <li>No learning outcomes provided.</li>
                                                        }
                                                    </ul>
                                                    {course.outcomes && (
                                                        <>
                                                            <h3>Outcomes</h3>
                                                            <ul>
                                                                {Array.isArray(course.outcomes)
                                                                    ? course.outcomes.map((outcome, idx) => (
                                                                        <li key={idx}>{outcome}</li>
                                                                    ))
                                                                    : typeof course.outcomes === 'string' && course.outcomes.trim() !== ''
                                                                        ? course.outcomes.split(/\r?\n|\.|\!/).filter(Boolean).map((outcome, idx) => (
                                                                            <li key={idx}>{outcome.trim()}</li>
                                                                        ))
                                                                        : <li>No outcomes provided.</li>
                                                                }
                                                            </ul>
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane show active animated fadeInUp" id="ft_1_4" role="tabpanel">
                                            <div className="ed-crd-reviews headline pera-content ul-li-block">
                                                <div className="ed-crd-text-wrap">
                                                    <h3>Course Reviews</h3>
                                                    <div class="ed-crd-reviews-wrap mt-10">
                                                        <div class="gt-review-guest-ratting mb-20 d-flex flex-wrap align-items-center justify-content-between">
                                                            <div class="gt-review-number pera-content text-center ul-li">
                                                                <span>5.0</span>
                                                                <ul>
                                                                    <li><i class="fas fa-star"></i></li>
                                                                    <li><i class="fas fa-star"></i></li>
                                                                    <li><i class="fas fa-star"></i></li>
                                                                    <li><i class="fas fa-star"></i></li>
                                                                    <li><i class="fas fa-star"></i></li>
                                                                </ul>
                                                                <p>Average of <span>4.6</span> reviews</p>
                                                            </div>
                                                            <div class="gt-review-progress">
                                                                <div class="review-progress-wrap">
                                                                    <div class="review-bar-text d-flex justify-content-between">
                                                                        <b><i class="fas fa-star"></i> 5</b>
                                                                        <span>150</span>
                                                                    </div>
                                                                    <div class="review-bar-progrss">
                                                                        <div class="progress-bar">
                                                                            <div class="progress" style={{ width: "80%" }}></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="review-progress-wrap">
                                                                    <div class="review-bar-text d-flex justify-content-between">
                                                                        <b><i class="fas fa-star"></i> 4</b>
                                                                        <span>40</span>
                                                                    </div>
                                                                    <div class="review-bar-progrss">
                                                                        <div class="progress-bar">
                                                                            <div class="progress" style={{ width: "50%" }}></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="review-progress-wrap">
                                                                    <div class="review-bar-text d-flex justify-content-between">
                                                                        <b><i class="fas fa-star"></i> 3</b>
                                                                        <span>20</span>
                                                                    </div>
                                                                    <div class="review-bar-progrss">
                                                                        <div class="progress-bar">
                                                                            <div class="progress" style={{ width: "30%" }}></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="review-progress-wrap">
                                                                    <div class="review-bar-text d-flex justify-content-between">
                                                                        <b><i class="fas fa-star"></i> 2</b>
                                                                        <span>8</span>
                                                                    </div>
                                                                    <div class="review-bar-progrss">
                                                                        <div class="progress-bar">
                                                                            <div class="progress" style={{ width: "15%" }}></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="review-progress-wrap">
                                                                    <div class="review-bar-text d-flex justify-content-between">
                                                                        <b><i class="fas fa-star"></i> 1</b>
                                                                        <span>2</span>
                                                                    </div>
                                                                    <div class="review-bar-progrss">
                                                                        <div class="progress-bar">
                                                                            <div class="progress" style={{ width: "5%" }}></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="ed-crd-sidebar" >,
                                <div className="item-img">
                                    <img src={course.image ? `/uploads/${course.image}` : '/assets/images/fac.jpg'} alt={course.course || 'Course Image'} />
                                </div>
                                <div className="item-text ul-li-block">
                                    <ul className="crs-info">
                                        <li>
                                            <span><i className="fa-regular fa-user"></i> Instructor</span>
                                            <span className='fw-normal'>
                                                {(Array.isArray(course.instructor) ? course.instructor : [course.instructor]).map((name, idx) => (
                                                    name ? <div key={idx}>{name}</div> : null
                                                ))}
                                            </span>
                                        </li>
                                        <li>
                                            <span><i className="fa-regular fa-clock"></i> Duration</span>
                                            <span className='fw-normal'>Full Time Access</span>
                                        </li>
                                        <li>
                                            <span className='d-flex align-items-center justify-content-center gap-2'><i class='bx  bx-book-open' style={{ color: "#000000" }}></i> Lessons</span>
                                            <span className='fw-normal'>{course.lesson || 'N/A'}</span>
                                        </li>
                                        <li>
                                            <span><i className="fa-regular fa-folder-open"></i> Projects</span>
                                            <span className='fw-normal'>{course.projects || 'N/A'}</span>
                                        </li>
                                        <li>
                                            <span><i className="fa-solid fa-language"></i> Language</span>
                                            <span className='fw-normal'>{course.language || 'N/A'}</span>
                                        </li>
                                        <li>
                                            <span className='d-flex align-items-center justify-content-center gap-2'><i class='bx  bx-badge-check' style={{ color: "#000000", fontSize: "24px" }}></i> Certificate</span>
                                            <span className='fw-normal'>{course.certificate ? 'Yes' : 'No'}</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="ed-btn-1 mt-30 btn-spin text-center">
                                    <a href="#" className="btn btn-primary btn-lg w-100">Start Now &rarr;</a>
                                </div>
                            </div>
                            <div className="ed-crd-sidebar-review mt-40" >
                                <h3>Add A Review</h3>
                                <p>Your email address will not be published. Required fields are marked *</p>
                                <StarRating rating={rating} onRatingChange={setRating} />
                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <input
                                                type="text"
                                                placeholder="Full Name"
                                                className="border"
                                                value={fullName}
                                                onChange={(e) => setFullName(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="col-md-12">
                                            <input
                                                type="email"
                                                placeholder="Email Address"
                                                className="border"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="col-md-12">
                                            <textarea
                                                name="message"
                                                className="border"
                                                placeholder="Your Message"
                                                value={message}
                                                onChange={(e) => setMessage(e.target.value)}
                                                required
                                            ></textarea>
                                        </div>
                                        <div className="col-md-12">
                                            <button type="submit" disabled={loading}>
                                                {loading ? "Submitting..." : "Submit Review"}
                                            </button>
                                        </div>
                                    </div>
                                </form>

                                {success && <p style={{ color: "green" }}>{success}</p>}
                                {error && <p style={{ color: "red" }}>{error}</p>}
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}
export default SingleCourse