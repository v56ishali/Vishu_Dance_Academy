import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";


// Import Assets
import bharatanatyamImg from "../Assets/Bharatanatyam.png";
import hipHopImg from "../Assets/HipHop.png";
import westernImg from "../Assets/Western.png";
import balletImg from "../Assets/Ballet.png";
import kathakImg from "../Assets/Kathak.png";
import salsaImg from "../Assets/Salsa.png";
import jazzImg from "../Assets/Jazz.png";
import bollywoodImg from "../Assets/Bollywood.png";
import kuchipudiImg from "../Assets/Kuchipudi.png";

function DanceStyles() {
  return (
    <div className="bg-white text-neutral-800 font-sans antialiased">
      {/* Header & Navigation */}
      <NavBar />

      {/* Title Section */}
      <section className="gold-gradient-bg py-16 border-b border-[#D4AF37]/15">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold">Curriculum Styles</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-900">Our Dance Styles</h2>
          <div className="w-12 h-0.5 bg-[#D4AF37] mx-auto"></div>
          <p className="text-neutral-600 text-base max-w-2xl mx-auto">
            Discover a variety of dance forms taught by our experienced instructors. Whether you are a beginner or an advanced learner, we have the perfect class for you.
          </p>
        </div>
      </section>

      {/* Dance Styles Cards Grid */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Bharatanatyam */}
          <div className="bg-white border border-[#D4AF37]/20 p-6 rounded-sm transition-all duration-300 hover:border-[#D4AF37] gold-border-glow flex flex-col items-center text-center">
            <div className="w-full mb-6 border border-neutral-100 rounded-sm bg-[#FDFBF7] flex items-center justify-center overflow-hidden">
              <img src={bharatanatyamImg} alt="Bharatanatyam" className="w-full h-auto object-contain transition-transform duration-500 hover:scale-105" />
            </div>
            <h3 className="font-serif text-xl font-bold text-neutral-900 mb-3">Bharatanatyam</h3>
            <p className="text-neutral-500 text-sm leading-relaxed">
              A highly disciplined, classical Indian dance style known for its rich cultural history, grace, facial expressions, and dynamic rhythmic footwork.
            </p>
          </div>

          {/* Card 2: Hip Hop */}
          <div className="bg-white border border-[#D4AF37]/20 p-6 rounded-sm transition-all duration-300 hover:border-[#D4AF37] gold-border-glow flex flex-col items-center text-center">
            <div className="w-full mb-6 border border-neutral-100 rounded-sm bg-[#FDFBF7] flex items-center justify-center overflow-hidden">
              <img src={hipHopImg} alt="Hip Hop" className="w-full h-auto object-contain transition-transform duration-500 hover:scale-105" />
            </div>
            <h3 className="font-serif text-xl font-bold text-neutral-900 mb-3">Hip Hop</h3>
            <p className="text-neutral-500 text-sm leading-relaxed">
              A modern and high-energy dance style focused on freestyle rhythm, control, popping, locking, and expressing unique individual style.
            </p>
          </div>

          {/* Card 3: Western / Contemporary */}
          <div className="bg-white border border-[#D4AF37]/20 p-6 rounded-sm transition-all duration-300 hover:border-[#D4AF37] gold-border-glow flex flex-col items-center text-center">
            <div className="w-full mb-6 border border-neutral-100 rounded-sm bg-[#FDFBF7] flex items-center justify-center overflow-hidden">
              <img src={westernImg} alt="Contemporary" className="w-full h-auto object-contain transition-transform duration-500 hover:scale-105" />
            </div>
            <h3 className="font-serif text-xl font-bold text-neutral-900 mb-3">Contemporary</h3>
            <p className="text-neutral-500 text-sm leading-relaxed">
              A highly fun, contemporary, and expressive dance form performed to popular modern music, emphasizing physical fitness and quick choreography.
            </p>
          </div>

          {/* Card 4: Ballet */}
          <div className="bg-white border border-[#D4AF37]/20 p-6 rounded-sm transition-all duration-300 hover:border-[#D4AF37] gold-border-glow flex flex-col items-center text-center">
            <div className="w-full mb-6 border border-neutral-100 rounded-sm bg-[#FDFBF7] flex items-center justify-center overflow-hidden">
              <img src={balletImg} alt="Ballet" className="w-full h-auto object-contain transition-transform duration-500 hover:scale-105" />
            </div>
            <h3 className="font-serif text-xl font-bold text-neutral-900 mb-3">Ballet</h3>
            <p className="text-neutral-500 text-sm leading-relaxed">
              An elegant and graceful dance style that emphasizes balance, flexibility, precise technique, posture, and expressive movements through classical choreography.
            </p>
          </div>

          {/* Card 5: Kathak */}
          <div className="bg-white border border-[#D4AF37]/20 p-6 rounded-sm transition-all duration-300 hover:border-[#D4AF37] gold-border-glow flex flex-col items-center text-center">
            <div className="w-full mb-6 border border-neutral-100 rounded-sm bg-[#FDFBF7] flex items-center justify-center overflow-hidden">
              <img src={kathakImg} alt="Kathak" className="w-full h-auto object-contain transition-transform duration-500 hover:scale-105" />
            </div>
            <h3 className="font-serif text-xl font-bold text-neutral-900 mb-3">Kathak</h3>
            <p className="text-neutral-500 text-sm leading-relaxed">
              A classical Indian dance style known for rhythmic footwork, graceful spins, expressive storytelling, intricate hand gestures, and emotional performances.
            </p>
          </div>

          {/* Card 6: Salsa */}
          <div className="bg-white border border-[#D4AF37]/20 p-6 rounded-sm transition-all duration-300 hover:border-[#D4AF37] gold-border-glow flex flex-col items-center text-center">
            <div className="w-full mb-6 border border-neutral-100 rounded-sm bg-[#FDFBF7] flex items-center justify-center overflow-hidden">
              <img src={salsaImg} alt="Salsa" className="w-full h-auto object-contain transition-transform duration-500 hover:scale-105" />
            </div>
            <h3 className="font-serif text-xl font-bold text-neutral-900 mb-3">Salsa</h3>
            <p className="text-neutral-500 text-sm leading-relaxed">
              A lively and energetic partner dance style featuring rhythmic footwork, smooth turns, coordinated movements, and vibrant Latin-inspired music.
            </p>
          </div>

          {/* Card 7: Jazz */}
          <div className="bg-white border border-[#D4AF37]/20 p-6 rounded-sm transition-all duration-300 hover:border-[#D4AF37] gold-border-glow flex flex-col items-center text-center">
            <div className="w-full mb-6 border border-neutral-100 rounded-sm bg-[#FDFBF7] flex items-center justify-center overflow-hidden">
              <img src={jazzImg} alt="Jazz" className="w-full h-auto object-contain transition-transform duration-500 hover:scale-105" />
            </div>
            <h3 className="font-serif text-xl font-bold text-neutral-900 mb-3">Jazz</h3>
            <p className="text-neutral-500 text-sm leading-relaxed">
              A dynamic and expressive dance style that combines energetic movements, flexibility, rhythm, sharp techniques, and creative performance.
            </p>
          </div>

          {/* Card 8: Bollywood */}
          <div className="bg-white border border-[#D4AF37]/20 p-6 rounded-sm transition-all duration-300 hover:border-[#D4AF37] gold-border-glow flex flex-col items-center text-center">
            <div className="w-full mb-6 border border-neutral-100 rounded-sm bg-[#FDFBF7] flex items-center justify-center overflow-hidden">
              <img src={bollywoodImg} alt="Bollywood" className="w-full h-auto object-contain transition-transform duration-500 hover:scale-105" />
            </div>
            <h3 className="font-serif text-xl font-bold text-neutral-900 mb-3">Bollywood</h3>
            <p className="text-neutral-500 text-sm leading-relaxed">
              A vibrant and entertaining dance style that blends Indian classical, folk, and modern dance with expressive storytelling and energetic music.
            </p>
          </div>

          {/* Card 9: Kuchipudi */}
          <div className="bg-white border border-[#D4AF37]/20 p-6 rounded-sm transition-all duration-300 hover:border-[#D4AF37] gold-border-glow flex flex-col items-center text-center">
            <div className="w-full mb-6 border border-neutral-100 rounded-sm bg-[#FDFBF7] flex items-center justify-center overflow-hidden">
              <img src={kuchipudiImg} alt="Kuchipudi" className="w-full h-auto object-contain transition-transform duration-500 hover:scale-105" />
            </div>
            <h3 className="font-serif text-xl font-bold text-neutral-900 mb-3">Kuchipudi</h3>
            <p className="text-neutral-500 text-sm leading-relaxed">
              A traditional Indian classical dance style that combines graceful movements, expressive facial expressions, rhythmic footwork, and dramatic storytelling.
            </p>
          </div>

        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-neutral-50 border-y border-[#D4AF37]/15">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold">Development</span>
            <h2 className="font-serif text-3xl font-bold text-neutral-900">Benefits of Learning Dance</h2>
            <div className="w-12 h-0.5 bg-[#D4AF37] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-white border border-[#D4AF37]/10 p-6 rounded-sm flex items-start gap-4">
              <span className="text-[#D4AF37] font-serif text-2xl font-bold mt-1">01</span>
              <div>
                <h4 class="font-serif font-bold text-neutral-900 mb-1">Improves Physical Fitness</h4>
                <p className="text-xs text-neutral-500 leading-relaxed">Builds strength, cardiorespiratory endurance, and general bodily coordination.</p>
              </div>
            </div>
            <div className="bg-white border border-[#D4AF37]/10 p-6 rounded-sm flex items-start gap-4">
              <span className="text-[#D4AF37] font-serif text-2xl font-bold mt-1">02</span>
              <div>
                <h4 className="font-serif font-bold text-neutral-900 mb-1">Boosts Self Confidence</h4>
                <p className="text-xs text-neutral-500 leading-relaxed">Empowers individuals through stage performance and physical self-awareness.</p>
              </div>
            </div>
            <div className="bg-white border border-[#D4AF37]/10 p-6 rounded-sm flex items-start gap-4">
              <span className="text-[#D4AF37] font-serif text-2xl font-bold mt-1">03</span>
              <div>
                <h4 className="font-serif font-bold text-neutral-900 mb-1">Enhances Creativity</h4>
                <p className="text-xs text-neutral-500 leading-relaxed">Nurtures artistic interpretation and choreographic imagination.</p>
              </div>
            </div>
            <div className="bg-white border border-[#D4AF37]/10 p-6 rounded-sm flex items-start gap-4">
              <span className="text-[#D4AF37] font-serif text-2xl font-bold mt-1">04</span>
              <div>
                <h4 className="font-serif font-bold text-neutral-900 mb-1">Develops Discipline</h4>
                <p className="text-xs text-neutral-500 leading-relaxed">Teaches goal-oriented focus and consistent training behaviors.</p>
              </div>
            </div>
            <div className="bg-white border border-[#D4AF37]/10 p-6 rounded-sm flex items-start gap-4">
              <span className="text-[#D4AF37] font-serif text-2xl font-bold mt-1">05</span>
              <div>
                <h4 className="font-serif font-bold text-neutral-900 mb-1">Improves Flexibility</h4>
                <p className="text-xs text-neutral-500 leading-relaxed">Refines motion parameters and joints flexibility through routine warmups.</p>
              </div>
            </div>
            <div className="bg-white border border-[#D4AF37]/10 p-6 rounded-sm flex items-start gap-4">
              <span className="text-[#D4AF37] font-serif text-2xl font-bold mt-1">06</span>
              <div>
                <h4 className="font-serif font-bold text-neutral-900 mb-1">Reduces Stress</h4>
                <p className="text-xs text-neutral-500 leading-relaxed">Acts as a creative escape releasing positive endorphins through physical play.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gold-gradient-bg py-20 text-center border-b border-[#D4AF37]/15">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-900">Ready to Dance?</h2>
          <p className="text-neutral-600 text-base max-w-xl mx-auto">
            Join our academy today and begin your dance journey under professional training.
          </p>
          <div className="pt-4">
            <Link to="/admission" className="px-10 py-3.5 bg-[#D4AF37] text-white font-bold tracking-wider uppercase text-sm rounded-full hover:bg-[#AA823B] transition-all duration-300 shadow-sm shadow-[#D4AF37]/10">Apply Now</Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer/>
    </div>
  );
}

export default DanceStyles;
