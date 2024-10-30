import React from 'react'
import { Button } from "@/components/ui/button"
import ProductCard from '../product/ProductCard';

const OurProduct = () => {
  return (
    <div className="grid gap-10">
      <div className="flex w-full justify-between items-center max-h-[56px]">
        <div className="flex justify-center items-center gap-2">
          <span className="h-8  w-4 bg-bgsecondary rounded"></span>
          <p className={`font-poppins text-sm sm:text-base md:text-lg text-bgsecondary font-semibold`}>Our Products</p>
        </div>
       
      </div>
      {/* {children} */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8 lg:justify-between">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <div className="flex justify-center items-center w-full">
      <Button className="w-[200px] py-6 md:w-[300px] bg-bgsecondary hover:bg-hover">View ALL</Button>
      </div>
    </div>
  );
}

export default OurProduct 
