import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import profileImg from "../Assets/Profile_img.png";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Check user session
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  // Helper function to check if a tab is active and apply the gold color
  const getLinkClass = (path) => {
    return location.pathname === path
      ? "text-[#D4AF37] transition-colors"
      : "hover:text-[#D4AF37] transition-colors";
  };

  // Logout Handler
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("currentUser");
    localStorage.removeItem("token");
    alert("Logged out successfully.");
    navigate("/");
    window.location.reload(); // Refresh the page to update login states
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#D4AF37]/20 shadow-xs">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-row items-center justify-between gap-4">
        {/* Brand Logo & Name */}
        <h1 className="flex items-center gap-2 font-serif text-base sm:text-lg lg:text-2xl font-bold tracking-wide text-neutral-900 shrink-0">
          <img src={profileImg} width="30" alt="Vishu's Dance Academy Logo" className="object-contain" />
          Vishu's <span className="text-[#D4AF37]">Dance Academy</span>
        </h1>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-x-2 sm:gap-x-3 lg:gap-x-4 text-[11px] lg:text-sm font-semibold tracking-wider uppercase text-neutral-600 whitespace-nowrap">
          <Link to="/" className={getLinkClass("/")}>Home</Link>
          <Link to="/about" className={getLinkClass("/about")}>About Us</Link>
          <Link to="/dance-styles" className={getLinkClass("/dance-styles")}>Dance Styles</Link>
          {!(isLoggedIn && currentUser && (currentUser.role === "admin" || currentUser.role === "trainer")) && (
            <Link to="/admission" className={getLinkClass("/admission")}>Admission</Link>
          )}
          <Link to="/gallery" className={getLinkClass("/gallery")}>Gallery</Link>
          <Link to="/events" className={getLinkClass("/events")}>Events</Link>
          <Link to="/contact" className={getLinkClass("/contact")}>Contact</Link>
          <Link to="/faq" className={getLinkClass("/faq")}>FAQ</Link>

          {/* Desktop Login / Session Actions */}
          {isLoggedIn && currentUser ? (
            <>
              {currentUser.role === "admin" ? (
                <Link to="/admin" className={getLinkClass("/admin")}>Admin Panel</Link>
              ) : (
                <Link to="/dashboard" className={getLinkClass("/dashboard")}>Dashboard</Link>
              )}
              <button
                onClick={handleLogout}
                className="ml-1 px-2.5 py-1 text-[10px] lg:text-xs border border-red-500 text-red-500 rounded-full hover:bg-red-500 hover:text-white transition-all duration-300 cursor-pointer font-bold"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="ml-1 px-2.5 py-1 text-[10px] lg:text-xs border border-[#D4AF37] text-[#D4AF37] rounded-full hover:bg-[#D4AF37] hover:text-white transition-all duration-300">Login</Link>
              <Link to="/signup" className="px-2.5 py-1 text-[10px] lg:text-xs bg-[#D4AF37] text-white rounded-full hover:bg-[#AA823B] transition-all duration-300 shadow-sm shadow-[#D4AF37]/10">Sign Up</Link>
            </>
          )}
        </nav>

        {/* Mobile Hamburger Menu Icon Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-neutral-900 focus:outline-none p-1 cursor-pointer"
          aria-label="Toggle navigation menu"
        >
          <svg className="w-6 h-6 text-neutral-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-[#D4AF37]/15 bg-white py-4 px-6 flex flex-col gap-y-3.5 text-xs font-bold tracking-wider uppercase text-neutral-600 shadow-lg">
          <Link to="/" onClick={() => setIsOpen(false)} className={getLinkClass("/")}>Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className={getLinkClass("/about")}>About Us</Link>
          <Link to="/dance-styles" onClick={() => setIsOpen(false)} className={getLinkClass("/dance-styles")}>Dance Styles</Link>
          {!(isLoggedIn && currentUser && (currentUser.role === "admin" || currentUser.role === "trainer")) && (
            <Link to="/admission" onClick={() => setIsOpen(false)} className={getLinkClass("/admission")}>Admission</Link>
          )}
          <Link to="/gallery" onClick={() => setIsOpen(false)} className={getLinkClass("/gallery")}>Gallery</Link>
          <Link to="/events" onClick={() => setIsOpen(false)} className={getLinkClass("/events")}>Events</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className={getLinkClass("/contact")}>Contact</Link>
          <Link to="/faq" onClick={() => setIsOpen(false)} className={getLinkClass("/faq")}>FAQ</Link>
          
          <div className="h-[1px] bg-neutral-100 my-1"></div>

          {/* Mobile Session Actions */}
          {isLoggedIn && currentUser ? (
            <div className="flex flex-col gap-y-3.5">
              {currentUser.role === "admin" ? (
                <Link to="/admin" onClick={() => setIsOpen(false)} className={getLinkClass("/admin")}>Admin Panel</Link>
              ) : (
                <Link to="/dashboard" onClick={() => setIsOpen(false)} className={getLinkClass("/dashboard")}>Dashboard</Link>
              )}
              <button
                onClick={() => { handleLogout(); setIsOpen(false); }}
                className="text-left w-full text-red-500 font-bold tracking-wider uppercase cursor-pointer"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-x-4 pt-1">
              <Link to="/login" onClick={() => setIsOpen(false)} className="w-1/2 px-4 py-2 border border-[#D4AF37] text-[#D4AF37] rounded-full text-center hover:bg-[#D4AF37] hover:text-white transition-colors duration-300">Login</Link>
              <Link to="/signup" onClick={() => setIsOpen(false)} className="w-1/2 px-4 py-2 bg-[#D4AF37] text-white rounded-full text-center hover:bg-[#AA823B] transition-colors duration-300 shadow-sm shadow-[#D4AF37]/10">Sign Up</Link>
            </div>
          )}
        </div>
      )}
    </header>
  );
}

export default NavBar;
