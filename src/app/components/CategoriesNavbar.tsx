import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa'; // Import the hamburger icon from React Icons

const CategoriesNavbar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to manage the sidebar visibility

  // Function to toggle the sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="bg-[#F9E897]  h-32 w-full flex  justify-between items-center">
      {/* Logo */}
      <div className="flex items-center pl-16 lg:pl-12">
        <Image src={'https://cbcbfvvlzsalhunyonzv.supabase.co/storage/v1/object/public/placePict/Logo.svg'} alt="6oAround Logo" width={200} height={50} />
      </div>

      {/* Search bar (visible only on large screens) */}
      <div className="hidden lg:flex items-center  justify-between w-1/2"> {/* Reduced search bar width */}
        <div className="flex items-center border-4 border-[#124076] rounded-lg overflow-hidden w-full bg-white">
          <input
            type="text"
            placeholder="Search based on Category"
            className="px-4 py-2 w-full focus:outline-none font-bold"
          />
          <div className="pr-3">
            <Image src="/search_icon.svg" alt="Search Icon" width={20} height={20} />
          </div>
        </div>
      </div>

      {/* Bookmark (closer to search bar) */}
      <div className="hidden lg:flex ml-4"> {/* Reduced margin for closer placement */}
        <Image src="/bookmark.svg" alt="Bookmark" width={50} height={50} />
      </div>

      {/* Sign Up button (closer to bookmark) */}
      <div className="hidden lg:flex ml-4"> {/* Reduced margin for closer placement */}
        <Link href="/" className="px-6 py-3 border-2 bg-[#124076] text-white rounded-lg"> {/* Slightly smaller button */}
          Sign Up
        </Link>
      </div>

      {/* Hamburger icon (visible on small screens) */}
      <div className="lg:hidden flex items-center">
        <button onClick={toggleSidebar} className="text-3xl">
          <FaBars />
        </button>
      </div>

      {/* Sidebar (visible on mobile when hamburger menu is clicked) */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-[#F9E897] shadow-lg z-50 transition-transform transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:hidden`} /* Applied z-50 for higher z-index */
      >
        {/* Close button */}
        <button
          onClick={toggleSidebar}
          className="text-2xl text-[#124076] p-4">
          &times;
        </button>

        {/* Sidebar content */}
        <div className="p-4 ">
          {/* Search bar */}
          <div className="flex items-center border-4 border-[#124076] rounded-lg overflow-hidden bg-white mb-4">
            <div className="pr-3">
              <Image src="/search_icon.svg" alt="Search Icon" width={20} height={20} />
            </div>
          </div>
      
          {/* Bookmark */}
          <div className="ml-6 mb-6">
            <Image src="/bookmark.svg" alt="Bookmark" width={50} height={50} />
          </div>

          {/* Sign Up button */}
          <Link href="/signup" className="px-2 ml-2 py-4 border-2 bg-[#124076] text-white rounded-lg">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default CategoriesNavbar;

