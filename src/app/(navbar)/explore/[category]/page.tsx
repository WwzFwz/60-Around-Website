"use client"; // This ensures the component is treated as a Client Component

import React from 'react';
import { useParams } from 'next/navigation';
import { api } from '~/trpc/react'; // Adjust the path based on your setup
import PlaceCard from './components/PlaceCard'; // Adjust the path based on your setup

const CategoryPage: React.FC = () => {
  const params = useParams();
  const category = Array.isArray(params.category) ? params.category[0] : params.category; // Ensure category is a string

  if (!category) {
    return <div>No category provided</div>; // Ensure you return some JSX if category is missing
  }

  const { data, isLoading } = api.places.getPlacesByCategory.useQuery(category);
  console.log("test")
  console.log(data)

  if (isLoading) {
    return <div>Loading...</div>; // Return JSX during loading
  }

  if (!data || data.length === 0) {
    return <div>No places found for {category}</div>; // Handle empty data case
  }

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6 capitalize">{category} Places</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((place) => (
          <PlaceCard
            key={place.id}
            imageUrl={place.imageUrl ?? '/default-image.png'}
            name={place.name}
            votes={place.totalLikes - place.totalDislikes}
            priceLevel={place.priceLevel ?? 'N/A'}
            categories={[category]}
            description={place.description}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
