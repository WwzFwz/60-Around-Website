import React from "react";
import Link from "next/link";
import Image from "next/image";
import Carousel from "./components/carousel"; // Sesuaikan path jika berbeda

export default function Page() {
  return (
    <div className="min-h-screen bg-orange-200 flex flex-col">
      <div className="flex-1 flex justify-center items-center h-screen">
        {/* Carousel */}
        <Carousel />
      </div>

      {/* Search Bar and Buttons Section */}
      <section className="bg-yellow-100 py-12">
        <div className="flex justify-center mb-6">
          <input
            type="text"
            placeholder="Search based on category"
            className="w-80 p-3 mb-8 border-2 border-orange-500 rounded-l-lg text-lg"
          />
          <button className="bg-orange-500 text-white mb-8 p-3 rounded-r-lg hover:bg-orange-600">
            Search
          </button>
        </div>

        {/* Button Section */}
        <div className="flex flex-wrap justify-center gap-4 lg:justify-between max-w-5xl mx-auto w-full">
          <Link href="/explore/entertainment">
            <button className="bg-[#FFC374] text-gray-800 py-3 px-4 rounded hover:bg-orange-300 flex items-center space-x-2 flex-grow min-w-[150px]">
              <Image src="/icons/entertainment.svg" alt="Entertainment" width={20} height={20} />
              <span>Entertainment</span>
            </button>
          </Link>
          <Link href="/explore/foodies">
            <button className="bg-[#FFC374] text-gray-800 py-3 px-4 rounded hover:bg-orange-300 flex items-center space-x-2 flex-grow min-w-[150px]">
              <Image src="/icons/foodies.svg" alt="Foodies" width={20} height={20} />
              <span>Foodies</span>
            </button>
          </Link>
          <Link href="/explore/study">
            <button className="bg-[#FFC374] text-gray-800 py-3 px-4 rounded hover:bg-orange-300 flex items-center space-x-2 flex-grow min-w-[150px]">
              <Image src="/icons/study.svg" alt="Study" width={20} height={20} />
              <span>Study</span>
            </button>
          </Link>
          <Link href="/explore/sport-and-health">
            <button className="bg-[#FFC374] text-gray-800 py-3 px-4 rounded hover:bg-orange-300 flex items-center space-x-2 flex-grow min-w-[150px]">
              <Image src="/icons/sport-and-health.svg" alt="Sport & Health" width={20} height={20} />
              <span>Sport & Health</span>
            </button>
          </Link>
          <Link href="/explore/household">
            <button className="bg-[#FFC374] text-gray-800 py-3 px-4 rounded hover:bg-orange-300 flex items-center space-x-2 flex-grow min-w-[150px]">
              <Image src="/icons/household.svg" alt="Household" width={20} height={20} />
              <span>Household</span>
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

