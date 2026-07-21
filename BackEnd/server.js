const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection using Atlas MONGO_URI with local fallback
const mongoUri = process.env.MONGO_URI;
const localUri = "mongodb://127.0.0.1:27017/dance";

const connectDb = async () => {
  try {
    await mongoose.connect(mongoUri, { serverSelectionTimeoutMS: 5000 });
    console.log("Successfully connected to MongoDB Atlas Database!");
    await seedTrainers();
  } catch (err) {
    console.warn("MongoDB Atlas Connection failed:", err.message);
    console.log("Attempting fallback connection to Local MongoDB database...");
    try {
      await mongoose.connect(localUri);
      console.log("Successfully connected to Local MongoDB Database (127.0.0.1:27017/dance)!");
      await seedTrainers();
    } catch (localErr) {
      console.error("Local MongoDB Connection Error: ", localErr.message);
    }
  }
};

connectDb();

// ----------------------------------------
// Mongoose Models
// ----------------------------------------

// 1. User Model (for SignUp & Login)
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: "student" }, // "student" or "trainer"
  specialization: { type: String }, // "Bharatanatyam", "Ballet", etc.
});
const User = mongoose.model("User", UserSchema);

// Seeding function for trainer accounts
const seedTrainers = async () => {
  try {
    const trainersToSeed = [
      { name: "AAA", phone: "9876543201", email: process.env.TRAINER_AAA_EMAIL, password: process.env.TRAINER_AAA_PASSWORD, role: "trainer", specialization: "Bharatanatyam" },
      { name: "BBB", phone: "9876543202", email: process.env.TRAINER_BBB_EMAIL, password: process.env.TRAINER_BBB_PASSWORD, role: "trainer", specialization: "Ballet" },
      { name: "CCC", phone: "9876543203", email: process.env.TRAINER_CCC_EMAIL, password: process.env.TRAINER_CCC_PASSWORD, role: "trainer", specialization: "Hip Hop" },
      { name: "DDD", phone: "9876543204", email: process.env.TRAINER_DDD_EMAIL, password: process.env.TRAINER_DDD_PASSWORD, role: "trainer", specialization: "Kathak" },
      { name: "EEE", phone: "9876543205", email: process.env.TRAINER_EEE_EMAIL, password: process.env.TRAINER_EEE_PASSWORD, role: "trainer", specialization: "Salsa" },
      { name: "FFF", phone: "9876543206", email: process.env.TRAINER_FFF_EMAIL, password: process.env.TRAINER_FFF_PASSWORD, role: "trainer", specialization: "Contemporary" }
    ];

    for (const trainer of trainersToSeed) {
      if (!trainer.email || !trainer.password) continue;
      const exists = await User.findOne({ email: trainer.email });
      if (!exists) {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(trainer.password, salt);
        const newTrainer = new User({ ...trainer, password: hashedPassword });
        await newTrainer.save();
        console.log(`Auto-Seeded Trainer: ${trainer.name} (${trainer.specialization}) into database.`);
      }
    }
  } catch (error) {
    console.error("Error auto-seeding trainer accounts:", error);
  }
};

// 2. Application Model (for Student Admissions & Trainer Registrations)
const ApplicationSchema = new mongoose.Schema({
  type: { type: String, required: true }, // "Student Admission" or "Trainer Application"
  name: { type: String, required: true },
  age: String,
  gender: String,
  phone: { type: String, required: true },
  email: { type: String, required: true },
  style: String,          // Student specific
  batch: String,          // Student specific
  address: String,        // Student specific
  experience: String,     // Trainer specific
  specialization: String, // Trainer specific
  description: String,    // Trainer specific
  status: { type: String, default: "Pending" }, // "Pending", "Approved", "Rejected"
  date: { type: String, default: () => new Date().toLocaleDateString() },
});
const Application = mongoose.model("Application", ApplicationSchema);

// 3. Enquiry Model (for contact queries)
const EnquirySchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  query: { type: String, required: true },
  date: { type: String, default: () => new Date().toLocaleDateString() },
});
const Enquiry = mongoose.model("Enquiry", EnquirySchema);

// JWT Authentication Middlewares
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // Bearer <token>

  if (!token) {
    return res.status(401).json({ message: "Access token is missing." });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Invalid or expired token." });
    }
    req.user = user;
    next();
  });
};

const requireAdmin = (req, res, next) => {
  if (!req.user || req.user.role !== "admin") {
    return res.status(403).json({ message: "Access denied: Admin permission required." });
  }
  next();
};

const requireTrainer = (req, res, next) => {
  if (!req.user || req.user.role !== "trainer") {
    return res.status(403).json({ message: "Access denied: Trainer permission required." });
  }
  next();
};

// ----------------------------------------
// API Routes
// ----------------------------------------

// 1. Authentication: Sign Up
app.post("/api/signup", async (req, res) => {
  try {
    const { name, phone, email, password, role, specialization } = req.body;
    
    // Check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "An account with this email already exists." });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({ name, phone, email, password: hashedPassword, role, specialization });
    await newUser.save();

    res.status(201).json({ message: "Account created successfully!", user: { name, email, role, specialization } });
  } catch (error) {
    res.status(500).json({ message: "Internal server error during registration.", error: error.message });
  }
});

