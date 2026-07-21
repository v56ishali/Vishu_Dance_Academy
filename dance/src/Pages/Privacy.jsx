import React from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

function Privacy() {
  return (
    <div className="bg-white text-neutral-800 font-sans antialiased">
      {/* Header & Navigation */}
      <NavBar />

      {/* Title Section */}
      <section className="gold-gradient-bg py-12 border-b border-[#D4AF37]/15">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold">Data Protection</span>
          <h2 className="font-serif text-3xl font-bold text-neutral-900">Privacy Policy</h2>
          <div className="w-12 h-0.5 bg-[#D4AF37] mx-auto"></div>
          <p className="text-neutral-600 text-sm max-w-xl mx-auto">
            Learn how we manage, collect, and protect your personal information at our academy.
          </p>
        </div>
      </section>

      {/* Privacy Content Section */}
      <section className="py-20 max-w-4xl mx-auto px-6">
        <div className="bg-white border border-[#D4AF37]/20 p-8 sm:p-12 rounded-sm shadow-xs space-y-10 text-sm text-neutral-600 leading-relaxed">
          
          <p className="text-neutral-500">
            At Vishu's Dance Academy, we prioritize the privacy and security of our students, parents, and visitors. This policy outlines how your data is collected and utilized.
          </p>

          {/* Section 1 */}
          <div className="space-y-3 border-l-2 border-[#D4AF37] pl-4">
            <h3 className="font-serif text-lg font-bold text-neutral-900">1. Information We Collect</h3>
            <p>
              We collect personal details such as <b>Name, Age, Gender, Phone Number, Email, and Address</b> during registration, admission forms, or general queries. We use this information solely to manage student accounts and customize schedules.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-3 border-l-2 border-[#D4AF37] pl-4">
            <h3 className="font-serif text-lg font-bold text-neutral-900">2. How We Use Your Data</h3>
            <p>
              Collected information is utilized to process admissions, verify age eligibility, notify you about workshop changes, handle billing payments, and share newsletters or academy audition announcements.
            </p>
          </div>

          {/* Section 3 */}
          <div className="space-y-3 border-l-2 border-[#D4AF37] pl-4">
            <h3 className="font-serif text-lg font-bold text-neutral-900">3. Data Sharing & Disclosure</h3>
            <p>
              We value your trust. Vishu's Dance Academy <b>does not sell, rent, or lease</b> your personal data or contact details to third-party marketing companies. Data is only accessible to authorized academy administrators.
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-3 border-l-2 border-[#D4AF37] pl-4">
            <h3 className="font-serif text-lg font-bold text-neutral-900">4. Security Measures</h3>
            <p>
              We implement appropriate technical and administrative safeguards to protect your personal details from unauthorized access, leakage, modification, or destruction.
            </p>
          </div>

          {/* Section 5 */}
          <div className="space-y-3 border-l-2 border-[#D4AF37] pl-4">
            <h3 className="font-serif text-lg font-bold text-neutral-900">5. Policy Updates</h3>
            <p>
              We may update this Privacy Policy from time to time to align with legal guidelines or operational improvements. Any updates will be immediately published on this page.
            </p>
          </div>

        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Privacy;
