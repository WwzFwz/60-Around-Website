import React from 'react';
import PlaceCard from './components/PlaceCard';
import SortCombobox from './components/combobox';

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
    categories: ['sport_and_health', 'entertainment'],
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
    categories: ['entertainment', 'sport_and_health'],
    description: 'A cultural hub hosting various events and performances throughout the year.',
  },
  {
  imageUrl: '/places/place4-1.svg',
  name: 'Sasana Budaya Ganesha',
  votes: 95,
  priceLevel: '$$',
  categories: ['entertainment', 'study'],
  description: 'A cultural hub hosting various events and performances throughout the year.',
  },
  {    imageUrl: '/places/place4-1.svg',
    name: 'Sasana Budaya Ganesha',
    votes: 95,
    priceLevel: '$$',
    categories: ['entertainment', 'foodies'],
    description: 'A cultural hub hosting various events and performances throughout the year.',
  },
];

const PlaceList: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center ">
      {mockupData.map((place, index) => (
        <PlaceCard key={index} {...place} />
      ))}
    </div>
  );
};

const Page: React.FC = () => {
  return (
    <div className="w-screen pt-8 min-w-screen py-8 min-h-screen ">
      <SortCombobox/>
      <PlaceList />
    </div>
  );
};

export default Page;


