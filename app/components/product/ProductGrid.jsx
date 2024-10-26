import React from "react";
import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button"

const ProductGrid = ({ leftText = "Just For You", rightText }) => {
  return (
    <div className="grid gap-10">
      <div className="flex w-full justify-between items-center max-h-[56px]">
        <div className="flex justify-center items-center gap-2">
          <span className="h-8  w-4 bg-bgsecondary rounded"></span>
          <p className="font-poppins text-base md:text-lg">{leftText}</p>
        </div>
        {rightText && (
          <Button className="bg-[#ffffff] hover:bg-white text-black border-black/50 rounded border md:w-[10%] ">
            See All
          </Button>
        )}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8 lg:justify-between">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default ProductGrid;
