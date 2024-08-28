// "use client"; // Karena Anda sedang bekerja di sisi klien

// import { api } from "~/trpc/react";  // Pastikan Anda mengimpor `api` dengan benar
// import { useState } from "react";

// export default function PlacesList() {
//   const [category, setCategory] = useState('Foodies');
//   const { data, error, isLoading } = api.places.getPlacesByCategory.useQuery(category);
//   console.log(data)

//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error.message}</div>;

//   return (
//     <div>
//       <h1>Places in Category: {category}</h1>
//       <ul>
//         {data?.map((place) => (
//           <li key={place.id}>
//             <h2>{place.name}</h2>
//             <p>{place.description}</p>
//             <img  alt={place.name} />
//             <p>Location: {place.location}</p>
//             <p>Price Level: {place.priceLevel}</p>
//             <p>Price Range: {place.priceRangeLower} - {place.priceRangeUpper}</p>
//             <p>Likes: {place.totalLikes} | Dislikes: {place.totalDislikes}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }


// import React from 'react';
// import Image from 'next/image';

// type PlaceCardProps = {
//   imageUrl: string;
//   name: string;
//   votes: number;
//   priceLevel: string; // Use something like "$$", "$$$", etc.
//   categories: string[]; // Array of category icon filenames
//   description: string;
// };

// const PlaceCard: React.FC<PlaceCardProps> = ({ imageUrl, name, votes, priceLevel, categories, description }) => {
//   return (
//     <div className="max-w-xs rounded overflow-hidden shadow-lg my-4">
//       <Image className="w-full h-48 object-cover" src={imageUrl} alt={name}/>
//       <div className="px-6 py-4">
//         <div className="font-bold text-xl mb-2">{name}</div>
//         <div className="flex items-center justify-between text-gray-700 text-sm mb-2">
//           <div>{votes} UpVote</div>
//           <div>{priceLevel}</div>
//           <div className="flex space-x-2">
//             {categories.map((icon, index) => (
//               <Image key={index} src={`/icons/${icon}`} alt="Category Icon" className="w-5 h-5"/>
//             ))}
//           </div>
//         </div>
//         <p className="text-gray-700 text-base">{description}</p>
//       </div>
//     </div>
//   );
// };

// export default PlaceCard;



import React from 'react';
import Image from 'next/image';

type PlaceCardProps = {
  imageUrl: string;
  name: string;
  votes: number;
  priceLevel: string;
  categories: string[];
  description: string;
};

// const PlaceCard: React.FC<PlaceCardProps> = ({ imageUrl, name, votes, priceLevel, categories, description }) => {
//   return (
//     <div className="max-w-xs rounded overflow-hidden shadow-lg my-4">
//       <Image className="w-full h-48 object-cover" src={imageUrl} alt={name} width={400} height={300} />
//       <div className="px-6 py-4">
//         <div className="font-bold text-xl mb-2">{name}</div>
//         <div className="flex items-center justify-between text-gray-700 text-sm mb-2">
//           <div>{votes} UpVote</div>
//           <div>{priceLevel}</div>
//           <div className="flex space-x-2">
//             {categories.map((icon, index) => (
//               <Image key={index} src={`/icons/${icon.toLowerCase()}.svg`} alt="Category Icon" className="w-5 h-5" width={20} height={20} />
//             ))}
//           </div>
//         </div>
//         <p className="text-gray-700 text-baase">{description}</p>
//       </div>
//     </div>
//   );
// };




const PlaceCard: React.FC<PlaceCardProps> = ({ imageUrl, name, votes, priceLevel, categories, description }) => {
  return (
    <div className="max-w-xs rounded-2xl overflow-hidden shadow-lg my-4 mx-2">
      <Image className="w-full h-48 object-cover" src={imageUrl} alt={name} width={400} height={300} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <div className="flex items-center justify-between text-gray-700 text-sm mb-2">
          <div>{votes} UpVote</div>
          <div>{priceLevel}</div>
          <div className="flex space-x-2">
            {categories.map((icon, index) => (
              <Image key={index} src={`/icons/${icon.toLowerCase()}.svg`} alt="Category Icon" className="w-5 h-5" width={20} height={20} />
            ))}
          </div>
        </div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
};


export default PlaceCard;
