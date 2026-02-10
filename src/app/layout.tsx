import "./globals.css";
import type { Metadata } from "next";
import BrandHeader from "@/components/layout/BrandHeader";

const BASE_URL = "https://www.joannesdrivingschool.co.uk";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "Joanne's Driving School | Best Driving Lessons in Clevedon & Nailsea",
  description: "Looking for the best driving instructor in North Somerset? Fully qualified female ADI with 25+ years experience. Expert lessons in Clevedon, Nailsea, and Portishead. High pass rates and nervous pupil specialist.",
  keywords: [
    "Driving lessons Clevedon", 
    "Driving instructor Nailsea", 
    "Best driving instructor North Somerset",
    "Female driving instructor Clevedon", 
    "Driving schools Portishead", 
    "Learn to drive Yatton",
    "manual driving lessons Clevedon",
    "Refresher driving lessons Nailsea",
    "Local driving school Clevedon",
    "Patient driving instructor for nervous pupils",
    "DVSA approved driving instructor North Somerset"
  ],
  
  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Joanne's Driving School | Best Local Driving Tuition",
    description: "Start your journey to freedom with the best driving lessons in Clevedon, Nailsea, and Portishead.",
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
    description: "Expert driving lessons with a top-rated female instructor in North Somerset.",
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
    "description": "Professional driving tuition with a fully qualified female ADI with 25+ years experience. Best driving school for nervous pupils in North Somerset.",
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
      { "@type": "City", "name": "Congresbury" },
      { "@type": "City", "name": "Backwell" }
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