// // components/AddReview.tsx
// import React from 'react';
// import Image from 'next/image';

// type AddReviewProps = {
//   closeModal: () => void; // Function to close the modal
// };

// const AddReview: React.FC<AddReviewProps> = ({ closeModal }) => {
//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//       <div className="bg-white p-6 rounded-lg w-96 relative">
//         {/* Close Button */}
//         <button onClick={closeModal} className="absolute top-2 right-2">
//           <Image src="/close_icon.svg" alt="Close" width={20} height={20} />
//         </button>
//         {/* Pop-up Header */}
//         <h2 className="text-2xl font-bold mb-4 text-[#124076]">Your Review</h2>

//         {/* Text Area for Review */}
//         <textarea
//           className="w-full border-2 rounded-lg p-2 h-32 mb-4"
//           placeholder="Tulis ulasanmu di sini..."
//         />

//         {/* Image Upload Section */}
//         <div className="border-2 rounded-lg py-2 flex justify-center items-center mb-4">
//           <Image src="/upload_image.svg" alt="Upload" width={30} height={30} />
//           <span className="ml-2 text-[#124076]">Upload Foto</span>
//         </div>

//         {/* Action Buttons */}
//         <div className="flex justify-between">
//           <button className="flex items-center bg-red-100 px-6 py-3 rounded-lg">
//             <Image src="/dislike.svg" alt="Dislike" width={30} height={30} />
//           </button>
//           <button className="flex items-center bg-green-100 px-6 py-3 rounded-lg">
//             <Image src="/like.svg" alt="Like" width={30} height={30} />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddReview;

import React from 'react';
import Image from 'next/image';

type AddReviewProps = {
  closeModal: () => void; // Function to close the modal
};

const AddReview: React.FC<AddReviewProps> = ({ closeModal }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-2xl w-1/2   relative"> {/* Increased width and rounded corners */}
        {/* Close Button */}
        <button onClick={closeModal} className="absolute top-2 left-2">
          <Image src="/close_icon.svg" alt="Close" width={30} height={30} />
        </button>
        {/* Post Button */}
        <button className="absolute font-bold w-24  top-2 right-2 bg-[#124076] text-white px-4 py-2 rounded-lg">
          Post
        </button>

        {/* Pop-up Header */}
        <h2 className="text-2xl font-bold mb-4 mt-4  text-[#124076]">Your Review</h2>

        {/* Text Area for Review */}
        <textarea
          className="w-full border-2 rounded-lg p-2 h-32 mb-4"
          placeholder="Tulis ulasanmu di sini..."
        />

        {/* Image Upload Section */}
        <button className="border-2 rounded-lg py-4 w-full flex flex-col justify-center items-center  mb-4"> {/* The whole area acts as a button */}
          <Image src="/upload_image.svg" alt="Upload" width={40} height={40} />
          <span className="mt-2 text-[#124076]">Upload Foto</span> {/* Text is placed below the image */}
        </button>

        {/* Action Buttons */}
        <div className="flex justify-center space-x-4">
          <button className="flex items-center bg-[#7F9F80] justify-center w-32 px-6 py-3 rounded-lg">
            <Image src="/like_white.svg" alt="Like" width={30} height={30} />
          </button>
          <button className="flex items-center bg-[#E95949] justify-center w-32 px-6 py-3 rounded-lg">
            <Image src="/dislike_white.svg" alt="Dislike"  width={30} height={30} />
          </button>

        </div>
      </div>
    </div>
  );
};

export default AddReview;
