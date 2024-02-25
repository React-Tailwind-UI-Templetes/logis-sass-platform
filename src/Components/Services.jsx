import React from "react";

// react icons
import { FaLongArrowAltRight } from "react-icons/fa";

const Services = () => {
  const cardsData = [
    {
      icon: "/Service_icons/icon_1.png",
      title: "Offending belonging",
      description:
        "Letter of on become he tended active enable to. Vicinity relation sensible sociable surprise screened no up as.",
    },
    {
      icon: "/Service_icons/icon_2.png",
      title: "Promotion & provision",
      description:
        "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address. ",
    },
    {
      icon: "/Service_icons/icon_3.png",
      title: "Blessing application",
      description:
        "Ham windows sixteen who inquiry fortune demands. Is be upon sang fond must shew. Really boy law county she unable her sister.",
    },
  ];

  return (
    <section className="w-full max-w-[1400px] mx-auto mt-[5rem] md:mt-[28rem] relative">
      <img
        src="/service_vector.png"
        alt="service_vector"
        className="w-full md:h-[900px] h-[1350px]"
      />

      {/* top image */}
      <div className=" absolute top-[-50px] md:top-[-200px] left-[40px] md:left-[260px] md:w-[800px] w-[300px]">
        <div className="w-full h-full relative">
          <img
            src="/service_img.png"
            alt="service_image"
            className="w-full h-full object-cover"
          />
          <div className=" w-full h-full text-[#FFFFFF] absolute top-0 left-0 bg-[#00000049] flex items-center justify-center flex-col text-center">
            <h2 className="font-[600] text-[20px] md:text-[40px]">
              Push your product to next level.
            </h2>
            <p className="text-[12px] md:text-[18px] font-[400] w-full md:w-[70%] md:mb-8 mb-4">
              End-to-end payments and financial management in a single solution.
              Meet the right platform to help realize.
            </p>
            <button className="md:py-3 md:px-10 px-6 py-1 rounded-full text-[16px] bg-brandColor text-[#fff]">
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* heading text */}
      <div className=" absolute top-[150px] md:top-[250px] left-[5px] md:left-[300px] flex items-center flex-col md:w-[700px]">
        <h2 className="text-[25px] md:text-[40px] font-[600] text-center">
          We help your business grow faster.
        </h2>
        <p className="text-[16px] md:text-[20px] font-[400] text-[#64607D] w-full md:w-[80%] text-center">
          Why kept very ever home mrs. Considered sympathize ten uncommonly
          occasional assistance sufficient.
        </p>
      </div>

      {/* cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 absolute top-[320px] md:top-[450px] left-0 px-6">
        {cardsData?.map((card, index) => (
          <div
            key={index}
            className="w-full bg-[#FFFFFF] rounded-md p-6 hover:shadow-lg transition-all duration-300 cursor-pointer"
          >
            <img src={card.icon} alt={card.title} className="mb-4" />
            <h2 className="text-[24px] font-[600]">{card.title}</h2>
            <p className="font-[400] text-[16px] text-[#64607D] mt-2 mb-4">
              {card.description}
            </p>
            <span className="text-[#01966B] flex items-center gap-2 cursor-pointer group">
              Read More
              <FaLongArrowAltRight className="group-hover:ml-2 transition-all duration-300" />
            </span>
          </div>
        ))}
      </div>

      <button className=" absolute bottom-[10px] left-[90px] md:left-[550px] mdL:py-3 md:px-10 py-2 px-8 rounded-md text-[16px] bg-brandColor text-[#fff]">
        More About Platform
      </button>
    </section>
  );
};

export default Services;
