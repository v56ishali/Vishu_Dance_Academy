import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import { API_BASE_URL } from "../config";

function Dashboard() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);
  const [myApplications, setMyApplications] = useState([]);
  const [trainerStudents, setTrainerStudents] = useState([]);

  // Profile Edit States
  const [profileName, setProfileName] = useState("");
  const [profilePhone, setProfilePhone] = useState("");

  // Check login and fetch details on mount
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    const savedUser = JSON.parse(localStorage.getItem("currentUser"));

    if (!isLoggedIn || !savedUser) {
      alert("Please login first to view your dashboard.");
      navigate("/login");
      return;
    }

    setCurrentUser(savedUser);
    setProfileName(savedUser.name || "");
    setProfilePhone(savedUser.phone || "");

    const token = localStorage.getItem("token");

    if (savedUser.role === "trainer") {
      // Fetch students enrolled in the trainer's specialization style
      fetch(`${API_BASE_URL}/api/trainer/students?specialization=${encodeURIComponent(savedUser.specialization)}`, {
        headers: { "Authorization": `Bearer ${token}` }
      })
        .then((res) => {
          if (!res.ok) throw new Error("Failed to load trainer students");
          return res.json();
        })
        .then((data) => {
          setTrainerStudents(data);
        })
        .catch((err) => {
          console.error("Error loading trainer roster:", err);
        });
    } else {
      // Fetch applications matching the current user's email from backend (Student View)
      fetch(`${API_BASE_URL}/api/applications?email=${encodeURIComponent(savedUser.email)}`, {
        headers: { "Authorization": `Bearer ${token}` }
      })
        .then((res) => {
          if (!res.ok) throw new Error("Failed to load applications");
          return res.json();
        })
        .then((data) => {
          setMyApplications(data);
        })
        .catch((err) => {
          console.error("Error loading student dashboard data:", err);
        });
    }
  }, [navigate]);

  // Log Out Handler
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("currentUser");
    localStorage.removeItem("token");
    alert("Logged out successfully.");
    navigate("/");
    window.location.reload(); // Refresh navbar links
  };

  // Profile Update Handler
  const handleProfileUpdate = (e) => {
    e.preventDefault();
    fetch(`${API_BASE_URL}/api/profile`, {
      method: "PUT",
      headers: { 
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      },
      body: JSON.stringify({
        email: currentUser.email,
        name: profileName.trim(),
        phone: profilePhone.trim(),
      }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Profile update failed");
        return res.json();
      })
      .then((data) => {
        const updatedUser = data.user;
        localStorage.setItem("currentUser", JSON.stringify(updatedUser));
        setCurrentUser(updatedUser);
        alert("Profile details updated successfully.");
      })
      .catch((err) => {
        alert("Error updating profile details: " + err.message);
      });
  };

  // Helper to map dance style to a schedule
  const getStyleSchedule = (style) => {
    const styleLower = style ? style.toLowerCase() : "";
    if (styleLower.includes("bharatanatyam")) {
      return "Mon, Wed, Fri | 5:00 PM - 6:30 PM (Classroom A)";
    } else if (styleLower.includes("ballet")) {
      return "Tue, Thu, Sat | 6:00 PM - 7:30 PM (Classroom B)";
    } else if (styleLower.includes("hip hop") || styleLower.includes("street")) {
      return "Mon, Wed, Sat | 7:00 PM - 8:30 PM (Classroom C)";
    } else if (styleLower.includes("kathak")) {
      return "Mon, Tue, Thu | 3:30 PM - 5:00 PM (Classroom A)";
    } else if (styleLower.includes("salsa")) {
      return "Fri, Sat | 6:30 PM - 8:00 PM (Fusion Hall)";
    } else if (styleLower.includes("contemporary")) {
      return "Wed, Fri, Sun | 4:00 PM - 5:30 PM (Studio 2)";
    } else {
      return "Tue, Thu | 4:30 PM - 6:00 PM (Fusion Hall)";
    }
  };

  if (!currentUser) return null;

  return (
    <div className="bg-white text-neutral-800 font-sans antialiased min-h-screen flex flex-col justify-between">
      <NavBar />

      {/* Welcome Banner */}
      <section className="gold-gradient-bg py-12 border-b border-[#D4AF37]/15">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold">Welcome Back</span>
            <h2 className="font-serif text-3xl font-bold text-neutral-900">{currentUser.name}</h2>
            <p className="text-neutral-500 text-xs font-semibold">User Email: {currentUser.email}</p>
          </div>
          <div>
            <button
              onClick={handleLogout}
              className="px-5 py-2.5 bg-neutral-100 hover:bg-red-50 hover:text-red-600 border border-neutral-200 text-neutral-600 rounded-full font-bold uppercase text-[10px] tracking-wider transition-all cursor-pointer"
            >
              Sign Out
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-6 py-12 flex-grow w-full space-y-12">
        {currentUser.role === "trainer" ? (
          /* ========================================================
             TRAINER DASHBOARD VIEW
             ======================================================== */
          <div className="space-y-10">
            <h3 className="font-serif text-xl font-bold text-neutral-900 border-b border-neutral-100 pb-3 flex flex-row justify-between items-center gap-4">
              <span>Dance Specialization: <span className="text-[#D4AF37]">{currentUser.specialization}</span></span>
              <span className="text-[10px] tracking-widest uppercase font-bold px-3 py-1 bg-[#D4AF37]/10 text-[#D4AF37] rounded-full">
                Trainer Portal
              </span>
            </h3>

            {/* Roster & Stats Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Teaching Timetable */}
              <div className="lg:col-span-2 bg-white border border-[#D4AF37]/20 p-6 rounded-sm shadow-xs space-y-4">
                <h4 className="font-serif text-lg font-bold text-neutral-900 flex items-center gap-2">
                  <span className="text-[#D4AF37]">📅</span> Weekly Teaching Timetable
                </h4>
                <div className="bg-neutral-50 p-5 rounded-sm border border-neutral-200 text-sm text-neutral-700 space-y-2">
                  <p><b>Assigned Course:</b> {currentUser.specialization} Dance Technique</p>
                  <p><b>Weekly Slots:</b> <span className="text-[#D4AF37] font-semibold">{getStyleSchedule(currentUser.specialization)}</span></p>
                  <p><b>Morning Batch:</b> 8:00 AM - 9:30 AM (Monday - Saturday)</p>
                  <p><b>Evening Batch:</b> 5:00 PM - 6:30 PM (Monday - Saturday)</p>
                </div>
              </div>

              {/* Summary Stats */}
              <div className="bg-white border border-[#D4AF37]/20 p-6 rounded-sm shadow-xs flex flex-col justify-between">
                <div>
                  <h4 className="font-serif text-lg font-bold text-neutral-900 flex items-center gap-2">
                    <span className="text-[#D4AF37]">👥</span> Enrolled Roster
                  </h4>
                  <p className="text-neutral-500 text-xs mt-2 leading-relaxed">
                    Total number of active students registered under your course style specialization.
                  </p>
                </div>
                <div className="text-4xl font-bold text-[#D4AF37] bg-[#D4AF37]/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto my-4 shadow-sm">
                  {trainerStudents.length}
                </div>
              </div>
            </div>

            {/* Students Table */}
            <div className="space-y-4">
              <h4 className="font-serif text-lg font-bold text-neutral-900">Enrolled Student Roster</h4>
              {trainerStudents.length === 0 ? (
                <div className="bg-neutral-50 border border-neutral-200 p-8 text-center rounded-sm text-neutral-500 text-sm">
                  No students have enrolled in the {currentUser.specialization} course yet.
                </div>
              ) : (
                <div className="overflow-x-auto border border-neutral-200 rounded-sm shadow-xs">
                  <table className="w-full text-left border-collapse bg-white text-sm">
                    <thead>
                      <tr className="bg-neutral-50 border-b border-neutral-200 text-neutral-700 font-bold uppercase text-[10px] tracking-wider">
                        <th className="p-4">Student Name</th>
                        <th className="p-4">Age / Gender</th>
                        <th className="p-4">Phone Number</th>
                        <th className="p-4">Email</th>
                        <th className="p-4">Preferred Batch</th>
                        <th className="p-4">Registration Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {trainerStudents.map((student, idx) => (
                        <tr key={idx} className="border-b border-neutral-100 hover:bg-neutral-50/50 text-neutral-600">
                          <td className="p-4 font-semibold text-neutral-800">{student.name}</td>
                          <td className="p-4">{student.age || "N/A"} / {student.gender || "N/A"}</td>
                          <td className="p-4">{student.phone}</td>
                          <td className="p-4">{student.email}</td>
                          <td className="p-4">
                            <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                              student.batch === "Morning"
                                ? "bg-amber-50 text-amber-600 border border-amber-200"
                                : "bg-indigo-50 text-indigo-600 border border-indigo-200"
                            }`}>
                              {student.batch || "Regular"}
                            </span>
                          </td>
                          <td className="p-4 text-xs text-neutral-400">{student.date}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        ) : (
          /* ========================================================
             STUDENT DASHBOARD VIEW WITH PROFILE SETTINGS
             ======================================================== */
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Left 2 Columns: Registered Courses */}
            <div className="lg:col-span-2 space-y-6">
              <h3 className="font-serif text-xl font-bold text-neutral-900 border-b border-neutral-100 pb-3">
                My Registered Courses & Roles
              </h3>

              {myApplications.length === 0 ? (
                <div className="bg-neutral-50 border border-[#D4AF37]/15 p-8 text-center rounded-sm space-y-4">
                  <p className="text-neutral-500 text-sm max-w-md mx-auto">
                    You haven't submitted any admissions or trainer application forms yet. Go ahead and enroll now to get assigned to a class batch!
                  </p>
                  <Link
                    to="/admission"
                    className="inline-block px-5 py-2 bg-[#D4AF37] text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-[#AA823B] transition-colors"
                  >
                    Enroll / Apply Now
                  </Link>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {myApplications.map((app, index) => (
                    <div
                      key={index}
                      className="bg-white border border-[#D4AF37]/20 p-6 rounded-sm shadow-xs hover:border-[#D4AF37] transition-all duration-300 flex flex-col justify-between"
                    >
                      <div className="space-y-3">
                        <span className={`inline-block px-2.5 py-1 text-[10px] uppercase font-bold rounded-full border ${
                          app.type === "Student Admission"
                            ? "bg-blue-50 border-blue-200 text-blue-600"
                            : "bg-emerald-50 border-emerald-200 text-emerald-600"
                        }`}>
                          {app.type}
                        </span>

                        <h4 className="font-serif text-lg font-bold text-neutral-900">
                          {app.style || app.specialization || "General Program"}
                        </h4>

                        {/* Schedule & Live Status */}
                        <div className="text-sm space-y-1 text-neutral-600 pt-2">
                          <p>
                            <b>Weekly Schedule:</b>{" "}
                            <span className="text-[#D4AF37] font-semibold">
                              {getStyleSchedule(app.style || app.specialization)}
                            </span>
                          </p>
                          <p>
                            <b>Class Batch:</b> {app.batch || "Regular Practice Slot"}
                          </p>
                          <p>
                            <b>Status:</b>{" "}
                            <span className={`font-bold uppercase text-xs ${
                              app.status === "Approved"
                                ? "text-emerald-600"
                                : app.status === "Rejected"
                                ? "text-rose-600"
                                : "text-amber-500"
                            }`}>
                              {app.status || "Pending"}
                            </span>
                          </p>
                        </div>
                      </div>

                      <p className="text-[10px] text-neutral-400 mt-4 border-t border-neutral-100 pt-3">
                        Submitted on: {app.date}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Right 1 Column: Profile Edit Form */}
            <div className="bg-white border border-[#D4AF37]/20 p-6 sm:p-8 rounded-sm shadow-xs space-y-6">
              <div className="border-b border-neutral-100 pb-3">
                <h4 className="font-serif text-lg font-bold text-neutral-900 flex items-center gap-2">
                  <span className="text-[#D4AF37]">👤</span> Profile Settings
                </h4>
                <p className="text-neutral-400 text-xs mt-1">Manage your student contact details</p>
              </div>

              <form onSubmit={handleProfileUpdate} className="space-y-5 text-sm">
                <div className="flex flex-col space-y-1.5">
                  <label className="font-semibold text-neutral-700">Full Name</label>
                  <input
                    type="text"
                    value={profileName}
                    onChange={(e) => setProfileName(e.target.value)}
                    className="w-full px-3 py-2 border border-neutral-300 rounded-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all text-neutral-700"
                    required
                  />
                </div>

                <div className="flex flex-col space-y-1.5">
                  <label className="font-semibold text-neutral-700">Phone Number</label>
                  <input
                    type="tel"
                    value={profilePhone}
                    onChange={(e) => setProfilePhone(e.target.value)}
                    className="w-full px-3 py-2 border border-neutral-300 rounded-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all text-neutral-700"
                    required
                  />
                </div>

                <div className="flex flex-col space-y-1.5">
                  <label className="font-semibold text-neutral-400">Email Address (Locked)</label>
                  <input
                    type="email"
                    value={currentUser.email}
                    disabled
                    className="w-full px-3 py-2 bg-neutral-50 border border-neutral-200 text-neutral-400 rounded-sm cursor-not-allowed"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 bg-[#D4AF37] hover:bg-[#AA823B] text-white text-xs font-bold uppercase tracking-wider rounded-full transition-colors cursor-pointer shadow-sm text-center"
                >
                  Save Profile
                </button>
              </form>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default Dashboard;
