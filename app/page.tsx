'use client';
import { useEffect, useState } from 'react';
import Image from "next/image";
import OrbitingCircles from "@/components/ui/orbiting-circles";
import Globe from "@/components/ui/Globe";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Set the radius based on mobile view, increasing the mobile size by 50% again
  const innerRadius = isMobile ? 90 : 80; // Adjusted for mobile
  const outerRadius = isMobile ? 150 : 190; // Adjusted for mobile

  return (
    <div className="relative flex flex-col min-h-screen bg-[#f1f3f4] text-[#000000]">

      {/* GDG PPSU Header */}
      <div className="fixed top-0 left-0 p-4 bg-[#f1f3f4] shadow-lg w-full flex items-center z-10">
        {/* Logo and Text Section */}
        <div className="flex items-center space-x-2">
          <div className="img w-10 h-10 rounded-full overflow-hidden border-2 border-[#4285f4]">
            <Image src="/favicon.ico" alt="GDSC Logo" width={50} height={50} />
          </div>
          <div className="text">
            <p className={`text-lg font-semibold text-[#4285f4] ${isMobile ? 'text-sm' : ''}`}>
              Google Developer Groups
            </p>
            <p className={`text-sm text-[#5f6368] ${isMobile ? 'text-xs' : ''}`}>
              P P Savani University
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow flex flex-col items-center justify-center overflow-hidden rounded-lg border bg-white md:shadow-xl p-4 pt-20 pb-20 relative"> 
        {/* Globe as a background */}
        <Globe 
          className={`absolute inset-0 w-full h-full object-cover z-0 ${isMobile ? '-translate-y-20' : 'translate-y-1/4'}`} // Move globe much higher on mobile
        />

        {/* Socials text */}
        <span className={`pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-5xl md:text-7xl font-semibold leading-none text-transparent z-10 ${isMobile ? 'text-5xl' : ''}`}>
          Socials
        </span>

        {/* Inner Circles (Socials) */}
        <OrbitingCircles
          className="size-[50px] border-none bg-transparent z-20"
          duration={20}
          delay={20}
          radius={innerRadius} // Use dynamic radius
        >
          <a href="https://www.instagram.com/gdgcppsu?igsh=NGQ1NnhxZmVmYzZo" title="Instagram" target="_blank" rel="noopener noreferrer">
            <Image src="/instagram.png" alt="Instagram Icon" width={50} height={50} />
          </a>
        </OrbitingCircles>

        <OrbitingCircles
          className="size-[50px] border-none bg-transparent z-20"
          duration={20}
          delay={10}
          radius={innerRadius} // Use dynamic radius
        >
          <a href="https://chat.whatsapp.com/Ch3KsdfdXYt0nhiQ6I1p8C" title="WhatsApp Group" target="_blank" rel="noopener noreferrer">
            <Image src="/WhatsApp_icon.png" alt="WhatsApp Icon" width={50} height={50} />
          </a>
        </OrbitingCircles>

        {/* Outer Circles (reverse) with other Socials */}
        <OrbitingCircles
          className="size-[40px] border-none bg-transparent z-20"
          radius={outerRadius} // Use dynamic radius
          duration={20}
          reverse
        >
          <a href="https://www.linkedin.com/company/gdscppsu/posts/?feedView=all" title="LinkedIn" target="_blank" rel="noopener noreferrer">
            <Image src="/linkedin-icon.png" alt="LinkedIn Icon" width={50} height={50} />
          </a>
        </OrbitingCircles>

        <OrbitingCircles
          className="size-[55px] border-none bg-transparent z-20"
          radius={outerRadius} // Use dynamic radius
          duration={20}
          delay={20}
          reverse
        >
          <a href="https://gdg.community.dev/gdg-on-campus-p-p-savani-university-surat-india/" title="GDG Website" target="_blank" rel="noopener noreferrer">
            <Image src="/favicon.ico" alt="GDG Website Icon" width={50} height={50} />
          </a>
        </OrbitingCircles>
      </div>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 w-full bg-[#f1f3f4] text-[#000000] py-4 text-center flex flex-col justify-center items-center">
        <p className={`text-sm ${isMobile ? 'text-xs' : ''}`}>
          Powered by <span className="font-bold">GDG PPSU</span> | Designed with <span style={{ color: "#ea4335" }}>❤</span> for Developers
        </p>
        <p className={`text-xs text-[#000000]/80 mt-1 ${isMobile ? 'text-xs' : ''}`}>
          © 2024 GDG PPSU. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
