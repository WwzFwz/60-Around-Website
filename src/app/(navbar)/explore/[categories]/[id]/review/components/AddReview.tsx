import React, { useState } from 'react';
import { api } from '~/trpc/react'; // Assuming you're using tRPC in your project
// import { useRouter } from 'next/navigation';
import Image from 'next/image';

type AddReviewProps = {
  placeId: string;
  category: string;
  closeModal: () => void;
};

const AddReview: React.FC<AddReviewProps> = ({ placeId, category, closeModal }) => {
  const [content, setContent] = useState('');
  const [isPositive, setIsPositive] = useState<boolean | null>(null);
  // const router = useRouter();

  // Access the global tRPC context
  const trpcContext = api.useContext();

  const addReviewMutation = api.reviews.addReview.useMutation({
    onSuccess: () => {
      // Invalidate the query for fetching reviews after a new review is added
      trpcContext.reviews.getReviewsByPlaceId.invalidate({ placeId });

      // Close the modal after success
      closeModal();
    },
    onError: (error) => {
      console.error('Failed to add review:', error);
    },
  });

  const handleSubmit = () => {
    if (isPositive === null || !content.trim()) {
      alert('Please provide review content and select Like or Dislike');
      return;
    }

    addReviewMutation.mutate({
      placeId,
      content,
      isPositive,
      isAnonymous: true, // Assuming reviews are anonymous by default
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-2xl w-1/2 relative">
        <button onClick={closeModal} className="absolute top-2 left-2">
          <Image src="/close_icon.svg" alt="Close" width={30} height={30} />
        </button>
        <button onClick={handleSubmit} className="absolute top-2absolute font-bold w-24  top-2 right-2 bg-[#124076] text-white px-4 py-2 rounded-lg">
          Post
        </button>
        {/* Pop-up Header */}
        <h2 className="text-2xl font-bold mb-4 mt-4  text-[#124076]">Your Review</h2>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your review here"
          className="w-full border-2 rounded-lg p-2 h-32 mb-4"
        />
        {/* <div className="flex justify-center space-x-4">
          <button onClick={() => setIsPositive(true)} className="flex items-center bg-[#7F9F80] justify-center w-32 px-6 py-3 rounded-lg">
            <Image src="/like_white.svg" alt="Like" width={30} height={30} />
          </button>
          <button onClick={() => setIsPositive(false)} className="flex items-center bg-[#E95949] justify-center w-32 px-6 py-3 rounded-lg">
            <Image src="/dislike_white.svg" alt="Dislike"  width={30} height={30} />
          </button>
        </div> */}
        <div className="flex justify-center space-x-4">
          {/* Tombol Like */}
          <button
            onClick={() => setIsPositive(true)}
            className={`flex items-center justify-center w-32 px-6 py-3 rounded-lg ${
              isPositive === true ? 'bg-[#7F9F80]' : 'bg-[#7F9F80] opacity-50'
            }`}
          >
            <Image src="/like_white.svg" alt="Like" width={30} height={30} />
          </button>

          {/* Tombol Dislike */}
          <button
            onClick={() => setIsPositive(false)}
            className={`flex items-center justify-center w-32 px-6 py-3 rounded-lg ${
              isPositive === false ? 'bg-[#E95949]' : 'bg-[#E95949] opacity-50'
            }`}
          >
            <Image src="/dislike_white.svg" alt="Dislike" width={30} height={30} />
          </button>
        </div>

      </div>
    </div>
  );
};

export default AddReview;