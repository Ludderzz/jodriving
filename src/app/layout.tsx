import "./globals.css";
import type { Metadata } from "next";
import BrandHeader from "@/components/layout/BrandHeader";

export const metadata: Metadata = {
  title: "Joanne's Driving School | Expert Lessons in Clevedon & Nailsea",
  description: "Fully qualified female ADI with 25+ years experience. Professional driving tuition in Clevedon, Nailsea, Portishead, and surrounding areas.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body 
        className="antialiased bg-white text-brand-charcoal selection:bg-brand-yellow selection:text-brand-charcoal"
        suppressHydrationWarning
      >
        {/* The fixed navigation/brand bar */}
        <BrandHeader />
        
        {/* Main content area */}
        <main className="relative flex flex-col min-h-screen pt-[20px] md:pt-[20px]">
          {children}
        </main>
      </body>
    </html>
  );
}