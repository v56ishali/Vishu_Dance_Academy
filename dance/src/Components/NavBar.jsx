import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import profileImg from "../Assets/Profile_img.png";

function NavBar() {
  // Hook to get the current URL path (e.g. "/" or "/about")
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
        <h1 className="flex items-center gap-2 font-serif text-base sm:text-lg lg:text-2xl font-bold tracking-wide text-neutral-900 shrink-0">
          <img src={profileImg} width="30" alt="Vishu's Dance Academy Logo" className="object-contain" />
          Vishu's <span className="text-[#D4AF37]">Dance Academy</span>
        </h1>
        <nav className="flex items-center gap-x-2 sm:gap-x-3 lg:gap-x-4 text-[11px] lg:text-sm font-semibold tracking-wider uppercase text-neutral-600 whitespace-nowrap overflow-x-auto md:overflow-visible">
          {/* Dynamically highlight the active tab using getLinkClass */}
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

          {/* Conditional Login / Session Actions */}
          {isLoggedIn && currentUser ? (
            <>
              {currentUser.role === "admin" ? (
                <Link to="/admin" className={getLinkClass("/admin")}>Admin Panel</Link>
              ) : (
                <Link to="/dashboard" className={getLinkClass("/dashboard")}>Dashboard</Link>
              )}
              <button
                onClick={handleLogout}
                className="ml-1 px-2.5 py-1 text-[10px] lg:text-xs border border-red-500 text-red-500 rounded-full hover:bg-red-500 hover:text-white transition-all duration-300 cursor-pointer"
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
      </div>
    </header>
  );
}

export default NavBar;
