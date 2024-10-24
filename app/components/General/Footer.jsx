import React from 'react'
import Image from "next/legacy/image"
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import qrcode from '@/assets/images/qrcode.svg'
import googleplay from '@/assets/images/googleplay.svg'
import appleStore from '@/assets/images/AppStore.svg'
export default function Footer() {
  return (
    (<footer className="bg-black text-white py-12 px-[5%] ">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        <div className="col-span-1 lg:col-span-1">
          <h2 className="text-2xl font-bold mb-4 font-inter">Exclusive</h2>
          <h3 className="text-lg mb-2 font-poppins">Subscribe</h3>
          <p className="mb-4 font-poppins">Get 10% off your first order</p>
          <div className="relative">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full py-2 px-4 bg-transparent border border-white rounded-md font-poppins"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>

        <div className="col-span-1 lg:col-span-1 font-poppins">
          <h2 className="text-2xl font-bold mb-4">Support</h2>
          <p className="mb-2">111 Bijoy sarani, Dhaka,</p>
          <p className="mb-2">DH 1515, Bangladesh.</p>
          <p className="mb-2">exclusive@gmail.com</p>
          <p className="mb-2">+88015-88888-9999</p>
        </div>

        <div className="col-span-1 lg:col-span-1 font-poppins">
          <h2 className="text-2xl font-bold mb-4">Account</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">My Account</a></li>
            <li><a href="#" className="hover:underline">Login / Register</a></li>
            <li><a href="#" className="hover:underline">Cart</a></li>
            <li><a href="#" className="hover:underline">Wishlist</a></li>
            <li><a href="#" className="hover:underline">Shop</a></li>
          </ul>
        </div>

        <div className="col-span-1 lg:col-span-1 font-poppins">
          <h2 className="text-2xl font-bold mb-4">Quick Link</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms Of Use</a></li>
            <li><a href="#" className="hover:underline">FAQ</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        <div className="col-span-1 lg:col-span-1 font-poppins">
          <h2 className="text-2xl font-bold mb-4">Download App</h2>
          <p className="mb-2 text-[#FAFAFA]">Save $3 with App New User Only</p>
          <div className="flex space-x-4 mb-4">
            <div className="w-24 h-24 relative">
              <Image
                src={qrcode}
                alt="QR Code"
                // fill
                sizes="100vw"
                style={{
                  objectFit: "contain",
                  maxWidth: "100%",
                  height: "auto"
                }} />
            </div>
            <div className="flex flex-col space-y-2">
              <Image
                src={googleplay}
                alt="Google Play"
                width={120}
                height={40}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  maxWidth: "100%",
                  height: "auto"
                }} />
              <Image
                src={appleStore}
                alt="App Store"
                width={120}
                height={40}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  maxWidth: "100%",
                  height: "auto"
                }} />
            </div>
          </div>
          <div className="flex justify-between px-4 lg:px-0">
            <a href="#" className="hover:text-gray-300"><FaFacebookF /></a>
            <a href="#" className="hover:text-gray-300"><FaTwitter /></a>
            <a href="#" className="hover:text-gray-300"><FaInstagram /></a>
            <a href="#" className="hover:text-gray-300"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>
      <div className="mt-12 text-center">
        <p>&copy; Copyright Rimel 2022. All right reserved</p>
      </div>
    </footer>)
  );
}