import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

function ForgetPass() {
  const handleResetSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const email = data.get("email").trim();

    // Email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      alert("Invalid Email: Please enter a valid email address.");
      return;
    }

    alert("Password reset instructions have been sent to your email!");
    e.target.reset(); // Clear input fields
  };

  return (
    <div className="bg-white text-neutral-800 font-sans antialiased">
      {/* Header & Navigation */}
      <NavBar />

      {/* Title Section */}
      <section className="gold-gradient-bg py-8 border-b border-[#D4AF37]/15">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-2">
          <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold">Account Recovery</span>
          <h2 className="font-serif text-2xl font-bold text-neutral-900">Forgot Password</h2>
          <div className="w-8 h-0.5 bg-[#D4AF37] mx-auto"></div>
        </div>
      </section>

      {/* Form Card Container */}
      <section className="py-20 bg-neutral-50/50 flex items-center justify-center min-h-[50vh]">
        <div className="w-full max-w-md px-6">
          <div className="bg-white border border-[#D4AF37]/25 p-8 sm:p-10 rounded-sm shadow-md space-y-6">
            <div className="space-y-2 text-center">
              <h3 className="font-serif text-xl font-bold text-neutral-900 tracking-wide">Recover Password</h3>
              <p className="text-xs text-neutral-500 leading-relaxed">
                Enter your registered email address below, and we will send you instructions to reset your password.
              </p>
            </div>
            
            <form onSubmit={handleResetSubmit} className="space-y-5 text-sm text-neutral-700">
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

              {/* Submit Button */}
              <div className="pt-2">
                <input
                  type="submit"
                  value="Reset Password"
                  className="w-full px-6 py-2.5 bg-[#D4AF37] text-white font-bold tracking-wider uppercase text-xs rounded-sm hover:bg-[#AA823B] transition-colors cursor-pointer shadow-sm"
                />
              </div>
            </form>

            {/* Bottom Navigation */}
            <div className="text-center pt-2 border-t border-neutral-100">
              <Link to="/login" className="text-xs text-[#D4AF37] font-semibold hover:underline flex items-center justify-center gap-1.5">
                <span>&larr;</span> Back to Login
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default ForgetPass;
