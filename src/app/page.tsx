import Hero from "@/components/sections/Hero";
import Info from "@/components/sections/Info";
import Curriculum from "@/components/sections/Curriculum";
import AboutJo from "@/components/sections/AboutJo";
import Reviews from "@/components/sections/Reviews";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import FAQ from "@/components/sections/Fqa";

export default function Home() {
  return (
    <main className="relative">
      {/* 1. Impactful Entrance */}
      <Hero />
      
      {/* 2. Key Benefits at a Glance */}
      <Info />
      
      {/* 3. Deep Dive into Skills & Weekly Schedule */}
      <Curriculum />
      
      {/* 4. Personal Connection & Coverage Areas */}
      <AboutJo />
      
      {/* 5. Social Proof / Wall of Love */}
      <Reviews />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}