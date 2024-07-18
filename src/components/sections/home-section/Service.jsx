import React from "react";
import { Info } from "./data";

const Service = () => {
  return (
    <div className=" w-full bg-[#F1F1F1]">
      {/* Content */}
      <div className=" text-center mt-10">
          <h1 className=" text-[#006E6E] font-bold text-[35px] ">
          <span className="border-b-[2.5px] border-[#14676B]">Our</span>{" "}
          Services
        </h1>
        <p className="text-[20px] text-[#1d1d1d] lg:w-[620px] pt-4 pb-9  mx-auto">
          Explore our comprehensive import and export solutions. With us, your
          global ambitions are within reach.
        </p>
      </div>

      {/* Cards */}
      <div className="card container  md:w-[1300px] mx-auto">
        <div className=" text-[#1D1D1D] justify-between md:flex ">
          {Info.map((item) => (
            <div
              key={item.title}
              className="m-5 mb-10 bg-white w-[406px] mx-auto rounded shadow-md "
            >
              <img
                src={item.Image}
                alt={item.title}
                className="h-[276px] w-[406px] overflow-hidden"
              />
              <h2 className="text-center font-semibold text-[20px] text-[#006E6E] py-3">
                {item.title}
              </h2>
              <div className="w-[346px]  mx-auto text-[16px] pb-5">
                <p>{item.description}</p>
              </div>
              <div className="flex justify-end">
                <button className="bg-[#006E6E] font-bold text-lg rounded-md text-white m-5 px-2.5 hover:bg-[#012e2e]">
                  READ MORE
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center pb-10">
        <button className="bg-[#006E6E] font-bold text-lg rounded-md text-white m-5 px-2.5 hover:bg-[#012e2e]">
        VIEW ALL SERVICES
        </button>
      </div>
    </div>
  );
};

export default Service;
