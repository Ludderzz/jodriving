"use client";
import React, { useRef } from 'react';
import reviewsData from '@/data/reviews.json';

export default function Reviews() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth 
        : scrollLeft + clientWidth;
      
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section id="reviews" className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header - Aligned with the Pro aesthetic */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-20 gap-8">
          <div>
            <h2 className="text-[#006837] font-bold uppercase tracking-[0.2em] text-xs mb-4">
              The Wall of Love
            </h2>
            <p className="text-5xl md:text-6xl font-black text-[#1A1A1A] uppercase tracking-[-0.04em] leading-[0.9]">
              Success <br className="md:hidden" /> Stories.
            </p>
          </div>
          
          {/* Pro Navigation - Deep Charcoal & Forest Green */}
          <div className="flex gap-4">
            <button 
              onClick={() => scroll('left')}
              aria-label="Scroll Left"
              className="group p-4 rounded-full border border-slate-200 hover:border-[#006837] transition-all active:scale-95"
            >
              <svg className="w-6 h-6 text-[#1A1A1A] group-hover:text-[#006837]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={() => scroll('right')}
              aria-label="Scroll Right"
              className="p-4 rounded-full bg-[#1A1A1A] text-white hover:bg-[#006837] transition-all shadow-lg active:scale-95"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* The Carousel Container */}
        <div 
          ref={scrollRef}
          className="flex gap-6 md:gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-12"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {reviewsData.map((review, index) => (
            <div 
              key={index} 
              className="min-w-[85%] sm:min-w-[45%] lg:min-w-[31%] snap-center bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.04)] flex flex-col justify-between hover:shadow-[0_20px_50px_rgba(0,104,55,0.08)] transition-shadow duration-500"
            >
              <div>
                {/* Star Ratings - Using the Rich Red for emphasis */}
                <div className="flex text-[#E30613] mb-6 gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[#1A1A1A] font-medium leading-relaxed italic mb-8 text-base md:text-lg">
                  "{review.text.length > 180 ? review.text.substring(0, 180) + '...' : review.text}"
                </p>
              </div>

              {/* Student Identification - Forest Green accents */}
              <div className="flex items-center gap-4 pt-6 border-t border-slate-50">
                <div className="w-12 h-12 bg-[#006837] rounded-full flex items-center justify-center font-black text-white text-base shadow-inner">
                  {review.text.charAt(1)}
                </div>
                <div>
                  <p className="text-sm font-black uppercase text-[#1A1A1A] tracking-tight">Verified Student</p>
                  <p className="text-[10px] font-bold text-[#006837] uppercase tracking-widest">Qualified with Joanne</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}