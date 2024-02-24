import React from "react";

const Testimonials = () => {
  return (
    <section className="w-full mx-auto max-w-[1400px] px-6 mt-24 overflow-hidden">
      <div className=" mx-auto text-center">
        <h4 className=" uppercase text-[12px] md:text-[14px] text-[#3734A9] font-[500]">
          Testimonials
        </h4>
        <h2 className="text-[25px] md:text-[40px] text-textColor font-[600]">
          Check what our clients are saying
        </h2>
      </div>

      {/* scroll section */}
      <div className="flex gap-24 md:gap-5 justify-between items-center mt-24 w-full md:w-[80%] mx-auto md:flex-row flex-col">
        <div className=" relative">
          <img
            src="/testimonial/top_vector.png"
            alt="vector_image"
            className=" absolute top-[-50px] left-[-50px] z-[-1]"
          />
          <img
            src="/testimonial/avatar.png"
            alt="avatar"
            className="w-[250px] md:w-[350px]"
          />
          <img
            src="/testimonial/bottom_vector.png"
            alt="vector_image"
            className="w-[80px] md:w-[120px] absolute bottom-[-70px] right-[-70px] z-[-1]"
          />

          {/* arrows */}
          <img
            src="/testimonial/left_arrow.png"
            alt="arrow"
            className="w-[50px] md:w-[100px] absolute top-1/2 left-[-20px] md:left-[-50px] "
          />
          <img
            src="/testimonial/right_arrow.png"
            alt="arrow"
            className="w-[50px] md:w-[100px] absolute top-1/2 right-[-20px] md:right-[-50px]"
          />
        </div>

        <div className="w-full md:w-[55%]">
          <img
            src="/testimonial/qoute.png"
            alt="qoute"
            className="mb-6 w-[20px] md:w-[50px]"
          />
          <img
            src="/testimonial/star.png"
            alt="star"
            className="w-[100px] md:w-[200px]"
          />
          <p className="text-[20px] md:text-[30px] font-[500] my-3">
            Is be upon sang fond must shew. Really boy law county she unable her
            sister. Feet you off its like like six. Among sex are leave law
            built now.
          </p>
          <h2 className="text-[18px] md:text-[20px] font-[500] mt-6">
            AR Shakir
          </h2>
          <p className="text-[14px] md:text-[16px] text-[#757095]">
            CEO GetNextDesign
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
