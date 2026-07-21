import React from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

function Terms() {
  return (
    <div className="bg-white text-neutral-800 font-sans antialiased">
      {/* Header & Navigation */}
      <NavBar />

      {/* Title Section */}
      <section className="gold-gradient-bg py-12 border-b border-[#D4AF37]/15">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold">Academy Rules</span>
          <h2 className="font-serif text-3xl font-bold text-neutral-900">Terms & Conditions</h2>
          <div className="w-12 h-0.5 bg-[#D4AF37] mx-auto"></div>
          <p className="text-neutral-600 text-sm max-w-xl mx-auto">
            Please read these terms carefully before enrolling or using our studio facilities.
          </p>
        </div>
      </section>

      {/* Terms Content Section */}
      <section className="py-20 max-w-4xl mx-auto px-6">
        <div className="bg-white border border-[#D4AF37]/20 p-8 sm:p-12 rounded-sm shadow-xs space-y-10 text-sm text-neutral-600 leading-relaxed">
          
          <p className="text-neutral-500">
            Welcome to Vishu's Dance Academy. By registering as a student, visiting our facilities, or accessing our services, you agree to comply with and be bound by the following terms and guidelines.
          </p>

          {/* Term 1 */}
          <div className="space-y-3 border-l-2 border-[#D4AF37] pl-4">
            <h3 className="font-serif text-lg font-bold text-neutral-900">1. Admission Eligibility</h3>
            <p>
              Admission is open to individuals aged <b>5 years and older</b>. For students under the age of 18, a parent or legal guardian must sign the registration form and accept responsibility for minor behavior and timely fee submissions.
            </p>
          </div>

          {/* Term 2 */}
          <div className="space-y-3 border-l-2 border-[#D4AF37] pl-4">
            <h3 className="font-serif text-lg font-bold text-neutral-900">2. Code of Conduct</h3>
            <p>
              All students, parents, and visitors are expected to maintain absolute discipline, show respect towards teachers, and support fellow dancers. The academy reserves the sole right to terminate memberships or suspend individuals exhibiting misconduct, harassment, or damage to academy properties.
            </p>
          </div>

          {/* Term 3 */}
          <div className="space-y-3 border-l-2 border-[#D4AF37] pl-4">
            <h3 className="font-serif text-lg font-bold text-neutral-900">3. Fee Payment Policy</h3>
            <p>
              Academy class tuition fees must be paid in advance at the start of each month. <b>Fees once paid are strictly non-refundable</b> and non-transferable under any circumstances, including absence, course withdrawal, or seasonal breaks.
            </p>
          </div>

          {/* Term 4 */}
          <div className="space-y-3 border-l-2 border-[#D4AF37] pl-4">
            <h3 className="font-serif text-lg font-bold text-neutral-900">4. Costumes & Performance Props</h3>
            <p>
              Performance costumes and dance accessories arranged by the academy for stage shows, auditions, or competitive events remain properties of the academy (unless purchased). They must be handled carefully and returned in pristine condition immediately following the event.
            </p>
          </div>

          {/* Term 5 */}
          <div className="space-y-3 border-l-2 border-[#D4AF37] pl-4">
            <h3 className="font-serif text-lg font-bold text-neutral-900">5. Schedule Modification</h3>
            <p>
              Vishu's Dance Academy reserves the right to change class schedules, merge batches, or substitute trainers when necessary for administrative operational adjustments. Prior notice will be shared with students in case of major timing changes.
            </p>
          </div>

        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Terms;
