import React from 'react';

const features = [
  {
    title: "25+ Years Experience",
    description: "Learn from a fully qualified, friendly female ADI with over two decades of expert road knowledge.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04kM12 21.355r-1.158-1.12z" />
      </svg>
    ),
  },
  {
    title: "Tailored Coaching",
    description: "From complete beginners to driving test prep, lessons are adapted to your individual pace and learning style.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
      </svg>
    ),
  },
  {
    title: "Weekly Slots",
    description: "Flexible weekday sessions (8:30 AM – 3:30 PM) designed to fit around your school or work schedule.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function Info() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Static Header */}
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-[#006837] font-bold uppercase tracking-[0.2em] text-xs mb-4">
            Professional Tuition
          </h2>
          <p className="text-5xl md:text-6xl font-black text-[#1A1A1A] uppercase tracking-[-0.04em] leading-[0.9]">
            Setting the standard <br className="hidden md:block" /> for student success.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="relative bg-white p-10 lg:p-12 rounded-[2.5rem] border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col items-start"
            >
              {/* Permanent Color Box - No Hover Needed */}
              <div className="w-16 h-16 bg-[#006837] text-white rounded-2xl flex items-center justify-center mb-10 shadow-lg shadow-[#006837]/20">
                {feature.icon}
              </div>
              
              <h3 className="text-2xl font-black text-[#1A1A1A] mb-4 uppercase tracking-tight leading-tight">
                {feature.title}
              </h3>
              
              <p className="text-slate-500 leading-relaxed font-medium mb-4">
                {feature.description}
              </p>

              {/* Permanent Red Accent Strip - anchors the brand identity */}
              <div className="absolute bottom-0 left-0 w-full h-2 bg-[#E30613]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}