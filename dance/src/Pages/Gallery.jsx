import React from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

// Import Assets
import gallery1 from "../Assets/Gallery_1.png";
import gallery2 from "../Assets/Gallery_2.png";
import gallery3 from "../Assets/Gallery_3.png";
import gallery4 from "../Assets/Gallery_4.png";
import gallery5 from "../Assets/Gallery_5.png";
import gallery6 from "../Assets/Gallery_6.png";
import gallery7 from "../Assets/Gallery_7.png";
import gallery8 from "../Assets/Gallery_8.png";
import gallery9 from "../Assets/Gallery_9.png";
import gallery10 from "../Assets/Gallery_10.png";
import gallery11 from "../Assets/Gallery_11.png";
import gallery12 from "../Assets/Gallery_12.png";
import gallery13 from "../Assets/Gallery_13.png";
import gallery14 from "../Assets/Gallery_14.png";
import gallery15 from "../Assets/Gallery_15.png";
import gallery16 from "../Assets/Gallery_16.png";
import gallery17 from "../Assets/Gallery_17.png";
import gallery18 from "../Assets/Gallery_18.png";

// Gallery Items Configuration Array
const galleryItems = [
  { img: gallery1, label: "Vishu Academy" },
  { img: gallery2, label: "Annual Stage Show Performance" },
  { img: gallery3, label: "Western Dance Group" },
  { img: gallery4, label: "Hip Hop Session" },
  { img: gallery5, label: "Expressive Contemporary Group" },
  { img: gallery6, label: "Ballet Performance" },
  { img: gallery7, label: "Salsa Performance" },
  { img: gallery8, label: "Bharatanatyam" },
  { img: gallery9, label: "Group Dance" },
  { img: gallery10, label: "Kids Dance Batch" },
  { img: gallery11, label: "Dedicated Practice Studio" },
  { img: gallery12, label: "State Level Performance" },
  { img: gallery13, label: "Cultural Programs" },
  { img: gallery14, label: "Students Achievements" },
  { img: gallery15, label: "National Level Performance" },
  { img: gallery16, label: "International Level Performance" },
  { img: gallery17, label: "Jazz Performance" },
  { img: gallery18, label: "Contemporary Dance" },
];

function Gallery() {
  return (
    <div className="bg-white text-neutral-800 font-sans antialiased">
      {/* Header & Navigation */}
      <NavBar />

      {/* Title Section */}
      <section className="gold-gradient-bg py-12 border-b border-[#D4AF37]/15">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold">Visual Moments</span>
          <h2 className="font-serif text-3xl font-bold text-neutral-900">Our Gallery</h2>
          <div className="w-12 h-0.5 bg-[#D4AF37] mx-auto"></div>
          <p className="text-neutral-600 text-sm max-w-xl mx-auto">
            Take a look at some moments from our academy classes, practice sessions, and stage performances.
          </p>
        </div>
      </section>

      {/* Gallery Cards Grid */}
      <section className="py-12 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-[#D4AF37]/20 p-2 rounded-sm transition-all duration-300 hover:border-[#D4AF37] gold-border-glow flex flex-col items-center"
            >
              <div className="w-full overflow-hidden mb-2 border border-neutral-100 rounded-xs">
                <img
                  src={item.img}
                  alt={item.label}
                  className="w-full h-36 object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <b className="font-serif text-neutral-900 text-[12px] leading-tight text-center">
                {item.label}
              </b>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Gallery;
