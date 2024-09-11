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
