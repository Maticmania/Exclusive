"use client";
import { useState } from "react";
import Image from "next/legacy/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { usePathname } from 'next/navigation'
import cartIcon from "@/assets/icons/cart.svg";
import wishlist from "@/assets/icons/wishlist.svg";
import searchicon from "@/assets/icons/search.svg";
import Link from "next/link";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname()

  // Function to toggle the modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Helper function to determine if the link is active
  const isActiveLink = (path) => console.log(path);
  
  // Close modal when clicking outside
  const closeModalOnOutsideClick = (e) => {
    if (e.target.id === "backdrop") {
      setIsModalOpen(false);
    }
  };
  

  return (
    (<div className="h-[80px] border-b-[0.005rem] border-black/30 w-full px-[5%] flex justify-between items-center">
      <Link href="/">
        <h1 className="font-bold font-inter text-2xl">Exclusive</h1>
      </Link>
      <ul className="hidden gap-[24px] md:flex">
        <Link href="/" className={`text-base font-poppins text-center ${pathname === '/' ? 'text-textsecondary1 font-semibold' : ''}`}>
          Home
        </Link>
        <Link href="/contact" className={`text-base font-poppins text-center ${pathname === '/contact' ? 'text-textsecondary1 font-semibold' : ''}`}>
          Contact
        </Link>
        <Link href="/about" className={`text-base font-poppins text-center ${pathname === '/about' ? 'text-textsecondary1 font-semibold' : ''}`}>
          About
        </Link>
        <Link href="/signup" className={`text-base font-poppins text-center ${pathname === '/signup' ? 'text-textsecondary1 font-semibold' : ''}`}>
          Sign Up
        </Link>
      </ul>
      <div className="flex gap-2 md:gap-3 lg:gap-5 items-center">
        <label htmlFor="" className="relative hidden lg:inline-flex">
          <input
            type="text"
            name="search"
            className="min-w-[243px] outline-none max-w-[243px] h-[38px] rounded px-3 text-[12px] border-0 bg-[#F5F5F5] text-black font-poppins"
            placeholder="What are you looking for?"
          />
          <span className="absolute font-bold top-2 right-4">
            <Image
              src={searchicon}
              alt="carticon"
              style={{
                maxWidth: "100%",
                height: "auto"
              }} />
          </span>
        </label>
        <Link href="/wishlist">
          <Image
            src={wishlist}
            className="hidden md:inline-flex"
            alt="wishlist"
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
        </Link>
        <Image
          src={searchicon}
          className="inline-flex lg:hidden"
          alt="carticon"
          style={{
            maxWidth: "100%",
            height: "auto"
          }} />
        <Link href="/cart">
          <Image
            src={cartIcon}
            alt="carticon"
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
        </Link>
        <RxHamburgerMenu className="text-3xl inline-flex md:hidden" onClick={toggleModal} />
      </div>
      {/* Hamburger Modal */}
      {isModalOpen && (
        <div
          id="backdrop"
          className="fixed top-0 left-0 w-full h-full bg-black/50 z-50 transition-opacity duration-1000 ease-in-out"
          onClick={closeModalOnOutsideClick}
          style={{ opacity: isModalOpen ? 1 : 0 }} // For smoother transition
        >
          <div className="bg-white w-3/4 h-full p-6 transform transition-all duration-500 ease-in-out" style={{ transform: isModalOpen ? "translateX(0)" : "translateX(-100%)" }}>
            <AiOutlineClose className="text-2xl mb-4 cursor-pointer" onClick={toggleModal} />
            <ul className="flex flex-col gap-6">
              <Link href="/" className={`text-base font-poppins ${pathname === '/' ? 'text-textsecondary1 font-semibold' : ''}`} onClick={toggleModal}>
                Home
              </Link>
              <Link href="/contact" className={`text-base font-poppins ${pathname === '/contact' ? 'text-textsecondary1 font-semibold' : ''}`} onClick={toggleModal}>
                Contact
              </Link>
              <Link href="/about" className={`text-base font-poppins ${pathname === '/about' ? 'text-textsecondary1 font-semibold' : ''}`} onClick={toggleModal}>
                About
              </Link>
              <Link href="/signup" className={`text-base font-poppins ${pathname === '/signup' ? 'text-textsecondary1 font-semibold' : ''}`} onClick={toggleModal}>
                Sign Up
              </Link>
            </ul>
          </div>
        </div>
      )}
    </div>)
  );
};

export default Header;
