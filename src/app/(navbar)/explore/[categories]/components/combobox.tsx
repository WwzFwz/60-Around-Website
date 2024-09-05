"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const SortCombobox: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // To handle the dropdown state
  const [selectedOption, setSelectedOption] = useState('Trending'); // Default selection

  const options = ['Trending', 'Dari Termurah', 'Dari Termahal']; // The available sort options

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false); // Close the dropdown after selecting
  };

  return (
    <div className="flex items-center space-x-4">
      {/* Back Button */}
      <Link href="/explore" className="flex items-center px-4">
        <Image src="/back_arrow.svg" alt="Back" width={50} height={50} />
      </Link>

      {/* Sort by Text */}
      <span className="text-xl font-semibold">Sort by :</span>

      {/* Combobox */}
      <div className="relative">
        <button
          className="flex items-center space-x-2 bg-[#F9E897] py-3 px-6 text-xl rounded-md"
          onClick={toggleDropdown}
        >
          <span>{selectedOption}</span>
          <Image src="/filter_icon.svg" alt="Filter Icon" width={20} height={20} />
        </button>

        {/* Dropdown Options */}
        {isOpen && (
          <ul className="absolute bg-white shadow-lg rounded-md mt-2 w-full">
            {options.map((option) => (
              <li
                key={option}
                onClick={() => handleSelect(option)}
                className="px-4 py-2 cursor-pointer hover:bg-[#F9E897]"
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SortCombobox;
