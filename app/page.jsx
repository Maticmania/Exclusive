import Offers from "./components/About/Offers";
import Category from "./components/Home/Category";
import HomeComponent from "./components/Home/Ecommerce-layout";
import Featured from "./components/Home/Featured";
import FlashSales from "./components/Home/FlashSales";
import OurProduct from "./components/Home/OurProduct";
import ProductShowcase from "./components/Home/ProductShowcase";
import TopSales from "./components/Home/TopSales";

const page = () => {
  return (
    <div className="min-h-screen px-[5%] gap-10 grid">
      {/* <HomeComponent /> */}
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
