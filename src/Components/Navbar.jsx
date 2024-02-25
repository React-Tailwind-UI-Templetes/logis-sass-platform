import React, { useEffect, useState } from "react";

// react icons
import { MdKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        scrolling && "backdrop-blur-lg shadow-md sticky"
      } z-50 w-full max-w-[1400px] transition-all duration-300 mx-auto hidden md:flex items-center justify-between py-4 px-6 absolute top-0 left-0`}
    >
      <h1 className="text-[25px] font-[600] text-textColor">LOGIS</h1>
      <ul className="flex items-center gap-6 list-none text-textColor text-[14px]">
        <li className="group relative overflow-hidden hover:overflow-visible">
          <a
            href="#"
            className="flex items-center gap-1 hover:text-brandColor transition-all duration-300"
          >
            Products
            <MdKeyboardArrowDown className="text-[1.5rem] group-hover:rotate-180 transition-all duration-300" />
          </a>
          <div className=" group-hover:flex group-hover:translate-y-0 translate-y-[50px] absolute top-[23px] left-0 bg-[#FFFFFF] p-6 w-[300px] rounded-md transition-all duration-300 flex-col gap-5">
            <li className=" cursor-pointer hover:tracking-wider transition-all duration-300 hover:text-brandColor">
              CRM
            </li>
            <li className=" cursor-pointer hover:tracking-wider transition-all duration-300 hover:text-brandColor">
              Webflow
            </li>
            <li className=" cursor-pointer hover:tracking-wider transition-all duration-300 hover:text-brandColor">
              Blog Builder
            </li>
            <li className=" cursor-pointer hover:tracking-wider transition-all duration-300 hover:text-brandColor">
              Email Marketing
            </li>
            <li className=" cursor-pointer hover:tracking-wider transition-all duration-300 hover:text-brandColor">
              CMS Builder
            </li>
          </div>
        </li>
        <li className="group relative overflow-hidden hover:overflow-visible">
          <a
            href="#"
            className="flex items-center gap-1 hover:text-brandColor transition-all duration-300"
          >
            Templates{" "}
            <MdKeyboardArrowDown className="text-[1.5rem] group-hover:rotate-180 transition-all duration-300" />
          </a>
          <div className=" group-hover:flex group-hover:translate-y-0 translate-y-[50px] absolute top-[23px] left-0 bg-[#FFFFFF] p-6 w-[300px] rounded-md transition-all duration-300 flex-col gap-5">
            <li className=" cursor-pointer hover:tracking-wider transition-all duration-300 hover:text-brandColor">
              Website Templates
            </li>
            <li className=" cursor-pointer hover:tracking-wider transition-all duration-300 hover:text-brandColor">
              Software
            </li>
            <li className=" cursor-pointer hover:tracking-wider transition-all duration-300 hover:text-brandColor">
              Landing Pages
            </li>
            <li className=" cursor-pointer hover:tracking-wider transition-all duration-300 hover:text-brandColor">
              Portfolio Templates
            </li>
            <li className=" cursor-pointer hover:tracking-wider transition-all duration-300 hover:text-brandColor">
              Agency Templates
            </li>
          </div>
        </li>
        <li>
          <a
            href="#"
            className="hover:text-brandColor transition-all duration-300"
          >
            Blog
          </a>
        </li>
        <li>
          <a
            href="#"
            className="hover:text-brandColor transition-all duration-300"
          >
            Pricing
          </a>
        </li>
      </ul>

      <div className="flex items-center gap-3">
        <button className="py-1.5 px-5">Sign in</button>

        <button className="py-2 px-5 border border-brandColor bg-brandColor hover:bg-transparent transition-all text-[#fff] hover:text-brandColor duration-300 outline-none rounded">
          Start Free
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
