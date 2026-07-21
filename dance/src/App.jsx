import './App.css';
import AppRoutes from './Routes/AppRoutes';
import { useEffect } from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';

// Custom Global Alert Override
window.alert = function (message) {
  const existingModal = document.getElementById("custom-alert-modal");
  if (existingModal) {
    existingModal.remove();
  }

  const modal = document.createElement("div");
  modal.id = "custom-alert-modal";
  modal.className = "fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-xs";

  modal.innerHTML = `
    <div class="bg-white rounded-2xl border border-[#D4AF37]/30 p-8 max-w-sm w-full mx-4 shadow-2xl text-center transform scale-95 transition-all duration-300">
      <div class="w-16 h-16 bg-[#D4AF37]/10 text-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      </div>
      <p class="text-neutral-800 text-sm font-semibold mb-6 tracking-wide leading-relaxed">${message}</p>
      <button id="custom-alert-close" class="w-full py-2.5 bg-[#D4AF37] text-white font-bold rounded-full hover:bg-[#AA823B] transition-all duration-300 cursor-pointer shadow-sm text-xs uppercase tracking-widest">
        Okay
      </button>
    </div>
  `;

  document.body.appendChild(modal);

  const closeBtn = modal.querySelector("#custom-alert-close");
  closeBtn.focus();
  closeBtn.addEventListener("click", () => {
    modal.remove();
  });
};

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <AppRoutes/>
      </BrowserRouter>
    </div>
  );
}

export default App;
