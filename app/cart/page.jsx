"use client";

import Image from "next/image";
import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import monitor from  '@/assets/images/Monitor.svg';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Component() {
  const [items, setItems] = useState([
    { id: 1, name: "LCD Monitor ", price: 850, quantity: 1 },
    { id: 2, name: "H1 Gamepad", price: 550, quantity: 2 },
  ]);

  const updateQuantity = (id, change) => {
    setItems(
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(0, item.quantity + change) }
          : item
      )
    );
  };

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const total = subtotal; // Assuming free shipping

  return (
    <div className="w-full px-[5%] mb-20 font-inter grid gap-10">
      <p className="pt-10 text-sm text-gray-500">Home / Cart</p>
      <div className="grid grid-cols-2 gap-6">
        <Card className="w-full col-span-2 py-2 px-6 hidden md:inline-flex">
          <ul className="w-full grid grid-cols-4 font-poppins text-base">
            <li>Product</li>
            <li className="text-center">Price</li>
            <li className="text-center">Quantity</li>
            <li className="text-end">Subtotal</li>
          </ul>
        </Card>
        <div className="space-y-6 col-span-2 font-poppins">
          {items.map((item) => (
            <Card
              key={item.id}
              className="grid grid-cols-3 gap-4 md:gap-0 md:grid-cols-4 px-6 py-2"
            >
              <div className="flex items-center gap-2 lg:gap-0 col-span-3 md:col-span-1  md:flex-col lg:flex-row  lg:items-center lg:space-x-4">
                <Image
                  src={monitor}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="rounded-md"
                />
                  <h3 className="sm:text-lg font-semibold leading-tight text-pretty md:text-center lg:text-left text-sm">{item.name}</h3>
              </div>
              <div className="place-content-center md:text-center">
               <p className="text-sm text-gray-500">${item.price}</p>
              </div>
                <div className="flex items-center justify-center">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => updateQuantity(item.id, -1)}
                    aria-label={`Decrease quantity of ${item.name}`}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="mx-2 w-8 text-center">{item.quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => updateQuantity(item.id, 1)}
                    aria-label={`Increase quantity of ${item.name}`}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              <div className="place-content-center text-end">
                <p className="font-semibold">${item.price * item.quantity}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="flex flex-wrap justify-between mt-6 gap-4 col-span-2 font-poppins font-medium">
          <Button variant="outline">Return To Shop</Button>
          <Button variant="outline">Update Cart</Button>
        </div>

        <div className="w-full col-span-2 flex flex-col md:flex-row justify-between font-poppins">
          <div className="mt-6 flex md:w-2/5 gap-4 ">
            <div className="flex-grow">
              <Input
                placeholder="Coupon Code"
                className="mb-2 sm:mb-0 sm:mr-2 font-poppins placeholder:text-gray-400"
              />
            </div>
            <Button className='bg-bgsecondary hover:bg-hover'>Apply Coupon</Button>
          </div>

          <div className="mt-6  md:w-2/5 font-poppins">
            <Card>
              <CardHeader>
                <CardTitle>Cart Total</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between mb-2">
                  <span>Subtotal:</span>
                  <span>${subtotal}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Shipping:</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between font-bold">
                  <span>Total:</span>
                  <span>${total}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-bgsecondary hover:bg-hover">Proceed to checkout</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}