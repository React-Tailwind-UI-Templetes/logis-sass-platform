import React from "react";

const DownloadApp = () => {
  return (
    <section className="w-full mx-auto max-w-[1400px] my-28 relative">
      <img
        src="/apps.png"
        alt="vector"
        className="md:w-auto w-full md:h-auto h-[500px]"
      />

      <div className=" absolute top-[80px] md:top-[180px] left-0 md:left-[120px] text-center flex items-center justify-center flex-col px-6">
        <h4 className="text-[12px] md:text-[14px] font-[500] text-brandColor">
          Project Management App
        </h4>
        <h1 className="text-[25px] md:text-[40px] font-[600] text-textColor w-full md:w-[60%] leading-tight">
          Download our app and start your free trail to get started today!
        </h1>
        <p className="text-[16px] md:text-[20px] text-[#64607D] font-[500] mt-4">
          End-to-end payments and financial management in a single solution.
        </p>

        <div className="flex items-center gap-5 mt-8">
          <button className="md:py-[1rem] md:px-14 py-[0.5rem] px-4 rounded-full text-[16px] bg-brandColor text-[#fff] flex items-center gap-2">
            <img src="/apple-logo.png" alt="apple logo" /> Playstore
          </button>
          <button className="md:py-[0.840rem] py-[0.350rem] md:px-10 px-4 rounded-full text-[16px] bg-[#05796B] text-[#fff] flex items-center gap-2">
            <img src="/google-play.png" alt="google play logo" /> Google Play
          </button>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
