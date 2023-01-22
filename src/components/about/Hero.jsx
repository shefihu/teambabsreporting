import React from "react";
import about from "../../assets/images/about.png";
const Hero = () => {
  return (
    <div className="">
      <div className="md:flex hidden flex-col w-full h-full py-4 ">
        <div className="w-full xl:max-w-[85rem] lg:flex hidden h-full px-4 pt-40 mx-auto">
          <div className="w-full xl:h-[9rem] lg:h-[6rem]  items-center flex justify-between">
            <div className="xl:w-[40%] lg:w-[40%] h-full xl:text-5xl lg:text-3xl font-semibold">
              <h1>
                We build a connection between
                <span className="text-[#808080]">
                  &nbsp;the student and universities
                </span>
              </h1>
            </div>
            <div className="xl:w-[40%] lg:w-[50%] h-full flex items-end">
              <h6 className="xl:text-lg lg:text-base font-bold">
                To build a site that gives student the team that provide
                information to create a happy relationship with the universities
                and the student{" "}
              </h6>
            </div>
          </div>
        </div>
        <div className="w-full mt-20">
          <img src={about} alt="" className="w-full object-cover" />
        </div>
      </div>
      <div className="w-full h-full md:hidden flex px-3 ">
        <div className="w-full h-full py-4   pt-40 border-b border-b-black">
          <h1 className="text-center font-bold text-[32.6px]">
            We build a connection between
            <span className="text-[#808080]">
              &nbsp;the student and universities
            </span>
          </h1>
          <p className="text-[16px] text-center mt-5">
            To build a site that gives student the team that provide information
            to create a happy relationship with the universities and the student{" "}
          </p>
          <div className="w-full mt-6">
            <img src={about} alt="" className="w-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
