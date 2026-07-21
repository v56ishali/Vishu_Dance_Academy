import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import { API_BASE_URL } from "../config";

function Admission() {
  // State to manage active form ("student" or "trainer")
  const [activeForm, setActiveForm] = useState("student");

  // Input Validation Helper
  const validateFormInputs = (name, phone, email) => {
    // Name validation: min 3 characters, letters and spaces only
    const nameRegex = /^[a-zA-Z\s]{3,}$/;
    if (!nameRegex.test(name.trim())) {
      alert("Invalid Name: Please enter at least 3 characters containing only letters and spaces.");
      return false;
    }

    // Phone validation: starts with 6,7,8,9 and exactly 10 digits
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(phone.trim())) {
      alert("Invalid Phone Number: Please enter a valid 10-digit mobile number.");
      return false;
    }

    // Email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email.trim())) {
      alert("Invalid Email: Please enter a valid email address.");
      return false;
    }

    return true;
  };

  // Student Form Submit Handler
  const handleStudentSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const name = data.get("student_name");
    const phone = data.get("student_phone");
    const email = data.get("student_email");

    if (validateFormInputs(name, phone, email)) {
      const studentApplication = {
        type: "Student Admission",
        name,
        age: data.get("student_age"),
        gender: data.get("student_gender"),
        phone,
        email,
        style: data.get("student_style"),
        batch: data.get("student_batch"),
        address: data.get("student_address"),
        date: new Date().toLocaleDateString()
      };

      fetch(`${API_BASE_URL}/api/applications`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(studentApplication)
      })
        .then((res) => {
          if (!res.ok) throw new Error("Submission failed");
          return res.json();
        })
        .then(() => {
          alert("Registration Successful! Welcome to Vishu's Dance Academy.");
          e.target.reset();
        })
        .catch((err) => {
          alert("Failed to submit registration: " + err.message);
        });
    }
  };

  // Trainer Form Submit Handler
  const handleTrainerSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const name = data.get("trainer_name");
    const phone = data.get("trainer_phone");
    const email = data.get("trainer_email");

    if (validateFormInputs(name, phone, email)) {
      const trainerApplication = {
        type: "Trainer Application",
        name,
        age: data.get("trainer_age"),
        gender: data.get("trainer_gender"),
        phone,
        email,
        experience: data.get("trainer_experience"),
        specialization: data.get("trainer_specialization"),
        description: data.get("trainer_description"),
        date: new Date().toLocaleDateString()
      };

      fetch(`${API_BASE_URL}/api/applications`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(trainerApplication)
      })
        .then((res) => {
          if (!res.ok) throw new Error("Submission failed");
          return res.json();
        })
        .then(() => {
          alert("Application Submitted! Our recruitment team will review your profile and get back to you shortly.");
          e.target.reset();
        })
        .catch((err) => {
          alert("Failed to submit application: " + err.message);
        });
    }
  };

  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex flex-col bg-neutral-50">
        <NavBar />
        <main className="flex-1 flex items-center justify-center py-20 px-4">
          <div className="max-w-md w-full bg-white rounded-2xl border border-[#D4AF37]/20 p-8 shadow-xl text-center">
            <div className="w-16 h-16 bg-[#D4AF37]/10 text-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
              </svg>
            </div>
            <h2 className="font-serif text-2xl font-bold text-neutral-900 mb-3">Admission Portal Locked</h2>
            <p className="text-neutral-600 text-sm mb-8 leading-relaxed">
              Please log in to register for dance courses or apply as an academy trainer.
            </p>
            <Link to="/login" className="inline-block w-full py-3 bg-[#D4AF37] hover:bg-[#AA823B] text-white font-bold rounded-full transition-all duration-300 shadow-md text-xs uppercase tracking-widest text-center">
              Log In to Access
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-white text-neutral-800 font-sans antialiased">
      {/* Header & Navigation */}
      <NavBar />

      {/* Title Section */}
      <section className="gold-gradient-bg py-12 border-b border-[#D4AF37]/15">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold">Registration Portal</span>
          <h2 className="font-serif text-3xl font-bold text-neutral-900">Admission & Recruitment</h2>
          <div className="w-12 h-0.5 bg-[#D4AF37] mx-auto"></div>
          <p className="text-neutral-600 text-sm max-w-xl mx-auto">
            Please select your registration type below to complete the enrollment or application form.
          </p>
        </div>
      </section>

      {/* Form Card Container */}
      <section className="py-16 bg-neutral-50/50">
        <div className="max-w-xl mx-auto px-6 space-y-8">
          
          {/* Tab Controls */}
          <div className="flex border border-[#D4AF37]/35 rounded-sm overflow-hidden bg-white shadow-xs">
            <button
              onClick={() => setActiveForm("student")}
              className={`flex-1 py-3 text-center font-serif font-bold text-sm tracking-wide transition-all duration-300 cursor-pointer focus:outline-none ${
                activeForm === "student"
                  ? "bg-[#D4AF37] text-white"
                  : "text-[#D4AF37] hover:bg-[#FDFBF7]"
              }`}
            >
              Student Admission
            </button>
            <button
              onClick={() => setActiveForm("trainer")}
              className={`flex-1 py-3 text-center font-serif font-bold text-sm tracking-wide border-l border-[#D4AF37]/35 transition-all duration-300 cursor-pointer focus:outline-none ${
                activeForm === "trainer"
                  ? "bg-[#D4AF37] text-white"
                  : "text-[#D4AF37] hover:bg-[#FDFBF7]"
              }`}
            >
              Trainer Application
            </button>
          </div>

          {/* FORM 1: Student Admission Form */}
          {activeForm === "student" && (
            <div id="student-form-container" className="bg-white border border-[#D4AF37]/25 p-8 sm:p-10 rounded-sm shadow-md transition-all duration-300">
              <h3 className="font-serif text-xl font-bold text-center text-neutral-900 mb-8 tracking-wide">Student Registration</h3>
              
              <form onSubmit={handleStudentSubmit} className="space-y-6 text-sm text-neutral-700">
                {/* Full Name */}
                <div className="flex flex-col space-y-1.5">
                  <label className="font-semibold text-neutral-800">Full Name</label>
                  <input name="student_name" type="text" placeholder="Enter full name" className="w-full px-4 py-2 border border-neutral-300 rounded-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all" required />
                </div>
                
                {/* Age */}
                <div className="flex flex-col space-y-1.5">
                  <label className="font-semibold text-neutral-800">Age</label>
                  <input name="student_age" type="number" placeholder="Enter age" className="w-full px-4 py-2 border border-neutral-300 rounded-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all" required min="5" />
                </div>

                {/* Gender */}
                <div className="space-y-2">
                  <label className="font-semibold text-neutral-800 block">Gender</label>
                  <div className="flex items-center gap-6">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="student_gender" value="Male" className="accent-[#D4AF37]" required /> Male
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="student_gender" value="Female" className="accent-[#D4AF37]" required /> Female
                    </label>
                  </div>
                </div>

                {/* Phone Number */}
                <div className="flex flex-col space-y-1.5">
                  <label className="font-semibold text-neutral-800">Phone Number</label>
                  <input name="student_phone" type="tel" placeholder="Enter phone number" className="w-full px-4 py-2 border border-neutral-300 rounded-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all" required />
                </div>

                {/* Email */}
                <div className="flex flex-col space-y-1.5">
                  <label className="font-semibold text-neutral-800">Email Address</label>
                  <input name="student_email" type="email" placeholder="Enter email" className="w-full px-4 py-2 border border-neutral-300 rounded-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all" required />
                </div>

                {/* Select Dance Style */}
                <div className="flex flex-col space-y-1.5">
                  <label className="font-semibold text-neutral-800">Select Dance Style</label>
                  <select name="student_style" className="w-full px-4 py-2 border border-neutral-300 rounded-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] bg-white transition-all" required>
                    <option value="" disabled>Choose style...</option>
                    <option value="Bharatanatyam">Bharatanatyam</option>
                    <option value="Ballet">Ballet</option>
                    <option value="Hip Hop">Hip Hop</option>
                    <option value="Kathak">Kathak</option>
                    <option value="Salsa">Salsa</option>
                    <option value="Contemporary">Contemporary</option>
                  </select>
                </div>

                {/* Preferred Batch */}
                <div className="space-y-2">
                  <label className="font-semibold text-neutral-800 block">Preferred Batch</label>
                  <div className="flex items-center gap-6">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="student_batch" value="Morning" className="accent-[#D4AF37]" required /> Morning Batch
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="student_batch" value="Evening" className="accent-[#D4AF37]" required /> Evening Batch
                    </label>
                  </div>
                </div>

                {/* Address */}
                <div className="flex flex-col space-y-1.5">
                  <label className="font-semibold text-neutral-800">Address</label>
                  <textarea name="student_address" rows="4" placeholder="Enter full address" className="w-full px-4 py-2 border border-neutral-300 rounded-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all" required></textarea>
                </div>

                {/* Terms Agreement */}
                <label className="flex items-start gap-2.5 cursor-pointer select-none py-2 text-xs">
                  <input type="checkbox" className="accent-[#D4AF37] mt-0.5" required />
                  <span>I agree to the Terms and Conditions of Vishu's Dance Academy.</span>
                </label>

                {/* Buttons */}
                <div className="flex items-center gap-4 pt-4">
                  <input type="submit" value="Submit Registration" className="flex-1 px-2 py-2.5 bg-[#D4AF37] text-white font-bold tracking-wider uppercase text-xs rounded-full hover:bg-[#AA823B] transition-colors cursor-pointer shadow-sm" />
                  <input type="reset" value="Clear Form" className="px-2 py-2.5 border border-[#D4AF37] text-[#D4AF37] font-bold tracking-wider uppercase text-xs rounded-full hover:bg-[#D4AF37] hover:text-white transition-colors cursor-pointer" />
                </div>
              </form>
            </div>
          )}

          {/* FORM 2: Trainer Recruitment Form */}
          {activeForm === "trainer" && (
            <div id="trainer-form-container" className="bg-white border border-[#D4AF37]/25 p-8 sm:p-10 rounded-sm shadow-md transition-all duration-300">
              <h3 className="font-serif text-xl font-bold text-center text-neutral-900 mb-8 tracking-wide">Trainer Application</h3>
              
              <form onSubmit={handleTrainerSubmit} className="space-y-6 text-sm text-neutral-700">
                {/* Full Name */}
                <div className="flex flex-col space-y-1.5">
                  <label className="font-semibold text-neutral-800">Full Name</label>
                  <input name="trainer_name" type="text" placeholder="Enter full name" className="w-full px-4 py-2 border border-neutral-300 rounded-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all" required />
                </div>
                
                {/* Age */}
                <div className="flex flex-col space-y-1.5">
                  <label className="font-semibold text-neutral-800">Age</label>
                  <input name="trainer_age" type="number" placeholder="Enter age" className="w-full px-4 py-2 border border-neutral-300 rounded-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all" required min="18" />
                </div>

                {/* Gender */}
                <div className="space-y-2">
                  <label className="font-semibold text-neutral-800 block">Gender</label>
                  <div className="flex items-center gap-6">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="trainer_gender" value="Male" className="accent-[#D4AF37]" required /> Male
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="trainer_gender" value="Female" className="accent-[#D4AF37]" required /> Female
                    </label>
                  </div>
                </div>

                {/* Phone Number */}
                <div className="flex flex-col space-y-1.5">
                  <label className="font-semibold text-neutral-800">Phone Number</label>
                  <input name="trainer_phone" type="tel" placeholder="Enter phone number" className="w-full px-4 py-2 border border-neutral-300 rounded-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all" required />
                </div>

                {/* Email */}
                <div className="flex flex-col space-y-1.5">
                  <label className="font-semibold text-neutral-800">Email Address</label>
                  <input name="trainer_email" type="email" placeholder="Enter email" className="w-full px-4 py-2 border border-neutral-300 rounded-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all" required />
                </div>

                {/* Years of Experience */}
                <div className="flex flex-col space-y-1.5">
                  <label className="font-semibold text-neutral-800">Years of Experience</label>
                  <input name="trainer_experience" type="number" placeholder="Enter years of coaching experience" className="w-full px-4 py-2 border border-neutral-300 rounded-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all" required min="1" />
                </div>

                {/* Dance Specialization */}
                <div className="flex flex-col space-y-1.5">
                  <label className="font-semibold text-neutral-800">Select Core Specialization</label>
                  <select name="trainer_specialization" className="w-full px-4 py-2 border border-neutral-300 rounded-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] bg-white transition-all" required>
                    <option value="" disabled>Choose style...</option>
                    <option value="Bharatanatyam">Bharatanatyam</option>
                    <option value="Ballet">Ballet</option>
                    <option value="Hip Hop">Hip Hop</option>
                    <option value="Kathak">Kathak</option>
                    <option value="Salsa">Salsa</option>
                    <option value="Contemporary">Contemporary</option>
                  </select>
                </div>

                {/* Past Experience / Brief Resume */}
                <div className="flex flex-col space-y-1.5">
                  <label className="font-semibold text-neutral-800">Brief Experience & Accomplishments</label>
                  <textarea name="trainer_description" rows="4" placeholder="Briefly describe your training and previous teaching experience..." className="w-full px-4 py-2 border border-neutral-300 rounded-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all" required></textarea>
                </div>

                {/* Terms Agreement */}
                <label className="flex items-start gap-2.5 cursor-pointer select-none py-2 text-xs">
                  <input type="checkbox" className="accent-[#D4AF37] mt-0.5" required />
                  <span>I certify that all provided details are true and correct.</span>
                </label>

                {/* Buttons */}
                <div className="flex items-center gap-4 pt-4">
                  <input type="submit" value="Submit Application" className="flex-1 px-2 py-2.5 bg-[#D4AF37] text-white font-bold tracking-wider uppercase text-xs rounded-full hover:bg-[#AA823B] transition-colors cursor-pointer shadow-sm" />
                  <input type="reset" value="Clear Form" className="px-2 py-2.5 border border-[#D4AF37] text-[#D4AF37] font-bold tracking-wider uppercase text-xs rounded-full hover:bg-[#D4AF37] hover:text-white transition-colors cursor-pointer" />
                </div>
              </form>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Admission;
