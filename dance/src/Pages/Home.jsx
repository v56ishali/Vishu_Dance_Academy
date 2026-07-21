import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";


// Import Assets
import profileImg from "../Assets/Profile_img.png";
import heroSecImg from "../Assets/Hero_sec.png";
import staff1Img from "../Assets/Staff1.png";
import staff2Img from "../Assets/Staff2.png";
import staff3Img from "../Assets/Staff3.png";

function Home() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for subscribing to our newsletter!");
  };

  return (
    <div className="bg-white text-neutral-800 font-sans antialiased">
      <NavBar />
      {/* Hero Section */}
      <section className="gold-gradient-bg py-20 lg:py-28 border-b border-[#D4AF37]/10">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold">Vishu's Dance Academy</span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight">
              Where Passion Meets <br className="hidden sm:inline" /><span className="text-[#D4AF37] italic">Performance</span>
            </h2>
            <p className="text-neutral-600 text-lg max-w-xl mx-auto lg:mx-0">
              Welcome to our premier Dance Academy, where students learn, perform, and grow with absolute artistic confidence. Discover your unique rhythm with us.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
              <Link to="/admission" className="px-8 py-3 bg-[#D4AF37] text-white font-bold tracking-wider uppercase text-sm rounded-full hover:bg-[#AA823B] transition-all duration-300 shadow-md shadow-[#D4AF37]/20">Join Now</Link>
              <Link to="/dance-styles" className="px-8 py-3 border-2 border-[#D4AF37] text-[#D4AF37] font-bold tracking-wider uppercase text-sm rounded-full hover:bg-[#D4AF37] hover:text-white transition-all duration-300">Explore Styles</Link>
            </div>
          </div>
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative p-2 bg-white border border-[#D4AF37]/30 rounded-lg shadow-xl shadow-neutral-100 max-w-sm">
              <img src={heroSecImg} alt="Dance Performance" className="rounded-md w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold">Artistic Standards</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-900">Our Core Values</h2>
          <div className="w-12 h-0.5 bg-[#D4AF37] mx-auto"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          <div className="bg-white border border-[#D4AF37]/20 p-8 text-center rounded-sm transition-all duration-300 hover:border-[#D4AF37] gold-border-glow">
            <div className="w-10 h-10 mx-auto mb-4 border border-[#D4AF37] rounded-full flex items-center justify-center text-[#D4AF37] font-serif text-lg font-bold">P</div>
            <h3 className="font-serif text-lg font-bold text-neutral-900 mb-2">Passion</h3>
            <p className="text-xs text-neutral-500">Fueling our expression and dedication to classical & modern movement.</p>
          </div>
          <div className="bg-white border border-[#D4AF37]/20 p-8 text-center rounded-sm transition-all duration-300 hover:border-[#D4AF37] gold-border-glow">
            <div className="w-10 h-10 mx-auto mb-4 border border-[#D4AF37] rounded-full flex items-center justify-center text-[#D4AF37] font-serif text-lg font-bold">T</div>
            <h3 className="font-serif text-lg font-bold text-neutral-900 mb-2">Talent</h3>
            <p className="text-xs text-neutral-500">Nurturing unique gifts and helping students reach their highest levels.</p>
          </div>
          <div className="bg-white border border-[#D4AF37]/20 p-8 text-center rounded-sm transition-all duration-300 hover:border-[#D4AF37] gold-border-glow">
            <div className="w-10 h-10 mx-auto mb-4 border border-[#D4AF37] rounded-full flex items-center justify-center text-[#D4AF37] font-serif text-lg font-bold">C</div>
            <h3 className="font-serif text-lg font-bold text-neutral-900 mb-2">Creativity</h3>
            <p className="text-xs text-neutral-500">Inspiring original choreography and unique artistic interpretation.</p>
          </div>
          <div className="bg-white border border-[#D4AF37]/20 p-8 text-center rounded-sm transition-all duration-300 hover:border-[#D4AF37] gold-border-glow">
            <div className="w-10 h-10 mx-auto mb-4 border border-[#D4AF37] rounded-full flex items-center justify-center text-[#D4AF37] font-serif text-lg font-bold">C</div>
            <h3 className="font-serif text-lg font-bold text-neutral-900 mb-2">Confidence</h3>
            <p className="text-xs text-neutral-500">Empowering dancers to own the stage and succeed in life.</p>
          </div>
          <div className="bg-white border border-[#D4AF37]/20 p-8 text-center rounded-sm transition-all duration-300 hover:border-[#D4AF37] gold-border-glow">
            <div className="w-10 h-10 mx-auto mb-4 border border-[#D4AF37] rounded-full flex items-center justify-center text-[#D4AF37] font-serif text-lg font-bold">D</div>
            <h3 className="font-serif text-lg font-bold text-neutral-900 mb-2">Discipline</h3>
            <p className="text-xs text-neutral-500">Consistency in training to refine technical mastery daily.</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-neutral-50 py-20 border-y border-[#D4AF37]/15">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <p className="font-serif text-4xl lg:text-5xl font-bold text-[#D4AF37]">2500+</p>
              <p className="text-xs uppercase tracking-widest text-neutral-500 font-semibold">Happy Students</p>
            </div>
            <div className="space-y-2">
              <p className="font-serif text-4xl lg:text-5xl font-bold text-[#D4AF37]">100+</p>
              <p className="text-xs uppercase tracking-widest text-neutral-500 font-semibold">Stage Shows Yearly</p>
            </div>
            <div className="space-y-2">
              <p className="font-serif text-4xl lg:text-5xl font-bold text-[#D4AF37]">50+</p>
              <p className="text-xs uppercase tracking-widest text-neutral-500 font-semibold">National Winners</p>
            </div>
            <div className="space-y-2">
              <p className="font-serif text-4xl lg:text-5xl font-bold text-[#D4AF37]">20+</p>
              <p className="text-xs uppercase tracking-widest text-neutral-500 font-semibold">Dance Awards</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trainers Section */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold">Expert Guides</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-900">Meet Our Trainers</h2>
          <div className="w-12 h-0.5 bg-[#D4AF37] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white border border-[#D4AF37]/20 p-6 rounded-sm text-center transition-all duration-300 hover:border-[#D4AF37] hover:shadow-lg">
            <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-2 border-[#D4AF37] p-1 bg-white">
              <img src={staff1Img} alt="AAA" className="w-full h-full object-cover rounded-full" />
            </div>
            <h3 className="font-serif text-xl font-bold text-neutral-900">AAA</h3>
            <p className="text-[#D4AF37] text-sm font-semibold mb-2">Bharatanatyam Trainer</p>
            <p className="text-neutral-500 text-sm mb-4">22+ Years Professional Experience</p>
            <Link to="/trainers" className="inline-block px-5 py-1.5 border border-[#D4AF37] rounded-full text-xs font-semibold uppercase tracking-wider text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white transition-colors duration-300">View Profile</Link>
          </div>
          <div className="bg-white border border-[#D4AF37]/20 p-6 rounded-sm text-center transition-all duration-300 hover:border-[#D4AF37] hover:shadow-lg">
            <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-2 border-[#D4AF37] p-1 bg-white">
              <img src={staff2Img} alt="BBB" className="w-full h-full object-cover rounded-full" />
            </div>
            <h3 className="font-serif text-xl font-bold text-neutral-900">BBB</h3>
            <p className="text-[#D4AF37] text-sm font-semibold mb-2">Ballet Trainer</p>
            <p className="text-neutral-500 text-sm mb-4">8+ Years Professional Experience</p>
            <Link to="/trainers" className="inline-block px-5 py-1.5 border border-[#D4AF37] rounded-full text-xs font-semibold uppercase tracking-wider text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white transition-colors duration-300">View Profile</Link>
          </div>
          <div className="bg-white border border-[#D4AF37]/20 p-6 rounded-sm text-center transition-all duration-300 hover:border-[#D4AF37] hover:shadow-lg">
            <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-2 border-[#D4AF37] p-1 bg-white">
              <img src={staff3Img} alt="CCC" className="w-full h-full object-cover rounded-full" />
            </div>
            <h3 className="font-serif text-xl font-bold text-neutral-900">CCC</h3>
            <p className="text-[#D4AF37] text-sm font-semibold mb-2">Hip Hop Trainer</p>
            <p className="text-neutral-500 text-sm mb-4">12+ Years Professional Experience</p>
            <Link to="/trainers" className="inline-block px-5 py-1.5 border border-[#D4AF37] rounded-full text-xs font-semibold uppercase tracking-wider text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white transition-colors duration-300">View Profile</Link>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link to="/trainers" className="inline-block px-8 py-3 bg-[#D4AF37] hover:bg-[#AA823B] text-white font-bold rounded-full transition-all duration-300 shadow-md text-xs uppercase tracking-widest">
            View All Trainers
          </Link>
        </div>
      </section>

      {/* Weekly Class Schedule */}
      <section className="py-20 bg-neutral-50 border-y border-[#D4AF37]/15">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold">Timetable</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-900">Weekly Class Schedule</h2>
            <div className="w-12 h-0.5 bg-[#D4AF37] mx-auto"></div>
          </div>
          <div className="overflow-x-auto border border-[#D4AF37]/25 rounded-md shadow-sm">
            <table className="w-full text-left border-collapse bg-white">
              <thead>
                <tr className="bg-[#FDFBF7] border-b border-[#D4AF37]/20 text-[#D4AF37] font-serif font-bold text-sm sm:text-base">
                  <th className="p-4 sm:p-5">Time</th>
                  <th className="p-4 sm:p-5">Monday</th>
                  <th className="p-4 sm:p-5">Tuesday</th>
                  <th className="p-4 sm:p-5">Wednesday</th>
                  <th className="p-4 sm:p-5">Thursday</th>
                  <th className="p-4 sm:p-5">Friday</th>
                  <th className="p-4 sm:p-5">Saturday</th>
                  <th className="p-4 sm:p-5">Sunday</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#D4AF37]/10 text-sm">
                <tr className="hover:bg-neutral-50 transition-colors">
                  <td className="p-4 sm:p-5 font-semibold text-neutral-900 bg-[#FDFBF7]/50">9:00 AM</td>
                  <td className="p-4 sm:p-5">Bharatanatyam</td>
                  <td className="p-4 sm:p-5">Hip Hop</td>
                  <td className="p-4 sm:p-5">Western</td>
                  <td className="p-4 sm:p-5">Contemporary</td>
                  <td className="p-4 sm:p-5">Salsa</td>
                  <td className="p-4 sm:p-5">Ballet</td>
                  <td className="p-4 sm:p-5">Folk</td>
                </tr>
                <tr className="hover:bg-neutral-50 transition-colors">
                  <td className="p-4 sm:p-5 font-semibold text-neutral-900 bg-[#FDFBF7]/50">11:00 AM</td>
                  <td className="p-4 sm:p-5">Folk</td>
                  <td className="p-4 sm:p-5">Bharatanatyam</td>
                  <td className="p-4 sm:p-5">Hip Hop</td>
                  <td className="p-4 sm:p-5">Western</td>
                  <td className="p-4 sm:p-5">Contemporary</td>
                  <td className="p-4 sm:p-5">Salsa</td>
                  <td className="p-4 sm:p-5">Ballet</td>
                </tr>
                <tr className="hover:bg-neutral-50 transition-colors">
                  <td className="p-4 sm:p-5 font-semibold text-neutral-900 bg-[#FDFBF7]/50">1:00 PM</td>
                  <td className="p-4 sm:p-5">Ballet</td>
                  <td className="p-4 sm:p-5">Folk</td>
                  <td className="p-4 sm:p-5">Bharatanatyam</td>
                  <td className="p-4 sm:p-5">Hip Hop</td>
                  <td className="p-4 sm:p-5">Western</td>
                  <td className="p-4 sm:p-5">Contemporary</td>
                  <td className="p-4 sm:p-5">Salsa</td>
                </tr>
                <tr className="hover:bg-neutral-50 transition-colors">
                  <td className="p-4 sm:p-5 font-semibold text-neutral-900 bg-[#FDFBF7]/50">4:00 PM</td>
                  <td className="p-4 sm:p-5">Salsa</td>
                  <td className="p-4 sm:p-5">Ballet</td>
                  <td className="p-4 sm:p-5">Folk</td>
                  <td className="p-4 sm:p-5">Bharatanatyam</td>
                  <td className="p-4 sm:p-5">Hip Hop</td>
                  <td className="p-4 sm:p-5">Western</td>
                  <td className="p-4 sm:p-5">Contemporary</td>
                </tr>
                <tr className="hover:bg-neutral-50 transition-colors">
                  <td className="p-4 sm:p-5 font-semibold text-neutral-900 bg-[#FDFBF7]/50">6:00 PM</td>
                  <td className="p-4 sm:p-5">Contemporary</td>
                  <td className="p-4 sm:p-5">Salsa</td>
                  <td className="p-4 sm:p-5">Ballet</td>
                  <td className="p-4 sm:p-5">Folk</td>
                  <td className="p-4 sm:p-5">Bharatanatyam</td>
                  <td className="p-4 sm:p-5">Hip Hop</td>
                  <td className="p-4 sm:p-5">Western</td>
                </tr>
                <tr className="hover:bg-neutral-50 transition-colors">
                  <td className="p-4 sm:p-5 font-semibold text-neutral-900 bg-[#FDFBF7]/50">7:00 PM</td>
                  <td className="p-4 sm:p-5">Western</td>
                  <td className="p-4 sm:p-5">Contemporary</td>
                  <td className="p-4 sm:p-5">Salsa</td>
                  <td className="p-4 sm:p-5">Ballet</td>
                  <td className="p-4 sm:p-5">Folk</td>
                  <td className="p-4 sm:p-5">Bharatanatyam</td>
                  <td className="p-4 sm:p-5">Hip Hop</td>
                </tr>
                <tr className="hover:bg-neutral-50 transition-colors">
                  <td className="p-4 sm:p-5 font-semibold text-neutral-900 bg-[#FDFBF7]/50">8:00 PM</td>
                  <td className="p-4 sm:p-5">Hip Hop</td>
                  <td className="p-4 sm:p-5">Western</td>
                  <td className="p-4 sm:p-5">Contemporary</td>
                  <td className="p-4 sm:p-5">Salsa</td>
                  <td className="p-4 sm:p-5">Ballet</td>
                  <td className="p-4 sm:p-5">Folk</td>
                  <td className="p-4 sm:p-5">Bharatanatyam</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Curriculum Levels Section */}
      <section className="py-20 max-w-7xl mx-auto px-6 border-b border-[#D4AF37]/15">
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold">Curriculum Levels</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-900">Dance Levels</h2>
          <div className="w-12 h-0.5 bg-[#D4AF37] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Level 1 */}
          <div className="bg-white border border-[#D4AF37]/20 p-8 rounded-sm transition-all duration-300 hover:border-[#D4AF37] gold-border-glow flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-[#D4AF37] tracking-wider uppercase">Level 01</span>
                <span className="px-2.5 py-0.5 bg-[#F9F5EB] border border-[#D4AF37]/30 text-[#D4AF37] text-[10px] uppercase font-bold rounded-full">3 Months</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-neutral-900">Beginner Level</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">
                Focuses on foundational steps, basic rhythm coordination, and posture alignment. Ideal for students with zero prior training.
              </p>
            </div>
          </div>

          {/* Level 2 */}
          <div className="bg-white border border-[#D4AF37]/20 p-8 rounded-sm transition-all duration-300 hover:border-[#D4AF37] gold-border-glow flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-[#D4AF37] tracking-wider uppercase">Level 02</span>
                <span className="px-2.5 py-0.5 bg-[#F9F5EB] border border-[#D4AF37]/30 text-[#D4AF37] text-[10px] uppercase font-bold rounded-full">6 Months</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-neutral-900">Intermediate Level</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">
                Introduces complex footwork combinations, stamina building, and expressive choreography patterns.
              </p>
            </div>
          </div>

          {/* Level 3 */}
          <div className="bg-white border border-[#D4AF37]/20 p-8 rounded-sm transition-all duration-300 hover:border-[#D4AF37] gold-border-glow flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-[#D4AF37] tracking-wider uppercase">Level 03</span>
                <span className="px-2.5 py-0.5 bg-[#F9F5EB] border border-[#D4AF37]/30 text-[#D4AF37] text-[10px] uppercase font-bold rounded-full">1 Year</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-neutral-900">Advanced Level</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">
                Focuses on master class choreography, solo stage presence, and competitive showcase styling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Admissions & Careers Section */}
      <section className="py-20 bg-neutral-50/50 border-b border-[#D4AF37]/15">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold">Enrollment Options</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-900">Admissions & Careers</h2>
            <div className="w-12 h-0.5 bg-[#D4AF37] mx-auto"></div>
            <p className="text-neutral-600 text-sm max-w-xl mx-auto">
              Whether you are an aspiring student wanting to learn or an experienced trainer looking to join our faculty, we have a place for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Box A: Students Admissions */}
            <div className="bg-white border border-[#D4AF37]/25 p-8 sm:p-10 rounded-sm shadow-xs space-y-6">
              <h3 className="font-serif text-2xl font-bold text-neutral-900">Student Enrolment</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">
                We open admissions year-round for dance enthusiasts of all age groups. Discover your passion, learn from scratch, and prepare for elite stage showcases.
              </p>
              <div className="pt-4">
                <Link to="/admission" className="inline-block px-8 py-3 bg-[#D4AF37] text-white font-bold tracking-wider uppercase text-xs rounded-full hover:bg-[#AA823B] transition-colors shadow-sm">Student Admission</Link>
              </div>
            </div>

            {/* Box B: Experienced Trainers Recruitment */}
            <div className="bg-white border border-[#D4AF37]/25 p-8 sm:p-10 rounded-sm shadow-xs space-y-6">
              <h3 className="font-serif text-2xl font-bold text-neutral-900">Experienced Trainers</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">
                Are you a seasoned choreographer or an experienced instructor? Join our team of professionals to inspire the next generation of dancers.
              </p>
              <div className="pt-4">
                <Link to="/admission" className="inline-block px-8 py-3 border border-[#D4AF37] text-[#D4AF37] font-bold tracking-wider uppercase text-xs rounded-full hover:bg-[#D4AF37] hover:text-white transition-colors">Join as Trainer</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-neutral-50 border-t border-[#D4AF37]/15">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold">Feedback</span>
            <h2 className="font-serif text-3xl font-bold text-neutral-900">Student Testimonials</h2>
            <div className="w-12 h-0.5 bg-[#D4AF37] mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-[#D4AF37]/15 p-8 rounded-sm shadow-xs relative">
              <span className="font-serif text-6xl text-[#D4AF37]/10 absolute top-4 left-4">“</span>
              <p className="text-neutral-600 italic mb-6 relative z-10">
                "A wonderful place to learn dance with a friendly Trainer. The focus on individual expression is unmatched."
              </p>
              <h4 className="font-serif font-bold text-neutral-900">— XXX</h4>
            </div>
            <div className="bg-white border border-[#D4AF37]/15 p-8 rounded-sm shadow-xs relative">
              <span className="font-serif text-6xl text-[#D4AF37]/10 absolute top-4 left-4">“</span>
              <p className="text-neutral-600 italic mb-6 relative z-10">
                "It's a great platform to showcase hidden passion and grow into a professional, confident dancer."
              </p>
              <h4 className="font-serif font-bold text-neutral-900">— YYY</h4>
            </div>
            <div className="bg-white border border-[#D4AF37]/15 p-8 rounded-sm shadow-xs relative">
              <span className="font-serif text-6xl text-[#D4AF37]/10 absolute top-4 left-4">“</span>
              <p className="text-neutral-600 italic mb-6 relative z-10">
                "I enjoyed every class and performed on stage for the first time. The team support was incredible!"
              </p>
              <h4 className="font-serif font-bold text-neutral-900">— ZZZ</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Alumni Wall of Fame Section */}
      <section className="py-20 bg-white border-t border-[#D4AF37]/15">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold">Alumni Legacy</span>
            <h2 className="font-serif text-3xl font-bold text-neutral-900">Wall of Fame</h2>
            <div className="w-12 h-0.5 bg-[#D4AF37] mx-auto"></div>
            <p className="text-neutral-600 text-sm max-w-xl mx-auto">
              Celebrating our graduates who have built incredible professional careers and represent our academy on global stages.
            </p>
          </div>

          <div className="marquee-container py-4">
            <div className="marquee-content">
              {/* Set 1 of cards */}
              <div className="alumni-carousel-card bg-white border border-[#D4AF37]/15 hover:border-[#D4AF37] rounded-sm p-8 transition-all duration-300 hover:shadow-lg flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#FDFBF7] border border-[#D4AF37]/35 rounded-full flex items-center justify-center font-serif font-bold text-[#D4AF37] text-lg">M</div>
                    <div>
                      <h4 className="font-serif font-bold text-neutral-900">MMM</h4>
                      <span className="text-[10px] uppercase font-bold text-[#D4AF37]">National Ballet Company</span>
                    </div>
                  </div>
                  <p className="text-neutral-500 text-xs italic leading-relaxed">
                    "Vishu's Academy gave me the foundational strength and technical precision to take my passion to the international stage."
                  </p>
                </div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">Class of 2021 &bull; Ballet</div>
              </div>

              <div className="alumni-carousel-card bg-white border border-[#D4AF37]/15 hover:border-[#D4AF37] rounded-sm p-8 transition-all duration-300 hover:shadow-lg flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#FDFBF7] border border-[#D4AF37]/35 rounded-full flex items-center justify-center font-serif font-bold text-[#D4AF37] text-lg">N</div>
                    <div>
                      <h4 className="font-serif font-bold text-neutral-900">NNN</h4>
                      <span className="text-[10px] uppercase font-bold text-[#D4AF37]">Bollywood Choreographer</span>
                    </div>
                  </div>
                  <p className="text-neutral-500 text-xs italic leading-relaxed">
                    "The creative freedom and performance confidence I gained here helped me push creative boundaries in the dance industry."
                  </p>
                </div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">Class of 2019 &bull; Contemporary</div>
              </div>

              <div className="alumni-carousel-card bg-white border border-[#D4AF37]/15 hover:border-[#D4AF37] rounded-sm p-8 transition-all duration-300 hover:shadow-lg flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#FDFBF7] border border-[#D4AF37]/35 rounded-full flex items-center justify-center font-serif font-bold text-[#D4AF37] text-lg">K</div>
                    <div>
                      <h4 className="font-serif font-bold text-neutral-900">KKK</h4>
                      <span className="text-[10px] uppercase font-bold text-[#D4AF37]">Juilliard Performing Arts</span>
                    </div>
                  </div>
                  <p className="text-neutral-500 text-xs italic leading-relaxed">
                    "Learning Kathak at Vishu's taught me that dance is a spiritual journey. It completely shaped my career path and artistic soul."
                  </p>
                </div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">Class of 2022 &bull; Kathak</div>
              </div>

              <div className="alumni-carousel-card bg-white border border-[#D4AF37]/15 hover:border-[#D4AF37] rounded-sm p-8 transition-all duration-300 hover:shadow-lg flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#FDFBF7] border border-[#D4AF37]/35 rounded-full flex items-center justify-center font-serif font-bold text-[#D4AF37] text-lg">V</div>
                    <div>
                      <h4 className="font-serif font-bold text-neutral-900">VVV</h4>
                      <span className="text-[10px] uppercase font-bold text-[#D4AF37]">Contemporary Dance Theatre</span>
                    </div>
                  </div>
                  <p className="text-neutral-500 text-xs italic leading-relaxed">
                    "The training at Vishu's pushed my boundary limits and helped me understand the true vocabulary of movement."
                  </p>
                </div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">Class of 2020 &bull; Contemporary</div>
              </div>

              {/* Set 2 of cards (duplicated for infinite loop) */}
              <div className="alumni-carousel-card bg-white border border-[#D4AF37]/15 hover:border-[#D4AF37] rounded-sm p-8 transition-all duration-300 hover:shadow-lg flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#FDFBF7] border border-[#D4AF37]/35 rounded-full flex items-center justify-center font-serif font-bold text-[#D4AF37] text-lg">M</div>
                    <div>
                      <h4 className="font-serif font-bold text-neutral-900">MMM</h4>
                      <span className="text-[10px] uppercase font-bold text-[#D4AF37]">National Ballet Company</span>
                    </div>
                  </div>
                  <p className="text-neutral-500 text-xs italic leading-relaxed">
                    "Vishu's Academy gave me the foundational strength and technical precision to take my passion to the international stage."
                  </p>
                </div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">Class of 2021 &bull; Ballet</div>
              </div>

              <div className="alumni-carousel-card bg-white border border-[#D4AF37]/15 hover:border-[#D4AF37] rounded-sm p-8 transition-all duration-300 hover:shadow-lg flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#FDFBF7] border border-[#D4AF37]/35 rounded-full flex items-center justify-center font-serif font-bold text-[#D4AF37] text-lg">N</div>
                    <div>
                      <h4 className="font-serif font-bold text-neutral-900">NNN</h4>
                      <span className="text-[10px] uppercase font-bold text-[#D4AF37]">Bollywood Choreographer</span>
                    </div>
                  </div>
                  <p className="text-neutral-500 text-xs italic leading-relaxed">
                    "The creative freedom and performance confidence I gained here helped me push creative boundaries in the dance industry."
                  </p>
                </div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">Class of 2019 &bull; Contemporary</div>
              </div>

              <div className="alumni-carousel-card bg-white border border-[#D4AF37]/15 hover:border-[#D4AF37] rounded-sm p-8 transition-all duration-300 hover:shadow-lg flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#FDFBF7] border border-[#D4AF37]/35 rounded-full flex items-center justify-center font-serif font-bold text-[#D4AF37] text-lg">K</div>
                    <div>
                      <h4 className="font-serif font-bold text-neutral-900">KKK</h4>
                      <span className="text-[10px] uppercase font-bold text-[#D4AF37]">Juilliard Performing Arts</span>
                    </div>
                  </div>
                  <p className="text-neutral-500 text-xs italic leading-relaxed">
                    "Learning Kathak at Vishu's taught me that dance is a spiritual journey. It completely shaped my career path and artistic soul."
                  </p>
                </div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">Class of 2022 &bull; Kathak</div>
              </div>

              <div className="alumni-carousel-card bg-white border border-[#D4AF37]/15 hover:border-[#D4AF37] rounded-sm p-8 transition-all duration-300 hover:shadow-lg flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#FDFBF7] border border-[#D4AF37]/35 rounded-full flex items-center justify-center font-serif font-bold text-[#D4AF37] text-lg">V</div>
                    <div>
                      <h4 className="font-serif font-bold text-neutral-900">VVV</h4>
                      <span className="text-[10px] uppercase font-bold text-[#D4AF37]">Contemporary Dance Theatre</span>
                    </div>
                  </div>
                  <p className="text-neutral-500 text-xs italic leading-relaxed">
                    "The training at Vishu's pushed my boundary limits and helped me understand the true vocabulary of movement."
                  </p>
                </div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">Class of 2020 &bull; Contemporary</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
