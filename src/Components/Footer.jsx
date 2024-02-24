import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaSkype,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="w-full mx-auto max-w-[1400px] pt-16 pb-6 px-6 flex justify-between md:flex-row flex-col gap-8">
        <div className="w-full md:w-[30%]">
          <h1 className="text-[21px] font-[600] text-textColor">LOGIS</h1>
          <p className="mt-3">
            Simple innate summer fat appear bas innate summer fat appear basket
            his desire joy.fat appear basket his desire joy.
          </p>
          <div className="flex items-center gap-4 mt-6">
            <FaFacebookF className="p-2 text-[2rem] bg-brandColor text-white rounded-full" />
            <FaInstagram className="p-2 text-[2rem] bg-brandColor text-white rounded-full" />
            <FaLinkedinIn className="p-2 text-[2rem] bg-brandColor text-white rounded-full" />
            <FaSkype className="p-2 text-[2rem] bg-brandColor text-white rounded-full" />
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-[21px] font-[600]">Company</h2>
          <p className="hover:text-brandColor cursor-pointer transition-all duration-300">
            About Us
          </p>
          <p className="hover:text-brandColor cursor-pointer transition-all duration-300">
            Carear
          </p>
          <p className="hover:text-brandColor cursor-pointer transition-all duration-300">
            Blog
          </p>
          <p className="hover:text-brandColor cursor-pointer transition-all duration-300">
            Pricing
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-[21px] font-[600]">Resources</h2>
          <p className="hover:text-brandColor cursor-pointer transition-all duration-300">
            Templates
          </p>
          <p className="hover:text-brandColor cursor-pointer transition-all duration-300">
            Free Templates
          </p>
          <p className="hover:text-brandColor cursor-pointer transition-all duration-300">
            Tuitorials
          </p>
          <p className="hover:text-brandColor cursor-pointer transition-all duration-300">
            Contract templates
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-[21px] font-[600]">Join Our Newsletter</h2>
          <div className=" relative w-full">
            <input
              type="text"
              name=""
              id=""
              placeholder="Your email address"
              className="py-3 px-6 bordeno focus:outline-none bg-[#f3f3f3] w-full"
            />
            <button className="px-8 h-full absolute top-0 right-0 bg-[#00E1F0] text-textColor">
              Subscribe
            </button>
          </div>
          <p className="w-[70%]">
            * Will send you weekly updates for your better finance management.
          </p>
        </div>
      </footer>
      <div className="w-full h-[2px] bg-[#E5E5EA]"></div>
      <p className=" text-center py-6">
        Copyright <b>@ react-tailwind-ui 2024.</b> All Rights Reserved.
      </p>
    </>
  );
};

export default Footer;
