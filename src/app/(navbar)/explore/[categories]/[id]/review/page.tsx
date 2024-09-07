// import React from 'react';
// import ReviewPage from './components/review';

// const Page: React.FC = () => {
//   return <ReviewPage  />;
// };

// export default Page;

"use client";

import React from 'react';
import { useParams } from 'next/navigation';
import ReviewPage from './components/review';

const ReviewPlacePage: React.FC = () => {
  const Params = useParams();

  // Assuming your URL is /explore/[categories]/[id]/review
  const categoryName = Params?.categories as string; // Get category from the URL
  const placeId = Params?.id as string; // Get place ID from the URL

  // Handle cases where the placeId or category is not found in the URL
  if (!placeId || !categoryName) {
    return <div>No place ID or category found. Please check the URL.</div>;
  }

  return (
    <div className="w-screen pt-8 min-w-screen py-8 min-h-screen">
      {/* Pass the placeId and categoryName to the ReviewPage component */}
      <ReviewPage placeId={placeId} categoryName={categoryName} />
    </div>
  );
};

export default ReviewPlacePage;

