
import React from "react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen bg-orange-200 flex flex-col">
      <div className="w-full flex-1 flex justify-center items-center">
        <div className="flex justify-between space-x-4">
          {/* Tempatkan konten carausel Anda di sini */}
        </div>
      </div>

      {/* Search Bar and Buttons Section */}
      <section className="bg-yellow-100 py-8">
        <div className="flex justify-center mb-6">
          <input
            type="text"
            placeholder="Scenery Cafe"
            className="w-80 p-3 border-2 border-orange-500 rounded-l-lg text-lg"
          />
          <button className="bg-orange-500 text-white p-3 rounded-r-lg hover:bg-orange-600">
            Search
          </button>
        </div>
        <div className="flex justify-center space-x-8">
          <Link href="/explore/entertainment">
            <button className="bg-orange-200 text-gray-800 py-2 px-4 rounded hover:bg-orange-300">
              Entertainment
            </button>
          </Link>
          <Link href="/explore/foodies">
            <button className="bg-orange-200 text-gray-800 py-2 px-4 rounded hover:bg-orange-300">
              Foodies
            </button>
          </Link>
          <Link href="/explore/study">
            <button className="bg-orange-200 text-gray-800 py-2 px-4 rounded hover:bg-orange-300">
              Study
            </button>
          </Link>
          <Link href="/explore/sport-and-health">
            <button className="bg-orange-200 text-gray-800 py-2 px-4 rounded hover:bg-orange-300">
              Sport & Health
            </button>
          </Link>
          <Link href="/explore/household">
            <button className="bg-orange-200 text-gray-800 py-2 px-4 rounded hover:bg-orange-300">
              Household
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
