import { Button } from "@/components/ui/button";
import ProductCard from "../components/product/ProductCard";
import ProductGrid from "../components/product/ProductGrid";

const Page = () => {
  return (
    <div className="w-full px-[5%] grid gap-20 min-h-[500px] py-10">
      <div className="grid gap-10">
        <div className="flex w-full justify-between items-center max-h-[56px]">
          <p className="font-poppins text-base md:text-lg">Wishlist (4)</p>
          <Button className="bg-[#ffffff] hover:bg-white text-black border-black/50 rounded border md:w-1/5 ">
            Move All To Bag
          </Button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8 lg:justify-between">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
      <ProductGrid rightText="Sell All"/>
    </div>
  );
};

export default Page;
