import React from "react";

const QuickView = () => {
  return (
    <section className="w-full max-w-[1400px] mx-auto my-16 md:my-24 px-6">
      <div className="border border-[#DEE1E6] rounded-md p-6 w-full md:w-[80%] mx-auto flex items-start gap-6 md:items-center justify-between flex-col md:flex-row">
        <h2 className="text-[20px] md:text-[30px] font-[600] w-full md:w-[30%]">
          Among leave law built now.
        </h2>
        <div className="flex gap-3">
          <img
            src="/quick_view/icon_1.png"
            alt="icon"
            className="bg-[#E9ECF2] p-2 rounded-md w-[50px] h-[50px]"
          />
          <div className="flex gap-1 flex-col">
            <p>Village did </p>
            <p>remov enjoyed</p>
          </div>
        </div>

        <div className="flex gap-3">
          <img
            src="/quick_view/icon_2.png"
            alt="icon"
            className="bg-[#E9ECF2] p-2 rounded-md w-[50px] h-[50px]"
          />
          <div className="flex gap-1 flex-col">
            <p>Nay likely </p>
            <p>length sooner</p>
          </div>
        </div>

        <div className="flex gap-3">
          <img
            src="/quick_view/icon_3.png"
            alt="icon"
            className="bg-[#E9ECF2] p-2 rounded-md w-[50px] h-[50px]"
          />
          <div className="flex gap-1 flex-col">
            <p>Expense windows</p>
            <p>adapted </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 w-full md:w-[70%] mx-auto">
        <div className="bg-[#F8F9FD] p-6 md:p-10 text-center">
          <h2 className="text-[22px] md:text-[35px] font-[600] leading-tight">
            Offend belong promote provision
          </h2>
          <p className="text-[12px] md:text-[16px] text-[#64607D] mt-2 mb-6">
            Wise busy past both park when an ye no. Nay likely her length sooner
            thrown sex lively income.
          </p>
          <button className="py-2 px-8 md:py-3 md:px-10 rounded-md text-[16px] bg-brandColor text-[#fff]">
            Read More
          </button>
        </div>

        <div className="bg-[#F8F9FD] p-6 md:p-10 text-center">
          <h2 className="text-[22px] md:text-[35px] font-[600] leading-tight">
            Consulted ourselves it blessing welcom
          </h2>
          <p className="text-[12px] md:text-[16px] text-[#64607D] mt-2 mb-6">
            The expense windows adapted sir. Wrong widen drawn ample eat off
            doors money.
          </p>
          <button className="md:py-3 md:px-10 py-2 px-8 rounded-md text-[16px] bg-brandColor text-[#fff]">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default QuickView;
