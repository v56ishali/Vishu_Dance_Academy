import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import { API_BASE_URL } from "../config";

function SignUp() {
  const navigate = useNavigate();
  const [role, setRole] = useState("student");
  const [specialization, setSpecialization] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const firstName = data.get("first_name").trim();
    const lastName = data.get("last_name").trim();
    const phone = data.get("phone").trim();
    const email = data.get("email").trim();
    const password = data.get("password");
    const confirmPassword = data.get("confirm_password");

    const nameRegex = /^[a-zA-Z\s]{2,}$/; // Letters only, min 2 chars

    // 1. First Name validation
    if (!nameRegex.test(firstName)) {
      alert("Invalid First Name: Please enter at least 2 letters (no numbers).");
      return;
    }

    // 2. Last Name validation
    if (!nameRegex.test(lastName)) {
      alert("Invalid Last Name: Please enter at least 2 letters (no numbers).");
      return;
    }

    // 3. Phone validation (exactly 10 digits, digits only)
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      alert("Invalid Phone Number: Please enter a valid 10-digit number (digits only).");
      return;
    }

    // 4. Email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      alert("Invalid Email: Please enter a valid email address.");
      return;
    }

    // 5. Strong Password validation (min 9 chars, 1 letter, 1 number, 1 special character)
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{9,}$/;
    if (!passwordRegex.test(password)) {
      alert("Invalid Password: Password must be more than 8 characters long and contain at least one caps, one number, and one special character (!@#$%^&* etc.).");
      return;
    }

    // 6. Confirm Password validation
    if (password !== confirmPassword) {
      alert("Password Mismatch: Passwords do not match.");
      return;
    }

    const newUser = {
      name: `${firstName} ${lastName}`,
      phone,
      email,
      password,
      role,
      specialization: role === "trainer" ? specialization : undefined
    };

    fetch(`${API_BASE_URL}/api/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser)
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((err) => { throw new Error(err.message || "Registration failed") });
        }
        return res.json();
      })
      .then((data) => {
        alert(data.message || "Account Created Successfully!");
        navigate("/login");
      })
      .catch((err) => {
        alert("Registration Failed: " + err.message);
      });
  };

  return (
    <div className="bg-white text-neutral-800 font-sans antialiased">
      {/* Header & Navigation */}
      <NavBar />

      {/* Title Section */}
      <section className="gold-gradient-bg py-8 border-b border-[#D4AF37]/15">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-2">
          <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold">Registration</span>
          <h2 className="font-serif text-2xl font-bold text-neutral-900">Create Account</h2>
          <div className="w-8 h-0.5 bg-[#D4AF37] mx-auto"></div>
        </div>
      </section>

      {/* Form Card Container */}
      <section className="py-16 bg-neutral-50/50 flex items-center justify-center min-h-[60vh]">
        <div className="w-full max-w-lg px-6">
          <div className="bg-white border border-[#D4AF37]/25 p-8 sm:p-10 rounded-sm shadow-md space-y-6">
            <h3 className="font-serif text-xl font-bold text-center text-neutral-900 tracking-wide">Register With Us</h3>
            
            <form onSubmit={handleSignUpSubmit} className="space-y-5 text-sm text-neutral-700">
              
              {/* First & Last Name */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col space-y-1.5">
                  <label className="font-semibold text-neutral-800">First Name</label>
                  <input
                    name="first_name"
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-2 border border-neutral-300 rounded-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
                    required
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <label className="font-semibold text-neutral-800">Last Name</label>
                  <input
                    name="last_name"
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-2 border border-neutral-300 rounded-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
                    required
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="flex flex-col space-y-1.5">
                <label className="font-semibold text-neutral-800">Phone Number</label>
                <input
                  name="phone"
                  type="tel"
                  placeholder="Enter phone number"
                  className="w-full px-4 py-2 border border-neutral-300 rounded-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
                  required
                />
              </div>

              {/* Email */}
              <div className="flex flex-col space-y-1.5">
                <label className="font-semibold text-neutral-800">Email Address</label>
                <input
                  name="email"
                  type="email"
                  placeholder="Enter email"
                  className="w-full px-4 py-2 border border-neutral-300 rounded-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
                  required
                />
              </div>

              {/* Password */}
              <div className="flex flex-col space-y-1.5">
                <label className="font-semibold text-neutral-800">Password</label>
                <div className="relative w-full">
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create password"
                    className="w-full pl-4 pr-10 py-2 border border-neutral-300 rounded-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all text-neutral-800"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-neutral-400 hover:text-[#D4AF37] transition-colors cursor-pointer"
                    aria-label="Toggle password visibility"
                  >
                    {showPassword ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.037m3.427-2.735A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.542 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21m-7-7l2 2m-2-2l-3-3m0 0l-3-3m3 3L9 9" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div className="flex flex-col space-y-1.5">
                <label className="font-semibold text-neutral-800">Confirm Password</label>
                <div className="relative w-full">
                  <input
                    name="confirm_password"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm password"
                    className="w-full pl-4 pr-10 py-2 border border-neutral-300 rounded-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all text-neutral-800"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-neutral-400 hover:text-[#D4AF37] transition-colors cursor-pointer"
                    aria-label="Toggle password visibility"
                  >
                    {showConfirmPassword ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.037m3.427-2.735A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.542 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21m-7-7l2 2m-2-2l-3-3m0 0l-3-3m3 3L9 9" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Register As */}
              <div className="flex flex-col space-y-1.5">
                <label className="font-semibold text-neutral-800">Register As</label>
                <select
                  name="role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full px-4 py-2 border border-neutral-300 rounded-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] bg-white transition-all text-neutral-700"
                  required
                >
                  <option value="student">Student</option>
                  <option value="trainer">Trainer</option>
                </select>
              </div>

              {/* Core Specialization (Only for trainers) */}
              {role === "trainer" && (
                <div className="flex flex-col space-y-1.5">
                  <label className="font-semibold text-neutral-800">Core Dance Specialization</label>
                  <select
                    name="specialization"
                    value={specialization}
                    onChange={(e) => setSpecialization(e.target.value)}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] bg-white transition-all text-neutral-700"
                    required
                  >
                    <option value="" disabled>Choose style...</option>
                    <option value="Bharatanatyam">Bharatanatyam</option>
                    <option value="Ballet">Ballet</option>
                    <option value="Hip Hop">Hip Hop</option>
                    <option value="Kathak">Kathak</option>
                    <option value="Salsa">Salsa</option>
                    <option value="Contemporary">Contemporary</option>
                  </select>
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-2 flex justify-center items-center">
                <input
                  type="submit"
                  value="Sign Up"
                  className="px-4 py-2.5 bg-[#D4AF37] text-white font-bold tracking-wider uppercase text-xs rounded-full hover:bg-[#AA823B] transition-colors cursor-pointer shadow-sm"
                />
              </div>
            </form>

            {/* Bottom Navigation */}
            <div className="text-center pt-2 border-t border-neutral-100">
              <p className="text-xs text-neutral-500">
                Already have an account? 
                <Link to="/login" className="text-[#D4AF37] font-semibold hover:underline ml-1">Login</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default SignUp;
