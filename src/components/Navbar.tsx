"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo Area */}
        <Link 
          href="/" 
          onClick={() => setIsOpen(false)} 
          className="flex items-center gap-2 group shrink-0"
        >
          <div className="bg-brand-charcoal text-brand-yellow font-black px-2 py-1 rounded transition-colors group-hover:bg-brand-yellow group-hover:text-brand-charcoal">
            J
          </div>
          <span className="font-bold text-lg md:text-xl tracking-tighter uppercase italic text-brand-charcoal">
            Joanne's <span className="text-brand-yellow not-italic">Driving School.</span>
          </span>
        </Link>
        

        {/* Desktop Navigation - Added Privacy & Terms */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <Link href="#services" className="text-[11px] lg:text-xs font-bold uppercase tracking-widest text-slate-600 hover:text-brand-yellow transition-colors">Services</Link>
          <Link href="#reviews" className="text-[11px] lg:text-xs font-bold uppercase tracking-widest text-slate-600 hover:text-brand-yellow transition-colors">Reviews</Link>
          <Link href="/privacy" className="text-[11px] lg:text-xs font-bold uppercase tracking-widest text-slate-600 hover:text-brand-yellow transition-colors">Privacy</Link>
          <Link href="/terms" className="text-[11px] lg:text-xs font-bold uppercase tracking-widest text-slate-600 hover:text-brand-yellow transition-colors">Terms</Link>
          
          <Link 
            href="#contact" 
            className="bg-brand-charcoal text-white px-5 py-2.5 rounded-full text-[11px] lg:text-xs font-bold uppercase tracking-tighter hover:bg-brand-yellow hover:text-brand-charcoal transition-all shadow-md shrink-0"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-brand-charcoal p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown - Added Privacy & Terms */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-6 py-8 flex flex-col gap-5 animate-in slide-in-from-top duration-300">
          <Link href="#services" onClick={() => setIsOpen(false)} className="text-lg font-bold text-brand-charcoal">Services</Link>
          <Link href="#reviews" onClick={() => setIsOpen(false)} className="text-lg font-bold text-brand-charcoal">Reviews</Link>
          <Link href="/privacy" onClick={() => setIsOpen(false)} className="text-lg font-bold text-brand-charcoal">Privacy Policy</Link>
          <Link href="/terms" onClick={() => setIsOpen(false)} className="text-lg font-bold text-brand-charcoal">Terms & Conditions</Link>
          <Link 
            href="#contact" 
            onClick={() => setIsOpen(false)} 
            className="bg-brand-yellow text-brand-charcoal text-center py-4 rounded-xl font-bold shadow-sm mt-2"
          >
            Book Now
          </Link>
        </div>
      )}
    </nav>
  );
}