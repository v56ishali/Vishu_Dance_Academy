import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

function Events() {
  return (
    <div className="bg-white text-neutral-800 font-sans antialiased">
      {/* Header & Navigation */}
      <NavBar />

      {/* Title Section */}
      <section className="gold-gradient-bg py-12 border-b border-[#D4AF37]/15">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold">What's Happening</span>
          <h2 className="font-serif text-3xl font-bold text-neutral-900">Upcoming Events & Workshops</h2>
          <div className="w-12 h-0.5 bg-[#D4AF37] mx-auto"></div>
          <p className="text-neutral-600 text-sm max-w-xl mx-auto">
            Stay updated with our latest workshops, annual events, and audition announcements.
          </p>
        </div>
      </section>

      {/* Events List Section */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Event 1 */}
          <div className="bg-white border border-[#D4AF37]/20 p-8 rounded-sm hover:border-[#D4AF37] transition-all duration-300 gold-border-glow flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 bg-[#F9F5EB] border border-[#D4AF37]/35 text-[#D4AF37] font-bold text-[10px] uppercase tracking-wider rounded-full">Workshop</span>
                <span className="text-xs text-neutral-400 font-semibold">15 Days</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-neutral-900 leading-tight">Summer Dance Camp 2026</h3>
              <p className="text-[#D4AF37] text-xs font-semibold uppercase tracking-wider">May 10 - May 25, 2026</p>
              <p className="text-neutral-500 text-sm leading-relaxed">
                A 15-day intensive workshop for beginners in Bharatanatyam, Hip Hop, and Western styles. Guided by certified trainers.
              </p>
            </div>
            <div className="pt-4">
              <Link to="/admission" className="block w-full py-2.5 bg-[#D4AF37] text-white text-center font-bold tracking-wider uppercase text-xs rounded-full hover:bg-[#AA823B] transition-colors shadow-sm">Register Now</Link>
            </div>
          </div>

          {/* Event 2 */}
          <div className="bg-white border border-[#D4AF37]/20 p-8 rounded-sm hover:border-[#D4AF37] transition-all duration-300 gold-border-glow flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 bg-[#F9F5EB] border border-[#D4AF37]/35 text-[#D4AF37] font-bold text-[10px] uppercase tracking-wider rounded-full">Audition</span>
                <span className="text-xs text-neutral-400 font-semibold">Stage Team</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-neutral-900 leading-tight">Annual Dance Audition</h3>
              <p className="text-[#D4AF37] text-xs font-semibold uppercase tracking-wider">June 15, 2026 at 10:00 AM</p>
              <p className="text-neutral-500 text-sm leading-relaxed">
                Audition for our elite performance group representing Vishu's Dance Academy in state and national stage level competitions.
              </p>
            </div>
            <div className="pt-4">
              <Link to="/enquire" className="block w-full py-2.5 border border-[#D4AF37] text-[#D4AF37] text-center font-bold tracking-wider uppercase text-xs rounded-full hover:bg-[#D4AF37] hover:text-white transition-all duration-300">Enquire Now</Link>
            </div>
          </div>

          {/* Event 3 */}
          <div className="bg-white border border-[#D4AF37]/20 p-8 rounded-sm hover:border-[#D4AF37] transition-all duration-300 gold-border-glow flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 bg-neutral-100 border border-neutral-300 text-neutral-500 font-bold text-[10px] uppercase tracking-wider rounded-full">Stage Show</span>
                <span className="text-xs text-neutral-400 font-semibold">Auditorium</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-neutral-900 leading-tight">Mega Stage Performance Night</h3>
              <p className="text-[#D4AF37] text-xs font-semibold uppercase tracking-wider">August 5, 2026 at 6:00 PM</p>
              <p className="text-neutral-500 text-sm leading-relaxed">
                Join us for our annual showcase at Madurai Auditorium with breathtaking performances from all academy student batches.
              </p>
            </div>
            <div className="pt-4">
              <button type="button" disabled className="w-full py-2.5 bg-neutral-100 border border-neutral-200 text-neutral-400 font-bold tracking-wider uppercase text-xs rounded-full cursor-not-allowed">Tickets Soon</button>
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Events;
