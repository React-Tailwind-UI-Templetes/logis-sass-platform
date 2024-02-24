import React from "react";

const Clients = () => {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-6 text-center">
      <h2 className=" text-textColor text-[18px] md:text-[22px] font-[500] my-5">
        Over 32k+ software businesses growing with LOGIS
      </h2>
      <div className="clients flex items-center gap-16 overflow-x-scroll">
        <img src="/Clients/client-1.png" alt="client_image" />
        <img src="/Clients/client-2.png" alt="client_image" />
        <img src="/Clients/client-3.png" alt="client_image" />
        <img src="/Clients/client-4.png" alt="client_image" />
        <img src="/Clients/client-5.png" alt="client_image" />
        <img src="/Clients/client-6.png" alt="client_image" />
        <img src="/Clients/client-7.png" alt="client_image" />
      </div>
    </section>
  );
};

export default Clients;
