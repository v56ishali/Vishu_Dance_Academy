import React from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import { API_BASE_URL } from "../config";

function Enquire() {
  const handleEnquirySubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const name = data.get("name").trim();
    const email = data.get("email").trim();
    const phone = data.get("phone").trim();

    // 1. Name validation (min 3 chars, letters and spaces only)
    const nameRegex = /^[a-zA-Z\s]{3,}$/;
    if (!nameRegex.test(name)) {
      alert("Invalid Name: Please enter at least 3 characters containing only letters and spaces.");
      return;
    }

    // 2. Email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      alert("Invalid Email: Please enter a valid email address.");
      return;
    }

    // 3. Phone validation (exactly 10 digits)
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      alert("Invalid Phone Number: Please enter a valid 10-digit number.");
      return;
    }

    const newQuery = {
      name,
      email,
      phone,
      query: data.get("query"),
      date: new Date().toLocaleDateString()
    };

    fetch(`${API_BASE_URL}/api/enquiries`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newQuery)
    })
      .then((res) => {
        if (!res.ok) throw new Error("Submission failed");
        return res.json();
      })
      .then(() => {
        alert("Enquiry Submitted Successfully! We will contact you soon.");
        e.target.reset(); // Clear input fields
      })
      .catch((err) => {
        alert("Failed to submit enquiry: " + err.message);
      });
  };

  return (
    <div className="bg-white text-neutral-800 font-sans antialiased">
      {/* Header & Navigation */}
      <NavBar />

      {/* Title Section */}
      <section className="gold-gradient-bg py-12 border-b border-[#D4AF37]/15">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold">Get In Touch</span>
          <h2 className="font-serif text-3xl font-bold text-neutral-900">General Enquiry</h2>
          <div className="w-12 h-0.5 bg-[#D4AF37] mx-auto"></div>
          <p className="text-neutral-600 text-sm max-w-xl mx-auto">
            Have any questions regarding our batches, fee packages, or trainers? Fill out the details below.
          </p>
        </div>
      </section>

      {/* Form Card Container */}
      <section className="py-16 bg-neutral-50/50">
        <div className="max-w-md mx-auto px-6">
          <div className="bg-white border border-[#D4AF37]/25 p-8 rounded-sm shadow-md">
            <h3 className="font-serif text-lg font-bold text-center text-neutral-900 mb-8 tracking-wide">Enquiry Form</h3>
            
            <form onSubmit={handleEnquirySubmit} className="space-y-5 text-sm text-neutral-700">
              {/* Name */}
              <div className="flex flex-col space-y-1.5">
                <label className="font-semibold text-neutral-800">Your Name</label>
                <input
                  name="name"
                  type="text"
                  placeholder="Enter name"
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

              {/* Enquiry Description */}
              <div className="flex flex-col space-y-1.5">
                <label className="font-semibold text-neutral-800">Your Query Details</label>
                <textarea
                  name="query"
                  rows="5"
                  placeholder="Type details here..."
                  className="w-full px-4 py-2 border border-neutral-300 rounded-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all font-sans"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-4 flex justify-center items-center">
                <input
                  type="submit"
                  value="Submit Enquiry"
                  className="px-2 py-2.5 bg-[#D4AF37] text-white font-bold tracking-wider uppercase text-xs rounded-full hover:bg-[#AA823B] transition-colors cursor-pointer shadow-sm"
                />
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Enquire;
