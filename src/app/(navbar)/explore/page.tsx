// // "use client"; // This ensures the component is treated as a Client Component

// // import React from 'react';
// // import { useParams } from 'next/navigation';
// // import { api } from '~/trpc/react'; // Adjust the path based on your setup
// // import PlaceCard from './components/PlaceCard'; // Adjust the path based on your setup

// // const CategoryPage: React.FC = () => {
// //   const params = useParams();
// //   const category = Array.isArray(params.category) ? params.category[0] : params.category; // Ensure category is a string

// //   if (!category) {
// //     return <div>No category provided</div>; // Ensure you return some JSX if category is missing
// //   }

// //   const { data, isLoading } = api.places.getPlacesByCategory.useQuery(category);
// //   console.log("test")
// //   console.log(data)

// //   if (isLoading) {
// //     return <div>Loading...</div>; // Return JSX during loading
// //   }

// //   if (!data || data.length === 0) {
// //     return <div>No places found for {category}</div>; // Handle empty data case
// //   }

// //   return (
// //     <div className="container mx-auto px-4">
// //       <h1 className="text-3xl font-bold mb-6 capitalize">{category} Places</h1>
// //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
// //         {data.map((place) => (
// //           <PlaceCard
// //             key={place.id}
// //             imageUrl={place.imageUrl ?? '/default-image.png'}
// //             name={place.name}
// //             votes={place.totalLikes - place.totalDislikes}
// //             priceLevel={place.priceLevel ?? 'N/A'}
// //             categories={[category]}
// //             description={place.description}
// //           />
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default CategoryPage;



// import React from 'react';
// import PlaceCard from './components/PlaceList';

// const mockupData = [
//   {
//     imageUrl: '/places/Place2-1.svg',
//     name: 'Cafe Ganesha',
//     votes: 120,
//     priceLevel: '$$$',
//     categories: ['Foodies', 'Study'],
//     description: 'A cozy cafe near ITB with great coffee and a perfect atmosphere for studying.',
//   },
//   {
//     imageUrl: '/places/Place3-1.svg',
//     name: 'Taman Sari Park',
//     votes: 85,
//     priceLevel: '$',
//     categories: ['sport and health', 'entertainment'],
//     description: 'A beautiful park perfect for a morning jog or an evening walk.',
//   },
//   {
//     imageUrl: '/places/Place4-1.svg',
//     name: 'ITB Library',
//     votes: 200,
//     priceLevel: 'Free',
//     categories: ['study'],
//     description: 'A modern library with a vast collection of books and comfortable study spaces.',
//   },
//   {
//     imageUrl: '/images/place4.jpg',
//     name: 'Cimol Street Food',
//     votes: 150,
//     priceLevel: '$',
//     categories: ['foodies', 'entertainment'],
//     description: 'Famous for its street food, Cimol is a must-visit for food lovers.',
//   },
//   {
//     imageUrl: '/places/place5.jpg',
//     name: 'Sasana Budaya Ganesha',
//     votes: 95,
//     priceLevel: '$$',
//     categories: ['entertainment', 'Sport and Health'],
//     description: 'A cultural hub hosting various events and performances throughout the year.',
//   },
// ];

// const PlaceList: React.FC = () => {
//   return (
//     <div className="flex flex-wrap justify-center">
//       {mockupData.map((place, index) => (
//         <PlaceCard key={index} {...place} />
//       ))}
//     </div>
//   );
// };

// const Page: React.FC = () => {
//   return (
//     <div className="container mx-auto py-8">
//       <h1 className="text-3xl font-bold text-center mb-6">Explore Favorite Places Around ITB</h1>
//       <PlaceList />
//     </div>
//   );
// };

// export default Page;


// import React from 'react';
// import Image from 'next/image';
// import { useRouter } from 'next/router';
// import PlaceList from './components/PlaceList';

// const Page: React.FC = () => {
//   const router = useRouter();

//   const handleCategoryClick = (category: string) => {
//     router.push(`/category/${category.toLowerCase()}`);
//   };

//   return (
//     <div className="container mx-auto py-8">
//       {/* Carausel Section */}
//       <div className="w-full h-[50vh] flex justify-center items-center overflow-hidden">
//         <div className="flex justify-between space-x-4">
//           <Image src="/images/photo1.jpg" alt="Photo 1" width={600} height={400} className="rounded-lg object-cover" />
//           <Image src="/images/photo2.jpg" alt="Photo 2" width={600} height={400} className="rounded-lg object-cover" />
//           <Image src="/images/photo3.jpg" alt="Photo 3" width={600} height={400} className="rounded-lg object-cover" />
//         </div>
//       </div>

