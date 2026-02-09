"use client";

import React, { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const onWhatsAppSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('sending');
    
    const formData = new FormData(event.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const area = formData.get('area');
    const level = formData.get('level'); 
    const message = formData.get('message');

    // for testing number: 07552384420 
    // Format: 44 (UK code) followed by number without the leading 0
    const myNumber = "447765254421";

    const text = `Hi! I'd like to book a driving lesson.%0A%0A` +
                 `*Name:* ${name}%0A` +
                 `*Email:* ${email}%0A` +
                 `*Phone:* ${phone}%0A` +
                 `*Area:* ${area}%0A` +
                 `*Experience:* ${level}%0A` +
                 `*Message:* ${message}`;

    const whatsappUrl = `https://wa.me/${myNumber}?text=${text}`;
    window.open(whatsappUrl, '_blank');
    setStatus('success');
  };

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
              Message me <br /> on WhatsApp.
            </p>
            
            {status === 'success' ? (
              <div className="bg-[#25D366] text-white p-8 rounded-[2rem] shadow-xl animate-in fade-in zoom-in duration-500">
                <h4 className="text-2xl font-black mb-2 uppercase italic">Sent!</h4>
                <p className="font-medium opacity-90">WhatsApp should have opened. If not, please click the button below to retry.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-6 text-xs font-bold uppercase tracking-widest border-b-2 border-white pb-1"
                >
                  Back to form
                </button>
              </div>
            ) : (
              <>
                <p className="text-lg text-slate-500 leading-relaxed mb-10 max-w-md font-medium">
                  Fill out the details below. Once you hit send, it will open WhatsApp to start a conversation with me instantly.
                </p>
                
                <div className="space-y-8">
                  {/* Phone Row */}
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-[#25D366] rounded-2xl flex items-center justify-center text-white shadow-lg shadow-[#25D366]/20">
                      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.222-4.032c1.504.893 3.12 1.365 4.771 1.365 5.228 0 9.482-4.254 9.485-9.482.001-2.533-.987-4.913-2.783-6.71s-4.176-2.784-6.71-2.784c-5.231 0-9.484 4.253-9.487 9.482-.001 1.817.516 3.593 1.496 5.141l-.979 3.574 3.656-.959z" />
                      </svg>
                    </div>
                    <div>
                         <a href="tel:07765254421" className="block text-slate-300 hover:text-white transition-colors group">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Mobile Contact</p>
                      <p className="font-black text-[#1A1A1A] text-xl">07765 254421</p>
                      </a>
                    </div>
                  </div>

                  {/* Email Row */}
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-600">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0l-9.53 6.47a1.125 1.125 0 01-1.27 0L2.25 6.75" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Email Joanne</p>
                    <a 
                        href="mailto:joanne@example.com?subject=Driving Lesson Inquiry" 
                        className="font-black text-[#1A1A1A] text-xl underline decoration-[#25D366] decoration-4 underline-offset-4 hover:text-[#006837] transition-colors"
                        >jo@joannesdrivingschool.co.uk</a>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Right Side: The Form */}
          <div className={`bg-[#1A1A1A] p-8 md:p-12 rounded-[2.5rem] shadow-2xl border-b-8 border-[#25D366] transition-all duration-500 ${status === 'success' ? 'opacity-30 blur-sm pointer-events-none' : 'opacity-100'}`}>
            <form onSubmit={onWhatsAppSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="space-y-2 md:col-span-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-[#25D366] ml-1">Full Name</label>
                <input required name="name" type="text" placeholder="First and Last Name" className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-[#25D366] transition-all" />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-[#25D366] ml-1">Email Address</label>
                <input required name="email" type="email" placeholder="email@example.com" className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-[#25D366] transition-all" />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-[#25D366] ml-1">Phone Number</label>
                <input required name="phone" type="tel" placeholder="07xxx xxxxxx" className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-[#25D366] transition-all" />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-[#25D366] ml-1">Area</label>
                <input required name="area" type="text" placeholder="e.g. Clevedon" className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-[#25D366] transition-all" />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-[#25D366] ml-1">Experience</label>
                <div className="relative">
                  <select name="level" className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white focus:border-[#25D366] outline-none appearance-none cursor-pointer">
                    <option className="bg-[#1A1A1A]">Complete Beginner</option>
                    <option className="bg-[#1A1A1A]">Some Experience</option>
                    <option className="bg-[#1A1A1A]">Test Ready / Refresher</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/40">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </div>
              </div>

              <div className="space-y-2 md:col-span-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-[#25D366] ml-1">Message</label>
                <textarea required name="message" rows={3} placeholder="Tell me about your schedule..." className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-[#25D366] transition-all resize-none"></textarea>
              </div>

              <button 
                type="submit"
                disabled={status === 'sending'}
                className="md:col-span-2 bg-[#25D366] text-white py-5 rounded-xl font-black uppercase tracking-widest hover:bg-white hover:text-[#25D366] disabled:bg-slate-700 transition-all flex items-center justify-center gap-3 active:scale-95 shadow-lg shadow-[#25D366]/20"
              >
                {status === 'sending' ? "Opening WhatsApp..." : "Send via WhatsApp"}
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.222-4.032c1.504.893 3.12 1.365 4.771 1.365 5.228 0 9.482-4.254 9.485-9.482.001-2.533-.987-4.913-2.783-6.71s-4.176-2.784-6.71-2.784c-5.231 0-9.484 4.253-9.487 9.482-.001 1.817.516 3.593 1.496 5.141l-.979 3.574 3.656-.959z" /></svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}