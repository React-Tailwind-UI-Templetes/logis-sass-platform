import React from "react";

// react icons
import { MdDone } from "react-icons/md";

const Hero = () => {
  return (
    <header className="w-full max-w-[1400px] mx-auto pt-24 md:pt-16 flex justify-center items-center relative flex-col md:flex-row">
      <img
        src="/hero_vector.png"
        alt="vector_image"
        className=" absolute top-0 left-0 w-[800px]"
      />
      <div className="pl-6 text-textColor z-30">
        <h4 className="text-[18px] md:text-[22px] font-[500]">
          Product Growth Solution in Single Platform.
        </h4>
        <h1 className="text-[45px] md:text-[60px] font-[600] leading-tight">
          Managing business payments has never been easier
        </h1>
        <p className="font-[400] text-[16px] md:text-[20px] w-[85%] text-[#757095] mt-3">
          Never at water me might. On formed merits hunted unable merely by mr
          whence or. Possession the unpleasing simplicity her uncommonly.
        </p>

        <div className="w-full md:w-[80%] bg-[#FFFFFF] relative p-4 mt-4">
          <label htmlFor="text" className="text-[0.9rem] text-[#ccc]">
            Register using email address
          </label>
          <br />
          <input
            type="text"
            name="text"
            id="text"
            className="w-full py-2 outline-none border-none"
            placeholder="react-tailwind-ui@gmail.com"
          />
          <button
            type="submit"
            className=" absolute top-[30px] right-0 py-3 px-10 bg-[#1B1C31] text-[#FFFFFF]"
          >
            Submit
          </button>
        </div>

        <div className="flex items-center justify-center md:justify-start gap-10 mt-5 text-[#757095]">
          <div className="flex items-center gap-2">
            <MdDone className="p-1 text-[1.2rem] rounded-full bg-brandColor text-[#fff]" />
            Free Register
          </div>
          <div className="flex items-center gap-2 text-[#757095]">
            <MdDone className="p-1 text-[1.2rem] rounded-full bg-brandColor text-[#fff]" />
            Great Service
          </div>
        </div>
      </div>

      <img
        src="/hero_img.png"
        alt="hero_image"
        className="w-full md:w-[700px] object-cover"
      />
    </header>
  );
};

export default Hero;
