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
    <section id="reviews" className="py-16 md:py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header - Stacks on mobile, side-by-side on desktop */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-12 gap-6">
          <div>
            <h2 className="text-brand-yellow font-bold uppercase tracking-widest text-xs md:text-sm mb-2 md:mb-3">
              Wall of Love
            </h2>
            <p className="text-4xl md:text-5xl font-black text-brand-charcoal uppercase tracking-tighter">
              Student Stories
            </p>
          </div>
          
          {/* Navigation Buttons - Hidden on very small touch screens or kept small */}
          <div className="flex gap-3">
            <button 
              onClick={() => scroll('left')}
              aria-label="Scroll Left"
              className="p-3 md:p-4 rounded-full border-2 border-brand-charcoal hover:bg-brand-yellow transition-colors active:scale-90"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button 
              onClick={() => scroll('right')}
              aria-label="Scroll Right"
              className="p-3 md:p-4 rounded-full bg-brand-charcoal text-white hover:bg-brand-yellow hover:text-brand-charcoal transition-colors active:scale-90"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>

        {/* The Carousel Container */}
        <div 
          ref={scrollRef}
          className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {reviewsData.map((review, index) => (
            <div 
              key={index} 
              className="min-w-[90%] sm:min-w-[48%] lg:min-w-[32%] snap-center bg-white p-6 md:p-8 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex text-brand-yellow mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 md:w-5 md:h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <p className="text-brand-charcoal/80 leading-relaxed italic mb-6 text-sm md:text-base">
                  "{review.text.length > 200 ? review.text.substring(0, 200) + '...' : review.text}"
                </p>
              </div>

              <div className="flex items-center gap-3 md:gap-4 border-t border-slate-50 pt-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-yellow rounded-full flex items-center justify-center font-black text-brand-charcoal text-sm">
                  {review.text.charAt(0)}
                </div>
                <div>
                  <p className="text-xs md:text-sm font-black uppercase text-brand-charcoal tracking-tight">Verified Student</p>
                  <p className="text-[10px] md:text-xs font-bold text-slate-400 uppercase">Joanne's Driving School</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}