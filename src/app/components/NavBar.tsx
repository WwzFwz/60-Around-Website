'use client';

import { usePathname } from 'next/navigation';
// import { useEffect, useState } from 'react';

export default function Navbar() {
  // const [isClient, setIsClient] = useState(false);
  const pathname = usePathname();

  // useEffect(() => {
  //   setIsClient(true);
  // }, []);

  // if (!isClient) {
  //   return null;
  // }

  return (
    <header className="flex justify-between items-center p-6 fixed top-0 left-0 right-0 z-10 bg-transparent font-poppins">
      <div className="text-[#124076]  text-[42px] font-bold leading-[60px]">
        6O Around
      </div>
      <nav className="flex space-x-32 items-center"> 
        <a
          href="/home"
          className={`${
            pathname === '/home' ? 'text-[#124076]' : 'text-dark'
          } hover:text-[#124076]`}
          style={{
            fontSize: '18px', 
            fontWeight: '600',
          }}
        >
          Home
        </a>
        <a
          href="/explore"
          className={`${
            pathname === '/explore' ? 'text-[#124076]' : 'text-dark'
          } hover:text-[#124076]`}
          style={{
            fontSize: '18px', 
            fontWeight: '600',
          }}
        >
          Explore
        </a>
        <a
          href="/mini-games"
          className={`${
            pathname === '/mini-games' ? 'text-[#124076]' : 'text-dark'
          } hover:text-[#124076]`}
          style={{
            fontSize: '18px',
            fontWeight: '600',
          }}
        >
          Mini Games
        </a>
        <a
          href="/about-us"
          className={`${
            pathname === '/about-us' ? 'text-[#124076]' : 'text-dark'
          } hover:text-[#124076]`}
          style={{
            fontSize: '18px', // Ukuran font lebih besar
            fontWeight: '600',
          }}
        >
          About Us
        </a>
        <a
          href="/"
          className="text-dark hover:text-gray-300 border border-white rounded-full px-4 py-2 ml-4"
          style={{
            fontSize: '18px', // Ukuran font lebih besar
            fontWeight: '600',
            lineHeight: '30px',
          }}
        >
          Sign Up
        </a>
      </nav>
    </header>
  );
}

