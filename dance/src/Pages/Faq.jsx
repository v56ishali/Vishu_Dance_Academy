import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

function Faq() {
  return (
    <div className="bg-white text-neutral-800 font-sans antialiased">
      {/* Header & Navigation */}
      <NavBar />

      {/* Title Section */}
      <section className="gold-gradient-bg py-12 border-b border-[#D4AF37]/15">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold">Help Center</span>
          <h2 className="font-serif text-3xl font-bold text-neutral-900">Frequently Asked Questions</h2>
          <div className="w-12 h-0.5 bg-[#D4AF37] mx-auto"></div>
          <p className="text-neutral-600 text-sm max-w-xl mx-auto">
            Find quick answers to common queries regarding registration, batches, certificates, and costumes.
          </p>
        </div>
      </section>

      {/* FAQ Accordions Container */}
      <section className="py-16 max-w-3xl mx-auto px-6">
        <div className="space-y-4">
          
          {/* Q1 */}
          <details className="group border border-[#D4AF37]/20 rounded-sm bg-white overflow-hidden transition-all duration-300 [&_summary::-webkit-details-marker]:hidden" open>
            <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-[#FDFBF7] select-none">
              <span className="font-serif font-bold text-neutral-900 group-open:text-[#D4AF37]">1. What is the minimum age to enroll?</span>
              <span className="transition group-open:rotate-180 text-[#D4AF37]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </summary>
            <div className="p-5 border-t border-[#D4AF37]/10 bg-[#FDFBF7]/30 text-sm text-neutral-600 leading-relaxed">
              The minimum age for enrollment is <b>5 years and above</b>. We have batch divisions curated specifically to match age groups.
            </div>
          </details>

          {/* Q2 */}
          <details className="group border border-[#D4AF37]/20 rounded-sm bg-white overflow-hidden transition-all duration-300 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-[#FDFBF7] select-none">
              <span className="font-serif font-bold text-neutral-900 group-open:text-[#D4AF37]">2. Do absolute beginners join your classes?</span>
              <span className="transition group-open:rotate-180 text-[#D4AF37]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </summary>
            <div className="p-5 border-t border-[#D4AF37]/10 bg-[#FDFBF7]/30 text-sm text-neutral-600 leading-relaxed">
              <b>Yes, absolutely.</b> We divide our curriculum so that beginners are nurtured with basics before moving into intermediate choreography parameters.
            </div>
          </details>

          {/* Q3 */}
          <details className="group border border-[#D4AF37]/20 rounded-sm bg-white overflow-hidden transition-all duration-300 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-[#FDFBF7] select-none">
              <span className="font-serif font-bold text-neutral-900 group-open:text-[#D4AF37]">3. Is there a certification program?</span>
              <span className="transition group-open:rotate-180 text-[#D4AF37]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </summary>
            <div className="p-5 border-t border-[#D4AF37]/10 bg-[#FDFBF7]/30 text-sm text-neutral-600 leading-relaxed">
              <b>Yes.</b> Certificates of achievement are awarded to students upon successful evaluation and completion of their respective levels.
            </div>
          </details>

          {/* Q4 */}
          <details className="group border border-[#D4AF37]/20 rounded-sm bg-white overflow-hidden transition-all duration-300 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-[#FDFBF7] select-none">
              <span className="font-serif font-bold text-neutral-900 group-open:text-[#D4AF37]">4. Do you provide performance costumes?</span>
              <span className="transition group-open:rotate-180 text-[#D4AF37]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </summary>
            <div className="p-5 border-t border-[#D4AF37]/10 bg-[#FDFBF7]/30 text-sm text-neutral-600 leading-relaxed">
              <b>Yes.</b> Costumes and stage props are arranged by the academy administration for all group stage showcases and competitive performances.
            </div>
          </details>

          {/* Q5 */}
          <details className="group border border-[#D4AF37]/20 rounded-sm bg-white overflow-hidden transition-all duration-300 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-[#FDFBF7] select-none">
              <span className="font-serif font-bold text-neutral-900 group-open:text-[#D4AF37]">5. How can I apply for admission?</span>
              <span className="transition group-open:rotate-180 text-[#D4AF37]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </summary>
            <div className="p-5 border-t border-[#D4AF37]/10 bg-[#FDFBF7]/30 text-sm text-neutral-600 leading-relaxed">
              You can easily register by navigating to our online <Link to="/admission" className="text-[#D4AF37] font-semibold hover:underline">Admission form</Link>, filling out your details, and submitting it directly, or by visiting our studio in Madurai.
            </div>
          </details>

          {/* Q6 */}
          <details className="group border border-[#D4AF37]/20 rounded-sm bg-white overflow-hidden transition-all duration-300 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-[#FDFBF7] select-none">
              <span className="font-serif font-bold text-neutral-900 group-open:text-[#D4AF37]">6. What is the duration of each dance style level?</span>
              <span className="transition group-open:rotate-180 text-[#D4AF37]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </summary>
            <div className="p-5 border-t border-[#D4AF37]/10 bg-[#FDFBF7]/30 text-sm text-neutral-600 leading-relaxed">
              Course durations vary: <b>Beginner Level</b> is 3 Months, <b>Intermediate Level</b> is 6 Months, and <b>Advanced Level</b> is 1 Year.
            </div>
          </details>

          {/* Q7 */}
          <details className="group border border-[#D4AF37]/20 rounded-sm bg-white overflow-hidden transition-all duration-300 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-[#FDFBF7] select-none">
              <span className="font-serif font-bold text-neutral-900 group-open:text-[#D4AF37]">7. Do you offer morning or evening batches?</span>
              <span className="transition group-open:rotate-180 text-[#D4AF37]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </summary>
            <div className="p-5 border-t border-[#D4AF37]/10 bg-[#FDFBF7]/30 text-sm text-neutral-600 leading-relaxed">
              <b>Both.</b> We provide flexible batches, allowing you to select either a Morning or an Evening slot during your admission depending on your availability.
            </div>
          </details>

          {/* Q8 */}
          <details className="group border border-[#D4AF37]/20 rounded-sm bg-white overflow-hidden transition-all duration-300 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-[#FDFBF7] select-none">
              <span className="font-serif font-bold text-neutral-900 group-open:text-[#D4AF37]">8. Can I enroll in multiple dance styles at the same time?</span>
              <span className="transition group-open:rotate-180 text-[#D4AF37]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </summary>
            <div className="p-5 border-t border-[#D4AF37]/10 bg-[#FDFBF7]/30 text-sm text-neutral-600 leading-relaxed">
              <b>Yes.</b> You can register for multiple classes. However, for absolute beginners, we suggest starting with a single style to master foundational controls first.
            </div>
          </details>

          {/* Q9 */}
          <details className="group border border-[#D4AF37]/20 rounded-sm bg-white overflow-hidden transition-all duration-300 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-[#FDFBF7] select-none">
              <span className="font-serif font-bold text-neutral-900 group-open:text-[#D4AF37]">9. Are there opportunities for stage performances?</span>
              <span class="transition group-open:rotate-180 text-[#D4AF37]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </summary>
            <div className="p-5 border-t border-[#D4AF37]/10 bg-[#FDFBF7]/30 text-sm text-neutral-600 leading-relaxed">
              <b>Absolutely.</b> We host an annual stage showcase for all our batches and actively prepare student teams for state and national competition events.
            </div>
          </details>

          {/* Q10 */}
          <details className="group border border-[#D4AF37]/20 rounded-sm bg-white overflow-hidden transition-all duration-300 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-[#FDFBF7] select-none">
              <span className="font-serif font-bold text-neutral-900 group-open:text-[#D4AF37]">10. Is the tuition fee refundable if I miss classes?</span>
              <span className="transition group-open:rotate-180 text-[#D4AF37]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </summary>
            <div className="p-5 border-t border-[#D4AF37]/10 bg-[#FDFBF7]/30 text-sm text-neutral-600 leading-relaxed">
              As noted in our studio rules, <b>fees once paid are non-refundable</b> and non-transferable under any circumstances.
            </div>
          </details>

        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Faq;