// 2. Authentication: Login
app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if it matches the secret Admin credentials
    if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
      const token = jwt.sign({ email: process.env.ADMIN_EMAIL, role: "admin" }, process.env.JWT_SECRET, { expiresIn: "1d" });
      return res.status(200).json({
        message: "Welcome, Administrator!",
        token,
        user: { name: "Administrator", email: process.env.ADMIN_EMAIL, role: "admin" }
      });
    }
    
    const user = await User.findOne({ email });
    
    if (!user) {
      return res.status(400).json({ message: "Incorrect email or password." });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Incorrect email or password." });
    }

    const token = jwt.sign(
      { id: user._id, email: user.email, role: user.role || "student", specialization: user.specialization || "" },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.status(200).json({
      message: "Login successful!",
      token,
      user: {
        name: user.name,
        email: user.email,
        role: user.role || "student",
        specialization: user.specialization || ""
      }
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error during login.", error: error.message });
  }
});

// 3. Applications: Create (Student or Trainer)
app.post("/api/applications", authenticateToken, async (req, res) => {
  try {
    const newApp = new Application(req.body);
    await newApp.save();
    res.status(201).json({ message: "Application submitted successfully!", application: newApp });
  } catch (error) {
    res.status(500).json({ message: "Error saving application details.", error: error.message });
  }
});

// 4. Applications: Read (all or filtered by email)
app.get("/api/applications", authenticateToken, async (req, res) => {
  try {
    let query = {};
    if (req.user.role === "admin") {
      const { email } = req.query;
      if (email) {
        query.email = new RegExp(`^${email}$`, "i"); // Case-insensitive matching
      }
    } else {
      // Students can only query their own application details!
      query.email = new RegExp(`^${req.user.email}$`, "i");
    }
    const apps = await Application.find(query).sort({ _id: -1 });
    res.status(200).json(apps);
  } catch (error) {
    res.status(500).json({ message: "Error fetching application records.", error: error.message });
  }
});

// 5. Trainer Students: Read (students registered for trainer's specialization style)
app.get("/api/trainer/students", authenticateToken, requireTrainer, async (req, res) => {
  try {
    const specialization = req.user.specialization;
    if (!specialization) {
      return res.status(400).json({ message: "Trainer specialization not configured on token profile." });
    }

    // Find all student admission forms where the dance style matches the trainer's specialization
    const students = await Application.find({
      type: "Student Admission",
      style: new RegExp(`^${specialization}$`, "i")
    }).sort({ _id: -1 });

    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: "Error fetching trainer students.", error: error.message });
  }
});

// 5. Applications: Delete
app.delete("/api/applications/:id", authenticateToken, requireAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    await Application.findByIdAndDelete(id);
    res.status(200).json({ message: "Application record deleted." });
  } catch (error) {
    res.status(500).json({ message: "Error deleting application record.", error: error.message });
  }
});

// 6. Enquiries: Create
app.post("/api/enquiries", async (req, res) => {
  try {
    const newEnquiry = new Enquiry(req.body);
    await newEnquiry.save();
    res.status(201).json({ message: "Enquiry submitted successfully!", enquiry: newEnquiry });
  } catch (error) {
    res.status(500).json({ message: "Error saving enquiry details.", error: error.message });
  }
});

// 7. Enquiries: Read
app.get("/api/enquiries", authenticateToken, requireAdmin, async (req, res) => {
  try {
    const enquiries = await Enquiry.find({}).sort({ _id: -1 });
    res.status(200).json(enquiries);
  } catch (error) {
    res.status(500).json({ message: "Error fetching enquiries records.", error: error.message });
  }
});

// 8. Enquiries: Delete
app.delete("/api/enquiries/:id", authenticateToken, requireAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    await Enquiry.findByIdAndDelete(id);
    res.status(200).json({ message: "Enquiry record deleted." });
  } catch (error) {
    res.status(500).json({ message: "Error deleting enquiry record.", error: error.message });
  }
});

// 9. Applications: Update Status (Approve / Reject)
app.put("/api/applications/:id", authenticateToken, requireAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    
    if (!["Pending", "Approved", "Rejected"].includes(status)) {
      return res.status(400).json({ message: "Invalid status value." });
    }

    const updatedApp = await Application.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!updatedApp) {
      return res.status(404).json({ message: "Application not found." });
    }

    res.status(200).json({ message: `Application status updated to ${status}.`, application: updatedApp });
  } catch (error) {
    res.status(500).json({ message: "Error updating application status.", error: error.message });
  }
});

// 10. Profile: Update (Student Name and Phone)
app.put("/api/profile", authenticateToken, async (req, res) => {
  try {
    const email = req.user.email; // Securely resolve user key from verified token payload
    const { name, phone } = req.body;

    const updatedUser = await User.findOneAndUpdate(
      { email: new RegExp(`^${email}$`, "i") },
      { name, phone },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found." });
    }

    res.status(200).json({
      message: "Profile updated successfully!",
      user: {
        name: updatedUser.name,
        email: updatedUser.email,
        phone: updatedUser.phone,
        role: updatedUser.role,
        specialization: updatedUser.specialization
      }
    });
  } catch (error) {
    res.status(500).json({ message: "Error updating profile details.", error: error.message });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Express Server is running on port ${PORT}...`);
});
