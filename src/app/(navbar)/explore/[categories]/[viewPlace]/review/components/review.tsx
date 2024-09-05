// 'use client'; // This ensures the component is treated as a client component

// import React, { useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import AddReview from './AddReview';

// // Mockup data
// const reviews = [
//   {
//     id: '1',
//     username: 'Andkdd1990',
//     content: 'Keren sekali tempatnya, harganya ramah di kantong lagi. Fix bakal balik lagi ke sini!xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
//     imageUrl: '/places/Place2-1.svg', // This review has a photo
//     isPositive: true,
//   },
//   {
//     id: '2',
//     username: 'Anonymous',
//     content: 'Tempatnya sedikit sekali, saya ngantri 3 jam lebih :(',
//     imageUrl: '', // No photo for this review
//     isPositive: false,
//   },
// ];

// const ReviewPage: React.FC = () => {
//   const [isAddReviewVisible, setIsAddReviewVisible] = useState(false);
//   const [isImageModalVisible, setIsImageModalVisible] = useState(false);
//   const [selectedImage, setSelectedImage] = useState<string | null>(null);

//   // Function to open the add review pop-up
//   const openAddReview = () => {
//     setIsAddReviewVisible(true);
//   };

//   // Function to close the add review pop-up
//   const closeAddReview = () => {
//     setIsAddReviewVisible(false);
//   };

//   // Function to open the image modal
//   const openImageModal = (imageUrl: string) => {
//     setSelectedImage(imageUrl);
//     setIsImageModalVisible(true);
//   };

//   // Function to close the image modal
//   const closeImageModal = () => {
//     setSelectedImage(null);
//     setIsImageModalVisible(false);
//   };

//   return (
//     <div className="p-6 relative">
//       {/* Top Section: Back Arrow and Review Title */}
//       <div className="flex items-center justify-between">
//         {/* Back Arrow */}
//         <Link href="/explore/categories/id">
//           <Image src="/back_arrow.svg" alt="Back" width={50} height={50} />
//         </Link>

//         {/* Page Title */}
//         <h1 className="text-4xl font-bold text-[#124076]">Review</h1>
//       </div>

//       {/* Blue Divider Line */}
//       <hr className="border-t-2 border-[#124076] mt-4 mb-6" />

//       <div className="flex flex-col-reverse lg:flex-row justify-between">
//         {/* Overall Section (Now Above Reviews on Small Screens) */}
//         <div className="w-full lg:w-1/5 lg:ml-2 lg:mr-20 mb-6 lg:mb-0">
//           <h2 className="text-xl font-bold text-[#124076] mb-4">Overall</h2>

//           {/* Parent div wrapping both like and dislike divs */}
//           <div className="border-2 border-[#124076] rounded-3xl p-4 flex justify-between items-center">
//             {/* Like Div */}
//             <div className="border-2 border-[#596E5A] rounded-3xl p-4 flex items-center mr-4">
//               <span className="text-2xl font-bold text-[#596E5A]">189</span>
//               <Image src="/like.svg" alt="Like" width={30} height={30} className="ml-2" />
//             </div>

//             {/* Dislike Div */}
//             <div className="border-2 border-[#E95949] rounded-3xl p-4 flex items-center">
//               <span className="text-2xl font-bold text-[#E95949]">27</span>
//               <Image src="/dislike.svg" alt="Dislike" width={30} height={30} className="ml-2" />
//             </div>
//           </div>
//         </div>

//         {/* Reviews Section (Left Side) */}
//         <div className="w-full lg:w-4/5 lg:mr-12 space-y-4">
//           {reviews.map((review) => (
//             <div
//               key={review.id}
//               className="border-2 border-[#124076] rounded-3xl p-0"
//             >
//               {/* Top Section: Profile, Name, and Like/Dislike */}
//               <div className="flex justify-between items-center">
//                 {/* Left Side: Profile and Name */}
//                 <div className="flex items-center m-2">
//                   <Image src="/profile.svg" alt="Profile" width={30} height={30} />
//                   <span className="ml-2 text-lg font-bold text-[#124076]">{review.username}</span>
//                 </div>

