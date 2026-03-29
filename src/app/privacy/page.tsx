import React from 'react';
import Link from 'next/link';
import { privacyData } from '../../data/privacy';

export default function PrivacyPage() {
  // This function converts the **bold** and ### headers into actual HTML
  const formatContent = (text: string) => {
    return text
      .split('\n')
      .map((line, index) => {
        // Convert ### Header into Bold, Larger Text
        if (line.startsWith('###')) {
          return (
            <h3 key={index} className="text-xl font-black text-brand-charcoal mt-8 mb-4 uppercase tracking-tight">
              {line.replace('###', '').trim()}
            </h3>
          );
        }
        
        // Convert ## Header into Main Bold Heading
        if (line.startsWith('##')) {
          return (
            <h2 key={index} className="text-2xl font-black text-brand-charcoal mt-10 mb-6 uppercase italic">
              {line.replace('##', '').trim()}
            </h2>
          );
        }

        // Convert **word** into <strong>word</strong>
        const parts = line.split(/(\*\*.*?\*\*)/g);
        return (
          <p key={index} className="mb-4">
            {parts.map((part, i) => {
              if (part.startsWith('**') && part.endsWith('**')) {
                return (
                  <strong key={i} className="font-black text-brand-charcoal">
                    {part.slice(2, -2)}
                  </strong>
                );
              }
              return part;
            })}
          </p>
        );
      });
  };

  return (
    <main className="min-h-screen bg-slate-50 pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <Link href="/" className="text-brand-charcoal hover:text-brand-yellow font-bold text-sm mb-8 inline-flex items-center gap-2 transition-colors group">
          <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Home
        </Link>
        
        <div className="bg-white rounded-[2rem] p-8 md:p-16 shadow-xl shadow-slate-200/60 border border-slate-100">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12 border-b border-slate-100 pb-10">
            <div>
              <h1 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter text-brand-charcoal mb-2">
                Privacy <span className="text-brand-yellow not-italic">Policy</span>
              </h1>
              <p className="text-slate-400 text-sm font-bold uppercase tracking-widest">Joanne's Driving School Ltd</p>
            </div>
            
            <a 
              href="/privacy-policy.docx" 
              download 
              className="bg-brand-charcoal text-white px-8 py-4 rounded-2xl font-bold text-sm hover:bg-brand-yellow hover:text-brand-charcoal transition-all shadow-lg text-center"
            >
              Download .DOCX
            </a>
          </div>

          <article className="text-slate-600 leading-relaxed font-medium text-base md:text-lg">
            {formatContent(privacyData.content)}
          </article>
        </div>
      </div>
    </main>
  );
}