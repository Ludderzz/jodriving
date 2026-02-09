import React from 'react';
import Image from 'next/image';

export default function BrandHeader() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100]">
      {/* Trust Bar / Announcement Bar */}
      <div className="bg-[#1A1A1A] text-white py-2 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-3 h-3 fill-[#006837]" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="text-[10px] font-bold uppercase tracking-[0.1em] ml-2 hidden sm:inline text-white/70">
                5-Star Rated Instructor
              </span>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#006837] animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-widest text-[#006837]">
              Limited 2026 Space
            </span>
          </div>
        </div>
      </div>

      {/* Main Nav Bar - Reduced height to h-20 for a tighter fit */}
      <div className="bg-white/95 backdrop-blur-md border-b border-slate-100 h-20">
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          
          {/* Logo */}
          <div className="relative h-12 w-40">
            <Image 
              src="/jologo.png" 
              alt="Joanne's Driving School" 
              fill 
              className="object-contain object-left"
              priority
            />
          </div>

          {/* Contact Details */}
          <div className="text-right">
             <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 leading-none mb-1">Text or Call</p>
              <a href="tel:07765254421" className="block text-slate-300 hover:text-white transition-colors group">
             <p className="text-lg font-black text-[#1A1A1A] leading-none tracking-tighter">07765 254421</p>
             </a>
          </div>

        </div>
      </div>
    </nav>
  );
}