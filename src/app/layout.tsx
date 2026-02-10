import "./globals.css";
import type { Metadata } from "next";
import BrandHeader from "@/components/layout/BrandHeader";

const BASE_URL = "https://www.joannesdrivingschool.co.uk";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "Joanne's Driving School | Expert Lessons in Clevedon & Nailsea",
  description: "Fully qualified female ADI with 25+ years experience. Professional driving tuition in Clevedon, Nailsea, Portishead, and surrounding areas. High pass rates and nervous pupil specialist.",
  keywords: ["Driving lessons Clevedon", "Driving instructor Nailsea", "Female driving instructor North Somerset", "Driving lessons Portishead", "Learn to drive Clevedon"],
  
  // This helps SEO by preventing duplicate content issues
  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Joanne's Driving School | Professional Driving Tuition",
    description: "Start your journey to freedom with expert driving lessons in North Somerset.",
    url: "/",
    siteName: "Joanne's Driving School",
    images: [
      {
        url: "/jologo.png", 
        width: 1200,
        height: 630,
        alt: "Joanne's Driving School Logo",
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: "Joanne's Driving School",
    description: "Expert driving lessons in Clevedon, Nailsea, and Portishead.",
    images: ["/jologo.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DrivingSchool",
    "name": "Joanne's Driving School",
    "image": `${BASE_URL}/jologo.png`,
    "description": "Professional driving tuition with a fully qualified female ADI with 25+ years experience.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Clevedon",
      "addressRegion": "North Somerset",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 51.4380,
      "longitude": -2.8530
    },
    "url": BASE_URL,
    "telephone": "+447765254421",
    "priceRange": "££",
    "areaServed": [
      { "@type": "City", "name": "Clevedon" },
      { "@type": "City", "name": "Nailsea" },
      { "@type": "City", "name": "Portishead" },
      { "@type": "City", "name": "Yatton" },
      { "@type": "City", "name": "Congresbury" }
    ]
  };

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body 
        className="antialiased bg-white text-brand-charcoal selection:bg-[#25D366] selection:text-white"
        suppressHydrationWarning
      >
        <BrandHeader />
        <main className="relative flex flex-col min-h-screen pt-[20px] md:pt-[20px]">
          {children}
        </main>
      </body>
    </html>
  );
}