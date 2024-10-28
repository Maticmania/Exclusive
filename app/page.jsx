import Offers from "./components/About/Offers";
import HomeComponent from "./components/Home/Ecommerce-layout";
import Featured from "./components/Home/Featured";

const page = () => {
  return (
    <div className="min-h-screen px-[5%]">
      {/* <HomeComponent /> */}
      <p className="font-inter">font inter</p>
      <p className="font-poppins">font poppins</p>
      <p className="font-k2d">font k2d</p>
      <Featured />
      <Offers/>
    </div>
  );
};

export default page;
