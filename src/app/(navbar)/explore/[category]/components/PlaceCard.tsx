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

const PlaceCard: React.FC<PlaceCardProps> = ({ imageUrl, name, votes, priceLevel, categories, description }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg my-4">
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


