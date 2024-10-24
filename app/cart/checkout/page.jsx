"use client";

import { useForm } from "react-hook-form";
import monitor from  '@/assets/images/monitor.svg';
import cardImage from  '@/assets/images/bankCard.svg';
import Image from "next/image";

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <div className="w-full grid gap-10 px-[5%] mb-20 font-poppins ">
      <p className="pt-10 text-sm text-gray-500">Home / Cart / Checkout</p>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Billing Details Form */}
        <div>
          <h2 className="text-2xl font-inter font-semibold mb-4">
            Billing Details
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label htmlFor="firstName" className="font-poppins text-gray-500">
                First Name <span className="text-red-200">*</span>
                <input
                  {...register("firstName", {
                    required: "First name is required",
                  })}
                  className="w-full p-2 outline-none rounded bg-input text-black"
                />
              </label>
              {errors.firstName && (
                <p className="text-red-500 text-sm">
                  {errors.firstName.message}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="lastName" className="font-poppins text-gray-500">
                Last Name <span className="text-red-200">*</span>
                <input
                  {...register("lastName", {
                    required: "Last name is required",
                  })}
                  className="w-full p-2 outline-none rounded bg-input text-black"
                />
              </label>
              {errors.lastName && (
                <p className="text-red-500 text-sm">
                  {errors.lastName.message}
                </p>
              )}
            </div>
            <div>
            <label htmlFor="lastName" className="font-poppins text-gray-500">
            Street Address <span className="text-red-200">*</span>
              <input
                {...register("streetAddress", {
                  required: "Street address is required",
                })}
                className="w-full p-2 outline-none rounded bg-input text-black"
                />
              {errors.streetAddress && (
                <p className="text-red-500 text-sm">
                  {errors.streetAddress.message}
                </p>
              )}
              </label>
            </div>
            <div>
            <label htmlFor="lastName" className="font-poppins text-gray-500">
            Apartment, suite, unit, etc. (optional)              <input
                {...register("apartment")}
                className="w-full p-2 outline-none rounded bg-input text-black"
                />
                </label>
            </div>
            <div>
            <label htmlFor="lastName" className="font-poppins text-gray-500">
            Town/City <span className="text-red-200">*</span>
              <input
                {...register("townCity", { required: "Town/City is required" })}
                className="w-full p-2 outline-none rounded bg-input text-black"
                />
              {errors.townCity && (
                <p className="text-red-500 text-sm">
                  {errors.townCity.message}
                </p>
              )}
              </label>
            </div>
            <div>
            <label htmlFor="lastName" className="font-poppins text-gray-500">
            Phone Number <span className="text-red-200">*</span>
              <input
                {...register("phoneNumber", {
                  required: "Phone number is required",
                })}
                className="w-full p-2 outline-none rounded bg-input text-black"
                />
              {errors.phoneNumber && (
                <p className="text-red-500 text-sm">
                  {errors.phoneNumber.message}
                </p>
              )}
              </label>
            </div>
            <div>
            <label htmlFor="lastName" className="font-poppins text-gray-500">
            Email Address <span className="text-red-200">*</span>
              <input
                {...register("emailAddress", {
                  required: "Email address is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                className="w-full p-2 outline-none rounded bg-input text-black"
                />
              {errors.emailAddress && (
                <p className="text-red-500 text-sm">
                  {errors.emailAddress.message}
                </p>
              )}
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                {...register("saveInfo")}
                id="saveInfo"
                className="mr-2 checked:bg-red-500"
              />
              <label htmlFor="saveInfo" className="text-sm">
                Save this information for faster check-out next time
              </label>
            </div>
          </form>
        </div>

        {/* Order Summary */}
        <div>
          <h2 className="text-2xl font-inter font-semibold mb-4">
            Order Summary
          </h2>
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <Image
                  src={monitor}
                  alt="LCD Monitor"
                  width={80}
                  height={80}
                  className="mr-4"
                />
                <span>LCD Monitor</span>
              </div>
              <span>$650</span>
            </div>
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <Image
                  src={monitor}
                  alt="H1 Gamepad"
                  width={80}
                  height={80}
                  className="mr-4"
                />
                <span>H1 Gamepad</span>
              </div>
              <span>$1100</span>
            </div>
            <div className="divide-y divide-gray-300 pt-4">
              <div className="flex justify-between mb-2">
                <span>Subtotal:</span>
                <span>$1750</span>
              </div>
              <div className="flex justify-between py-2">
                <span>Shipping:</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between font-semibold mt-2">
                <span>Total:</span>
                <span>$1750</span>
              </div>
            </div>
            <div className="mt-6">
              <div className="flex items-center mb-4">
                <input
                  type="radio"
                  id="bank"
                  name="paymentMethod"
                  className="mr-2 "
                />
                <label htmlFor="bank">Bank Transfers</label>
              </div>
              <div className="flex items-center justify-between">
                <span>
                <input
                  type="radio"
                  id="cash"
                  name="paymentMethod"
                  className="mr-2"
                />
                <label htmlFor="cash">Credit or Debit card</label>
                </span>
                <Image src={cardImage} alt="bank card image" className="hidden lg:inline-flex" />
              </div>
            </div>
            <div className="mt-6 flex gap-4">
              <input
                type="text"
                placeholder="Coupon Code"
                className="w-1/2 p-2 border rounded-l"
              />
              <button className="bg-button2 text-white px-4 py-2 rounded-r w-1/2 hover:bg-hover">
                Apply Coupon
              </button>
            </div>
            <button
              onClick={handleSubmit(onSubmit)}
              className="w-full bg-button2 text-white py-3 rounded mt-6 font-semibold hover:bg-hover"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
