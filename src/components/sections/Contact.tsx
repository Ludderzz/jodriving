import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side: Text & Info */}
          <div>
            <h2 className="text-brand-yellow font-bold uppercase tracking-widest text-sm mb-3">
              Get Started
            </h2>
            <p className="text-5xl font-black text-brand-charcoal uppercase tracking-tighter mb-8">
              Book Your <br /> First Lesson.
            </p>
            <p className="text-lg text-brand-slate leading-relaxed mb-8 max-w-md">
              Fill out the form and I'll get back to you as soon as possible to discuss availability and get you on the road!
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-brand-charcoal">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <p className="font-bold text-brand-charcoal">07xxx xxxxxx</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-brand-charcoal">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <p className="font-bold text-brand-charcoal">joanne@example.com</p>
              </div>
            </div>
          </div>

          {/* Right Side: The Form */}
          <div className="bg-slate-50 p-8 md:p-12 rounded-[3rem] border border-slate-100">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-brand-charcoal ml-1">Full Name</label>
                <input type="text" placeholder="John Doe" className="w-full p-4 rounded-2xl border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-brand-yellow outline-none transition-all" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-brand-charcoal ml-1">Area</label>
                <input type="text" placeholder="e.g. Clevedon" className="w-full p-4 rounded-2xl border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-brand-yellow outline-none transition-all" />
              </div>

              <div className="space-y-2 md:col-span-2">
                <label className="text-xs font-black uppercase tracking-widest text-brand-charcoal ml-1">Driving Experience</label>
                <select className="w-full p-4 rounded-2xl border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-brand-yellow outline-none transition-all appearance-none bg-white">
                  <option>Complete Beginner</option>
                  <option>Some Experience</option>
                  <option>Previously Failed Test</option>
                  <option>Refresher Lessons</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-brand-charcoal ml-1">Email</label>
                <input type="email" placeholder="john@example.com" className="w-full p-4 rounded-2xl border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-brand-yellow outline-none transition-all" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-brand-charcoal ml-1">Phone Number</label>
                <input type="tel" placeholder="07123 456789" className="w-full p-4 rounded-2xl border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-brand-yellow outline-none transition-all" />
              </div>

              <div className="space-y-2 md:col-span-2">
                <label className="text-xs font-black uppercase tracking-widest text-brand-charcoal ml-1">Message</label>
                <textarea rows={4} placeholder="Tell me about your schedule..." className="w-full p-4 rounded-2xl border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-brand-yellow outline-none transition-all resize-none"></textarea>
              </div>

              <button className="md:col-span-2 bg-brand-charcoal text-white py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-brand-yellow hover:text-brand-charcoal transition-all shadow-xl active:scale-95">
                Send Inquiry
              </button>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
}