//                 {/* Right Side: Like/Dislike */}
//                 <Image
//                   src={review.isPositive ? '/like.svg' : '/dislike.svg'}
//                   alt={review.isPositive ? 'Like' : 'Dislike'}
//                   width={30}
//                   height={30}
//                   className='mr-4'
//                 />
//               </div>

//               {/* Horizontal Line */}
//               <hr className="border-t-2 border-[#124076] my-2" />

//               {/* Bottom Section: Text Content and Image */}
//               <div className="flex flex-col lg:flex-row justify-between mt-2 m-4">
//                 {/* Left Side: Text Content */}
//                 <p className="flex-grow mr-4">{review.content}</p>

//                 {/* Right Side: Image if Available */}
//                 {review.imageUrl ? (
//                   <Image
//                     src={review.imageUrl}
//                     alt="Place"
//                     width={80}
//                     height={80}
//                     className="rounded-lg cursor-pointer mt-4 lg:mt-0"
//                     onClick={() => openImageModal(review.imageUrl)} // Clicking the image opens the modal
//                   />
//                 ) : null}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Floating Add Review Button */}
//       <button
//         className="fixed bottom-6 right-6 bg-[#F9E897] p-4 rounded-full shadow-lg"
//         onClick={openAddReview}
//       >
//         <Image src="/add_icon.svg" alt="Add Review" width={40} height={40} />
//       </button>

//       {/* Add Review Pop-up */}
//       {isAddReviewVisible && <AddReview closeModal={closeAddReview} />}

//       {/* Image Modal Pop-up */}
//       {isImageModalVisible && selectedImage && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//           <div className="relative">
//             {/* Large Image */}
//             <Image
//               src={selectedImage}
//               alt="Large Place Image"
//               width={600}
//               height={600}
//               className="rounded-lg"
//             />

//             {/* Close Button */}
//             <button
//               onClick={closeImageModal}
//               className="absolute top-2 right-2 bg-white rounded-full p-2"
//             >
//               <Image src="/close_icon.svg" alt="Close" width={20} height={20} />
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ReviewPage;


'use client'; // This ensures the component is treated as a client component

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AddReview from './AddReview';

// Mockup data
const reviews = [
  {
    id: '1',
    username: 'Andkdd1990',
    content: 'Keren sekali tempatnya, harganya ramah di kantong lagi. Fix bakal balik lagi ke sini!xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    imageUrl: '/places/Place2-1.svg', // This review has a photo
    isPositive: true,
  },
  {
    id: '2',
    username: 'Anonymous',
    content: 'Tempatnya sedikit sekali, saya ngantri 3 jam lebih :(',
    imageUrl: '', // No photo for this review
    isPositive: false,
  },
];

