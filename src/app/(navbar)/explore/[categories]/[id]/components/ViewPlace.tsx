"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { api } from '~/trpc/react'; // Import tRPC client


type Category = { id: string; name: string }; // Define type for categories

// Function to generate the price level icons
const renderPriceLevel = (level: number) => {
  const filledIcon = '/icons/mdi_dollar.svg';
  const greyIcon = '/icons/mdi_dollar_grey.svg';
  const icons = [];

  // Push the correct number of filled icons
  for (let i = 0; i < level; i++) {
    icons.push(
      <Image key={`filled-${i}`} src={filledIcon} alt="Price Level" width={20} height={20} />
    );
  }

  // Push the remaining grey icons
  for (let i = level; i < 3; i++) {
    icons.push(<Image key={`grey-${i}`} src={greyIcon} alt="Price Level" width={20} height={20} />);
  }

  return <div className="flex items-center space-x-1">{icons}</div>;
};

type ViewPlaceProps = {
  id: string; // Now fetching place based on the placeId
  category: string;
};
const placeId = "c2196275-b25b-4cd4-86d1-d752afda4ecd"
const ViewPlacePage: React.FC<ViewPlaceProps> = ({id,category }) => {
  // Fetch place data by placeId
  const { data: place, isLoading: isPlaceLoading } = api.places.getPlaceById.useQuery({placeId : id || ''});
  
  // Fetch categories associated with the placeId
  const { data: categories, isLoading: isCategoriesLoading } = api.places.getCategoriesByPlaceId.useQuery({ placeId : id || ''});

  if (isPlaceLoading || isCategoriesLoading) {
    return <div>Loading...</div>;
  }

  if (!place) {
    return <div>No place data found</div>;
  }

  // Construct Google Maps URL using the location (address)
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    place.location
  )}`;

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start lg:space-x-6 p-6 text-[#124076]">
      {/* Back Arrow */}
      <Link href={`/explore/${category}`}>
        <button className="absolute top-32 left-2 rounded-full p-2">
          <Image src="/back_arrow.svg" alt="Back" width={40} height={40} />
        </button>
      </Link>

      {/* Left Section */}
      <div className="w-full lg:w-1/2 mb-6 lg:mb-0 flex flex-col items-center">
        {/* Image */}
        <Image
          src={place.imageUrl || '/default-image.svg'}
          alt={place.name}
          width={600}
          height={400}
          className="rounded-lg"
        />

        {/* Text Above Button */}
        <p className="mt-4 text-lg font-bold text-[#124076] text-left w-[600px]">
          Sudah Pernah Kesini?
        </p>

        {/* Review Button */}
        <Link href={`/explore/${category}/${placeId}/review`}>
          <button className="mt-2 w-[600px] bg-[#F9E897] text-[#124076] font-bold py-4 text-lg rounded-lg">
            Review
          </button>
        </Link>
      </div>
      {/* Right Section */}
      <div className="w-full lg:w-1/2 pl-8 lg:pl-0 flex flex-col lg:h-[calc(100vh-200px)] lg:flex-grow">
        {/* Place Title */}
        <h1 className="text-3xl font-bold mb-4">{place.name}</h1>

        {/* Votes, Price Level, Price Range, Categories */}
        <div className="flex items-center text-lg mb-4 space-x-4">
          <span>{place.totalLikes} Likes</span>
          <span>|</span>
          {/* Render the price level icons */}
          {renderPriceLevel(place.priceLevel)}
          <span>|</span>
          <span>
            {place.priceRangeLower} - {place.priceRangeUpper} / orang
          </span>
          <span>|</span>
          {/* Category Logos */}
          <div className="flex space-x-2">
            {categories?.map((category: Category) => (
              <div key={category.id} className="flex items-center">
                <Image
                  src={`/icons/${category.name.toLowerCase()}.svg`} // Assuming logo filenames are lowercase
                  alt={category.name}
                  width={30}
                  height={30}
                  className="mr-1"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Description */}
        <p className="text-lg mb-6 text-black">{place.description}</p>

        {/* Google Maps Image with "Explore" Button */}
        <div className="relative mt-auto pb-6">  {/* mt-auto pushes this element to the bottom */}
          <Image
            src="/gmaps-test.svg" // Background image from g-maps folder
            alt="Map Preview"
            width={820}
            height={200}
            className="rounded-lg"
          />
          {/* Button in the top-right corner */}
          <Link href={googleMapsUrl} target="_blank">
            <button className="absolute bottom-8 right-8 bg-[#F9E897] text-[#124076] font-bold py-2 px-4 rounded-lg">
              Explore!
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ViewPlacePage;

