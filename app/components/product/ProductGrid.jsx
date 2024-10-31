import React from "react";
import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button"

const ProductGrid = ({ leftText = "Just For You", rightText, children, className="text-black", viewAll }) => {
  return (
    <div className="grid gap-10">
      <div className="flex w-full justify-between items-center max-h-[56px]">
        <div className="flex justify-center items-center gap-2">
          <span className="h-8  w-4 bg-bgsecondary rounded"></span>
          <p className={`${className} font-poppins text-sm sm:text-base md:text-lg`}>{leftText}</p>
        </div>
        {rightText && (
          <Button className="bg-[#ffffff] hover:bg-white text-black border-black/50 rounded border md:w-[10%] ">
            See All
          </Button>
        )}
      </div>
      {children}
      {/* <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8 lg:justify-between"> */}
      <div className="flex gap-5 overflow-auto scrollbar-hide">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      {viewAll &&   
      <div className="flex justify-center items-center w-full">
      <Button className="w-[200px] py-6 md:w-[300px] bg-bgsecondary hover:bg-hover">View ALL</Button>
      </div>
      }
    </div>
  );
};

export default ProductGrid;
