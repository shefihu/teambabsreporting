import React from "react";
import babs from "../../assets/images/babs.JPG";
const MoreAbout = () => {
  return (
    <div className="">
      <div className="w-full h-full py-10 md:flex hidden">
        <div className="w-full xl:max-w-[85rem] h-[40rem] py-4 px-4 mt-10 border-t border-b border-t-black border-b-black mx-auto">
          <div className="w-full mt-7 xl:h-[13rem] lg:h-[13rem]  items-center md:flex hidden justify-between">
            <div className="xl:w-[30%] lg:w-[40%] h-full xl:text-5xl lg:text-5xl font-bold">
              <h1>Together we are strong</h1>
            </div>
            <div className="xl:w-[50%] lg:w-[50%] h-full flex flex-col justify-between">
              <h5 className="xl:text-3xl lg:text-2xl">
                Our crew is always getting bigger, but we all work toward one
                goal: to provide information and news to student in Nigeria
                Universities.{" "}
              </h5>
              <h6 className="xl:text-lg lg:text-base font-bold">
                To build a site that gives student the team that provide
                information to create a happy relationship with the universities
                and the student To build a site that gives student the team that
                provide information to cr{" "}
              </h6>
            </div>
          </div>
          <div className="w-full lg:flex hidden justify-between items-center h-[18rem]  mt-20">
            <div className="w-[16rem] h-[5rem] justify-between items-center  flex">
              <div className=" w-[5rem] h-full rounded-full overflow-hidden bg-gray-200">
                <img src={babs} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="w-[10rem] space-y-3">
                <h4 className="text-[15px] font-bold">Salaudeen Ashiri Babs</h4>
                <h4 className="text-sm">Chief Editor</h4>
              </div>
            </div>
            <div className="w-[60%] xl:text-[39px] lg:text-[30px] font-bold h-full flex items-center">
              “Babs is an online outlet that is tasked with the responsibility
              of bringing you timely and up to date information in the academic
              sphere.”
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full md:hidden px-3  flex">
        <div className="w-full h-full">
          <div className="w-full h-full py-5 border-b border-b-black">
            <div className="w-[60%] h-20">
              <h1 className="text-[30px] font-bold">Together we’re strong</h1>
            </div>
            <p className="text-[20px] font-bold mt-7">
              Our crew is always getting bigger, but we all work toward one
              goal: to provide information and news to student in Nigeria
              Universities.{" "}
            </p>
          </div>
          <div className="w-full flex flex-col items-center px-3">
            <p className="text-[20px] text-center font-bold mt-7">
              “Babs is an online outlet that is tasked with the responsibility
              of bringing you timely and up to date information in the academic
              sphere.”
            </p>
            <div className="w-[16rem] h-[5rem] mt-10 justify-between items-center  flex">
              <div className=" w-[5rem] h-full rounded-full overflow-hidden bg-gray-200">
                <img src={babs} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="w-[10rem] space-y-3">
                <h4 className="text-[15px] font-bold">Salaudeen Ashiri Babs</h4>
                <h4 className="text-sm">Chief Editor</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreAbout;
