import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useState, useEffect } from 'react';
import { set } from 'mongoose';

const Addcourses = () => {
  const fileInputRef = React.useRef();
  const fileInputRefbg = React.useRef();
  const [coursename, setcoursename] = useState('');
  const [file, setfile] = useState(null);
  const [description, setdescription] = useState('');
  const [learn, setlearn] = useState('');
  const [outcomes, setoutcomes] = useState('');
  const [show, setShow] = useState([]);
  const [id, setid] = useState();
  const [pic, oldpic] = useState('');
  const [instructor, setinstructor] = useState('');
  const [duration, setduration] = useState('');
  const [lesson, setlesson] = useState('');
  const [projects, setprojects] = useState('');
  const [language, setlanguage] = useState('');
  const [certificate, setcertificate] = useState('');
  const[bgimage,setbgimage]=useState(null);

  const send = async (e) => {
    e.preventDefault();


    const formdata = new FormData();
    formdata.append('coursename', coursename);
    formdata.append('description', description);
    formdata.append('learn', learn);
    formdata.append('outcomes', outcomes);
    formdata.append('instructor', instructor);
    formdata.append('duration', duration);
    formdata.append('lesson', lesson);
    formdata.append('projects', projects);
    formdata.append('language', language);
    formdata.append('certificate', certificate);
   

    if (file) {
      formdata.append('file', file, file.name);
    }

    if(bgimage){
      formdata.append('bgimage',bgimage,bgimage.name);
    }

    try {
      const response = await fetch('http://localhost:9000/addcourse', {
        method: 'POST',
        body: formdata,
      });

      const result = await response.json();
      if (result.statuscode === 1) {
        alert('Data sent successfully');
        setcoursename('');
        setdescription('');
        setlearn('');
        setoutcomes('');
        setfile(null);
        setinstructor('');
        setduration('');
        setlesson('');
        setprojects('');
        setlanguage('');
        setcertificate('');
        setbgimage(null);
        if (fileInputRef.current) fileInputRef.current.value = null;
        if (fileInputRefbg.current) fileInputRefbg.current.value = null;
        courses();
      } else {
        alert('Failed to send data');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred');
    }
  };

  useEffect(() => {
    courses();
  }, []);

  const courses = async () => {
    const response = await fetch('http://localhost:9000/showcourse', {
      method: 'get',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    });
    const data = await response.json();
    if (data.statuscode === 1) {
      setShow(data.data);
    }
  };

  const coursedelete = async (id) => {
    const a = await fetch(`http://localhost:9000/coursedelete/${id}`, {
      method: 'delete',
    });

    if (a.ok) {
      alert('deleted');
      courses(); // refresh list
    } else {
      alert('not deleted');
    }
  };

  const courseinput = (course) => {
    setcoursename(course.coursename);
    setdescription(course.description);
    setlearn(course.learn);
    setoutcomes(course.outcomes);
    setid(course._id);
    oldpic(course.image); // hold old image file name
    setinstructor(course.instructor);
    setduration(course.duration);
    setlesson(course.lesson);
    setprojects(course.projects);
    setlanguage(course.language);
    setcertificate(course.certificate);
  };

  const courseupdate = async () => {
    const formdata = new FormData();
    formdata.append('coursename', coursename);
    formdata.append('description', description);
    formdata.append('learn', learn);
    formdata.append('outcomes', outcomes);
    formdata.append('id', id);
    formdata.append('pic', pic); 
    formdata.append('instructor', instructor);
    formdata.append('duration', duration);
    formdata.append('lesson', lesson);
    formdata.append('projects', projects);
    formdata.append('language', language);
    formdata.append('certificate', certificate);
    if (file) {
      formdata.append('file', file, file.name);
    }

    try {
      const response = await fetch('http://localhost:9000/courseupdate', {
        method: 'PUT',
        body: formdata,
      });

      if (response.ok) {
        alert('updated');
        setcoursename('');
        setdescription('');
        setlearn('');
        setoutcomes('');
        setfile(null);
        setid(null);
        setinstructor('');
        setduration('');
        setlesson('');
        setprojects('');
        setlanguage('');
        setcertificate('');
        if (fileInputRef.current) fileInputRef.current.value = null;
        courses();
      } else {
        alert('not updated');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred during update');
    }
  };

  return (
    <>
      {/* Form */}
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-7">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4 p-md-5">
                <h2 className="h4 text-center mb-4">
                  {id ? 'Update Course' : 'Add New Course'}
                </h2>

                <form onSubmit={id ? courseupdate : send} noValidate>
                  {/* Course Name */}
                  <div className="mb-3">
                    <label className="form-label">Course Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter course name"
                      onChange={(e) => setcoursename(e.target.value)}
                      value={coursename}
                      required
                    />
                  </div>

                  {/* Course Description */}
                  <div className="mb-3">
                    <label className="form-label">Course Description</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter course description"
                      onChange={(e) => setdescription(e.target.value)}
                      value={description}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">What You'll Learn</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter What You'll Learn"
                      onChange={(e) => setlearn(e.target.value)}
                      value={learn}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Future Outcomes</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter future outcomes"
                      onChange={(e) => setoutcomes(e.target.value)}
                      value={outcomes}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Instructor Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Instructor Name"
                      onChange={(e) => setinstructor(e.target.value)}
                      value={instructor}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Duration</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Duration"
                      onChange={(e) => setduration(e.target.value)}
                      value={duration}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Lessons</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Lessons"
                      onChange={(e) => setlesson(e.target.value)}
                      value={lesson}
                      required
                    />
                  </div>


                  <div className="mb-3">
                    <label className="form-label">Projects</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Project"
                      onChange={(e) => setprojects(e.target.value)}
                      value={projects}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Language</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Language"
                      onChange={(e) => setlanguage(e.target.value)}
                      value={language}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Certificate</label>
                    <select
                      id="certificate"
                      name="certificate"
                      value={certificate}
                      onChange={(e) => setcertificate(e.target.value)}
                      className="form-control"
                    >
                      <option value="">Select</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>

                  {/* Image */}
                  <div className="mb-4">
                    <label className="form-label">Course Image</label>
                    <input
                      type="file"
                      className="form-control"
                      ref={fileInputRef}
                      onChange={(e) => setfile(e.target.files[0])}
                    />

                    {/* Show current image when editing and no new file selected */}
                    {pic && !file && (
                      <div className="mt-3">
                        <div className="small text-muted mb-2">Current Image</div>
                        <img
                          src={`/uploads/${pic}`}
                          alt="Current course"
                          className="img-thumbnail"
                          style={{ width: 100, height: 100, objectFit: 'cover' }}
                        />
                      </div>
                    )}
                  </div>

                  <div className="mb-4">
                    <label className="form-label">Background Image</label>
                    <input
                      type="file"
                      className="form-control"
                      ref={fileInputRefbg}
                      onChange={(e) => setbgimage(e.target.files[0])}
                    />
                  </div>

                  {/* Actions */}
                  <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-primary">
                      {id ? 'Update Course' : 'Submit Course'}
                    </button>

                    {id && (
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => {
                          setcoursename('');
                          setdescription('');
                          setlearn('');
                          setoutcomes('');
                          setfile(null);
                          setid(null);
                        }}
                      >
                        Cancel Update
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Courses */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center mb-5">
            <div className="col text-center">
              <h1 className="mb-1">Featured Courses</h1>
              <p className="text-capitalize mb-0">
                Discover your perfect program in our courses.
              </p>
            </div>
          </div>

          <Swiper
            spaceBetween={30}
            loop={true}
            pagination={{ clickable: true }}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
            }}
          >
            {show.map((course, index) => (
              <SwiperSlide key={index}>
                <div className="px-2">
                  <div className="card h-100 border-0 shadow-sm">
                    {/* Image */}
                    <div className="position-relative">
                      <img
                        className="card-img-top"
                        src={`/uploads/${course.image}`}
                        alt={course.coursename}
                        style={{ height: 200, objectFit: 'cover' }}
                      />
                    </div>

                    {/* Content */}
                    <div className="card-body">
                      <h4 className="h5 mb-2 text-truncate" title={course.coursename}>
                        {course.coursename}
                      </h4>
                      <p className="mb-3 text-muted" style={{ minHeight: 44 }}>
                        {course.description}
                      </p>

                      {/* Faux rating / meta */}
                      <div className="d-flex align-items-center mb-3">
                        <div
                          className="progress flex-grow-1"
                          style={{ height: 6, maxWidth: 120 }}
                        >
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: '50%' }}
                            aria-valuenow="50"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          />
                        </div>
                        <span className="ms-2 small text-muted">5.45 (5.8k+)</span>
                      </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="card-footer bg-white border-0 pt-0 pb-4">
                      <div className="d-flex gap-2">
                        <button
                          className="btn btn-sm btn-primary"
                          onClick={() => courseinput(course)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-sm btn-outline-danger"
                          onClick={() => coursedelete(course._id)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Addcourses;
