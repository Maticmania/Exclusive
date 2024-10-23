import Image from "next/image";
import phoneIcon from "@/assets/icons/icons-phone.svg";
import mailIcon from "@/assets/icons/icons-mail.svg";
import { contact } from "../db/page";
const page = () => {
  return (
    <div className="w-full px-[5%] min-h-screen">
      <p className="poppins">Home / Contact</p>
      <div className="flex flex-col md:flex-row w-full gap-5 h-full md:max-h-[457px]">
        {contact.map((contact, i) => (
          <div
            className="w-full lg:w-[30%] md:w-[40%] p-[5%] md:p-[3%] rounded shadow-custom-light flex flex-col  gap-4 md:gap-8  "
            key={i}
          >
            <div className="font-poppins grid gap-4 text-center md:text-left ">
              <div className="flex items-center gap-3 w-full justify-center md:justify-start">
                <Image src={phoneIcon} alt="phone" />
                <span className="font-medium font-poppins">Call To us</span>
              </div>
              <p className="text-[12px] sm:text-sm">
                We are available 24/7, 7 days a week
              </p>
              <p className="text-[12px] sm:text-sm">Phone {contact.phone}</p>
            </div>
            <span className="bg-gray-400 w-full h-[1px]"></span>
            <div className="grid gap-4 text-center md:text-left">
              <div className="flex items-center gap-3 w-full justify-center md:justify-start">
                <Image src={mailIcon} alt="mail" />
                <span className="font-medium font-poppins">Write To Us</span>
              </div>
              <p className="text-sm">
                Fill out our form and we will contact you within 24 hours.
              </p>
              <p className="text-[12px] sm:text-sm">Email: {contact.email}</p>
              <p className="text-[12px] sm:text-sm">Email: {contact.support}</p>
            </div>
          </div>
        ))}
        <div className="w-full md:w-[70%] shadow-custom-light p-[3%] rounded">
          <form className="grid gap-8">
            <div className="grid gap-4 grid-cols-2 lg:grid-cols-3">
              <input
                type="text"
                className="rounded bg-input font-poppins p-2 text-black text-sm outline-none col-span-1"
                name="Name"
                placeholder="Your Name *"
              />
              <input
                type="email"
                className="rounded bg-input font-poppins p-2 text-black text-sm outline-none"
                name="Email"
                placeholder="Your Email *"
              />
              <input
                type="tel"
                className="rounded bg-input font-poppins p-2 text-black text-sm outline-none col-span-2 lg:col-span-1"
                name="Name"
                placeholder="Your Phone *"
              />
            </div>
            <textarea
              type="text"
              className="rounded w-full bg-input font-poppins p-2 text-black text-sm outline-none min-h-[207px] max-h-[207px] "
              name="Name"
              placeholder="Your Message *"
            />
            <div className="flex justify-end w-full">
            <button type="submit" className="w-full lg:max-w-[30%]  bg-textsecondary1 text-white font-medium font-poppins p-2 rounded">
              Send Message
            </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
