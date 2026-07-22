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
                    className="absolute inset-y-0 right-0 flex items-center pr-3.5 text-neutral-400 hover:text-[#D4AF37] transition-colors cursor-pointer"
                    aria-label="Toggle password visibility"
                  >
                    {showPassword ? (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.815 7.815 3 3m-3-3-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.43 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
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
                    className="absolute inset-y-0 right-0 flex items-center pr-3.5 text-neutral-400 hover:text-[#D4AF37] transition-colors cursor-pointer"
                    aria-label="Toggle password visibility"
                  >
                    {showConfirmPassword ? (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.815 7.815 3 3m-3-3-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.43 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
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
