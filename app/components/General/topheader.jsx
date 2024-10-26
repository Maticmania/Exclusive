const Topheader = () => {
  return (
    <div className="w-full bg-black h-[48px]   text-white grid grid-flow-col place-content-center place-items-center px-10 gap-10">
        <marquee className="">
            <p className="flex gap-2 font-poppins text-sm ">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <span className="underline font-semibold">ShopNow</span></p>
        </marquee>
        <div className="flex justify-center items-center w-full">
        <select className="bg-black">
            <option className="text-white">English</option>
            <option className="text-white">Spanish</option>
        </select>
        </div>
    </div>
  )
}

export default Topheader
