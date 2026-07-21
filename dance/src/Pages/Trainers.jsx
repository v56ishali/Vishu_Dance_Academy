import React from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

// Import Assets
import staff1Img from "../Assets/Staff1.png";
import staff2Img from "../Assets/Staff2.png";
import staff3Img from "../Assets/Staff3.png";
import staff4Img from "../Assets/Staff4.png";
import staff5Img from "../Assets/Staff5.png";
import staff6Img from "../Assets/Staff6.png";

function Trainers() {
  return (
    <div className="bg-white text-neutral-800 font-sans antialiased">
      {/* Header & Navigation */}
      <NavBar />

      {/* Title Section */}
      <section className="gold-gradient-bg py-12 border-b border-[#D4AF37]/15">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold">Faculty Profiles</span>
          <h2 className="font-serif text-3xl font-bold text-neutral-900">Meet Our Trainers</h2>
          <div className="w-12 h-0.5 bg-[#D4AF37] mx-auto"></div>
          <p className="text-neutral-600 text-sm max-w-xl mx-auto">
            Learn about the training, experience, and artistic philosophies of our lead instructors.
          </p>
        </div>
      </section>

      {/* Profile Cards List */}
      <section className="py-16 max-w-5xl mx-auto px-6 space-y-12">
        
        {/* Trainer 1: AAA */}
        <div className="bg-white border border-[#D4AF37]/20 p-8 rounded-sm shadow-xs flex flex-col md:flex-row gap-8 items-center md:items-start transition-all duration-300 hover:border-[#D4AF37] gold-border-glow">
          <div className="relative w-36 h-36 rounded-full overflow-hidden border-2 border-[#D4AF37] p-1 shrink-0 bg-white shadow-sm">
            <img src={staff1Img} alt="AAA" className="w-full h-full object-cover rounded-full" />
          </div>
          <div className="space-y-4 text-center md:text-left flex-1">
            <div className="space-y-1">
              <h3 className="font-serif text-2xl font-bold text-neutral-900">AAA</h3>
              <p className="text-[#D4AF37] font-semibold text-sm">Head Bharatanatyam Choreographer</p>
              <p className="text-xs text-neutral-400">22+ Years of Professional Coaching</p>
            </div>
            <p className="text-neutral-500 text-sm leading-relaxed">
              A legendary classical dancer who has trained over 500+ students and performed on prestigious global stages. AAA specializes in Abhinaya (facial expressions), Nritta (rhythmical footwork), and temple dance history, offering deep cultural insights during classes.
            </p>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start text-xs font-semibold">
              <span className="px-3 py-1 bg-neutral-50 border border-neutral-200 text-neutral-600 rounded-full">Abhinaya Mastery</span>
              <span className="px-3 py-1 bg-neutral-50 border border-neutral-200 text-neutral-600 rounded-full">Classical Fusion</span>
              <span className="px-3 py-1 bg-neutral-50 border border-neutral-200 text-neutral-600 rounded-full">Kalaimamani Awardee</span>
            </div>
          </div>
        </div>

        {/* Trainer 2: BBB */}
        <div className="bg-white border border-[#D4AF37]/20 p-8 rounded-sm shadow-xs flex flex-col md:flex-row gap-8 items-center md:items-start transition-all duration-300 hover:border-[#D4AF37] gold-border-glow">
          <div className="relative w-36 h-36 rounded-full overflow-hidden border-2 border-[#D4AF37] p-1 shrink-0 bg-white shadow-sm">
            <img src={staff2Img} alt="BBB" className="w-full h-full object-cover rounded-full" />
          </div>
          <div className="space-y-4 text-center md:text-left flex-1">
            <div className="space-y-1">
              <h3 className="font-serif text-2xl font-bold text-neutral-900">BBB</h3>
              <p className="text-[#D4AF37] font-semibold text-sm">Lead Ballet Instructor</p>
              <p className="text-xs text-neutral-400">8+ Years of Professional Ballet Instruction</p>
            </div>
            <p className="text-neutral-500 text-sm leading-relaxed">
              Trained under elite Russian choreographers, BBB specializes in classical ballet technique, pointe work, and flexibility alignment. Known for a patient teaching style that targets core posture, strength building, and joints mobility.
            </p>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start text-xs font-semibold">
              <span className="px-3 py-1 bg-neutral-50 border border-neutral-200 text-neutral-600 rounded-full">Pointe Technique</span>
              <span className="px-3 py-1 bg-neutral-50 border border-neutral-200 text-neutral-600 rounded-full">Flexibility Conditioning</span>
              <span className="px-3 py-1 bg-neutral-50 border border-neutral-200 text-neutral-600 rounded-full">Classical Ballet</span>
            </div>
          </div>
        </div>

        {/* Trainer 3: CCC */}
        <div className="bg-white border border-[#D4AF37]/20 p-8 rounded-sm shadow-xs flex flex-col md:flex-row gap-8 items-center md:items-start transition-all duration-300 hover:border-[#D4AF37] gold-border-glow">
          <div className="relative w-36 h-36 rounded-full overflow-hidden border-2 border-[#D4AF37] p-1 shrink-0 bg-white shadow-sm">
            <img src={staff3Img} alt="CCC" className="w-full h-full object-cover rounded-full" />
          </div>
          <div className="space-y-4 text-center md:text-left flex-1">
            <div className="space-y-1">
              <h3 className="font-serif text-2xl font-bold text-neutral-900">CCC</h3>
              <p className="text-[#D4AF37] font-semibold text-sm">Hip Hop & Street Dance Coach</p>
              <p className="text-xs text-neutral-400">12+ Years of Choreography & Freestyle</p>
            </div>
            <p className="text-neutral-500 text-sm leading-relaxed">
              A high-energy street dancer specialized in freestyle urban choreography, popping, locking, and contemporary hip-hop styles. CCC has choreographed multiple award-winning groups and is a regular judge on national street dance tours.
            </p>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start text-xs font-semibold">
              <span className="px-3 py-1 bg-neutral-50 border border-neutral-200 text-neutral-600 rounded-full">Popping & Locking</span>
              <span className="px-3 py-1 bg-neutral-50 border border-neutral-200 text-neutral-600 rounded-full">Urban Choreography</span>
              <span className="px-3 py-1 bg-neutral-50 border border-neutral-200 text-neutral-600 rounded-full">Freestyle Battles</span>
            </div>
          </div>
        </div>

        {/* Trainer 4: DDD */}
        <div className="bg-white border border-[#D4AF37]/20 p-8 rounded-sm shadow-xs flex flex-col md:flex-row gap-8 items-center md:items-start transition-all duration-300 hover:border-[#D4AF37] gold-border-glow">
          <div className="relative w-36 h-36 rounded-full overflow-hidden border-2 border-[#D4AF37] p-1 shrink-0 bg-white shadow-sm">
            <img src={staff4Img} alt="DDD" className="w-full h-full object-cover rounded-full" />
          </div>
          <div className="space-y-4 text-center md:text-left flex-1">
            <div className="space-y-1">
              <h3 className="font-serif text-2xl font-bold text-neutral-900">DDD</h3>
              <p className="text-[#D4AF37] font-semibold text-sm">Kathak & Indian Folk Dance Specialist</p>
              <p className="text-xs text-neutral-400">10+ Years of Traditional Performance</p>
            </div>
            <p className="text-neutral-500 text-sm leading-relaxed">
              Specialized in combining traditional Kathak footwork and expressions with lively regional Indian folk dances. DDD focuses on rhythmic posture, synchronization, and historical storytelling through movement.
            </p>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start text-xs font-semibold">
              <span className="px-3 py-1 bg-neutral-50 border border-neutral-200 text-neutral-600 rounded-full">Kathak Footwork</span>
              <span className="px-3 py-1 bg-neutral-50 border border-neutral-200 text-neutral-600 rounded-full">Folk Formations</span>
              <span className="px-3 py-1 bg-neutral-50 border border-neutral-200 text-neutral-600 rounded-full">Rhythm Control</span>
            </div>
          </div>
        </div>

        {/* Trainer 5: EEE */}
        <div className="bg-white border border-[#D4AF37]/20 p-8 rounded-sm shadow-xs flex flex-col md:flex-row gap-8 items-center md:items-start transition-all duration-300 hover:border-[#D4AF37] gold-border-glow">
          <div className="relative w-36 h-36 rounded-full overflow-hidden border-2 border-[#D4AF37] p-1 shrink-0 bg-white shadow-sm">
            <img src={staff5Img} alt="EEE" className="w-full h-full object-cover rounded-full" />
          </div>
          <div className="space-y-4 text-center md:text-left flex-1">
            <div className="space-y-1">
              <h3 className="font-serif text-2xl font-bold text-neutral-900">EEE</h3>
              <p className="text-[#D4AF37] font-semibold text-sm">Latin Ballroom & Salsa Coach</p>
              <p className="text-xs text-neutral-400">8+ Years of International Coaching</p>
            </div>
            <p className="text-neutral-500 text-sm leading-relaxed">
              Certified Latin ballroom dancer specializing in Salsa, Bachata, and Cha-Cha. EEE brings international technique, coordination, and high-energy partner drills to make social dancing fun and professional.
            </p>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start text-xs font-semibold">
              <span className="px-3 py-1 bg-neutral-50 border border-neutral-200 text-neutral-600 rounded-full">Salsa & Bachata</span>
              <span className="px-3 py-1 bg-neutral-50 border border-neutral-200 text-neutral-600 rounded-full">Ballroom Posture</span>
              <span className="px-3 py-1 bg-neutral-50 border border-neutral-200 text-neutral-600 rounded-full">Partner Choreography</span>
            </div>
          </div>
        </div>

        {/* Trainer 6: FFF */}
        <div className="bg-white border border-[#D4AF37]/20 p-8 rounded-sm shadow-xs flex flex-col md:flex-row gap-8 items-center md:items-start transition-all duration-300 hover:border-[#D4AF37] gold-border-glow">
          <div className="relative w-36 h-36 rounded-full overflow-hidden border-2 border-[#D4AF37] p-1 shrink-0 bg-white shadow-sm">
            <img src={staff6Img} alt="FFF" className="w-full h-full object-cover rounded-full" />
          </div>
          <div className="space-y-4 text-center md:text-left flex-1">
            <div className="space-y-1">
              <h3 className="font-serif text-2xl font-bold text-neutral-900">FFF</h3>
              <p className="text-[#D4AF37] font-semibold text-sm">Contemporary & Lyrical Coach</p>
              <p className="text-xs text-neutral-400">9+ Years of Modern Theater</p>
            </div>
            <p className="text-neutral-500 text-sm leading-relaxed">
              Dedicated to expressive contemporary flow and lyrical dance. FFF teaches alignment, floor work, and release techniques that help students express emotional narratives through physical movement.
            </p>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start text-xs font-semibold">
              <span className="px-3 py-1 bg-neutral-50 border border-neutral-200 text-neutral-600 rounded-full">Floor Work</span>
              <span className="px-3 py-1 bg-neutral-50 border border-neutral-200 text-neutral-600 rounded-full">Contemporary Flow</span>
              <span className="px-3 py-1 bg-neutral-50 border border-neutral-200 text-neutral-600 rounded-full">Lyrical Expression</span>
            </div>
          </div>
        </div>

      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Trainers;
