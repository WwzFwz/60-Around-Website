// "use client"; // This ensures the component is treated as a Client Component

// import React from 'react';
// import { useParams } from 'next/navigation';
// import { api } from '~/trpc/react'; // Adjust the path based on your setup
// import PlaceCard from './components/PlaceCard'; // Adjust the path based on your setup

// const CategoryPage: React.FC = () => {
//   const params = useParams();
//   const category = Array.isArray(params.category) ? params.category[0] : params.category; // Ensure category is a string

//   if (!category) {
//     return <div>No category provided</div>; // Ensure you return some JSX if category is missing
//   }

//   const { data, isLoading } = api.places.getPlacesByCategory.useQuery(category);
//   console.log("test")
//   console.log(data)

//   if (isLoading) {
//     return <div>Loading...</div>; // Return JSX during loading
//   }

//   if (!data || data.length === 0) {
//     return <div>No places found for {category}</div>; // Handle empty data case
//   }

//   return (
//     <div className="container mx-auto px-4">
//       <h1 className="text-3xl font-bold mb-6 capitalize">{category} Places</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {data.map((place) => (
//           <PlaceCard
//             key={place.id}
//             imageUrl={place.imageUrl ?? '/default-image.png'}
//             name={place.name}
//             votes={place.totalLikes - place.totalDislikes}
//             priceLevel={place.priceLevel ?? 'N/A'}
//             categories={[category]}
//             description={place.description}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CategoryPage;



import React from 'react';
import PlaceCard from './components/PlaceCard';

const mockupData = [
  {
    imageUrl: '/places/Place2-1.svg',
    name: 'Cafe Ganesha',
    votes: 120,
    priceLevel: '$$$',
    categories: ['Foodies', 'Study'],
    description: 'A cozy cafe near ITB with great coffee and a perfect atmosphere for studying.',
  },
  {
    imageUrl: '/places/Place3-1.svg',
    name: 'Taman Sari Park',
    votes: 85,
    priceLevel: '$',
    categories: ['sport', 'entertainment'],
    description: 'A beautiful park perfect for a morning jog or an evening walk.',
  },
  {
    imageUrl: '/places/Place4-1.svg',
    name: 'ITB Library',
    votes: 200,
    priceLevel: 'Free',
    categories: ['study'],
    description: 'A modern library with a vast collection of books and comfortable study spaces.',
  },
  {
    imageUrl: '/places/place3-1.svg',
    name: 'Cimol Street Food',
    votes: 150,
    priceLevel: '$',
    categories: ['foodies', 'entertainment'],
    description: 'Famous for its street food, Cimol is a must-visit for food lovers.',
  },
  {
    imageUrl: '/places/place4-1.svg',
    name: 'Sasana Budaya Ganesha',
    votes: 95,
    priceLevel: '$$',
    categories: ['entertainment', 'culture'],
    description: 'A cultural hub hosting various events and performances throughout the year.',
  },{
  
    imageUrl: '/places/place4-1.svg',
    name: 'Sasana Budaya Ganesha',
    votes: 95,
    priceLevel: '$$',
    categories: ['entertainment', 'culture'],
    description: 'A cultural hub hosting various events and performances throughout the year.',
  },
  {
  imageUrl: '/places/place4-1.svg',
  name: 'Sasana Budaya Ganesha',
  votes: 95,
  priceLevel: '$$',
  categories: ['entertainment', 'culture'],
  description: 'A cultural hub hosting various events and performances throughout the year.',
  },
  {    imageUrl: '/places/place4-1.svg',
    name: 'Sasana Budaya Ganesha',
    votes: 95,
    priceLevel: '$$',
    categories: ['entertainment', 'culture'],
    description: 'A cultural hub hosting various events and performances throughout the year.',
  },
];

const PlaceList: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {mockupData.map((place, index) => (
        <PlaceCard key={index} {...place} />
      ))}
    </div>
  );
};

const Page: React.FC = () => {
  return (
    <div className="container pt-24 w-screen py-8 bg-orange-200 min-h-screen ">
      <h1 className="text-3xl font-bold text-center mb-6 "></h1>
      <PlaceList />
    </div>
  );
};

export default Page;