const ReviewPage: React.FC = () => {
  const [isAddReviewVisible, setIsAddReviewVisible] = useState(false);
  const [isImageModalVisible, setIsImageModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Function to open the add review pop-up
  const openAddReview = () => {
    setIsAddReviewVisible(true);
  };

  // Function to close the add review pop-up
  const closeAddReview = () => {
    setIsAddReviewVisible(false);
  };

  // Function to open the image modal
  const openImageModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setIsImageModalVisible(true);
  };

  // Function to close the image modal
  const closeImageModal = () => {
    setSelectedImage(null);
    setIsImageModalVisible(false);
  };

  return (
    <div className="p-6 relative">
      {/* Top Section: Back Arrow and Review Title */}
      <div className="flex items-center justify-between">
        {/* Back Arrow */}
        <Link href="/explore/categories/id">
          <Image src="/back_arrow.svg" alt="Back" width={50} height={50} />
        </Link>

        {/* Page Title */}
        <h1 className="text-4xl font-bold text-[#124076]">Review</h1>
      </div>

      {/* Blue Divider Line */}
      <hr className="border-t-2 border-[#124076] mt-4 mb-6" />

      <div className="flex flex-col-reverse lg:flex-row justify-between">
        {/* Reviews Section (Left Side) */}
        <div className="w-full lg:w-4/5 lg:mr-12 space-y-4">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="border-2 border-[#124076] rounded-3xl p-0"
            >
              {/* Top Section: Profile, Name, and Like/Dislike */}
              <div className="flex justify-between items-center">
                {/* Left Side: Profile and Name */}
                <div className="flex items-center m-2">
                  <Image src="/profile.svg" alt="Profile" width={30} height={30} />
                  <span className="ml-2 text-lg font-bold text-[#124076]">{review.username}</span>
                </div>

                {/* Right Side: Like/Dislike */}
                <Image
                  src={review.isPositive ? '/like.svg' : '/dislike.svg'}
                  alt={review.isPositive ? 'Like' : 'Dislike'}
                  width={30}
                  height={30}
                  className='mr-4'
                />
              </div>

              {/* Horizontal Line */}
              <hr className="border-t-2 border-[#124076] my-2" />

              {/* Bottom Section: Text Content and Image */}
              <div className="flex flex-col lg:flex-row justify-between mt-2 m-4">
                {/* Left Side: Text Content */}
                <p className="flex-grow mr-4">{review.content}</p>

                {/* Right Side: Image if Available */}
                {review.imageUrl ? (
                  <Image
                    src={review.imageUrl}
                    alt="Place"
                    width={80}
                    height={80}
                    className="rounded-lg cursor-pointer mt-4 lg:mt-0"
                    onClick={() => openImageModal(review.imageUrl)} // Clicking the image opens the modal
                  />
                ) : null}
              </div>
            </div>
          ))}
        </div>

        {/* Overall Section (Right Side) */}
        <div className="w-full lg:w-1/5 lg:ml-auto lg:mr-0 mb-6 lg:mb-0">  {/* Changed margin and width for positioning */}
          <h2 className="text-xl font-bold text-[#124076] mb-4">Overall</h2>

          {/* Parent div wrapping both like and dislike divs */}
          <div className="border-2 border-[#124076] rounded-3xl p-4 flex justify-between items-center">
            {/* Like Div */}
            <div className="border-2 border-[#596E5A] rounded-3xl p-4 flex items-center mr-4">
              <span className="text-2xl font-bold text-[#596E5A]">189</span>
              <Image src="/like.svg" alt="Like" width={30} height={30} className="ml-2" />
            </div>

            {/* Dislike Div */}
            <div className="border-2 border-[#E95949] rounded-3xl p-4 flex items-center">
              <span className="text-2xl font-bold text-[#E95949]">27</span>
              <Image src="/dislike.svg" alt="Dislike" width={30} height={30} className="ml-2" />
            </div>
          </div>
        </div>
      </div>

      {/* Floating Add Review Button */}
      <button
        className="fixed bottom-6 right-6 bg-[#F9E897] p-4 rounded-full shadow-lg"
        onClick={openAddReview}
      >
        <Image src="/add_icon.svg" alt="Add Review" width={40} height={40} />
      </button>

      {/* Add Review Pop-up */}
      {isAddReviewVisible && <AddReview closeModal={closeAddReview} />}

      {/* Image Modal Pop-up */}
      {isImageModalVisible && selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="relative">
            {/* Large Image */}
            <Image
              src={selectedImage}
              alt="Large Place Image"
              width={600}
              height={600}
              className="rounded-lg"
            />

            {/* Close Button */}
            <button
              onClick={closeImageModal}
              className="absolute top-2 right-2 bg-white rounded-full p-2"
            >
              <Image src="/close_icon.svg" alt="Close" width={20} height={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReviewPage;
