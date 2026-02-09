import React from 'react';

export default function BrandHeader() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo / Name */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-brand-yellow rounded-xl flex items-center justify-center font-black text-brand-charcoal shadow-sm">
            J
          </div>
          <div className="leading-none">
            <span className="text-xl font-black uppercase tracking-tighter text-brand-charcoal block">
              Joanne's
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-slate">
              Driving School
            </span>
          </div>
        </div>

        {/* Quick Action Button - High visibility on mobile */}
     

      </div>
    </nav>
  );
}