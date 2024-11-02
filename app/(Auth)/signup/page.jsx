"use client";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import googleIcon from "@/assets/icons/Icon-Google.svg";
import authImage from "@/assets/images/authImage.svg";
import Link from "next/link";
import { BiError } from "react-icons/bi";

const Page = () => {
  const { register, handleSubmit, formState: { errors }, watch, reset } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState("");

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    reset()
  };

  // Get password value from form state
  const password = watch("password");

  useEffect(() => {
    if (password && password.length >= 6) {
      // Check if the password contains uppercase, lowercase, number, and symbol
      const hasUppercase = /[A-Z]/.test(password);
      const hasLowercase = /[a-z]/.test(password);
      const hasNumber = /\d/.test(password);
      const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  
      if (hasUppercase && hasLowercase && hasNumber && hasSymbol) {
        setPasswordStrength("strong");
      } else if (
        (hasUppercase && hasLowercase) ||
        (hasUppercase && hasNumber) ||
        (hasLowercase && hasNumber)
      ) {
        setPasswordStrength("medium");
      } else {
        setPasswordStrength("weak");
      }
    } else {
      setPasswordStrength("");  // Reset if password is less than 6 characters
    }
  }, [password]);
  
  
  return (
    <div className="w-full h-full flex flex-col lg:flex-row lg:min-h-[700px] cursor-grab">
      {/* left image */}
      <div className="w-full lg:w-1/2 h-[200px] lg:h-full">
        <Image
          src={authImage}
          alt="auth image"
          className="w-full h-full lg:h-[700px] object-cover"
        />
      </div>
      {/* right content */}
      <div className="w-full lg:w-1/2 h-full lg:px-10 lg:min-h-[700px] flex justify-center py-6">
        <div className="lg:max-w-[371px] w-full px-[5%] lg:px-0 flex flex-col justify-center gap-10">
          <div className="w-full text-center lg:text-left">
            <h1 className="font-inter font-medium text-2xl sm:text-3xl lg:text-4xl text-black">
              Create an account
            </h1>
            <p className="font-poppins text-sm sm:text-base font-normal">
              Enter your details below
            </p>
          </div>
          <form className="w-full grid gap-6 lg:gap-8 lg:min-w-[371px]" onSubmit={handleSubmit(onSubmit)}>
            <label>
              <input
                type="text"
                placeholder="Name"
                className="border-b py-2 border-black w-full font-poppins focus:outline-none focus:border-b-hover focus:border-b-2"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && <span className="text-red-500 text-sm flex items-center "><BiError/>{errors.name.message}</span>}
            </label>
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
              {errors.email && <span className="text-red-500 text-sm flex items-center "><BiError/>{errors.email.message}</span>}
            </label>
            <label className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="border-b py-2 border-black w-full font-poppins focus:outline-none focus:border-b-hover focus:border-b-2"
                maxLength= '16'
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 6, message: "Password must be at least 6 characters long" },
                  maxLength: { value: 16, message: "Password must not exceed 16 characters" },
                })}
              />
              <span
                className="text-gray-500 text-sm cursor-pointer absolute right-0 top-2"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "hide" : "show"}
              </span>
              {errors.password && <span className="text-red-500 text-sm flex items-center "><BiError/> {errors.password.message}</span>}

              {/* Password strength indicator */}
              {passwordStrength && (
                <div className="flex items-center mt-2 gap-1">
                  <span
                    className={`p-2 px-6 rounded ${
                      passwordStrength === "strong"
                        ? "bg-green-500"
                        : passwordStrength === "medium"
                        ? "bg-yellow-500"
                        : "bg-red-500"
                    }`}
                  ></span>
                  {passwordStrength && 
                  <span className="text-sm text-black">{passwordStrength} password</span>
                  }
                </div>
              )}
            </label>
            <div className="grid gap-4">
              <button
                type="submit"
                className="w-full h-[56px] text-white font-poppins font-medium bg-bgsecondary hover:bg-hover transition-all duration-300 ease-in-out rounded"
              >
                Create an Account
              </button>
              <button className="h-[56px] w-full border-black/40 border rounded flex justify-center items-center gap-4 font-poppins text-black">
                <Image src={googleIcon} alt="googleIcon" />
                Sign up with Google
              </button>
            </div>
          </form>
          <p className="font-poppins text-center w-full">
            Already have an account?{" "}
            <Link href="/login" className="font-medium">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;