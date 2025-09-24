
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require('dotenv');
const multer = require('multer');
const fs = require('fs');

const app = express();
app.use(express.json());
app.use(cors());

dotenv.config();

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB Connected'))
  .catch((err) => console.error('❌ MongoDB Error:', err));


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../frontend/public/uploads");
  },
  filename: function (req, file, cb) {
    const uniqueName = Date.now() + file.originalname;
    if (!req.savedFiles) req.savedFiles = [];
    req.savedFiles.push(uniqueName);

    cb(null, uniqueName);
  }
});

const upload = multer({ storage: storage });

// Course Schema and Model
const courseschema = mongoose.Schema({
  course: String,
  image: String,
  description: String,
  learn: String,
  outcomes: String,
  instructor: String,
  duration: String,
  lesson: String,
  projects: String,
  language: String,
  certificate: String,
  background: String
});
const coursemodel = mongoose.model("Courses", courseschema, "Courses");

// Form Schema and Model
const formSchema = new mongoose.Schema({
  fullName: String,
  location: String,
  email: String,
  course: String,
  mobile: String,
  countryCode: String,
  createdAt: { type: Date, default: Date.now }
});
const FormModel = mongoose.model("demo_requests", formSchema, "demo_requests");

// User Schema and Model
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  utype: String
});
const User = mongoose.model("signup", userSchema, "signup");

// Routes
app.post("/addcourse", upload.fields([
  { name: "file", maxCount: 1 },
  { name: "bgimage", maxCount: 1 }
]), async (req, res) => {

  // ✅ Get both images
  const courseImage = req.files["file"] ? req.files["file"][0].filename : null;
  const backgroundImage = req.files["bgimage"] ? req.files["bgimage"][0].filename : null;

  const result = new coursemodel({
    course: req.body.coursename,
    image: courseImage,
    description: req.body.description,
    learn: req.body.learn,
    outcomes: req.body.outcomes,
    instructor: req.body.instructor,
    duration: req.body.duration,
    lesson: req.body.lesson,
    projects: req.body.projects,
    language: req.body.language,
    certificate: req.body.certificate,
    background: backgroundImage
  });

  const rr = await result.save();
  if (rr) {
    res.send({ statuscode: 1 });
  } else {
    res.send({ statuscode: 0 });
  }
});


app.get("/showcourse", async (req, res) => {
  const result = await coursemodel.find();
  if (result) {
    res.send({ statuscode: 1, data: result });
  } else {
    res.send({ statuscode: 0 });
  }
});

app.delete("/coursedelete/:id", async (req, res) => {
  const re = await coursemodel.findOneAndDelete({ _id: req.params.id });
  if (re) {
    res.send({ statuscode: 1 });
  } else {
    res.send({ statuscode: 0 });
  }
});

app.put("/courseupdate", upload.single('file'), async (req, res) => {
  if (!req.file) {
    picname = req.body.oldpic;
  } else {
    fs.unlink("../frontend/public/uploads" + req.body.oldpic, (err) => {
      if (err) console.log("Error deleting file:", err);
    });
  }
  const result = await coursemodel.updateOne(
    { _id: req.body.id },
    {
      $set: {
        course: req.body.coursename,
        image: picname,
        description: req.body.description,
        learn: req.body.learn,
        outcomes: req.body.outcomes
      }
    }
  );
  if (result) {
    res.send({ statuscode: 1 });
  } else {
    res.send({ statuscode: 0 });
  }
});

app.post("/submit-demo-request", async (req, res) => {
  try {
    const { fullName, location, email, course, mobile, countryCode } = req.body;
    const result = new FormModel({
      fullName,
      location,
      email,
      course,
      mobile: `${countryCode} ${mobile}`
    });
    const saved = await result.save();
    if (saved) {
      res.send({ statuscode: 1, message: "Demo request submitted successfully" });
    } else {
      res.send({ statuscode: 0, message: "Failed to submit request" });
    }
  } catch (error) {
    console.error("Error submitting demo request:", error);
    res.status(500).send({ statuscode: 0, message: "Internal server error" });
  }
});

app.get("/get-demo-requests", async (req, res) => {
  try {
    const requests = await FormModel.find().sort({ createdAt: -1 });
    res.send({ statuscode: 1, data: requests });
  } catch (error) {
    console.error("Error fetching demo requests:", error);
    res.status(500).send({ statuscode: 0, message: "Error fetching data" });
  }
});

app.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.send({ statuscode: 0, message: "User already exists" });
    }
    const newUser = new User({
      username,
      email,
      password,
      utype: "user"
    });
    const result = await newUser.save();
    if (result) {
      res.send({ statuscode: 1, message: "Signup successful" });
    } else {
      res.send({ statuscode: 0, message: "Failed to create user" });
    }
  } catch (error) {
    console.error("Signup error:", error);
    res.send({ statuscode: 0, message: "An error occurred during signup" });
  }
});

app.post('/login', async (req, res) => {
  const result = await User.findOne({ email: req.body.email });
  if (!result) {


    
    res.send({ statuscode: 0 });
  } else {
    if (result.password === req.body.password) {
      res.send({
        statuscode: 1,
        utype: result.utype,
        memberdata: result
      });
    } else {
      res.send({ statuscode: 0 });
    }
  }
});



// Add this to your existing schemas in server.js

// Contact Schema and Model
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  subject: String,
  message: String,
  contactNo: String,
  createdAt: { type: Date, default: Date.now }
});
const ContactModel = mongoose.model("contact_requests", contactSchema, "contact_requests");

