import React, { useEffect, useState } from "react";

// react icons
import { MdKeyboardArrowDown } from "react-icons/md";
import { CiMenuFries } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";

const MobileNav = () => {
  const [scrolling, setScrolling] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isProduct, setIsProduct] = useState(false);
  const [isTemplates, setIsTemplates] = useState(false);

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
    <>
      <nav
        className={`${
          scrolling && "backdrop-blur-lg shadow-md"
        } z-50 md:hidden w-full max-w-[1400px] transition-all duration-300 mx-auto flex items-center justify-between py-4 px-6 fixed top-0 left-0`}
      >
        <h1 className="text-[25px] font-[600] text-textColor">LOGIS</h1>

        <CiMenuFries
          className="text-[1.5rem] text-textColor"
          onClick={() => setIsActive(true)}
        />
      </nav>

      {isActive && (
        <>
          <ul
            className={`flex flex-col gap-9 list-none text-textColor text-[14px] fixed top-0 right-[-300px] ${
              isActive && "!right-0"
            } transition-all duration-300 bg-[#FFFFFF] h-screen w-[70%] p-6 z-[1000]`}
          >
            <div className="w-full flex items-end justify-end">
              <RxCross1
                className="text-[1.2rem]"
                onClick={() => setIsActive(false)}
              />
            </div>
            <li
              className={`relative ${
                isProduct ? "overflow-visible" : "overflow-hidden "
              }`}
              onClick={() => setIsProduct(!isProduct)}
            >
              <a
                href="#"
                className="flex items-center gap-1 hover:text-brandColor transition-all duration-300"
              >
                Products
                <MdKeyboardArrowDown
                  className={`text-[1.5rem] ${
                    isProduct && "rotate-180"
                  } transition-all duration-300`}
                />
              </a>
              <div
                className={` ${
                  isProduct && "flex translate-y-0"
                } translate-y-[50px] z-50 absolute top-[23px] left-0 bg-[#FFFFFF] p-6 w-[300px] rounded-md transition-all duration-300 flex-col gap-5`}
              >
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
            <li
              className={`relative ${
                isTemplates ? "overflow-visible" : "overflow-hidden "
              }`}
            >
              <a
                href="#"
                className="flex items-center gap-1 hover:text-brandColor transition-all duration-300"
                onClick={() => setIsTemplates(!isTemplates)}
              >
                Templates
                <MdKeyboardArrowDown
                  className={`text-[1.5rem] ${
                    isTemplates && "rotate-180"
                  } transition-all duration-300`}
                />
              </a>
              <div
                className={` ${
                  isTemplates && "flex translate-y-0"
                } translate-y-[50px] z-50 absolute top-[23px] left-0 bg-[#FFFFFF] p-6 w-[300px] rounded-md transition-all duration-300 flex-col gap-5`}
              >
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
            <div className="flex items-center gap-3">
              <button className="py-1.5 px-5">Sign in</button>

              <button className="py-2 px-5 border border-brandColor bg-brandColor hover:bg-transparent transition-all text-[#fff] hover:text-brandColor duration-300 outline-none rounded">
                Start Free
              </button>
            </div>
          </ul>
        </>
      )}
    </>
  );
};

export default MobileNav;
