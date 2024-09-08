// import React from 'react';
// import PlaceCard from './components/PlaceCard';
// import SortCombobox from './components/combobox';

// const mockupData = [
//   {
//     imageUrl: '/places/Place2-1.svg',
//     name: 'Cafe Ganesha',
//     votes: 120,
//     priceLevel: 3, // Changed from $$$ to 3
//     categories: ['Foodies', 'Study'],
//     description: 'A cozy cafe near ITB with great coffee and a perfect atmosphere for studying.',
//   },
//   {
//     imageUrl: '/places/Place3-1.svg',
//     name: 'Taman Sari Park',
//     votes: 85,
//     priceLevel: 1, // Changed from $ to 1
//     categories: ['sport_and_health', 'entertainment'],
//     description: 'A beautiful park perfect for a morning jog or an evening walk.',
//   },
//   {
//     imageUrl: '/places/Place4-1.svg',
//     name: 'ITB Library',
//     votes: 200,
//     priceLevel: 0, // Free
//     categories: ['study'],
//     description: 'A modern library with a vast collection of books and comfortable study spaces.',
//   },
//   {
//     imageUrl: '/places/place3-1.svg',
//     name: 'Cimol Street Food',
//     votes: 150,
//     priceLevel: 1, // Changed from $ to 1
//     categories: ['foodies', 'entertainment'],
//     description: 'Famous for its street food, Cimol is a must-visit for food lovers.',
//   },
//   {
//     imageUrl: '/places/place4-1.svg',
//     name: 'Sasana Budaya Ganesha',
//     votes: 95,
//     priceLevel: 2, // Changed from $$ to 2
//     categories: ['entertainment'],
//     description: 'A cultural hub hosting various events and performances throughout the year.',
//   },
//   {
//     imageUrl: '/places/place4-1.svg',
//     name: 'Sasana Budaya Ganesha',
//     votes: 95,
//     priceLevel: 2, // Changed from $$ to 2
//     categories: ['entertainment'],
//     description: 'A cultural hub hosting various events and performances throughout the year.',
//   },
//   {
//     imageUrl: '/places/place4-1.svg',
//     name: 'Sasana Budaya Ganesha',
//     votes: 95,
//     priceLevel: 2, // Changed from $$ to 2
//     categories: ['entertainment'],
//     description: 'A cultural hub hosting various events and performances throughout the year.',
//   },
//   {
//     imageUrl: '/places/place4-1.svg',
//     name: 'Sasana Budaya Ganesha',
//     votes: 95,
//     priceLevel: 2, // Changed from $$ to 2
//     categories: ['entertainment'],
//     description: 'A cultural hub hosting various events and performances throughout the year.',
//   },
// ];

// const PlaceList: React.FC = () => {
//   return (
//     <div className="flex flex-wrap justify-center ">
//       {mockupData.map((place, index) => (
//         <PlaceCard key={index} {...place} />
//       ))}
//     </div>
//   );
// };

// const Page: React.FC = () => {
//   return (
//     <div className="w-screen pt-8 min-w-screen py-8 min-h-screen ">
//       <SortCombobox/>
//       <PlaceList />
//     </div>
//   );
// };

// export default Page;

// "use client"
// import React from 'react';
// import PlaceCard from './components/PlaceCard';
// import { api } from '~/trpc/react';
// import { useRouter } from 'next/navigation';

// const PlaceList: React.FC = () => {
//   const router = useRouter();
//   const  categoryName  = "entertainment"; // Ambil nama kategori dari URL

//   // Ambil data tempat berdasarkan kategori menggunakan tRPC
//   const { data: places, isLoading } = api.places.getPlacesByCategory.useQuery({
//     categoryName: categoryName as string, // Pastikan ini sesuai dengan nama kategori dari URL
//   });

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (!places || places.length === 0) {
//     return <div>No places found for this category.</div>;
//   }

//   return (
//     <div className="flex flex-wrap justify-center">
//       {places.map((place, index) => (
//         <PlaceCard
//           key={index}
//           imageUrl={place.places.imageUrl || '/default-image.svg'} // Pastikan tempatkan dari places
//           name={place.places.name} // Pastikan diambil dari places
//           likes={place.places.totalLikes} // Menggunakan totalLikes dari places
//           priceLevel={place.places.priceLevel} // Dari places
//           categories={[place.categories.name]} // Ubah jadi array dengan satu kategori
//           // categories={place.categories.map((category: { name: string }) => category.name)} // Pastikan categories adalah array
//           // categories={place.categories.map((category: { name: string }) => category.name)} // Ambil name dari categories
//           description={place.places.description} // Deskripsi dari places
//         />
//       ))}
//     </div>
//   );
// };

// const Page: React.FC = () => {
//   return (
//     <div className="w-screen pt-8 min-w-screen py-8 min-h-screen">
//       {/* Tidak ada mockup data, langsung ambil dari tRPC */}
//       <PlaceList />
//     </div>
//   );
// };

// export default Page;


import React from 'react';
import PlaceListClient from './components/PlaceListClient';
import SortCombobox from './components/combobox';


const Page: React.FC = () => {
  return (
    <div className="w-screen pt-8 min-w-screen py-8 min-h-screen">
      <SortCombobox/>
      <PlaceListClient />
    </div>
  );
};

export default Page;