// Add this to your existing routes in server.js
app.post("/submit-contact-request", async (req, res) => {
  try {
    const { name, email, subject, message, contactNo } = req.body;

    const result = new ContactModel({
      name,
      email,
      subject,
      message,
      contactNo
    });

    const saved = await result.save();

    if (saved) {
      res.send({
        statuscode: 1,
        message: "Contact request submitted successfully"
      });
    } else {
      res.send({
        statuscode: 0,
        message: "Failed to submit contact request"
      });
    }
  } catch (error) {
    console.error("Error submitting contact request:", error);
    res.status(500).send({
      statuscode: 0,
      message: "Internal server error"
    });
  }
});


// GET only; returns all contact requests
app.get("/showcontact", async (req, res) => {
  const result = await ContactModel.find();
  if (result) {
    res.send({ statuscode: 1, data: result });
  } else {
    res.send({ statuscode: 0 });
  }
});






// Course Schema and Model
const allcourseschema = mongoose.Schema({
  course: String,
  image: String,
  description: String,
  learn: String,
  outcomes: String,
  instructor: String,
  duration: String,
  lesson: String,
  projects: String,
  language: String,
  certificate: String
});
const allcoursemodel = mongoose.model("AllCourses", allcourseschema, "AllCourses");



// Routes
app.post("/addallcourse", upload.single('file'), async (req, res) => {
  const result = new allcoursemodel({
    course: req.body.coursename,
    image: picname,
    description: req.body.description,
    learn: req.body.learn,
    outcomes: req.body.outcomes,
    instructor: req.body.instructor,
    duration: req.body.duration,
    lesson: req.body.lesson,
    projects: req.body.projects,
    language: req.body.language,
    certificate: req.body.certificate
  });

  const rr = await result.save();
  if (rr) {
    res.send({ statuscode: 1 });
  } else {
    res.send({ statuscode: 0 });
  }
});

app.get("/showallcourse", async (req, res) => {
  const result = await coursemodel.find();
  if (result) {
    res.send({ statuscode: 1, data: result });
  } else {
    res.send({ statuscode: 0 });
  }
});

app.delete("/coursealldelete/:id", async (req, res) => {
  const re = await coursemodel.findOneAndDelete({ _id: req.params.id });
  if (re) {
    res.send({ statuscode: 1 });
  } else {
    res.send({ statuscode: 0 });
  }
});

app.get("/course/:id", async (req, res) => {
  try {
    const course = await coursemodel.findById(req.params.id);
    if (course) {
      res.send({ statuscode: 1, data: course });
    } else {
      res.send({ statuscode: 0, message: "Course not found" });
    }
  } catch (err) {
    res.send({ statuscode: 0, message: "Error fetching course" });
  }
});

app.put("/courseallupdate", upload.single('file'), async (req, res) => {
  if (!req.file) {
    picname = req.body.oldpic;
  } else {
    fs.unlink("../frontend/public/uploads" + req.body.oldpic, (err) => {
      if (err) console.log("Error deleting file:", err);
    });
  }
  const result = await coursemodel.updateOne(
    { _id: req.body.id },
    {
      $set: {
        course: req.body.coursename,
        image: picname,
        description: req.body.description,
        learn: req.body.learn,
        outcomes: req.body.outcomes,
        instructor: req.body.instructor,
        duration: req.body.duration,
        lesson: req.body.lesson,
        projects: req.body.projects,
        certificate: req.body.certificate,
      }
    }
  );
  if (result) {
    res.send({ statuscode: 1 });
  } else {
    res.send({ statuscode: 0 });
  }
});


// Course Review Schema
const courseReviewSchema = new mongoose.Schema({
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: "Courses", required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "signup", required: true },
  fname: { type: String, required: true },
  email: { type: String, required: true },
  rating: { type: Number, min: 1, max: 5, required: true },
  reviewText: { type: String },
  createdAt: { type: Date, default: Date.now }
});

const CourseReview = mongoose.model("CourseReview", courseReviewSchema, "CourseReviews");

// 📌 POST API: Add a Review
//
app.post("/reviews", async (req, res) => {
  console.log("📩 Received Review Data:", req.body);
  try {
    const { courseId, userId, fname, email, rating, reviewText } = req.body;

    if (!courseId || !userId || !fname || !email || !rating) {
      return res.status(400).json({ error: "All required fields must be provided" });
    }

    const newReview = new CourseReview({
      courseId,
      userId,
      fname,
      email,
      rating,
      reviewText,
    });

    await newReview.save();

    res.status(201).json({ message: "Review submitted successfully", review: newReview });
  } catch (error) {
    console.error("Error saving review:", error);
    res.status(500).json({ error: "Server error" });
  }
});


//
// 📌 GET API: Get all reviews for a specific course
//
app.get("/reviews/:courseId", async (req, res) => {
  try {
    const { courseId } = req.params;

    const reviews = await CourseReview.find({ courseId }).sort({ createdAt: -1 });

    res.status(200).json(reviews);
  } catch (error) {
    console.error("Error fetching reviews:", error);
    res.status(500).json({ error: "Server error" });
  }
});

//
// 📌 GET API: Get Average Rating for a Course
//
app.get("/reviews/average/:courseId", async (req, res) => {
  try {
    const { courseId } = req.params;

    const result = await CourseReview.aggregate([
      { $match: { courseId: new mongoose.Types.ObjectId(courseId) } },
      { $group: { _id: null, averageRating: { $avg: "$rating" }, totalReviews: { $sum: 1 } } },
    ]);

    if (result.length === 0) {
      return res.status(200).json({ averageRating: 0, totalReviews: 0 });
    }

    res.status(200).json(result[0]);
  } catch (error) {
    console.error("Error calculating average rating:", error);
    res.status(500).json({ error: "Server error" });
  }
});



const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});