import React from "react";

import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

function Contact() {
  // Form Submit & Validation Handler
  const handleContactSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const name = data.get("contact_name").trim();
    const email = data.get("contact_email").trim();

    // 1. Name validation (min 3 characters, letters & spaces only)
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

    alert("Message Sent Successfully! We will get back to you shortly.");
    e.target.reset(); // Clear input fields
  };

  return (
    <div className="bg-white text-neutral-800 font-sans antialiased">
      {/* Header & Navigation */}
      <NavBar />

      {/* Title Section */}
      <section className="gold-gradient-bg py-12 border-b border-[#D4AF37]/15">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold">Connect With Us</span>
          <h2 className="font-serif text-3xl font-bold text-neutral-900">Contact Us</h2>
          <div className="w-12 h-0.5 bg-[#D4AF37] mx-auto"></div>
          <p className="text-neutral-600 text-sm max-w-xl mx-auto">
            We would love to hear from you. Visit our studio or leave a message directly through the form.
          </p>
        </div>
      </section>

      {/* Contact Section Content */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Details Card */}
          <div className="lg:col-span-5 bg-white border border-[#D4AF37]/20 p-8 rounded-sm space-y-8 shadow-xs">
            <h3 className="font-serif text-xl font-bold text-neutral-900 tracking-wide">Studio Information</h3>
            <div className="w-8 h-0.5 bg-[#D4AF37]"></div>
            
            <div className="space-y-6 text-sm text-neutral-600">
              {/* Address */}
              <div className="flex items-start gap-4">
                <svg className="w-6 h-6 text-[#D4AF37] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-1">Our Location</h4>
                  <p>Madurai, Tamil Nadu, India</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <svg className="w-6 h-6 text-[#D4AF37] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-1">Call Us</h4>
                  <p><a href="tel:+919876543210" class="hover:text-[#D4AF37] transition-colors">+91 98765 43210</a></p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <svg className="w-6 h-6 text-[#D4AF37] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-1">Email Queries</h4>
                  <p><a href="mailto:info@danceacademy.com" class="hover:text-[#D4AF37] transition-colors">info@danceacademy.com</a></p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Send Message Card */}
          <div className="lg:col-span-7 bg-white border border-[#D4AF37]/20 p-8 sm:p-10 rounded-sm shadow-md">
            <h3 className="font-serif text-xl font-bold text-neutral-900 tracking-wide mb-6">Send Message</h3>
            
            <form onSubmit={handleContactSubmit} className="space-y-5 text-sm text-neutral-700">
              
              {/* Name */}
              <div className="flex flex-col space-y-1.5">
                <label className="font-semibold text-neutral-800">Name</label>
                <input name="contact_name" type="text" placeholder="Your Name" className="w-full px-4 py-2 border border-neutral-300 rounded-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all" required />
              </div>

              {/* Email */}
              <div className="flex flex-col space-y-1.5">
                <label className="font-semibold text-neutral-800">Email</label>
                <input name="contact_email" type="email" placeholder="Your Email Address" className="w-full px-4 py-2 border border-neutral-300 rounded-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all" required />
              </div>

              {/* Message */}
              <div className="flex flex-col space-y-1.5">
                <label className="font-semibold text-neutral-800">Message</label>
                <textarea name="contact_message" rows="5" placeholder="Type your message here..." className="w-full px-4 py-2 border border-neutral-300 rounded-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all font-sans" required></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-4 flex justify-center items-center">
                <input type="submit" value="Send Message" className="px-5 py-2.5 bg-[#D4AF37] text-white font-bold tracking-wider uppercase text-xs rounded-full hover:bg-[#AA823B] transition-colors cursor-pointer shadow-sm" />
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

export default Contact;
