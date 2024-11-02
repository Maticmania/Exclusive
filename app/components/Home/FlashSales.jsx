"use client";
import React, { useState, useEffect } from "react";
import ProductGrid from "../product/ProductGrid";

const FlashSales = () => {
  const [timeLeft, setTimeLeft] = useState(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Ensure the component is client-side only after mount
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function calculateTimeLeft() {
    const now = new Date();
    const startOfCycle = new Date(
      now.getTime() - (now.getTime() % (36 * 60 * 60 * 1000))
    );
    const endOfCycle = new Date(startOfCycle.getTime() + 72 * 60 * 60 * 1000);
    const difference = endOfCycle - now;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  if (!isMounted || !timeLeft) {
    // Render a fallback or an empty div until the component mounts
    return <p className="w-full text-xl min-h-[100px] place-content-center text-center">
        Loading flase sales
    </p>
  }

  return (
    <ProductGrid
      className="text-bgsecondary font-semibold text-sm sm:text-base"
      leftText="Today's"
    >
      <div className="flex flex-col gap-5 md:flex-row md:gap-10 md:items-center">
        <h1 className='font-inter font-semibold text-2xl sm:text-3xl md:text-4xl'>Flash Sale</h1>
        <div
          className="flex items-start justify-center space-x-4"
          aria-label="Flash sale countdown timer"
        >
          <div className="flex flex-col items-center">
            <span
              className="text-3xl font-bold"
              aria-label={`${timeLeft.days} days`}
            >
              {String(timeLeft.days).padStart(2, "0")}
            </span>
            <span className="text-xs">Days</span>
          </div>
          <span className="text-3xl font-bold text-bgsecondary" aria-hidden="true">
            :
          </span>
          <div className="flex flex-col items-center">
            <span
              className="text-3xl font-bold"
              aria-label={`${timeLeft.hours} hours`}
            >
              {String(timeLeft.hours).padStart(2, "0")}
            </span>
            <span className="text-xs">Hours</span>
          </div>
          <span className="text-3xl font-bold text-bgsecondary" aria-hidden="true">
            :
          </span>
          <div className="flex flex-col items-center">
            <span
              className="text-3xl font-bold"
              aria-label={`${timeLeft.minutes} minutes`}
            >
              {String(timeLeft.minutes).padStart(2, "0")}
            </span>
            <span className="text-xs">Minutes</span>
          </div>
          <span className="text-3xl font-bold text-bgsecondary" aria-hidden="true">
            :
          </span>
          <div className="flex flex-col items-center">
            <span
              className="text-3xl font-bold"
              aria-label={`${timeLeft.seconds} seconds`}
            >
              {String(timeLeft.seconds).padStart(2, "0")}
            </span>
            <span className="text-xs">Seconds</span>
          </div>
        </div>
      </div>
    </ProductGrid>
  );
};

export default FlashSales;
