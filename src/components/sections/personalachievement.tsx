"use client";

import React from 'react';
import Image from 'next/image';

export default function Achievement() {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-3 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#006837]/10 text-[#006837] text-xs font-bold uppercase tracking-widest">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#006837] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#006837]"></span>
              </span>
              New Qualification
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-[#1A1A1A] uppercase tracking-tight leading-[0.9]">
              A little personal <br /> 
              <span className="text-[#006837]">achievement...</span>
            </h2>

            <div className="space-y-4 text-slate-600 text-lg leading-relaxed max-w-2xl">
              <p className="font-bold text-[#1A1A1A]">
                I’m delighted to have achieved a First Class pass in my IAM RoadSmart Advanced Driver qualification.
              </p>
              
              <p>
                For me, being a driving instructor is about far more than simply helping pupils pass a test. It’s about continuing to learn, develop and improve my own skills so I can give my learners the highest standard of coaching, support and road safety education possible.
              </p>

              <p className="italic border-l-4 border-[#25D366] pl-4 py-1 bg-white/50">
                "I’m a big believer that you should never stop learning — no matter how long you’ve been driving."
              </p>

              <p>
                A huge thank you to everyone who has encouraged and supported me throughout the process. I’m excited to bring everything I’ve learned into my lessons at Joanne’s Driving School.
              </p>
            </div>
          </div>

          {/* Pop-out Module */}
          <div className="lg:col-span-2 relative">
            <div className="relative group">
              {/* Background Decorative Element */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#006837] to-[#25D366] rounded-[2.5rem] opacity-10 blur-2xl group-hover:opacity-20 transition-duration-500"></div>
              
              {/* Image Container */}
              <div className="relative bg-white p-4 rounded-[2rem] shadow-2xl border border-slate-100 transform transition-all duration-500 hover:scale-[1.02] hover:-rotate-1">
                <div className="relative aspect-[3/4] overflow-hidden rounded-[1.5rem] bg-slate-100 shadow-inner">
                  <Image
                    src="/IAMcert.jpg"
                    alt="IAM RoadSmart Advanced Driver Certificate"
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* Overlay Badge */}
                <div className="absolute -bottom-6 -right-6 bg-[#1A1A1A] text-white p-6 rounded-2xl shadow-xl hidden md:block">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#25D366] mb-1">Status</p>
                  <p className="text-xl font-black italic uppercase">First Class</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}