import React from 'react'
import { Star, Heart, Truck, RotateCcw } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import ProductGrid from '@/app/components/product/ProductGrid'

export default function Component({ id = 'HV G-92' }) {
  return (
    <div className="w-full px-[5%] grid gap-20 min-h-[500px] py-10 font-inter">
      <p className="font-poppins text-base md:text-lg text-gray-500">Account / Gaming / IPS LCD Gaming Monitor</p>
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-4 md:flex lg:flex-col md:space-y-0  xl:space-y-0 xl:flex xl:flex-row-reverse flex-row-reverse gap-4">
          <div className="aspect-square md:w-[85%] lg:w-full bg-gray-100 rounded-lg overflow-hidden">
            <img
              src="/placeholder.svg?height=400&width=400"
              alt="Havic HV G-92 Gamepad"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid md:grid-cols-1 lg:grid-cols-4 grid-cols-4 xl:grid-cols-1 gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src="/placeholder.svg?height=100&width=100"
                  alt={`Thumbnail ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <h1 className="text-3xl font-bold font-inter">Havic HV G-92 Gamepad</h1>
          <div className="flex items-center space-x-2 font-poppins">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-gray-500">(150 Reviews) </span>
            <span>|</span>
            <span className='text-button1 '> In stock</span>
          </div>
          <p className="text-2xl font-bold font-poppins">$192.00</p>
          <p className="text-gray-600 font-poppins text-sm">PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</p>
          <div className="space-y-4">
            <div className='flex items-center gap-2'>
              <p className="font-semibold font-poppins">Colours:</p>
              <div className="flex space-x-2">
                {['bg-white', 'bg-red-500', 'bg-blue-500'].map((color, i) => (
                  <button key={i} className={`w-5 h-5 rounded-full border ${color}`} />
                ))}
              </div>
            </div>
            <div className='flex items-center gap-2 font-poppins'>
              <p className="font-semibold">Size:</p>
              <div className="flex space-x-2">
                {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                  <button key={size} className="px-3 py-1 border rounded-md hover:bg-bgsecondary hover:text-white">{size}</button>
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center border rounded-md">
              <button className="px-3 py-1 text-xl">-</button>
              <span className="px-3 py-1 text-xl border">1</span>
              <button className="px-3 py-1 text-xl">+</button>
            </div>
            <Button className="flex-1 bg-bgsecondary hover:bg-hover text-white">Buy Now</Button>
            <Button variant="outline" size="icon">
              <Heart className="h-4 w-4" />
            </Button>
          </div>
          <div className="mt-4 rounded border">
            <div className="flex items-center gap-3 text-sm border p-4">
              <Truck className="w-5 h-5" />
              <div>
              <p>Free Delivery</p>
              <p>Enter your postal code for Delivery Availability</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-sm border p-4">
              <RotateCcw className="w-5 h-5" />
              <div>
              <p>Return Delivery</p>
              <p>Free 30 Days Delivery Returns. <Link href="/" className='underline hover:font-medium'>Details</Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <ProductGrid leftText='Related Items' rightText="See All" />
      </div>
      <div>
        <ProductGrid leftText='Recent views'  />
      </div>
    </div>
  )
}