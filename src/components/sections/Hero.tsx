import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-white">
      {/* Decorative Background Accent */}
      <div className="absolute top-0 right-0 -z-10 w-1/3 h-full bg-slate-50 skew-x-6 translate-x-20 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Left Content */}
        <div className="z-10 order-2 lg:order-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-brand-yellow/10 border border-brand-yellow/20 text-brand-charcoal px-4 py-1.5 rounded-full text-sm font-bold mb-6 lg:mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-yellow opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-yellow"></span>
            </span>
            Available for 2026 Lessons
          </div>
          
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-tighter uppercase italic text-brand-charcoal">
            Drive <br />
            <span className="text-brand-yellow not-italic">Smarter.</span> <br />
            Pass Faster.
          </h1>
          
          <p className="mt-6 lg:mt-10 text-lg md:text-xl text-brand-slate max-w-md mx-auto lg:mx-0 leading-relaxed">
            Hi, I’m <span className="text-brand-charcoal font-bold">Joanne</span>. A fully qualified ADI with <span className="text-brand-charcoal font-bold">25+ years experience</span> in Clevedon, Nailsea, and Portishead.
          </p>

         
        </div>

        {/* Right Visuals */}
        <div className="relative group order-1 lg:order-2 px-4 lg:px-0">
          {/* Main Image Container */}
          <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] bg-slate-200 rounded-[32px] lg:rounded-[40px] overflow-hidden shadow-2xl transform lg:rotate-2 group-hover:rotate-0 transition-transform duration-700">
             
             {/* The PNG Image */}
             <Image 
                src="/jo.png" 
                alt="Joanne - Driving Instructor"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
             />

             {/* Dark overlay at bottom to help the text pop */}
             <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/40 to-transparent" />
          </div>
          
          {/* Floating Trust Card */}
          <div className="absolute -bottom-6 lg:-bottom-8 -left-2 lg:-left-8 bg-white p-5 lg:p-8 rounded-2xl lg:rounded-3xl shadow-2xl border border-slate-100 animate-float z-20">
            <div className="flex items-center gap-3 lg:gap-4">
              <div className="bg-brand-yellow p-2 lg:p-3 rounded-xl lg:rounded-2xl">
                <svg className="w-6 h-6 lg:w-8 lg:h-8 text-brand-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="text-3xl lg:text-4xl font-black text-brand-charcoal leading-none">98%</p>
                <p className="text-[10px] lg:text-xs font-bold text-slate-500 uppercase tracking-tighter">1st Time Pass Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}