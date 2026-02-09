import React from 'react';

export default function AboutJo() {
  return (
    <section className="py-24 bg-brand-yellow">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-12 items-center">
        <div className="md:w-1/2">
           <h2 className="text-5xl md:text-6xl font-black text-brand-charcoal uppercase tracking-tighter leading-none mb-6">
             Safe, Enjoyable, <br/> & Stress-Free.
           </h2>
           <p className="text-xl text-brand-charcoal/80 font-medium leading-relaxed">
             "My goal is to make learning to drive a journey you actually enjoy. Whether you're a complete beginner or just need to brush up on skills, I tailor every lesson to your pace."
           </p>
           <div className="mt-8 flex flex-wrap gap-3">
             {["Clevedon", "Nailsea", "Portishead", "Backwell", "Yatton"].map(city => (
               <span key={city} className="bg-brand-charcoal text-white px-4 py-2 rounded-xl text-sm font-bold uppercase tracking-widest">
                 {city}
               </span>
             ))}
           </div>
        </div>
        <div className="md:w-1/2 bg-white p-4 rounded-[2.5rem] rotate-2 shadow-2xl">
           <div className="aspect-square bg-slate-100 rounded-[2rem] flex items-center justify-center text-slate-300 italic">
             [Professional Photo of Joanne]
           </div>
        </div>
      </div>
    </section>
  );
}