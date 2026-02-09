import React from 'react';

export default function BrandHeader() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Trust Bar / Announcement Bar */}
      <div className="bg-brand-charcoal text-white py-2 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-3 h-3 fill-brand-yellow" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="text-[10px] font-bold uppercase tracking-wider ml-1 hidden sm:inline">
                5-Star Rated Instructor
              </span>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-widest">
              Limited 2026 Space
            </span>
          </div>
        </div>
      </div>

      {/* Main Nav Bar */}
      <div className="bg-white/80 backdrop-blur-md border-b border-slate-100 h-20">
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          
          {/* Logo / Name */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-yellow rounded-xl flex image-rendering-pixelated items-center justify-center font-black text-brand-charcoal shadow-sm">
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

          {/* Contact Details or Phone (Optional replacement for the button) */}
          <div className="hidden md:block text-right">
             <p className="text-[10px] font-bold uppercase tracking-widest text-brand-slate">Direct Line</p>
             <p className="text-sm font-black text-brand-charcoal">07XXX XXXXXX</p>
          </div>

        </div>
      </div>
    </nav>
  );
}