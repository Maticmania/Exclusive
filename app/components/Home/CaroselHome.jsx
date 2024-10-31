"use client"
import React, { useEffect, useState, useRef } from 'react';
import { useSwipeable } from 'react-swipeable';
import Image from "next/image";
import iPhoneImage from '@/assets/images/iphone14.svg'; // Update the path accordingly
import { GrApple } from "react-icons/gr";

const slides = [
  {
    title: 'iPhone 14 Series',
    subtitle: 'Up to 10% off Voucher',
    image: iPhoneImage,
    buttonText: 'Shop Now',
  },
  // You can add more slides here as needed
];

const CaroselHome = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoplayRef = useRef(null);

  const handleSwipeLeft = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handleSwipeRight = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleSwipeLeft,
    onSwipedRight: handleSwipeRight,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  useEffect(() => {
    autoplayRef.current = setInterval(() => {
      handleSwipeLeft();
    }, 3000);

    return () => clearInterval(autoplayRef.current);
  }, []);

  return (
    <div className="relative w-full overflow-hidden" {...handlers}>
      <div
        className="flex transition-transform duration-500"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          width: `${slides.length * 100}%`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="min-w-full flex items-center justify-center bg-black text-white p-8"
          >
            <div className="flex flex-col md:flex-row items-center justify-between space-x-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <span className="text-4xl font-semibold"><GrApple/></span>
                  <p className="text-lg">{slide.title}</p>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">{slide.subtitle}</h2>
                <button className="flex items-center text-white text-lg mt-4">
                  {slide.buttonText} →
                </button>
              </div>
              <div className="mt-6 md:mt-0">
                <Image src={slide.image} alt={slide.title} width={300} height={400} className="object-contain" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full ${
              idx === currentIndex ? 'bg-red-500' : 'bg-gray-400'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default CaroselHome;
