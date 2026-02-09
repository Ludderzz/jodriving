import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  // Added Congresbury to the list
  const areas = [
    "Clevedon", "Nailsea", "Portishead", 
    "Backwell", "Yatton", "Congresbury"
  ];

  return (
    <footer className="bg-brand-charcoal text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Grid: Stacks on mobile, 4-cols on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column - Centered on mobile */}
          <div className="lg:col-span-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-6">
              <div className="w-10 h-10 bg-brand-yellow rounded-xl flex items-center justify-center font-black text-brand-charcoal">
                J
              </div>
              <span className="text-2xl font-black uppercase tracking-tighter italic">
                Joanne's <span className="text-brand-yellow not-italic">Driving School.</span>
              </span>
            </div>
            <p className="text-slate-400 max-w-sm mx-auto md:mx-0 leading-relaxed text-sm md:text-base">
              Fully qualified ADI with over 25 years of experience. 
              Helping students become safe, confident drivers for life across North Somerset.
            </p>
          </div>

          {/* Areas Column - 2 columns for area links even on mobile */}
          <div className="text-center md:text-left">
            <h4 className="text-brand-yellow font-black uppercase tracking-widest text-xs mb-6">
              Areas Covered
            </h4>
            <ul className="grid grid-cols-2 gap-y-4 gap-x-4">
              {areas.map((area) => (
                <li key={area} className="text-slate-300 text-sm py-1 hover:text-brand-yellow transition-colors cursor-default">
                  {area}
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Contact Column - With Social Icons */}
          <div className="text-center md:text-left">
            <h4 className="text-brand-yellow font-black uppercase tracking-widest text-xs mb-6">
              Connect
            </h4>
            <div className="space-y-6">
              <a href="tel:07765254421" className="block text-slate-300 hover:text-white transition-colors group">
                <span className="block text-[10px] uppercase font-bold text-slate-500 mb-1 group-hover:text-brand-yellow">Call or Text</span>
                <span className="font-bold text-lg">07765 254421</span>
              </a>
              
              <div className="flex flex-col gap-4 items-center md:items-start">
                <span className="block text-[10px] uppercase font-bold text-slate-500">Social Media</span>
                <div className="flex gap-4">
                   {/* Facebook */}
                   <a 
                    href="https://www.facebook.com/profile.php?id=61573173656596" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white/5 p-3 rounded-xl hover:bg-brand-yellow hover:text-brand-charcoal transition-all group"
                    aria-label="Facebook"
                   >
                     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.03 1.764-5.908 5.43-5.908 1.489 0 3.002.233 3.002.233v2.532h-1.294c-1.998 0-2.623 1.24-2.623 2.51v1.713h3.147l-.503 3.667h-2.644v7.98h-3.515z"/>
                     </svg>
                   </a>
                   {/* Instagram */}
                   <a 
                    href="https://www.instagram.com/joannesdrivingschool" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white/5 p-3 rounded-xl hover:bg-brand-yellow hover:text-brand-charcoal transition-all"
                    aria-label="Instagram"
                   >
                     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                     </svg>
                   </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Stacks on mobile */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-[10px] md:text-xs font-medium text-center order-2 md:order-1">
            © {currentYear} Joanne's Driving School. All rights reserved.
          </p>
          <div className="flex gap-4 order-1 md:order-2">
            <span className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] border border-white/10 px-3 py-1 rounded-full">
              DVSA Qualified ADI
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}