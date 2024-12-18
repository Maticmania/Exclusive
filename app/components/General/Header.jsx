"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
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

  // Close modal when clicking outside
  const closeModalOnOutsideClick = (e) => {
    if (e.target.id === "backdrop") {
      setIsModalOpen(false);
    }
  };

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  return (
    <div className="h-[80px] border-b-[0.005rem] border-black/30 w-full px-[5%] flex justify-between items-center bg-[#ffffff]">
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
        <label htmlFor="search" className="relative hidden lg:inline-flex">
          <input
            type="text"
            id="search"
            name="search"
            className="min-w-[243px] max-w-[243px] h-[38px] rounded px-3 text-[12px] border-0 bg-[#F5F5F5] text-black font-poppins"
            placeholder="What are you looking for?"
          />
          <span className="absolute font-bold top-2 right-4">
            <Image src={searchicon} alt="Search icon" />
          </span>
        </label>
        <Link href="/wishlist" className={`${pathname === '/login' || pathname === '/signup' ? "hidden" : "flex"}`}>
          <Image
            src={wishlist}
            className="hidden md:inline-flex"
            alt="Wishlist icon"
          />
        </Link>
        <Image
          src={searchicon}
          className="inline-flex lg:hidden"
          alt="Search icon"
        />
        <Link href="/cart" className={`${pathname === '/login' || pathname === '/signup' ? "hidden" : "flex"}`}>
          <Image src={cartIcon} alt="Cart icon" />
        </Link>
        <button
          aria-label="Open menu"
          className="text-3xl inline-flex md:hidden"
          onClick={toggleModal}
        >
          <RxHamburgerMenu />
        </button>
      </div>

      {/* Hamburger Modal */}
      <div
        id="backdrop"
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 ${
          isModalOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeModalOnOutsideClick}
      >
        <div
          className={`fixed top-0 left-0 w-3/4 h-full bg-white p-6 transform transition-transform duration-300 ease-in-out ${
            isModalOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <button
            aria-label="Close menu"
            className="text-2xl mb-4 cursor-pointer"
            onClick={toggleModal}
          >
            <AiOutlineClose />
          </button>
          <nav>
            <ul className="flex flex-col gap-6">
              <li>
                <Link href="/" className={`text-base font-poppins ${pathname === '/' ? 'text-textsecondary1 font-semibold' : ''}`} onClick={toggleModal}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/contact" className={`text-base font-poppins ${pathname === '/contact' ? 'text-textsecondary1 font-semibold' : ''}`} onClick={toggleModal}>
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/about" className={`text-base font-poppins ${pathname === '/about' ? 'text-textsecondary1 font-semibold' : ''}`} onClick={toggleModal}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/signup" className={`text-base font-poppins ${pathname === '/signup' ? 'text-textsecondary1 font-semibold' : ''}`} onClick={toggleModal}>
                  Sign Up
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;