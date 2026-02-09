import React from 'react';

const skills = [
  { title: "Traffic Mastery", desc: "Handling complex traffic situations with calm precision.", icon: "🚦" },
  { title: "Road Sign Logic", desc: "Mastering signs and signals until they become second nature.", icon: "🛑" },
  { title: "Precision Parking", desc: "Reversing and maneuvering into even the tightest spaces.", icon: "🅿️" },
  { title: "Junction Flow", desc: "Navigating roundabouts and busy junctions with total confidence.", icon: "🔄" },
];

export default function Curriculum() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side: Skills & Pedagogy */}
          <div>
            <h2 className="text-[#006837] font-bold uppercase tracking-[0.2em] text-xs mb-4">
              Behind the Wheel
            </h2>
            <p className="text-5xl md:text-6xl font-black text-[#1A1A1A] uppercase tracking-[-0.04em] leading-[0.9] mb-8">
              Hands-on <br/>is key.
            </p>
            <p className="text-lg text-slate-500 leading-relaxed mb-10 max-w-lg">
              My training is designed to give you the skills you need to feel fully in control, 
              from quiet residential streets to the busiest main roads.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {skills.map((skill, i) => (
                <div key={i} className="flex gap-4 p-5 rounded-2xl border border-[#006837]/20 bg-[#006837]/5 transition-transform hover:-translate-y-1 duration-300">
                  {/* Icons are now permanently full-color */}
                  <span className="text-3xl">
                    {skill.icon}
                  </span>
                  <div>
                    <h4 className="font-bold text-[#1A1A1A] text-sm uppercase tracking-tight">{skill.title}</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-snug">{skill.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Schedule Card */}
          <div className="bg-[#1A1A1A] rounded-[2.5rem] p-10 md:p-14 text-white relative overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,104,55,0.3)] border-b-8 border-[#006837]">
             <div className="relative z-10">
                <h3 className="text-3xl font-black uppercase mb-2 text-[#006837]">Lesson Hours</h3>
                <p className="mb-10 text-white/50 font-medium uppercase tracking-widest text-xs">Monday to Friday</p>
                
                <div className="space-y-6">
                   {[
                     { time: "1 Hour lesson", color: "bg-[#E30613]" }, 
                     { time: "2 Hours lesson", color: "bg-amber-500" }, 
                     { time: "3 Hours lesson", color: "bg-[#006837]" } 
                   ].map((slot, idx) => (
                     <div key={idx} className="flex items-center gap-6">
                        {/* Permanent Traffic Light Glow */}
                        <div className={`w-3 h-3 rounded-full ${slot.color} shadow-[0_0_15px_rgba(255,255,255,0.2)]`} />
                        
                        <div className="flex-1 border-b border-white/5 pb-4">
                           <span className="text-xl md:text-2xl font-black tracking-tighter text-white">
                            {slot.time}
                           </span>
                        </div>
                     </div>
                   ))}
                </div>
                
                <div className="mt-12 flex items-start gap-3 bg-[#006837]/10 p-4 rounded-xl border border-[#006837]/20">
                  <svg className="w-5 h-5 text-[#006837] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-xs italic text-white/80 leading-relaxed font-medium">
                    Custom times available upon request—let's find a schedule that works for your school or work life.
                  </p>
                </div>
             </div>
             
             {/* Large background "GO" - increased opacity for brand visibility */}
             <span className="absolute -bottom-16 -right-10 text-[260px] font-black text-[#006837] opacity-[0.07] select-none uppercase pointer-events-none">
                Go
             </span>
          </div>
        </div>
      </div>
    </section>
  );
}