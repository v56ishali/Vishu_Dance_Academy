import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for subscribing to our newsletter!");
  };

  return (
    <footer className="bg-[#FDFBF7] border-t border-[#D4AF37]/25 py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 text-sm text-neutral-600">
        <div className="md:col-span-4 space-y-4">
          <h3 className="font-serif text-xl font-bold text-neutral-900">Vishu's <span className="text-[#D4AF37]">Dance Academy</span></h3>
          <p className="leading-relaxed">Educating and inspiring passionate dancers through grace, discipline, and artistic performance.</p>
        </div>
        <div className="md:col-span-4 space-y-4">
          <h4 className="font-serif text-base font-bold text-neutral-900">Contact Details</h4>
          <p><b>Email:</b> <a href="mailto:vishu@danceacad.com" className="hover:text-[#D4AF37]">vishu@danceacad.com</a></p>
          <p><b>Phone:</b> <a href="tel:+919876543210" className="hover:text-[#D4AF37]">+91 98765 43210</a></p>
          <p><b>Address:</b> Madurai, Tamil Nadu, India</p>
        </div>
        <div className="md:col-span-4 space-y-4">
          <h4 className="font-serif text-base font-bold text-neutral-900">Stay Updated</h4>
          <p>Subscribe to our seasonal newsletters and auditions announcements.</p>
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input type="email" placeholder="Your email address" className="w-full px-4 py-2 border border-[#D4AF37]/30 rounded-full focus:outline-none focus:border-[#D4AF37] text-sm" required />
            <button type="submit" className="px-4 py-2 bg-[#D4AF37] text-white font-bold hover:bg-[#AA823B] rounded-full transition-colors">Subscribe</button>
          </form>
          <div className="flex items-center gap-4 pt-2">
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" className="hover:text-[#D4AF37] font-semibold text-xs tracking-wider uppercase">YouTube</a>
            <span className="text-neutral-300">|</span>
            <a href="https://www.instagram.com/?hl=en" target="_blank" rel="noreferrer" className="hover:text-[#D4AF37] font-semibold text-xs tracking-wider uppercase">Instagram</a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-6 border-t border-[#D4AF37]/10 flex flex-col items-center gap-4 text-xs">
        <div className="flex items-center gap-4">
          <Link to="/terms" className="hover:text-[#D4AF37] font-semibold">Terms & Conditions</Link>
          <span className="text-neutral-300">|</span>
          <Link to="/privacy" className="hover:text-[#D4AF37] font-semibold">Privacy Policy</Link>
        </div>
        <p className="text-neutral-400 font-semibold text-center">&copy; 2026 Vishu's Dance Academy. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
