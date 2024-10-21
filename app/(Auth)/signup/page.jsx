"use client";
import { useState } from "react";
import Image from "next/image";
import googleIcon from "@/assets/icons/icon-google.svg";
import authImage from "@/assets/images/authImage.svg";
import Link from "next/link";

const page = () => {
  const [showPassword, setshowPassword] = useState(false);
  return (
    <div className="w-full h-full flex min-h-[700px] flex-row-reverse">
      {/* left image */}
      <div className="w-1/2 h-full">
        <Image
          src={authImage}
          alt="auth image"
          className="w-full h-[700px] object-cover"
        />
      </div>
      {/* right content */}
      <div className="w-1/2 h-full px-10 min-h-[700px] flex justify-center">
        <div className="max-w-[371px] flex flex-col justify-center gap-10">
          <div className="w-full">
            <h1 className="font-inter font-medium text-4xl text-black">
              Create an account
            </h1>
            <p className="font-poppins text-base font-normal">
              Enter your details below
            </p>
          </div>
          <form className="w-full grid gap-10 min-w-[371px]">
            <label htmlFor="">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="border-b py-2 border-black w-full font-poppins focus:border-b-hover focus:border"
              />
            </label>
            <label htmlFor="">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="border-b py-2 border-black w-full font-poppins"
              />
            </label>
            <label htmlFor="" className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                className="border-b py-2 border-black w-full font-poppins"
              />
              <span className="text-gray-500 text-sm cursor-pointer absolute right-0 top-2" 
                onClick={() => setshowPassword(!showPassword)}
                >
                {showPassword ? "hide" : "show"}
              </span>
            </label>
            <div className="grid gap-4">
              <button
                type="submit"
                className="w-full h-[56px] text-white font-poppins font-medium bg-bgsecondary hover:bg-hover transistion-all duration-300 ease-in-out  rounded"
              >
                Create an Account{" "}
              </button>
              <button className="h-[56px] w-full border-black/40 border rounded flex justify-center items-center gap-4 font-poppins text-black">
                <Image src={googleIcon} alt="googleIcon" />
                Sign up with Google
              </button>
            </div>
          </form>
          <p className="font-poppins text-center w-full">
            Already have account?{" "}
            <Link href="/login" className="font-medium">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
