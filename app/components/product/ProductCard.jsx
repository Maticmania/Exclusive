"use client"
import React from "react"
import Image from "next/image"
import monitor from  '@/assets/images/monitor.svg';
import { Trash2, Heart, Star } from 'lucide-react'
import { usePathname } from 'next/navigation'

const ProductCard = () => {
    const pathname = usePathname()
  return (
    <div className="w-full max-w-[auto] h-[322px] flex flex-col justify-between gap-2 mx-auto">
      <div className="w-full bg-[#F5F5F5] h-[75%] flex flex-col justify-center items-center rounded group cursor-pointer transition-all duration-300 ease-in-out relative">
        <Image
          src={monitor}
          alt="Monitor"
          width={200}
          height={200}
          className="h-[85%] w-[85%] object-contain"
        />
        
        <button className={`w-full bg-black text-white h-[15%] rounded-bl rounded-br font-poppins font-medium group-hover:block ${pathname === '/wishlist' ? 'block' : "hidden" } transition-all duration-300 ease-in-out`}>
          Add to cart
        </button>
        <span className="p-1 px-1.5 font-poppins text-[12px] rounded text-white bg-bgsecondary absolute top-2.5 left-2.5">-40%</span>
        <div className="flex flex-col gap-2 absolute right-2 top-2">
            <span className={`bg-[#ffffff] hover:bg-white p-1 px-1.5 rounded-full ${pathname === '/wishlist' ? "hidden" : "block" }`}><Heart size={16} strokeWidth={1.75} /></span>
            <span className={`bg-[#ffffff] hover:bg-white p-1 px-1.5 rounded-full ${pathname === '/wishlist' ? "block" : "hidden" }`}><Trash2 size={16} strokeWidth={2.5} /></span>
        </div>
      </div>
      <div>
        <h2 className="text-base sm:text-base font-poppins font-medium text-black">
          IPS LCD Gaming Monitor
        </h2>
        <div className="flex gap-4">
          <span className="text-base font-medium font-poppins text-bgsecondary">
            $960
          </span>
          <s className="text-base font-medium font-poppins text-black/50 stroke-current">
            $1160
          </s>
        </div>
        <span className="text-base sm:text-base font-poppins font-medium text-black flex items-center">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
          ))}
          <span className="ml-1">(90)</span>
        </span>
      </div>
    </div>
  )
}

export default ProductCard