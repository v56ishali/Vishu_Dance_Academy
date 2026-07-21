import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import { API_BASE_URL } from "../config";

function AdminPanel() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("admissions");
  const [applications, setApplications] = useState([]);
  const [enquiries, setEnquiries] = useState([]);

  // Load MongoDB database data on mount
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    const savedUser = JSON.parse(localStorage.getItem("currentUser"));

    if (!isLoggedIn || !savedUser || savedUser.role !== "admin") {
      alert("Access Denied: Admin authorization required.");
      navigate("/login");
      return;
    }

    const token = localStorage.getItem("token");

    // Fetch applications
    fetch(`${API_BASE_URL}/api/applications`, {
      headers: { "Authorization": `Bearer ${token}` }
    })
      .then((res) => res.json())
      .then((data) => setApplications(data))
      .catch((err) => console.error("Error loading applications:", err));

    // Fetch enquiries
    fetch(`${API_BASE_URL}/api/enquiries`, {
      headers: { "Authorization": `Bearer ${token}` }
    })
      .then((res) => res.json())
      .then((data) => setEnquiries(data))
      .catch((err) => console.error("Error loading enquiries:", err));
  }, [navigate]);

  // Delete an Application from MongoDB
  const handleDeleteApplication = (id) => {
    if (!window.confirm("Are you sure you want to delete this application?")) return;

    fetch(`${API_BASE_URL}/api/applications/${id}`, {
      method: "DELETE",
      headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` }
    })
      .then((res) => {
        if (!res.ok) throw new Error("Delete failed");
        return res.json();
      })
      .then(() => {
        setApplications(applications.filter((app) => app._id !== id));
        alert("Application deleted successfully.");
      })
      .catch((err) => {
        alert("Error deleting application: " + err.message);
      });
  };

  // Update Application Status (Approve / Reject) in MongoDB
  const handleUpdateStatus = (id, newStatus) => {
    fetch(`${API_BASE_URL}/api/applications/${id}`, {
      method: "PUT",
      headers: { 
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      },
      body: JSON.stringify({ status: newStatus }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Status update failed");
        return res.json();
      })
      .then((data) => {
        setApplications(applications.map((app) => (app._id === id ? { ...app, status: newStatus } : app)));
        alert(`Application status updated to ${newStatus} successfully.`);
      })
      .catch((err) => {
        alert("Error updating status: " + err.message);
      });
  };

  // Delete an Enquiry from MongoDB
  const handleDeleteEnquiry = (id) => {
    if (!window.confirm("Are you sure you want to delete this enquiry?")) return;

    fetch(`${API_BASE_URL}/api/enquiries/${id}`, {
      method: "DELETE",
      headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` }
    })
      .then((res) => {
        if (!res.ok) throw new Error("Delete failed");
        return res.json();
      })
      .then(() => {
        setEnquiries(enquiries.filter((enq) => enq._id !== id));
        alert("Enquiry deleted successfully.");
      })
      .catch((err) => {
        alert("Error deleting enquiry: " + err.message);
      });
  };

  return (
    <div className="bg-white text-neutral-800 font-sans antialiased min-h-screen flex flex-col justify-between">
      <NavBar />

      <section className="gold-gradient-bg py-12 border-b border-[#D4AF37]/15">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold">Control Center</span>
          <h2 className="font-serif text-3xl font-bold text-neutral-900">Administration Panel</h2>
          <div className="w-12 h-0.5 bg-[#D4AF37] mx-auto"></div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 py-12 flex-grow w-full">
        {/* Navigation Tabs */}
        <div className="flex border-b border-neutral-200 mb-8 gap-6 text-sm font-semibold uppercase tracking-wider">
          <button
            onClick={() => setActiveTab("admissions")}
            className={`pb-3 focus:outline-none transition-all cursor-pointer ${
              activeTab === "admissions"
                ? "border-b-2 border-[#D4AF37] text-neutral-900"
                : "text-neutral-400 hover:text-[#D4AF37]"
            }`}
          >
            Admissions & Applications ({applications.length})
          </button>
          <button
            onClick={() => setActiveTab("enquiries")}
            className={`pb-3 focus:outline-none transition-all cursor-pointer ${
              activeTab === "enquiries"
                ? "border-b-2 border-[#D4AF37] text-neutral-900"
                : "text-neutral-400 hover:text-[#D4AF37]"
            }`}
          >
            General Enquiries ({enquiries.length})
          </button>
        </div>

        {/* Admissions Tab */}
        {activeTab === "admissions" && (
          <div className="bg-white border border-[#D4AF37]/20 rounded-sm overflow-hidden shadow-xs">
            {applications.length === 0 ? (
              <p className="p-8 text-center text-neutral-400 text-sm">No applications submitted yet.</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm border-collapse">
                  <thead>
                    <tr className="bg-neutral-50 border-b border-[#D4AF37]/10 font-serif text-neutral-900">
                      <th className="p-4">Type</th>
                      <th className="p-4">Name</th>
                      <th className="p-4">Email</th>
                      <th className="p-4">Phone</th>
                      <th className="p-4">Style / Specialty</th>
                      <th className="p-4">Batch / Experience</th>
                      <th className="p-4">Date</th>
                      <th className="p-4">Status</th>
                      <th className="p-4 text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {applications.map((app, index) => (
                      <tr key={index} className="border-b border-neutral-100 hover:bg-neutral-50/50">
                        <td className="p-4">
                          <span className={`px-2.5 py-1 text-[10px] uppercase font-bold rounded-full border ${
                            app.type === "Student Admission"
                              ? "bg-blue-50 border-blue-200 text-blue-600"
                              : "bg-emerald-50 border-emerald-200 text-emerald-600"
                          }`}>
                            {app.type}
                          </span>
                        </td>
                        <td className="p-4 font-semibold text-neutral-900">{app.name}</td>
                        <td className="p-4">{app.email}</td>
                        <td className="p-4">{app.phone}</td>
                        <td className="p-4">{app.style || app.specialization || "N/A"}</td>
                        <td className="p-4">{app.batch || app.experience || "N/A"}</td>
                        <td className="p-4 text-neutral-400 text-xs">{app.date}</td>
                        <td className="p-4">
                          <span className={`px-2.5 py-1 text-[10px] uppercase font-bold rounded-full border ${
                            app.status === "Approved"
                              ? "bg-emerald-50 border-emerald-200 text-emerald-600"
                              : app.status === "Rejected"
                              ? "bg-rose-50 border-rose-200 text-rose-600"
                              : "bg-amber-50 border-amber-200 text-amber-600"
                          }`}>
                            {app.status || "Pending"}
                          </span>
                        </td>
                        <td className="p-4 text-center">
                          <div className="flex flex-row justify-center items-center gap-2">
                            <button
                              onClick={() => handleUpdateStatus(app._id, "Approved")}
                              className="px-3 py-1 bg-emerald-50 text-emerald-600 border border-emerald-200 rounded-full text-xs font-semibold hover:bg-emerald-600 hover:text-white transition-all cursor-pointer"
                            >
                              Approve
                            </button>
                            <button
                              onClick={() => handleUpdateStatus(app._id, "Rejected")}
                              className="px-3 py-1 bg-rose-50 text-rose-600 border border-rose-200 rounded-full text-xs font-semibold hover:bg-rose-600 hover:text-white transition-all cursor-pointer"
                            >
                              Reject
                            </button>
                            <button
                              onClick={() => handleDeleteApplication(app._id)}
                              className="px-3 py-1 bg-red-50 text-red-600 border border-red-200 rounded-full text-xs font-semibold hover:bg-red-600 hover:text-white transition-all cursor-pointer"
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* Enquiries Tab */}
        {activeTab === "enquiries" && (
          <div className="bg-white border border-[#D4AF37]/20 rounded-sm overflow-hidden shadow-xs">
            {enquiries.length === 0 ? (
              <p className="p-8 text-center text-neutral-400 text-sm">No enquiries submitted yet.</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm border-collapse">
                  <thead>
                    <tr className="bg-neutral-50 border-b border-[#D4AF37]/10 font-serif text-neutral-900">
                      <th className="p-4">Name</th>
                      <th className="p-4">Email</th>
                      <th className="p-4">Phone</th>
                      <th className="p-4">Message / Query Details</th>
                      <th className="p-4">Date</th>
                      <th className="p-4 text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {enquiries.map((enq, index) => (
                      <tr key={index} className="border-b border-neutral-100 hover:bg-neutral-50/50">
                        <td className="p-4 font-semibold text-neutral-900">{enq.name}</td>
                        <td className="p-4">{enq.email}</td>
                        <td className="p-4">{enq.phone}</td>
                        <td className="p-4 text-neutral-600 max-w-xs truncate">{enq.query}</td>
                        <td className="p-4 text-neutral-400 text-xs">{enq.date}</td>
                        <td className="p-4 text-center">
                          <button
                            onClick={() => handleDeleteEnquiry(enq._id)}
                            className="px-3 py-1.5 bg-red-50 text-red-600 border border-red-200 rounded-full text-xs font-semibold hover:bg-red-600 hover:text-white transition-all cursor-pointer"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default AdminPanel;
