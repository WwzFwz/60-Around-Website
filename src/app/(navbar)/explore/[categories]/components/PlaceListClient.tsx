"use client";

import React from 'react';
import PlaceCard from './PlaceCard';
import { api } from '~/trpc/react';
import { useParams } from 'next/navigation';

const PlaceListClient: React.FC = () => {
    const Params = useParams();
    const categoryName = Params.categories as string; // Ambil nama kategori dari URL
  
  // Ambil data tempat berdasarkan kategori menggunakan tRPC
  const { data: places, isLoading } = api.places.getPlacesByCategory.useQuery({
    categoryName: categoryName || '', // Pastikan nilai tidak null
  });
  console.log(places);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!places || places.length === 0) {
    return <div>No places found for this category.</div>;
  }

  return (
    <div className="flex flex-wrap justify-center">
      {places.map((place, index) => (
        <PlaceCard
          key={index}
          imageUrl={place.places.imageUrl || '/default-image.svg'}
          name={place.places.name}
          likes={place.places.totalLikes}
          priceLevel={place.places.priceLevel}
          category= {categoryName}
          placeId ={place.places.id}
        //   categories={[place.categories.name]} // Ubah jadi array dengan satu kategori
        //   categories={place.categories.map((category: { name: string }) => category.name)}
          description={place.places.description}
        />
      ))}
    </div>
  );
};

export default PlaceListClient;


// "use client";

// import React from 'react';
// import PlaceCard from './PlaceCard';
// import { api } from '~/trpc/react';
// import { useParams } from 'next/navigation';

// const PlaceListClient: React.FC = () => {
//   const params = useParams();
//   const categoryName = params.categories as string; // Ambil nama kategori dari URL

//   // Ambil data tempat berdasarkan kategori menggunakan tRPC
//   const { data: places, isLoading } = api.places.getPlacesByCategory.useQuery({
//     categoryName: categoryName || '', // Pastikan nilai tidak null
//   });
  
//   console.log(places);

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
//           imageUrl={place.imageUrl || '/default-image.svg'} // Tangani kemungkinan nilai null pada imageUrl
//           name={place.name}
//           likes={place.totalLikes}
//           priceLevel={place.priceLevel}
//           categories={place.categories.map((category: { name: string }) => category.name)}

//           description={place.description}
//         />
//       ))}
//     </div>
//   );
// };

// export default PlaceListClient;