//       {/* Search Bar and Buttons Section */}
//       <div className="bg-[#FFC374] p-6 mt-8 rounded-xl">
//         <div className="flex justify-center mb-4">
//           <input
//             type="text"
//             placeholder="Search..."
//             className="w-full max-w-md p-2 rounded-lg border-2 border-gray-300"
//           />
//         </div>
//         <div className="flex justify-around">
//           <button
//             className="bg-[#FFC374] p-2 px-4 rounded-full text-white font-bold"
//             onClick={() => handleCategoryClick('Food')}
//           >
//             Food
//           </button>
//           <button
//             className="bg-[#FFC374] p-2 px-4 rounded-full text-white font-bold"
//             onClick={() => handleCategoryClick('Study')}
//           >
//             Study
//           </button>
//           <button
//             className="bg-[#FFC374] p-2 px-4 rounded-full text-white font-bold"
//             onClick={() => handleCategoryClick('Entertainment')}
//           >
//             Entertainment
//           </button>
//           <button
//             className="bg-[#FFC374] p-2 px-4 rounded-full text-white font-bold"
//             onClick={() => handleCategoryClick('Sport & Health')}
//           >
//             Sport & Health
//           </button>
//           <button
//             className="bg-[#FFC374] p-2 px-4 rounded-full text-white font-bold"
//             onClick={() => handleCategoryClick('Household')}
//           >
//             Household
//           </button>
//         </div>
//       </div>


//     </div>
//   );
// };

// export default Page;




// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// // 
// const Page: React.FC = () => {
//   return (
//     <div className="container mx-auto py-8">
//       {/* Carausel Section */}
//       <div className="w-full h-[50vh] flex justify-center items-center overflow-hidden">
//         <div className="flex justify-between space-x-4">
//           <Image src="/images/photo1.jpg" alt="Photo 1" width={600} height={400} className="rounded-lg object-cover" />
//           <Image src="/images/photo2.jpg" alt="Photo 2" width={600} height={400} className="rounded-lg object-cover" />
//           <Image src="/images/photo3.jpg" alt="Photo 3" width={600} height={400} className="rounded-lg object-cover" />
//         </div>
//       </div>

//       {/* Search Bar and Buttons Section */}
//       <div className="bg-[#FFC374] p-6 mt-8 rounded-xl">
//         <div className="flex justify-center mb-4">
//           <input
//             type="text"
//             placeholder="Search..."
//             className="w-full max-w-md p-2 rounded-lg border-2 border-gray-300"
//           />
//         </div>
//         <div className="flex justify-around">
//           <Link href="/category/food" className="bg-[#FFC374] p-2 px-4 rounded-full text-white font-bold">
//             Food
//           </Link>
//           <Link href="/category/study" className="bg-[#FFC374] p-2 px-4 rounded-full text-white font-bold">
//             Study
//           </Link>
//           <Link href="/category/entertainment" className="bg-[#FFC374] p-2 px-4 rounded-full text-white font-bold">
//             Entertainment
//           </Link>
//           <Link href="/category/sport-and-health" className="bg-[#FFC374] p-2 px-4 rounded-full text-white font-bold">
//             Sport & Health
//           </Link>
//           <Link href="/category/household" className="bg-[#FFC374] p-2 px-4 rounded-full text-white font-bold">
//             Household
//           </Link>
//         </div>
//       </div>

//       {/* Place List Section */}
//       {/* <PlaceList /> */}
//     </div>
//   );
// };

// export default Page;


// import React from "react";
// import Link from "next/link";
// import Image from "next/image";

// export default function Page() {
//   return (
//     <div className="container  mx-auto py-8 bg-orange-200">
//        <div className="w-full h-[50vh] flex justify-center items-center overflow-hidden">
//          <div className="flex justify-between space-x-4">

//          </div>
//        </div>

//       {/* Search Bar and Buttons Section */}
//       <section className="bg-yellow-100 py-8">
//         <div className="flex justify-center mb-6">
//           <input
//             type="text"
//             placeholder="Scenery Cafe"
//             className="w-80 p-3 border-2 border-orange-500 rounded-l-lg text-lg"
//           />
//           <button className="bg-orange-500 text-white p-3 rounded-r-lg hover:bg-orange-600">
//             Search
//           </button>
//         </div>
//         <div className="flex justify-center space-x-8 ">
//           <Link href="/explore/entertainment">
//             <button className="bg-orange-200 text-gray-800 py-2 px-4 rounded hover:bg-orange-300">
//               Entertainment
//             </button>
//           </Link>
//           <Link href="/explore/Foodies">
//             <button className="bg-orange-200 text-gray-800 py-2 px-4 rounded hover:bg-orange-300">
//               Foodies
//             </button>
//           </Link>
//           <Link href="/explore/Study">
//             <button className="bg-orange-200 text-gray-800 py-2 px-4 rounded hover:bg-orange-300">
//               Study
//             </button>
//           </Link>
//           <Link href="/explore/sport-and-health">
//             <button className="bg-orange-200 text-gray-800 py-2 px-4 rounded hover:bg-orange-300">
//               Sport & Health
//             </button>
//           </Link>
//           <Link href="/explore/Household">
//             <button className="bg-orange-200 text-gray-800 py-2 px-4 rounded hover:bg-orange-300">
//               Household
//             </button>
//           </Link>
//         </div>
//       </section>
//     </div>
//   );
// }


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
