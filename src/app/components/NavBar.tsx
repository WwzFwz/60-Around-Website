'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { FaBars } from 'react-icons/fa'; // Import the hamburger icon

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-30 bg-transparent font-poppins">
      <div className="flex justify-between items-center p-6">
        {/* Logo */}
        <div className=" flex items-center pl-16 lg:pl-12 lg:relative lg:right-auto absolute right-1">
          <Image src={'https://cbcbfvvlzsalhunyonzv.supabase.co/storage/v1/object/public/placePict/Logo.svg'} alt="6oAround Logo" width={200} height={50} />
        </div>

        {/* Navbar Links (visible on large screens) */}
        <nav className="hidden lg:flex space-x-64 items-center">
          <a
            href="/"
            className={`${
              pathname === '/home' ? 'text-[#124076]' : 'text-white'
            } hover:text-[#124076]`}
            style={{ fontSize: '18px', fontWeight: '600' }}
          >
            Home
          </a>
          <a
            href="/explore"
            className={`${
              pathname === '/explore' ? 'text-[#124076]' : 'text-white'
            } hover:text-[#124076]`}
            style={{ fontSize: '18px', fontWeight: '600' }}
          >
            Explore
          </a>
          <a
            href="/mini-games"
            className={`${
              pathname === '/mini-games' ? 'text-[#124076]' : 'text-white'
            } hover:text-[#124076] ml-4`}
            style={{ fontSize: '18px', fontWeight: '600' }}
          >
            Mini Games
          </a>
          {/* <a
            href="/about-us"
            className={`${
              pathname === '/about-us' ? 'text-[#124076]' : 'text-white'
            } hover:text-[#124076]`}
            style={{ fontSize: '18px', fontWeight: '600' }}
          >
            About Us
          </a> */}
          {/* <a
            href="/"
            className="text-white hover:text-gray-300 border border-white rounded-full px-4 py-2 ml-4"
            style={{ fontSize: '18px', fontWeight: '600', lineHeight: '30px' }}
          >
            Sign Up
          </a> */}
        </nav>

        {/* Hamburger Icon (visible on small screens) */}
        <div className="lg:hidden">
          <button onClick={toggleSidebar} className="text-3xl text-white">
            <FaBars />
          </button>
        </div>
      </div>
      
      {/* Sidebar for mobile view  z */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#FFC374] z-50 transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out lg:hidden`}
      >
        {/* Close button */}
        <button
          onClick={toggleSidebar}
          className="text-2xl text-[#124076] p-4"
        >
          &times;
        </button>

        {/* Sidebar content */}
        <nav className="flex flex-col space-y-4 p-6">
          <a
            href="/"
            className={`${
              pathname === '/' ? 'text-[#124076]' : 'text-white'
            } hover:text-[#124076]`}
            style={{ fontSize: '18px', fontWeight: '600' }}
          >
            Home
          </a>
          <a
            href="/explore"
            className={`${
              pathname === '/explore' ? 'text-[#124076]' : 'text-white'
            } hover:text-[#124076]`}
            style={{ fontSize: '18px', fontWeight: '600' }}
          >
            Explore
          </a>
          <a
            href="/mini-games"
            className={`${
              pathname === '/mini-games' ? 'text-[#124076]' : 'text-white'
            } hover:text-[#124076]`}
            style={{ fontSize: '18px', fontWeight: '600' }}
          >
            Mini Games
          </a>
          {/* <a
            href="/about-us"
            className={`${
              pathname === '/about-us' ? 'text-[#124076]' : 'text-white'
            } hover:text-[#124076]`}
            style={{ fontSize: '18px', fontWeight: '600' }}
          >
            About Us
          </a> */}
          {/* <a
            href="/login"
            className="text-white hover:text-gray-300 border border-white rounded-full px-4 py-2"
            style={{ fontSize: '18px', fontWeight: '600', lineHeight: '30px' }}
          >
            Sign Up
          </a> */}
        </nav>
      </div>
    </header>
  );
}

