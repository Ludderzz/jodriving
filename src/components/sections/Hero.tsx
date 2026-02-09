import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative flex items-center -mt-[250px] pt-[140px] pb-16 overflow-hidden bg-white">
      
      {/* Subtle Background Accent */}
      <div className="absolute top-0 right-0 -z-10 w-1/3 h-full bg-[#006837]/5 skew-x-12 translate-x-24 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        
        {/* Left Content */}
        <div className="z-10 order-2 lg:order-1 text-center lg:text-left">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 bg-[#006837] text-white px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-[0.15em] mb-8 shadow-lg shadow-[#006837]/30">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
            </span>
            Available for 2026 Lessons
          </div>
          
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[110px] font-black leading-[0.82] tracking-[-0.04em] uppercase text-[#1A1A1A]">
            Drive <br />
            <span className="text-[#006837]">Smarter.</span> <br />
            <span className="italic tracking-tighter text-[#E30613]">Pass Faster.</span>
          </h1>
          
          <p className="mt-8 text-lg md:text-xl text-slate-500 max-w-md mx-auto lg:mx-0 leading-relaxed font-medium">
            Hi, I’m <span className="text-[#1A1A1A] font-bold border-b-2 border-[#E30613] pb-0.5">Joanne</span>. A fully qualified ADI with <span className="text-[#1A1A1A] font-bold">25+ years experience</span> in Clevedon and surrounding areas.
          </p>

          {/* NEW: Book Now Button */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a 
              href="#contact" 
              className="group relative inline-flex items-center justify-center px-8 py-4 font-black text-white bg-[#1A1A1A] rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl shadow-black/20"
            >
              <span className="relative z-10 uppercase tracking-widest text-sm">Book Your First Lesson</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#006837] to-[#25D366] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            
            <a 
              href="tel:07765254421" 
              className="text-[#1A1A1A] font-bold text-sm uppercase tracking-widest border-b-2 border-transparent hover:border-[#E30613] transition-all py-2"
            >
              Or call 07765 254421
            </a>
          </div>
        </div>

        {/* Right Visuals */}
        <div className="relative order-1 lg:order-2 px-4 lg:px-0">
          <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] bg-slate-100 rounded-[2.5rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,104,55,0.2)] border border-slate-100">
             <Image 
                src="/jo.png" 
                alt="Joanne - Driving Instructor"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/50 via-transparent to-transparent" />
          </div>
          
          {/* Static L-Plate Card */}
          <div className="absolute -bottom-6 lg:-bottom-8 -left-2 lg:-left-8 bg-[#1A1A1A] p-6 lg:p-8 rounded-3xl shadow-2xl z-20 border border-white/10">
            <div className="flex items-center gap-5">
              <div className="bg-[#E30613] w-14 h-14 flex items-center justify-center rounded-xl shadow-lg rotate-[-5deg]">
                <span className="text-white font-black text-4xl">L</span>
              </div>
              <div>
                <p className="text-4xl lg:text-5xl font-black text-white leading-none tracking-tighter">98%</p>
                <p className="text-[10px] lg:text-xs font-bold text-[#006837] uppercase tracking-[0.2em] mt-2">1st Time Pass Rate</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}