import React from 'react';
import Image from 'next/image';

export default function AboutJo() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-16 lg:gap-24 items-center">
        
        {/* Photo Container */}
        <div className="md:w-1/2 relative order-2 md:order-1">
          {/* Static "L" Plate Accent */}
          <div className="absolute -top-6 -left-6 w-20 h-20 bg-white border-[6px] border-[#E30613] rounded-2xl z-20 flex items-center justify-center shadow-2xl -rotate-12 transition-transform hover:rotate-0 duration-500">
            <span className="text-[#E30613] font-black text-5xl">L</span>
          </div>

          <div className="bg-slate-50 p-4 rounded-[3rem] shadow-xl relative">
             <div className="aspect-[4/5] bg-slate-200 rounded-[2.5rem] relative overflow-hidden">
                <Image 
                  src="/jo.png" 
                  alt="Joanne ADI" 
                  fill 
                  className="object-cover" // Removed grayscale here
                  priority
                /> 
             </div>
             
             {/* Experience Badge */}
             <div className="absolute -bottom-8 -right-8 bg-[#1A1A1A] text-white p-6 rounded-3xl shadow-2xl border border-white/10 hidden lg:block">
                <p className="text-[#006837] font-black text-2xl leading-none">25+</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-white/50">Years On Road</p>
             </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="md:w-1/2 order-1 md:order-2">
           <h2 className="text-[#006837] font-bold uppercase tracking-[0.2em] text-xs mb-4">
             The Approach
           </h2>
           <h3 className="text-5xl md:text-6xl lg:text-7xl font-black text-[#1A1A1A] uppercase tracking-[-0.04em] leading-[0.9] mb-8">
             Safe, Enjoyable, <br/> & Stress-Free.
           </h3>
           <p className="text-xl text-slate-500 font-medium leading-relaxed mb-10 border-l-4 border-[#006837] pl-6 italic">
             "My goal is to make learning to drive a journey you actually enjoy. Whether you're a complete beginner or just need to brush up on skills, I tailor every lesson to your pace."
           </p>
           
           <div>
             <p className="text-[#1A1A1A] text-[10px] font-black uppercase tracking-[0.2em] mb-6">Service Areas</p>
             <div className="flex flex-wrap gap-2">
               {["Clevedon", "Nailsea", "Portishead", "Backwell", "Yatton"].map(city => (
                 <span 
                   key={city} 
                   className="bg-[#006837]/10 text-[#006837] border border-[#006837]/20 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#E30613] hover:text-white hover:border-[#E30613] transition-all duration-300 cursor-default"
                 >
                   {city}
                 </span>
               ))}
             </div>
           </div>
        </div>

      </div>
    </section>
  );
}