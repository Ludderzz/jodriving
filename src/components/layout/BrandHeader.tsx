import React from 'react';
import Image from 'next/image';

export default function BrandHeader() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100]">
      {/* Trust Bar / Announcement Bar */}
      <div className="bg-[#1A1A1A] text-white py-2 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* Social Icons & Rating */}
          <div className="flex items-center gap-6">
            {/* Social Links */}
            <div className="flex items-center gap-3 border-r border-white/10 pr-4">
              <a href="https://www.facebook.com/profile.php?id=61573173656596" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-[#25D366] transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.03 1.764-5.908 5.43-5.908 1.489 0 3.002.233 3.002.233v2.532h-1.294c-1.998 0-2.623 1.24-2.623 2.51v1.713h3.147l-.503 3.667h-2.644v7.98h-3.515z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/joannesdrivingschool" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-[#25D366] transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>

            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-3 h-3 fill-[#006837]" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="text-[10px] font-bold uppercase tracking-[0.1em] ml-2 hidden sm:inline text-white/70">
                5-Star Rated Instructor
              </span>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#006837] animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-widest text-[#006837]">
              Limited 2026 Space
            </span>
          </div>
        </div>
      </div>

      {/* Main Nav Bar */}
      <div className="bg-white/95 backdrop-blur-md border-b border-slate-100 h-20">
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          
          {/* Logo */}
          <div className="relative h-12 w-40">
            <Image 
              src="/jologo.png" 
              alt="Joanne's Driving School" 
              fill 
              className="object-contain object-left"
              priority
            />
          </div>

          {/* Contact Details */}
          <div className="text-right">
              <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 leading-none mb-1">Text or Call</p>
              <a href="tel:07765254421" className="block group">
                <p className="text-lg font-black text-[#1A1A1A] group-hover:text-[#006837] transition-colors leading-none tracking-tighter">07765 254421</p>
              </a>
          </div>

        </div>
      </div>
    </nav>
  );
}