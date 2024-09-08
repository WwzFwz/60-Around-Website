// "use client";
// import React from "react";
// import Image from "next/image";
// import Link from "next/link";

// type PlaceCardProps = {
//   imageUrl: string;
//   name: string;
//   votes: number;
//   priceLevel: number; // Changed to number
//   categories: string[];
//   description: string;
// };

// // Function to render price level as dollar icons
// const renderPriceLevel = (level: number) => {
//   const filledIcon = "/icons/mdi_dollar.svg"; // Filled dollar icon
//   const greyIcon = "/icons/mdi_dollar_grey.svg"; // Greyed-out dollar icon
//   const icons = [];

//   // Add filled dollar icons based on the price level
//   for (let i = 0; i < level; i++) {
//     icons.push(
//       <Image key={`filled-${i}`} src={filledIcon} alt="Price Level" width={20} height={20} />
//     );
//   }

//   // Add remaining grey icons to make up to 3 total icons
//   for (let i = level; i < 3; i++) {
//     icons.push(
//       <Image key={`grey-${i}`} src={greyIcon} alt="Price Level" width={20} height={20} />
//     );
//   }

//   return <div className="flex items-center  ">{icons}</div>;
// };

// const PlaceCard: React.FC<PlaceCardProps> = ({
//   imageUrl,
//   name,
//   votes,
//   priceLevel,
//   categories,
//   description,
// }) => {
//   return (
//     <Link href={`/explore/entertainment/id`}>
//       <div className="max-w-xs rounded-2xl overflow-hidden shadow-lg my-4 mx-6 h-96">
//         <Image className="w-full h-48 object-cover" src={imageUrl} alt={name} width={400} height={300} />
//         <div className="px-6 py-4">
//           <div className="font-bold text-xl mb-2">{name}</div>
//           <div className="flex items-center justify-between text-gray-700 text-sm mb-2">
//             <div>{votes} UpVote</div>
//             {/* Render price level icons */}
//             {renderPriceLevel(priceLevel)}
//             <div className="flex space-x-2">
//               {categories.map((icon, index) => (
//                 <Image key={index} src={`/icons/${icon.toLowerCase()}.svg`} alt="Category Icon" className="w-5 h-5" width={20} height={20} />
//               ))}
//             </div>
//           </div>
//           <p className="text-gray-700 text-base line-clamp-5">{description}</p>
//         </div>
//       </div>
//     </Link>
//   );
// };

// export default PlaceCard;


// "use client";
// import React from "react";
// import Image from "next/image";
// import Link from "next/link";

// type PlaceCardProps = {
//   imageUrl: string;
//   name: string;
//   likes: number; // Updated from votes to likes
//   priceLevel: number; // Changed to number
//   categories: string[];
//   description: string;
// };

// // Function to render price level as dollar icons
// const renderPriceLevel = (level: number) => {
//   const filledIcon = "/icons/mdi_dollar.svg"; // Filled dollar icon
//   const greyIcon = "/icons/mdi_dollar_grey.svg"; // Greyed-out dollar icon
//   const icons = [];

//   // Add filled dollar icons based on the price level
//   for (let i = 0; i < level; i++) {
//     icons.push(
//       <Image key={`filled-${i}`} src={filledIcon} alt="Price Level" width={20} height={20} />
//     );
//   }

//   // Add remaining grey icons to make up to 3 total icons
//   for (let i = level; i < 3; i++) {
//     icons.push(
//       <Image key={`grey-${i}`} src={greyIcon} alt="Price Level" width={20} height={20} />
//     );
//   }

//   return <div className="flex items-center">{icons}</div>;
// };

// const PlaceCard: React.FC<PlaceCardProps> = ({
//   imageUrl,
//   name,
//   likes,
//   priceLevel,
//   categories,
//   description,
// }) => {
//   return (
//     <Link href={`/explore/entertainment/${name.toLowerCase()}`}> {/* Using name as dynamic path */}
//       <div className="max-w-xs rounded-2xl overflow-hidden shadow-lg my-4 mx-6 h-96">
//         <Image className="w-full h-48 object-cover" src={imageUrl} alt={name} width={400} height={300} />
//         <div className="px-6 py-4">
//           <div className="font-bold text-xl mb-2">{name}</div>
//           <div className="flex items-center justify-between text-gray-700 text-sm mb-2">
//             <div>{likes} Likes</div> {/* Updated from UpVote to Likes */}
//             {/* Render price level icons */}
//             {renderPriceLevel(priceLevel)}
//             <div className="flex space-x-2">
//               {/* Rendering category icons based on category name */}
//               {categories.map((category, index) => (
//                 <Image
//                   key={index}
//                   src={`/icons/${category.toLowerCase()}.svg`}  // Assuming SVG file name matches category name
//                   alt={`${category} Icon`}
//                   width={20}
//                   height={20}
//                   className="w-5 h-5"
//                 />
//               ))}
//             </div>
//           </div>
//           <p className="text-gray-700 text-base line-clamp-5">{description}</p>
//         </div>
//       </div>
//     </Link>
//   );
// };

// export default PlaceCard;


"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { api } from "~/trpc/react";
type PlaceCardProps = {
  imageUrl: string;
  name: string;
  likes: number; // Mengubah dari votes menjadi likes
  priceLevel: number;
  category : string;
  placeId:string;
  description: string;
};
type Category = { id: string; name: string }; // Definisikan tipe untuk kategori
// Function to render price level as dollar icons
const renderPriceLevel = (level: number) => {
  const filledIcon = "/icons/mdi_dollar.svg"; // Filled dollar icon
  const greyIcon = "/icons/mdi_dollar_grey.svg"; // Greyed-out dollar icon
  const icons = [];

  // Add filled dollar icons based on the price level
  for (let i = 0; i < level; i++) {
    icons.push(
      <Image key={`filled-${i}`} src={filledIcon} alt="Price Level" width={20} height={20} />
    );
  }

  // Add remaining grey icons to make up to 3 total icons
  for (let i = level; i < 3; i++) {
    icons.push(
      <Image key={`grey-${i}`} src={greyIcon} alt="Price Level" width={20} height={20} />
    );
  }

  return <div className="flex items-center">{icons}</div>;
};

const PlaceCard: React.FC<PlaceCardProps> = ({
  placeId,
  imageUrl,
  name,
  likes,
  priceLevel,
  category,
  description,
}) => {
  const { data: categories, isLoading } = api.places.getCategoriesByPlaceId.useQuery({ placeId });


  return (
    <Link href={`/explore/${category}/${placeId}`}>
      <div className="max-w-xs rounded-2xl overflow-hidden shadow-lg my-4 mx-6 h-96">
        <Image className="w-full h-48 object-cover" src={imageUrl? imageUrl:'/default-image.svg'} alt={name} width={400} height={300} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{name}</div>
          <div className="flex items-center justify-between text-gray-700 text-sm mb-2">
            <div>{likes} Upvotes</div>
            {/* Render price level icons */}
            {renderPriceLevel(priceLevel)}

            <div className="flex space-x-2 mt-2">
              {isLoading ? (
                <span>Loading...</span>
              ) : (
                categories?.map((category : Category) => (
                  <Image
                    key={category.id}
                    src={`/icons/${category.name.toLowerCase()}.png`}
                    alt={`${category.name} Icon`}
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                ))
              )}
            </div>

          </div>
          <p className="text-gray-700 text-base line-clamp-4">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default PlaceCard;
