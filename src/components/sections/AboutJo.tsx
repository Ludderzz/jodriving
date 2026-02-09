import React from 'react';
import Image from 'next/image';

export default function AboutJo() {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-12 lg:gap-24 items-center">
        
        {/* Photo Container */}
        <div className="w-full md:w-1/2 relative order-1">
          {/* L-Plate: Balanced size for the new image ratio */}
          <div className="absolute -top-4 -left-2 md:-top-6 md:-left-6 w-14 h-14 md:w-20 md:h-20 bg-white border-[4px] md:border-[6px] border-[#E30613] rounded-xl md:rounded-2xl z-20 flex items-center justify-center shadow-xl -rotate-12 transition-transform hover:rotate-0 duration-500">
            <span className="text-[#E30613] font-black text-3xl md:text-5xl">L</span>
          </div>

          <div className="bg-slate-50 p-3 md:p-4 rounded-[2.5rem] md:rounded-[3rem] shadow-lg md:shadow-xl relative max-w-md mx-auto md:max-w-none">
             <div className="aspect-[4/3] md:aspect-[4/5] bg-slate-200 rounded-[1.8rem] md:rounded-[2.5rem] relative overflow-hidden">
                <Image 
                  src="/propic.jpg" 
                  alt="Joanne ADI" 
                  fill 
                  className="object-cover"
                  priority
                /> 
             </div>
             
             {/* Experience Badge */}
             <div className="absolute -bottom-4 -right-1 md:-bottom-8 md:-right-8 bg-[#1A1A1A] text-white p-4 md:p-6 rounded-2xl md:rounded-3xl shadow-2xl border border-white/10">
                <p className="text-[#006837] font-black text-xl md:text-2xl leading-none">25+</p>
                <p className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-white/50">Years On Road</p>
             </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 order-2 text-center md:text-left">
           <h2 className="text-[#006837] font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs mb-4">
             The Approach
           </h2>
           <h3 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#1A1A1A] uppercase tracking-[-0.04em] leading-[0.95] md:leading-[0.9] mb-8">
             Safe, Enjoyable, <br className="hidden md:block"/> & Stress-Free.
           </h3>
           <p className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed mb-10 border-l-4 border-[#006837] pl-5 md:pl-6 italic mx-auto md:mx-0 max-w-sm md:max-w-none">
             "My goal is to make learning to drive a journey you actually enjoy. I tailor every lesson to your pace."
           </p>
           
           <div className="flex flex-col items-center md:items-start">
             <p className="text-[#1A1A1A] text-[10px] font-black uppercase tracking-[0.2em] mb-6">Service Areas</p>
             <div className="flex flex-wrap justify-center md:justify-start gap-2">
               {["Clevedon", "Nailsea", "Portishead", "Backwell", "Yatton", "Congresbury", "Weston-Super-Mare"].map(city => (
                 <span 
                   key={city} 
                   className="bg-[#006837]/10 text-[#006837] border border-[#006837]/20 px-4 py-2 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest hover:bg-[#E30613] hover:text-white transition-all duration-300"
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