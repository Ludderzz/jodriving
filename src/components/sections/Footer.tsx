import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const areas = [
    "Clevedon", "Nailsea", "Portishead", 
    "Backwell", "Yatton", "Tickenham"
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

          {/* Quick Contact Column - Large tap targets */}
          <div className="text-center md:text-left">
            <h4 className="text-brand-yellow font-black uppercase tracking-widest text-xs mb-6">
              Connect
            </h4>
            <div className="space-y-6">
              <a href="tel:07765254421" className="block text-slate-300 hover:text-white transition-colors group">
                <span className="block text-[10px] uppercase font-bold text-slate-500 mb-1 group-hover:text-brand-yellow">Call or Text</span>
                <span className="font-bold text-lg">07765 254421</span>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61573173656596" target="_blank" className="block text-slate-300 hover:text-white transition-colors group">
                <span className="block text-[10px] uppercase font-bold text-slate-500 mb-1 group-hover:text-brand-yellow">Facebook</span>
                <span className="font-bold text-lg">Joanne's Driving School</span>
              </a>
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