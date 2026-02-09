import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side: Text & Info */}
          <div>
            <h2 className="text-[#006837] font-bold uppercase tracking-[0.2em] text-xs mb-4">
              Get Started
            </h2>
            <p className="text-5xl md:text-6xl font-black text-[#1A1A1A] uppercase tracking-[-0.04em] leading-[0.9] mb-8">
              Book Your <br /> First Lesson.
            </p>
            <p className="text-lg text-slate-500 leading-relaxed mb-10 max-w-md font-medium">
              Fill out the form and I'll get back to you as soon as possible to discuss availability and get you on the road.
            </p>
            
            <div className="space-y-6">
              {/* Phone Card - Now permanently colored */}
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-[#E30613] rounded-2xl flex items-center justify-center text-white shadow-lg shadow-[#E30613]/20">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Call or Text</p>
                  <p className="font-black text-[#1A1A1A] text-xl">07xxx xxxxxx</p>
                </div>
              </div>

              {/* Email Card - Now permanently colored */}
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-[#006837] rounded-2xl flex items-center justify-center text-white shadow-lg shadow-[#006837]/20">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Email Me</p>
                  <p className="font-black text-[#1A1A1A] text-xl">joanne@example.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: The Form */}
          <div className="bg-[#1A1A1A] p-8 md:p-12 rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] border-b-8 border-[#006837]">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Full Name */}
              <div className="space-y-2 md:col-span-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-[#006837] ml-1">Full Name</label>
                <input type="text" placeholder="First and Last Name" className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:border-[#006837] focus:ring-1 focus:ring-[#006837] outline-none transition-all" />
              </div>

              {/* Email Address */}
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-[#006837] ml-1">Email Address</label>
                <input type="email" placeholder="email@example.com" className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:border-[#006837] focus:ring-1 focus:ring-[#006837] outline-none transition-all" />
              </div>

              {/* Phone Number */}
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-[#006837] ml-1">Phone Number</label>
                <input type="tel" placeholder="07123 456789" className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:border-[#006837] focus:ring-1 focus:ring-[#006837] outline-none transition-all" />
              </div>

              {/* Area */}
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-[#006837] ml-1">Your Area</label>
                <input type="text" placeholder="e.g. Clevedon" className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:border-[#006837] focus:ring-1 focus:ring-[#006837] outline-none transition-all" />
              </div>

              {/* Experience Level */}
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-[#006837] ml-1">Experience Level</label>
                <select className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white focus:border-[#006837] focus:ring-1 focus:ring-[#006837] outline-none transition-all appearance-none">
                  <option className="bg-[#1A1A1A]">Complete Beginner</option>
                  <option className="bg-[#1A1A1A]">Some Experience</option>
                  <option className="bg-[#1A1A1A]">Test Ready / Refresher</option>
                </select>
              </div>

              {/* Message */}
              <div className="space-y-2 md:col-span-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-[#006837] ml-1">Message</label>
                <textarea rows={3} placeholder="Any specific requirements or preferred times?" className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:border-[#006837] focus:ring-1 focus:ring-[#006837] outline-none transition-all resize-none"></textarea>
              </div>

              {/* Submit Button */}
              <button className="md:col-span-2 bg-[#E30613] text-white py-5 rounded-xl font-black uppercase tracking-widest hover:bg-[#006837] transition-all shadow-xl shadow-[#E30613]/20 active:scale-95 group flex items-center justify-center gap-3">
                Send Inquiry
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7-7 7M3 12h18" />
                </svg>
              </button>

              <p className="md:col-span-2 text-center text-white/30 text-[10px] uppercase tracking-widest font-bold">
                Usually responds within 24 hours
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}