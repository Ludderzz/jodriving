"use client"; // Required for the menu toggle state

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo Area */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-brand-charcoal text-brand-yellow font-black px-2 py-1 rounded transition-colors group-hover:bg-brand-yellow group-hover:text-brand-charcoal">
            DS
          </div>
          <span className="font-bold text-xl tracking-tighter uppercase italic text-brand-charcoal">
            DrivePro<span className="text-brand-yellow not-italic">.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          <Link href="#services" className="text-sm font-bold uppercase tracking-widest text-slate-600 hover:text-brand-yellow transition-colors">Services</Link>
          <Link href="#reviews" className="text-sm font-bold uppercase tracking-widest text-slate-600 hover:text-brand-yellow transition-colors">Reviews</Link>
          <Link href="#about" className="text-sm font-bold uppercase tracking-widest text-slate-600 hover:text-brand-yellow transition-colors">About</Link>
          <Link 
            href="#contact" 
            className="bg-brand-charcoal text-white px-6 py-3 rounded-full text-sm font-bold uppercase tracking-tighter hover:bg-brand-yellow hover:text-brand-charcoal transition-all shadow-md"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-brand-charcoal"
          onClick={() => setIsOpen(!isOpen)}
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

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-6 py-8 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
          <Link href="#services" onClick={() => setIsOpen(false)} className="text-lg font-bold">Services</Link>
          <Link href="#reviews" onClick={() => setIsOpen(false)} className="text-lg font-bold">Reviews</Link>
          <Link href="#contact" onClick={() => setIsOpen(false)} className="bg-brand-yellow text-brand-charcoal text-center py-4 rounded-xl font-bold">Book Now</Link>
        </div>
      )}
    </nav>
  );
}