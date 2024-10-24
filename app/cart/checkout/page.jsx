'use client'

import Image from "next/image";
import { useForm } from "react-hook-form";

const CheckoutPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <div className="w-full px-[5%] mb-20 font-poppins">
      <p className="pt-10 text-sm text-gray-500">Home / Cart / Checkout</p>
      
      <h1 className="text-3xl font-inter font-bold my-8">Checkout</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Billing Details Form */}
        <div>
          <h2 className="text-2xl font-inter font-semibold mb-4">Billing Details</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <input
                {...register("firstName", { required: "First name is required" })}
                placeholder="First Name*"
                className="w-full p-2 border rounded"
              />
              {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
            </div>
            <div>
              <input
                {...register("companyName")}
                placeholder="Company Name"
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <input
                {...register("streetAddress", { required: "Street address is required" })}
                placeholder="Street Address*"
                className="w-full p-2 border rounded"
              />
              {errors.streetAddress && <p className="text-red-500 text-sm">{errors.streetAddress.message}</p>}
            </div>
            <div>
              <input
                {...register("apartment")}
                placeholder="Apartment, suite, unit, etc. (optional)"
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <input
                {...register("townCity", { required: "Town/City is required" })}
                placeholder="Town/City*"
                className="w-full p-2 border rounded"
              />
              {errors.townCity && <p className="text-red-500 text-sm">{errors.townCity.message}</p>}
            </div>
            <div>
              <input
                {...register("phoneNumber", { required: "Phone number is required" })}
                placeholder="Phone Number*"
                className="w-full p-2 border rounded"
              />
              {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber.message}</p>}
            </div>
            <div>
              <input
                {...register("emailAddress", { 
                  required: "Email address is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address"
                  }
                })}
                placeholder="Email Address*"
                className="w-full p-2 border rounded"
              />
              {errors.emailAddress && <p className="text-red-500 text-sm">{errors.emailAddress.message}</p>}
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                {...register("saveInfo")}
                id="saveInfo"
                className="mr-2"
              />
              <label htmlFor="saveInfo" className="text-sm">Save this information for faster check-out next time</label>
            </div>
          </form>
        </div>

        {/* Order Summary */}
        <div>
          <h2 className="text-2xl font-inter font-semibold mb-4">Order Summary</h2>
          <div className="bg-gray-100 p-6 rounded">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <Image src="/placeholder.svg" alt="LCD Monitor" width={80} height={80} className="mr-4" />
                <span>LCD Monitor</span>
              </div>
              <span>$650</span>
            </div>
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <Image src="/placeholder.svg" alt="H1 Gamepad" width={80} height={80} className="mr-4" />
                <span>H1 Gamepad</span>
              </div>
              <span>$1100</span>
            </div>
            <div className="border-t border-gray-300 pt-4">
              <div className="flex justify-between mb-2">
                <span>Subtotal:</span>
                <span>$1750</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping:</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between font-semibold">
                <span>Total:</span>
                <span>$1750</span>
              </div>
            </div>
            <div className="mt-6">
              <div className="flex items-center mb-4">
                <input type="radio" id="bank" name="paymentMethod" className="mr-2" />
                <label htmlFor="bank">Bank</label>
              </div>
              <div className="flex items-center">
                <input type="radio" id="cash" name="paymentMethod" className="mr-2" />
                <label htmlFor="cash">Cash on delivery</label>
              </div>
            </div>
            <div className="mt-6 flex">
              <input
                type="text"
                placeholder="Coupon Code"
                className="flex-grow p-2 border rounded-l"
              />
              <button className="bg-red-500 text-white px-4 py-2 rounded-r">Apply Coupon</button>
            </div>
            <button
              onClick={handleSubmit(onSubmit)}
              className="w-full bg-red-500 text-white py-3 rounded mt-6 font-semibold"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;