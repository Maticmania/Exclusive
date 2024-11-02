import Offers from "./components/About/Offers";
import CaroselHome from "./components/Home/CaroselHome";
import Category from "./components/Home/Category";
import Featured from "./components/Home/Featured";
import FlashSales from "./components/Home/FlashSales";
import OurProduct from "./components/Home/OurProduct";
import ProductShowcase from "./components/Home/ProductShowcase";
import TopSales from "./components/Home/TopSales";

const page = () => {
  return (
    <div className="min-h-screen px-[5%] gap-16  md:gap-20 grid">
      <CaroselHome/>
      <FlashSales/>
      <Category />
      <TopSales/>
      <ProductShowcase />
      <OurProduct/>
      <Featured />
      <Offers/>
    </div>
  );
};

export default page;
