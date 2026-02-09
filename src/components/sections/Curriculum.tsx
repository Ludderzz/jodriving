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
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-brand-yellow font-bold uppercase tracking-widest text-sm mb-3">Behind the Wheel</h2>
            <p className="text-5xl font-black text-brand-charcoal uppercase tracking-tighter mb-6">Hands-on experience <br/>is key.</p>
            <p className="text-lg text-brand-slate leading-relaxed mb-8">
              My training is designed to give you the skills you need to feel fully in control, 
              from quiet residential streets to the busiest main roads.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {skills.map((skill, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-2xl border border-slate-50 hover:bg-slate-50 transition-colors">
                  <span className="text-3xl">{skill.icon}</span>
                  <div>
                    <h4 className="font-bold text-brand-charcoal">{skill.title}</h4>
                    <p className="text-xs text-brand-slate">{skill.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-brand-charcoal rounded-[3rem] p-12 text-white relative overflow-hidden">
             <div className="relative z-10">
                <h3 className="text-3xl font-black uppercase mb-6 text-brand-yellow">Lesson Hours</h3>
                <p className="mb-8 opacity-80 font-medium">Monday to Friday sessions available:</p>
                <div className="space-y-4">
                   {["8:30 AM – 10:30 AM", "11:00 AM – 1:00 PM", "1:30 PM – 3:30 PM"].map((time) => (
                     <div key={time} className="flex items-center gap-4 border-b border-white/10 pb-4">
                        <div className="w-2 h-2 rounded-full bg-brand-yellow" />
                        <span className="text-xl font-bold tracking-tight">{time}</span>
                     </div>
                   ))}
                </div>
                <p className="mt-8 text-sm italic opacity-60">Custom times available upon request—let's discuss your schedule!</p>
             </div>
             {/* Decorative "DS" background text */}
             <span className="absolute -bottom-10 -right-10 text-[200px] font-black opacity-5 select-none">DS</span>
          </div>
        </div>
      </div>
    </section>
  );
}