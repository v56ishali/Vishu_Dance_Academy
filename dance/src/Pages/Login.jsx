import React from "react";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import { API_BASE_URL } from "../config";

function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const email = data.get("email").trim();
    const password = data.get("password");

    // 1. Email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      alert("Invalid Email: Please enter a valid email address.");
      return;
    }

    // 2. Password validation (min 6 characters)
    if (password.length < 6) {
      alert("Invalid Password: Password must be at least 6 characters long.");
      return;
    }

    fetch(`${API_BASE_URL}/api/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((err) => { throw new Error(err.message || "Login failed") });
        }
        return res.json();
      })
      .then((data) => {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("token", data.token);
        localStorage.setItem("currentUser", JSON.stringify(data.user));
        alert(data.message || `Login Successful!`);
        if (data.user.role === "admin") {
          navigate("/admin");
        } else {
          navigate("/");
        }
      })
      .catch((err) => {
        alert("Login Failed: " + err.message);
      });
  };

  return (
    <div className="bg-white text-neutral-800 font-sans antialiased">
      {/* Header & Navigation */}
      <NavBar />

      {/* Title Section */}
      <section className="gold-gradient-bg py-8 border-b border-[#D4AF37]/15">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-2">
          <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold">Portal Access</span>
          <h2 className="font-serif text-2xl font-bold text-neutral-900">Academy Login</h2>
          <div className="w-8 h-0.5 bg-[#D4AF37] mx-auto"></div>
        </div>
      </section>

      {/* Form Card Container */}
      <section className="py-20 bg-neutral-50/50 flex items-center justify-center min-h-[50vh]">
        <div className="w-full max-w-md px-6">
          <div className="bg-white border border-[#D4AF37]/25 p-8 sm:p-10 rounded-sm shadow-md space-y-6">
            <h3 className="font-serif text-xl font-bold text-center text-neutral-900 tracking-wide">Welcome Back</h3>
            
            <form onSubmit={handleLoginSubmit} className="space-y-5 text-sm text-neutral-700">
              {/* Email */}
              <div className="flex flex-col space-y-1.5">
                <label className="font-semibold text-neutral-800">Email Address</label>
                <input
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border border-neutral-300 rounded-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
                  required
                />
              </div>

              {/* Password */}
              <div className="flex flex-col space-y-1.5">
                <div className="flex justify-between items-center">
                  <label className="font-semibold text-neutral-800">Password</label>
                  <Link to="/forgot-password" className="text-xs text-[#D4AF37] hover:underline font-semibold">Forgot Password?</Link>
                </div>
                <div className="relative w-full">
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
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

              {/* Submit Button */}
              <div className="pt-2">
                <input
                  type="submit"
                  value="Login"
                  className="w-full px-6 py-2.5 bg-[#D4AF37] text-white font-bold tracking-wider uppercase text-xs rounded-sm hover:bg-[#AA823B] transition-colors cursor-pointer shadow-sm"
                />
              </div>
            </form>

            {/* Bottom Navigation */}
            <div className="text-center pt-2 border-t border-neutral-100">
              <p className="text-xs text-neutral-500">
                Don't have an account? 
                <Link to="/signup" className="text-[#D4AF37] font-semibold hover:underline ml-1">Sign Up</Link>
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

export default Login;
