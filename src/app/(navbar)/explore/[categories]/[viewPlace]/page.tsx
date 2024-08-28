// import React from "react";


// export default function Page() {

//   return (
//     //contoh//
//      <div className="bg-green-500 h-screen" >Page  
//     </div>
//   );
// }

"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function PlaceDetail() {
  const router = useRouter();
  const { id } = router.query;

  // Mock data untuk detail tempat. Anda bisa menggantinya dengan data dari API atau database.
  const placeDetail = {
    name: 'Dots Boardgame Cafe',
    votes: 216,
    priceLevel: '$$',
    priceRange: '25-50k/orang',
    categories: ['game', 'food'],
    description: 'Dots BoardGame Cafe adalah tempat yang sempurna untuk berkumpul bersama teman dan keluarga sambil menikmati berbagai pilihan boardgame yang seru dan menantang...',
    address: 'Jl. Industri, Bandung',
    gmapsUrl: 'https://www.google.com/maps/embed?...',
    images: [
      '/places/dots-boardgame-cafe.jpg',
      '/places/place2-1.svg',
      '/places/place3-1.svg',
      '/places/place4-1.svg',
    ],
  };

  return (
    <div className="container mx-auto py-8 px-4 flex">
      <div className="w-1/2">
        <Image
          src={'Place2-1.svg'}
          alt={placeDetail.name}
          width={500}
          height={400}  
          className="rounded-lg"
        />
        <div className="flex mt-4 space-x-2">
          {placeDetail.images.slice(1).map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`Additional Image ${index + 1}`}
              width={100}
              height={100}
              className="rounded-lg"
            />
          ))}
        </div>
        <div className="mt-4">
          <Link href="#">
            <a className="text-blue-500 underline">Sudah ke Sini?</a>
          </Link>
        </div>
        <button className="mt-4 bg-yellow-400 text-gray-800 py-2 px-4 rounded-lg hover:bg-yellow-500">
          Review
        </button>
      </div>
      <div className="w-1/2 pl-8">
        <h1 className="text-4xl font-bold mb-4">{placeDetail.name}</h1>
        <p className="text-gray-600 mb-4">
          {placeDetail.votes} Vote | {placeDetail.priceLevel} | {placeDetail.priceRange}
        </p>
        <p className="text-gray-700 mb-8">{placeDetail.description}</p>
        <div className="h-64">
          <iframe
            src={placeDetail.gmapsUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
          Explore!
        </button>
      </div>
    </div>
  );
}
