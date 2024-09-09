"use client";

import React from 'react';
import { useParams } from 'next/navigation';
import ViewPlacePage from './components/ViewPlace'; 

const PlacePage: React.FC = () => {
  const Params =  useParams();
  const category = Params.categories as string;
  const id = Params.id as string; // Access the id directly

 
  if (!id) {
    return <div>No place ID found. Please check the URL.</div>;
  }

  return (
    <div className="w-screen pt-8 min-w-screen py-8 min-h-screen">
      {/* Pass the placeId to the ViewPlacePage component */}
      <ViewPlacePage id={id} category = {category} />
    </div>
  );
};

export default PlacePage;
