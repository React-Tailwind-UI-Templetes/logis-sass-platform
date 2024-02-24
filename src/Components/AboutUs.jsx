import React from "react";

const AboutUs = () => {
  return (
    <section className="w-full max-w-[1400px] mx-auto pt-10 pb-96 md:pb-[19rem] md:py-24 mt-[3rem] relative overflow-hidden">
      <div className="pl-6 w-full md:w-[30%]">
        <h3 className="text-[14px] font-[500] text-brandColor">
          Stockie Operation Across the world
        </h3>
        <h1 className="text-[30px] md:text-[40px] font-[600] leading-tight">
          We have best team and best process
        </h1>
        <p className="text-[14px] md:text-[16px] text-[#64607D] mt-2 mb-6">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy.
        </p>
        <button className="md:py-3 md:px-10 py-2 px-8 rounded-full text-[16px] bg-brandColor text-[#fff]">
          Get Started
        </button>
      </div>
      <img
        src="/aboutus_shape.png"
        alt="aboutus_shape"
        className=" absolute top-[250px] md:top-[140px] left-[20px] md:w-[950px] w-[600px]"
      />
      <img
        src="/aboutus_vector.png"
        alt="aboutus_vector"
        className=" absolute w-[200px] md:w-[300px] top-[250px] md:top-[120px] md:right-0 right-[-100px] z-[-2]"
      />

      <div className=" absolute top-[360px] md:top-[460px] left-[20px] md:left-[150px]">
        <div className="md:w-[50px] md:h-[50px] w-[30px] h-[30px] bg-[#FFFFFF] rounded-full flex items-center justify-center mb-4">
          <div className="md:w-[20px] md:h-[20px] w-[10px] h-[10px] bg-[#C4C4C4] rounded-full"></div>
        </div>
        <div className=" relative md:w-[300px] w-[150px]">
          <h1 className="font-[900] md:text-[200px] text-[100px] text-[#f2f2f2] absolute md:top-[-150px] md:right-[0px] right-0 top-[-40px] z-[-1]">
            1
          </h1>
          <h3 className="md:text-[16px] text-[12px] font-[500] mb-3 text-textColor">
            Project Discovery Call
          </h3>
          <p className="text-[12px] md:text-[16px] text-[#64607D] z-50">
            From they fine john he give of rich he. They age and draw mrs like.
            Improving end distrusts may instantly.
          </p>
        </div>
      </div>

      <div className=" absolute top-[330px] md:top-[340px] left-[210px] md:left-[550px]">
        <div className="md:w-[50px] md:h-[50px] w-[30px] h-[30px] bg-[#FFFFFF] rounded-full flex items-center justify-center mb-4">
          <div className="md:w-[20px] md:h-[20px] w-[10px] h-[10px] bg-[#C4C4C4] rounded-full"></div>
        </div>
        <div className=" relative md:w-[300px] w-[150px]">
          <h1 className="font-[900] text-[100px] md:text-[200px] text-[#f2f2f2] absolute md:top-[-150px] top-[-40px] right-[0px] z-[-1]">
            2
          </h1>
          <h3 className="text-[12px] md:text-[16px] font-[500] mb-3 text-textColor">
            Project Discovery Call
          </h3>
          <p className="text-[12px] md:text-[16px] text-[#64607D] z-50">
            His defective nor convinced residence own. Connection has put
            impossible own apartments boisterous.
          </p>
        </div>
      </div>

      <div className=" absolute top-[240px] md:top-[120px] right-[-100px] md:right-[170px] ">
        <div className="w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-[#FFFFFF] rounded-full flex items-center justify-center mb-4">
          <div className="w-[10px] md:w-[20px] h-[10px] md:h-[20px] bg-[#C4C4C4] rounded-full"></div>
        </div>
        <div className=" relative md:w-[300px] w-[150px]">
          <h1 className="font-[900] text-[200px] text-[#f2f2f2] absolute top-[-40px] md:top-[-150px] right-[0px] z-[-1]">
            3
          </h1>
          <h3 className="text-[12px] md:text-[16px] font-[500] mb-3 text-textColor">
            Project Discovery Call
          </h3>
          <p className="text-[12px] md:text-[16px] text-[#64607D] z-50">
            From they fine john he give of rich he. They age and draw mrs like.
            Improving end distrusts may instantly.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
