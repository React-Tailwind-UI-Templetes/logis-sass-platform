import React from "react";

const ContactUs = () => {
  return (
    <section className="w-full max-w-[1400px] mx-auto py-16 px-6 md:px-24 items-center bg-[#05796B] mt-24 gap-8 flex justify-between md:flex-row flex-col">
      <div className="text-[#FFFFFF] w-full md:w-[40%]">
        <p className="text-[12px] md:text-[14px] font-[500]">Why Choose Us</p>
        <h2 className="text-[35px] md:text-[50px] font-[600] leading-tight mt-2">
          Track your crytpo portfolio on the best way possible
        </h2>
        <p className="text-[16px] md:text-[20px] font-[300] mt-4">
          Mean if he they been no hold mr. Is at much do made. Latter person am
          secure of estate genius at.
        </p>
      </div>

      <form action="#" className="flex flex-col gap-5 w-full md:w-[40%]">
        <input
          type="email"
          name=""
          id=""
          placeholder="Email address"
          className="py-3 w-full bg-[#349186] rounded-md px-4 focus:outline-none text-[#333]"
        />
        <input
          type="password"
          name=""
          id=""
          placeholder="Password"
          className="py-3 w-full bg-[#349186] rounded-md px-4 focus:outline-none text-[#333]"
        />
        <button
          type="submit"
          className="py-3 w-full bg-brandColor text-[#FFFFFF] rounded-md px-4"
        >
          get started
        </button>
      </form>
    </section>
  );
};

export default ContactUs;
