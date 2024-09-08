"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    "/carousel/place1.svg",
    "/carousel/place2.jpg",
    "/carousel/place3.svg",
  ];

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full h-[450px] md:h-[650px] flex justify-center items-center">
      {/* Carousel images */}
      <div className="relative w-full h-full overflow-hidden">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute transition-transform duration-500 ease-in-out ${
              index === activeIndex ? "translate-x-0" : "translate-x-full"
            } w-full h-full`}
          >
            <Image
              src={src}
              alt={`Slide ${index}`}
              fill
              style={{ objectFit: "cover" }} // Gantikan objectFit dengan style
              className="rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* Controls */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 bg-white/30 rounded-full"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={handleNext}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 bg-white/30 rounded-full"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
}
