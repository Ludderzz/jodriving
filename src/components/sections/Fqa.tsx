"use client";

import React, { useState } from 'react';

const faqData = [
  {
    question: "How many lessons will I need to pass?",
    answer: "The DVSA states that on average, a learner needs about 45 hours of professional tuition combined with 22 hours of private practice. However, everyone learns at a different pace—some pass much faster!"
  },
  {
    question: "What do I need to bring to my first lesson?",
    answer: "You must bring your provisional driving license and, if you need them for driving, your glasses or contact lenses and a pair of comfy shoes! We'll do a quick eyesight check (reading a number plate from 20 meters) before we start."
  },
  {
    question: "Do you offer block booking discounts?",
    answer: "Yes! While you can pay per lesson, most students prefer our 10-hour or 20-hour blocks, which offer a significant saving compared to the hourly rate."
  },
  {
    question: "Where do we meet for the lessons?",
    answer: "I offer door-to-door service! I can pick you up from home, work, or college within my covered areas (Clevedon, Nailsea, Portishead, etc.) and drop you off at a location of your choice afterwards."
  },
  {
    question: "Can I start lessons before passing my theory test?",
    answer: "Absolutely! In fact, learning the practical side often helps the theory make more sense. You just need to have passed your theory test before we can book your practical driving test."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[#006837] font-bold uppercase tracking-[0.2em] text-xs mb-4">
            Common Questions
          </h2>
          <p className="text-4xl md:text-5xl font-black text-[#1A1A1A] uppercase tracking-[-0.04em]">
            Everything you <br /> need to know.
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-[1.5rem] border border-slate-200 overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-left flex items-center justify-between group"
              >
                <span className={`font-bold text-lg transition-colors ${openIndex === index ? 'text-[#25D366]' : 'text-[#1A1A1A]'}`}>
                  {item.question}
                </span>
                <span className={`flex-shrink-0 ml-4 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${openIndex === index ? 'bg-[#25D366] border-[#25D366] text-white rotate-180' : 'border-slate-200 text-slate-400'}`}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-6 pt-0 text-slate-500 leading-relaxed font-medium border-t border-slate-50">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-400 font-medium">
            Still have questions? 
            <a href="#contact" className="text-[#25D366] font-bold ml-2 underline underline-offset-4">
              Ask me on WhatsApp
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}