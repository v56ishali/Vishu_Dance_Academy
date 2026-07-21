import React from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";


// Import Assets
import aboutImg from "../Assets/About.png";
import missionImg from "../Assets/Mission.png";
import visionImg from "../Assets/Vision.png";

function About() {
  return (
    <div className="bg-white text-neutral-800 font-sans antialiased">
      {/* Header & Navigation (Reused NavBar component) */}
      <NavBar />

      {/* Hero Banner Section (Who We Are) */}
      <section className="relative w-full min-h-[220px] sm:min-h-[260px] flex items-center justify-center text-center overflow-hidden bg-neutral-950">
        {/* Background Image with original color and translucent dark overlay */}
        <div className="absolute inset-0 z-0">
          <img src={aboutImg} alt="Vishu Academy Banner" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Center Content Container */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-8 space-y-2">
          <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-bold block">
            Who We Are
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-4xl mx-auto">
            Dedicated to spreading the joy of dance.
          </h1>
        </div>
      </section>

      {/* Who We Are Description Section */}
      <section className="py-16 bg-white max-w-4xl mx-auto px-6 text-center space-y-5">
        <h2 className="font-serif text-3xl font-bold text-neutral-900">Who We Are</h2>
        <div className="w-12 h-0.5 bg-[#D4AF37] mx-auto"></div>
        <p className="text-neutral-600 text-base leading-relaxed max-w-2xl mx-auto">
          Vishu's Dance Academy was established with the vision of spreading the joy of dance among students of all ages. We provide professional training in various dance styles while encouraging creativity, confidence, discipline, and teamwork inside every student.
        </p>
        <p className="text-neutral-500 text-sm leading-relaxed max-w-2xl mx-auto">
          We believe that dance is more than just movement—it is a powerful form of self-expression, a builder of character, and a lifelong journey of growth. We are dedicated to creating an inclusive, nurturing environment where dancers of all ages and skills can explore their potential and push their creative boundaries.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 max-w-7xl mx-auto px-6 space-y-24">
        {/* Row 1: Our Mission (Image Left, Content Right) */}
        <div className="grid md:grid-cols-12 gap-8 md:gap-16 items-center">
          {/* Left side: Image */}
          <div className="md:col-span-5 relative aspect-square sm:aspect-4/3 md:aspect-square w-full rounded-3xl overflow-hidden shadow-md">
            <img src={missionImg} alt="Our Mission" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
          </div>
          {/* Right side: Content */}
          <div className="md:col-span-7 space-y-6">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-bold block mb-1">Purpose</span>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-900">Our Mission</h3>
              <div className="w-12 h-0.5 bg-[#D4AF37] mt-2.5"></div>
            </div>
            <p className="text-neutral-600 leading-relaxed text-sm">
              To provide quality dance education and help every student discover their potential, building technical precision alongside lifelong creative intelligence.
            </p>
            <div className="pt-2 space-y-3">
              <span className="text-xs uppercase tracking-wider text-neutral-900 font-bold block mb-1">Our Core Objectives:</span>
              <ul className="space-y-3 text-sm text-neutral-600">
                <li className="flex items-start gap-2.5">
                  <svg className="w-4 h-4 text-[#D4AF37] mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                  <span>Provide quality dance training with technical precision and excellence.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <svg className="w-4 h-4 text-[#D4AF37] mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                  <span>Nurture creativity and artistic self-expression inside every student.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <svg className="w-4 h-4 text-[#D4AF37] mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                  <span>Build personal confidence, discipline, and collaborative teamwork skills.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Row 2: Our Vision (Content Left, Image Right) */}
        <div className="grid md:grid-cols-12 gap-8 md:gap-16 items-center">
          {/* Content side (ordered first on desktop, second on mobile) */}
          <div className="md:col-span-7 md:order-1 order-2 space-y-6">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-bold block mb-1">Direction</span>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-900">Our Vision</h3>
              <div className="w-12 h-0.5 bg-[#D4AF37] mt-2.5"></div>
            </div>
            <p className="text-neutral-600 leading-relaxed text-sm">
              To become one of the leading dance academies by producing confident, highly skilled, and passionate dancers who share movement joy globally.
            </p>
            <div className="pt-2 space-y-3">
              <span className="text-xs uppercase tracking-wider text-neutral-900 font-bold block mb-1">Our Strategic Goals:</span>
              <ul className="space-y-3 text-sm text-neutral-600">
                <li className="flex items-start gap-2.5">
                  <svg className="w-4 h-4 text-[#D4AF37] mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                  <span>Establish high-quality, international standards in training curriculum.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <svg className="w-4 h-4 text-[#D4AF37] mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                  <span>Create modern, safe, and fully supportive dancing studios.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <svg className="w-4 h-4 text-[#D4AF37] mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                  <span>Spread the unique joy of dance globally and foster inclusive communities.</span>
                </li>
              </ul>
            </div>
          </div>
          {/* Image side (ordered second on desktop, first on mobile) */}
          <div className="md:col-span-5 md:order-2 order-1 relative aspect-square sm:aspect-4/3 md:aspect-square w-full rounded-3xl overflow-hidden shadow-md">
            <img src={visionImg} alt="Our Vision" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-neutral-50 border-y border-[#D4AF37]/15">
        <div className="max-w-4xl mx-auto px-6 space-y-8">
          <div className="text-center space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold">Heritage</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-900">Our Story</h2>
            <div className="w-12 h-0.5 bg-[#D4AF37] mx-auto"></div>
          </div>
          <p className="text-neutral-600 leading-relaxed text-center">
            At Vishu's Dance Academy, we believe that dance is more than just movement—it is a powerful form of self-expression, a builder of character, and a lifelong journey of growth. We are dedicated to creating an inclusive, nurturing environment where dancers of all ages and skill levels can feel safe to explore their potential, push their creative boundaries, and discover the unique rhythm within themselves. 
          </p>
          
          <div className="grid sm:grid-cols-2 gap-6 pt-6">
            <div className="bg-white border border-[#D4AF37]/15 p-6 rounded-sm">
              <h4 className="font-serif text-lg font-bold text-neutral-900 mb-2 flex items-center gap-2"><span className="text-[#D4AF37]">&bull;</span> Creativity & Innovation</h4>
              <p className="text-xs text-neutral-500 leading-relaxed">We encourage students to think outside the box, experiment with choreography, and discover their unique artistic voice.</p>
            </div>
            <div className="bg-white border border-[#D4AF37]/15 p-6 rounded-sm">
              <h4 className="font-serif text-lg font-bold text-neutral-900 mb-2 flex items-center gap-2"><span className="text-[#D4AF37]">&bull;</span> Confidence & Resilience</h4>
              <p className="text-xs text-neutral-500 leading-relaxed">Through regular performance opportunities and constructive guidance, we build solid stage presence and emotional strength.</p>
            </div>
            <div className="bg-white border border-[#D4AF37]/15 p-6 rounded-sm">
              <h4 className="font-serif text-lg font-bold text-neutral-900 mb-2 flex items-center gap-2"><span className="text-[#D4AF37]">&bull;</span> Teamwork & Community</h4>
              <p className="text-xs text-neutral-500 leading-relaxed">Dancers collaborate with peers to support one another, forming lifelong friendships rooted in mutual support and shared passion.</p>
            </div>
            <div className="bg-white border border-[#D4AF37]/15 p-6 rounded-sm">
              <h4 className="font-serif text-lg font-bold text-neutral-900 mb-2 flex items-center gap-2"><span className="text-[#D4AF37]">&bull;</span> Discipline & Focus</h4>
              <p className="text-xs text-neutral-500 leading-relaxed">Consistency makes masters. We focus on physical health, dedication, consistency in training, and goal-setting.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-20 max-w-4xl mx-auto px-6 space-y-8">
        <div className="text-center space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold">Responsibility</span>
          <h2 className="font-serif text-3xl font-bold text-neutral-900">Our Commitment</h2>
          <div className="w-12 h-0.5 bg-[#D4AF37] mx-auto"></div>
        </div>
        <p className="text-neutral-600 leading-relaxed text-center">
          Whether you are a young beginner taking your first steps, an aspiring professional refining technique, or an adult returning to the joy of movement, we welcome you to our family. Our commitment extends directly to your long-term success:
        </p>
        <div className="space-y-4">
          <div className="p-6 border border-[#D4AF37]/10 bg-[#FDFBF7]/30 rounded-sm">
            <p className="font-serif font-bold text-neutral-900 mb-1">Excellence in Education</p>
            <p className="text-xs text-neutral-500">We are committed to providing top-tier dance training. Our instructors bring years of industry expertise and pedagogical knowledge to every classroom session.</p>
          </div>
          <div className="p-6 border border-[#D4AF37]/10 bg-[#FDFBF7]/30 rounded-sm">
            <p className="font-serif font-bold text-neutral-900 mb-1">Individualized Attention</p>
            <p className="text-xs text-neutral-500">We realize every student learns differently. We structure our instruction feedback to target your unique skills and challenges individually.</p>
          </div>
          <div className="p-6 border border-[#D4AF37]/10 bg-[#FDFBF7]/30 rounded-sm">
            <p className="font-serif font-bold text-neutral-900 mb-1">Holistic Development</p>
            <p className="text-xs text-neutral-500">Mastery goes beyond physical technique. We foster life values—perseverance, healthy self-esteem, collaboration, and structured self-criticism—that endure.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us & Our Facilities */}
      <section className="py-20 bg-neutral-50 border-t border-[#D4AF37]/15">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          {/* Why Choose Us */}
          <div className="bg-white border border-[#D4AF37]/20 p-8 rounded-sm">
            <h3 className="font-serif text-2xl font-bold text-neutral-900 mb-6 pb-2 border-b border-[#D4AF37]/10">Why Choose Us?</h3>
            <ul className="space-y-4 text-neutral-600 text-sm">
              <li className="flex items-center gap-3">
                <span className="text-[#D4AF37] font-bold">✓</span> Certified Instructors & Trainers
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#D4AF37] font-bold">✓</span> Personalized Support & Class Attention
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#D4AF37] font-bold">✓</span> Flexible Batch Curation & Class Timings
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#D4AF37] font-bold">✓</span> Professional Annual Stage Showcases
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#D4AF37] font-bold">✓</span> Friendly & Encouraging Learning Atmosphere
              </li>
            </ul>
          </div>
          
          {/* Our Facilities */}
          <div className="bg-white border border-[#D4AF37]/20 p-8 rounded-sm">
            <h3 className="font-serif text-2xl font-bold text-neutral-900 mb-6 pb-2 border-b border-[#D4AF37]/10">Our Studio Facilities</h3>
            <ul className="space-y-4 text-neutral-600 text-sm">
              <li className="flex items-center gap-3">
                <span className="text-[#D4AF37] font-bold">✓</span> Highly Spacious Dance Studio Space
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#D4AF37] font-bold">✓</span> Premium Hi-Fi Sound & Acoustics
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#D4AF37] font-bold">✓</span> Fully Air Conditioned Studios
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#D4AF37] font-bold">✓</span> Dressing Rooms & Private Lockers
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#D4AF37] font-bold">✓</span> Dedicated Parking Space
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer/>
    </div>
  );
}

export default About;
