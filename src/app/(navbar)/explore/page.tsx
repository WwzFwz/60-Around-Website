"use client"
import React from 'react';
import { useRouter } from 'next/navigation';

export default function ExplorePage() {
  const router = useRouter();

  const handleCategoryClick = (category: string) => {
    router.push(`/explore/${category}`);
  };

  return (
    <div>
      <section className="bg-cover bg-center h-96 flex items-center justify-center text-white text-center">
        <div>
          <h1 className="text-4xl font-bold">Explore Your Favorite Places</h1>
          <p className="mt-2 text-lg">Find the best places around Bandung to enjoy, study, or relax!</p>
        </div>
      </section>

      <section className="bg-yellow-100 py-8">
        <div className="flex justify-center mb-6">
          <input type="text" placeholder="Scenery Cafe" className="w-80 p-3 border-2 border-orange-500 rounded-l-lg text-lg" />
          <button className="bg-orange-500 text-white p-3 rounded-r-lg hover:bg-orange-600">Search</button>
        </div>
        <div className="flex justify-center space-x-4">
          <button
            className="bg-orange-200 text-gray-800 py-2 px-4 rounded hover:bg-orange-300"
            onClick={() => handleCategoryClick('Entertainment')}
          >
            Entertainment
          </button>
          <button
            className="bg-orange-200 text-gray-800 py-2 px-4 rounded hover:bg-orange-300"
            onClick={() => handleCategoryClick('foodies')}
          >
            Foodies
          </button>
          <button
            className="bg-orange-200 text-gray-800 py-2 px-4 rounded hover:bg-orange-300"
            onClick={() => handleCategoryClick('study')}
          >
            Study
          </button>
          <button
            className="bg-orange-200 text-gray-800 py-2 px-4 rounded hover:bg-orange-300"
            onClick={() => handleCategoryClick('sport-and-health')}
          >
            Sport and Health
          </button>
          <button
            className="bg-orange-200 text-gray-800 py-2 px-4 rounded hover:bg-orange-300"
            onClick={() => handleCategoryClick('household')}
          >
            Household
          </button>
        </div>
      </section>
    </div>
  );
}
