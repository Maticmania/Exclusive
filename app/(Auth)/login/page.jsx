"use client";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Image from "next/legacy/image";
import authImage from "@/assets/images/authImage.svg";
import Link from "next/link";
import { BiError } from "react-icons/bi";

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
  };

  return (
    (<div className="w-full h-full flex flex-col lg:flex-row-reverse lg:min-h-[700px] cursor-grab">
      {/* left image */}
      <div className="w-full lg:w-1/2 h-[200px] lg:h-full">
        <Image
          src={authImage}
          alt="auth image"
          className="w-full h-full lg:h-[700px] object-cover"
          style={{
            maxWidth: "100%",
            height: "auto"
          }} />
      </div>
      {/* right content */}
      <div className="w-full lg:w-1/2 h-full lg:px-10 lg:min-h-[700px] flex justify-center py-6">
        <div className="lg:max-w-[371px] w-full px-[5%] lg:px-0 flex flex-col justify-center gap-10">
          <div className="w-full space-y-2 text-center lg:text-left">
            <h1 className="font-inter font-medium text-2xl sm:text-3xl lg:text-4xl text-black">
              Log in to Exclusive
            </h1>
            <p className="font-poppins text-sm sm:text-base font-normal">
              Enter your details below
            </p>
          </div>
          <form
            className="w-full grid gap-6 lg:gap-8 lg:min-w-[371px]"
            onSubmit={handleSubmit(onSubmit)}
          >
            <label>
              <input
                type="email"
                placeholder="Email"
                className="border-b py-2 border-black w-full font-poppins focus:outline-none focus:border-b-hover focus:border-b-2"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Please enter a valid email",
                  },
                })}
              />
              {errors.email && (
                <span className="text-red-500 text-sm flex items-center ">
                  <BiError />
                  {errors.email.message}
                </span>
              )}
            </label>
            <label className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="border-b py-2 border-black w-full font-poppins focus:outline-none focus:border-b-hover focus:border-b-2"
                maxLength="16"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters long",
                  },
                  maxLength: {
                    value: 16,
                    message: "Password must not exceed 16 characters",
                  },
                })}
              />
              <span
                className="text-gray-500 text-sm cursor-pointer absolute right-0 top-2"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "hide" : "show"}
              </span>
              {errors.password && (
                <span className="text-red-500 text-sm flex items-center ">
                  <BiError /> {errors.password.message}
                </span>
              )}
            </label>
            <div className="flex justify-between">
              <button
                type="submit"
                className="w-2/5 h-[50px] text-white font-poppins font-medium bg-bgsecondary hover:bg-hover transition-all duration-300 ease-in-out rounded"
              >
                Log in
              </button>
              <button className="font-poppins text-textsecondary1">
                Forget Password?
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>)
  );
};

export default Page;
